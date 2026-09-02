import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { buildPayLink, estadosCliente, estadosLabel, orderFlow, useStore } from "../lib/store";
import type { Order } from "../lib/types";
import { calcTotals, copyText, fmtDate, money, uid } from "../lib/util";
import { Badge, Drawer, Icon, Modal } from "../components/ui";
import { Thumb } from "../components/Img";

/* ── catálogo real de bletia.ec (upgrade) — precios con IVA incluido ── */
const IMG = {
  sofa: "https://image.qwenlm.ai/generated-images/876c81bb-04b7-4ecf-b3c5-5409001f7961/_result.png",
  comedor: "https://image.qwenlm.ai/generated-images/c4c2d864-549d-421e-a9e9-ee3f14fc7e78/_result.png",
  cama: "https://image.qwenlm.ai/generated-images/4c03f0dd-cf51-487c-964a-67a34323efb3/_result.png",
  ropero: "https://image.qwenlm.ai/generated-images/9248a4c4-1d9b-4611-b940-870a805ce7d5/_result.png",
  escritorio: "https://image.qwenlm.ai/generated-images/2c56f5e9-08cb-49de-b7a4-963536e14050/_result.png",
  poltrona: "https://image.qwenlm.ai/generated-images/087283f8-cf51-449d-9d01-520b4731854c/_result.png",
};

const TAPIZ = [
  { n: "Lino crudo", c: "#d9cbb0" },
  { n: "Bouclé marfil", c: "#efe8da" },
  { n: "Chenille gris", c: "#b3ada3" },
  { n: "Terciopelo verde", c: "#3f5d50" },
  { n: "Cuero coñac", c: "#a06a3c" },
];
const MADERA = [
  { n: "Roble natural", c: "#c7a472" },
  { n: "Nogal", c: "#7b5233" },
  { n: "Cerezo", c: "#9a5b40" },
  { n: "Ébano", c: "#3b332c" },
];

interface Pub { id: string; nombre: string; precio: number; cat: string; img: string; vt: string; vars: { n: string; c: string }[]; }
const PUB: Pub[] = [
  { id: "sofa-bletia", nombre: "Sofá Bletia", precio: 1299, cat: "Sofás", img: IMG.sofa, vt: "Tapiz", vars: TAPIZ },
  { id: "sofa-miro-studio", nombre: "Sofá Miro Studio", precio: 829, cat: "Sofás", img: "", vt: "Tapiz", vars: TAPIZ },
  { id: "sofa-dela-forma", nombre: "Sofá Dela Forma", precio: 1309, cat: "Sofás", img: "", vt: "Tapiz", vars: TAPIZ },
  { id: "sofa-baal-studio", nombre: "Sofá Baal Studio", precio: 699, cat: "Sofás", img: "", vt: "Tapiz", vars: TAPIZ },
  { id: "sillon-zoe", nombre: "Sillón Zoe", precio: 349, cat: "Sillones", img: IMG.poltrona, vt: "Tapiz", vars: TAPIZ },
  { id: "mesa-noche-lupe", nombre: "Mesa de noche Lupe", precio: 339, cat: "Veladores", img: IMG.cama, vt: "Acabado", vars: MADERA },
  { id: "mesa-noche-lira", nombre: "Mesa de noche Lira", precio: 289, cat: "Veladores", img: "", vt: "Acabado", vars: MADERA },
  { id: "comedor-andino", nombre: "Comedor Andino", precio: 1189, cat: "Centros", img: IMG.comedor, vt: "Acabado", vars: MADERA },
  { id: "cama-king-nordica", nombre: "Cama King Nórdica", precio: 699, cat: "Piezas", img: IMG.cama, vt: "Acabado", vars: MADERA },
  { id: "ropero-amazonia", nombre: "Ropero Amazonia", precio: 789, cat: "Piezas", img: IMG.ropero, vt: "Acabado", vars: MADERA },
  { id: "escritorio-canar", nombre: "Escritorio Cañar", precio: 459, cat: "Centros", img: IMG.escritorio, vt: "Acabado", vars: MADERA },
  { id: "marco-pino-a5", nombre: "Marco Pino A5", precio: 11.99, cat: "Piezas", img: "", vt: "Acabado", vars: MADERA },
];
const CATS = ["Sofás", "Sillones", "Piezas", "Centros", "Veladores"];

const DIARIO = [
  { id: "d1", cat: "Tips", titulo: "Cómo conservar tu mueble de madera para que dure generaciones", min: 5, img: IMG.comedor, cuerpo: ["La durabilidad de un mueble no es azar: depende de la especie, del secado de la madera y del cuidado cotidiano. En el taller usamos roble y laurel con humedad controlada al 8%.", "Regla de oro: lejos del sol directo y de las rejillas de calefacción. La madera respira; los cambios bruscos de temperatura la agrietan.", "Cada seis meses, una pasada de cera de abeja con paño de algodón devuelve el brillo sin sellar el poro."], },
  { id: "d2", cat: "Tips", titulo: "No te rindas, esta es la mejor manera de quitar una mancha de tu sofá", min: 4, img: IMG.sofa, cuerpo: ["Primero identifica el código de limpieza de tu tapiz (W, S, WS o X) — está en la etiqueta bajo el cojín.", "Para códigos W: agua tibia con una gota de jabón neutro, paño blanco, toques sin frotar. Nunca empapes.", "Nuestros tapices antimanchas salen con agua carbonatada en los primeros 10 minutos. Después de eso, llámanos: la garantía cubre una visita."], },
  { id: "d3", cat: "Decoración", titulo: "50 modelos de mesas de noche para tu dormitorio", min: 14, img: IMG.cama, cuerpo: ["Flotantes para cuartos pequeños: liberan el piso y la escoba lo agradece.", "Con gaveta y nicho, la combinación que más pedimos en Cuenca: cargador escondido y libro a la vista.", "A medida: la altura correcta es la del colchón +5 cm. La hacemos exacta para tu cama."], },
  { id: "d4", cat: "Tendencias", titulo: "El tapiz ideal para un sofá que no se mancha", min: 9, img: IMG.poltrona, cuerpo: ["Los códigos de limpieza mandan: busca telas con tratamiento PFAS-free que repelen líquidos sin plástico al tacto.", "El bouclé sigue en tendencia, pero en hogares con niños gana el chenille de trama cerrada.", "Pide la muestra física: la pantalla miente, la luz de tu sala no."], },
  { id: "d5", cat: "DIY", titulo: "Cuánto dura un mueble de madera y de qué depende su vida real", min: 8, img: IMG.ropero, cuerpo: ["Un ensamble de caja y espiga bien ejecutado supera los 50 años; uno engrapado, cinco.", "El acabado importa tanto como la madera: laca de poliuretano para uso rudo, aceite-cera para tocar y sentir.", "Nuestra garantía estructural es de 5 años porque el taller responde: si algo falla, vuelve."], },
  { id: "d6", cat: "Tips", titulo: "El color de tu sofá lo decide la luz, no la tendencia", min: 9, img: IMG.sofa, cuerpo: ["Luz norte (fría): los grises se vuelven azules; mejor cremas y camel.", "Luz sur (cálida en la Sierra): casi todo funciona; cuidado con los verdes que se vuelven oliva.", "Lleva la muestra y mírala a las 9h, 14h y 20h. Tres visitas, una decisión para diez años."], },
];

