import { useEffect, useMemo, useState } from "react";
import { buildPayLink, useStore } from "../lib/store";
import type { Order, ProductoWeb, View } from "../lib/types";
import { calcTotals, copyText, money, uid } from "../lib/util";
import { Icon } from "../components/ui";
import { Thumb } from "../components/Img";
import ThemeToggle from "../components/ThemeToggle";
import type { WebCtx } from "./sitio/Renderers";
import { LinkA } from "./sitio/Renderers";
import { CuentaView, DiarioView, NotFound, PaginaView, PostView, ProductoView, SeguimientoView, TiendaView } from "./sitio/Routes";

/* ── enrutador por hash: la URL existe de verdad (#/tienda, #/diy/slug…) ── */
type Route =
  | { k: "home" }
  | { k: "tienda"; cat: string | null; tag: string | null }
  | { k: "producto"; slug: string }
  | { k: "diario"; cat: string | null; tag: string | null }
  | { k: "post"; cat: string; slug: string }
  | { k: "pagina"; slug: string }
  | { k: "seguimiento" }
  | { k: "cuenta" };

const parseRoute = (hash: string): Route => {
  const raw = (hash || "#/").replace(/^#/, "");
  const [pathPart, queryPart] = raw.split("?");
  const segs = pathPart.split("/").filter(Boolean);
  const q = new URLSearchParams(queryPart ?? "");
  if (segs.length === 0) return { k: "home" };
  if (segs[0] === "tienda") return { k: "tienda", cat: null, tag: q.get("tag") };
  if (segs[0] === "categoria" && segs[1]) return { k: "tienda", cat: segs[1], tag: q.get("tag") };
  if (segs[0] === "producto" && segs[1]) return { k: "producto", slug: segs[1] };
  if (segs[0] === "diario") return { k: "diario", cat: q.get("cat"), tag: q.get("tag") };
  if (segs[0] === "seguimiento") return { k: "seguimiento" };
  if (segs[0] === "cuenta") return { k: "cuenta" };
  if (segs.length === 1) return { k: "pagina", slug: segs[0] };
  return { k: "post", cat: segs[0], slug: segs.slice(1).join("/") };
};

const routePath = (r: Route): string => {
  switch (r.k) {
    case "home": return "/";
    case "tienda": {
      const base = r.cat ? `/categoria/${r.cat}` : "/tienda";
      return r.tag ? `${base}?tag=${r.tag}` : base;
    }
    case "producto": return `/producto/${r.slug}`;
    case "diario": return `/diario${r.cat ? `?cat=${r.cat}` : r.tag ? `?tag=${r.tag}` : ""}`;
    case "post": return `/${r.cat}/${r.slug}`;
    case "pagina": return `/${r.slug}`;
    case "seguimiento": return "/seguimiento";
    case "cuenta": return "/cuenta";
  }
};

const CUENTA_KEY = "bletia-cuenta";

export default function Sitio({ nav }: { nav: (v: View) => void }) {
  const { state, dispatch, toast } = useStore();
  const cms = state.cms;
  const cfg = cms.config;

  const [route, setRoute] = useState<Route>(() => parseRoute(window.location.hash));
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [anuncioOff, setAnuncioOff] = useState(false);
  const [likes, setLikes] = useState<string[]>([]);
  const [cart, setCart] = useState<{ id: string; qty: number; vari?: string }[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState<"login" | "crear">("login");
  const [turn, setTurn] = useState<"idle" | "checking" | "ok">("idle");
  const [authF, setAuthF] = useState({ nombre: "", email: "", pass: "" });
  const [newsOpen, setNewsOpen] = useState(false);
  const [cookies, setCookies] = useState(() => localStorage.getItem("bletia-cookies") !== "ok");
  const [cuenta, setCuenta] = useState<string | null>(() => localStorage.getItem(CUENTA_KEY));
  const [co, setCo] = useState({ nombre: "", email: "", ciudad: "Cuenca", direccion: "" });
  const [done, setDone] = useState<{ code: string; link: string; total: number } | null>(null);

  useEffect(() => {
    const onHash = () => { setRoute(parseRoute(window.location.hash)); setMenuOpen(false); window.scrollTo({ top: 0 }); };
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("hashchange", onHash);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("hashchange", onHash); window.removeEventListener("scroll", onScroll); };
  }, []);

  /* redirecciones automáticas de slugs antiguos (generadas por el CMS al guardar) */
  useEffect(() => {
    const path = routePath(route).split("?")[0];
    const r = cms.redirects.find((x) => x.de === path || x.de === routePath(route));
    if (r) {
      window.location.hash = r.a;
      toast(`Redirigido: ${r.de} → ${r.a}`, "info");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route]);

  const go = (to: string) => { window.location.hash = to; };

  const cartLines = useMemo(
    () => cart.map((c) => ({ ...c, p: cms.productos.find((p) => p.id === c.id)! })).filter((c) => c.p),
    [cart, cms.productos]
  );
  const cartCount = cart.reduce((a, c) => a + c.qty, 0);
  const totalCart = cartLines.reduce((a, c) => a + c.p.precio * c.qty, 0);
  const ivaCart = totalCart - totalCart / 1.15;

  const addCart = (p: ProductoWeb, n: number, vari?: string) => {
    setCart((prev) => {
      const ex = prev.find((c) => c.id === p.id && c.vari === vari);
      return ex ? prev.map((c) => (c === ex ? { ...c, qty: c.qty + n } : c)) : [...prev, { id: p.id, qty: n, vari }];
    });
    toast(`${p.nombre}${vari ? ` · ${vari}` : ""} — en tu carrito`);
  };
  const toggleLike = (id: string) => setLikes((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  /* ── cuenta de consumidor ── */
  const openAuth = () => { setAuthTab("login"); setTurn("idle"); setAuthF({ nombre: "", email: cuenta ?? "", pass: "" }); setAuthOpen(true); };
  const submitAuth = () => {
    if (!authF.email.includes("@") || !authF.pass) return toast("Correo y contraseña son obligatorios", "warn");
    if (turn !== "ok") { setTurn("checking"); setTimeout(() => setTurn("ok"), 900); return; }
    if (authTab === "crear" && authF.nombre.trim()) {
      if (!state.cuentas.find((c) => c.email.toLowerCase() === authF.email.toLowerCase())) {
        dispatch({ type: "ADD_CUENTA", cuenta: { id: uid(), nombre: authF.nombre.trim(), email: authF.email, ciudad: "Cuenca", desde: new Date().toISOString(), cupon: "5% dcto primera compra" } });
      }
      toast("Cuenta creada · cupón 5% dcto activado");
    } else {
      toast(`Bienvenida de vuelta · ${authF.email}`);
    }
    localStorage.setItem(CUENTA_KEY, authF.email);
    setCuenta(authF.email);
    setAuthOpen(false);
    go("/cuenta");
  };
  const logout = () => { localStorage.removeItem(CUENTA_KEY); setCuenta(null); toast("Sesión cerrada", "info"); };

  /* ── checkout: la cuenta se crea al comprar ── */
  const checkout = () => {
    if (!co.email.includes("@") || !co.nombre.trim()) return toast("Nombre y correo son obligatorios", "warn");
    const cid = uid();
    dispatch({ type: "ADD_CUSTOMER", customer: { id: cid, code: `CL-0${170 + state.customers.length}`, name: co.nombre.trim(), doc: "—", type: "natural" as const, phone: "", email: co.email, city: co.ciudad, segment: "hogar", orders: 0, total: 0, credit: 0, since: new Date().toISOString(), notes: `Cliente web · ${co.direccion || "sin dirección"}` } });
    if (!state.cuentas.find((c) => c.email.toLowerCase() === co.email.toLowerCase())) {
      dispatch({ type: "ADD_CUENTA", cuenta: { id: uid(), nombre: co.nombre.trim(), email: co.email, ciudad: co.ciudad, desde: new Date().toISOString(), cupon: "5% dcto primera compra" } });
    }
    const lines = cartLines.map((c) => ({ productId: c.p.id, sku: c.p.slug.toUpperCase().slice(0, 12), name: `${c.p.nombre}${c.vari ? ` · ${c.vari}` : ""}`, qty: c.qty, price: Math.round((c.p.precio / 1.15) * 100) / 100, spec: null }));
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

  /* ── contenido de la ruta ── */
  const ctx: WebCtx = { go, cms, likes, toggleLike, addCart, openNews: () => setNewsOpen(true), openAuth, cuenta, logout, path: routePath(route) };
  const publicado = (p: { estado: string }) => p.estado === "publicada" || p.estado === "publicado" || p.estado === "activo";

  const body = (() => {
    switch (route.k) {
      case "home": {
        const pg = cms.paginas.find((p) => p.slug === "inicio" && publicado(p));
        return pg ? <PaginaView ctx={ctx} pagina={pg} /> : <NotFound ctx={ctx} />;
      }
      case "tienda": return <TiendaView ctx={ctx} cat={route.cat} tag={route.tag} />;
      case "producto": return <ProductoView ctx={ctx} slug={route.slug} />;
      case "diario": return <DiarioView ctx={ctx} cat={route.cat} tag={route.tag} />;
      case "post": return <PostView ctx={ctx} cat={route.cat} slug={route.slug} />;
      case "seguimiento": return <SeguimientoView ctx={ctx} />;
      case "cuenta": return <CuentaView ctx={ctx} />;
      case "pagina": {
        const pg = cms.paginas.find((p) => p.slug === route.slug && publicado(p));
        return pg ? <PaginaView ctx={ctx} pagina={pg} /> : <NotFound ctx={ctx} />;
      }
    }
  })();

  const navActive = (target: string) => {
    const t = target.split("?")[0];
    return routePath(route).startsWith(t) && t !== "/" || (t === "/" && route.k === "home");
  };

  return (
    <div className="min-h-screen bg-[var(--web-fondo)] dark:bg-paper" style={{ "--web-fondo": cfg.fondo } as React.CSSProperties}>
      {/* barra de anuncio (configurable en el CMS) */}
      {cfg.anuncioVisible && !anuncioOff && (
        <div className="bg-night text-paper/85 text-center text-[10.5px] tracking-[0.14em] uppercase py-2 px-10 relative">
          {cfg.anuncio}
          <button onClick={() => setAnuncioOff(true)} aria-label="Cerrar aviso" className="absolute right-3 top-1/2 -translate-y-1/2 text-paper/50 hover:text-paper transition-colors"><Icon name="x" size={12} /></button>
        </div>
      )}

      {/* header principal */}
      <header className={`sticky top-0 z-40 bg-[var(--web-fondo)]/92 dark:bg-paper/92 backdrop-blur border-b transition-shadow ${scrolled ? "border-line shadow-[0_4px_24px_rgba(0,0,0,0.06)]" : "border-transparent"}`} style={{ "--web-fondo": cfg.fondo } as React.CSSProperties}>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 h-[72px] flex items-center gap-7">
          <button onClick={() => setMenuOpen(true)} className="lg:hidden w-10 h-10 grid place-items-center text-ink" aria-label="Menú"><Icon name="panel" size={18} /></button>
          <LinkA to="/" className="flex items-center gap-2.5 group">
            <span className="font-display font-bold text-[21px] tracking-[0.34em] text-ink group-hover:tracking-[0.4em] transition-all duration-300">{cfg.logo}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-wine mt-2" />
          </LinkA>
          <nav className="hidden lg:flex items-center gap-8 mx-auto">
            {cfg.nav.map((n) => (
              <LinkA key={n.label} to={n.target} className={`text-[12px] font-semibold tracking-[0.16em] uppercase transition-colors uline ${navActive(n.target) ? "text-wine" : "text-ink/70 hover:text-ink"}`}>{n.label}</LinkA>
            ))}
          </nav>
          <div className="flex items-center gap-1.5 ml-auto lg:ml-0">
            <button onClick={() => setNewsOpen(true)} className="hidden xl:flex items-center border border-wine/40 text-wine rounded-full px-3.5 py-1.5 text-[10.5px] font-bold tracking-[0.14em] hover:bg-winel transition-colors mr-2">5% DCTO</button>
            <ThemeToggle />
            <button onClick={() => (cuenta ? go("/cuenta") : openAuth())} title={cuenta ? "Mi cuenta" : "Ingresar / crear cuenta"}
              className="w-10 h-10 grid place-items-center rounded-full hover:bg-ink/6 transition-colors text-ink"><Icon name="users" size={18} /></button>
            <button onClick={() => setCartOpen(true)} title="Carrito" className="relative w-10 h-10 grid place-items-center rounded-full hover:bg-ink/6 transition-colors text-ink">
              <Icon name="cart" size={18} />
              {cartCount > 0 && <span key={cartCount} className="anim-pop absolute -top-0.5 -right-0.5 w-[18px] h-[18px] rounded-full bg-wine text-paper font-mono text-[9.5px] font-bold grid place-items-center num">{cartCount}</span>}
            </button>
          </div>
        </div>
      </header>

      {/* menú móvil */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-night/50" onClick={() => setMenuOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-[300px] bg-card shadow-2xl p-6 anim-drawer flex flex-col">
            <div className="flex items-center justify-between">
              <span className="font-display font-bold text-[18px] tracking-[0.3em] text-ink">{cfg.logo}</span>
              <button onClick={() => setMenuOpen(false)} className="w-9 h-9 grid place-items-center text-mut"><Icon name="x" size={16} /></button>
            </div>
            <nav className="mt-8 space-y-1">
              {cfg.nav.map((n) => (
                <LinkA key={n.label} to={n.target} onClick={() => setMenuOpen(false)} className={`block px-3 py-2.5 text-[13px] font-semibold tracking-[0.14em] uppercase ${navActive(n.target) ? "text-wine" : "text-ink/75"}`}>{n.label}</LinkA>
              ))}
              <LinkA to="/seguimiento" onClick={() => setMenuOpen(false)} className="block px-3 py-2.5 text-[13px] font-semibold tracking-[0.14em] uppercase text-ink/75">Seguimiento</LinkA>
              <LinkA to="/cuenta" onClick={() => setMenuOpen(false)} className="block px-3 py-2.5 text-[13px] font-semibold tracking-[0.14em] uppercase text-ink/75">Mi cuenta</LinkA>
            </nav>
            <div className="mt-auto text-[12px] text-mut space-y-1 border-t border-line pt-4">
              <div>{cfg.contacto.telefono}</div>
              <div>{cfg.contacto.email}</div>
            </div>
          </div>
        </div>
      )}

      {/* ══ contenido de la ruta ══ */}
      <main>{body}</main>

      {/* footer — columnas editables en el CMS */}
      <footer className="bg-night text-paper/65 mt-24">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-16 grid md:grid-cols-[1.4fr_repeat(3,1fr)] gap-10" style={{ gridTemplateColumns: undefined }}>
          <div>
            <div className="flex items-center gap-2.5">
              <span className="font-display font-bold text-[20px] tracking-[0.34em] text-paper">{cfg.logo}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-wine mt-2" />
            </div>
            <p className="text-[13px] text-paper/45 mt-4">Simple. Elegante. tu.</p>
            <div className="text-[12.5px] mt-5 space-y-1.5 text-paper/55">
              <div>{cfg.contacto.direccion}</div>
              <div>{cfg.contacto.telefono} · {cfg.contacto.email}</div>
              <div>{cfg.contacto.horario}</div>
            </div>
          </div>
          {cfg.footer.map((col) => (
            <div key={col.titulo} className="text-[12.5px] space-y-2.5">
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-paper/35 mb-3">{col.titulo}</div>
              {col.links.map((l) => (
                <LinkA key={l.label} to={l.target} className="block hover:text-oakl transition-colors">{l.label}</LinkA>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t border-paper/10">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-5 flex flex-wrap justify-between gap-2 text-[11px] text-paper/35">
            <span>{cfg.copyright}</span>
            <span className="flex items-center gap-3">Pago seguro <b className="text-paper/60">PayPhone</b> · Factura electrónica <b className="text-paper/60">SRI</b></span>
          </div>
        </div>
      </footer>

      {/* cookies */}
      {cookies && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:w-[400px] z-50 bg-night text-paper p-5 shadow-2xl anim-pop">
          <div className="font-display font-semibold text-[17px]">Tu privacidad</div>
          <p className="text-[11.5px] text-paper/60 mt-1.5 leading-relaxed">Usamos cookies para mejorar tu experiencia. Necesarias, analíticas y de marketing — tú decides.</p>
          <div className="flex gap-2 mt-3.5">
            <button onClick={() => { localStorage.setItem("bletia-cookies", "ok"); setCookies(false); }} className="flex-1 bg-paper text-night py-2.5 text-[11px] font-bold tracking-[0.14em] uppercase hover:bg-oakl transition-colors">Aceptar</button>
            <button onClick={() => { localStorage.setItem("bletia-cookies", "ok"); setCookies(false); }} className="flex-1 border border-paper/25 py-2.5 text-[11px] font-bold tracking-[0.14em] uppercase hover:bg-paper/10 transition-colors">Solo necesarias</button>
          </div>
        </div>
      )}

      {/* ── carrito ── */}
      {cartOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-night/50" onClick={() => setCartOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-card border-l border-line shadow-2xl anim-drawer flex flex-col">
            <div className="px-6 pt-6 pb-4 border-b border-line flex items-center justify-between">
              <div className="font-display font-semibold text-[22px] text-ink">Tu selección ({cartCount})</div>
              <button onClick={() => setCartOpen(false)} className="w-9 h-9 grid place-items-center text-mut hover:text-ink"><Icon name="x" size={16} /></button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {cartLines.length === 0 ? (
                <div className="text-center py-16">
                  <div className="font-display font-medium text-[24px] text-ink">Tu carrito está vacío</div>
                  <button onClick={() => { setCartOpen(false); go("/tienda"); }} className="mt-5 text-[12px] font-bold tracking-[0.16em] uppercase uline text-wine">Ver colección</button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartLines.map((c, ix) => (
                    <div key={`${c.id}-${c.vari ?? ""}`} className="flex items-center gap-3.5 border-b border-line pb-4">
                      {c.p.img ? <Thumb src={c.p.img} alt={c.p.nombre} className="w-[68px] h-[68px]" /> : <div className="w-[68px] h-[68px] bg-[#ececea] grid place-items-center font-display font-semibold text-[24px] text-ink/20">B.</div>}
                      <div className="min-w-0 flex-1">
                        <div className="font-display font-semibold text-[16px] text-ink leading-tight">{c.p.nombre}</div>
                        {c.vari && <div className="text-[11.5px] text-mut mt-0.5">{c.p.vt}: {c.vari}</div>}
                        <div className="font-mono text-[11.5px] text-fog num mt-0.5">{money(c.p.precio)} · IVA incluido</div>
                      </div>
                      <div className="flex items-center border border-line2 shrink-0">
                        <button className="px-2.5 py-1.5 hover:bg-ink/5" onClick={() => setCart(cart.map((x, i2) => (i2 === ix ? { ...x, qty: Math.max(1, x.qty - 1) } : x)))}><Icon name="minus" size={11} /></button>
                        <span className="px-3 font-mono text-[12.5px] num">{c.qty}</span>
                        <button className="px-2.5 py-1.5 hover:bg-ink/5" onClick={() => setCart(cart.map((x, i2) => (i2 === ix ? { ...x, qty: x.qty + 1 } : x)))}><Icon name="plus" size={11} /></button>
                      </div>
                      <button className="text-fog hover:text-brick transition-colors" onClick={() => setCart(cart.filter((_, i2) => i2 !== ix))}><Icon name="x" size={14} /></button>
                    </div>
                  ))}
                  <div className="pt-2 space-y-1.5 text-[13.5px]">
                    <div className="flex justify-between text-mut"><span>Subtotal</span><span className="font-mono num">{money(totalCart - ivaCart)}</span></div>
                    <div className="flex justify-between text-mut"><span>IVA 15%</span><span className="font-mono num">{money(ivaCart)}</span></div>
                    <div className="flex justify-between font-display font-bold text-[21px] text-ink pt-1"><span>Total</span><span className="num">{money(totalCart)}</span></div>
                  </div>
                </div>
              )}
            </div>
            {cartLines.length > 0 && (
              <div className="border-t border-line px-6 py-5">
                <button onClick={() => { setCo({ nombre: state.cuentas.find((c) => c.email === cuenta)?.nombre ?? "", email: cuenta ?? "", ciudad: "Cuenca", direccion: "" }); setDone(null); setCheckoutOpen(true); }}
                  className="w-full bg-ink text-paper py-4 text-[12px] font-bold tracking-[0.16em] uppercase hover:bg-wine transition-colors">Finalizar compra</button>
                <p className="text-center text-[10.5px] text-fog mt-2.5">Pago seguro con PayPhone · la tarjeta nunca toca nuestros servidores</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── checkout ── */}
      {checkoutOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center p-4">
          <div className="absolute inset-0 bg-night/55" onClick={() => setCheckoutOpen(false)} />
          <div className="relative bg-card border border-line shadow-2xl w-full max-w-lg anim-pop max-h-[88vh] overflow-y-auto">
            <div className="px-6 pt-5 pb-4 border-b border-line flex items-center justify-between">
              <div className="font-display font-semibold text-[22px] text-ink">{done ? "Pedido confirmado" : "Finalizar compra"}</div>
              <button onClick={() => setCheckoutOpen(false)} className="w-9 h-9 grid place-items-center text-mut hover:text-ink"><Icon name="x" size={16} /></button>
            </div>
            <div className="p-6">
              {done ? (
                <div className="text-center anim-pop">
                  <div className="w-16 h-16 mx-auto rounded-full bg-mossl text-[#41621f] grid place-items-center mb-4"><Icon name="check" size={28} /></div>
                  <div className="font-display font-medium text-[28px] text-ink">Gracias por tu compra</div>
                  <p className="text-[13.5px] text-mut mt-2">Tu pedido <b className="font-mono">{done.code}</b> por <b className="num">{money(done.total)}</b> ya está en el taller. Tu cuenta quedó creada.</p>
                  <div className="mt-5 bg-night text-paper p-5 text-left">
                    <div className="text-[9.5px] uppercase tracking-[0.22em] text-paper/45">Paga con PayPhone</div>
                    <div className="font-mono text-[12px] text-oakl break-all mt-1.5">{done.link}</div>
                    <div className="flex gap-2 mt-4">
                      <button onClick={async () => { await copyText(done.link); toast("Link de pago copiado"); }} className="flex-1 border border-paper/25 py-2.5 text-[11px] font-bold tracking-[0.14em] uppercase hover:bg-paper/10 transition-colors">Copiar link</button>
                      <button onClick={() => { setCheckoutOpen(false); sessionStorage.setItem("bletia-track", done.code); go("/seguimiento"); }} className="flex-1 bg-paper text-night py-2.5 text-[11px] font-bold tracking-[0.14em] uppercase hover:bg-oakl transition-colors">Rastrear pedido</button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {!cuenta && <p className="text-[12.5px] text-mut bg-winel border border-wine/15 px-4 py-3">Tu <b className="text-wine">cuenta se crea automáticamente</b> con la compra — sin formularios extra.</p>}
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input placeholder="Nombre completo" value={co.nombre} onChange={(e) => setCo({ ...co, nombre: e.target.value })} className="bg-card border border-line2 px-3.5 py-3 text-[13.5px] outline-none focus:border-wine/50" />
                    <input placeholder="Correo" value={co.email} onChange={(e) => setCo({ ...co, email: e.target.value })} className="bg-card border border-line2 px-3.5 py-3 text-[13.5px] outline-none focus:border-wine/50" />
                    <select value={co.ciudad} onChange={(e) => setCo({ ...co, ciudad: e.target.value })} className="bg-card border border-line2 px-3.5 py-3 text-[13.5px] outline-none focus:border-wine/50">
                      {["Cuenca", "Quito", "Guayaquil", "Ambato", "Riobamba", "Manta"].map((c) => <option key={c}>{c}</option>)}
                    </select>
                    <input placeholder="Dirección de entrega" value={co.direccion} onChange={(e) => setCo({ ...co, direccion: e.target.value })} className="bg-card border border-line2 px-3.5 py-3 text-[13.5px] outline-none focus:border-wine/50" />
                  </div>
                  <div className="flex justify-between items-center border-t border-line pt-4">
                    <span className="text-[13px] text-mut">{cartCount} piezas · IVA incluido</span>
                    <span className="font-display font-bold text-[23px] num">{money(totalCart)}</span>
                  </div>
                  <button onClick={checkout} className="w-full bg-ink text-paper py-4 text-[12px] font-bold tracking-[0.16em] uppercase hover:bg-wine transition-colors flex items-center justify-center gap-2"><Icon name="qr" size={15} /> Crear pedido y link de pago</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── auth ── */}
      {authOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center p-4">
          <div className="absolute inset-0 bg-night/55" onClick={() => setAuthOpen(false)} />
          <div className="relative bg-card border border-line shadow-2xl w-full max-w-md anim-pop">
            <div className="px-6 pt-5 pb-4 border-b border-line flex items-center justify-between">
              <div className="font-display font-semibold text-[22px] text-ink">Tu cuenta</div>
              <button onClick={() => setAuthOpen(false)} className="w-9 h-9 grid place-items-center text-mut hover:text-ink"><Icon name="x" size={16} /></button>
            </div>
            <div className="p-6">
              <div className="flex gap-1 bg-ink/5 p-1 mb-4">
                {([["login", "Ingresar"], ["crear", "Crear cuenta"]] as const).map(([k, l]) => (
                  <button key={k} onClick={() => { setAuthTab(k); setTurn("idle"); }} className={`flex-1 py-2 text-[12px] font-bold tracking-[0.12em] uppercase transition-all ${authTab === k ? "bg-card shadow-sm text-ink" : "text-mut"}`}>{l}</button>
                ))}
              </div>
              <div className="space-y-2.5">
                {authTab === "crear" && <input placeholder="Nombre" value={authF.nombre} onChange={(e) => setAuthF({ ...authF, nombre: e.target.value })} className="w-full bg-card border border-line2 px-3.5 py-3 text-[13.5px] outline-none focus:border-wine/50" />}
                <input placeholder="Correo" value={authF.email} onChange={(e) => setAuthF({ ...authF, email: e.target.value })} className="w-full bg-card border border-line2 px-3.5 py-3 text-[13.5px] outline-none focus:border-wine/50" />
                <input type="password" placeholder="Contraseña" value={authF.pass} onChange={(e) => setAuthF({ ...authF, pass: e.target.value })} className="w-full bg-card border border-line2 px-3.5 py-3 text-[13.5px] outline-none focus:border-wine/50" />
                <button onClick={() => { setTurn("idle"); setTimeout(() => setTurn("checking"), 50); setTimeout(() => setTurn("ok"), 1000); }}
                  className={`w-full flex items-center gap-2.5 border px-3.5 py-3 text-[12.5px] transition-colors ${turn === "ok" ? "border-moss/40 bg-mossl/40" : "border-line2 bg-card hover:border-line"}`}>
                  <span className={`w-[18px] h-[18px] rounded-sm border grid place-items-center ${turn === "ok" ? "bg-moss border-moss text-paper" : "border-line2 bg-paper"}`}>
                    {turn === "ok" && <Icon name="check" size={11} />}
                  </span>
                  <span className={turn === "ok" ? "text-[#41621f] font-semibold" : "text-mut"}>{turn === "checking" ? "Verificando…" : turn === "ok" ? "Verificado" : "Verifica que eres humano"}</span>
                </button>
                <button onClick={submitAuth} className="w-full bg-ink text-paper py-3.5 text-[12px] font-bold tracking-[0.16em] uppercase hover:bg-wine transition-colors">
                  {authTab === "login" ? "Ingresar" : "Crear cuenta"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── newsletter 5% ── */}
      {newsOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center p-4">
          <div className="absolute inset-0 bg-night/55" onClick={() => setNewsOpen(false)} />
          <div className="relative bg-card border border-line shadow-2xl w-full max-w-md anim-pop p-7 text-center">
            <button onClick={() => setNewsOpen(false)} className="absolute top-3 right-3 w-9 h-9 grid place-items-center text-mut hover:text-ink"><Icon name="x" size={16} /></button>
            <div className="font-display font-semibold text-[52px] text-wine leading-none">5%</div>
            <div className="text-[10px] uppercase tracking-[0.24em] text-fog mt-1">de descuento</div>
            <p className="text-[14px] text-mut mt-3">{cfg.newsletterSub}</p>
            <div className="space-y-2.5 mt-6 text-left">
              <input placeholder="Nombre" className="w-full bg-card border border-line2 px-3.5 py-3 text-[13.5px] outline-none focus:border-wine/50" />
              <input placeholder="Correo" className="w-full bg-card border border-line2 px-3.5 py-3 text-[13.5px] outline-none focus:border-wine/50" />
              <input type="date" className="w-full bg-card border border-line2 px-3.5 py-3 text-[13.5px] outline-none focus:border-wine/50" />
              <button onClick={() => { setNewsOpen(false); toast("Cupón 5% dcto enviado a tu correo"); }} className="w-full bg-wine text-paper py-3.5 text-[12px] font-bold tracking-[0.16em] uppercase hover:bg-ink transition-colors">Unirme</button>
            </div>
          </div>
        </div>
      )}

      {/* puente al panel (solo para ti, no para el cliente) */}
      {state.session.user && (
        <button onClick={() => nav("dashboard")} title="Ir al panel interno"
          className="fixed bottom-5 right-5 z-40 w-11 h-11 rounded-full bg-night text-paper grid place-items-center shadow-xl hover:bg-wine transition-colors">
          <Icon name="gear" size={17} />
        </button>
      )}
    </div>
  );
}
