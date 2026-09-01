import { useMemo, useState } from "react";
import { useStore } from "../lib/store";
import { fmtDate, money, uid } from "../lib/util";
import { Badge, Btn, Card, Field, Icon, Input, Modal, Progress, SectionTitle, Select, Stat, Tabs, Td, Th } from "../components/ui";

export default function Materiales() {
  const { state, dispatch, toast } = useStore();
  const [tab, setTab] = useState<"inventario" | "bom" | "mrp">("inventario");
  const [selBom, setSelBom] = useState(state.boms[0]?.productId ?? "");
  const [mov, setMov] = useState<{ id: string; dir: 1 | -1 } | null>(null);
  const [mvQty, setMvQty] = useState("1");
  const [mvRef, setMvRef] = useState("");

  const matById = (id: string) => state.materials.find((m) => m.id === id);
  const stockValue = state.materials.reduce((a, m) => a + m.stock * m.costUnit, 0);
  const bajos = state.materials.filter((m) => m.stock <= m.min);

  const bom = state.boms.find((b) => b.productId === selBom);
  const producto = state.products.find((p) => p.id === selBom);
  const bomCost = useMemo(() => {
    if (!bom) return 0;
    const mat = bom.lines.reduce((a, l) => a + l.qty * (matById(l.materialId)?.costUnit ?? 0), 0);
    return mat + (bom.laborMin / 60) * 4.2; // hora hombre taller ≈ $4,20
  }, [bom, state.materials]);

  /* MRP: demanda de materia prima por órdenes de taller activas */
  const mrp = useMemo(() => {
    const demand: Record<string, { name: string; unit: string; need: number; from: string[] }> = {};
    state.workOrders.filter((w) => w.status !== "terminada").forEach((w) => {
      const b = state.boms.find((x) => x.productId === w.productId);
      if (!b) return;
      b.lines.forEach((l) => {
        demand[l.materialId] = demand[l.materialId] ?? { name: matById(l.materialId)?.name ?? l.materialId, unit: l.unit, need: 0, from: [] };
        demand[l.materialId].need += l.qty * w.qty;
        if (!demand[l.materialId].from.includes(w.code)) demand[l.materialId].from.push(w.code);
      });
    });
    return Object.entries(demand).map(([id, d]) => {
      const m = matById(id);
      const stock = m?.stock ?? 0;
      return { id, ...d, stock, falta: Math.max(0, Math.round((d.need - stock) * 100) / 100), cost: m?.costUnit ?? 0 };
    }).sort((a, b) => b.falta - a.falta);
  }, [state.workOrders, state.materials, state.boms]);

  const faltantes = mrp.filter((r) => r.falta > 0);
  const faltanteValor = faltantes.reduce((a, r) => a + r.falta * r.cost, 0);

  const saveMov = () => {
    if (!mov || !Number(mvQty)) return toast("Cantidad inválida", "warn");
    dispatch({ type: "MATERIAL_MOV", id: mov.id, delta: mov.dir * Number(mvQty), ref: mvRef || (mov.dir === 1 ? "Compra proveedor" : "Consumo de taller") });
    setMov(null); setMvQty("1"); setMvRef("");
    toast("Movimiento de materia prima registrado");
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3 anim-up">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">Materiales.php · BOM por producto · MRP</div>
          <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Materia prima & listas de materiales</h1>
        </div>
        <div className="flex items-center gap-2 text-[12px] text-mut">
          <span className="font-mono">{state.materials.length} MP</span> · <span className="font-mono">{money(stockValue, false)} en bodega</span> · <span className="font-mono">{state.boms.length} BOMs</span>
        </div>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 stagger">
        <Stat label="Valor MP en bodega" value={money(stockValue)} icon="layers" tone="pine" sub="costo promedio × stock" />
        <Stat label="Bajo mínimo" value={String(bajos.length)} icon="alert" tone="oak" sub={bajos.map((b) => b.name.split(" ")[0]).slice(0, 3).join(", ") || "ninguna"} />
        <Stat label="Órdenes demandando" value={String(state.workOrders.filter((w) => w.status !== "terminada").length)} icon="saw" tone="steel" sub="órdenes de taller activas" />
        <Stat label="Faltante MRP" value={money(faltanteValor)} icon="box" tone={faltanteValor > 0 ? "brick" : "moss"} sub={faltantes.length ? `${faltantes.length} materiales a comprar` : "cobertura completa"} />
      </div>

      <Tabs
        tabs={[{ id: "inventario", label: "Inventario MP" }, { id: "bom", label: "BOM por producto" }, { id: "mrp", label: "Requerimientos (MRP)" }]}
        value={tab} onChange={(t) => setTab(t as typeof tab)}
      />

      {tab === "inventario" && (
        <Card pad={false} className="anim-up">
          <div className="overflow-x-auto">
            <table className="w-full text-[13px] min-w-[820px]">
              <thead className="bg-ink/3 border-b border-line">
                <tr><Th>Código</Th><Th>Material</Th><Th right>Stock</Th><Th right>Mín.</Th><Th>Cobertura</Th><Th right>Costo und</Th><Th right>Valor</Th><Th>Proveedor</Th><Th right>Mover</Th></tr>
              </thead>
              <tbody>
                {state.materials.map((m) => {
                  const low = m.stock <= m.min;
                  const sup = state.suppliers.find((s) => s.id === m.supplierId);
                  return (
                    <tr key={m.id} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors">
                      <Td className="font-mono text-[11.5px] text-mut">{m.code}</Td>
                      <Td className="font-semibold text-ink">{m.name}<span className="text-fog font-normal text-[11px]"> · {m.unit}</span></Td>
                      <Td right className="num font-mono font-semibold text-ink">{m.stock}</Td>
                      <Td right className="num font-mono text-mut">{m.min}</Td>
                      <Td><div className="w-24"><Progress value={(m.stock / Math.max(1, m.min * 2)) * 100} tone={low ? "brick" : "pine"} /></div></Td>
                      <Td right className="num font-mono text-mut">{money(m.costUnit)}</Td>
                      <Td right className="num font-mono text-ink">{money(m.stock * m.costUnit)}</Td>
                      <Td className="text-mut text-[12px]">{sup?.name ?? "—"}</Td>
                      <Td right>
                        <div className="flex justify-end gap-1">
                          <Btn size="sm" variant="outline" onClick={() => { setMov({ id: m.id, dir: 1 }); setMvQty("1"); setMvRef(""); }}>+</Btn>
                          <Btn size="sm" variant="ghost" onClick={() => { setMov({ id: m.id, dir: -1 }); setMvQty("1"); setMvRef(""); }}>−</Btn>
                        </div>
                      </Td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {tab === "bom" && (
        <div className="grid lg:grid-cols-3 gap-4 anim-up">
          <Card className="lg:col-span-2">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <SectionTitle kicker="Lista de materiales" title="BOM unitario" />
              <Select value={selBom} onChange={(e) => setSelBom(e.target.value)} className="ml-auto w-auto min-w-[240px]">
                {state.boms.map((b) => {
                  const p = state.products.find((x) => x.id === b.productId);
                  return <option key={b.productId} value={b.productId}>{p?.sku} · {p?.name}</option>;
                })}
              </Select>
            </div>
            {bom && (
              <div className="rounded-lg border border-line overflow-hidden">
                <table className="w-full text-[13px]">
                  <thead className="bg-ink/3 border-b border-line">
                    <tr><Th>Material</Th><Th right>Por unidad</Th><Th right>Costo</Th><Th right>Subtotal</Th></tr>
                  </thead>
                  <tbody>
                    {bom.lines.map((l, i) => {
                      const m = matById(l.materialId);
                      return (
                        <tr key={i} className="border-b border-line/70 last:border-0">
                          <Td className="font-semibold text-ink">{m?.name}<span className="text-fog text-[11px] font-normal"> · {m?.code}</span></Td>
                          <Td right className="num font-mono text-mut">{l.qty} {l.unit}</Td>
                          <Td right className="num font-mono text-mut">{money(m?.costUnit ?? 0)}</Td>
                          <Td right className="num font-mono text-ink font-semibold">{money(l.qty * (m?.costUnit ?? 0))}</Td>
                        </tr>
                      );
                    })}
                    <tr className="bg-oakl/40">
                      <Td className="font-bold text-oakd">Mano de obra ({bom.laborMin} min)</Td><Td /><Td />
                      <Td right className="num font-mono font-bold text-oakd">{money((bom.laborMin / 60) * 4.2)}</Td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </Card>
          <div className="space-y-4">
            <Card>
              <SectionTitle kicker="Costeo" title="Roll-up del BOM" />
              {bom && producto && (
                <div className="space-y-2 text-[12.5px]">
                  <div className="flex justify-between"><span className="text-mut">Costo calculado</span><span className="font-mono font-bold text-ink num">{money(bomCost)}</span></div>
                  <div className="flex justify-between"><span className="text-mut">Costo en ficha PIM</span><span className="font-mono text-ink num">{money(producto.cost)}</span></div>
                  <div className="flex justify-between"><span className="text-mut">Desviación</span>
                    <Badge tone={Math.abs(bomCost - producto.cost) / producto.cost < 0.12 ? "moss" : "oak"}>
                      {Math.abs(bomCost - producto.cost) / producto.cost < 0.12 ? "±" : "▲"}{Math.round((Math.abs(bomCost - producto.cost) / producto.cost) * 100)}%
                    </Badge>
                  </div>
                  <div className="rounded-lg bg-pinel/60 border border-pine/20 p-2.5 flex justify-between items-center">
                    <span className="text-pined text-[12px]">Margen real vs PVP</span>
                    <span className="font-display font-extrabold text-pine num">{Math.round(((producto.price - bomCost) / producto.price) * 100)}%</span>
                  </div>
                </div>
              )}
            </Card>
            <Card>
              <SectionTitle kicker="Taller" title="Órdenes consumiendo este BOM" />
              <div className="space-y-1.5">
                {state.workOrders.filter((w) => w.productId === selBom && w.status !== "terminada").map((w) => (
                  <div key={w.id} className="flex items-center justify-between rounded-lg border border-line px-3 py-2 text-[12.5px]">
                    <span className="font-mono text-mut">{w.code}</span>
                    <span className="text-ink font-semibold">{w.qty}× en {w.status}</span>
                    <span className="font-mono text-oakd num">×{w.qty} BOM</span>
                  </div>
                ))}
                {state.workOrders.filter((w) => w.productId === selBom && w.status !== "terminada").length === 0 && (
                  <div className="text-[12px] text-mut">Sin órdenes activas para este producto.</div>
                )}
              </div>
            </Card>
          </div>
        </div>
      )}

      {tab === "mrp" && (
        <div className="space-y-4 anim-up">
          <Card pad={false}>
            <div className="flex flex-wrap items-center gap-2 p-3 border-b border-line">
              <SectionTitle kicker="MRP · requerimiento de materiales" title="Demanda del taller vs stock" />
              {faltantes.length > 0 && (
                <Btn size="sm" variant="oak" icon="zap" className="ml-auto" onClick={() => {
                  dispatch({ type: "EVENTS", events: [{ id: uid(), ts: Date.now(), type: "logistica" as const, msg: `Sugerencia de compra generada · ${faltantes.length} MP por ${money(faltanteValor)}` }] });
                  toast(`Sugerencia de compra enviada a ${[...new Set(faltantes.map((f) => matById(f.id)?.supplierId))].length} proveedores`);
                }}>Generar sugerencia de compra</Btn>
              )}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] min-w-[760px]">
                <thead className="bg-ink/3 border-b border-line">
                  <tr><Th>Material</Th><Th right>Necesario</Th><Th right>Stock</Th><Th right>Faltante</Th><Th right>Costo compra</Th><Th>Órdenes que lo demandan</Th><Th>Estado</Th></tr>
                </thead>
                <tbody>
                  {mrp.map((r) => (
                    <tr key={r.id} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors">
                      <Td className="font-semibold text-ink">{r.name}</Td>
                      <Td right className="num font-mono text-ink">{r.need} {r.unit}</Td>
                      <Td right className="num font-mono text-mut">{r.stock} {r.unit}</Td>
                      <Td right className="num font-mono font-bold">{r.falta > 0 ? <span className="text-brick">−{r.falta}</span> : <span className="text-[#41621f]">0</span>}</Td>
                      <Td right className="num font-mono text-mut">{r.falta > 0 ? money(r.falta * r.cost) : "—"}</Td>
                      <Td><div className="flex gap-1 flex-wrap">{r.from.map((c) => <span key={c} className="font-mono text-[10.5px] bg-ink/5 px-1.5 py-0.5 rounded">{c}</span>)}</div></Td>
                      <Td><Badge tone={r.falta > 0 ? "brick" : "moss"} dot>{r.falta > 0 ? "comprar" : "cubierto"}</Badge></Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-3">
              <span className="w-9 h-9 rounded-lg bg-oakl text-oakd grid place-items-center shrink-0"><Icon name="zap" size={16} /></span>
              <div className="text-[12.5px] text-mut leading-relaxed">
                <b className="text-ink">Regla del taller:</b> el MRP multiplica cada BOM por la cantidad de sus órdenes activas. Si la
                <b className="text-oakd"> Base giratoria metálica</b> está en rojo, el pedido de poltronas no puede pasar de CORTE — el sistema bloquea y sugiere la OC al proveedor de muebles importados.
              </div>
            </div>
          </Card>
        </div>
      )}

      <Modal open={!!mov} onClose={() => setMov(null)} kicker="Materia prima" title={mov?.dir === 1 ? "Entrada de material" : "Consumo de material"}>
        {mov && (() => {
          const m = matById(mov.id);
          return (
            <div className="space-y-3">
              <div className="text-[13px] text-mut"><b className="text-ink">{m?.name}</b> · stock actual <b className="font-mono">{m?.stock} {m?.unit}</b></div>
              <div className="grid grid-cols-2 gap-3">
                <Field label={`Cantidad (${m?.unit})`}><Input type="number" min={0.1} step="0.1" value={mvQty} onChange={(e) => setMvQty(e.target.value)} /></Field>
                <Field label="Referencia"><Input placeholder={mov.dir === 1 ? "OC-2215 / proveedor" : "OF-2103"} value={mvRef} onChange={(e) => setMvRef(e.target.value)} /></Field>
              </div>
              <div className="flex justify-end gap-2"><Btn variant="ghost" onClick={() => setMov(null)}>Cancelar</Btn><Btn icon="check" onClick={saveMov}>{mov.dir === 1 ? "Registrar entrada" : "Registrar consumo"}</Btn></div>
            </div>
          );
        })()}
      </Modal>
    </div>
  );
}
