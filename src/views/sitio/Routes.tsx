import { useEffect, useState } from "react";
import { estadosCliente, orderFlow, useStore } from "../../lib/store";
import type { Order, PaginaWeb, ProductoWeb } from "../../lib/types";
import { fmtDate, money, slugify } from "../../lib/util";
import { Icon } from "../../components/ui";
import { Thumb } from "../../components/Img";
import { BloqueVista, CardProducto, LinkA, SinImagen, TeaserPost, type WebCtx } from "./Renderers";

/* ═══ TIENDA / CATEGORÍA ═══ */
export function TiendaView({ ctx, cat, tag }: { ctx: WebCtx; cat: string | null; tag: string | null }) {
  const productos = ctx.cms.productos.filter((p) => p.estado === "activo");
  const cats = Array.from(new Set(productos.map((p) => p.cat)));
  const allTags = Array.from(new Set(productos.flatMap((p) => p.etiquetas ?? []))).sort();
  const list = productos.filter((p) => (!cat || slugify(p.cat) === cat) && (!tag || (p.etiquetas ?? []).includes(tag)));
  const catName = cat ? (productos.find((p) => slugify(p.cat) === cat)?.cat ?? cat) : tag ? `#${tag}` : "Colección";
  const base = cat ? `/categoria/${cat}` : "/tienda";
  return (
    <section className="max-w-[1280px] mx-auto px-4 lg:px-8 py-14">
      <div className="flex flex-wrap items-end justify-between gap-4 anim-up">
        <h1 className="font-display font-medium text-[44px] lg:text-[54px] text-ink leading-none">{catName}</h1>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <LinkA to="/tienda" className={`text-[12.5px] font-semibold tracking-[0.12em] uppercase pb-1 border-b transition-colors ${!cat ? "border-wine text-wine" : "border-transparent text-mut hover:text-ink"}`}>Todo</LinkA>
          {cats.map((c) => (
            <LinkA key={c} to={`/categoria/${slugify(c)}`} className={`text-[12.5px] font-semibold tracking-[0.12em] uppercase pb-1 border-b transition-colors ${cat === slugify(c) ? "border-wine text-wine" : "border-transparent text-mut hover:text-ink"}`}>{c}</LinkA>
          ))}
        </div>
      </div>
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-5 anim-up">
          {allTags.map((t) => (
            <LinkA key={t} to={`${base}?tag=${slugify(t)}`} className={`text-[11px] px-2.5 py-1 border transition-colors ${tag === slugify(t) ? "border-wine text-wine bg-winel" : "border-line text-mut hover:border-wine/40 hover:text-wine"}`}>#{t}</LinkA>
          ))}
        </div>
      )}
      {list.length === 0 ? (
        <div className="text-center py-24 text-mut anim-up">No hay piezas en esta colección todavía.</div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-11 stagger mt-9">
          {list.map((p) => <CardProducto key={p.id} p={p} ctx={ctx} />)}
        </div>
      )}
    </section>
  );
}

