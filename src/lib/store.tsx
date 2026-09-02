import { createContext, useContext, useEffect, useReducer } from "react";
import type { ReactNode } from "react";
import type { AppState, Channel, EventItem, Invoice, JournalEntry, Order, OrderKind, OrderStatus, PayLink, Product, WorkOrder, WoStatus } from "./types";
import { seedState } from "./seed";
import { calcTotals, money, sriAuth, token, uid } from "./util";

const LS_KEY = "bletia-suite-v1";

type Action = { type: string; [k: string]: any };

export interface Toast { id: string; kind: "ok" | "warn" | "info"; msg: string; }

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

/* ── Máquina de estados portada de EstadoPedidoErp.php (código real BLETIA) ── */
export const orderFlow: OrderStatus[] = [
  "pendiente", "por_aprobar", "aprobado", "confirmado", "enviado_proveedor",
  "en_bodega", "listo_despacho", "despachado", "entregado",
];

export const estadosLabel: Record<OrderStatus, string> = {
  borrador: "Borrador", pendiente: "Pendiente", por_aprobar: "Por aprobar", aprobado: "Aprobado",
  confirmado: "Confirmado", enviado_proveedor: "Enviado a proveedor", en_fabricacion: "En fabricación",
  en_produccion: "En producción", listo_proveedor: "Listo en proveedor", en_bodega: "En bodega",
  listo_despacho: "Listo despacho", despachado: "Despachado", entregado: "Entregado",
  anulado: "Anulado", cancelado: "Cancelado",
};

/* Lo que el CLIENTE ve en su link de seguimiento (ESTADOS_CLIENTE del código real) */
export const estadosCliente: Record<OrderStatus, string> = {
  borrador: "En proceso", pendiente: "En revisión", por_aprobar: "En revisión", aprobado: "Confirmado",
  confirmado: "Confirmado", enviado_proveedor: "En fabricación", en_fabricacion: "En fabricación",
  en_produccion: "En producción (taller)", listo_proveedor: "Casi listo", en_bodega: "En bodega",
  listo_despacho: "Listo para despacho", despachado: "Despachado", entregado: "Entregado",
  anulado: "Anulado", cancelado: "Anulado",
};

export const pagadoValidado = (o: Order) => o.recibos.filter((r) => r.validado).reduce((a, r) => a + r.amount, 0);
export const saldoDe = (o: Order) => Math.max(0, Math.round((o.total - pagadoValidado(o)) * 100) / 100);

const pad9 = (n: number) => String(n).padStart(9, "0");

function emitInvoice(s: AppState, order: Order) {
  const number = `001-001-${pad9(s.settings.sequence.invoice)}`;
  const invoice: Invoice = { id: uid(), number, auth: sriAuth(), customerId: order.customerId, customer: order.customer, date: new Date().toISOString(), base: order.subtotal, iva: order.iva, total: order.total, status: order.payment === "pagado" ? "pagada" : "por_cobrar", orderId: order.id };
  const entries: JournalEntry[] = [
    { id: uid(), date: new Date().toISOString(), doc: number, account: order.payment === "pagado" ? "1020 Bancos Pichincha" : "1030 Cuentas por cobrar", detail: `Venta ${order.code}`, debit: order.total, credit: 0 },
    { id: uid(), date: new Date().toISOString(), doc: number, account: "4010 Ventas", detail: order.items.map((i) => i.name).join(", "), debit: 0, credit: order.subtotal },
    { id: uid(), date: new Date().toISOString(), doc: number, account: "2030 IVA por pagar", detail: "IVA 15% facturado", debit: 0, credit: order.iva },
  ];
  return { number, invoice, entries, seq: { ...s.settings.sequence, invoice: s.settings.sequence.invoice + 1 } };
}

