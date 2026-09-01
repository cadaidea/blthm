import { createContext, useContext, useEffect, useReducer, useRef } from "react";
import type { ReactNode } from "react";
import type { AppState, EventItem, Order, OrderStatus, PayLink, Product, WorkOrder, WoStatus } from "./types";
import { seedState } from "./seed";
import { calcTotals, IVA, money, sriAuth, token, uid } from "./util";

const LS_KEY = "taller-uno-v1";

type Action = { type: string; [k: string]: any };

export interface Toast {
  id: string;
  kind: "ok" | "warn" | "info";
  msg: string;
}

interface StoreCtx {
  state: AppState;
  dispatch: (a: Action) => void;
  toasts: Toast[];
  toast: (msg: string, kind?: Toast["kind"]) => void;
  burst: (n: number) => Promise<number>;
  bursting: boolean;
}

const Ctx = createContext<StoreCtx | null>(null);

export const useStore = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("store missing");
  return c;
};

const mkEvent = (type: EventItem["type"], msg: string): EventItem => ({ id: uid(), ts: Date.now(), type, msg });

const woProgress: Record<WoStatus, number> = { planificada: 5, corte: 25, ensamblaje: 55, acabado: 78, qa: 90, terminada: 100 };
export const woFlow: WoStatus[] = ["planificada", "corte", "ensamblaje", "acabado", "qa", "terminada"];
export const orderFlow: OrderStatus[] = ["nuevo", "confirmado", "fabricacion", "listo", "despacho", "entregado"];

