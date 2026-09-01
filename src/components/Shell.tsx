import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { View } from "../lib/types";
import { useStore } from "../lib/store";
import { cls, fmtDate, money, num } from "../lib/util";
import { Badge, Icon } from "./ui";

const NAV: { group: string; items: { id: View; label: string; icon: string }[] }[] = [
  { group: "Operación", items: [
    { id: "dashboard", label: "Panel de control", icon: "panel" },
    { id: "oms", label: "Pedidos · OMS", icon: "truck" },
    { id: "logistica", label: "Logística & guías SRI", icon: "package" },
    { id: "taller", label: "Taller & fabricación", icon: "saw" },
    { id: "bom", label: "BOM & materiales", icon: "layers" },
  ]},
  { group: "Relaciones", items: [
    { id: "crm", label: "Clientes & proveedores", icon: "users" },
    { id: "cobros", label: "Cobros PayPhone", icon: "qr" },
  ]},
  { group: "Producto", items: [
    { id: "pim", label: "Productos · PIM", icon: "box" },
  ]},
  { group: "Activos & finanzas", items: [
    { id: "dam", label: "Medios · DAM", icon: "image" },
    { id: "contabilidad", label: "Contabilidad", icon: "book" },
  ]},
  { group: "Plataforma", items: [
    { id: "accesos", label: "Accesos de un solo uso", icon: "key" },
    { id: "ajustes", label: "Ajustes & despliegue", icon: "gear" },
  ]},
];

