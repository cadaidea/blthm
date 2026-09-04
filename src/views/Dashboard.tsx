import { useMemo, useRef, useState } from "react";
import { saldoDe, useStore } from "../lib/store";
import { fmtDate, money, num, timeAgo } from "../lib/util";
import type { View } from "../lib/types";
import { Badge, Btn, Card, Icon, Progress, SectionTitle, Stat } from "../components/ui";
import { Bars, Donut, Sparkline } from "../components/charts";
import { Thumb } from "../components/Img";

const EVENT_ICON: Record<string, { icon: string; tone: string }> = {
  venta: { icon: "tag", tone: "text-pine bg-pinel" },
  stock: { icon: "warehouse", tone: "text-steel bg-steell" },
  pago: { icon: "card", tone: "text-[#41621f] bg-mossl" },
  web: { icon: "ext", tone: "text-oakd bg-oakl" },
  taller: { icon: "saw", tone: "text-oakd bg-oakl" },
  factura: { icon: "doc", tone: "text-steel bg-steell" },
  link: { icon: "link", tone: "text-pine bg-pinel" },
  logistica: { icon: "truck", tone: "text-steel bg-steell" },
  sistema: { icon: "zap", tone: "text-mut bg-ink/6" },
};

export default function Dashboard({ nav }: { nav: (v: View, p?: string) => void }) {
  const { state, burst, bursting, toast } = useStore();
  const [test, setTest] = useState<{ n: number; eps: number } | null>(null);
  const lastSales = useRef(state.session.salesToday);
  const salesFlash = state.session.salesToday !== lastSales.current;
  if (salesFlash) lastSales.current = state.session.salesToday;

  const salesSeries = useMemo(() => {
    const past = [820, 1240, 940, 1620, 1105, 2210, 1730, 990, 1420, 2539, 1180, 1640, 2090];
    return [...past, Math.round(state.session.salesToday)];
  }, [state.session.salesToday]);

  const openOrders = state.orders.filter((o) => !["entregado", "anulado", "cancelado"].includes(o.status));
  const porCobrar = state.orders.filter((o) => !["anulado", "cancelado"].includes(o.status)).reduce((a, o) => a + saldoDe(o), 0);
  const porValidar = state.orders.reduce((a, o) => a + o.recibos.filter((r) => !r.validado).length, 0);
  const woActive = state.workOrders.filter((w) => w.status !== "terminada");
  const lowStock = state.products.filter((p) => p.stock.showroom + p.stock.bodega + p.stock.taller <= p.min);
  const upcoming = openOrders.filter((o) => ["aprobado", "confirmado", "en_bodega", "listo_despacho", "despachado"].includes(o.status)).slice(0, 4);

  const channelData = useMemo(() => {
    const by: Record<string, number> = { tienda: 0, web: 0, link_pago: 0, whatsapp: 0 };
    state.orders.forEach((o) => { if (!["anulado", "cancelado"].includes(o.status)) by[o.channel] += o.total; });
    return [
      { label: "Tienda física", value: by.tienda, color: "#19604f" },
      { label: "Web / catálogo", value: by.web, color: "#38647e" },
      { label: "Link de pago", value: by.link_pago, color: "#c9821f" },
      { label: "WhatsApp", value: by.whatsapp, color: "#5d8a35" },
    ];
  }, [state.orders]);

  const topProducts = useMemo(() => {
    const agg: Record<string, { name: string; total: number }> = {};
    state.orders.forEach((o) => o.items.forEach((i) => {
      agg[i.productId] = agg[i.productId] ?? { name: i.name, total: 0 };
      agg[i.productId].total += i.qty * i.price;
    }));
    return Object.values(agg).sort((a, b) => b.total - a.total).slice(0, 5);
  }, [state.orders]);

  const runLoadTest = async () => {
    toast("Inyectando 1.200 eventos en el bus…", "info");
    const eps = await burst(1200);
    setTest({ n: 1200, eps });
    toast(`Prueba superada: ${num(eps)} eventos/segundo`, "ok");
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-4 anim-up">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">Hola, {state.session.user?.name?.split(" ")[0] ?? "equipo"} — {fmtDate(new Date().toISOString())}</div>
          <h1 className="font-display font-extrabold text-[30px] leading-tight text-ink mt-1">
            El taller factura <span className="text-pine">{money(state.session.salesToday, false)}</span> hoy
          </h1>
          <p className="text-[13px] text-mut mt-1">
            {num(openOrders.length)} pedidos abiertos · {woActive.length} órdenes en fabricación · {porValidar} {porValidar === 1 ? "pago por validar" : "pagos por validar"}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Btn variant="outline" icon="box" onClick={() => nav("oms", "stock")}>Vender stock</Btn>
          <Btn variant="outline" icon="saw" onClick={() => nav("oms", "pedido")}>Bajo pedido</Btn>
          <Btn variant="dark" icon="ext" onClick={() => nav("web")}>Tienda web</Btn>
          <Btn icon="qr" onClick={() => nav("cobros")}>Cobrar con PayPhone</Btn>
        </div>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 stagger">
        <Stat label="Ventas de hoy" value={money(state.session.salesToday)} flash={salesFlash} icon="tag" tone="pine" sub={<span className="text-moss font-semibold">▲ en vivo vía bus de eventos</span>} />
        <Stat label="Pedidos abiertos" value={num(openOrders.length)} icon="truck" tone="steel" sub={`${openOrders.filter((o) => ["en_fabricacion", "en_produccion", "enviado_proveedor"].includes(o.status)).length} en fabricación · ${openOrders.filter((o) => o.status === "despachado").length} en ruta`} />
        <Stat label="Por cobrar" value={money(porCobrar)} icon="clock" tone="oak" sub={porValidar ? `${porValidar} pagos esperando validación` : "sin pagos pendientes de validar"} />
        <Stat label="Órdenes de taller" value={num(woActive.length)} icon="saw" tone="moss" sub={`avance medio ${Math.round(woActive.reduce((a, w) => a + w.progress, 0) / Math.max(1, woActive.length))}%`} />
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <Card className="anim-up">
            <SectionTitle kicker="Ingresos · últimos 14 días" title="Curva de ventas" right={
              <div className="text-right">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-fog">Pico del bus</div>
                <div className="font-display font-extrabold text-[20px] text-ink num">{num(Math.max(state.session.peakEps, test?.eps ?? 0))} <span className="text-[11px] font-body font-medium text-mut">ev/s</span></div>
              </div>
            } />
            <Sparkline data={salesSeries} height={110} />
            <div className="flex flex-wrap items-center justify-between gap-3 mt-3 pt-3 border-t border-line">
              <div className="flex items-center gap-2 text-[12px] text-mut">
                <span className="w-2 h-2 rounded-full bg-pine" /> Facturación diaria (USD, IVA incluido)
                <span className="w-2 h-2 rounded-full bg-oak ml-3" /> Hoy
              </div>
              <Btn size="sm" variant="dark" icon="zap" onClick={runLoadTest} disabled={bursting}>
                {bursting ? "Procesando eventos…" : "Prueba de carga · 1.200 eventos"}
              </Btn>
            </div>
            {test && (
              <div className="mt-3 flex items-center gap-2.5 rounded-lg bg-pinel/70 border border-pine/20 px-3 py-2.5 anim-pop">
                <Icon name="check" size={15} className="text-pine" />
                <span className="text-[12.5px] text-pined font-medium">
                  {num(test.n)} eventos concurrentes absorbidos a <b className="num">{num(test.eps)} ev/s</b> — el bus (Redis Streams + workers) aguanta el pico de un Cyber Monday.
                </span>
              </div>
            )}
          </Card>

          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="anim-up">
              <SectionTitle kicker="OMS" title="Ventas por canal" />
              <Donut slices={channelData} centerTop={money(state.orders.reduce((a, o) => a + (!["anulado", "cancelado"].includes(o.status) ? o.total : 0), 0) / 1000, false) + "k"} centerBottom="facturado" />
            </Card>
            <Card className="anim-up">
              <SectionTitle kicker="PIM" title="Top productos" />
              <Bars data={topProducts.map((p) => p.total)} labels={topProducts.map((p) => p.name.split(" ")[0])} height={92} />
            </Card>
          </div>

          <Card className="anim-up" pad>
            <SectionTitle kicker="Logística" title="Próximas entregas" right={<Btn size="sm" variant="ghost" icon="arrow" onClick={() => nav("oms")}>Ver OMS</Btn>} />
            <div className="space-y-2">
              {upcoming.map((o) => {
                const tr = state.suppliers.find((s) => s.id === o.transportId);
                return (
                  <button key={o.id} onClick={() => nav("oms", o.code)} className="w-full flex items-center gap-3 rounded-lg border border-line px-3 py-2.5 hover:border-pine/50 hover:bg-pinel/30 transition-all text-left group">
                    <span className="w-8 h-8 rounded-lg bg-steell text-steel grid place-items-center"><Icon name="truck" size={15} /></span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[13px] font-semibold text-ink">{o.code} · {o.customer}</span>
                      <span className="block text-[11px] text-mut">{o.city} · {tr ? tr.name : "transporte sin asignar"} · ETA {fmtDate(o.eta)}</span>
                    </span>
                    <Badge tone={o.status === "despachado" ? "steel" : "oak"}>{o.status.replace("_", " ")}</Badge>
                    <span className="font-mono text-[12.5px] text-ink num">{money(o.total)}</span>
                  </button>
                );
              })}
              {upcoming.length === 0 && <div className="text-[12.5px] text-mut py-4 text-center">Sin entregas pendientes 🎉</div>}
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="anim-up" pad={false}>
            <div className="px-4 pt-4">
              <SectionTitle kicker="Tiempo real" title="Bus de eventos" right={<span className="flex items-center gap-1.5 text-[11px] font-mono text-moss"><span className="w-2 h-2 rounded-full bg-moss live-dot" />LIVE</span>} />
            </div>
            <div className="max-h-[430px] overflow-y-auto px-2 pb-2">
              {state.events.slice(0, 18).map((e) => {
                const meta = EVENT_ICON[e.type] ?? EVENT_ICON.sistema;
                return (
                  <div key={e.id} className="anim-feed flex items-start gap-2.5 px-2 py-2 rounded-lg hover:bg-ink/3">
                    <span className={`w-7 h-7 rounded-lg grid place-items-center shrink-0 ${meta.tone}`}><Icon name={meta.icon} size={13} /></span>
                    <div className="min-w-0">
                      <div className="text-[12.5px] text-ink leading-snug">{e.msg}</div>
                      <div className="text-[10.5px] font-mono text-fog mt-0.5">{timeAgo(e.ts)} · ev#{(state.session.events - state.events.indexOf(e)).toLocaleString()}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card className="anim-up">
            <SectionTitle kicker="Alertas" title="Stock bajo mínimo" right={<Btn size="sm" variant="ghost" icon="arrow" onClick={() => nav("pim")}>PIM</Btn>} />
            <div className="space-y-2.5">
              {lowStock.map((p) => {
                const total = p.stock.showroom + p.stock.bodega + p.stock.taller;
                return (
                  <div key={p.id} className="flex items-center gap-2.5">
                    <Thumb src={p.img} alt={p.name} className="w-9 h-9 rounded-lg" />
                    <div className="min-w-0 flex-1">
                      <div className="text-[12px] font-semibold text-ink truncate">{p.name}</div>
                      <div className="text-[10.5px] text-mut font-mono">{p.sku} · {total}/{p.min} und</div>
                    </div>
                    <Progress value={(total / Math.max(1, p.min)) * 100} tone={total <= p.min ? "brick" : "oak"} />
                  </div>
                );
              })}
              {lowStock.length === 0 && <div className="text-[12.5px] text-mut">Todo el catálogo sobre el mínimo.</div>}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