function reduce(s: AppState, a: Action): AppState {
  switch (a.type) {
    case "HYDRATE":
      return a.state;
    case "EVENTS": {
      const evs = a.events as EventItem[];
      return {
        ...s,
        events: [...evs, ...s.events].slice(0, 80),
        session: {
          ...s.session,
          events: s.session.events + evs.length,
          salesToday: a.salesDelta ? s.session.salesToday + a.salesDelta : s.session.salesToday,
          peakEps: a.eps && a.eps > s.session.peakEps ? a.eps : s.session.peakEps,
        },
      };
    }
    case "CREATE_ORDER": {
      const o = a.order as Order;
      const products = s.products.map((p) => {
        const item = o.items.find((i) => i.productId === p.id);
        if (!item) return p;
        return { ...p, stock: { ...p.stock, showroom: Math.max(0, p.stock.showroom - item.qty) } };
      });
      const seq = { ...s.settings.sequence, order: s.settings.sequence.order + 1 };
      return {
        ...s,
        products,
        orders: [o, ...s.orders],
        customers: s.customers.map((c) => (c.id === o.customerId ? { ...c, orders: c.orders + 1, total: c.total + o.total } : c)),
        movements: [
          ...o.items.map((i) => ({ id: uid(), ts: new Date().toISOString(), type: "egreso" as const, warehouse: "showroom" as const, productId: i.productId, sku: i.sku, productName: i.name, qty: i.qty, ref: o.code, user: "Paola C." })),
          ...s.movements,
        ].slice(0, 60),
        settings: { ...s.settings, sequence: seq },
        events: [mkEvent("venta", `Pedido ${o.code} creado · ${money(o.total)} · ${o.customer}`), ...s.events].slice(0, 80),
      };
    }
    case "ADVANCE_ORDER": {
      const id = a.id as string;
      const status = a.status as OrderStatus;
      const orders = s.orders.map((o) => (o.id === id ? { ...o, status } : o));
      const order = s.orders.find((o) => o.id === id)!;
      let invoices = s.invoices;
      let journal = s.journal;
      let extra: EventItem[] = [mkEvent("venta", `${order.code} pasó a ${status.toUpperCase()}`)];
      if (status === "entregado") {
        const number = `001-001-${String(s.settings.sequence.invoice).padStart(9, "0")}`;
        invoices = [{ id: uid(), number, auth: sriAuth(), customerId: order.customerId, customer: order.customer, date: new Date().toISOString(), base: order.subtotal, iva: order.iva, total: order.total, status: order.payment === "pagado" ? "pagada" : "por_cobrar", orderId: order.id }, ...invoices];
        journal = [
          { id: uid(), date: new Date().toISOString(), doc: number, account: order.payment === "pagado" ? "1020 Bancos Pichincha" : "1030 Cuentas por cobrar", detail: `Venta ${order.code}`, debit: order.total, credit: 0 },
          { id: uid(), date: new Date().toISOString(), doc: number, account: "4010 Ventas", detail: order.items.map((i) => i.name).join(", "), debit: 0, credit: order.subtotal },
          { id: uid(), date: new Date().toISOString(), doc: number, account: "2030 IVA por pagar", detail: "IVA 15% facturado", debit: 0, credit: order.iva },
          ...journal,
        ];
        extra = [...extra, mkEvent("factura", `Factura ${number} emitida y autorizada SRI`)];
        return { ...s, orders, invoices, journal, settings: { ...s.settings, sequence: { ...s.settings.sequence, invoice: s.settings.sequence.invoice + 1 } }, events: [...extra, ...s.events].slice(0, 80) };
      }
      return { ...s, orders, events: [...extra, ...s.events].slice(0, 80) };
    }
    case "ORDER_META":
      return { ...s, orders: s.orders.map((o) => (o.id === a.id ? { ...o, ...a.patch } : o)) };
    case "CREATE_PAYLINK": {
      const pl = a.link as PayLink;
      return {
        ...s,
        payLinks: [pl, ...s.payLinks],
        settings: { ...s.settings, sequence: { ...s.settings.sequence, link: s.settings.sequence.link + 1 } },
        events: [mkEvent("link", `Link de cobro generado · ${money(pl.amount)} · ${pl.customerName}`), ...s.events].slice(0, 80),
      };
    }
    case "PAY_LINK": {
      const id = a.id as string;
      const method = a.method as string;
      const last4 = a.last4 as string;
      const pl = s.payLinks.find((l) => l.id === id)!;
      const payLinks = s.payLinks.map((l) => (l.id === id ? { ...l, status: "pagado" as const, method, last4, authCode: String(Math.floor(10000000 + Math.random() * 89999999)) } : l));
      let orders = s.orders;
      let invoices = s.invoices;
      let journal = s.journal;
      let extra: EventItem[] = [mkEvent("pago", `PayPhone acreditó ${money(pl.amount)} · ${pl.concept}`)];
      if (pl.orderId) {
        orders = s.orders.map((o) => (o.id === pl.orderId ? { ...o, payment: "pagado" as const } : o));
        const number = `001-001-${String(s.settings.sequence.invoice).padStart(9, "0")}`;
        invoices = [{ id: uid(), number, auth: sriAuth(), customerId: "", customer: pl.customerName, date: new Date().toISOString(), base: Math.round((pl.amount / (1 + IVA)) * 100) / 100, iva: Math.round((pl.amount - pl.amount / (1 + IVA)) * 100) / 100, total: pl.amount, status: "pagada", orderId: pl.orderId }, ...invoices];
        journal = [
          { id: uid(), date: new Date().toISOString(), doc: number, account: "1020 Bancos Pichincha", detail: `Cobro PayPhone ${method} •••• ${last4}`, debit: pl.amount, credit: 0 },
          { id: uid(), date: new Date().toISOString(), doc: number, account: "4010 Ventas", detail: pl.concept, debit: 0, credit: Math.round((pl.amount / (1 + IVA)) * 100) / 100 },
          { id: uid(), date: new Date().toISOString(), doc: number, account: "2030 IVA por pagar", detail: "IVA 15% facturado", debit: 0, credit: Math.round((pl.amount - pl.amount / (1 + IVA)) * 100) / 100 },
          ...journal,
        ];
        extra = [...extra, mkEvent("factura", `Factura ${number} emitida · autorizada por SRI`)];
        return { ...s, payLinks, orders, invoices, journal, settings: { ...s.settings, sequence: { ...s.settings.sequence, invoice: s.settings.sequence.invoice + 1 } }, events: [...extra, ...s.events].slice(0, 80), session: { ...s.session, salesToday: s.session.salesToday + pl.amount } };
      }
      return { ...s, payLinks, events: [...extra, ...s.events].slice(0, 80), session: { ...s.session, salesToday: s.session.salesToday + pl.amount } };
    }
    case "CANCEL_PAYLINK":
      return { ...s, payLinks: s.payLinks.map((l) => (l.id === a.id ? { ...l, status: "anulado" as const } : l)), events: [mkEvent("link", "Link de cobro anulado antes de su vencimiento"), ...s.events].slice(0, 80) };
    case "CREATE_ACCESS":
      return { ...s, accessLinks: [a.link, ...s.accessLinks], events: [mkEvent("link", `Link de un solo uso creado · rol ${a.link.role.toUpperCase()}`), ...s.events].slice(0, 80) };
    case "REVOKE_ACCESS":
      return { ...s, accessLinks: s.accessLinks.map((l) => (l.id === a.id ? { ...l, status: "revocado" as const } : l)), events: [mkEvent("link", "Link de acceso revocado manualmente"), ...s.events].slice(0, 80) };
    case "REDEEM_ACCESS":
      return { ...s, accessLinks: s.accessLinks.map((l) => (l.id === a.id ? { ...l, uses: l.uses + 1, status: l.uses + 1 >= l.maxUses ? ("usado" as const) : l.status } : l)) };
    case "CREATE_PRODUCT": {
      const p = a.product as Product;
      return { ...s, products: [p, ...s.products], events: [mkEvent("stock", `Producto ${p.sku} · ${p.name} publicado en PIM`), ...s.events].slice(0, 80) };
    }
    case "UPLOAD_MEDIA":
      return { ...s, media: [a.asset, ...s.media] };
    case "PATCH_PRODUCT":
      return { ...s, products: s.products.map((p) => (p.id === a.id ? { ...p, ...a.patch } : p)) };
    case "MOVEMENT": {
      const mv = a.mv;
      const wh = mv.warehouse as "showroom" | "bodega" | "taller";
      const products = s.products.map((p) => {
        if (p.id !== mv.productId) return p;
        const stock = { ...p.stock };
        if (mv.type === "ingreso") stock[wh] += mv.qty;
        if (mv.type === "egreso") stock[wh] = Math.max(0, stock[wh] - mv.qty);
        if (mv.type === "ajuste") stock[wh] = Math.max(0, stock[wh] + mv.qty);
        return { ...p, stock };
      });
      return { ...s, products, movements: [mv, ...s.movements].slice(0, 80), events: [mkEvent("stock", `${mv.type === "ingreso" ? "Ingreso" : mv.type === "egreso" ? "Egreso" : mv.type === "ajuste" ? "Ajuste" : "Transferencia"} ${mv.sku} ×${Math.abs(mv.qty)} · ${mv.warehouse}`), ...s.events].slice(0, 80) };
    }
    case "CREATE_WO": {
      const w = a.wo as WorkOrder;
      return { ...s, workOrders: [w, ...s.workOrders], events: [mkEvent("taller", `Orden ${w.code} planificada · ${w.qty}× ${w.productName}`), ...s.events].slice(0, 80) };
    }
    case "ADVANCE_WO": {
      const wo = s.workOrders.find((w) => w.id === a.id)!;
      const workOrders = s.workOrders.map((w) => (w.id === a.id ? { ...w, status: a.status as WoStatus, progress: woProgress[a.status as WoStatus] } : w));
      let products = s.products;
      if (a.status === "terminada") {
        products = s.products.map((p) => (p.id === wo.productId ? { ...p, stock: { ...p.stock, bodega: p.stock.bodega + wo.qty } } : p));
        return { ...s, workOrders, products, events: [mkEvent("taller", `${wo.code} TERMINADA · +${wo.qty} und a bodega`), mkEvent("stock", `Ingreso bodega +${wo.qty} · ${wo.productName}`), ...s.events].slice(0, 80) };
      }
      return { ...s, workOrders, events: [mkEvent("taller", `${wo.code} pasó a ${(a.status as string).toUpperCase()}`), ...s.events].slice(0, 80) };
    }
    case "ADD_CUSTOMER":
      return { ...s, customers: [a.customer, ...s.customers], events: [mkEvent("web", `Cliente registrado · ${a.customer.name}`), ...s.events].slice(0, 80) };
    case "ADD_SUPPLIER":
      return { ...s, suppliers: [a.supplier, ...s.suppliers] };
    case "ADD_JOURNAL":
      return { ...s, journal: [...a.entries, ...s.journal], events: [mkEvent("factura", `Asiento manual registrado · ${a.entries[0].account}`), ...s.events].slice(0, 80) };
    case "SETTINGS":
      return { ...s, settings: { ...s.settings, ...a.patch } };
    default:
      return s;
  }
}

