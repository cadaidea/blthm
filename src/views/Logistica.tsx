import { useMemo, useState } from "react";
import { useStore } from "../lib/store";
import type { Despacho, Warehouse } from "../lib/types";
import { copyText, fmtDate, uid } from "../lib/util";
import { Badge, Btn, Card, Drawer, Field, Icon, Input, Modal, SectionTitle, Select, Tabs } from "../components/ui";

const estTone: Record<Despacho["estado"], "oak" | "steel" | "moss"> = { preparacion: "oak", en_ruta: "steel", entregado: "moss" };
const WH_LABEL: Record<Warehouse, string> = { showroom: "Showroom", bodega: "Bodega Central", taller: "Taller" };
const WH_ADDR: Record<Warehouse, string> = {
  showroom: "Av. Eloy Alfaro N34-211 y Rusia, Quito",
  bodega: "Panamericana Norte km 14, Calderón",
  taller: "Av. Ilaló 12-40, Sangolquí",
};

function Barcode({ seed, className }: { seed: string; className?: string }) {
  const bars = useMemo(() => {
    const out: number[] = [];
    for (let i = 0; i < seed.length * 2; i++) out.push(((seed.charCodeAt(i % seed.length) * (i + 7)) % 4) + 1);
    return out;
  }, [seed]);
  let x = 0;
  return (
    <svg viewBox="0 0 120 28" className={className} preserveAspectRatio="none">
      {bars.map((w, i) => {
        const el = <rect key={i} x={x} y={0} width={w * 1.4} height={28} fill="currentColor" />;
        x += w * 1.4 + 2;
        return el;
      })}
    </svg>
  );
}

