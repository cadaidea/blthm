import { useState } from "react";
import type { ReactNode } from "react";
import { useStore } from "../lib/store";
import type { RoleInterno, View } from "../lib/types";
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
  {
    group: "Canal digital",
    items: [
      { id: "web", label: "Sitio público", icon: "ext" },
      { id: "contenido", label: "Contenido web · CMS", icon: "edit" },
    ],
  },
];

/* Acceso por rol — igual que el /dash de upgrade.bletia.ec: cada colaborador ve solo su área, gerencia todo */
export const ROLE_ACCESS: Record<RoleInterno, View[]> = {
  gerencia: ["dashboard", "oms", "logistica", "taller", "bom", "crm", "cobros", "pim", "dam", "contabilidad", "accesos", "seguridad", "ajustes", "web", "contenido"],
  vendedor: ["dashboard", "oms", "pim", "crm", "cobros", "web"],
  bodega: ["dashboard", "oms", "logistica", "pim", "bom"],
  taller: ["dashboard", "taller", "bom", "logistica", "pim"],
  contabilidad: ["dashboard", "contabilidad", "cobros", "crm"],
};

const ROLE_LABEL: Record<RoleInterno, string> = {
  gerencia: "Gerencia · admin", vendedor: "Ventas", bodega: "Bodega", taller: "Taller", contabilidad: "Contabilidad",
};

export function Shell({ view, nav, children }: { view: View; nav: (v: View, p?: string) => void; children: ReactNode }) {
  const { state, dispatch, toast } = useStore();
  const [q, setQ] = useState("");
  const user = state.session.user;
  const access = user ? ROLE_ACCESS[user.role] : [];
  const eps = Math.max(state.session.peakEps, 1);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    toast("Sesión cerrada · vuelta a /dash/login", "info");
  };

  return (
    <div className="min-h-screen lg:pl-[236px]">
      {/* sidebar — hueso, sin fatiga visual */}
      <aside className="fixed inset-y-0 left-0 w-[236px] bg-[#f7f3eb] border-r border-line flex flex-col z-40 max-lg:hidden">
        <button onClick={() => nav("dashboard")} className="flex items-center gap-3 px-5 h-16 border-b border-line text-left hover:bg-ink/3 transition-colors">
          <span className="font-display font-bold text-[19px] tracking-[0.3em] text-ink">BLETIA</span>
          <span className="w-1.5 h-1.5 rounded-full bg-wine mt-1.5" />
          <span className="ml-auto font-mono text-[8.5px] uppercase tracking-[0.18em] text-fog">suite interna</span>
        </button>
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-4">
          {NAV.map((g) => {
            const items = g.items.filter((it) => access.includes(it.id));
            if (!items.length) return null;
            return (
              <div key={g.group}>
                <div className="font-mono text-[8.5px] uppercase tracking-[0.22em] text-fog px-2.5 mb-1.5">{g.group}</div>
                {items.map((it) => (
                  <button key={it.id} onClick={() => nav(it.id)}
                    className={cls(
                      "w-full flex items-center gap-2.5 px-2.5 py-[7px] rounded-lg text-[12.5px] font-medium transition-all mb-0.5 text-left",
                      view === it.id ? "bg-ink text-paper shadow-sm" : "text-mut hover:text-ink hover:bg-ink/5"
                    )}>
                    <Icon name={it.icon} size={15} className={view === it.id ? "text-oakl" : ""} />
                    {it.label}
                    {view === it.id && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-wine" />}
                  </button>
                ))}
              </div>
            );
          })}
        </nav>
        {user && (
          <div className="px-3 py-3 border-t border-line">
            <div className="flex items-center gap-2.5 rounded-xl bg-card border border-line px-3 py-2.5">
              <span className="w-8 h-8 rounded-lg bg-ink text-paper grid place-items-center font-display font-bold text-[12px] shrink-0">
                {user.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-[12px] font-semibold text-ink leading-tight truncate">{user.name}</div>
                <div className="text-[10px] text-wine font-bold uppercase tracking-wider">{ROLE_LABEL[user.role]}</div>
              </div>
              <button onClick={logout} title="Cerrar sesión" className="text-fog hover:text-brick transition-colors"><Icon name="x" size={14} /></button>
            </div>
            <div className="flex items-center gap-1.5 mt-2 px-1 text-[9.5px] font-mono text-fog">
              <span className="w-1.5 h-1.5 rounded-full bg-moss live-dot" /> bus activo · <span className="num">{num(eps)}</span> ev/s · PostgreSQL 16
            </div>
          </div>
        )}
      </aside>

      {/* topbar */}
      <header className="sticky top-0 z-30 h-14 bg-paper/88 backdrop-blur border-b border-line flex items-center gap-3 px-4 lg:px-6">
        <button onClick={() => nav("web")} className="lg:hidden font-display font-bold text-[16px] tracking-[0.25em] text-ink">BLETIA</button>
        <div className="relative flex-1 max-w-sm max-lg:hidden">
          <Icon name="search" size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-fog" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && q.trim() && access.includes("pim")) { nav("pim", q.trim()); setQ(""); } }}
            placeholder="Buscar SKU, producto… (Enter)"
            className="w-full bg-card border border-line rounded-lg pl-8 pr-3 py-1.5 text-[12.5px] outline-none focus:border-ink/50 focus:ring-2 focus:ring-ink/8 transition-all"
          />
        </div>
        <div className="ml-auto flex items-center gap-2.5">
          <div className="hidden md:flex items-center gap-1.5 font-mono text-[10.5px] text-mut bg-card border border-line rounded-lg px-2.5 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-moss live-dot" />
            <span className="num">{num(state.session.events)}</span> eventos
          </div>
          <button onClick={() => nav("web")} className="flex items-center gap-1.5 text-[11.5px] font-bold text-mut hover:text-ink border border-line bg-card rounded-lg px-3 py-1.5 transition-all hover:border-ink/40">
            <Icon name="ext" size={12} /> bletia.ec
          </button>
          <div className="hidden sm:block text-right leading-tight">
            <div className="text-[11.5px] font-bold text-ink">{state.settings.company.name}</div>
            <div className="font-mono text-[9px] text-fog">RUC {state.settings.company.ruc} · Cuenca</div>
          </div>
        </div>
      </header>

      {/* nav móvil */}
      <div className="lg:hidden sticky top-14 z-20 bg-paper/92 backdrop-blur border-b border-line px-3 py-2 flex gap-1.5 overflow-x-auto">
        {NAV.flatMap((g) => g.items).filter((it) => access.includes(it.id)).map((it) => (
          <button key={it.id} onClick={() => nav(it.id)}
            className={cls("flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all",
              view === it.id ? "bg-ink text-paper" : "bg-card border border-line text-mut")}>
            <Icon name={it.icon} size={12} />{it.label}
          </button>
        ))}
      </div>

      <main className="px-4 lg:px-6 py-5 max-w-[1480px] mx-auto">{children}</main>

      <footer className="px-4 lg:px-6 pb-6 max-w-[1480px] mx-auto">
        <div className="border-t border-line pt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[10.5px] text-fog font-mono">
          <span>BLETIA suite v2.2 · puerto del ERP de upgrade.bletia.ec</span>
          <span>hecho en Cuenca</span>
          <span className="ml-auto">demo · PostgreSQL 16 en producción</span>
        </div>
      </footer>
    </div>
  );
}