const SIM_EVENTS: { type: EventItem["type"]; msgs: string[] }[] = [
  { type: "web", msgs: ["Visita al catálogo web desde Guayaquil", "Link de un solo uso abierto · cotizador B2B", "Carrito web: +1 Poltrona Esmeraldas", "Cotización descargada en PDF · Estudio Barragán"] },
  { type: "stock", msgs: ["Kardex sincronizado con bodega central", "Conteo cíclico completado · estantería B3", "Alerta: DOR-042 bajo mínimo en showroom", "Recepción parcial OC-2211 · espumas D30"] },
  { type: "pago", msgs: ["Webhook PayPhone verificado · firma OK", "Conciliación automática: 3 transacciones", "Reintento de cobro programado · tarjeta declined"] },
  { type: "venta", msgs: ["Cotización COT-0881 enviada por WhatsApp", "Reserva de stock · Comedor Andino ×1", "Upsell sugerido: mesa de centro +32% ticket"] },
  { type: "taller", msgs: ["Consumo de materiales registrado · OF-2101", "Control de calidad aprobó 12 sillas", "Mantenimiento sierra escuadradora programado"] },
  { type: "factura", msgs: ["Retención electrónica recibida · SRI", "Nota de crédito NC-0012 emitida", "Backup contable incremental completado"] },
];

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reduce, undefined, () => {
    const base = seedState();
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        const merged = { ...base, ...saved, hydrated: true, events: base.events, session: base.session };
        return merged;
      }
    } catch {
      /* seed */
    }
    return base;
  });
  const [toasts, setToasts] = useReducer(
    (t: Toast[], a: { op: "add" | "del"; toast?: Toast; id?: string }) =>
      a.op === "add" ? [...t, a.toast!].slice(-4) : t.filter((x) => x.id !== a.id),
    []
  );
  const toast = (msg: string, kind: Toast["kind"] = "ok") => {
    const id = uid();
    setToasts({ op: "add", toast: { id, kind, msg } });
    setTimeout(() => setToasts({ op: "del", id }), 3400);
  };

  const stateRef = useRef(state);
  stateRef.current = state;

  useEffect(() => {
    const iv = setInterval(() => {
      const group = SIM_EVENTS[Math.floor(Math.random() * SIM_EVENTS.length)];
      const msg = group.msgs[Math.floor(Math.random() * group.msgs.length)];
      const salesDelta = group.type === "pago" && Math.random() > 0.6 ? Math.round(Math.random() * 400 + 90) : 0;
      dispatch({ type: "EVENTS", events: [mkEvent(group.type, msg)], salesDelta });
    }, 1600);
    return () => clearInterval(iv);
  }, []);

  const [bursting, setBursting] = useReducer((b: boolean, v: boolean) => v, false);
  const burst = (n: number) =>
    new Promise<number>((resolve) => {
      setBursting(true);
      const start = performance.now();
      const chunk = 60;
      let sent = 0;
      const tick = () => {
        const batch = Math.min(chunk, n - sent);
        const evs = Array.from({ length: batch }, (_, i) =>
          mkEvent("sistema", `Evento #${(sent + i + 1).toLocaleString()} procesado por el bus`)
        );
        sent += batch;
        dispatch({ type: "EVENTS", events: evs, eps: Math.round((sent / Math.max(1, performance.now() - start)) * 1000) });
        if (sent < n) setTimeout(tick, 24);
        else {
          const elapsed = performance.now() - start;
          const eps = Math.round((n / elapsed) * 1000);
          dispatch({ type: "EVENTS", events: [mkEvent("sistema", `Prueba completada: ${n.toLocaleString()} eventos en ${(elapsed / 1000).toFixed(2)}s`)], eps });
          setBursting(false);
          resolve(eps);
        }
      };
      tick();
    });

  useEffect(() => {
    try {
      const { events: _e, session: _s, hydrated: _h, ...rest } = state;
      localStorage.setItem(LS_KEY, JSON.stringify(rest));
    } catch {
      /* quota */
    }
  }, [state]);

  return <Ctx.Provider value={{ state, dispatch, toasts, toast, burst, bursting }}>{children}</Ctx.Provider>;
}

