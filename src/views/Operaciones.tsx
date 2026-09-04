import { useEffect, useMemo, useRef, useState } from "react";
import { buildOrder, buildPayLink, estadosCliente, estadosLabel, orderFlow, saldoDe, useStore } from "../lib/store";
import type { Channel, Customer, Movement, Order, OrderKind, OrderSpec, OrderStatus, Warehouse } from "../lib/types";
import { calcTotals, copyText, fmtDate, money, timeAgo, uid } from "../lib/util";
import { Badge, Btn, Card, Drawer, EmptyState, Field, Icon, Input, Modal, SectionTitle, Select, Tabs, Td, Th } from "../components/ui";
import { Thumb } from "../components/Img";
import { searchCustomer, clearCache } from "../utils/sriService";

const orderTone: Record<OrderStatus, "pine" | "oak" | "steel" | "moss" | "brick" | "fog"> = {
  borrador: "fog", pendiente: "fog", por_aprobar: "oak", aprobado: "pine", confirmado: "pine",
  enviado_proveedor: "oak", en_fabricacion: "oak", en_produccion: "oak", listo_proveedor: "steel",
  en_bodega: "steel", listo_despacho: "steel", despachado: "oak", entregado: "pine",
  anulado: "brick", cancelado: "brick",
};

const WH_LABEL: Record<Warehouse, string> = { showroom: "Showroom", bodega: "Bodega", taller: "Taller" };
const emptySpec = (): OrderSpec => ({ tapiz: "", tapizSec: "", cojines: "", lacado: "", notas: "", fotos: [] });

const SPEC_FIELDS: { campo: "tapiz" | "tapizSec" | "cojines" | "lacado"; label: string; placeholder: string }[] = [
  { campo: "tapiz", label: "Tapiz principal", placeholder: "ej: Lino crudo T-04" },
  { campo: "tapizSec", label: "Tapiz secundario", placeholder: "ej: Chenille gris piedra" },
  { campo: "cojines", label: "Cojines", placeholder: "cantidad y tela" },
  { campo: "lacado", label: "Lacado", placeholder: "ej: Natural mate (poro abierto)" },
];

/* sube una foto real y la guarda como data-URL (con miniatura) */
function FotoBox({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const ref = useRef<HTMLInputElement>(null);
  const isImg = value.startsWith("data:") || value.startsWith("http");
  return (
    <>
      <button type="button" onClick={() => ref.current?.click()} title={value ? "Cambiar foto" : "Subir foto"}
        className="relative w-12 h-12 rounded-lg border border-oak/30 bg-paper overflow-hidden grid place-items-center hover:border-oak hover:shadow-sm transition-all shrink-0 group">
        {isImg ? (
          <img src={value} alt="" className="w-full h-full object-cover" />
        ) : (
          <Icon name="image" size={16} className="text-oakd" />
        )}
        {value && !isImg && <span className="absolute inset-x-0 bottom-0 bg-night/70 text-paper text-[6.5px] font-mono truncate px-0.5 py-px">{value}</span>}
        <span className="absolute inset-0 bg-wine/0 group-hover:bg-wine/10 transition-colors" />
      </button>
      <input ref={ref} type="file" accept="image/*" className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (!f) return;
          const r = new FileReader();
          r.onload = () => onChange(r.result as string);
          r.readAsDataURL(f);
          e.target.value = "";
        }} />
    </>
  );
}

/* una fila de spec: su etiqueta, su campo de texto y SU foto (asociada al campo) */
function SpecRow({ spec, campo, label, placeholder, onChange }: {
  spec: OrderSpec; campo: "tapiz" | "tapizSec" | "cojines" | "lacado"; label: string; placeholder: string;
  onChange: (s: OrderSpec) => void;
}) {
  const foto = spec.fotos.find((f) => f.campo === label)?.label ?? "";
  const setFoto = (v: string) => {
    const rest = spec.fotos.filter((f) => f.campo !== label);
    onChange({ ...spec, fotos: v ? [...rest, { campo: label, label: v }] : rest });
  };
  return (
    <div className="flex items-center gap-2.5 rounded-lg bg-card border border-line px-2.5 py-2">
      <FotoBox value={foto} onChange={setFoto} />
      <div className="min-w-0 flex-1">
        <div className="text-[10px] uppercase font-bold tracking-wider text-oakd mb-1">{label}</div>
        <input value={spec[campo]} onChange={(e) => onChange({ ...spec, [campo]: e.target.value })} placeholder={placeholder}
          className="w-full bg-transparent border-b border-line focus:border-oak outline-none text-[13px] pb-1 transition-colors placeholder:text-fog" />
      </div>
    </div>
  );
}

