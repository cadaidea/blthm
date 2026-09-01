import { useMemo, useState } from "react";
import { buildOrder, buildPayLink, orderFlow, useStore } from "../lib/store";
import type { Movement, Order, OrderStatus, Warehouse } from "../lib/types";
import { calcTotals, downloadCsv, fmtDate, money, uid } from "../lib/util";
import { Badge, Btn, Card, Drawer, EmptyState, Field, Icon, Input, Modal, orderTone, payTone, SectionTitle, Select, Tabs, Td, Th } from "../components/ui";
import { Thumb } from "../components/Img";

const WH_LABEL: Record<Warehouse, string> = { showroom: "Showroom", bodega: "Bodega", taller: "Taller" };
const CHANNEL_LABEL: Record<Order["channel"], string> = { tienda: "Tienda", web: "Web", link_pago: "Link de pago", whatsapp: "WhatsApp" };

export default function Operaciones({ initialQuery }: { initialQuery?: string }) {
  const { state, dispatch, toast } = useStore();
  const [tab, setTab] = useState("pedidos");
  const [q, setQ] = useState(initialQuery ?? "");
  const [statusF, setStatusF] = useState<string | null>(null);
  const [open, setOpen] = useState<Order | null>(null);
  const [showNew, setShowNew] = useState(false);
  const [showMov, setShowMov] = useState(false);
  const [no, setNo] = useState({ customerId: "", rows: [{ productId: "", qty: "1" }], channel: "tienda" as Order["channel"] });
  const [mv, setMv] = useState({ productId: "", warehouse: "bodega" as Warehouse, type: "ingreso" as Movement["type"], qty: "1", ref: "" });

  const orders = state.orders.filter((o) => (o.code + o.customer + o.city).toLowerCase().includes(q.toLowerCase()) && (!statusF || o.status === statusF));
  const live = open ? state.orders.find((o) => o.id === open.id) ?? open : null;

  const pipeline = useMemo(() => orderFlow.map((s) => ({ s, n: state.orders.filter((o) => o.status === s).length })), [state.orders]);

  const draftLines = no.rows.filter((r) => r.productId && Number(r.qty) > 0).map((r) => {
    const p = state.products.find((x) => x.id === r.productId)!;
    return { qty: Number(r.qty), price: p.price };
  });
  const draftTotals = calcTotals(draftLines);

  const submitOrder = () => {
    if (!no.customerId || draftLines.length === 0) return toast("Elige cliente y al menos un producto", "warn");
    const order = buildOrder(state, no.customerId, no.rows.filter((r) => r.productId).map((r) => ({ productId: r.productId, qty: Number(r.qty) || 1 })), no.channel);
    dispatch({ type: "CREATE_ORDER", order });
    setShowNew(false);
    setNo({ customerId: "", rows: [{ productId: "", qty: "1" }], channel: "tienda" });
    toast(`Pedido ${order.code} creado · ${money(order.total)}`);
  };

  const advance = (o: Order) => {
    const idx = orderFlow.indexOf(o.status);
    if (idx >= orderFlow.length - 1) return;
    const next = orderFlow[idx + 1];
    dispatch({ type: "ADVANCE_ORDER", id: o.id, status: next });
    if (next === "entregado") toast(`${o.code} entregado · factura electrónica emitida`);
    else toast(`${o.code} → ${next.toUpperCase()}`);
  };

  const submitMov = () => {
    const p = state.products.find((x) => x.id === mv.productId);
    if (!p) return toast("Selecciona un producto", "warn");
    const qty = Number(mv.qty) || 0;
    dispatch({ type: "MOVEMENT", mv: { id: uid(), ts: new Date().toISOString(), type: mv.type, warehouse: mv.warehouse, productId: p.id, sku: p.sku, productName: p.name, qty, ref: mv.ref || "MANUAL", user: "Luis Ch." } });
    setShowMov(false);
    setMv({ productId: "", warehouse: "bodega", type: "ingreso", qty: "1", ref: "" });
    toast(`Movimiento registrado en ${WH_LABEL[mv.warehouse]}`);
  };

  const whValue = (w: Warehouse) => state.products.reduce((a, p) => a + p.stock[w] * p.cost, 0);
  const whUnits = (w: Warehouse) => state.products.reduce((a, p) => a + p.stock[w], 0);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3 anim-up">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">OMS · operación y fulfill­ment</div>
          <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Pedidos, stock y movimientos</h1>
        </div>
        <div className="flex gap-2">
          <Btn variant="outline" icon="refresh" onClick={() => setShowMov(true)}>Movimiento de stock</Btn>
          <Btn icon="plus" onClick={() => setShowNew(true)}>Nuevo pedido</Btn>
        </div>
      </div>

      <Tabs value={tab} onChange={setTab} tabs={[
        { id: "pedidos", label: "Pedidos", icon: "truck", count: state.orders.length },
        { id: "inventario", label: "Inventario", icon: "warehouse", count: state.products.length },
        { id: "movimientos", label: "Movimientos", icon: "doc", count: state.movements.length },
      ]} />

      {tab === "pedidos" && (
        <>
          {/* pipeline */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 stagger">
            {pipeline.map(({ s, n }) => (
              <button key={s} onClick={() => setStatusF(statusF === s ? null : s)}
                className={`bg-card border rounded-xl px-3 py-2.5 text-left hover:-translate-y-px transition-all ${statusF === s ? "border-pine ring-2 ring-pine/20 shadow-md" : "border-line hover:border-pine/40"}`}>
                <div className="font-display font-extrabold text-[20px] text-ink num leading-none">{n}</div>
                <div className="flex items-center gap-1.5 mt-1.5"><Badge tone={orderTone[s]} dot>{s}</Badge></div>
              </button>
            ))}
          </div>

          <Card pad={false} className="anim-up">
            <div className="p-3 border-b border-line flex flex-wrap gap-2 items-center">
              <div className="relative flex-1 min-w-[200px]">
                <Icon name="search" size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-fog" />
                <Input placeholder="Buscar pedido, cliente, ciudad…" value={q} onChange={(e) => setQ(e.target.value)} className="pl-8" />
              </div>
              {statusF && (
                <button onClick={() => setStatusF(null)} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-pinel border border-pine/30 text-pined text-[12px] font-semibold hover:bg-pinel/70 transition-colors anim-pop">
                  filtrando: {statusF} <Icon name="x" size={12} />
                </button>
              )}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] min-w-[820px]">
                <thead className="bg-ink/3 border-b border-line">
                  <tr><Th>Pedido</Th><Th>Cliente / ciudad</Th><Th>Canal</Th><Th right>Total +IVA</Th><Th>Pago</Th><Th>Estado</Th><Th right>Flujo</Th></tr>
                </thead>
                <tbody>
                  {orders.map((o) => (
                    <tr key={o.id} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors cursor-pointer" onClick={() => setOpen(o)}>
                      <Td>
                        <div className="font-mono font-semibold text-ink">{o.code}</div>
                        <div className="text-[10.5px] text-fog">{fmtDate(o.createdAt)} · {o.items.length} ítem(s)</div>
                      </Td>
                      <Td>
                        <div className="font-semibold text-ink leading-tight">{o.customer}</div>
                        <div className="text-[11px] text-mut">{o.city} · ETA {fmtDate(o.eta)}</div>
                      </Td>
                      <Td><Badge tone="fog">{CHANNEL_LABEL[o.channel]}</Badge></Td>
                      <Td right className="font-mono num font-semibold text-ink">{money(o.total)}</Td>
                      <Td><Badge tone={payTone[o.payment]} dot>{o.payment}</Badge></Td>
                      <Td><Badge tone={orderTone[o.status]} dot>{o.status}</Badge></Td>
                      <Td right>
                        <div onClick={(e) => e.stopPropagation()} className="flex justify-end">
                          {o.status !== "entregado" && o.status !== "anulado" ? (
                            <Btn size="sm" variant="outline" onClick={() => advance(o)}>→ {orderFlow[orderFlow.indexOf(o.status) + 1]}</Btn>
                          ) : (
                            <Badge tone="pine">completado</Badge>
                          )}
                        </div>
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {orders.length === 0 && <EmptyState icon="truck" title="Sin pedidos" sub="Crea un pedido o limpia la búsqueda." action={<Btn size="sm" icon="plus" onClick={() => setShowNew(true)}>Nuevo pedido</Btn>} />}
            </div>
          </Card>
        </>
      )}

      {tab === "inventario" && (
        <>
          <div className="grid sm:grid-cols-3 gap-3 stagger">
            {(["showroom", "bodega", "taller"] as Warehouse[]).map((w, i) => (
              <Card key={w} className="relative overflow-hidden">
                <div className="absolute -right-4 -top-4 opacity-8 text-ink"><Icon name="warehouse" size={90} /></div>
                <div className="relative">
                  <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-mut">{WH_LABEL[w]}</div>
                  <div className="font-display font-extrabold text-[24px] text-ink num mt-1">{whUnits(w)} und</div>
                  <div className="text-[12px] text-mut mt-0.5">valorizado en <span className="font-mono">{money(whValue(w), false)}</span></div>
                  <div className="mt-2"><Badge tone={i === 0 ? "pine" : i === 1 ? "steel" : "oak"}>{i === 0 ? "piso de venta" : i === 1 ? "almacén central" : "WIP fabricación"}</Badge></div>
                </div>
              </Card>
            ))}
          </div>
          <Card pad={false} className="anim-up">
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] min-w-[680px]">
                <thead className="bg-ink/3 border-b border-line">
                  <tr><Th>SKU</Th><Th right>Showroom</Th><Th right>Bodega</Th><Th right>Taller</Th><Th right>Total</Th><Th>Salud</Th></tr>
                </thead>
                <tbody>
                  {state.products.map((p) => {
                    const t = p.stock.showroom + p.stock.bodega + p.stock.taller;
                    const low = t <= p.min;
                    return (
                      <tr key={p.id} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors">
                        <Td>
                          <div className="flex items-center gap-2.5">
                            <Thumb src={p.img} alt={p.name} className="w-9 h-9 rounded-lg border border-line" />
                            <div><div className="font-semibold text-ink leading-tight">{p.name}</div><div className="font-mono text-[10.5px] text-fog">{p.sku}</div></div>
                          </div>
                        </Td>
                        <Td right className="font-mono num">{p.stock.showroom}</Td>
                        <Td right className="font-mono num">{p.stock.bodega}</Td>
                        <Td right className="font-mono num">{p.stock.taller}</Td>
                        <Td right className="font-mono num font-semibold">{t}</Td>
                        <Td>{low ? <Badge tone="brick" dot>reponer (mín {p.min})</Badge> : <Badge tone="moss" dot>óptimo</Badge>}</Td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>
        </>
      )}

      {tab === "movimientos" && (
        <Card pad={false} className="anim-up">
          <div className="p-3 border-b border-line flex items-center justify-between">
            <SectionTitle title="Kardex de movimientos" />
            <Btn size="sm" variant="outline" icon="dl" onClick={() => downloadCsv("movimientos.csv", ["Fecha", "Tipo", "Bodega", "SKU", "Producto", "Cant", "Ref", "Usuario"], state.movements.map((m) => [m.ts, m.type, m.warehouse, m.sku, m.productName, m.qty, m.ref, m.user]))}>Exportar CSV</Btn>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px] min-w-[720px]">
              <thead className="bg-ink/3 border-b border-line">
                <tr><Th>Fecha</Th><Th>Tipo</Th><Th>Bodega</Th><Th>Producto</Th><Th right>Cant</Th><Th>Referencia</Th><Th>Usuario</Th></tr>
              </thead>
              <tbody>
                {state.movements.map((m) => (
                  <tr key={m.id} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors">
                    <Td className="font-mono text-[11.5px] text-mut whitespace-nowrap">{fmtDate(m.ts)} {new Date(m.ts).toLocaleTimeString("es-EC", { hour: "2-digit", minute: "2-digit" })}</Td>
                    <Td><Badge tone={m.type === "ingreso" ? "moss" : m.type === "egreso" ? "brick" : m.type === "ajuste" ? "oak" : "steel"}>{m.type}</Badge></Td>
                    <Td className="text-mut">{WH_LABEL[m.warehouse]}</Td>
                    <Td><span className="font-mono text-[11.5px] text-fog">{m.sku}</span> <span className="text-ink">{m.productName}</span></Td>
                    <Td right className="font-mono num font-semibold">{m.type === "egreso" ? "−" : "+"}{m.qty}</Td>
                    <Td className="font-mono text-[11.5px] text-mut">{m.ref}</Td>
                    <Td className="text-mut">{m.user}</Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* order drawer */}
      <Drawer open={!!live} onClose={() => setOpen(null)} kicker={`OMS · ${live?.code ?? ""}`} title={live?.customer ?? ""}>
        {live && (() => {
          const next = orderFlow[orderFlow.indexOf(live.status) + 1];
          return (
            <div className="space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge tone={orderTone[live.status]} dot>{live.status}</Badge>
                <Badge tone={payTone[live.payment]} dot>{live.payment}</Badge>
                <Badge tone="fog">{CHANNEL_LABEL[live.channel]}</Badge>
                <Badge tone="fog">{live.city}</Badge>
              </div>
              <div>
                <SectionTitle kicker="Ítems" title="Detalle del pedido" />
                <div className="rounded-xl border border-line overflow-hidden">
                  {live.items.map((i, ix) => (
                    <div key={ix} className="flex items-center justify-between px-3 py-2.5 text-[13px] border-b border-line/70 last:border-0">
                      <div><div className="font-semibold text-ink">{i.name}</div><div className="font-mono text-[10.5px] text-fog">{i.sku} · {i.qty} × {money(i.price)}</div></div>
                      <div className="font-mono num">{money(i.qty * i.price)}</div>
                    </div>
                  ))}
                  <div className="px-3 py-2.5 bg-ink/3 space-y-1 text-[12.5px]">
                    <div className="flex justify-between text-mut"><span>Subtotal</span><span className="font-mono num">{money(live.subtotal)}</span></div>
                    <div className="flex justify-between text-mut"><span>IVA 15%</span><span className="font-mono num">{money(live.iva)}</span></div>
                    <div className="flex justify-between font-bold text-ink text-[14px]"><span>Total</span><span className="font-mono num">{money(live.total)}</span></div>
                  </div>
                </div>
              </div>
              <Field label="Proveedor de transporte">
                <Select value={live.transportId ?? ""} onChange={(e) => dispatch({ type: "ORDER_META", id: live.id, patch: { transportId: e.target.value || null } })}>
                  <option value="">— sin asignar —</option>
                  {state.suppliers.filter((s) => s.kind === "transporte").map((s) => <option key={s.id} value={s.id}>{s.name} · {s.city}</option>)}
                </Select>
              </Field>
              <div className="flex gap-2 flex-wrap">
                {next && live.status !== "anulado" && <Btn icon="arrow" onClick={() => advance(live)}>Avanzar a {next}</Btn>}
                {live.payment !== "pagado" && (
                  <Btn variant="oak" icon="qr" onClick={() => {
                    const link = buildPayLink(state, live.total, `Pedido ${live.code} · ${live.customer}`, live.customer, live.id);
                    dispatch({ type: "CREATE_PAYLINK", link });
                    toast(`Link PayPhone creado por ${money(link.amount)} — simula el pago en Cobros`);
                  }}>Link de cobro PayPhone</Btn>
                )}
                {live.status === "nuevo" && <Btn variant="danger" size="sm" icon="x" onClick={() => { dispatch({ type: "ADVANCE_ORDER", id: live.id, status: "anulado" }); toast("Pedido anulado", "warn"); }}>Anular</Btn>}
              </div>
            </div>
          );
        })()}
      </Drawer>

      {/* new order modal */}
      <Modal open={showNew} onClose={() => setShowNew(false)} kicker="OMS · venta" title="Nuevo pedido" wide>
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <Field label="Cliente">
              <Select value={no.customerId} onChange={(e) => setNo({ ...no, customerId: e.target.value })}>
                <option value="">— seleccionar —</option>
                {state.customers.map((c) => <option key={c.id} value={c.id}>{c.name} · {c.city}</option>)}
              </Select>
            </Field>
            <Field label="Canal">
              <Select value={no.channel} onChange={(e) => setNo({ ...no, channel: e.target.value as Order["channel"] })}>
                <option value="tienda">Tienda física</option><option value="web">Web</option><option value="link_pago">Link de pago</option><option value="whatsapp">WhatsApp</option>
              </Select>
            </Field>
          </div>
          <Field label="Ítems">
            <div className="space-y-2">
              {no.rows.map((r, i) => (
                <div key={i} className="flex gap-2">
                  <Select value={r.productId} onChange={(e) => setNo({ ...no, rows: no.rows.map((x, ix) => ix === i ? { ...x, productId: e.target.value } : x) })} className="flex-1">
                    <option value="">— producto —</option>
                    {state.products.map((p) => <option key={p.id} value={p.id}>{p.sku} · {p.name} ({money(p.price)})</option>)}
                  </Select>
                  <Input type="number" min={1} value={r.qty} onChange={(e) => setNo({ ...no, rows: no.rows.map((x, ix) => ix === i ? { ...x, qty: e.target.value } : x) })} className="w-20" />
                  <Btn variant="ghost" size="sm" icon="x" onClick={() => setNo({ ...no, rows: no.rows.filter((_, ix) => ix !== i) })} disabled={no.rows.length === 1} />
                </div>
              ))}
              <Btn size="sm" variant="outline" icon="plus" onClick={() => setNo({ ...no, rows: [...no.rows, { productId: "", qty: "1" }] })}>Agregar ítem</Btn>
            </div>
          </Field>
          <div className="rounded-lg bg-pinel/50 border border-pine/15 px-3 py-2.5 flex items-center justify-between text-[13px]">
            <span className="text-pined">Subtotal {money(draftTotals.subtotal)} + IVA 15% {money(draftTotals.iva)}</span>
            <span className="font-display font-extrabold text-[17px] text-ink num">{money(draftTotals.total)}</span>
          </div>
          <div className="flex justify-end gap-2"><Btn variant="ghost" onClick={() => setShowNew(false)}>Cancelar</Btn><Btn icon="check" onClick={submitOrder}>Crear pedido</Btn></div>
        </div>
      </Modal>

      {/* movement modal */}
      <Modal open={showMov} onClose={() => setShowMov(false)} kicker="OMS · kardex" title="Movimiento de stock">
        <div className="space-y-3">
          <Field label="Producto">
            <Select value={mv.productId} onChange={(e) => setMv({ ...mv, productId: e.target.value })}>
              <option value="">— seleccionar —</option>
              {state.products.map((p) => <option key={p.id} value={p.id}>{p.sku} · {p.name}</option>)}
            </Select>
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Tipo">
              <Select value={mv.type} onChange={(e) => setMv({ ...mv, type: e.target.value as Movement["type"] })}>
                <option value="ingreso">Ingreso</option><option value="egreso">Egreso</option><option value="ajuste">Ajuste ±</option>
              </Select>
            </Field>
            <Field label="Bodega">
              <Select value={mv.warehouse} onChange={(e) => setMv({ ...mv, warehouse: e.target.value as Warehouse })}>
                <option value="showroom">Showroom</option><option value="bodega">Bodega</option><option value="taller">Taller</option>
              </Select>
            </Field>
            <Field label="Cantidad"><Input type="number" value={mv.qty} onChange={(e) => setMv({ ...mv, qty: e.target.value })} /></Field>
            <Field label="Referencia"><Input value={mv.ref} onChange={(e) => setMv({ ...mv, ref: e.target.value })} placeholder="OC / pedido / conteo" /></Field>
          </div>
          <div className="flex justify-end gap-2"><Btn variant="ghost" onClick={() => setShowMov(false)}>Cancelar</Btn><Btn icon="check" onClick={submitMov}>Registrar</Btn></div>
        </div>
      </Modal>
    </div>
  );
}