function reduce(s: AppState, a: Action): AppState {
  switch (a.type) {
    case "EVENTS": {
      const evs = a.events as EventItem[];
      return {
        ...s,
        events: [...evs, ...s.events].slice(0, 90),
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
      const products = o.kind === "venta"
        ? s.products.map((p) => {
            const item = o.items.find((i) => i.productId === p.id);
            return item ? { ...p, stock: { ...p.stock, showroom: Math.max(0, p.stock.showroom - item.qty) } } : p;
          })
        : s.products;
      return {
        ...s,
        products,
        orders: [o, ...s.orders],
        customers: s.customers.map((c) => (c.id === o.customerId ? { ...c, orders: c.orders + 1, total: c.total + o.total } : c)),
        settings: { ...s.settings, sequence: { ...s.settings.sequence, order: s.settings.sequence.order + 1 } },
        events: [mkEvent("venta", `${o.kind === "venta" ? "Venta de stock" : "Pedido bajo specs"} ${o.code} · ${money(o.total)} · ${o.customer}`), ...s.events].slice(0, 90),
      };
    }
    case "ADVANCE_ORDER": {
      const order = s.orders.find((o) => o.id === a.id)!;
      const status = a.status as OrderStatus;
      const entry = { ts: new Date().toISOString(), user: "Paola C.", msg: `Estado: ${estadosLabel[order.status]} → ${estadosLabel[status]}` };
      if (status === "entregado") {
        const e = emitInvoice(s, order);
        return {
          ...s,
          orders: s.orders.map((o) => (o.id === a.id ? { ...o, status, trace: [...o.trace, entry] } : o)),
          invoices: [e.invoice, ...s.invoices],
          journal: [...e.entries, ...s.journal],
          settings: { ...s.settings, sequence: e.seq },
          events: [mkEvent("venta", `${order.code} ENTREGADO · el cliente ve "${estadosCliente[status]}"`), mkEvent("factura", `Factura ${e.number} emitida y autorizada SRI`), ...s.events].slice(0, 90),
        };
      }
      return {
        ...s,
        orders: s.orders.map((o) => (o.id === a.id ? { ...o, status, trace: [...o.trace, entry] } : o)),
        events: [mkEvent("venta", `${order.code} pasó a ${estadosLabel[status].toUpperCase()}`), ...s.events].slice(0, 90),
      };
    }
    case "ANULA_ORDER": {
      const order = s.orders.find((o) => o.id === a.id)!;
      return {
        ...s,
        orders: s.orders.map((o) => (o.id === a.id ? { ...o, status: a.status as OrderStatus, trace: [...o.trace, { ts: new Date().toISOString(), user: "Andrés Y.", msg: `${a.status === "anulado" ? "Anulado" : "Cancelado"} por gerencia · motivo: ${a.motivo}` }] } : o)),
        events: [mkEvent("venta", `${order.code} ${a.status === "anulado" ? "ANULADO" : "CANCELADO"} · ${a.motivo}`), ...s.events].slice(0, 90),
      };
    }
    case "SET_TRANSPORT":
      return {
        ...s,
        orders: s.orders.map((o) => (o.id === a.id ? { ...o, transportId: a.transportId } : o)),
      };
    /* ── RecibosErp: el pago NO cuenta hasta que el dueño lo valida ── */
    case "ADD_RECIBO": {
      const order = s.orders.find((o) => o.id === a.orderId)!;
      const code = `REC-${String(s.settings.sequence.recibo).padStart(4, "0")}`;
      const recibo = { id: uid(), code, date: new Date().toISOString(), amount: a.amount as number, method: a.method as string, note: (a.note as string) || "Abono registrado", validado: false };
      return {
        ...s,
        orders: s.orders.map((o) => (o.id === a.orderId ? { ...o, recibos: [...o.recibos, recibo], trace: [...o.trace, { ts: new Date().toISOString(), user: "Rocío M.", msg: `Recibo ${code} · ${money(recibo.amount)} · ${recibo.method} — esperando validación del dueño` }] } : o)),
        settings: { ...s.settings, sequence: { ...s.settings.sequence, recibo: s.settings.sequence.recibo + 1 } },
        events: [mkEvent("pago", `${code} registrado · ${money(recibo.amount)} · requiere validación`), ...s.events].slice(0, 90),
      };
    }
    case "VALIDAR_RECIBO": {
      const order = s.orders.find((o) => o.id === a.orderId)!;
      const rec = order.recibos.find((r) => r.id === a.reciboId)!;
      const orders = s.orders.map((o) => {
        if (o.id !== a.orderId) return o;
        const recibos = o.recibos.map((r) => (r.id === a.reciboId ? { ...r, validado: true } : r));
        const totalPagado = recibos.filter((r) => r.validado).reduce((x, r) => x + r.amount, 0);
        const payment = totalPagado >= o.total - 0.01 ? ("pagado" as const) : ("parcial" as const);
        return { ...o, recibos, payment, trace: [...o.trace, { ts: new Date().toISOString(), user: "Andrés Y.", msg: `${rec.code} · ${money(rec.amount)} · ${rec.method} — pago VALIDADO por el dueño` }] };
      });
      const validadoTotal = order.recibos.filter((r) => r.validado || r.id === a.reciboId).reduce((x, r) => x + r.amount, 0);
      const esTotal = validadoTotal >= order.total - 0.01;
      return {
        ...s,
        orders,
        journal: [
          { id: uid(), date: new Date().toISOString(), doc: rec.code, account: "1020 Bancos Pichincha", detail: `${rec.method} · ${order.code}`, debit: rec.amount, credit: 0 },
          { id: uid(), date: new Date().toISOString(), doc: rec.code, account: esTotal ? "1030 Cuentas por cobrar" : "2050 Anticipos clientes", detail: esTotal ? `Pago total ${order.code}` : `Anticipo ${order.code} · validado`, debit: 0, credit: rec.amount },
          ...s.journal,
        ],
        events: [mkEvent("pago", `${rec.code} VALIDADO · ${money(rec.amount)} · saldo ${money(Math.max(0, order.total - validadoTotal))} · ${order.customer}`), ...s.events].slice(0, 90),
      };
    }
    case "SEND_CONFIRM": {
      const order = s.orders.find((o) => o.id === a.id)!;
      return {
        ...s,
        orders: s.orders.map((o) => (o.id === a.id ? { ...o, confirmToken: `cf_${token(10)}`, trace: [...o.trace, { ts: new Date().toISOString(), user: "sistema", msg: "Link único de confirmación (con fotos de spec) enviado al cliente" }] } : o)),
        events: [mkEvent("link", `Link único enviado · ${order.code} · ${order.customer} confirma specs con fotos`), ...s.events].slice(0, 90),
      };
    }
    case "SET_CONFIRM": {
      const order = s.orders.find((o) => o.id === a.id)!;
      return {
        ...s,
        orders: s.orders.map((o) => (o.id === a.id ? { ...o, confirmedAt: new Date().toISOString(), trace: [...o.trace, { ts: new Date().toISOString(), user: "cliente", msg: "Cliente confirmó specs y fotos del link único ✓" }] } : o)),
        events: [mkEvent("web", `${order.customer} confirmó specs de ${order.code} vía link único`), ...s.events].slice(0, 90),
      };
    }
    case "CREATE_DESPACHO": {
      const d = a.despacho;
      return {
        ...s,
        despachos: [d, ...s.despachos],
        orders: s.orders.map((o) => (o.id === d.orderId ? { ...o, status: "despachado" as const, transportId: d.transportId, trace: [...o.trace, { ts: new Date().toISOString(), user: "Luis Ch.", msg: `Despacho ${d.code} creado · ${d.bultos} bultos · placa ${d.placa}` }] } : o)),
        settings: { ...s.settings, sequence: { ...s.settings.sequence, despacho: s.settings.sequence.despacho + 1 } },
        events: [mkEvent("logistica", `${d.code} en preparación · ${d.bultos} bultos → ${d.city}`), ...s.events].slice(0, 90),
      };
    }
    case "ADVANCE_DESPACHO": {
      const d = s.despachos.find((x) => x.id === a.id)!;
      if (a.estado === "entregado") {
        const order = s.orders.find((o) => o.id === d.orderId)!;
        const e = emitInvoice(s, order);
        return {
          ...s,
          despachos: s.despachos.map((x) => (x.id === a.id ? { ...x, estado: "entregado" as const } : x)),
          orders: s.orders.map((o) => (o.id === d.orderId ? { ...o, status: "entregado" as const, trace: [...o.trace, { ts: new Date().toISOString(), user: d.conductor, msg: `Entregado en ${d.ruta} · ${d.bultos} bultos conformados` }] } : o)),
          invoices: [e.invoice, ...s.invoices],
          journal: [...e.entries, ...s.journal],
          settings: { ...s.settings, sequence: e.seq },
          events: [mkEvent("logistica", `${d.code} ENTREGADO · ${d.customer}`), mkEvent("factura", `Factura ${e.number} emitida y autorizada SRI`), ...s.events].slice(0, 90),
        };
      }
      return {
        ...s,
        despachos: s.despachos.map((x) => (x.id === a.id ? { ...x, estado: a.estado } : x)),
        events: [mkEvent("logistica", `${d.code} ${a.estado === "en_ruta" ? "salió en ruta · " + d.placa : "en preparación"}`), ...s.events].slice(0, 90),
      };
    }
    case "EMIT_GUIA": {
      const d = s.despachos.find((x) => x.id === a.id)!;
      const numero = `001-001-${pad9(s.settings.sequence.guia)}`;
      const transport = s.suppliers.find((sp) => sp.id === d.transportId);
      const xml = `<guiaRemision>\n  <infoTributaria><ruc>${s.settings.company.ruc}</ruc><razonSocial>${s.settings.company.name}</razonSocial></infoTributaria>\n  <infoGuia><motivo>${d.motivo === "venta" ? "Venta" : "Traslado"}</motivo><dirPartida>${s.settings.company.address}</dirPartida></infoGuia>\n  <transportista><razonSocial>${transport?.name ?? ""}</razonSocial><placa>${d.placa}</placa></transportista>\n  <ruta>${d.ruta}</ruta>\n  <bultos>${d.bultos}</bultos><pesoKg>${d.pesoKg}</pesoKg>\n</guiaRemision>`;
      return {
        ...s,
        despachos: s.despachos.map((x) => (x.id === a.id ? { ...x, guia: { numero, auth: sriAuth(), xml } } : x)),
        orders: s.orders.map((o) => (o.id === d.orderId ? { ...o, trace: [...o.trace, { ts: new Date().toISOString(), user: "sistema", msg: `Guía de remisión ${numero} autorizada por el SRI` }] } : o)),
        settings: { ...s.settings, sequence: { ...s.settings.sequence, guia: s.settings.sequence.guia + 1 } },
        events: [mkEvent("factura", `Guía de remisión ${numero} autorizada SRI · ${d.code}`), ...s.events].slice(0, 90),
      };
    }
    case "MATERIAL_MOV": {
      const mat = s.materials.find((m) => m.id === a.id)!;
      const delta = a.delta as number;
      return {
        ...s,
        materials: s.materials.map((m) => (m.id === a.id ? { ...m, stock: Math.round(Math.max(0, m.stock + delta) * 100) / 100 } : m)),
        events: [mkEvent("stock", `${delta > 0 ? "Ingreso" : "Consumo"} MP · ${mat.name} ${delta > 0 ? "+" : ""}${delta} ${mat.unit} · ${a.ref}`), ...s.events].slice(0, 90),
      };
    }
    case "CREATE_PAYLINK": {
      const pl = a.link as PayLink;
      return {
        ...s,
        payLinks: [pl, ...s.payLinks],
        settings: { ...s.settings, sequence: { ...s.settings.sequence, link: s.settings.sequence.link + 1 } },
        events: [mkEvent("link", `Link de cobro generado · ${money(pl.amount)} · ${pl.customerName}`), ...s.events].slice(0, 90),
      };
    }
    case "PAY_LINK": {
      const pl = s.payLinks.find((l) => l.id === a.id)!;
      const payLinks = s.payLinks.map((l) => (l.id === a.id ? { ...l, status: "pagado" as const, method: a.method, last4: a.last4, authCode: String(Math.floor(10000000 + Math.random() * 89999999)) } : l));
      const extra: EventItem[] = [mkEvent("pago", `PayPhone acreditó ${money(pl.amount)} · ${pl.concept} · validado automáticamente`)];
      if (pl.orderId) {
        const order = s.orders.find((o) => o.id === pl.orderId)!;
        const e = emitInvoice(s, { ...order, payment: "pagado" });
        const code = `REC-${String(s.settings.sequence.recibo).padStart(4, "0")}`;
        return {
          ...s,
          payLinks,
          orders: s.orders.map((o) => (o.id === pl.orderId ? { ...o, payment: "pagado" as const, recibos: [...o.recibos, { id: uid(), code, date: new Date().toISOString(), amount: pl.amount, method: `${a.method} •••• ${a.last4}`, note: "Cobro automático vía link PayPhone", validado: true }], trace: [...o.trace, { ts: new Date().toISOString(), user: "sistema", msg: `Link PayPhone pagado · ${money(pl.amount)} · ${a.method} •••• ${a.last4} · validado automáticamente` }] } : o)),
          invoices: [e.invoice, ...s.invoices],
          journal: [...e.entries, ...s.journal],
          settings: { ...s.settings, sequence: { ...e.seq, recibo: s.settings.sequence.recibo + 1 } },
          events: [...extra, mkEvent("factura", `Factura ${e.number} emitida · autorizada por SRI`), ...s.events].slice(0, 90),
          session: { ...s.session, salesToday: s.session.salesToday + pl.amount },
        };
      }
      return { ...s, payLinks, events: [...extra, ...s.events].slice(0, 90), session: { ...s.session, salesToday: s.session.salesToday + pl.amount } };
    }
    case "CANCEL_PAYLINK":
      return { ...s, payLinks: s.payLinks.map((l) => (l.id === a.id ? { ...l, status: "anulado" as const } : l)), events: [mkEvent("link", "Link de cobro anulado antes de su vencimiento"), ...s.events].slice(0, 90) };
    case "CREATE_ACCESS":
      return { ...s, accessLinks: [a.link, ...s.accessLinks], events: [mkEvent("link", `Link de un solo uso creado · rol ${a.link.role.toUpperCase()}`), ...s.events].slice(0, 90) };
    case "REVOKE_ACCESS":
      return { ...s, accessLinks: s.accessLinks.map((l) => (l.id === a.id ? { ...l, status: "revocado" as const } : l)), events: [mkEvent("link", "Link de acceso revocado manualmente"), ...s.events].slice(0, 90) };
    case "REDEEM_ACCESS":
      return { ...s, accessLinks: s.accessLinks.map((l) => (l.id === a.id ? { ...l, uses: l.uses + 1, status: l.uses + 1 >= l.maxUses ? ("usado" as const) : l.status } : l)) };
    case "CREATE_PRODUCT": {
      const p = a.product as Product;
      return { ...s, products: [p, ...s.products], events: [mkEvent("stock", `Producto ${p.sku} · ${p.name} publicado en PIM`), ...s.events].slice(0, 90) };
    }
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
      return { ...s, products, movements: [mv, ...s.movements].slice(0, 80), events: [mkEvent("stock", `${mv.type === "ingreso" ? "Ingreso" : mv.type === "egreso" ? "Egreso" : mv.type === "ajuste" ? "Ajuste" : "Transferencia"} ${mv.sku} ×${Math.abs(mv.qty)} · ${mv.warehouse}`), ...s.events].slice(0, 90) };
    }
    case "CREATE_WO": {
      const w = a.wo as WorkOrder;
      return { ...s, workOrders: [w, ...s.workOrders], events: [mkEvent("taller", `Orden ${w.code} planificada · ${w.qty}× ${w.productName}`), ...s.events].slice(0, 90) };
    }
    case "ADVANCE_WO": {
      const wo = s.workOrders.find((w) => w.id === a.id)!;
      const workOrders = s.workOrders.map((w) => (w.id === a.id ? { ...w, status: a.status as WoStatus, progress: woProgress[a.status as WoStatus] } : w));
      if (a.status === "terminada") {
        const products = s.products.map((p) => (p.id === wo.productId ? { ...p, stock: { ...p.stock, bodega: p.stock.bodega + wo.qty } } : p));
        return { ...s, workOrders, products, events: [mkEvent("taller", `${wo.code} TERMINADA · +${wo.qty} und a bodega`), mkEvent("stock", `Ingreso bodega +${wo.qty} · ${wo.productName}`), ...s.events].slice(0, 90) };
      }
      return { ...s, workOrders, events: [mkEvent("taller", `${wo.code} pasó a ${(a.status as string).toUpperCase()}`), ...s.events].slice(0, 90) };
    }
    case "ADD_CUSTOMER":
      return { ...s, customers: [a.customer, ...s.customers], events: [mkEvent("web", `Cliente registrado · ${a.customer.name}`), ...s.events].slice(0, 90) };
    case "ADD_SUPPLIER":
      return { ...s, suppliers: [a.supplier, ...s.suppliers] };
    case "ADD_JOURNAL":
      return { ...s, journal: [...a.entries, ...s.journal], events: [mkEvent("factura", `Asiento manual registrado · ${a.entries[0].account}`), ...s.events].slice(0, 90) };
    case "ANULAR_FACTURA": {
      const inv = s.invoices.find((i) => i.id === a.id)!;
      const number = `001-001-${pad9(s.settings.sequence.nc)}`;
      return {
        ...s,
        invoices: s.invoices.map((i) => (i.id === a.id ? { ...i, status: "anulada" as const } : i)),
        notas: [{ id: uid(), number, auth: sriAuth(), invoiceNumber: inv.number, customer: inv.customer, date: new Date().toISOString(), motivo: a.motivo, amount: inv.total }, ...s.notas],
        journal: [
          { id: uid(), date: new Date().toISOString(), doc: `NC ${number}`, account: "4010 Ventas", detail: `Reverso por NC · ${inv.number}`, debit: inv.base, credit: 0 },
          { id: uid(), date: new Date().toISOString(), doc: `NC ${number}`, account: "2030 IVA por pagar", detail: "Reverso IVA 15%", debit: inv.iva, credit: 0 },
          { id: uid(), date: new Date().toISOString(), doc: `NC ${number}`, account: "1030 Cuentas por cobrar", detail: `NC a favor · ${inv.customer}`, debit: 0, credit: inv.total },
          ...s.journal,
        ],
        settings: { ...s.settings, sequence: { ...s.settings.sequence, nc: s.settings.sequence.nc + 1 } },
        events: [mkEvent("factura", `Nota de crédito ${number} emitida · anula ${inv.number} · ${a.motivo}`), ...s.events].slice(0, 90),
      };
    }
    case "LOGIN":
      return { ...s, session: { ...s.session, user: { name: a.name, role: a.role } } };
    case "LOGOUT":
      return { ...s, session: { ...s.session, user: null } };
    case "ADD_CUENTA":
      return { ...s, cuentas: [a.cuenta, ...s.cuentas] };
    case "SETTINGS":
      return { ...s, settings: { ...s.settings, ...a.patch } };
    case "UPLOAD_MEDIA":
      return { ...s, media: [a.asset, ...s.media] };
    default:
      return s;
  }
}

