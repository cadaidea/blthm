import { useState } from "react";
import { useStore } from "../lib/store";
import type { RoleInterno, View } from "../lib/types";
import { Icon } from "../components/ui";
import { Thumb } from "../components/Img";

const HERO = "https://image.qwenlm.ai/generated-images/087283f8-cf51-449d-9d01-520b4731854c/_result.png";

const DEMO_USERS: { name: string; role: RoleInterno; email: string }[] = [
  { name: "Andrés Yépez", role: "gerencia", email: "admin@bletia.ec" },
  { name: "Paola Cevallos", role: "vendedor", email: "ventas@bletia.ec" },
  { name: "Luis Chaluis", role: "bodega", email: "bodega@bletia.ec" },
  { name: "Diego Guamán", role: "taller", email: "taller@bletia.ec" },
  { name: "Rocío Mena", role: "contabilidad", email: "contabilidad@bletia.ec" },
];

const ROLE_LABEL: Record<RoleInterno, string> = {
  gerencia: "admin · todo", vendedor: "ventas", bodega: "bodega", taller: "taller", contabilidad: "contabilidad",
};

export default function Login({ nav }: { nav: (v: View) => void }) {
  const { dispatch, toast } = useStore();
  const [email, setEmail] = useState("admin@bletia.ec");
  const [pass, setPass] = useState("");
  const [sel, setSel] = useState(0);

  const entrar = (i: number) => {
    const u = DEMO_USERS[i];
    dispatch({ type: "LOGIN", name: u.name, role: u.role });
    toast(`Bienvenido, ${u.name.split(" ")[0]} · rol ${u.role} — cada rol ve solo su área`);
    nav("dashboard");
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-[1.1fr_1fr] font-dash">
      {/* lado de marca */}
      <div className="relative bg-night text-paper overflow-hidden max-lg:h-64">
        <div className="absolute inset-0 opacity-40">
          <Thumb src={HERO} alt="Sillón BLETIA" className="w-full h-full kenburns" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-night/10" />
        <div className="relative h-full flex flex-col justify-between p-8 lg:p-12">
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-[22px] tracking-[0.32em]">BLETIA</span>
            <span className="w-1.5 h-1.5 rounded-full bg-wine mt-2" />
          </div>
          <div className="max-lg:hidden anim-rise">
            <div className="font-mono text-[10px] tracked uppercase text-paper/45 mb-4">Suite interna · /dash</div>
            <h1 className="font-display font-medium text-[52px] leading-[1.02]">
              Simple. Elegante. <em className="text-oakl">tu.</em>
            </h1>
            <p className="text-[14px] text-paper/55 mt-4 max-w-sm leading-relaxed">
              Muebles hechos en Cuenca. Este es el panel donde el taller, la bodega, las ventas y la contabilidad ocurren.
            </p>
            <div className="flex gap-6 mt-8 text-[10.5px] font-mono text-paper/40">
              <span>15 estados de pedido</span><span>guías SRI</span><span>PayPhone</span><span>BOM & MRP</span>
            </div>
          </div>
        </div>
      </div>

      {/* formulario */}
      <div className="flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md anim-up">
          <div className="flex items-center gap-2.5">
            <span className="font-display font-bold text-[24px] tracking-[0.3em] text-ink">BLETIA</span>
            <span className="w-1.5 h-1.5 rounded-full bg-wine mt-2" />
          </div>
          <h2 className="font-display font-semibold text-[34px] text-ink mt-3">Acceso de colaboradores</h2>
          <p className="text-[13px] text-mut mt-1.5 leading-relaxed">
            Bienvenido a un día más de trabajo. Que hoy cada pieza que toque tus manos salga del taller
            <b className="text-ink"> simple, elegante y suya</b>.
          </p>

          <div className="mt-6 space-y-3">
            <div>
              <label className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-mut">Correo</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full bg-card border border-line rounded-xl px-3.5 py-2.5 text-[13.5px] outline-none focus:border-ink/50 focus:ring-2 focus:ring-ink/8 transition-all" />
            </div>
            <div>
              <label className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-mut">Contraseña</label>
              <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="••••••••"
                className="mt-1 w-full bg-card border border-line rounded-xl px-3.5 py-2.5 text-[13.5px] outline-none focus:border-ink/50 focus:ring-2 focus:ring-ink/8 transition-all" />
            </div>

            <div className="pt-2">
              <div className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-mut mb-2">Demo — entra con un rol</div>
              <div className="grid grid-cols-2 gap-1.5">
                {DEMO_USERS.map((u, i) => (
                  <button key={u.email} onClick={() => { setSel(i); setEmail(u.email); }}
                    className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-left transition-all ${sel === i ? "border-ink bg-ink text-paper shadow-sm" : "border-line bg-card text-ink hover:border-ink/40"}`}>
                    <span className={`w-7 h-7 rounded-lg grid place-items-center font-display font-bold text-[11px] shrink-0 ${sel === i ? "bg-paper/15 text-oakl" : "bg-ink/6 text-ink"}`}>
                      {u.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[12px] font-semibold leading-tight truncate">{u.name}</span>
                      <span className={`block text-[9.5px] font-mono uppercase tracking-wider ${sel === i ? "text-oakl" : "text-wine"}`}>{ROLE_LABEL[u.role]}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <button onClick={() => entrar(sel)}
              className="w-full mt-2 bg-ink text-paper rounded-xl py-3 text-[13.5px] font-bold tracking-wide hover:bg-ink3 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              Ingresar al panel <Icon name="arrow" size={14} />
            </button>

            <div className="flex items-center justify-between pt-3 text-[12px]">
              <button onClick={() => nav("web")} className="uline text-mut hover:text-ink font-medium flex items-center gap-1.5">
                <Icon name="ext" size={12} /> Ir al sitio público
              </button>
              <span className="text-fog font-mono text-[10.5px]">clientes → bletia.ec/cuenta</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
