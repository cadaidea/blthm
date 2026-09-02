import { useState } from "react";
import type { ReactNode } from "react";
import { useStore } from "../lib/store";
import type { View } from "../lib/types";
import { cls, num } from "../lib/util";
import { Icon } from "./ui";

const NAV: { group: string; items: { id: View; label: string; icon: string }[] }[] = [
  {
    group: "Operación",
    items: [
      { id: "dashboard", label: "Panel de control", icon: "panel" },
      { id: "oms", label: "Pedidos · OMS", icon: "truck" },
      { id: "logistica", label: "Logística & guías SRI", icon: "package" },
      { id: "taller", label: "Taller & fabricación", icon: "saw" },
      { id: "bom", label: "BOM & materiales", icon: "layers" },
    ],
  },
  {
    group: "Relaciones",
    items: [
      { id: "crm", label: "Clientes & proveedores", icon: "users" },
      { id: "cobros", label: "Cobros PayPhone", icon: "qr" },
    ],
  },
  {
    group: "Producto & activos",
    items: [
      { id: "pim", label: "Productos · PIM", icon: "box" },
      { id: "dam", label: "Fototeca · DAM", icon: "image" },
    ],
  },
  {
    group: "Finanzas",
    items: [{ id: "contabilidad", label: "Contabilidad & SRI", icon: "book" }],
  },
  {
    group: "Plataforma",
    items: [
      { id: "accesos", label: "Accesos de un solo uso", icon: "key" },
      { id: "seguridad", label: "Seguridad & porting", icon: "shield" },
      { id: "ajustes", label: "Ajustes & despliegue", icon: "gear" },
    ],
  },
];

export function Shell({ view, nav, children }: { view: View; nav: (v: View, p?: string) => void; children: ReactNode }) {
  const { state } = useStore();
  const [q, setQ] = useState("");
  const eps = Math.max(state.session.peakEps, 1);

  return (
    <div className="min-h-screen lg:pl-[232px]">
      {/* sidebar */}
      <aside className="fixed inset-y-0 left-0 w-[232px] bg-night text-paper/85 flex flex-col z-40 max-lg:hidden">
        <button onClick={() => nav("dashboard")} className="flex items-center gap-2.5 px-4 h-14 border-b border-paper/8 text-left hover:bg-paper/4 transition-colors">
          <span className="w-8 h-8 rounded-lg bg-pined text-oakl grid place-items-center"><Icon name="logo" size={17} /></span>
          <span>
            <span className="block font-display font-extrabold text-[14.5px] text-paper tracking-wide leading-none">TALLER UNO</span>
            <span className="block font-mono text-[8.5px] tracking-[0.24em] text-paper/35 uppercase mt-1">Suite mueblera EC</span>
          </span>
        </button>
        <nav className="flex-1 overflow-y-auto py-3 px-2.5 space-y-4">
          {NAV.map((g) => (
            <div key={g.group}>
              <div className="font-mono text-[8.5px] uppercase tracking-[0.22em] text-paper/30 px-2 mb-1.5">{g.group}</div>
              {g.items.map((it) => (
                <button key={it.id} onClick={() => nav(it.id)}
                  className={cls(
                    "w-full flex items-center gap-2.5 px-2.5 py-[7px] rounded-lg text-[12.5px] font-medium transition-all mb-0.5 text-left",
                    view === it.id ? "bg-pined text-paper shadow-sm" : "text-paper/60 hover:text-paper hover:bg-paper/6"
                  )}>
                  <Icon name={it.icon} size={15} className={view === it.id ? "text-oakl" : ""} />
                  {it.label}
                  {view === it.id && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-oak" />}
                </button>
              ))}
            </div>
          ))}
        </nav>
        <div className="px-4 py-3 border-t border-paper/8">
          <div className="flex items-center gap-2 text-[10.5px] text-paper/50">
            <span className="w-2 h-2 rounded-full bg-moss live-dot" />
            VPS OVH · bus activo · <span className="font-mono num">{num(eps)} ev/s</span>
          </div>
        </div>
      </aside>

      {/* topbar */}
      <header className="sticky top-0 z-30 h-14 bg-paper/85 backdrop-blur border-b border-line flex items-center gap-3 px-4 lg:px-6">
        <span className="lg:hidden w-8 h-8 rounded-lg bg-pined text-oakl grid place-items-center"><Icon name="logo" size={16} /></span>
        <div className="relative flex-1 max-w-sm">
          <Icon name="search" size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-fog" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && q.trim()) {
                nav("pim", q.trim());
                setQ("");
              }
            }}
            placeholder="Buscar SKU, producto… (Enter)"
            className="w-full bg-card border border-line rounded-lg pl-8 pr-3 py-1.5 text-[12.5px] outline-none focus:border-pine focus:ring-2 focus:ring-pine/15 transition-all"
          />
        </div>
        <div className="ml-auto flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1.5 font-mono text-[10.5px] text-mut bg-card border border-line rounded-lg px-2.5 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-moss live-dot" />
            <span className="num">{num(state.session.events)}</span> eventos
          </div>
          <div className="hidden sm:block text-right leading-tight">
            <div className="text-[11.5px] font-bold text-ink">{state.settings.company.name}</div>
            <div className="font-mono text-[9.5px] text-fog">RUC {state.settings.company.ruc}</div>
          </div>
          <span className="w-8 h-8 rounded-lg bg-ink text-paper grid place-items-center font-display font-bold text-[11px]">AY</span>
        </div>
      </header>

      {/* nav móvil */}
      <div className="lg:hidden sticky top-14 z-20 bg-paper/90 backdrop-blur border-b border-line px-3 py-2 flex gap-1.5 overflow-x-auto">
        {NAV.flatMap((g) => g.items).map((it) => (
          <button key={it.id} onClick={() => nav(it.id)}
            className={cls("flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all",
              view === it.id ? "bg-pined text-paper" : "bg-card border border-line text-mut")}>
            <Icon name={it.icon} size={12} />{it.label}
          </button>
        ))}
      </div>

      <main className="px-4 lg:px-6 py-5 max-w-[1480px] mx-auto">{children}</main>

      <footer className="px-4 lg:px-6 pb-6 max-w-[1480px] mx-auto">
        <div className="border-t border-line pt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10.5px] text-fog font-mono">
          <span>TALLER UNO v2.1 · puerto de BLETIA (upgrade.bletia.ec)</span>
          <span>stack 100% open source</span>
          <span className="ml-auto">datos demo · PostgreSQL 16 en producción</span>
        </div>
      </footer>
    </div>
  );
}