const SIM_EVENTS: { type: EventItem["type"]; msgs: string[] }[] = [
  { type: "web", msgs: ["Visita al catálogo web desde Guayaquil", "Link único abierto · cliente revisa fotos de spec", "Carrito web: +1 Poltrona Esmeraldas", "Cotización descargada en PDF · Estudio Barragán"] },
  { type: "stock", msgs: ["Kardex sincronizado con bodega central", "Conteo cíclico completado · estantería B3", "Alerta: DOR-042 bajo mínimo en showroom", "Recepción parcial OC-2211 · espumas D30"] },
  { type: "pago", msgs: ["Webhook PayPhone verificado · firma OK", "Conciliación automática: 3 transacciones", "Saldo pendiente recordado por WhatsApp · PED-1042"] },
  { type: "venta", msgs: ["Cotización COT-0881 enviada por WhatsApp", "Reserva de stock · Comedor Andino ×1", "Upsell sugerido: mesa de centro +32% ticket"] },
  { type: "taller", msgs: ["Consumo de materiales registrado · OF-2101", "Control de calidad aprobó 12 sillas", "Mantenimiento sierra escuadradora programado"] },
  { type: "logistica", msgs: ["TransLog confirmó camión para mañana 08:00", "Etiquetas de bulto impresas · DSP-3021", "GPS: PCH-1194 en Av. Simón Bolívar"] },
  { type: "factura", msgs: ["Retención electrónica recibida · SRI", "Backup contable incremental completado"] },
];

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reduce, undefined, () => {
    const base = seedState();
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        return { ...base, ...saved, hydrated: true, events: base.events, session: base.session };
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
    setTimeout(() => setToasts({ op: "del", id }), 3600);
  };

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
        const evs = Array.from({ length: batch }, (_, i) => mkEvent("sistema", `Evento #${(sent + i + 1).toLocaleString()} procesado por el bus`));
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