export default function Operaciones({ initialQuery }: { initialQuery?: string }) {
  const { state, dispatch, toast } = useStore();
  const [tab, setTab] = useState<"pedidos" | "inventario" | "movimientos">("pedidos");
  const [q, setQ] = useState(() => (["stock", "pedido", "online"].includes(initialQuery ?? "") ? "" : initialQuery ?? ""));
  const [kindF, setKindF] = useState<"todos" | OrderKind>("todos");
  const [statusF, setStatusF] = useState<OrderStatus | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const [drawerTab, setDrawerTab] = useState<"resumen" | "specs" | "traza" | "cobros" | "confirm">("resumen");
  const [showNew, setShowNew] = useState<OrderKind | null>(null);
  const [abono, setAbono] = useState({ amount: "", method: "Transferencia Bco. Pichincha" });
  const [anula, setAnula] = useState<"anulado" | "cancelado" | null>(null);
  const [motivo, setMotivo] = useState("");
  const [mvOpen, setMvOpen] = useState(false);
  const [mv, setMv] = useState({ type: "ingreso" as Movement["type"], warehouse: "bodega" as Warehouse, productId: "", qty: "1", ref: "" });
  const [nf, setNf] = useState({
    customerId: "", channel: "tienda" as Channel,
    items: [{ productId: "", qty: "1", spec: emptySpec() }],
  });
  // Estados para búsqueda de cliente por documento (SRI/Registro Civil)
  const [docBusqueda, setDocBusqueda] = useState("");
  const [docLoading, setDocLoading] = useState(false);
  const [docError, setDocError] = useState<string | null>(null);
  const [clienteManual, setClienteManual] = useState<Partial<Customer> | null>(null);

  const cur = state.orders.find((o) => o.id === openId) ?? null;

  const simulateOnline = () => {
    const p = state.products[Math.floor(Math.random() * state.products.length)];
    const c = state.customers[Math.floor(Math.random() * 3)];
    const o = buildOrder(state, c.id, [{ productId: p.id, qty: 1 }], "web", "venta");
    o.trace = [{ ts: o.createdAt, user: "sistema", msg: "Pedido recibido desde catálogo web (checkout online)" }];
    dispatch({ type: "CREATE_ORDER", order: o });
    dispatch({ type: "EVENTS", events: [{ id: uid(), ts: Date.now(), type: "web" as const, msg: `Nuevo pedido online ${o.code} · ${p.name} · ${c.city}` }] });
    toast(`Pedido online ${o.code} entró al pipeline · ${money(o.total)}`);
  };

  useEffect(() => {
    if (initialQuery === "stock") setShowNew("venta");
    if (initialQuery === "pedido") setShowNew("pedido");
    if (initialQuery === "online") simulateOnline();
    if (initialQuery && initialQuery.startsWith("PED-")) {
      const found = state.orders.find((o) => o.code === initialQuery);
      if (found) setOpenId(found.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialQuery]);

  const orders = state.orders.filter((o) =>
    (o.code + o.customer + o.city).toLowerCase().includes(q.toLowerCase()) &&
    (!statusF || o.status === statusF) &&
    (kindF === "todos" || o.kind === kindF)
  );

  const pipeline = orderFlow.map((st) => ({ st, n: state.orders.filter((o) => o.status === st).length }));
  const counts = {
    venta: state.orders.filter((o) => o.kind === "venta" && !["anulado", "cancelado"].includes(o.status)).length,
    pedido: state.orders.filter((o) => o.kind === "pedido" && !["anulado", "cancelado"].includes(o.status)).length,
  };

  const preview = useMemo(() => {
    const lines = nf.items.filter((i) => i.productId).map((i) => {
      const p = state.products.find((x) => x.id === i.productId)!;
      return { qty: Number(i.qty) || 1, price: p.price };
    });
    return calcTotals(lines);
  }, [nf, state.products]);

  const buscarClientePorDocumento = async () => {
    const doc = docBusqueda.trim();
    if (!doc) return;
    
    setDocLoading(true);
    setDocError(null);
    setClienteManual(null);
    
    try {
      const resultado = await searchCustomer(doc);
      
      if (resultado) {
        // Verificar si el cliente ya existe en la base de datos local
        const clienteExistente = state.customers.find(c => c.id === resultado.id);
        
        if (clienteExistente) {
          // Cliente ya existe, lo seleccionamos directamente
          setNf({ ...nf, customerId: clienteExistente.id });
          toast(`✅ Cliente encontrado: ${clienteExistente.name}`);
        } else {
          // Cliente nuevo, guardamos datos para creación automática o manual
          setClienteManual({
            id: resultado.id,
            name: resultado.name,
            type: resultado.type,
            email: resultado.email || '',
            phone: resultado.phone || '',
            address: resultado.address || '',
            city: resultado.city || 'Guayaquil',
          });
          
          if (resultado.name && resultado.status === 'Activo') {
            toast(`✅ Datos obtenidos del SRI: ${resultado.name}`);
          } else if (resultado.status?.includes('No encontrado')) {
            toast(`ℹ️ Cédula válida · complete nombre del cliente`, 'warn');
          } else {
            toast(`⚠️ API offline · ingrese datos manualmente`, 'warn');
          }
        }
      }
    } catch (err: any) {
      setDocError(err.message || 'Error al consultar documento');
      toast(err.message || 'Error en consulta', 'warn');
    } finally {
      setDocLoading(false);
    }
  };

  const crearClienteYContinuar = () => {
    if (!clienteManual || !clienteManual.id) return;
    if (!clienteManual.name?.trim()) return toast('Ingrese el nombre del cliente', 'warn');
    
    // Crear nuevo cliente en el store
    const nuevoCliente: Customer = {
      id: clienteManual.id,
      name: clienteManual.name.trim(),
      type: clienteManual.type || 'natural',
      email: clienteManual.email || '',
      phone: clienteManual.phone || '',
      address: clienteManual.address || '',
      city: clienteManual.city || 'Guayaquil',
      createdAt: new Date().toISOString(),
    };
    
    dispatch({ type: 'CREATE_CUSTOMER', customer: nuevoCliente });
    setNf({ ...nf, customerId: nuevoCliente.id });
    setClienteManual(null);
    setDocBusqueda('');
    toast('Cliente creado exitosamente');
  };

  const createOrder = () => {
    if (!nf.customerId) return toast("Selecciona el cliente", "warn");
    const valid = nf.items.filter((i) => i.productId && Number(i.qty) > 0);
    if (!valid.length) return toast("Agrega al menos un producto", "warn");
    const kind = showNew!;
    const o = buildOrder(
      state, nf.customerId,
      valid.map((i) => ({ productId: i.productId, qty: Number(i.qty), spec: kind === "pedido" ? { ...i.spec, fotos: i.spec.fotos.filter((f) => f.campo.trim()) } : undefined })),
      nf.channel, kind
    );
    dispatch({ type: "CREATE_ORDER", order: o });
    setShowNew(null);
    setNf({ customerId: "", channel: "tienda", items: [{ productId: "", qty: "1", spec: emptySpec() }] });
    setOpenId(o.id);
    toast(`${kind === "venta" ? "Venta de stock" : "Pedido bajo specs"} ${o.code} creado · ${money(o.total)}`);
  };

  const advance = (o: Order) => {
    const next = orderFlow[orderFlow.indexOf(o.status) + 1];
    if (!next) return;
    if (next === "despachado" && !o.transportId) return toast("Asigna un transportista antes de despachar", "warn");
    dispatch({ type: "ADVANCE_ORDER", id: o.id, status: next });
    if (next === "entregado") toast(`${o.code} entregado · factura electrónica emitida`);
    else if (next === "listo_despacho") toast(`${o.code} listo para despacho — créalo en Logística`);
    else toast(`${o.code} → ${estadosLabel[next].toUpperCase()}`);
  };

  const addRecibo = (o: Order) => {
    const amount = Number(abono.amount);
    const saldo = saldoDe(o);
    if (!amount || amount <= 0 || amount > saldo + 0.01) return toast(`Monto inválido · saldo pendiente ${money(saldo)}`, "warn");
    dispatch({ type: "ADD_RECIBO", orderId: o.id, amount, method: abono.method, note: amount >= saldo - 0.01 ? "Pago del saldo" : "Abono parcial" });
    setAbono({ amount: "", method: abono.method });
    toast(`Recibo registrado · ${money(amount)} — espera validación del dueño`, "warn");
  };

  const validar = (o: Order, reciboId: string) => {
    dispatch({ type: "VALIDAR_RECIBO", orderId: o.id, reciboId });
    toast("Pago validado · saldo y contabilidad actualizados");
  };

  const saveMv = () => {
    const p = state.products.find((x) => x.id === mv.productId);
    const qty = Number(mv.qty);
    if (!p || !qty) return toast("Completa producto y cantidad", "warn");
    dispatch({ type: "MOVEMENT", mv: { id: uid(), ts: new Date().toISOString(), type: mv.type, warehouse: mv.warehouse, productId: p.id, sku: p.sku, productName: p.name, qty, ref: mv.ref || "Manual", user: "Luis Ch." } });
    setMv({ ...mv, qty: "1", ref: "" });
    setMvOpen(false);
    toast("Movimiento registrado en el kardex");
  };

  const specOf = (o: Order) => o.items.filter((i) => i.spec);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3 anim-up">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">OMS · máquina de estados BLETIA (15 estados) — Venta stock vs Pedido bajo specs</div>
          <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Pedidos, stock y kardex</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <Btn variant="outline" icon="box" onClick={() => setShowNew("venta")}>Vender stock</Btn>
          <Btn variant="outline" icon="saw" onClick={() => setShowNew("pedido")}>Vender bajo pedido</Btn>
          <Btn variant="dark" icon="ext" onClick={simulateOnline}>Tomar online</Btn>
        </div>
      </div>

      <Tabs
        tabs={[{ id: "pedidos", label: `Pedidos (${state.orders.length})` }, { id: "inventario", label: "Inventario" }, { id: "movimientos", label: "Movimientos" }]}
        value={tab} onChange={(t) => setTab(t as typeof tab)}
      />

      {tab === "pedidos" && (
        <>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 stagger">
            {pipeline.map(({ st, n }) => (
              <button key={st} onClick={() => setStatusF(statusF === st ? null : st)}
                className={`bg-card border rounded-xl px-2 py-2.5 text-left hover:-translate-y-px transition-all ${statusF === st ? "border-pine ring-2 ring-pine/20 shadow-md" : "border-line hover:border-pine/40"}`}>
                <div className="font-display font-extrabold text-[18px] text-ink num leading-none">{n}</div>
                <div className="mt-1.5"><Badge tone={orderTone[st]} dot>{estadosLabel[st]}</Badge></div>
              </button>
            ))}
          </div>

          <Card pad={false} className="anim-up">
            <div className="flex flex-wrap items-center gap-2 p-3 border-b border-line">
              <div className="relative flex-1 min-w-[180px]">
                <Icon name="search" size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-fog" />
                <Input placeholder="Buscar pedido, cliente, ciudad…" value={q} onChange={(e) => setQ(e.target.value)} className="pl-8" />
              </div>
              <div className="flex gap-1 bg-ink/5 rounded-lg p-1">
                {([["todos", "Todos"], ["venta", "Venta stock"], ["pedido", "Pedido specs"]] as const).map(([k, l]) => (
                  <button key={k} onClick={() => setKindF(k)} className={`px-2.5 py-1 rounded-md text-[11.5px] font-bold transition-all ${kindF === k ? "bg-card shadow-sm text-ink" : "text-mut"}`}>{l}</button>
                ))}
              </div>
              {(statusF || kindF !== "todos") && (
                <button onClick={() => { setStatusF(null); setKindF("todos"); }} className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-pinel border border-pine/30 text-pined text-[12px] font-semibold anim-pop">
                  limpiar filtros <Icon name="x" size={12} />
                </button>
              )}
              <span className="ml-auto font-mono text-[11px] text-fog">{counts.venta} ventas · {counts.pedido} pedidos</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] min-w-[900px]">
                <thead className="bg-ink/3 border-b border-line">
                  <tr><Th>Pedido</Th><Th>Cliente</Th><Th>Ítems</Th><Th right>Total +IVA</Th><Th right>Saldo</Th><Th>Estado</Th><Th>Pago</Th><Th right>Flujo</Th></tr>
                </thead>
                <tbody>
                  {orders.map((o) => {
                    const next = orderFlow[orderFlow.indexOf(o.status) + 1];
                    const saldo = saldoDe(o);
                    const sinValidar = o.recibos.filter((r) => !r.validado).length;
                    return (
                      <tr key={o.id} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors cursor-pointer" onClick={() => { setOpenId(o.id); setDrawerTab("resumen"); }}>
                        <Td>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[12px] font-semibold text-ink">{o.code}</span>
                            <Badge tone={o.kind === "pedido" ? "oak" : "steel"}>{o.kind === "pedido" ? "bajo specs" : "stock"}</Badge>
                          </div>
                          <div className="text-[10.5px] text-fog mt-0.5">{fmtDate(o.createdAt)} · ETA {fmtDate(o.eta)} · {o.bultos} bultos</div>
                        </Td>
                        <Td>
                          <div className="font-semibold text-ink leading-tight">{o.customer}</div>
                          <div className="text-[11px] text-mut">{o.city}{o.workOrderId ? " · con orden de taller" : ""}</div>
                        </Td>
                        <Td className="text-mut">{o.items.length} línea{o.items.length > 1 ? "s" : ""}</Td>
                        <Td right className="font-mono text-[12.5px] font-semibold text-ink num">{money(o.total)}</Td>
                        <Td right>
                          <span className={`font-mono text-[12px] num ${saldo > 0 ? "text-oakd font-semibold" : "text-[#41621f]"}`}>{saldo > 0 ? money(saldo) : "$0,00"}</span>
                          {sinValidar > 0 && <div className="text-[9.5px] text-brick font-bold">{sinValidar} sin validar</div>}
                        </Td>
                        <Td><Badge tone={orderTone[o.status]} dot>{estadosLabel[o.status]}</Badge></Td>
                        <Td><Badge tone={o.payment === "pagado" ? "moss" : o.payment === "parcial" ? "oak" : "fog"}>{o.payment}</Badge></Td>
                        <Td right>
                          <div className="flex justify-end gap-1" onClick={(e) => e.stopPropagation()}>
                            {next && !["anulado", "cancelado"].includes(o.status) && (
                              <Btn size="sm" variant="outline" icon="arrow" onClick={() => advance(o)}>{next === "entregado" ? "Entregar" : "Avanzar"}</Btn>
                            )}
                            <Btn size="sm" variant="ghost" icon="eye" onClick={() => { setOpenId(o.id); setDrawerTab("resumen"); }} />
                          </div>
                        </Td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {orders.length === 0 && <EmptyState icon="box" title="Sin pedidos" sub="Crea una venta de stock o un pedido bajo specs con los botones de arriba." />}
            </div>
          </Card>
        </>
      )}

      {tab === "inventario" && (
        <Card pad={false} className="anim-up">
          <div className="overflow-x-auto">
            <table className="w-full text-[13px] min-w-[760px]">
              <thead className="bg-ink/3 border-b border-line">
                <tr><Th>SKU</Th><Th>Producto</Th><Th right>Showroom</Th><Th right>Bodega</Th><Th right>Taller</Th><Th right>Total</Th><Th right>Mín.</Th><Th>Salud</Th></tr>
              </thead>
              <tbody>
                {state.products.map((p) => {
                  const total = p.stock.showroom + p.stock.bodega + p.stock.taller;
                  const low = total <= p.min;
                  return (
                    <tr key={p.id} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors">
                      <Td className="font-mono text-[12px] text-mut">{p.sku}</Td>
                      <Td><div className="flex items-center gap-2.5"><Thumb src={p.img} alt={p.name} className="w-9 h-9 rounded-lg border border-line" /><span className="font-semibold text-ink">{p.name}</span></div></Td>
                      <Td right className="num font-mono text-[12.5px]">{p.stock.showroom}</Td>
                      <Td right className="num font-mono text-[12.5px]">{p.stock.bodega}</Td>
                      <Td right className="num font-mono text-[12.5px]">{p.stock.taller}</Td>
                      <Td right className="num font-mono text-[12.5px] font-bold text-ink">{total}</Td>
                      <Td right className="num font-mono text-[12.5px] text-mut">{p.min}</Td>
                      <Td><Badge tone={low ? "brick" : "moss"} dot>{low ? "reponer" : "ok"}</Badge></Td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {tab === "movimientos" && (
        <Card pad={false} className="anim-up">
          <div className="flex flex-wrap items-center gap-2 p-3 border-b border-line">
            <SectionTitle kicker="Kardex" title="Últimos movimientos" />
            <div className="ml-auto"><Btn size="sm" icon="plus" onClick={() => setMvOpen(true)}>Registrar movimiento</Btn></div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px] min-w-[720px]">
              <thead className="bg-ink/3 border-b border-line">
                <tr><Th>Fecha</Th><Th>Tipo</Th><Th>Bodega</Th><Th>Producto</Th><Th right>Cant.</Th><Th>Referencia</Th><Th>Usuario</Th></tr>
              </thead>
              <tbody>
                {state.movements.map((m) => (
                  <tr key={m.id} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors">
                    <Td className="text-mut whitespace-nowrap">{fmtDate(m.ts)} · {new Date(m.ts).toLocaleTimeString("es-EC", { hour: "2-digit", minute: "2-digit" })}</Td>
                    <Td><Badge tone={m.type === "ingreso" ? "moss" : m.type === "egreso" ? "brick" : m.type === "transferencia" ? "steel" : "oak"}>{m.type}</Badge></Td>
                    <Td className="capitalize text-mut">{m.warehouse}</Td>
                    <Td><span className="font-mono text-[11.5px] text-mut">{m.sku}</span> <span className="text-ink">{m.productName}</span></Td>
                    <Td right className="num font-mono font-semibold text-ink">{m.type === "egreso" ? "−" : "+"}{m.qty}</Td>
                    <Td className="font-mono text-[11.5px] text-mut">{m.ref}</Td>
                    <Td className="text-mut">{m.user}</Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* drawer de pedido */}
      <Drawer open={!!cur} onClose={() => setOpenId(null)} kicker={`${cur?.code ?? ""} · ${cur?.kind === "pedido" ? "pedido bajo specs" : "venta de stock"}`} title={cur?.customer ?? ""}>
        {cur && (() => {
          const saldo = saldoDe(cur);
          const next = orderFlow[orderFlow.indexOf(cur.status) + 1];
          const transportes = state.suppliers.filter((s) => s.kind === "transporte");
          return (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone={orderTone[cur.status]} dot>{estadosLabel[cur.status]}</Badge>
                <Badge tone={cur.payment === "pagado" ? "moss" : cur.payment === "parcial" ? "oak" : "fog"}>{cur.payment}</Badge>
                <Badge tone="fog">{cur.channel.replace("_", " ")}</Badge>
                <Badge tone="steel">{cur.bultos} bultos</Badge>
                <span className="ml-auto font-display font-extrabold text-[22px] text-ink num">{money(cur.total)}</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-steell/60 border border-steel/20 px-3 py-2">
                <Icon name="eye" size={14} className="text-steel" />
                <span className="text-[12px] text-steel">El cliente ve: <b className="font-semibold">{estadosCliente[cur.status]}</b> <span className="text-steel/70">· vía link de seguimiento</span></span>
              </div>

              <div className="flex gap-1 bg-ink/5 rounded-lg p-1">
                {([["resumen", "Resumen"], ["specs", `Specs (${specOf(cur).length})`], ["traza", `Traza (${cur.trace.length})`], ["cobros", "Recibos"], ["confirm", "Confirmar"]] as const).map(([k, l]) => (
                  <button key={k} onClick={() => setDrawerTab(k)} className={`flex-1 px-2 py-1.5 rounded-md text-[11.5px] font-bold transition-all ${drawerTab === k ? "bg-card shadow-sm text-ink" : "text-mut"}`}>{l}</button>
                ))}
              </div>

              {drawerTab === "resumen" && (
                <div className="space-y-3 anim-up">
                  <div className="rounded-lg border border-line overflow-hidden">
                    {cur.items.map((i, ix) => (
                      <div key={ix} className="flex items-center justify-between px-3 py-2 text-[13px] border-b border-line/70 last:border-0">
                        <div><span className="font-mono text-[11px] text-fog">{i.sku}</span> <span className="font-semibold text-ink">{i.name}</span>{i.spec && <Badge tone="oak" className="ml-2">spec</Badge>}</div>
                        <div className="font-mono num text-ink">{i.qty} × {money(i.price)}</div>
                      </div>
                    ))}
                    <div className="px-3 py-2 bg-ink/3 text-[12.5px] space-y-0.5">
                      <div className="flex justify-between text-mut"><span>Subtotal</span><span className="font-mono num">{money(cur.subtotal)}</span></div>
                      <div className="flex justify-between text-mut"><span>IVA 15%</span><span className="font-mono num">{money(cur.iva)}</span></div>
                      <div className="flex justify-between font-bold text-ink text-[14px]"><span>Total</span><span className="font-mono num">{money(cur.total)}</span></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-mut mb-1.5">Transportista asignado</div>
                    <div className="flex gap-1.5 flex-wrap">
                      {transportes.map((t) => (
                        <button key={t.id} onClick={() => { dispatch({ type: "SET_TRANSPORT", id: cur.id, transportId: t.id }); toast(`Transportista ${t.name} asignado a ${cur.code}`); }}
                          className={`px-3 py-1.5 rounded-lg border text-[12px] font-semibold transition-all ${cur.transportId === t.id ? "border-pine bg-pinel text-pined shadow-sm" : "border-line text-mut hover:border-pine/40"}`}>
                          {t.name} · ★ {t.rating}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {next && !["anulado", "cancelado"].includes(cur.status) && (
                      <Btn icon="arrow" onClick={() => advance(cur)} className="flex-1">
                        {next === "entregado" ? "Confirmar entrega" : `Avanzar → ${estadosLabel[next]}`}
                      </Btn>
                    )}
                    {!["anulado", "cancelado", "entregado"].includes(cur.status) && (
                      <>
                        <Btn variant="outline" icon="x" onClick={() => { setAnula("cancelado"); setMotivo(""); }}>Cancelar</Btn>
                        <Btn variant="outline" icon="x" onClick={() => { setAnula("anulado"); setMotivo(""); }}>Anular</Btn>
                      </>
                    )}
                  </div>
                  <div className="text-[11.5px] text-mut">
                    Creado {fmtDate(cur.createdAt)} · ETA {fmtDate(cur.eta)} · {cur.city}
                    {cur.workOrderId && <> · orden de taller <b className="text-ink">{state.workOrders.find((w) => w.id === cur.workOrderId)?.code}</b></>}
                  </div>
                </div>
              )}

              {drawerTab === "specs" && (
                <div className="space-y-3 anim-up">
                  {specOf(cur).length === 0 && <EmptyState icon="brush" title="Sin personalización" sub="Este pedido es una venta de stock sin specs. Las specs viven en la ruta 'bajo pedido'." />}
                  {specOf(cur).map((i, ix) => (
                    <div key={ix} className="rounded-xl border border-oak/30 bg-oakl/40 p-3.5">
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="font-semibold text-[13px] text-ink">{i.qty}× {i.name}</span>
                        <Badge tone="oak">personalizado</Badge>
                      </div>
                      {i.spec && (
                        <>
                          <div className="space-y-2">
                            {SPEC_FIELDS.map(({ campo, label }) => {
                              const val = i.spec?.[campo] ?? "";
                              const foto = i.spec?.fotos.find((f) => f.campo === label)?.label ?? "";
                              const isImg = foto.startsWith("data:") || foto.startsWith("http");
                              return (
                                <div key={campo} className="flex items-center gap-2.5 rounded-lg bg-card border border-line px-2.5 py-2">
                                  {foto ? (
                                    isImg
                                      ? <img src={foto} alt={label} className="w-11 h-11 rounded-lg object-cover border border-line shrink-0" />
                                      : <span className="w-11 h-11 rounded-lg border border-line grid place-items-center shrink-0 bg-paper"><Icon name="image" size={14} className="text-oakd" /></span>
                                  ) : (
                                    <span className="w-11 h-11 rounded-lg bg-ink/4 grid place-items-center shrink-0"><Icon name="image" size={14} className="text-fog" /></span>
                                  )}
                                  <div className="min-w-0">
                                    <div className="text-[9.5px] uppercase font-bold text-fog">{label}</div>
                                    <div className="text-[12.5px] text-ink truncate">{val || "—"}</div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          {i.spec.notas && <div className="mt-2 text-[12px] text-oakd bg-card border border-line rounded-lg p-2">✎ {i.spec.notas}</div>}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {drawerTab === "traza" && (
                <div className="anim-up">
                  <div className="relative pl-5 space-y-3 before:absolute before:left-[7px] before:top-1 before:bottom-1 before:w-px before:bg-line2">
                    {[...cur.trace].reverse().map((t, i) => (
                      <div key={i} className="relative anim-feed">
                        <span className={`absolute -left-5 top-1 w-[15px] h-[15px] rounded-full border-[3px] border-paper ${t.user === "sistema" ? "bg-steel" : t.user === "cliente" ? "bg-oak" : "bg-pine"}`} />
                        <div className="text-[13px] text-ink leading-snug">{t.msg}</div>
                        <div className="text-[10.5px] font-mono text-fog mt-0.5">{t.user} · {fmtDate(t.ts)} · {timeAgo(new Date(t.ts).getTime())}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {drawerTab === "cobros" && (
                <div className="space-y-3 anim-up">
                  <div className={`rounded-xl border p-3.5 flex items-center justify-between gap-2 ${saldo > 0 ? "border-oak/40 bg-oakl/50" : "border-moss/40 bg-mossl/60"}`}>
                    <div>
                      <div className="text-[11px] uppercase font-bold tracking-wider text-mut">Saldo pendiente (pagos validados)</div>
                      <div className="font-display font-extrabold text-[24px] text-ink num">{money(saldo)}</div>
                    </div>
                    {saldo === 0
                      ? <Badge tone="moss" dot>pagado completo</Badge>
                      : <Btn variant="oak" size="sm" icon="qr" onClick={() => {
                          const link = buildPayLink(state, saldo, `Saldo ${cur.code} · ${cur.customer}`, cur.customer, cur.id);
                          dispatch({ type: "CREATE_PAYLINK", link });
                          toast(`Link PayPhone por el saldo (${money(saldo)}) generado — cópialo en Cobros`);
                        }}>Cobrar saldo con PayPhone</Btn>}
                  </div>

                  {cur.recibos.length > 0 && (
                    <div className="space-y-1.5">
                      {cur.recibos.map((r) => (
                        <div key={r.id} className={`rounded-lg border px-3 py-2 text-[12.5px] ${r.validado ? "border-line" : "border-oak/40 bg-oakl/40"}`}>
                          <div className="flex items-center justify-between gap-2">
                            <div><span className="font-mono text-mut">{r.code}</span> <span className="text-ink">{r.note}</span></div>
                            <span className="font-mono font-semibold text-[#41621f] num">+{money(r.amount)}</span>
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <div className="text-[10.5px] text-fog">{r.method} · {fmtDate(r.date)}</div>
                            {r.validado
                              ? <Badge tone="moss">validado</Badge>
                              : <Btn size="sm" variant="oak" icon="check" onClick={() => validar(cur, r.id)}>Validar pago</Btn>}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="rounded-lg bg-night px-3 py-2.5 flex items-start gap-2.5">
                    <Icon name="shield" size={14} className="text-oakl mt-0.5" />
                    <p className="text-[11px] text-paper/70 leading-relaxed">
                      Regla BLETIA (<span className="font-mono text-[10px]">RecibosErp.php</span>): un pago <b className="text-paper">no cuenta hasta que el dueño lo valida</b>.
                      Los cobros PayPhone se validan solos (webhook firmado); transferencias y depósitos esperan tu confirmación.
                    </p>
                  </div>

                  {saldo > 0 && (
                    <div className="rounded-lg border border-line p-3 space-y-2.5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-mut">Registrar recibo / abono (quedará por validar)</div>
                      <div className="grid grid-cols-2 gap-2">
                        <Input type="number" placeholder={`máx ${saldo.toFixed(2)}`} value={abono.amount} onChange={(e) => setAbono({ ...abono, amount: e.target.value })} />
                        <Select value={abono.method} onChange={(e) => setAbono({ ...abono, method: e.target.value })}>
                          <option>Transferencia Bco. Pichincha</option><option>Efectivo caja</option><option>PayPhone · Visa</option><option>Cheque</option><option>Depósito</option>
                        </Select>
                      </div>
                      <Btn size="sm" icon="check" className="w-full" onClick={() => addRecibo(cur)}>Registrar recibo</Btn>
                    </div>
                  )}
                </div>
              )}

              {drawerTab === "confirm" && (
                <div className="space-y-3 anim-up">
                  {!cur.confirmToken ? (
                    <div className="text-center py-6">
                      <span className="w-12 h-12 mx-auto rounded-xl bg-oakl text-oakd grid place-items-center mb-3"><Icon name="link" size={22} /></span>
                      <div className="font-display font-bold text-[16px] text-ink">Link único de confirmación</div>
                      <p className="text-[12.5px] text-mut max-w-sm mx-auto mt-1.5">
                        El cliente abre el link, revisa las <b>specs con fotos</b> de su pedido y confirma con un clic. El link se consume al usarse y queda auditado en la traza.
                      </p>
                      <Btn className="mt-4" icon="link" onClick={() => { dispatch({ type: "SEND_CONFIRM", id: cur.id }); toast("Link único generado y enviado al cliente"); }}>Generar y enviar link único</Btn>
                    </div>
                  ) : (
                    <>
                      <div className="rounded-xl bg-night p-4">
                        <div className="text-[10px] font-mono text-paper/50 uppercase tracking-widest">Link de un solo uso</div>
                        <div className="font-mono text-[12.5px] text-oakl break-all mt-1.5">{state.settings.linkBase}/cf/{cur.confirmToken}</div>
                      </div>
                      {cur.confirmedAt ? (
                        <div className="rounded-xl border border-moss/40 bg-mossl/60 p-3.5 flex items-center gap-3 anim-pop">
                          <span className="w-9 h-9 rounded-full bg-moss text-paper grid place-items-center shrink-0"><Icon name="check" size={17} /></span>
                          <div>
                            <div className="font-semibold text-[13.5px] text-ink">Cliente confirmó specs y fotos</div>
                            <div className="text-[11.5px] text-mut">{fmtDate(cur.confirmedAt)} · link consumido · visible en la traza</div>
                          </div>
                        </div>
                      ) : (
                        <div className="rounded-xl border border-oak/40 bg-oakl/50 p-3.5">
                          <div className="flex items-center gap-2 text-[13px] font-semibold text-oakd"><Icon name="clock" size={14} />Esperando confirmación del cliente</div>
                          <div className="flex gap-2 mt-3">
                            <Btn size="sm" variant="outline" icon="copy" onClick={async () => { await copyText(`${state.settings.linkBase}/cf/${cur.confirmToken}`); toast("Link copiado — reenvíalo por WhatsApp"); }}>Copiar link</Btn>
                            <Btn size="sm" variant="oak" icon="check" onClick={() => { dispatch({ type: "SET_CONFIRM", id: cur.id }); toast("Confirmación del cliente registrada ✓"); }}>Simular confirmación del cliente</Btn>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          );
        })()}
      </Drawer>

      {/* modal nuevo pedido (dos rutas) */}
      <Modal open={!!showNew} onClose={() => setShowNew(null)} kicker={showNew === "pedido" ? "Ruta bajo pedido · specs de personalización" : "Ruta venta · stock inmediato"} title={showNew === "pedido" ? "Nuevo pedido bajo specs" : "Nueva venta de stock"}>
        <div className="space-y-3">
          {/* Sección de búsqueda de cliente por documento (SRI/Registro Civil) */}
          <div className="rounded-xl bg-pinel/40 border border-pine/20 p-3 space-y-2.5">
            <div className="text-[11px] font-bold text-pined uppercase tracking-wider flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Icon name="idcard" size={14} /> Buscar cliente por Cédula/RUC (validación Módulo 10 + SRI)
              </div>
              <button 
                type="button"
                onClick={() => { clearCache(); toast('🗑️ Caché limpiada'); }}
                className="text-[9px] text-pine hover:text-pined underline opacity-70 hover:opacity-100"
                title="Limpiar caché de consultas"
              >
                Limpiar caché
              </button>
            </div>
            <div className="flex gap-2 items-end">
              <div className="flex-1">
                <Field label="Número de documento">
                  <div className="relative">
                    <Input 
                      value={docBusqueda} 
                      onChange={(e) => setDocBusqueda(e.target.value.replace(/[^0-9]/g, ''))} 
                      placeholder="Ingrese cédula (10 dígitos) o RUC (13 dígitos)"
                      maxLength={13}
                      disabled={docLoading || !!nf.customerId}
                      onKeyDown={(e) => e.key === 'Enter' && buscarClientePorDocumento()}
                    />
                    {docLoading && (
                      <div className="absolute right-2 top-1/2 -translate-y-1/2">
                        <div className="w-4 h-4 border-2 border-pine border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}
                  </div>
                </Field>
              </div>
              <Btn 
                variant="dark" 
                icon="search" 
                onClick={buscarClientePorDocumento}
                disabled={!docBusqueda || docLoading}
              >
                Consultar
              </Btn>
              {nf.customerId && (
                <Btn variant="ghost" size="sm" icon="x" onClick={() => { setNf({ ...nf, customerId: '' }); setDocBusqueda(''); }} />
              )}
            </div>
            
            {docError && (
              <div className="text-[11.5px] text-brick font-medium flex items-center gap-1.5">
                <Icon name="alert" size={14} /> {docError}
              </div>
            )}
            
            {/* Formulario para completar datos del cliente nuevo */}
            {clienteManual && !nf.customerId && (
              <div className="grid sm:grid-cols-2 gap-2.5 pt-2 border-t border-pine/20 anim-up">
                <Field label="Nombre / Razón Social *">
                  <Input 
                    value={clienteManual.name || ''} 
                    onChange={(e) => setClienteManual({ ...clienteManual, name: e.target.value })}
                    placeholder="Complete el nombre"
                  />
                </Field>
                <Field label="Teléfono">
                  <Input 
                    value={clienteManual.phone || ''} 
                    onChange={(e) => setClienteManual({ ...clienteManual, phone: e.target.value })}
                    placeholder="Opcional"
                  />
                </Field>
                <Field label="Email">
                  <Input 
                    type="email"
                    value={clienteManual.email || ''} 
                    onChange={(e) => setClienteManual({ ...clienteManual, email: e.target.value })}
                    placeholder="Opcional"
                  />
                </Field>
                <Field label="Ciudad">
                  <Input 
                    value={clienteManual.city || ''} 
                    onChange={(e) => setClienteManual({ ...clienteManual, city: e.target.value })}
                  />
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Dirección">
                    <Input 
                      value={clienteManual.address || ''} 
                      onChange={(e) => setClienteManual({ ...clienteManual, address: e.target.value })}
                      placeholder="Dirección completa"
                    />
                  </Field>
                </div>
                <div className="sm:col-span-2 flex justify-end gap-2 pt-1">
                  <Btn variant="ghost" size="sm" onClick={() => setClienteManual(null)}>Cancelar</Btn>
                  <Btn variant="dark" size="sm" icon="user-plus" onClick={crearClienteYContinuar}>
                    Crear cliente y continuar
                  </Btn>
                </div>
              </div>
            )}
            
            {nf.customerId && (
              <div className="text-[11.5px] text-pine font-medium flex items-center gap-1.5">
                <Icon name="check" size={14} /> Cliente seleccionado: {state.customers.find(c => c.id === nf.customerId)?.name}
              </div>
            )}
          </div>
          
          <div className="grid sm:grid-cols-2 gap-3">
            <Field label="Cliente (selección manual)">
              <Select value={nf.customerId} onChange={(e) => setNf({ ...nf, customerId: e.target.value })} disabled={!!clienteManual}>
                <option value="">— seleccionar —</option>
                {state.customers.map((c) => <option key={c.id} value={c.id}>{c.name} · {c.city}</option>)}
              </Select>
            </Field>
            <Field label="Canal">
              <Select value={nf.channel} onChange={(e) => setNf({ ...nf, channel: e.target.value as Channel })}>
                <option value="tienda">Tienda física</option><option value="whatsapp">WhatsApp</option><option value="web">Web / catálogo</option><option value="link_pago">Link de pago</option>
              </Select>
            </Field>
          </div>
          <Field label={showNew === "pedido" ? "Ítems con spec de personalización" : "Ítems de stock"}>
            <div className="space-y-3">
              {nf.items.map((it, i) => (
                <div key={i} className="rounded-xl border border-line p-3 space-y-2.5">
                  <div className="flex gap-2">
                    <Select value={it.productId} onChange={(e) => setNf({ ...nf, items: nf.items.map((x, ix) => ix === i ? { ...x, productId: e.target.value } : x) })} className="flex-1">
                      <option value="">— producto —</option>
                      {state.products.filter((p) => (showNew === "pedido" ? p.line === "fabricacion" : true)).map((p) => (
                        <option key={p.id} value={p.id}>{p.sku} · {p.name} · {money(p.price)}{showNew === "venta" ? ` (stock ${p.stock.showroom + p.stock.bodega})` : ""}</option>
                      ))}
                    </Select>
                    <Input type="number" min={1} value={it.qty} onChange={(e) => setNf({ ...nf, items: nf.items.map((x, ix) => ix === i ? { ...x, qty: e.target.value } : x) })} className="w-20" />
                    <Btn variant="ghost" size="sm" icon="x" disabled={nf.items.length === 1} onClick={() => setNf({ ...nf, items: nf.items.filter((_, ix) => ix !== i) })} />
                  </div>
                  {showNew === "pedido" && (
                    <div className="rounded-lg bg-oakl/40 border border-oak/25 p-2.5 space-y-2 anim-up">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-oakd/70 flex items-center gap-1.5">
                        <Icon name="image" size={11} /> Foto de referencia en cada campo (viaja en el link único)
                      </div>
                      {SPEC_FIELDS.map(({ campo, label, placeholder }) => (
                        <SpecRow key={campo} spec={it.spec} campo={campo} label={label} placeholder={placeholder}
                          onChange={(s) => setNf({ ...nf, items: nf.items.map((x, ix) => (ix === i ? { ...x, spec: s } : x)) })} />
                      ))}
                      <Input placeholder="Notas del cliente (medidas especiales, esquinas…)" value={it.spec.notas} onChange={(e) => setNf({ ...nf, items: nf.items.map((x, ix) => ix === i ? { ...x, spec: { ...x.spec, notas: e.target.value } } : x) })} />
                    </div>
                  )}
                </div>
              ))}
              <Btn size="sm" variant="outline" icon="plus" onClick={() => setNf({ ...nf, items: [...nf.items, { productId: "", qty: "1", spec: emptySpec() }] })}>Agregar ítem</Btn>
            </div>
          </Field>
          <div className="rounded-lg bg-pinel/60 border border-pine/20 px-3.5 py-2.5 flex items-center justify-between">
            <div className="text-[12px] text-pined">{showNew === "pedido" ? "Bajo specs: no descuenta stock, entra a fabricación" : "Venta de stock: descuenta showroom al crear"} · IVA 15%</div>
            <div className="font-display font-extrabold text-[18px] text-pined num">{money(preview.total)}</div>
          </div>
          <div className="flex justify-end gap-2">
            <Btn variant="ghost" onClick={() => setShowNew(null)}>Cancelar</Btn>
            <Btn icon="check" onClick={createOrder}>{showNew === "pedido" ? "Crear pedido bajo specs" : "Crear venta de stock"}</Btn>
          </div>
        </div>
      </Modal>

      {/* modal movimiento */}
      <Modal open={mvOpen} onClose={() => setMvOpen(false)} kicker="Kardex" title="Registrar movimiento">
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Field label="Tipo">
              <Select value={mv.type} onChange={(e) => setMv({ ...mv, type: e.target.value as Movement["type"] })}>
                <option value="ingreso">Ingreso</option><option value="egreso">Egreso</option><option value="transferencia">Transferencia</option><option value="ajuste">Ajuste (+)</option>
              </Select>
            </Field>
            <Field label="Bodega">
              <Select value={mv.warehouse} onChange={(e) => setMv({ ...mv, warehouse: e.target.value as Warehouse })}>
                {(["showroom", "bodega", "taller"] as Warehouse[]).map((w) => <option key={w} value={w}>{WH_LABEL[w]}</option>)}
              </Select>
            </Field>
          </div>
          <Field label="Producto">
            <Select value={mv.productId} onChange={(e) => setMv({ ...mv, productId: e.target.value })}>
              <option value="">—</option>
              {state.products.map((p) => <option key={p.id} value={p.id}>{p.sku} · {p.name}</option>)}
            </Select>
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Cantidad"><Input type="number" min={1} value={mv.qty} onChange={(e) => setMv({ ...mv, qty: e.target.value })} /></Field>
            <Field label="Referencia"><Input placeholder="OC / pedido / ajuste" value={mv.ref} onChange={(e) => setMv({ ...mv, ref: e.target.value })} /></Field>
          </div>
          <div className="flex justify-end gap-2"><Btn variant="ghost" onClick={() => setMvOpen(false)}>Cancelar</Btn><Btn icon="check" onClick={saveMv}>Registrar</Btn></div>
        </div>
      </Modal>

      {/* modal anulación */}
      <Modal open={!!anula && !!cur} onClose={() => setAnula(null)} kicker={anula === "anulado" ? "Requiere nota de crédito" : "Cancelación comercial"} title={anula === "anulado" ? "Anular pedido" : "Cancelar pedido"}>
        {cur && (
          <div className="space-y-3">
            <div className="text-[13px] text-mut">
              Vas a <b className="text-ink">{anula === "anulado" ? "ANULAR" : "cancelar"}</b> <b className="font-mono">{cur.code}</b> de {cur.customer} por {money(cur.total)}. Quedará registrado en la traza con folio de anulación.
            </div>
            <Field label="Motivo"><Input value={motivo} onChange={(e) => setMotivo(e.target.value)} placeholder="Ej: cliente desistió / error de precio" /></Field>
            <div className="flex justify-end gap-2">
              <Btn variant="ghost" onClick={() => setAnula(null)}>Volver</Btn>
              <Btn icon="x" onClick={() => {
                if (!motivo.trim()) return toast("Escribe el motivo", "warn");
                dispatch({ type: "ANULA_ORDER", id: cur.id, status: anula, motivo: motivo.trim() });
                toast(`${cur.code} ${anula}`, "warn");
                setAnula(null);
              }}>Confirmar {anula === "anulado" ? "anulación" : "cancelación"}</Btn>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