export function Shell({ view, nav, children }: { view: View; nav: (v: View, param?: string) => void; children: ReactNode }) {
  const { state } = useStore();
  const [q, setQ] = useState("");
  const [focus, setFocus] = useState(false);

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (t.length < 2) return [];
    const out: { view: View; kind: string; title: string; sub: string }[] = [];
    state.products.filter((p) => (p.name + p.sku + p.category).toLowerCase().includes(t)).slice(0, 4)
      .forEach((p) => out.push({ view: "pim", kind: "Producto", title: p.name, sub: `${p.sku} · ${money(p.price)}` }));
    state.customers.filter((c) => (c.name + c.city + c.code).toLowerCase().includes(t)).slice(0, 3)
      .forEach((c) => out.push({ view: "crm", kind: "Cliente", title: c.name, sub: `${c.city} · ${money(c.total, false)} históricos` }));
    state.orders.filter((o) => (o.code + o.customer).toLowerCase().includes(t)).slice(0, 3)
      .forEach((o) => out.push({ view: "oms", kind: "Pedido", title: o.code, sub: `${o.customer} · ${money(o.total)}` }));
    state.suppliers.filter((s) => s.name.toLowerCase().includes(t)).slice(0, 2)
      .forEach((s) => out.push({ view: "crm", kind: "Proveedor", title: s.name, sub: `${s.kind} · ${s.city}` }));
    return out.slice(0, 8);
  }, [q, state]);

  const activeItem = NAV.flatMap((g) => g.items).find((i) => i.id === view);

  return (
    <div className="min-h-screen flex">
      {/* sidebar */}
      <aside className="hidden lg:flex flex-col w-[236px] shrink-0 bg-night text-paper/90 sticky top-0 h-screen border-r border-night">
        <button onClick={() => nav("dashboard")} className="flex items-center gap-2.5 px-5 h-16 border-b border-paper/8 text-left group">
          <span className="w-8 h-8 rounded-lg bg-pined grid place-items-center text-oakl group-hover:scale-105 transition-transform"><Icon name="logo" size={19} /></span>
          <span>
            <span className="block font-display font-extrabold text-[15px] tracking-wide leading-none">TALLER UNO</span>
            <span className="block font-mono text-[9px] text-paper/45 tracking-[0.22em] mt-1">SUITE MUEBLERA · EC</span>
          </span>
        </button>
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          {NAV.map((g) => (
            <div key={g.group} className="mb-4">
              <div className="px-2.5 mb-1.5 font-mono text-[9px] tracking-[0.24em] uppercase text-paper/30">{g.group}</div>
              {g.items.map((i) => {
                const active = view === i.id;
                return (
                  <button key={i.id} onClick={() => nav(i.id)}
                    className={cls("w-full flex items-center gap-2.5 px-2.5 py-[7.5px] rounded-lg text-[13px] font-medium transition-all duration-150 mb-0.5 group",
                      active ? "bg-pine text-paper shadow-md shadow-pine/20" : "text-paper/60 hover:text-paper hover:bg-paper/6")}>
                    <Icon name={i.icon} size={16} className={active ? "text-oakl" : "text-paper/40 group-hover:text-paper/70 transition-colors"} />
                    {i.label}
                    {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-oak" />}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>
        <div className="p-3 border-t border-paper/8">
          <div className="rounded-lg bg-paper/5 border border-paper/8 p-3">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-moss live-dot" />
              <span className="font-mono text-[10px] tracking-[0.18em] text-paper/60 uppercase">Bus de eventos</span>
            </div>
            <div className="font-display font-extrabold text-[18px] num leading-none">{num(state.session.events)} <span className="text-[11px] font-body font-medium text-paper/50">eventos</span></div>
            <div className="text-[10.5px] text-paper/40 mt-1">pico {num(state.session.peakEps)} ev/s · Postgres + Redis</div>
          </div>
        </div>
      </aside>

      {/* main */}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="sticky top-0 z-40 h-16 bg-paper/85 backdrop-blur border-b border-line flex items-center gap-3 px-4 lg:px-6">
          <div className="lg:hidden flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-pined grid place-items-center text-oakl"><Icon name="logo" size={18} /></span>
          </div>
          <div className="hidden md:block min-w-0">
            <div className="font-mono text-[9.5px] tracking-[0.22em] uppercase text-fog">Módulo activo</div>
            <div className="font-display font-bold text-[15px] text-ink leading-tight truncate">{activeItem?.label ?? "Panel"}</div>
          </div>

          {/* global search */}
          <div className="relative flex-1 max-w-md mx-auto">
            <Icon name="search" size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-fog" />
            <input
              value={q}
              onFocus={() => setFocus(true)}
              onBlur={() => setTimeout(() => setFocus(false), 160)}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar producto, cliente, pedido, proveedor…"
              className="w-full pl-9 pr-3 py-2 rounded-lg border border-line2 bg-card text-[13px] placeholder:text-fog focus:outline-none focus:border-pine focus:ring-2 focus:ring-pine/15 transition-shadow"
            />
            {focus && results.length > 0 && (
              <div className="absolute top-full mt-1.5 w-full bg-card border border-line rounded-xl shadow-xl overflow-hidden anim-pop">
                {results.map((r, i) => (
                  <button key={i} onMouseDown={() => { nav(r.view, r.title); setQ(""); }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 text-left hover:bg-pinel/60 transition-colors border-b border-line/60 last:border-0">
                    <Badge tone={r.kind === "Producto" ? "pine" : r.kind === "Pedido" ? "steel" : r.kind === "Proveedor" ? "oak" : "fog"}>{r.kind}</Badge>
                    <span className="min-w-0">
                      <span className="block text-[13px] font-semibold text-ink truncate">{r.title}</span>
                      <span className="block text-[11px] text-mut truncate">{r.sub}</span>
                    </span>
                    <Icon name="arrow" size={13} className="ml-auto text-fog" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => nav("cobros")} className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-moss/12 border border-moss/30 text-[#41621f] text-[12px] font-semibold hover:bg-moss/20 transition-colors">
            <span className="w-2 h-2 rounded-full bg-moss live-dot" />
            <span className="num">{num(state.session.events)} eventos</span>
          </button>
          <div className="hidden xl:block text-right">
            <div className="text-[11.5px] font-semibold text-ink leading-tight">Andrés Yépez</div>
            <div className="text-[10px] text-mut font-mono">gerencia · {fmtDate(new Date().toISOString())}</div>
          </div>
          <div className="w-9 h-9 rounded-lg bg-ink text-paper grid place-items-center font-display font-bold text-[13px]">AY</div>
        </header>

        <main className="flex-1 px-4 lg:px-6 py-5 max-w-[1400px] w-full mx-auto">{children}</main>

        <footer className="px-4 lg:px-6 py-4 border-t border-line text-[11px] text-mut flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="font-mono">{state.settings.company.name} · RUC {state.settings.company.ruc}</span>
          <span className="hidden sm:inline">·</span>
          <span>Quito, Ecuador</span>
          <span className="ml-auto font-mono text-fog">v1.4.2 · stack open source · PayPhone sandbox</span>
        </footer>
      </div>
    </div>
  );
}
