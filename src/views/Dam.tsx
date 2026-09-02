import { useState } from "react";
import { useStore } from "../lib/store";
import type { MediaAsset } from "../lib/types";
import { copyText, fmtDate, uid } from "../lib/util";
import { Badge, Btn, Card, EmptyState, Icon } from "../components/ui";
import { Blueprint, Thumb } from "../components/Img";

export default function Dam() {
  const { state, dispatch, toast } = useStore();
  const [kind, setKind] = useState("todos");
  const assets = state.media.filter((m) => kind === "todos" || m.kind === kind);

  const simulateUpload = () => {
    const a: MediaAsset = { id: uid(), name: `captura-taller-${state.media.length + 1}.jpg`, kind: "foto", tag: "Taller", size: "1,3 MB", src: "", usage: [], uploadedAt: new Date().toISOString() };
    dispatch({ type: "UPLOAD_MEDIA", asset: a });
    dispatch({ type: "EVENTS", events: [{ id: uid(), ts: Date.now(), type: "web" as const, msg: `DAM: asset ${a.name} indexado con etiquetas automáticas` }] });
    toast("Archivo subido e indexado en el DAM");
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3 anim-up">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">DAM · activos digitales</div>
          <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Fototeca & planos del taller</h1>
          <p className="text-[13px] text-mut mt-1">{state.media.length} activos · vinculados a fichas PIM, catálogo web y cotizaciones</p>
        </div>
        <Btn icon="plus" onClick={simulateUpload}>Subir archivo</Btn>
      </div>

      <div className="flex gap-2 flex-wrap anim-up">
        {["todos", "foto", "render", "plano"].map((k) => (
          <button key={k} onClick={() => setKind(k)} className={`px-3 py-1.5 rounded-lg border text-[12px] font-semibold capitalize transition-all ${kind === k ? "bg-ink text-paper border-ink" : "bg-card border-line2 text-mut hover:text-ink"}`}>
            {k === "todos" ? `Todos (${state.media.length})` : k}
          </button>
        ))}
      </div>

      {assets.length === 0 ? (
        <Card><EmptyState icon="image" title="Sin activos" sub="Sube fotos de producto, renders o planos del taller." /></Card>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 stagger">
          {assets.map((m) => (
            <div key={m.id} className="group bg-card border border-line rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <div className="relative h-40 overflow-hidden">
                {m.src ? <Thumb src={m.src} alt={m.name} className="w-full h-full group-hover:scale-[1.04] transition-transform duration-500" /> : <Blueprint label={m.name} className="w-full h-full" />}
                <span className="absolute top-2 left-2"><Badge tone={m.kind === "foto" ? "pine" : m.kind === "render" ? "steel" : "oak"}>{m.kind}</Badge></span>
                <span className="absolute bottom-2 right-2 font-mono text-[10px] bg-night/70 text-paper px-1.5 py-0.5 rounded">{m.size}</span>
              </div>
              <div className="p-3">
                <div className="font-mono text-[12px] text-ink truncate">{m.name}</div>
                <div className="text-[11px] text-mut mt-0.5">tag <Badge tone="fog" className="ml-1">{m.tag}</Badge> · {fmtDate(m.uploadedAt)}</div>
                {m.usage.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {m.usage.map((u) => <span key={u} className="text-[10px] font-mono bg-ink/5 text-mut px-1.5 py-0.5 rounded">{u}</span>)}
                  </div>
                )}
                <div className="flex gap-1.5 mt-2.5">
                  <Btn size="sm" variant="outline" icon="copy" className="flex-1" onClick={async () => { await copyText(`https://dam.andinahogar.ec/a/${m.id}`); toast("URL del activo copiada"); }}>URL</Btn>
                  <Btn size="sm" variant="ghost" icon="dl" onClick={() => toast(`Descargando ${m.name}…`, "info")} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Card className="anim-up">
        <div className="flex items-start gap-3">
          <span className="w-9 h-9 rounded-lg bg-oakl text-oakd grid place-items-center shrink-0"><Icon name="zap" size={16} /></span>
          <div className="text-[12.5px] text-mut leading-relaxed">
            <b className="text-ink">Flujo DAM → PIM → Web:</b> cada activo lleva metadatos (SKU, categoría, licencia) y se sincroniza con el catálogo.
            Las fotos de estudio alimentan la ficha del producto, el cotizador B2B de los links de un solo uso y los anuncios — una sola fuente de verdad.
          </div>
        </div>
      </Card>
    </div>
  );
}
