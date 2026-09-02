import { useEffect, useState } from "react";
import { StoreProvider, useStore } from "./lib/store";
import type { View } from "./lib/types";
import { Shell } from "./components/Shell";
import { Icon, ToastHost } from "./components/ui";
import Dashboard from "./views/Dashboard";
import Productos from "./views/Productos";
import Operaciones from "./views/Operaciones";
import Terceros from "./views/Terceros";
import Taller from "./views/Taller";
import Materiales from "./views/Materiales";
import Logistica from "./views/Logistica";
import Cobros from "./views/Cobros";
import Dam from "./views/Dam";
import Contabilidad from "./views/Contabilidad";
import Accesos from "./views/Accesos";
import Seguridad from "./views/Seguridad";
import Ajustes from "./views/Ajustes";
import Sitio from "./views/Sitio";
import Login from "./views/Login";

function Splash({ done }: { done: boolean }) {
  return (
    <div className={`fixed inset-0 z-[70] bg-night grid place-items-center transition-opacity duration-500 ${done ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
      <div className="text-center">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-pined grid place-items-center text-oakl anim-pop">
          <Icon name="logo" size={34} />
        </div>
        <div className="font-display font-extrabold text-[22px] text-paper tracking-wide mt-4">TALLER UNO</div>
        <div className="font-mono text-[10px] tracking-[0.3em] text-paper/40 uppercase mt-1.5">Suite mueblera · ERP · CRM · PIM · OMS · MES</div>
        <div className="mt-5 w-44 h-1 mx-auto rounded-full bg-paper/10 overflow-hidden">
          <div className="h-full bg-oak rounded-full" style={{ animation: "growX 0.7s ease-out both", width: "100%", transformOrigin: "left" }} />
        </div>
        <style>{`@keyframes growX { from { transform: scaleX(0); } to { transform: scaleX(1); } }`}</style>
      </div>
    </div>
  );
}

function Workspace() {
  const { toasts, state } = useStore();
  const [view, setView] = useState<View>("dashboard");
  const [param, setParam] = useState<string | undefined>();
  const [visit, setVisit] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 850);
    return () => clearTimeout(t);
  }, []);

  const nav = (v: View, p?: string) => {
    setView(v);
    setParam(p);
    setVisit((x) => x + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* bletia.ec/dash → sin sesión, /dash/login */
  const user = state.session.user;
  if (view !== "web" && !user) {
    return (
      <>
        <Splash done={ready} />
        <Login nav={nav} />
        <ToastHost toasts={toasts} />
      </>
    );
  }

  /* www.bletia.ec → sitio público SIN el header/sidebar del panel interno */
  if (view === "web") {
    return (
      <>
        <Sitio key={`w${visit}`} nav={nav} />
        <ToastHost toasts={toasts} />
      </>
    );
  }

  return (
    <>
      <Splash done={ready} />
      <Shell view={view} nav={nav}>
        {view === "dashboard" && <Dashboard key={`d${visit}`} nav={nav} />}
        {view === "pim" && <Productos key={`p${visit}`} initialQuery={param} />}
        {view === "oms" && <Operaciones key={`o${visit}`} initialQuery={param} />}
        {view === "crm" && <Terceros key={`c${visit}`} />}
        {view === "taller" && <Taller key={`t${visit}`} />}
        {view === "bom" && <Materiales key={`b${visit}`} />}
        {view === "logistica" && <Logistica key={`l${visit}`} />}
        {view === "cobros" && <Cobros key={`k${visit}`} />}
        {view === "dam" && <Dam key={`m${visit}`} />}
        {view === "contabilidad" && <Contabilidad key={`a${visit}`} />}
        {view === "accesos" && <Accesos key={`s${visit}`} />}
        {view === "seguridad" && <Seguridad key={`g${visit}`} />}
        {view === "ajustes" && <Ajustes key={`j${visit}`} />}
      </Shell>
      <ToastHost toasts={toasts} />
    </>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <Workspace />
    </StoreProvider>
  );
}