export default function Logistica() {
  const { state, dispatch, toast } = useStore();
  const [tab, setTab] = useState<"despachos" | "guias" | "etiquetas" | "red">("despachos");
  const [showNew, setShowNew] = useState(false);
  const [guiaView, setGuiaView] = useState<Despacho | null>(null);
  const [nd, setNd] = useState({ orderId: "", transportId: "", placa: "", conductor: "", ruta: "" });
  const [etqId, setEtqId] = useState(state.despachos[0]?.id ?? "");

  const transportes = state.suppliers.filter((s) => s.kind === "transporte");
  const elegibles = state.orders.filter((o) => ["aprobado", "en_bodega", "listo_despacho"].includes(o.status) && !state.despachos.some((d) => d.orderId === o.id));

  const pesoDe = (orderId: string) => {
    const o = state.orders.find((x) => x.id === orderId);
    if (!o) return 0;
    return o.items.reduce((a, i) => a + (state.products.find((p) => p.id === i.productId)?.weightKg ?? 0) * i.qty, 0);
  };

  const create = () => {
    const order = state.orders.find((o) => o.id === nd.orderId);
    const tr = state.suppliers.find((s) => s.id === nd.transportId);
    if (!order) return toast("Selecciona el pedido a despachar", "warn");
    if (!tr || !nd.placa.trim()) return toast("Transportista y placa son obligatorios", "warn");
    const d: Despacho = {
      id: uid(), code: `DSP-${state.settings.sequence.despacho}`, orderId: order.id, orderCode: order.code,
      customer: order.customer, city: order.city, transportId: tr.id, placa: nd.placa.toUpperCase().trim(),
      conductor: nd.conductor.trim() || tr.contact, motivo: "venta", fecha: new Date().toISOString(),
      ruta: nd.ruta.trim() || `Bodega Central (Calderón) → ${order.city}`, bultos: order.bultos, pesoKg: pesoDe(order.id),
      guia: null, estado: "preparacion",
    };
    dispatch({ type: "CREATE_DESPACHO", despacho: d });
    setShowNew(false);
    setNd({ orderId: "", transportId: "", placa: "", conductor: "", ruta: "" });
    toast(`Despacho ${d.code} creado · ${d.bultos} bultos · ${order.code} pasó a DESPACHADO`);
  };

  const emitGuia = (d: Despacho) => {
    dispatch({ type: "EMIT_GUIA", id: d.id });
    toast(`Guía de remisión emitida y autorizada por el SRI · ${d.code}`);
  };

  const etq = state.despachos.find((d) => d.id === etqId) ?? state.despachos[0];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3 anim-up">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">DespachoErp · guías SRI · etiquetas de bulto</div>
          <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Logística & despacho</h1>
          <p className="text-[13px] text-mut mt-1">
            {state.despachos.filter((d) => d.estado === "en_ruta").length} en ruta · {state.despachos.filter((d) => !d.guia).length} sin guía de remisión
          </p>
        </div>
        <Btn icon="plus" onClick={() => setShowNew(true)}>Nuevo despacho</Btn>
      </div>

      <Tabs
        tabs={[
          { id: "despachos", label: `Despachos (${state.despachos.length})` },
          { id: "guias", label: "Guías de remisión SRI" },
          { id: "etiquetas", label: "Etiquetas de bulto" },
          { id: "red", label: "Transportistas & locales" },
        ]}
        value={tab} onChange={(t) => setTab(t as typeof tab)}
      />

      {tab === "despachos" && (
        <div className="grid md:grid-cols-2 gap-3 stagger">
          {state.despachos.map((d) => {
            const tr = state.suppliers.find((s) => s.id === d.transportId);
            return (
              <Card key={d.id} className="hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[12.5px] font-semibold text-ink">{d.code}</span>
                      <Badge tone={estTone[d.estado]} dot>{d.estado.replace("_", " ")}</Badge>
                    </div>
                    <div className="font-display font-bold text-[15.5px] text-ink mt-0.5">{d.orderCode} · {d.customer}</div>
                    <div className="text-[11.5px] text-mut mt-0.5">{d.ruta}</div>
                  </div>
                  <span className="w-9 h-9 rounded-lg bg-steell text-steel grid place-items-center shrink-0"><Icon name="truck" size={17} /></span>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                  <div className="rounded-lg bg-ink/4 p-2"><div className="font-mono font-bold text-[13px] text-ink">{d.placa}</div><div className="text-[9px] uppercase tracking-wider text-fog font-bold">placa</div></div>
                  <div className="rounded-lg bg-ink/4 p-2"><div className="font-mono font-bold text-[13px] text-ink num">{d.bultos}</div><div className="text-[9px] uppercase tracking-wider text-fog font-bold">bultos</div></div>
                  <div className="rounded-lg bg-ink/4 p-2"><div className="font-mono font-bold text-[13px] text-ink num">{d.pesoKg} kg</div><div className="text-[9px] uppercase tracking-wider text-fog font-bold">peso</div></div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="text-[11.5px] text-mut">
                    <b className="text-ink">{tr?.name}</b> · {d.conductor} · {fmtDate(d.fecha)}
                    <div className="mt-0.5">{d.guia ? <span className="font-mono text-[10.5px] text-[#41621f]">✓ guía {d.guia.numero}</span> : <span className="font-mono text-[10.5px] text-oakd">guía pendiente</span>}</div>
                  </div>
                  <div className="flex gap-1.5">
                    {!d.guia && <Btn size="sm" variant="outline" icon="doc" onClick={() => emitGuia(d)}>Emitir guía</Btn>}
                    {d.guia && <Btn size="sm" variant="ghost" icon="eye" onClick={() => setGuiaView(state.despachos.find((x) => x.id === d.id) ?? d)}>Guía</Btn>}
                    {d.estado === "preparacion" && <Btn size="sm" variant="oak" icon="truck" onClick={() => { dispatch({ type: "ADVANCE_DESPACHO", id: d.id, estado: "en_ruta" }); toast(`${d.code} salió en ruta · ${d.placa}`); }}>Iniciar ruta</Btn>}
                    {d.estado === "en_ruta" && <Btn size="sm" icon="check" onClick={() => { dispatch({ type: "ADVANCE_DESPACHO", id: d.id, estado: "entregado" }); toast(`${d.code} entregado · factura emitida al cliente`); }}>Entregado</Btn>}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {tab === "guias" && (
        <Card pad={false} className="anim-up">
          <div className="p-3 border-b border-line"><SectionTitle kicker="SRI · comprobante 06" title="Guías de remisión electrónicas" /></div>
          <div className="divide-y divide-line/70">
            {state.despachos.map((d) => (
              <div key={d.id} className="flex flex-wrap items-center gap-3 px-4 py-3 hover:bg-pinel/25 transition-colors">
                <span className="w-8 h-8 rounded-lg bg-steell text-steel grid place-items-center"><Icon name="doc" size={14} /></span>
                <div className="min-w-0 flex-1">
                  <div className="text-[13px] font-semibold text-ink">{d.code} · {d.customer} <span className="font-mono text-[11px] text-fog">· placa {d.placa}</span></div>
                  <div className="text-[11px] text-mut">{d.ruta} · {d.bultos} bultos · {d.pesoKg} kg</div>
                </div>
                {d.guia ? (
                  <>
                    <div className="text-right">
                      <div className="font-mono text-[12px] text-ink">{d.guia.numero}</div>
                      <div className="text-[10px] text-[#41621f] font-semibold">AUTORIZADA · {d.guia.auth.slice(0, 18)}…</div>
                    </div>
                    <Btn size="sm" variant="outline" icon="eye" onClick={() => setGuiaView(d)}>XML / RIDE</Btn>
                  </>
                ) : (
                  <Btn size="sm" variant="oak" icon="zap" onClick={() => emitGuia(d)}>Emitir y autorizar</Btn>
                )}
              </div>
            ))}
          </div>
        </Card>
      )}

      {tab === "etiquetas" && (
        <div className="space-y-3 anim-up">
          <div className="flex flex-wrap items-center gap-2">
            <Select value={etq?.id ?? ""} onChange={(e) => setEtqId(e.target.value)} className="w-auto min-w-[280px]">
              {state.despachos.map((d) => <option key={d.id} value={d.id}>{d.code} · {d.orderCode} · {d.customer}</option>)}
            </Select>
            <Btn variant="outline" icon="tag" onClick={() => toast(`Impresión enviada a Zebra ZD420 · ${etq?.bultos} etiquetas`, "info")}>Imprimir hoja de etiquetas</Btn>
          </div>
          {etq && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {Array.from({ length: Math.min(etq.bultos, 9) }).map((_, i) => (
                <div key={i} className="bg-card border-2 border-dashed border-line2 rounded-xl p-3.5 hover:border-pine/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-extrabold text-[15px] text-ink">BULTO {i + 1}/{etq.bultos}</span>
                    <Icon name="package" size={16} className="text-fog" />
                  </div>
                  <div className="font-mono text-[13px] font-semibold text-pine mt-1">{etq.orderCode}</div>
                  <div className="text-[11.5px] text-mut leading-tight mt-0.5">{etq.customer}<br />{etq.ruta}</div>
                  <Barcode seed={etq.code + i} className="w-full h-9 text-ink mt-2" />
                  <div className="flex justify-between font-mono text-[10px] text-fog mt-1">
                    <span>{etq.code}-{String(i + 1).padStart(2, "0")}</span><span>{Math.round(etq.pesoKg / etq.bultos)} kg</span>
                  </div>
                  <div className="text-center text-[9px] font-bold tracking-[0.25em] text-brick mt-1.5 border-t border-line pt-1.5">FRÁGIL · NO APILAR</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {tab === "red" && (
        <div className="grid lg:grid-cols-2 gap-4 anim-up">
          <Card>
            <SectionTitle kicker="SRM" title="Transportistas activos" />
            <div className="space-y-2.5">
              {transportes.map((t) => (
                <div key={t.id} className="flex items-center gap-3 rounded-xl border border-line p-3 hover:border-pine/40 transition-colors">
                  <span className="w-10 h-10 rounded-xl bg-steell text-steel grid place-items-center font-display font-extrabold">{t.name.slice(0, 1)}</span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[13.5px] font-semibold text-ink">{t.name}</div>
                    <div className="text-[11px] text-mut">{t.contact} · {t.phone} · {t.city}</div>
                    <div className="text-[10.5px] text-fog">{t.items}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[13px] font-bold text-oakd">★ {t.rating}</div>
                    <div className="text-[10px] text-mut">{t.leadDays} días lead</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <SectionTitle kicker="Locales & bodegas" title="Red física" />
            <div className="space-y-2.5">
              {(["showroom", "bodega", "taller"] as Warehouse[]).map((w) => {
                const units = state.products.reduce((a, p) => a + p.stock[w], 0);
                const skus = state.products.filter((p) => p.stock[w] > 0).length;
                return (
                  <div key={w} className="rounded-xl border border-line p-3 flex items-center gap-3 hover:border-pine/40 transition-colors">
                    <span className="w-10 h-10 rounded-xl bg-pinel text-pined grid place-items-center"><Icon name={w === "taller" ? "saw" : w === "bodega" ? "warehouse" : "tag"} size={17} /></span>
                    <div className="flex-1 min-w-0">
                      <div className="text-[13.5px] font-semibold text-ink">{WH_LABEL[w]}</div>
                      <div className="text-[11px] text-mut truncate">{WH_ADDR[w]}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-display font-extrabold text-[18px] text-ink num">{units}</div>
                      <div className="text-[9.5px] uppercase tracking-wider text-fog font-bold">und · {skus} SKUs</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      )}

      {/* modal nuevo despacho */}
      <Modal open={showNew} onClose={() => setShowNew(false)} kicker="DespachoErp" title="Nuevo despacho">
        <div className="space-y-3">
          <Field label="Pedido a despachar">
            <Select value={nd.orderId} onChange={(e) => setNd({ ...nd, orderId: e.target.value })}>
              <option value="">— seleccionar —</option>
              {elegibles.map((o) => <option key={o.id} value={o.id}>{o.code} · {o.customer} · {o.bultos} bultos · {o.status.replace("_", " ")}</option>)}
            </Select>
          </Field>
          {elegibles.length === 0 && <div className="text-[11.5px] text-oakd bg-oakl/60 border border-oak/25 rounded-lg px-3 py-2">No hay pedidos en estados despachables (aprobado / en bodega / listo despacho) sin despacho asignado.</div>}
          <Field label="Transportista">
            <Select value={nd.transportId} onChange={(e) => setNd({ ...nd, transportId: e.target.value })}>
              <option value="">— seleccionar —</option>
              {transportes.map((t) => <option key={t.id} value={t.id}>{t.name} · ★ {t.rating} · {t.city}</option>)}
            </Select>
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Placa"><Input placeholder="PCH-1194" value={nd.placa} onChange={(e) => setNd({ ...nd, placa: e.target.value })} /></Field>
            <Field label="Conductor"><Input placeholder="Nombre del chofer" value={nd.conductor} onChange={(e) => setNd({ ...nd, conductor: e.target.value })} /></Field>
          </div>
          <Field label="Ruta"><Input placeholder="Bodega Central → destino" value={nd.ruta} onChange={(e) => setNd({ ...nd, ruta: e.target.value })} /></Field>
          {nd.orderId && (
            <div className="rounded-lg bg-pinel/60 border border-pine/20 px-3 py-2 text-[12px] text-pined anim-pop">
              {state.orders.find((o) => o.id === nd.orderId)?.bultos} bultos · peso estimado {pesoDe(nd.orderId)} kg · al crear, el pedido pasa a <b>DESPACHADO</b>
            </div>
          )}
          <div className="flex justify-end gap-2"><Btn variant="ghost" onClick={() => setShowNew(false)}>Cancelar</Btn><Btn icon="truck" onClick={create}>Crear despacho</Btn></div>
        </div>
      </Modal>

      {/* drawer guía XML */}
      <Drawer open={!!guiaView} onClose={() => setGuiaView(null)} kicker={`Guía de remisión · ${guiaView?.guia?.numero ?? ""}`} title={`${guiaView?.code ?? ""} · ${guiaView?.customer ?? ""}`}>
        {guiaView?.guia && (
          <div className="space-y-3">
            <div className="rounded-xl border border-moss/40 bg-mossl/60 p-3.5 flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-moss text-paper grid place-items-center shrink-0"><Icon name="check" size={17} /></span>
              <div>
                <div className="font-semibold text-[13.5px] text-ink">Autorizada por el SRI</div>
                <div className="font-mono text-[10.5px] text-mut break-all">Nº autorización: {guiaView.guia.auth}</div>
              </div>
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-mut mb-1.5">XML del comprobante</div>
              <pre className="rounded-xl bg-night text-[11px] font-mono text-[#b8d4c0] p-3.5 overflow-x-auto leading-relaxed">{guiaView.guia.xml}</pre>
            </div>
            <div className="flex gap-2">
              <Btn variant="outline" icon="copy" className="flex-1" onClick={async () => { await copyText(guiaView.guia!.xml); toast("XML copiado al portapapeles"); }}>Copiar XML</Btn>
              <Btn className="flex-1" icon="dl" onClick={() => toast(`RIDE_${guiaView.guia!.numero}.pdf descargado`, "info")}>Descargar RIDE (PDF)</Btn>
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
}