/* helpers to build entities from views */
export const buildOrder = (s: AppState, customerId: string, items: { productId: string; qty: number }[], channel: Order["channel"]) => {
  const customer = s.customers.find((c) => c.id === customerId)!;
  const lines = items.map((i) => {
    const p = s.products.find((x) => x.id === i.productId)!;
    return { productId: p.id, sku: p.sku, name: p.name, qty: i.qty, price: p.price };
  });
  const t = calcTotals(lines);
  return {
    id: uid(),
    code: `PED-${s.settings.sequence.order}`,
    customerId,
    customer: customer.name,
    items: lines,
    ...t,
    status: "nuevo" as OrderStatus,
    channel,
    payment: "pendiente" as const,
    transportId: null,
    createdAt: new Date().toISOString(),
    eta: new Date(Date.now() + 5 * 864e5).toISOString(),
    city: customer.city,
    workOrderId: null,
  };
};

export const buildPayLink = (s: AppState, amount: number, concept: string, customerName: string, orderId: string | null, validDays = 7): PayLink => ({
  id: uid(),
  token: `pp_${token(12)}`,
  concept,
  orderId,
  amount,
  customerName,
  createdAt: new Date().toISOString(),
  expiresAt: new Date(Date.now() + validDays * 864e5).toISOString(),
  status: "pendiente",
  method: null,
  authCode: null,
  last4: null,
});