/* ═══ PÁGINA DE PRODUCTO ═══ */
export function ProductoView({ ctx, slug }: { ctx: WebCtx; slug: string }) {
  const p = ctx.cms.productos.find((x) => x.slug === slug && x.estado === "activo");
  const [vari, setVari] = useState(0);
  const [qty, setQty] = useState(1);
  useEffect(() => { setVari(0); setQty(1); }, [slug]);
  if (!p) return <NotFound ctx={ctx} />;
  const relacionados = ctx.cms.productos.filter((x) => x.cat === p.cat && x.id !== p.id && x.estado === "activo").slice(0, 4);
  return (
    <section className="max-w-[1280px] mx-auto px-4 lg:px-8 py-12">
      <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-fog mb-8 anim-up">
        <LinkA to="/" className="hover:text-ink transition-colors">Inicio</LinkA> <span>/</span>
        <LinkA to={`/categoria/${slugify(p.cat)}`} className="hover:text-ink transition-colors">{p.cat}</LinkA> <span>/</span>
        <span className="text-wine">{p.nombre}</span>
      </nav>
      <div className="grid lg:grid-cols-2 gap-12 anim-up">
        <div>
          <div className="relative overflow-hidden">
            {p.img ? <Thumb src={p.img} alt={p.nombre} className="w-full h-[420px] lg:h-[540px]" /> : <SinImagen className="w-full h-[420px] lg:h-[540px]" />}
            {p.novedad && <span className="absolute top-4 left-4 bg-night text-paper text-[9.5px] font-bold uppercase tracking-[0.2em] px-3 py-1.5">Nuevo</span>}
          </div>
          <div className="grid grid-cols-4 gap-2 mt-2">
            {p.vars.map((v, i) => (
              <button key={v.n} onClick={() => setVari(i)} title={v.n}
                className={`h-16 grid place-items-center border transition-all ${i === vari ? "border-ink" : "border-line hover:border-line2"}`}>
                <span className="w-7 h-7 rounded-full border border-ink/10" style={{ background: v.c }} />
              </button>
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-display font-medium text-[40px] lg:text-[50px] leading-[1.02] text-ink">{p.nombre}</h1>
          <div className="flex items-baseline gap-3 mt-5">
            <span className="font-display font-semibold text-[30px] num text-ink">{money(p.precio)}</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-fog">Incluido IVA</span>
          </div>
          <p className="text-[15px] text-mut leading-relaxed mt-5 max-w-md">{p.desc}</p>

          <div className="mt-8">
            <div className="flex items-center justify-between">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-mut">{p.vt}</div>
              <div className="text-[13px] text-ink font-semibold">{p.vars[vari]?.n}</div>
            </div>
            <div className="flex gap-2.5 mt-3">
              {p.vars.map((v, i) => (
                <button key={v.n} onClick={() => setVari(i)} title={v.n}
                  className={`w-11 h-11 rounded-full grid place-items-center border-2 transition-all hover:scale-105 ${i === vari ? "border-ink" : "border-line"}`}>
                  <span className="w-7 h-7 rounded-full border border-ink/10" style={{ background: v.c }} />
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-stretch gap-3 mt-9">
            <div className="flex items-center border border-line">
              <button className="px-4 py-3 hover:bg-ink/5 transition-colors" onClick={() => setQty(Math.max(1, qty - 1))}><Icon name="minus" size={13} /></button>
              <span className="px-5 font-mono num text-[14px]">{qty}</span>
              <button className="px-4 py-3 hover:bg-ink/5 transition-colors" onClick={() => setQty(qty + 1)}><Icon name="plus" size={13} /></button>
            </div>
            <button onClick={() => ctx.addCart(p, qty, p.vars[vari]?.n)}
              className="flex-1 bg-ink text-paper text-[12px] font-bold tracking-[0.18em] uppercase hover:bg-wine transition-colors">
              Añadir al carrito
            </button>
          </div>

          <div className="mt-9 divide-y divide-line border-y border-line">
            {p.detalles.map((d) => (
              <div key={d} className="flex items-center gap-3 py-3 text-[13.5px] text-ink/85">
                <span className="w-1.5 h-1.5 bg-wine rounded-full shrink-0" />{d}
              </div>
            ))}
            <div className="flex items-center gap-3 py-3 text-[13.5px] text-ink/85">
              <span className="w-1.5 h-1.5 bg-wine rounded-full shrink-0" />Hecho a mano en Cuenca · entrega 5–21 días
            </div>
            <div className="flex items-center gap-3 py-3 text-[13.5px] text-ink/85">
              <span className="w-1.5 h-1.5 bg-wine rounded-full shrink-0" />Garantía estructural de 5 años
            </div>
          </div>
          <LinkA to="/garantia" className="inline-block mt-5 text-[12px] font-bold uppercase tracking-[0.14em] text-wine uline">Ver garantía</LinkA>
          {(p.etiquetas ?? []).length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {(p.etiquetas ?? []).map((t) => (
                <LinkA key={t} to={`/tienda?tag=${slugify(t)}`} className="text-[11px] px-2.5 py-1 border border-line text-mut hover:border-wine/40 hover:text-wine transition-colors">#{t}</LinkA>
              ))}
            </div>
          )}
        </div>
      </div>

      {relacionados.length > 0 && (
        <div className="mt-20">
          <h2 className="font-display font-medium text-[30px] text-ink mb-7">También de {p.cat}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
            {relacionados.map((r) => <CardProducto key={r.id} p={r} ctx={ctx} />)}
          </div>
        </div>
      )}
    </section>
  );
}

/* ═══ DIARIO ═══ */
export function DiarioView({ ctx, cat, tag }: { ctx: WebCtx; cat: string | null; tag: string | null }) {
  const posts = ctx.cms.posts.filter((p) => p.estado === "publicado");
  const cats = Array.from(new Set(posts.map((p) => p.categoria)));
  const tags = Array.from(new Set(posts.flatMap((p) => p.etiquetas)));
  const list = posts.filter((p) => (!cat || slugify(p.categoria) === cat) && (!tag || p.etiquetas.includes(tag)));
  const catName = cat ? (posts.find((p) => slugify(p.categoria) === cat)?.categoria ?? cat) : "Diario";
  return (
    <section className="max-w-[1100px] mx-auto px-4 lg:px-8 py-14">
      <div className="anim-up mb-10">
        <h1 className="font-display font-medium text-[44px] lg:text-[54px] text-ink leading-none">{tag ? `#${tag}` : catName}</h1>
        <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6">
          <LinkA to="/diario" className={`text-[12.5px] font-semibold tracking-[0.12em] uppercase pb-1 border-b transition-colors ${!cat && !tag ? "border-wine text-wine" : "border-transparent text-mut hover:text-ink"}`}>Todo</LinkA>
          {cats.map((c) => (
            <LinkA key={c} to={`/diario?cat=${slugify(c)}`} className={`text-[12.5px] font-semibold tracking-[0.12em] uppercase pb-1 border-b transition-colors ${cat === slugify(c) ? "border-wine text-wine" : "border-transparent text-mut hover:text-ink"}`}>{c}</LinkA>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((t) => (
            <LinkA key={t} to={`/diario?tag=${slugify(t)}`} className={`text-[11px] px-2.5 py-1 border transition-colors ${tag === slugify(t) ? "border-wine text-wine bg-winel" : "border-line text-mut hover:border-wine/40 hover:text-wine"}`}>#{t}</LinkA>
          ))}
        </div>
      </div>
      {list.length === 0 ? (
        <div className="text-center py-20 text-mut anim-up">Aún no hay entradas aquí.</div>
      ) : (
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-14 stagger">
          {list.map((a) => <TeaserPost key={a.id} a={a} ctx={ctx} grande />)}
        </div>
      )}
    </section>
  );
}

/* ═══ ENTRADA ( /categoría/slug ) ═══ */
export function PostView({ ctx, cat, slug }: { ctx: WebCtx; cat: string; slug: string }) {
  const a = ctx.cms.posts.find((p) => p.slug === slug && p.estado === "publicado");
  if (!a) return <NotFound ctx={ctx} />;
  const relacionados = ctx.cms.posts.filter((p) => p.categoria === a.categoria && p.id !== a.id && p.estado === "publicado").slice(0, 2);
  return (
    <article className="max-w-[780px] mx-auto px-4 lg:px-8 py-14 anim-up">
      <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-fog">
        <LinkA to="/diario" className="hover:text-ink transition-colors">Diario</LinkA> <span>/</span>
        <LinkA to={`/diario?cat=${slugify(a.categoria)}`} className="text-wine">{a.categoria}</LinkA>
      </nav>
      <h1 className="font-display font-medium text-[38px] lg:text-[52px] leading-[1.05] text-ink mt-5">{a.titulo}</h1>
      <div className="text-[11px] uppercase tracking-[0.16em] text-fog mt-4">{a.min} min de lectura</div>
      {a.img ? <Thumb src={a.img} alt={a.titulo} className="w-full h-[380px] mt-7" /> : <SinImagen className="w-full h-[380px] mt-7" />}
      <div className="mt-8 space-y-5">
        {a.cuerpo.map((p, i) => (
          <p key={i} className={`text-[15.5px] leading-relaxed text-ink/85 ${i === 0 ? "first-letter:font-display first-letter:text-[50px] first-letter:float-left first-letter:mr-2.5 first-letter:leading-[0.8] first-letter:text-wine" : ""}`}>{p}</p>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mt-9 pt-6 border-t border-line">
        {a.etiquetas.map((t) => (
          <LinkA key={t} to={`/diario?tag=${slugify(t)}`} className="text-[11px] px-2.5 py-1 border border-line text-mut hover:border-wine/40 hover:text-wine transition-colors">#{t}</LinkA>
        ))}
      </div>
      {relacionados.length > 0 && (
        <div className="mt-14">
          <h2 className="font-display font-medium text-[26px] text-ink mb-6">Más de {a.categoria}</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {relacionados.map((r) => <TeaserPost key={r.id} a={r} ctx={ctx} />)}
          </div>
        </div>
      )}
    </article>
  );
}

/* ═══ PÁGINA CMS (Wix-like) ═══ */
export function PaginaView({ ctx, pagina }: { ctx: WebCtx; pagina: PaginaWeb }) {
  return (
    <>
      {pagina.bloques.map((b) => <BloqueVista key={b.id} b={b} ctx={ctx} />)}
    </>
  );
}

/* ═══ SEGUIMIENTO ═══ */
export function SeguimientoView({ ctx }: { ctx: WebCtx }) {
  const { state, toast } = useStore();
  const [code, setCode] = useState(() => sessionStorage.getItem("bletia-track") ?? "");
  const [tracked, setTracked] = useState<Order | null | "nf">("nf");
  useEffect(() => {
    if (code) buscar(code);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const buscar = (c?: string) => {
    const q = (c ?? code).trim().toLowerCase();
    const o = state.orders.find((x) => x.code.toLowerCase() === q || x.code.toLowerCase() === `ped-${q}`);
    setTracked(o ?? "nf");
    if (!o) toast("No encontramos ese pedido — revisa el código", "warn");
  };
  return (
    <section className="max-w-[660px] mx-auto px-4 py-16">
      <div className="text-center anim-up">
        <h1 className="font-display font-medium text-[42px] lg:text-[50px] text-ink leading-tight">¿Dónde está tu pieza?</h1>
        <p className="text-[14px] text-mut mt-3">Ingresa el código de tu pedido. Lo recibiste por correo o WhatsApp.</p>
      </div>
      <div className="flex gap-2 mt-8 anim-up">
        <input value={code} onChange={(e) => setCode(e.target.value)} onKeyDown={(e) => e.key === "Enter" && buscar()} placeholder="PED-1041"
          className="flex-1 bg-card border border-line2 px-4 py-3.5 font-mono text-center text-[15px] outline-none focus:border-wine/50 transition-colors" />
        <button onClick={() => buscar()} className="bg-ink text-paper px-7 text-[12px] font-bold tracking-[0.16em] uppercase hover:bg-wine transition-colors">Buscar</button>
      </div>
      {tracked === "nf" && (
        <div className="text-center mt-10 text-[13px] text-fog anim-up">
          Prueba con un código de la demo:{" "}
          <button className="uline text-mut font-mono text-[12px]" onClick={() => { setCode("PED-1043"); buscar("PED-1043"); }}>PED-1043</button> ·{" "}
          <button className="uline text-mut font-mono text-[12px]" onClick={() => { setCode("PED-1041"); buscar("PED-1041"); }}>PED-1041</button>
        </div>
      )}
      {tracked !== "nf" && tracked && (() => {
        const o = tracked as Order;
        const i0 = orderFlow.indexOf(o.status);
        const idx = i0 !== -1 ? i0 : o.status === "en_fabricacion" || o.status === "en_produccion" ? 4 : o.status === "listo_proveedor" ? 5 : 0;
        const fin = ["anulado", "cancelado"].includes(o.status);
        return (
          <div className="mt-12 anim-pop">
            <div className="flex items-end justify-between border-b border-line pb-5">
              <div>
                <div className="font-mono text-[11px] text-fog">{o.code} · {fmtDate(o.createdAt)}</div>
                <div className="font-display font-semibold text-[32px] text-ink mt-1">{estadosCliente[o.status]}</div>
              </div>
              <div className="text-right">
                <div className="text-[9.5px] uppercase tracking-[0.2em] text-fog">Total</div>
                <div className="font-display font-semibold text-[24px] num">{money(o.total)}</div>
              </div>
            </div>
            {fin && <div className="mt-6 bg-brickl border border-brick/25 px-4 py-3.5 text-[13.5px] text-brick">Este pedido fue {o.status === "anulado" ? "anulado" : "cancelado"}. Si ya pagaste, tu reembolso sale en 48 h.</div>}
            <div className="relative pl-8 mt-7 space-y-1 before:absolute before:left-[10px] before:top-2 before:bottom-2 before:w-px before:bg-line2">
              {orderFlow.map((s, i) => {
                const doneS = !fin && i <= idx;
                return (
                  <div key={s} className="relative py-1.5">
                    <span className={`absolute -left-8 top-1.5 w-5 h-5 rounded-full grid place-items-center border-4 border-paper ${doneS ? (s === "entregado" ? "bg-moss" : "bg-wine") : "bg-line2"}`}>
                      {doneS && <Icon name="check" size={9} className="text-paper" />}
                    </span>
                    <div className={`text-[14.5px] ${!fin && i === idx ? "font-display font-bold text-[17px] text-ink" : doneS ? "text-ink/70" : "text-fog"}`}>{estadosCliente[s]}</div>
                    {!fin && i === idx && <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-wine mt-0.5 anim-feed">Estás aquí</div>}
                  </div>
                );
              })}
            </div>
            <div className="mt-7 border-t border-line pt-5 space-y-2">
              {o.items.map((i, ix) => (
                <div key={ix} className="flex justify-between text-[14px]"><span>{i.qty} × {i.name}</span><span className="font-mono num text-mut">{money(i.qty * i.price * 1.15)}</span></div>
              ))}
            </div>
          </div>
        );
      })()}
    </section>
  );
}

/* ═══ CUENTA ═══ */
export function CuentaView({ ctx }: { ctx: WebCtx }) {
  const { state } = useStore();
  if (!ctx.cuenta) {
    return (
      <section className="max-w-[560px] mx-auto px-4 py-24 text-center anim-up">
        <h1 className="font-display font-medium text-[42px] text-ink">Tu espacio, tu cuenta</h1>
        <p className="text-[14.5px] text-mut mt-3">Ingresa para ver tus pedidos, seguimientos y cupones.</p>
        <button onClick={ctx.openAuth} className="mt-8 bg-ink text-paper px-9 py-3.5 text-[12.5px] font-bold tracking-[0.16em] uppercase hover:bg-wine transition-colors">Ingresar / crear cuenta</button>
      </section>
    );
  }
  const mi = state.cuentas.find((c) => c.email.toLowerCase() === ctx.cuenta!.toLowerCase());
  const cliente = state.customers.find((c) => c.email.toLowerCase() === ctx.cuenta!.toLowerCase());
  const pedidos = cliente ? state.orders.filter((o) => o.customerId === cliente.id) : [];
  return (
    <section className="max-w-[940px] mx-auto px-4 py-14 anim-up">
      <div className="flex flex-wrap items-end justify-between gap-3 border-b border-line pb-6">
        <h1 className="font-display font-medium text-[42px] text-ink leading-none">{mi?.nombre ?? ctx.cuenta}</h1>
        <button onClick={ctx.logout} className="text-[12px] font-semibold uppercase tracking-[0.14em] text-mut uline">Cerrar sesión</button>
      </div>
      <div className="grid md:grid-cols-3 gap-5 mt-8">
        <div className="md:col-span-2 space-y-3">
          <div className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-fog">Mis pedidos</div>
          {pedidos.length === 0 && (
            <div className="border border-line px-6 py-10 text-center text-[14px] text-mut">
              Aún no tienes pedidos. <LinkA to="/tienda" className="uline text-wine font-semibold">Explorar la colección</LinkA>
            </div>
          )}
          {pedidos.map((o) => (
            <div key={o.id} className="border border-line px-6 py-5 flex flex-wrap items-center gap-4 hover:border-wine/40 transition-colors">
              <div className="min-w-0 flex-1">
                <div className="font-mono text-[11px] text-fog">{o.code} · {fmtDate(o.createdAt)}</div>
                <div className="font-display font-semibold text-[20px] text-ink mt-0.5">{estadosCliente[o.status]}</div>
                <div className="text-[12.5px] text-mut">{o.items.reduce((a, i) => a + i.qty, 0)} piezas · {o.bultos} bultos</div>
              </div>
              <div className="font-mono num text-[15px] font-semibold">{money(o.total)}</div>
              <LinkA to="/seguimiento" onClick={() => sessionStorage.setItem("bletia-track", o.code)}
                className="border border-ink px-5 py-2.5 text-[11px] font-bold tracking-[0.14em] uppercase hover:bg-ink hover:text-paper transition-colors">Seguir</LinkA>
            </div>
          ))}
        </div>
        <div className="space-y-5">
          {mi?.cupon && (
            <div className="bg-wine text-paper px-6 py-5 relative overflow-hidden">
              <div className="absolute -right-3 -top-5 font-display font-bold text-[84px] text-paper/10 leading-none">%</div>
              <div className="text-[9.5px] uppercase tracking-[0.22em] text-paper/60">Tu cupón</div>
              <div className="font-display font-semibold text-[26px] mt-1">5% dcto</div>
              <div className="text-[12px] text-paper/70 mt-1">Primera compra · se aplica en el checkout</div>
            </div>
          )}
          <div className="border border-line px-6 py-5">
            <div className="text-[9.5px] uppercase tracking-[0.22em] text-fog">Datos</div>
            <div className="text-[13.5px] text-ink mt-2.5 space-y-1">
              <div>{ctx.cuenta}</div>
              <div className="text-mut">{mi?.ciudad ?? "Ecuador"} · cliente desde {mi ? fmtDate(mi.desde) : "—"}</div>
            </div>
          </div>
          <div className="border border-line px-6 py-5">
            <div className="text-[9.5px] uppercase tracking-[0.22em] text-fog">Garantía</div>
            <p className="text-[13px] text-mut mt-2.5 leading-relaxed">5 años estructural en piezas de taller. Actívala con tu número de pedido.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══ 404 ═══ */
export function NotFound({ ctx }: { ctx: WebCtx }) {
  return (
    <section className="max-w-[560px] mx-auto px-4 py-28 text-center anim-up">
      <div className="font-display font-medium text-[90px] leading-none text-line2">404</div>
      <h1 className="font-display font-medium text-[34px] text-ink mt-2">Esta pieza no existe</h1>
      <p className="text-[14px] text-mut mt-3">La página que buscas no está en el taller. Puede que haya cambiado de lugar.</p>
      <LinkA to="/" className="inline-block mt-8 bg-ink text-paper px-8 py-3.5 text-[12px] font-bold tracking-[0.16em] uppercase hover:bg-wine transition-colors">Volver al inicio</LinkA>
    </section>
  );
}
