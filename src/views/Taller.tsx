import { useState } from "react";
import { useStore, woFlow } from "../lib/store";
import type { WorkOrder, WoStatus } from "../lib/types";
import { fmtDate, money, uid } from "../lib/util";
import { Badge, Btn, Card, Field, Icon, Input, Modal, Progress, SectionTitle, Select } from "../components/ui";

const woTone: Record<string, "fog" | "oak" | "pine" | "steel" | "moss"> = {
  planificada: "fog", corte: "oak", ensamblaje: "pine", acabado: "steel", qa: "oak", terminada: "moss",
};

export default function Taller() {
  const { state, dispatch, toast } = useStore();
  const [show, setShow] = useState(false);
  const [nw, setNw] = useState({ productId: "", qty: "1", assignedTo: "Diego Guamán", due: "", mats: [{ name: "", qty: "", cost: "" }], labor: "150" });

  const advance = (w: WorkOrder) => {
    const next = woFlow[woFlow.indexOf(w.status) + 1];
    if (!next) return;
    dispatch({ type: "ADVANCE_WO", id: w.id, status: next });
    toast(next === "terminada" ? `${w.code} terminada · stock enviado a bodega` : `${w.code} → ${next.toUpperCase()}`);
  };

  const submit = () => {
    const p = state.products.find((x) => x.id === nw.productId);
    if (!p) return toast("Selecciona el producto a fabricar", "warn");
    const wo: WorkOrder = {
      id: uid(),
      code: `OF-${2105 + state.workOrders.length}`,
      productId: p.id, productName: p.name, qty: Number(nw.qty) || 1,
      status: "planificada",
      start: new Date().toISOString(),
      due: nw.due ? new Date(nw.due).toISOString() : new Date(Date.now() + 14 * 864e5).toISOString(),
      assignedTo: nw.assignedTo, progress: 5, orderId: null,
      materials: nw.mats.filter((m) => m.name).map((m) => ({ name: m.name, qty: m.qty || "1", cost: Number(m.cost) || 0 })),
      laborCost: Number(nw.labor) || 0,
    };
    dispatch({ type: "CREATE_WO", wo });
    setShow(false);
    setNw({ productId: "", qty: "1", assignedTo: "Diego Guamán", due: "", mats: [{ name: "", qty: "", cost: "" }], labor: "150" });
    toast(`Orden ${wo.code} enviada al piso de taller`);
  };

  const inProgress = state.workOrders.filter((w) => w.status !== "terminada");
  const done = state.workOrders.filter((w) => w.status === "terminada");
  const totalMatCost = (w: WorkOrder) => w.materials.reduce((a, m) => a + m.cost, 0);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3 anim-up">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">MES · fabricación propia (en_producción del flujo BLETIA)</div>
          <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Piso de taller</h1>
          <p className="text-[13px] text-mut mt-1">{inProgress.length} órdenes activas · {done.length} terminadas este periodo</p>
        </div>
        <Btn icon="plus" onClick={() => setShow(true)}>Orden de fabricación</Btn>
      </div>

      <div className="grid md:grid-cols-2 gap-4 stagger">
        {inProgress.map((w) => {
          const next = woFlow[woFlow.indexOf(w.status) + 1];
          const stepIdx = woFlow.indexOf(w.status);
          const linkedOrder = state.orders.find((o) => o.id === w.orderId);
          return (
            <Card key={w.id} className="hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="font-mono text-[11px] text-fog">{w.code} · {w.assignedTo}</div>
                  <div className="font-display font-bold text-[16px] text-ink leading-tight mt-0.5">{w.qty}× {w.productName}</div>
                  {linkedOrder && <div className="text-[11px] text-steel font-semibold mt-0.5">↳ para {linkedOrder.code} · {linkedOrder.customer}</div>}
                </div>
                <Badge tone={woTone[w.status] ?? "oak"} dot>{w.status}</Badge>
              </div>

              <div className="flex items-center gap-1 mt-3.5">
                {woFlow.map((s, i) => (
                  <div key={s} className="flex-1">
                    <div className={`h-1.5 rounded-full transition-colors duration-300 ${i <= stepIdx ? (s === "terminada" ? "bg-moss" : "bg-pine") : "bg-ink/10"}`} />
                    <div className={`text-[8.5px] font-mono uppercase tracking-wide mt-1 text-center hidden sm:block ${i <= stepIdx ? "text-pine" : "text-fog"}`}>{s}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-3">
                <Progress value={w.progress} tone={w.progress > 80 ? "moss" : "pine"} />
                <span className="font-mono text-[12px] text-ink num w-10 text-right">{w.progress}%</span>
              </div>

              <div className="mt-3.5 rounded-lg border border-line overflow-hidden">
                <div className="px-3 py-1.5 bg-ink/3 text-[10px] font-bold uppercase tracking-[0.14em] text-mut flex items-center gap-1.5"><Icon name="saw" size={11} />Lista de materiales</div>
                {w.materials.map((m, i) => (
                  <div key={i} className="flex items-center justify-between px-3 py-1.5 text-[12px] border-t border-line/70">
                    <span className="text-ink">{m.name}</span>
                    <span className="text-mut font-mono text-[11px]">{m.qty} · {money(m.cost)}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between px-3 py-1.5 text-[12px] border-t border-line bg-oakl/40">
                  <span className="text-oakd font-semibold">Mano de obra</span>
                  <span className="font-mono text-oakd">{money(w.laborCost)}</span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-3.5">
                <div className="text-[11.5px] text-mut">
                  entrega <b className="text-ink">{fmtDate(w.due)}</b> · costo est. <b className="font-mono text-ink">{money(totalMatCost(w) + w.laborCost)}</b>
                </div>
                {next && <Btn size="sm" variant={next === "terminada" ? "primary" : "outline"} icon={next === "terminada" ? "check" : "arrow"} onClick={() => advance(w)}>{next === "terminada" ? "Cerrar orden" : `→ ${next}`}</Btn>}
              </div>
            </Card>
          );
        })}
      </div>

      {done.length > 0 && (
        <Card className="anim-up">
          <SectionTitle kicker="Historial" title="Órdenes terminadas" />
          <div className="space-y-1.5">
            {done.map((w) => (
              <div key={w.id} className="flex items-center gap-3 rounded-lg border border-line px-3 py-2 text-[12.5px]">
                <span className="w-7 h-7 rounded-lg bg-mossl text-[#41621f] grid place-items-center"><Icon name="check" size={13} /></span>
                <span className="font-mono text-mut">{w.code}</span>
                <span className="text-ink font-semibold">{w.qty}× {w.productName}</span>
                <Badge tone="moss">+{w.qty} a bodega</Badge>
                <span className="ml-auto text-mut">cerrada {fmtDate(w.due)}</span>
              </div>
            ))}
          </div>
        </Card>
      )}

      <Modal open={show} onClose={() => setShow(false)} kicker="MES · planificación" title="Nueva orden de fabricación" wide>
        <div className="space-y-3">
          <div className="grid sm:grid-cols-3 gap-3">
            <Field label="Producto">
              <Select value={nw.productId} onChange={(e) => setNw({ ...nw, productId: e.target.value })}>
                <option value="">— seleccionar —</option>
                {state.products.filter((p) => p.line === "fabricacion").map((p) => <option key={p.id} value={p.id}>{p.sku} · {p.name}</option>)}
              </Select>
            </Field>
            <Field label="Cantidad"><Input type="number" min={1} value={nw.qty} onChange={(e) => setNw({ ...nw, qty: e.target.value })} /></Field>
            <Field label="Fecha entrega"><Input type="date" value={nw.due} onChange={(e) => setNw({ ...nw, due: e.target.value })} /></Field>
          </div>
          <Field label="Maestro asignado">
            <Select value={nw.assignedTo} onChange={(e) => setNw({ ...nw, assignedTo: e.target.value })}>
              {["Diego Guamán", "Segundo M.", "Fausto T."].map((m) => <option key={m}>{m}</option>)}
            </Select>
          </Field>
          <Field label="Materiales">
            <div className="space-y-2">
              {nw.mats.map((m, i) => (
                <div key={i} className="flex gap-2">
                  <Input placeholder="Material (ej: triplex 18mm)" value={m.name} onChange={(e) => setNw({ ...nw, mats: nw.mats.map((x, ix) => ix === i ? { ...x, name: e.target.value } : x) })} className="flex-1" />
                  <Input placeholder="cant." value={m.qty} onChange={(e) => setNw({ ...nw, mats: nw.mats.map((x, ix) => ix === i ? { ...x, qty: e.target.value } : x) })} className="w-20" />
                  <Input placeholder="$" type="number" value={m.cost} onChange={(e) => setNw({ ...nw, mats: nw.mats.map((x, ix) => ix === i ? { ...x, cost: e.target.value } : x) })} className="w-24" />
                  <Btn variant="ghost" size="sm" icon="x" onClick={() => setNw({ ...nw, mats: nw.mats.filter((_, ix) => ix !== i) })} disabled={nw.mats.length === 1} />
                </div>
              ))}
              <Btn size="sm" variant="outline" icon="plus" onClick={() => setNw({ ...nw, mats: [...nw.mats, { name: "", qty: "", cost: "" }] })}>Agregar material</Btn>
            </div>
          </Field>
          <Field label="Mano de obra estimada (USD)"><Input type="number" value={nw.labor} onChange={(e) => setNw({ ...nw, labor: e.target.value })} className="w-40" /></Field>
          <div className="flex justify-end gap-2"><Btn variant="ghost" onClick={() => setShow(false)}>Cancelar</Btn><Btn icon="check" onClick={submit}>Planificar orden</Btn></div>
        </div>
      </Modal>
    </div>
  );
}
