import type { AppState, Bloque, PaginaWeb, PostBlog, ProductoWeb } from "../../lib/types";
import { fmtDate, money, slugify } from "../../lib/util";
import { Icon } from "../../components/ui";
import { Thumb } from "../../components/Img";

/* Contexto que baja por toda la web pública */
export interface WebCtx {
  go: (path: string) => void;
  cms: AppState["cms"];
  likes: string[];
  toggleLike: (id: string) => void;
  addCart: (p: ProductoWeb, n: number) => void;
  openNews: () => void;
  openAuth: () => void;
  cuenta: string | null;
  logout: () => void;
  path: string;
}

export function SinImagen({ className }: { className?: string }) {
  return (
    <div className={`grid place-items-center bg-[#ece5d8] ${className ?? ""}`}>
      <div className="font-display font-semibold text-[42px] text-ink/20 leading-none">B.</div>
    </div>
  );
}

/* Enlace interno de la web — href="#/ruta" para que la URL exista de verdad */
export function LinkA({ to, children, className, onClick }: { to: string; children: React.ReactNode; className?: string; onClick?: (e?: React.MouseEvent) => void }) {
  return (
    <a href={`#${to}`} onClick={onClick} className={className}>
      {children}
    </a>
  );
}

/* ── tarjeta de producto: nombre, precio, me gusta sutil, variables al hover ── */
export function CardProducto({ p, ctx }: { p: ProductoWeb; ctx: WebCtx }) {
  const liked = ctx.likes.includes(p.id);
  return (
    <div className="group cursor-pointer anim-up" onClick={() => ctx.go(`/producto/${p.slug}`)}>
      <div className="relative overflow-hidden bg-[#ece5d8]">
        {p.img ? (
          <Thumb src={p.img} alt={p.nombre} className="w-full h-[300px] group-hover:scale-[1.04] transition-transform duration-700" />
        ) : (
          <SinImagen className="w-full h-[300px]" />
        )}
        <button
          aria-label="Me gusta"
          onClick={(e) => { e.stopPropagation(); ctx.toggleLike(p.id); }}
          className={`absolute top-3 right-3 w-9 h-9 grid place-items-center rounded-full bg-paper/90 backdrop-blur transition-all duration-300 hover:scale-110 ${liked ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
        >
          <Icon name="heart" size={16} className={liked ? "text-wine" : "text-ink/45"} />
        </button>
        {/* variables: aparecen al pasar el puntero */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2 opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <span className="flex items-center gap-1 bg-paper/90 backdrop-blur rounded-full pl-2 pr-2.5 py-1.5 shadow-sm">
            {p.vars.slice(0, 5).map((v) => (
              <span key={v.n} title={v.n} className="w-3.5 h-3.5 rounded-full border border-ink/10" style={{ background: v.c }} />
            ))}
            <span className="text-[9.5px] font-bold uppercase tracking-widest text-mut pl-0.5">{p.vars.length} {p.vt}s</span>
          </span>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); ctx.addCart(p, 1); }}
          className="absolute bottom-0 left-0 right-0 bg-night/90 text-paper py-3 text-[11px] font-bold tracking-[0.18em] uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-wine"
        >
          Añadir al carrito
        </button>
      </div>
      <div className="pt-3.5 flex items-baseline justify-between gap-3">
        <div className="font-display font-semibold text-[18px] text-ink leading-tight group-hover:text-wine transition-colors">{p.nombre}</div>
        <div className="text-right shrink-0">
          <div className="font-mono num text-[14px] font-semibold text-ink">{money(p.precio)}</div>
          <div className="text-[9px] uppercase tracking-[0.18em] text-fog">Incluido IVA</div>
        </div>
      </div>
    </div>
  );
}

/* ── teaser de entrada del diario ── */
export function TeaserPost({ a, ctx, grande }: { a: PostBlog; ctx: WebCtx; grande?: boolean }) {
  return (
    <article className="group cursor-pointer anim-up" onClick={() => ctx.go(`/${slugify(a.categoria)}/${a.slug}`)}>
      <div className="overflow-hidden">
        {a.img ? (
          <Thumb src={a.img} alt={a.titulo} className={`w-full ${grande ? "h-[260px]" : "h-[210px]"} group-hover:scale-[1.04] transition-transform duration-700`} />
        ) : (
          <SinImagen className={`w-full ${grande ? "h-[260px]" : "h-[210px]"}`} />
        )}
      </div>
      <div className="pt-4 flex items-center gap-3">
        <LinkA to={`/diario?cat=${slugify(a.categoria)}`} className="text-[10px] font-bold uppercase tracking-[0.2em] text-wine hover:opacity-70" onClick={(e: any) => e?.stopPropagation?.()}>
          {a.categoria}
        </LinkA>
        <span className="text-[10px] uppercase tracking-[0.14em] text-fog">{a.min} min de lectura</span>
      </div>
      <h3 className={`font-display font-semibold leading-snug mt-2 group-hover:text-wine transition-colors ${grande ? "text-[27px]" : "text-[21px]"}`}>{a.titulo}</h3>
      {grande && <p className="text-[13.5px] text-mut mt-2 leading-relaxed max-w-xl">{a.extracto}</p>}
    </article>
  );
}

/* ── bloques de página (Wix-like) ── */
export function BloqueVista({ b, ctx }: { b: Bloque; ctx: WebCtx }) {
  const productos = ctx.cms.productos.filter((p) => p.estado === "activo");
  const posts = ctx.cms.posts.filter((p) => p.estado === "publicado");

  switch (b.tipo) {
    case "hero":
      return (
        <section className="relative h-[72vh] min-h-[480px] overflow-hidden">
          <div className="absolute inset-0">
            {b.img ? <Thumb src={b.img} alt={b.titulo} className="w-full h-full kenburns" /> : <SinImagen className="w-full h-full" />}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-night/60 via-night/15 to-transparent" />
          <div className="relative max-w-[1280px] mx-auto px-4 lg:px-8 h-full flex items-end pb-14">
            <div className="text-paper anim-rise max-w-xl">
              <h1 className="font-display font-medium text-[50px] lg:text-[74px] leading-[0.98]">{b.titulo}</h1>
              <p className="text-[15px] text-paper/75 mt-4 max-w-sm leading-relaxed">{b.sub}</p>
              <div className="mt-7">
                <LinkA to={b.ctaTarget} className="inline-block bg-paper text-night px-7 py-3 text-[12.5px] font-bold tracking-[0.16em] uppercase hover:bg-oakl transition-colors">{b.cta}</LinkA>
              </div>
            </div>
          </div>
        </section>
      );
    case "texto":
      return (
        <section className="max-w-[820px] mx-auto px-4 lg:px-8 py-16 anim-up">
          <h2 className="font-display font-medium text-[38px] lg:text-[46px] leading-[1.05] text-ink">{b.titulo}</h2>
          <div className="mt-6 space-y-4">
            {b.cuerpo.split("\n\n").map((p, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-mut">{p}</p>
            ))}
          </div>
        </section>
      );
    case "imagen":
      return (
        <section className="max-w-[1100px] mx-auto px-4 lg:px-8 py-8 anim-up">
          {b.img ? <Thumb src={b.img} alt={b.pie} className="w-full h-[420px]" /> : <SinImagen className="w-full h-[420px]" />}
          {b.pie && <div className="text-[12px] text-fog mt-3 text-center uppercase tracking-[0.14em]">{b.pie}</div>}
        </section>
      );
    case "columnas":
      return (
        <section className="max-w-[1100px] mx-auto px-4 lg:px-8 py-16 anim-up">
          <h2 className="font-display font-medium text-[36px] text-ink">{b.titulo}</h2>
          <div className={`grid md:grid-cols-${Math.min(3, b.cols.length)} gap-8 mt-8`}>
            {b.cols.map((c, i) => (
              <div key={i} className="group border-t-2 border-ink pt-5 hover:border-wine transition-colors">
                <div className="font-mono text-[11px] text-wine">{String(i + 1).padStart(2, "0")}</div>
                <div className="font-display font-semibold text-[21px] text-ink mt-2">{c.t}</div>
                <p className="text-[13.5px] text-mut mt-2 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </section>
      );
    case "lista":
      return (
        <section className="max-w-[1100px] mx-auto px-4 lg:px-8 py-16 anim-up">
          <h2 className="font-display font-medium text-[36px] lg:text-[44px] leading-[1.05] text-ink max-w-lg">{b.titulo}</h2>
          <div className="mt-8 divide-y divide-line border-y border-line max-w-2xl">
            {b.items.map((it, i) => (
              <div key={i} className="flex gap-6 py-5 group hover:bg-card transition-colors px-3 -mx-3">
                <span className="font-mono text-[11px] text-wine pt-1.5">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <div className="font-display font-semibold text-[21px] text-ink group-hover:translate-x-1 transition-transform">{it.t}</div>
                  <p className="text-[13.5px] text-mut mt-1 leading-relaxed">{it.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
    case "quote":
      return (
        <section className="bg-night text-paper">
          <div className="max-w-[900px] mx-auto px-4 lg:px-8 py-20 anim-up">
            <div className="font-display font-medium text-[34px] lg:text-[44px] leading-[1.1]">“{b.texto}”</div>
            <div className="w-10 h-[3px] bg-wine mt-7" />
          </div>
        </section>
      );
    case "colecciones": {
      const cats = Array.from(new Set(productos.map((p) => p.cat)));
      return (
        <section className="max-w-[1280px] mx-auto px-4 lg:px-8 py-16">
          <div className="flex items-end justify-between mb-7">
            <h2 className="font-display font-medium text-[36px] text-ink">Explora por pieza</h2>
            <LinkA to="/tienda" className="text-[12px] font-bold tracking-[0.14em] uppercase uline text-ink/70 hover:text-ink">Ver todo</LinkA>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 stagger">
            {cats.map((c, i) => {
              const p = productos.find((x) => x.cat === c && x.img) ?? productos.find((x) => x.cat === c);
              return (
                <LinkA key={c} to={`/categoria/${slugify(c)}`} className={`group relative overflow-hidden ${i === 0 ? "col-span-2 row-span-2 h-[420px] lg:h-auto" : "h-[200px]"}`}>
                  {p?.img ? (
                    <Thumb src={p.img} alt={c} className="w-full h-full group-hover:scale-[1.05] transition-transform duration-700" />
                  ) : (
                    <SinImagen className="w-full h-full" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-night/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                    <span className={`font-display font-semibold text-paper ${i === 0 ? "text-[30px]" : "text-[21px]"}`}>{c}</span>
                    <span className="w-8 h-8 rounded-full bg-paper/15 backdrop-blur grid place-items-center text-paper opacity-0 group-hover:opacity-100 transition-opacity"><Icon name="arrow" size={13} /></span>
                  </div>
                </LinkA>
              );
            })}
          </div>
        </section>
      );
    }
    case "novedades": {
      const news = productos.filter((p) => p.novedad || p.destacado).slice(0, 8);
      return (
        <section className="bg-card border-y border-line py-16">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <h2 className="font-display font-medium text-[36px] text-ink">Recién salidas del taller</h2>
              <LinkA to="/tienda" className="text-[12px] font-bold tracking-[0.14em] uppercase uline text-ink/70 hover:text-ink">Ver todo</LinkA>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 stagger">
              {news.map((p) => <CardProducto key={p.id} p={p} ctx={ctx} />)}
            </div>
          </div>
        </section>
      );
    }
    case "destacado": {
      const d = productos.find((p) => p.destacado);
      if (!d) return null;
      return (
        <section className="bg-night text-paper">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative order-2 lg:order-1">
              {d.img ? <Thumb src={d.img} alt={d.nombre} className="w-full h-[380px]" /> : <SinImagen className="w-full h-[380px]" />}
              <span className="absolute top-4 left-4 bg-wine text-paper text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5">Destacado</span>
            </div>
            <div className="order-1 lg:order-2 anim-up">
              <h2 className="font-display font-medium text-[42px] lg:text-[52px] leading-[1.03]">{d.nombre}</h2>
              <p className="text-paper/60 text-[14px] mt-3 max-w-sm">{d.desc}</p>
              <div className="flex items-baseline gap-3 mt-6">
                <span className="font-display font-semibold text-[32px] num">{money(d.precio)}</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-paper/40">Incluido IVA</span>
              </div>
              <LinkA to={`/producto/${d.slug}`} className="inline-block mt-7 bg-paper text-night px-8 py-3 text-[12.5px] font-bold tracking-[0.16em] uppercase hover:bg-oakl transition-colors">Descubrir</LinkA>
            </div>
          </div>
        </section>
      );
    }
    case "diario":
      return (
        <section className="max-w-[1280px] mx-auto px-4 lg:px-8 py-16">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-display font-medium text-[36px] text-ink">Del taller a tu casa</h2>
            <LinkA to="/diario" className="text-[12px] font-bold tracking-[0.14em] uppercase uline text-ink/70 hover:text-ink">Ver todos</LinkA>
          </div>
          <div className="grid md:grid-cols-3 gap-6 stagger">
            {posts.slice(0, 3).map((a) => <TeaserPost key={a.id} a={a} ctx={ctx} />)}
          </div>
        </section>
      );
    case "newsletter":
      return (
        <section className="max-w-[1280px] mx-auto px-4 lg:px-8 py-16">
          <div className="bg-winel border border-wine/15 px-6 lg:px-12 py-12 grid lg:grid-cols-2 gap-8 items-center">
            <h3 className="font-display font-medium text-[30px] text-ink leading-tight">{ctx.cms.config.newsletterTitulo}</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <input placeholder="Tu correo" className="flex-1 bg-paper border border-line2 px-4 py-3 text-[13.5px] outline-none focus:border-wine/50 transition-colors" />
              <button onClick={ctx.openNews} className="bg-ink text-paper px-8 py-3 text-[12px] font-bold tracking-[0.16em] uppercase hover:bg-wine transition-colors">Obtener 5% dcto</button>
            </div>
          </div>
        </section>
      );
  }
}

/* ── página completa (lista de bloques) ── */
export function PaginaVista({ pg, ctx }: { pg: PaginaWeb; ctx: WebCtx }) {
  return (
    <>
      {pg.bloques.map((b) => <BloqueVista key={b.id} b={b} ctx={ctx} />)}
    </>
  );
}

export const fechaPost = (f: string) => fmtDate(f);