type Sub = "home" | "tienda" | "journal" | "casa" | "cuenta" | "seguimiento" | "producto";
const CUENTA_KEY = "bletia-cuenta";

function SinImagen({ className }: { nombre?: string; className?: string }) {
  return (
    <div className={`grid place-items-center bg-[#ece5d8] relative overflow-hidden ${className ?? ""}`}>
      <div className="text-center">
        <div className="font-display font-semibold text-[40px] text-ink/20 leading-none">B.</div>
      </div>
    </div>
  );
}

export default function Sitio({ nav }: { nav: (v: import("../lib/types").View) => void }) {
  const { state, dispatch, toast } = useStore();
  const [sub, setSub] = useState<Sub>("home");
  const [cat, setCat] = useState("Todas");
  const [prod, setProd] = useState<Pub | null>(null);
  const [vari, setVari] = useState(0);
  const [pqty, setPqty] = useState(1);
  const [likes, setLikes] = useState<string[]>([]);
  const abrirProducto = (p: Pub) => { setProd(p); setVari(0); setPqty(1); setSub("producto"); };
  const toggleLike = (id: string) => setLikes((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  const [cart, setCart] = useState<{ id: string; qty: number }[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState<"login" | "crear">("login");
  const [turn, setTurn] = useState<"idle" | "checking" | "ok">("idle");
  const [auth, setAuth] = useState({ nombre: "", email: "", pass: "" });
  const [newsOpen, setNewsOpen] = useState(false);
  const [cookies, setCookies] = useState(() => localStorage.getItem("bletia-cookies") !== "ok");
  const [co, setCo] = useState({ nombre: "", email: "", ciudad: "Cuenca", direccion: "" });
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [done, setDone] = useState<{ code: string; link: string; total: number } | null>(null);
  const [trackCode, setTrackCode] = useState("");
  const [tracked, setTracked] = useState<Order | null | "nf">("nf");
  const [artOpen, setArtOpen] = useState<(typeof DIARIO)[0] | null>(null);
  const [cuenta, setCuenta] = useState<string | null>(() => localStorage.getItem(CUENTA_KEY));

  useEffect(() => { window.scrollTo({ top: 0 }); }, [sub]);

  const cartCount = cart.reduce((a, c) => a + c.qty, 0);
  const cartLines = cart.map((c) => ({ ...c, p: PUB.find((p) => p.id === c.id)! })).filter((c) => c.p);
  const ivaCart = cartLines.reduce((a, c) => a + c.p.precio * c.qty, 0) / 1.15 * 0.15;
  const totalCart = cartLines.reduce((a, c) => a + c.p.precio * c.qty, 0);

  const addCart = (p: Pub, n: number) => {
    setCart((prev) => {
      const ex = prev.find((c) => c.id === p.id);
      return ex ? prev.map((c) => (c.id === p.id ? { ...c, qty: c.qty + n } : c)) : [...prev, { id: p.id, qty: n }];
    });
    toast(`${p.nombre} · ${n} × en tu carrito`);
  };

  /* ── cuenta de consumidor ── */
  const abrirAuth = () => { setAuthTab("login"); setTurn("idle"); setAuth({ nombre: "", email: cuenta ?? "", pass: "" }); setAuthOpen(true); };
  const submitAuth = () => {
    if (!auth.email.includes("@") || !auth.pass) return toast("Correo y contraseña son obligatorios", "warn");
    if (turn !== "ok") { setTurn("checking"); setTimeout(() => setTurn("ok"), 900); return; }
    if (authTab === "crear" && auth.nombre.trim()) {
      const existe = state.cuentas.find((c) => c.email.toLowerCase() === auth.email.toLowerCase());
      if (!existe) dispatch({ type: "ADD_CUENTA", cuenta: { id: uid(), nombre: auth.nombre.trim(), email: auth.email, ciudad: "Cuenca", desde: new Date().toISOString(), cupon: "5% dcto primera compra" } });
      toast(`Cuenta creada · cupón 5% dcto activado`);
    } else {
      toast(`Bienvenida de vuelta · ${auth.email}`);
    }
    localStorage.setItem(CUENTA_KEY, auth.email);
    setCuenta(auth.email);
    setAuthOpen(false);
    setSub("cuenta");
  };

  const miCuenta = state.cuentas.find((c) => c.email.toLowerCase() === (cuenta ?? "").toLowerCase());
  const miCliente = state.customers.find((c) => c.email.toLowerCase() === (cuenta ?? "").toLowerCase());
  const misPedidos = miCliente ? state.orders.filter((o) => o.customerId === miCliente.id) : [];

  /* ── checkout: la cuenta se crea al comprar ── */
  const checkout = () => {
    if (!co.email.includes("@") || !co.nombre.trim()) return toast("Nombre y correo son obligatorios", "warn");
    const cid = uid();
    dispatch({ type: "ADD_CUSTOMER", customer: { id: cid, code: `CL-0${170 + state.customers.length}`, name: co.nombre.trim(), doc: "—", type: "natural" as const, phone: "", email: co.email, city: co.ciudad, segment: "hogar", orders: 0, total: 0, credit: 0, since: new Date().toISOString(), notes: `Cliente web · ${co.direccion || "sin dirección"}` } });
    if (!state.cuentas.find((c) => c.email.toLowerCase() === co.email.toLowerCase())) {
      dispatch({ type: "ADD_CUENTA", cuenta: { id: uid(), nombre: co.nombre.trim(), email: co.email, ciudad: co.ciudad, desde: new Date().toISOString(), cupon: "5% dcto primera compra" } });
    }
    const lines = cartLines.map((c) => ({ productId: c.p.id, sku: c.p.id.toUpperCase().slice(0, 12), name: c.p.nombre, qty: c.qty, price: Math.round((c.p.precio / 1.15) * 100) / 100, spec: null }));
    const t = calcTotals(lines);
    const now = new Date().toISOString();
    const o: Order = {
      id: uid(), code: `PED-${state.settings.sequence.order}`, kind: "venta", customerId: cid, customer: co.nombre.trim(),
      items: lines, ...t, status: "pendiente", channel: "web", payment: "pendiente", transportId: null,
      bultos: Math.max(1, Math.ceil(lines.reduce((a, l) => a + l.qty, 0) / 2)),
      createdAt: now, eta: new Date(Date.now() + 7 * 864e5).toISOString(), city: co.ciudad, workOrderId: null,
      trace: [{ ts: now, user: "sistema", msg: "Pedido recibido desde bletia.ec (checkout web)" }],
      recibos: [], confirmToken: null, confirmedAt: null,
    };
    dispatch({ type: "CREATE_ORDER", order: o });
    const link = buildPayLink(state, Math.round(o.total * 100) / 100, `Pedido web ${o.code}`, co.nombre.trim(), o.id);
    dispatch({ type: "CREATE_PAYLINK", link });
    localStorage.setItem(CUENTA_KEY, co.email);
    setCuenta(co.email);
    setDone({ code: o.code, link: `${state.settings.linkBase}/${link.token}`, total: o.total });
    setCart([]); setCartOpen(false);
    toast(`Pedido ${o.code} en el ERP · tu cuenta quedó creada`);
  };

  const buscarPedido = () => {
    const c = trackCode.trim().toLowerCase();
    const o = state.orders.find((x) => x.code.toLowerCase() === c || x.code.toLowerCase() === `ped-${c}`);
    setTracked(o ?? "nf");
    if (!o) toast("No encontramos ese pedido — revisa el código", "warn");
  };

  const productos = useMemo(() => (cat === "Todas" ? PUB : PUB.filter((p) => p.cat === cat)), [cat]);
  const stepsIdx = (o: Order) => {
    const i = orderFlow.indexOf(o.status);
    if (i !== -1) return i;
    if (o.status === "en_fabricacion" || o.status === "en_produccion") return 4;
    if (o.status === "listo_proveedor") return 5;
    return 0;
  };

  /* ─────────────── RENDER ─────────────── */
  return (
    <div className="min-h-screen bg-paper">
      {/* barra anuncio */}
      <div className="bg-night text-paper/85 text-center text-[10.5px] font-mono tracking-[0.14em] py-1.5 px-4 uppercase">
        Envíos a todo Ecuador · Garantía estructural 5 años · Pago seguro con PayPhone
      </div>

      {/* header público */}
      <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur border-b border-line">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 h-16 flex items-center gap-6">
          <button onClick={() => setSub("home")} className="flex items-center gap-2.5 group">
            <span className="font-display font-bold text-[21px] tracking-[0.34em] text-ink group-hover:tracking-[0.4em] transition-all duration-300">BLETIA</span>
            <span className="w-1.5 h-1.5 rounded-full bg-wine mt-2" />
          </button>
          <nav className="hidden md:flex items-center gap-7 mx-auto">
            {([["tienda", "Colección"], ["journal", "Diario"], ["casa", "La Casa"], ["seguimiento", "Seguimiento"]] as const).map(([k, l]) => (
              <button key={k} onClick={() => setSub(k)} className={`text-[12px] font-semibold tracking-[0.16em] uppercase transition-colors uline ${sub === k ? "text-wine" : "text-ink/70 hover:text-ink"}`}>{l}</button>
            ))}
          </nav>
          <div className="flex items-center gap-1 ml-auto md:ml-0">
            <button onClick={() => setNewsOpen(true)} className="hidden lg:flex items-center gap-1 border border-wine/40 text-wine rounded-full px-3 py-1 text-[10.5px] font-bold tracking-wider hover:bg-winel transition-colors mr-2">5% DCTO</button>
            <button onClick={() => (cuenta ? setSub("cuenta") : abrirAuth())} title={cuenta ? "Mi cuenta" : "Ingresar / crear cuenta"}
              className="w-10 h-10 grid place-items-center rounded-full hover:bg-ink/6 transition-colors text-ink">
              <Icon name="users" size={18} />
            </button>
            <button onClick={() => setCartOpen(true)} title="Carrito" className="relative w-10 h-10 grid place-items-center rounded-full hover:bg-ink/6 transition-colors text-ink">
              <Icon name="cart" size={18} />
              {cartCount > 0 && <span key={cartCount} className="anim-pop absolute -top-0.5 -right-0.5 w-[18px] h-[18px] rounded-full bg-wine text-paper font-mono text-[9.5px] font-bold grid place-items-center num">{cartCount}</span>}
            </button>
          </div>
        </div>
        {/* nav móvil */}
        <div className="md:hidden border-t border-line px-4 py-2 flex gap-4 overflow-x-auto">
          {([["tienda", "Colección"], ["journal", "Diario"], ["casa", "La Casa"], ["seguimiento", "Seguimiento"], ["cuenta", "Mi cuenta"]] as const).map(([k, l]) => (
            <button key={k} onClick={() => (k === "cuenta" && !cuenta ? abrirAuth() : setSub(k))} className={`text-[11px] font-bold tracking-[0.14em] uppercase whitespace-nowrap ${sub === k ? "text-wine" : "text-mut"}`}>{l}</button>
          ))}
        </div>
      </header>

      {/* ═══ HOME ═══ */}
      {sub === "home" && (
        <>
          {/* apertura: la pieza, no el eslogan */}
          <section className="relative h-[74vh] min-h-[480px] overflow-hidden">
            <div className="absolute inset-0"><Thumb src={IMG.sofa} alt="Sofá Bletia" className="w-full h-full kenburns" /></div>
            <div className="absolute inset-0 bg-gradient-to-r from-night/55 via-night/10 to-transparent" />
            <div className="relative max-w-[1280px] mx-auto px-4 lg:px-8 h-full flex items-end pb-14">
              <div className="text-paper anim-rise max-w-xl">
                <h1 className="font-display font-medium text-[52px] lg:text-[76px] leading-[0.98]">
                  Simple. Elegante. <span className="text-oakl">tu.</span>
                </h1>
                <p className="text-[15px] text-paper/75 mt-4 max-w-sm leading-relaxed">Hacemos a mano para cuidar a detalle en cada pieza. Cada pieza define tu espacio.</p>
                <div className="flex items-center gap-5 mt-7">
                  <button onClick={() => setSub("tienda")} className="bg-paper text-night px-6 py-3 text-[12.5px] font-bold tracking-[0.14em] uppercase hover:bg-oakl transition-colors">Ver colección</button>
                  <button onClick={() => setSub("casa")} className="text-paper/85 text-[12.5px] font-semibold tracking-[0.14em] uppercase uline">A medida →</button>
                </div>
              </div>
            </div>
          </section>

          {/* editorial: hechos en Cuenca */}
          <section className="max-w-[1280px] mx-auto px-4 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
            <div className="anim-up">
              <h2 className="font-display font-medium text-[40px] lg:text-[50px] leading-[1.05] text-ink">Muebles hechos en Cuenca</h2>
              <p className="text-[15px] text-mut mt-5 leading-relaxed max-w-md">Es un espacio en donde cabe desde las ideas, el diseño y cada pieza convertida en realidad.</p>
              <div className="mt-8 divide-y divide-line border-y border-line max-w-md">
                {[["01", "A medida", "Tus dimensiones, tu tapiz, tu lacado. Confirmas con fotos antes de fabricar."], ["02", "Con color", "Más de 40 telas y 12 acabados de madera para que la pieza sea tuya."], ["03", "Un espacio", "Del plano a la sala: asesoría en showroom o por videollamada."]].map(([n, t, d]) => (
                  <div key={n} className="flex gap-5 py-4 group hover:bg-card transition-colors px-2 -mx-2">
                    <span className="font-mono text-[11px] text-wine pt-1.5">{n}</span>
                    <div><div className="font-display font-semibold text-[20px] text-ink group-hover:translate-x-1 transition-transform">{t}</div><p className="text-[13px] text-mut mt-1">{d}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Thumb src={IMG.poltrona} alt="Sillón Zoe" className="w-full h-[440px] rounded-sm" />
              <div className="absolute -bottom-5 -left-5 bg-night text-paper px-5 py-4 hidden md:block">
                <div className="font-display text-[19px]">La madera manda, nosotros escuchamos.</div>
              </div>
            </div>
          </section>

          {/* colecciones */}
          <section className="max-w-[1280px] mx-auto px-4 lg:px-8 pb-20">
            <div className="flex items-end justify-between mb-7">
              <div><h2 className="font-display font-medium text-[36px] text-ink">Explora por pieza</h2></div>
              <button onClick={() => setSub("tienda")} className="text-[12px] font-bold tracking-[0.14em] uppercase uline text-ink/70 hover:text-ink">Ver todo</button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 stagger">
              {CATS.map((c, i) => {
                const p = PUB.find((x) => x.cat === c && x.img)!;
                return (
                  <button key={c} onClick={() => { setCat(c); setSub("tienda"); }} className={`group relative overflow-hidden rounded-sm ${i === 0 ? "col-span-2 row-span-2 h-[420px] lg:h-auto" : "h-[200px]"}`}>
                    <Thumb src={p.img} alt={c} className="w-full h-full group-hover:scale-[1.05] transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-night/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                      <span className={`font-display font-semibold text-paper ${i === 0 ? "text-[30px]" : "text-[21px]"}`}>{c}</span>
                      <span className="w-8 h-8 rounded-full bg-paper/15 backdrop-blur grid place-items-center text-paper opacity-0 group-hover:opacity-100 transition-opacity"><Icon name="arrow" size={13} /></span>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* novedades */}
          <section className="bg-card border-y border-line py-20">
            <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
              <div className="flex items-end justify-between mb-8">
                <div><h2 className="font-display font-medium text-[36px] text-ink">Recién salidas del taller</h2></div>
                <button onClick={() => { setCat("Todas"); setSub("tienda"); }} className="text-[12px] font-bold tracking-[0.14em] uppercase uline text-ink/70 hover:text-ink">Ver todo</button>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 stagger">
                {PUB.slice(0, 8).map((p) => <CardProducto key={p.id} p={p} liked={likes.includes(p.id)} onLike={() => toggleLike(p.id)} onOpen={() => abrirProducto(p)} onAdd={() => addCart(p, 1)} />)}
              </div>
            </div>
          </section>

          {/* destacado */}
          <section className="bg-night text-paper">
            <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative order-2 lg:order-1">
                <Thumb src={IMG.sofa} alt="Sofá Miro Studio" className="w-full h-[380px]" />
                <span className="absolute top-4 left-4 bg-wine text-paper font-mono text-[9.5px] tracked uppercase px-2.5 py-1">Destacado</span>
              </div>
              <div className="order-1 lg:order-2 anim-up">
                <h2 className="font-display font-medium text-[44px] lg:text-[54px] leading-[1.03]">Sofá Miro Studio</h2>
                <div className="flex items-baseline gap-3 mt-6">
                  <span className="font-display font-semibold text-[32px] num">$829.00</span>
                  <span className="font-mono text-[10px] tracked uppercase text-paper/40">Incluido IVA</span>
                </div>
                <button onClick={() => abrirProducto(PUB[1])} className="mt-7 bg-paper text-night px-7 py-3 text-[12.5px] font-bold tracking-[0.14em] uppercase hover:bg-oakl transition-colors">Descubrir</button>
              </div>
            </div>
          </section>

          {/* diario */}
          <section className="max-w-[1280px] mx-auto px-4 lg:px-8 py-20">
            <div className="flex items-end justify-between mb-8">
              <div><h2 className="font-display font-medium text-[36px] text-ink">Del taller a tu casa</h2></div>
              <button onClick={() => setSub("journal")} className="text-[12px] font-bold tracking-[0.14em] uppercase uline text-ink/70 hover:text-ink">Ver todos</button>
            </div>
            <div className="grid md:grid-cols-3 gap-6 stagger">
              {DIARIO.slice(0, 3).map((a) => <TeaserDiario key={a.id} a={a} onOpen={() => setArtOpen(a)} />)}
            </div>
          </section>

          {/* newsletter */}
          <section className="max-w-[1280px] mx-auto px-4 lg:px-8 pb-20">
            <div className="bg-winel border border-wine/15 px-6 lg:px-12 py-12 grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display font-medium text-[32px] text-ink leading-tight">Sé la primera persona en recibir novedades de Bletia</h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input placeholder="Tu correo" className="flex-1 bg-paper border border-line2 rounded-sm px-4 py-3 text-[13.5px] outline-none focus:border-wine/50 transition-colors" />
                <button onClick={() => setNewsOpen(true)} className="bg-ink text-paper px-7 py-3 text-[12px] font-bold tracking-[0.14em] uppercase hover:bg-wine transition-colors">Obtener 5% dcto</button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ═══ TIENDA ═══ */}
      {sub === "tienda" && (
        <section className="max-w-[1280px] mx-auto px-4 lg:px-8 py-14">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8 anim-up">
            <div>
              <h1 className="font-display font-medium text-[46px] text-ink">Tienda</h1>
            </div>
            <div className="flex flex-wrap gap-5">
              {["Todas", ...CATS].map((c) => (
                <button key={c} onClick={() => setCat(c)} className={`text-[12.5px] font-semibold tracking-[0.1em] uppercase pb-1 border-b transition-colors ${cat === c ? "border-wine text-wine" : "border-transparent text-mut hover:text-ink"}`}>{c}</button>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10 stagger">
            {productos.map((p) => <CardProducto key={p.id} p={p} liked={likes.includes(p.id)} onLike={() => toggleLike(p.id)} onOpen={() => abrirProducto(p)} onAdd={() => addCart(p, 1)} />)}
          </div>
        </section>
      )}

      {/* ═══ DIARIO ═══ */}
      {sub === "journal" && (
        <section className="max-w-[1100px] mx-auto px-4 lg:px-8 py-14">
          <div className="anim-up mb-10"><h1 className="font-display font-medium text-[46px] text-ink">Historias de madera y tela</h1></div>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-12 stagger">
            {DIARIO.map((a) => <TeaserDiario key={a.id} a={a} onOpen={() => setArtOpen(a)} grande />)}
          </div>
        </section>
      )}

      {/* ═══ LA CASA ═══ */}
      {sub === "casa" && (
        <section className="max-w-[1100px] mx-auto px-4 lg:px-8 py-14">
          <div className="grid lg:grid-cols-2 gap-12 items-start anim-up">
            <div>
              <h1 className="font-display font-medium text-[46px] text-ink leading-tight">Un espacio para las ideas</h1>
              <p className="text-[15px] text-mut mt-5 leading-relaxed">Es un espacio en donde cabe desde las ideas, el diseño y cada pieza convertida en realidad. Visítanos en Cuenca: el café lo ponemos nosotros, las medidas tú.</p>
              <div className="mt-8 space-y-3">
                {[["Showroom", "Calle Larga 1-20 y Av. Solano, Cuenca"], ["Taller", "Panamericana Sur km 3, Cuenca — visitas con cita"], ["Horario", "Lun–Sáb · 09:30 a 18:30"], ["Contacto", "07 284 5511 · hola@bletia.ec"]].map(([t, d]) => (
                  <div key={t} className="flex gap-4 border-b border-line pb-3"><span className="font-mono text-[10px] tracked uppercase text-wine w-24 pt-1 shrink-0">{t}</span><span className="text-[14px] text-ink">{d}</span></div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <Thumb src={IMG.comedor} alt="Showroom BLETIA" className="w-full h-[300px]" />
              <div className="bg-night text-paper p-6">
                <div className="font-mono text-[9.5px] tracked uppercase text-paper/45">A medida — así funciona</div>
                <div className="mt-4 space-y-3">
                  {[["Eliges la pieza", "Cualquier modelo de la colección se adapta."], ["Confirmas specs", "Tapiz, lacado y fotos vía un link único."], ["Fabricamos", "Sigue cada etapa desde tu cuenta."], ["Entregamos", "Guía de remisión SRI y armado incluido."]].map(([t, d], i) => (
                    <div key={t} className="flex gap-3.5"><span className="font-display font-semibold text-[19px] text-oakl w-6 num">{i + 1}</span><div><div className="text-[13.5px] font-semibold">{t}</div><div className="text-[12px] text-paper/55">{d}</div></div></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══ SEGUIMIENTO ═══ */}
      {sub === "seguimiento" && (
        <section className="max-w-[640px] mx-auto px-4 py-14">
          <div className="text-center anim-up">
            <h1 className="font-display font-medium text-[42px] text-ink">¿Dónde está tu pieza?</h1>
            <p className="text-[13.5px] text-mut mt-2">Ingresa el código de tu pedido (lo recibiste por correo o WhatsApp).</p>
          </div>
          <div className="flex gap-2 mt-7">
            <input value={trackCode} onChange={(e) => setTrackCode(e.target.value)} onKeyDown={(e) => e.key === "Enter" && buscarPedido()} placeholder="PED-1041"
              className="flex-1 bg-card border border-line2 rounded-sm px-4 py-3 font-mono text-center text-[15px] outline-none focus:border-wine/50 transition-colors" />
            <button onClick={buscarPedido} className="bg-ink text-paper px-6 text-[12px] font-bold tracking-[0.14em] uppercase hover:bg-wine transition-colors">Buscar</button>
          </div>
          {tracked === "nf" && (
            <div className="text-center mt-10 text-[13px] text-fog anim-up">Prueba con un código de la demo: <button className="uline text-mut font-mono text-[12px]" onClick={() => { setTrackCode("PED-1043"); setTracked(state.orders.find((o) => o.code === "PED-1043") ?? "nf"); }}>PED-1043</button> · <button className="uline text-mut font-mono text-[12px]" onClick={() => { setTrackCode("PED-1041"); setTracked(state.orders.find((o) => o.code === "PED-1041") ?? "nf"); }}>PED-1041</button></div>
          )}
          {tracked !== "nf" && tracked && (() => {
            const o = tracked as Order;
            const idx = stepsIdx(o);
            const fin = ["anulado", "cancelado"].includes(o.status);
            return (
              <div className="mt-10 anim-pop">
                <div className="flex items-baseline justify-between border-b border-line pb-4">
                  <div><div className="font-mono text-[11px] text-fog">{o.code} · {fmtDate(o.createdAt)}</div><div className="font-display font-semibold text-[30px] text-ink">{estadosCliente[o.status]}</div></div>
                  <div className="text-right"><div className="font-mono text-[10px] uppercase tracked text-fog">Total</div><div className="font-display font-semibold text-[24px] num">{money(o.total)}</div></div>
                </div>
                {fin && <div className="mt-5 bg-brickl border border-brick/25 px-4 py-3 text-[13px] text-brick">Este pedido fue {o.status === "anulado" ? "anulado" : "cancelado"}. Si ya pagaste, tu reembolso sale en 48 h.</div>}
                <div className="relative pl-7 mt-6 space-y-1 before:absolute before:left-[10px] before:top-2 before:bottom-2 before:w-px before:bg-line2">
                  {orderFlow.map((s, i) => {
                    const doneS = !fin && i <= idx;
                    return (
                      <div key={s} className="relative py-1.5">
                        <span className={`absolute -left-7 top-1.5 w-5 h-5 rounded-full grid place-items-center border-4 border-paper ${doneS ? (s === "entregado" ? "bg-pine" : "bg-wine") : "bg-line2"}`}>
                          {doneS && <Icon name="check" size={9} className="text-paper" />}
                        </span>
                        <div className={`text-[14.5px] ${!fin && i === idx ? "font-display font-bold text-[17px] text-ink" : doneS ? "text-ink/70" : "text-fog"}`}>{estadosCliente[s]}</div>
                        {!fin && i === idx && <div className="font-mono text-[10px] text-wine uppercase tracking-[0.14em] mt-0.5 anim-feed">estás aquí</div>}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 border-t border-line pt-4 space-y-1.5">
                  {o.items.map((i, ix) => (
                    <div key={ix} className="flex justify-between text-[13.5px]"><span>{i.qty}× {i.name}</span><span className="font-mono num text-mut">{money(i.qty * i.price * 1.15)}</span></div>
                  ))}
                </div>
              </div>
            );
          })()}
        </section>
      )}

      {/* ═══ CUENTA ═══ */}
      {sub === "cuenta" && (
        <section className="max-w-[900px] mx-auto px-4 py-14">
          {!cuenta ? (
            <div className="text-center py-16 anim-up">
              <div className="font-display font-medium text-[36px] text-ink">Tu espacio, tu cuenta</div>
              <p className="text-[14px] text-mut mt-3">Ingresa para ver tus pedidos, seguimientos y cupones.</p>
              <button onClick={abrirAuth} className="mt-6 bg-ink text-paper px-8 py-3 text-[12.5px] font-bold tracking-[0.14em] uppercase hover:bg-wine transition-colors">Ingresar / crear cuenta</button>
            </div>
          ) : (
            <div className="anim-up">
              <div className="flex flex-wrap items-end justify-between gap-3 border-b border-line pb-5">
                <div><h1 className="font-display font-medium text-[40px] text-ink">{miCuenta?.nombre ?? cuenta}</h1></div>
                <button onClick={() => { localStorage.removeItem(CUENTA_KEY); setCuenta(null); toast("Sesión cerrada", "info"); }} className="text-[12px] font-semibold uppercase tracking-[0.12em] text-mut uline">Cerrar sesión</button>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-7">
                <div className="md:col-span-2 space-y-3">
                  <div className="font-mono text-[10px] tracked uppercase text-fog">Mis pedidos</div>
                  {misPedidos.length === 0 && <div className="border border-line bg-card px-5 py-8 text-center text-[13.5px] text-mut">Aún no tienes pedidos. <button className="uline text-wine font-semibold" onClick={() => setSub("tienda")}>Explorar la colección</button></div>}
                  {misPedidos.map((o) => (
                    <div key={o.id} className="border border-line bg-card px-5 py-4 flex flex-wrap items-center gap-3 hover:border-wine/40 transition-colors">
                      <div className="min-w-0 flex-1">
                        <div className="font-mono text-[11px] text-fog">{o.code} · {fmtDate(o.createdAt)}</div>
                        <div className="font-display font-semibold text-[19px] text-ink">{estadosCliente[o.status]}</div>
                        <div className="text-[12px] text-mut">{o.items.reduce((a, i) => a + i.qty, 0)} piezas · {o.bultos} bultos</div>
                      </div>
                      <div className="font-mono num text-[15px] font-semibold">{money(o.total)}</div>
                      <button onClick={() => { setSub("seguimiento"); setTrackCode(o.code); setTracked(o); }} className="border border-ink px-4 py-2 text-[11px] font-bold tracking-[0.12em] uppercase hover:bg-ink hover:text-paper transition-colors">Seguir</button>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {miCuenta?.cupon && (
                    <div className="bg-wine text-paper px-5 py-4 relative overflow-hidden">
                      <div className="absolute -right-3 -top-3 font-display italic text-[80px] text-paper/10 leading-none">%</div>
                      <div className="font-mono text-[9.5px] tracked uppercase text-paper/60">Tu cupón</div>
                      <div className="font-display font-semibold text-[24px] mt-1">5% dcto</div>
                      <div className="text-[11.5px] text-paper/70 mt-1">Primera compra · se aplica en el checkout</div>
                    </div>
                  )}
                  <div className="border border-line bg-card px-5 py-4">
                    <div className="font-mono text-[9.5px] tracked uppercase text-fog">Datos</div>
                    <div className="text-[13px] text-ink mt-2 space-y-1"><div>{cuenta}</div><div className="text-mut">{miCuenta?.ciudad ?? "Ecuador"} · cliente desde {miCuenta ? fmtDate(miCuenta.desde) : "—"}</div></div>
                  </div>
                  <div className="border border-line bg-card px-5 py-4">
                    <div className="font-mono text-[9.5px] tracked uppercase text-fog">Garantía</div>
                    <p className="text-[12.5px] text-mut mt-2 leading-relaxed">5 años estructural en piezas de taller. Actívala con tu número de pedido.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      {/* footer */}
      <footer className="bg-night text-paper/65 mt-20">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-14 grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2.5"><span className="font-display font-bold text-[20px] tracking-[0.34em] text-paper">BLETIA</span><span className="w-1.5 h-1.5 rounded-full bg-wine mt-2" /></div>
            <p className="text-[13px] text-paper/45 mt-3 tracking-wide">Simple. Elegante. tu.</p>
            <p className="text-[12px] mt-4 leading-relaxed max-w-xs">Muebles hechos en Cuenca, Ecuador. Taller propio desde hace 27 años · {state.settings.company.ruc}</p>
          </div>
          <div className="text-[12.5px] space-y-2.5">
            <div className="font-mono text-[9.5px] tracked uppercase text-paper/35 mb-3">Colección</div>
            {CATS.map((c) => <button key={c} onClick={() => { setCat(c); setSub("tienda"); window.scrollTo({ top: 0 }); }} className="block hover:text-oakl transition-colors">{c}</button>)}
          </div>
          <div className="text-[12.5px] space-y-2.5">
            <div className="font-mono text-[9.5px] tracked uppercase text-paper/35 mb-3">Ayuda</div>
            {[["Seguimiento", "seguimiento"], ["Garantía 5 años", "casa"], ["La Casa", "casa"], ["Diario", "journal"]].map(([l, k]) => <button key={l} onClick={() => setSub(k as Sub)} className="block hover:text-oakl transition-colors">{l}</button>)}
          </div>
          <div className="text-[12.5px] space-y-2.5">
            <div className="font-mono text-[9.5px] tracked uppercase text-paper/35 mb-3">Cuenta</div>
            <button onClick={() => (cuenta ? setSub("cuenta") : abrirAuth())} className="block hover:text-oakl transition-colors">{cuenta ? "Mi cuenta" : "Ingresar"}</button>
            <button onClick={() => { setAuthTab("crear"); setTurn("idle"); setAuthOpen(true); }} className="block hover:text-oakl transition-colors">Crear cuenta</button>
            <div className="pt-3 flex gap-2"><Badge tone="oak">PayPhone</Badge><Badge tone="fog">SRI</Badge></div>
          </div>
        </div>
        <div className="border-t border-paper/10">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-4 flex flex-wrap justify-between gap-2 font-mono text-[10px] text-paper/30">
            <span>© 2026 BLETIA · hecho en Cuenca, Ecuador</span>
            <span>Privacidad · Cookies · Cambios y devoluciones</span>
          </div>
        </div>
      </footer>

      {/* cookies */}
      {cookies && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:w-[400px] z-50 bg-night text-paper p-5 shadow-2xl anim-pop">
          <div className="font-display font-semibold text-[17px]">Tu privacidad</div>
          <p className="text-[11.5px] text-paper/60 mt-1.5 leading-relaxed">Usamos cookies para mejorar tu experiencia. Necesarias, analíticas y de marketing — tú decides.</p>
          <div className="flex gap-2 mt-3.5">
            <button onClick={() => { localStorage.setItem("bletia-cookies", "ok"); setCookies(false); }} className="flex-1 bg-paper text-night py-2 text-[11px] font-bold tracking-wider uppercase hover:bg-oakl transition-colors">Aceptar</button>
            <button onClick={() => { localStorage.setItem("bletia-cookies", "ok"); setCookies(false); }} className="flex-1 border border-paper/25 py-2 text-[11px] font-bold tracking-wider uppercase hover:bg-paper/10 transition-colors">Solo necesarias</button>
          </div>
        </div>
      )}



      {/* ── carrito ── */}
      <Drawer open={cartOpen} onClose={() => setCartOpen(false)} kicker={`Carrito · ${cartCount}`} title="Tu selección">
        {cartLines.length === 0 ? (
          <div className="text-center py-14">
            <div className="font-display font-medium text-[24px] text-ink">Tu carrito está <em className="italic">vacío</em></div>
            <button onClick={() => { setCartOpen(false); setSub("tienda"); }} className="mt-5 text-[12px] font-bold tracking-[0.14em] uppercase uline text-wine">Ver colección</button>
          </div>
        ) : (
          <div className="space-y-3">
            {cartLines.map((c) => (
              <div key={c.id} className="flex items-center gap-3 border-b border-line pb-3">
                {c.p.img ? <Thumb src={c.p.img} alt={c.p.nombre} className="w-16 h-16" /> : <SinImagen nombre={c.p.nombre} className="w-16 h-16" />}
                <div className="min-w-0 flex-1">
                  <div className="font-display font-semibold text-[16px] text-ink leading-tight">{c.p.nombre}</div>
                  <div className="font-mono text-[11px] text-fog num">{money(c.p.precio)} · Incluido IVA</div>
                </div>
                <div className="flex items-center border border-line2 rounded-sm overflow-hidden shrink-0">
                  <button className="px-2 py-1 hover:bg-ink/5" onClick={() => setCart(cart.map((x) => x.id === c.id ? { ...x, qty: Math.max(1, x.qty - 1) } : x))}><Icon name="minus" size={11} /></button>
                  <span className="px-2.5 font-mono text-[12px] num">{c.qty}</span>
                  <button className="px-2 py-1 hover:bg-ink/5" onClick={() => setCart(cart.map((x) => x.id === c.id ? { ...x, qty: x.qty + 1 } : x))}><Icon name="plus" size={11} /></button>
                </div>
                <button className="text-fog hover:text-brick transition-colors" onClick={() => setCart(cart.filter((x) => x.id !== c.id))}><Icon name="x" size={14} /></button>
              </div>
            ))}
            <div className="pt-2 space-y-1 text-[13px]">
              <div className="flex justify-between text-mut"><span>Subtotal</span><span className="font-mono num">{money(totalCart - ivaCart)}</span></div>
              <div className="flex justify-between text-mut"><span>IVA 15%</span><span className="font-mono num">{money(ivaCart)}</span></div>
              <div className="flex justify-between font-display font-bold text-[20px] text-ink pt-1"><span>Total</span><span className="num">{money(totalCart)}</span></div>
              <div className="text-[10px] font-mono uppercase tracked text-fog text-right">Incluido IVA</div>
            </div>
            <button onClick={() => { setCo({ nombre: miCuenta?.nombre ?? "", email: cuenta ?? "", ciudad: miCuenta?.ciudad ?? "Cuenca", direccion: "" }); setDone(null); setCheckoutOpen(true); }}
              className="w-full bg-ink text-paper py-3.5 text-[12px] font-bold tracking-[0.14em] uppercase hover:bg-wine transition-colors">Finalizar compra</button>
            <p className="text-center text-[10.5px] text-fog">Pago seguro con PayPhone · la tarjeta nunca toca nuestros servidores</p>
          </div>
        )}
      </Drawer>

      {/* ── checkout ── */}
      <Modal open={checkoutOpen} onClose={() => setCheckoutOpen(false)} kicker="Checkout · bletia.ec" title={done ? "Pedido confirmado" : "Finalizar compra"} wide>
        {done ? (
          <div className="text-center py-6 anim-pop max-w-md mx-auto">
            <div className="w-16 h-16 mx-auto rounded-full bg-pinel text-pined grid place-items-center mb-4"><Icon name="check" size={28} /></div>
            <div className="font-display font-medium text-[30px] text-ink">Gracias por tu compra</div>
            <p className="text-[13.5px] text-mut mt-2">Tu pedido <b className="font-mono">{done.code}</b> por <b className="num">{money(done.total)}</b> ya está en el taller. Tu cuenta quedó creada.</p>
            <div className="mt-5 bg-night text-paper p-5 text-left">
              <div className="font-mono text-[9.5px] tracked uppercase text-paper/45">Paga con PayPhone</div>
              <div className="font-mono text-[12px] text-oakl break-all mt-1.5">{done.link}</div>
              <div className="flex gap-2 mt-4">
                <button onClick={async () => { await copyText(done.link); toast("Link de pago copiado"); }} className="flex-1 border border-paper/25 py-2.5 text-[11px] font-bold tracking-wider uppercase hover:bg-paper/10 transition-colors">Copiar link</button>
                <button onClick={() => { setCheckoutOpen(false); setSub("seguimiento"); setTrackCode(done.code); setTracked(state.orders.find((o) => o.code === done.code) ?? "nf"); }} className="flex-1 bg-paper text-night py-2.5 text-[11px] font-bold tracking-wider uppercase hover:bg-oakl transition-colors">Rastrear pedido</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {!cuenta && <p className="text-[12px] text-mut bg-winel border border-wine/15 px-3.5 py-2.5">Tu <b className="text-wine">cuenta se crea automáticamente</b> con la compra — sin formularios extra.</p>}
            <div className="grid sm:grid-cols-2 gap-3">
              <input placeholder="Nombre completo" value={co.nombre} onChange={(e) => setCo({ ...co, nombre: e.target.value })} className="bg-card border border-line2 rounded-sm px-3.5 py-2.5 text-[13.5px] outline-none focus:border-wine/50" />
              <input placeholder="Correo" value={co.email} onChange={(e) => setCo({ ...co, email: e.target.value })} className="bg-card border border-line2 rounded-sm px-3.5 py-2.5 text-[13.5px] outline-none focus:border-wine/50" />
              <select value={co.ciudad} onChange={(e) => setCo({ ...co, ciudad: e.target.value })} className="bg-card border border-line2 rounded-sm px-3.5 py-2.5 text-[13.5px] outline-none focus:border-wine/50">
                {["Cuenca", "Quito", "Guayaquil", "Ambato", "Riobamba", "Manta"].map((c) => <option key={c}>{c}</option>)}
              </select>
              <input placeholder="Dirección de entrega" value={co.direccion} onChange={(e) => setCo({ ...co, direccion: e.target.value })} className="bg-card border border-line2 rounded-sm px-3.5 py-2.5 text-[13.5px] outline-none focus:border-wine/50" />
            </div>
            <div className="flex justify-between items-center border-t border-line pt-3">
              <span className="text-[13px] text-mut">{cartCount} piezas · IVA incluido</span>
              <span className="font-display font-bold text-[22px] num">{money(totalCart)}</span>
            </div>
            <button onClick={checkout} className="w-full bg-ink text-paper py-3.5 text-[12px] font-bold tracking-[0.14em] uppercase hover:bg-wine transition-colors flex items-center justify-center gap-2"><Icon name="qr" size={15} /> Crear pedido y link de pago</button>
          </div>
        )}
      </Modal>

      {/* ── auth popup (Ingresar / Crear cuenta) ── */}
      <Modal open={authOpen} onClose={() => setAuthOpen(false)} kicker="bletia.ec/cuenta" title="" >
        <div className="-mt-4">
          <div className="flex gap-1 bg-ink/5 p-1 rounded-sm mb-4">
            {([["login", "Ingresar"], ["crear", "Crear cuenta"]] as const).map(([k, l]) => (
              <button key={k} onClick={() => { setAuthTab(k); setTurn("idle"); }} className={`flex-1 py-2 text-[12px] font-bold tracking-[0.1em] uppercase transition-all ${authTab === k ? "bg-card shadow-sm text-ink" : "text-mut"}`}>{l}</button>
            ))}
          </div>
          <div className="space-y-2.5">
            {authTab === "crear" && <input placeholder="Nombre" value={auth.nombre} onChange={(e) => setAuth({ ...auth, nombre: e.target.value })} className="w-full bg-card border border-line2 rounded-sm px-3.5 py-2.5 text-[13.5px] outline-none focus:border-wine/50" />}
            <input placeholder="Correo" value={auth.email} onChange={(e) => setAuth({ ...auth, email: e.target.value })} className="w-full bg-card border border-line2 rounded-sm px-3.5 py-2.5 text-[13.5px] outline-none focus:border-wine/50" />
            <input type="password" placeholder="Contraseña" value={auth.pass} onChange={(e) => setAuth({ ...auth, pass: e.target.value })} className="w-full bg-card border border-line2 rounded-sm px-3.5 py-2.5 text-[13.5px] outline-none focus:border-wine/50" />
            <button onClick={() => { setTurn("idle"); setTimeout(() => setTurn("checking"), 50); setTimeout(() => setTurn("ok"), 1000); }}
              className={`w-full flex items-center gap-2.5 border rounded-sm px-3.5 py-2.5 text-[12.5px] transition-colors ${turn === "ok" ? "border-pine/40 bg-pinel/40" : "border-line2 bg-card hover:border-line"}`}>
              <span className={`w-4.5 h-4.5 w-[18px] h-[18px] rounded-sm border grid place-items-center ${turn === "ok" ? "bg-pine border-pine text-paper" : "border-line2 bg-paper"}`}>
                {turn === "ok" && <Icon name="check" size={11} />}
              </span>
              <span className={turn === "ok" ? "text-pined font-semibold" : "text-mut"}>{turn === "checking" ? "Verificando…" : turn === "ok" ? "Verificado" : "Verifica que eres humano"}</span>
            </button>
            <button onClick={submitAuth} className="w-full bg-ink text-paper py-3 text-[12px] font-bold tracking-[0.14em] uppercase hover:bg-wine transition-colors">
              {authTab === "login" ? "Ingresar" : "Crear cuenta"}
            </button>
            <p className="text-center text-[10.5px] text-fog">Protegido por Turnstile en producción · LOPDP Ecuador</p>
          </div>
        </div>
      </Modal>

      {/* ── newsletter 5% ── */}
      <Modal open={newsOpen} onClose={() => setNewsOpen(false)} kicker="Únete a nosotros" title="">
        <div className="-mt-4 text-center">
          <div className="font-display font-semibold text-[46px] text-wine leading-none">5%</div>
          <div className="font-mono text-[10px] tracked uppercase text-fog mt-1">de descuento</div>
          <p className="text-[13.5px] text-mut mt-3">Únete a nuestra lista y obtén tu cupón ahora mismo para tu primera compra.</p>
          <div className="space-y-2.5 mt-5 text-left">
            <input placeholder="Nombre" className="w-full bg-card border border-line2 rounded-sm px-3.5 py-2.5 text-[13.5px] outline-none focus:border-wine/50" />
            <input placeholder="Correo" className="w-full bg-card border border-line2 rounded-sm px-3.5 py-2.5 text-[13.5px] outline-none focus:border-wine/50" />
            <input type="date" className="w-full bg-card border border-line2 rounded-sm px-3.5 py-2.5 text-[13.5px] outline-none focus:border-wine/50" />
            <div className="flex gap-4 text-[12.5px] text-mut px-1"><span className="text-[10px] uppercase tracked text-fog self-center">Quiero recibir:</span><label className="flex items-center gap-1.5"><input type="checkbox" defaultChecked className="accent-[#800000]" /> Blog</label><label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[#800000]" /> Studio</label></div>
            <button onClick={() => { setNewsOpen(false); toast("Cupón 5% dcto enviado a tu correo"); }} className="w-full bg-wine text-paper py-3 text-[12px] font-bold tracking-[0.14em] uppercase hover:bg-ink transition-colors">Unirme</button>
            <p className="text-center text-[10px] text-fog">Acepto recibir novedades y promociones · doble opt-in</p>
          </div>
        </div>
      </Modal>

      {/* ── artículo ── */}
      <Modal open={!!artOpen} onClose={() => setArtOpen(null)} kicker={`Diario · ${artOpen?.cat ?? ""}`} title="" wide>
        {artOpen && (
          <div className="-mt-3 max-w-2xl">
            <div className="font-mono text-[10px] tracked uppercase text-fog">{artOpen.min} min de lectura</div>
            <h2 className="font-display font-medium text-[34px] leading-[1.08] text-ink mt-2">{artOpen.titulo}</h2>
            <Thumb src={artOpen.img} alt={artOpen.titulo} className="w-full h-64 mt-5" />
            <div className="space-y-4 mt-6">
              {artOpen.cuerpo.map((p, i) => <p key={i} className={`text-[15px] leading-relaxed text-ink/80 ${i === 0 ? "first-letter:font-display first-letter:text-[44px] first-letter:float-left first-letter:mr-2 first-letter:leading-[0.85] first-letter:text-wine" : ""}`}>{p}</p>)}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

function CardProducto({ p, onOpen, onAdd }: { p: Pub; onOpen: () => void; onAdd: () => void }) {
  return (
    <div className="group cursor-pointer anim-up" onClick={onOpen}>
      <div className="relative overflow-hidden rounded-sm bg-[#ece5d8]">
        {p.img ? <Thumb src={p.img} alt={p.nombre} className="w-full h-[250px] group-hover:scale-[1.05] transition-transform duration-700" /> : <SinImagen nombre={p.nombre} className="w-full h-[250px]" />}
        <button onClick={(e) => { e.stopPropagation(); onAdd(); }}
          className="absolute bottom-0 left-0 right-0 bg-night/90 text-paper py-2.5 text-[11px] font-bold tracking-[0.16em] uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-wine">
          Añadir al carrito
        </button>
      </div>
      <div className="pt-3.5 flex items-start justify-between gap-3">
        <div>
          <div className="font-display font-semibold text-[18px] text-ink leading-tight group-hover:text-wine transition-colors">{p.nombre}</div>
          {p.frase && <div className="font-display italic text-[13px] text-mut mt-0.5">{p.frase}</div>}
        </div>
        <div className="text-right shrink-0">
          <div className="font-mono num text-[14px] font-semibold">{money(p.precio)}</div>
          <div className="font-mono text-[8.5px] tracked uppercase text-fog">Incluido IVA</div>
        </div>
      </div>
    </div>
  );
}

function TeaserDiario({ a, onOpen, grande }: { a: (typeof DIARIO)[0]; onOpen: () => void; grande?: boolean }) {
  return (
    <article className={`group cursor-pointer ${grande ? "flex flex-col" : ""}`} onClick={onOpen}>
      <div className="overflow-hidden rounded-sm">
        <Thumb src={a.img} alt={a.titulo} className={`w-full ${grande ? "h-[240px]" : "h-[200px]"} group-hover:scale-[1.05] transition-transform duration-700`} />
      </div>
      <div className="pt-4">
        <div className="flex items-center gap-3 font-mono text-[9.5px] tracked uppercase"><span className="text-wine">{a.cat}</span><span className="text-fog">{a.min} min de lectura</span></div>
        <h3 className={`font-display font-semibold leading-snug mt-2 group-hover:text-wine transition-colors ${grande ? "text-[26px]" : "text-[21px]"}`}>{a.titulo}</h3>
      </div>
    </article>
  );
}