/* constructores usados por las vistas */
export const buildOrder = (s: AppState, customerId: string, items: { productId: string; qty: number; spec?: Order["items"][0]["spec"] }[], channel: Channel, kind: OrderKind): Order => {
  const customer = s.customers.find((c) => c.id === customerId)!;
  const lines = items.map((i) => {
    const p = s.products.find((x) => x.id === i.productId)!;
    return { productId: p.id, sku: p.sku, name: p.name, qty: i.qty, price: p.price, spec: i.spec ?? null };
  });
  const t = calcTotals(lines);
  const now = new Date().toISOString();
  return {
    id: uid(),
    code: `PED-${s.settings.sequence.order}`,
    kind,
    customerId,
    customer: customer.name,
    items: lines,
    ...t,
    status: "pendiente",
    channel,
    payment: "pendiente",
    transportId: null,
    bultos: Math.max(1, Math.ceil(lines.reduce((a, l) => a + l.qty, 0) / 2)),
    createdAt: now,
    eta: new Date(Date.now() + (kind === "pedido" ? 14 : 5) * 864e5).toISOString(),
    city: customer.city,
    workOrderId: null,
    trace: [{ ts: now, user: "Paola C.", msg: `${kind === "venta" ? "Venta de stock" : "Pedido bajo specs"} creado · canal ${channel}` }],
    recibos: [],
    confirmToken: null,
    confirmedAt: null,
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
