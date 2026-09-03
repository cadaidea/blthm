import { useMemo, useState } from "react";
import { useStore } from "../lib/store";
import type { Bloque, PaginaWeb, PostBlog, ProductoWeb, View } from "../lib/types";
import { slugify, uid, fmtDate } from "../lib/util";
import { Badge, Btn, Card, Drawer, Field, Icon, Input, SectionTitle, Select, Tabs, Td, Th } from "../components/ui";
import { Thumb } from "../components/Img";

const catSlug = (c: string) => slugify(c);
const newBloque = (tipo: Bloque["tipo"]): Bloque => {
  const id = uid();
  switch (tipo) {
    case "hero": return { id, tipo, titulo: "Título del hero", sub: "Bajada corta", img: "", cta: "Ver colección", ctaTarget: "/tienda" };
    case "texto": return { id, tipo, titulo: "Nuevo texto", cuerpo: "Escribe aquí…" };
    case "imagen": return { id, tipo, img: "", pie: "Pie de foto" };
    case "columnas": return { id, tipo, titulo: "Columnas", cols: [{ t: "Uno", d: "…" }, { t: "Dos", d: "…" }] };
    case "lista": return { id, tipo, titulo: "Lista", items: [{ t: "Punto", d: "…" }] };
    case "quote": return { id, tipo, texto: "Una frase memorable." };
    default: return { id, tipo } as Bloque;
  }
};
const BLOQUE_LABEL: Record<Bloque["tipo"], string> = {
  hero: "Hero", texto: "Texto", imagen: "Imagen", columnas: "Columnas", lista: "Lista", quote: "Cita",
  colecciones: "Colecciones (auto)", novedades: "Novedades (auto)", destacado: "Destacado (auto)", diario: "Diario (auto)", newsletter: "Newsletter (auto)",
};

export default function Contenido({ nav }: { nav?: (v: View, p?: string) => void }) {
  const { state, dispatch, toast } = useStore();
  const cms = state.cms;
  const [tab, setTab] = useState<"paginas" | "blog" | "productos" | "sitio">("paginas");

  /* ── editores en curso ── */
  const [pgDraft, setPgDraft] = useState<PaginaWeb | null>(null);
  const [pgSlugTouched, setPgSlugTouched] = useState(false);
  const [postDraft, setPostDraft] = useState<PostBlog | null>(null);
  const [postSlugTouched, setPostSlugTouched] = useState(false);
  const [prodDraft, setProdDraft] = useState<ProductoWeb | null>(null);
  const [prodSlugTouched, setProdSlugTouched] = useState(false);

  const categorias = useMemo(() => Array.from(new Set(cms.posts.map((p) => p.categoria))), [cms.posts]);
  const etiquetas = useMemo(() => Array.from(new Set(cms.posts.flatMap((p) => p.etiquetas))).sort(), [cms.posts]);
  const catsProd = useMemo(() => Array.from(new Set(cms.productos.map((p) => p.cat))), [cms.productos]);

  /* ══ PÁGINAS (Wix) ══ */
  const savePage = () => {
    if (!pgDraft) return;
    if (!pgDraft.titulo.trim()) return toast("La página necesita un título", "warn");
    const slug = slugify(pgDraft.slug || pgDraft.titulo);
    dispatch({ type: "CMS_PAGE", page: { ...pgDraft, slug } });
    toast(`Página guardada en bletia.ec/${slug}`);
    setPgDraft(null); setPgSlugTouched(false);
  };


  /* ══ BLOG (WordPress) ══ */
  const savePost = () => {
    if (!postDraft) return;
    if (!postDraft.titulo.trim()) return toast("La entrada necesita un título", "warn");
    const slug = slugify(postDraft.slug || postDraft.titulo);
    dispatch({ type: "CMS_POST", post: { ...postDraft, slug, categoria: postDraft.categoria.trim() || "Tips" } });
    toast(`Entrada guardada en bletia.ec/${catSlug(postDraft.categoria)}/${slug}`);
    setPostDraft(null); setPostSlugTouched(false);
  };

  /* ══ PRODUCTOS (Shopify) ══ */
  const saveProd = () => {
    if (!prodDraft) return;
    if (!prodDraft.nombre.trim()) return toast("El producto necesita un nombre", "warn");
    const slug = slugify(prodDraft.slug || prodDraft.nombre);
    dispatch({ type: "CMS_PRODUCT", prod: { ...prodDraft, slug } });
    toast(`Producto guardado en bletia.ec/producto/${slug}`);
    setProdDraft(null); setProdSlugTouched(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3 anim-up">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">CMS · lo que editas aquí es lo que ve el cliente</div>
          <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Contenido de la web</h1>
        </div>
        <div className="flex items-center gap-2">
          <Badge tone="pine" dot>{cms.paginas.filter((p) => p.estado === "publicada").length} páginas</Badge>
          <Badge tone="oak" dot>{cms.posts.filter((p) => p.estado === "publicado").length} entradas</Badge>
          <Badge tone="steel" dot>{cms.productos.length} productos</Badge>
          <Btn variant="dark" icon="ext" onClick={() => nav?.("web")}>Ver web</Btn>
        </div>
      </div>

      <Tabs
        tabs={[{ id: "paginas", label: "Páginas · Wix" }, { id: "blog", label: "Blog · WordPress" }, { id: "productos", label: "Productos · Shopify" }, { id: "sitio", label: "Sitio & menú" }]}
        value={tab} onChange={(t) => setTab(t as typeof tab)}
      />

      {/* ═══════════ PÁGINAS ═══════════ */}
      {tab === "paginas" && (
        <div className="space-y-3 anim-up">
          <div className="flex justify-end"><Btn icon="plus" onClick={() => { setPgSlugTouched(false); setPgDraft({ id: uid(), slug: "", titulo: "", enNav: false, estado: "borrador", seoTitle: "", seoDesc: "", bloques: [newBloque("texto")] }); }}>Nueva página</Btn></div>
          <Card pad={false}>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] min-w-[700px]">
                <thead className="bg-ink/3 border-b border-line"><tr><Th>Página</Th><Th>URL</Th><Th>Bloques</Th><Th>En menú</Th><Th>Estado</Th><Th right>Acciones</Th></tr></thead>
                <tbody>
                  {cms.paginas.map((p) => (
                    <tr key={p.id} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors">
                      <Td className="font-semibold text-ink">{p.titulo}</Td>
                      <Td><span className="font-mono text-[11.5px] text-pine">bletia.ec/{p.slug}</span></Td>
                      <Td className="num font-mono text-mut">{p.bloques.length}</Td>
                      <Td>{p.enNav ? <Badge tone="moss">sí</Badge> : <span className="text-fog text-[11px]">no</span>}</Td>
                      <Td><Badge tone={p.estado === "publicada" ? "pine" : "oak"} dot>{p.estado}</Badge></Td>
                      <Td right>
                        <div className="flex justify-end gap-1">
                          <Btn size="sm" variant="ghost" icon="eye" onClick={() => nav?.("web", `/${p.slug}`)} />
                          <Btn size="sm" variant="outline" icon="edit" onClick={() => { setPgSlugTouched(true); setPgDraft(JSON.parse(JSON.stringify(p))); }}>Editar</Btn>
                          {p.slug !== "inicio" && <Btn size="sm" variant="ghost" icon="x" onClick={() => { dispatch({ type: "CMS_DEL", kind: "pagina", id: p.id }); toast("Página eliminada", "warn"); }} />}
                        </div>
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}

      {/* ═══════════ BLOG ═══════════ */}
      {tab === "blog" && (
        <div className="space-y-3 anim-up">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex gap-1.5 flex-wrap">
              <Badge tone="fog">categorías: {categorias.length}</Badge>
              {etiquetas.map((e) => <Badge key={e} tone="steel">#{e}</Badge>)}
            </div>
            <Btn icon="plus" onClick={() => { setPostSlugTouched(false); setPostDraft({ id: uid(), slug: "", titulo: "", categoria: categorias[0] ?? "Tips", etiquetas: [], extracto: "", cuerpo: [""], img: "", min: 5, fecha: new Date().toISOString().slice(0, 10), estado: "borrador" }); }}>Nueva entrada</Btn>
          </div>
          <Card pad={false}>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] min-w-[760px]">
                <thead className="bg-ink/3 border-b border-line"><tr><Th>Entrada</Th><Th>Categoría</Th><Th>Etiquetas</Th><Th>URL</Th><Th>Estado</Th><Th right>Acciones</Th></tr></thead>
                <tbody>
                  {cms.posts.map((p) => (
                    <tr key={p.id} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors">
                      <Td>
                        <div className="flex items-center gap-2.5">
                          <Thumb src={p.img} alt={p.titulo} className="w-10 h-10 rounded-lg border border-line" />
                          <div><div className="font-semibold text-ink leading-tight">{p.titulo}</div><div className="text-[10.5px] text-fog">{p.min} min · {fmtDate(p.fecha)}</div></div>
                        </div>
                      </Td>
                      <Td><Badge tone="oak">{p.categoria}</Badge></Td>
                      <Td><div className="flex gap-1 flex-wrap">{p.etiquetas.map((e) => <span key={e} className="font-mono text-[10.5px] text-steel">#{e}</span>)}</div></Td>
                      <Td><span className="font-mono text-[11px] text-pine">/{catSlug(p.categoria)}/{p.slug}</span></Td>
                      <Td><Badge tone={p.estado === "publicado" ? "pine" : "oak"} dot>{p.estado}</Badge></Td>
                      <Td right>
                        <div className="flex justify-end gap-1">
                          <Btn size="sm" variant="ghost" icon="eye" onClick={() => nav?.("web", `/${catSlug(p.categoria)}/${p.slug}`)} />
                          <Btn size="sm" variant="outline" icon="edit" onClick={() => { setPostSlugTouched(true); setPostDraft(JSON.parse(JSON.stringify(p))); }}>Editar</Btn>
                          <Btn size="sm" variant="ghost" icon="x" onClick={() => { dispatch({ type: "CMS_DEL", kind: "post", id: p.id }); toast("Entrada eliminada", "warn"); }} />
                        </div>
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}

      {/* ═══════════ PRODUCTOS ═══════════ */}
      {tab === "productos" && (
        <div className="space-y-3 anim-up">
          <div className="flex justify-end"><Btn icon="plus" onClick={() => { setProdSlugTouched(false); setProdDraft({ id: uid(), slug: "", nombre: "", precio: 0, cat: catsProd[0] ?? "Sofás", img: "", destacado: false, novedad: true, vt: "Tapiz", vars: [], desc: "", detalles: [], estado: "activo" }); }}>Nuevo producto</Btn></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 stagger">
            {cms.productos.map((p) => (
              <div key={p.id} className="bg-card border border-line rounded-xl overflow-hidden hover:shadow-md transition-all group">
                <div className="relative h-32 overflow-hidden">
                  {p.img ? <Thumb src={p.img} alt={p.nombre} className="w-full h-full" /> : <div className="w-full h-full grid place-items-center bg-ink/5 text-fog font-mono text-[10px]">sin imagen</div>}
                  {p.destacado && <span className="absolute top-2 left-2"><Badge tone="brick">destacado</Badge></span>}
                </div>
                <div className="p-3">
                  <div className="font-semibold text-[13.5px] text-ink leading-tight">{p.nombre}</div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="font-mono text-[12px] text-pine num">${p.precio.toFixed(2)}</span>
                    <Badge tone="fog">{p.cat}</Badge>
                  </div>
                  <div className="font-mono text-[10px] text-fog mt-1 truncate">/producto/{p.slug}</div>
                  <div className="flex gap-1 mt-2.5">
                    <Btn size="sm" variant="outline" icon="edit" className="flex-1" onClick={() => { setProdSlugTouched(true); setProdDraft(JSON.parse(JSON.stringify(p))); }}>Editar</Btn>
                    <Btn size="sm" variant="ghost" icon="x" onClick={() => { dispatch({ type: "CMS_DEL", kind: "producto", id: p.id }); toast("Producto eliminado", "warn"); }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ═══════════ SITIO & MENÚ ═══════════ */}
      {tab === "sitio" && <SitioSettings />}

      {/* ── drawer página (Wix) ── */}
      <Drawer open={!!pgDraft} onClose={() => setPgDraft(null)} kicker="Editor de página · Wix" title={pgDraft?.titulo || "Nueva página"}>
        {pgDraft && (
          <div className="space-y-4">
            <Field label="Título"><Input value={pgDraft.titulo} onChange={(e) => { const t = e.target.value; setPgDraft({ ...pgDraft, titulo: t, slug: pgSlugTouched ? pgDraft.slug : slugify(t) }); }} /></Field>
            <Field label="URL (slug)"><Input value={pgDraft.slug} onChange={(e) => { setPgSlugTouched(true); setPgDraft({ ...pgDraft, slug: slugify(e.target.value) }); }} className="font-mono" /></Field>
            <div className="font-mono text-[11px] text-pine bg-pinel/60 border border-pine/20 rounded-lg px-3 py-2">bletia.ec/{pgDraft.slug || "…"}</div>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-[12.5px] text-mut"><input type="checkbox" className="accent-[#800000]" checked={pgDraft.enNav} onChange={(e) => setPgDraft({ ...pgDraft, enNav: e.target.checked })} />Mostrar en el menú</label>
              <Select value={pgDraft.estado} onChange={(e) => setPgDraft({ ...pgDraft, estado: e.target.value as PaginaWeb["estado"] })} className="w-auto">
                <option value="publicada">publicada</option><option value="borrador">borrador</option>
              </Select>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <Field label="SEO · título"><Input value={pgDraft.seoTitle} onChange={(e) => setPgDraft({ ...pgDraft, seoTitle: e.target.value })} /></Field>
              <Field label="SEO · descripción"><Input value={pgDraft.seoDesc} onChange={(e) => setPgDraft({ ...pgDraft, seoDesc: e.target.value })} /></Field>
            </div>

            <SectionTitle kicker="Constructor" title="Bloques de la página" />
            <div className="space-y-2">
              {pgDraft.bloques.map((b, i) => (
                <div key={b.id} className="border border-line rounded-lg overflow-hidden">
                  <div className="flex items-center gap-2 bg-ink/3 px-2.5 py-1.5">
                    <span className="font-mono text-[10px] text-oakd font-bold uppercase">{i + 1} · {BLOQUE_LABEL[b.tipo]}</span>
                    <span className="ml-auto flex gap-0.5">
                      <button disabled={i === 0} onClick={() => { const arr = [...pgDraft.bloques]; [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]; setPgDraft({ ...pgDraft, bloques: arr }); }} className="px-1.5 py-0.5 text-mut hover:text-ink disabled:opacity-30 text-[11px]">▲</button>
                      <button disabled={i === pgDraft.bloques.length - 1} onClick={() => { const arr = [...pgDraft.bloques]; [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]; setPgDraft({ ...pgDraft, bloques: arr }); }} className="px-1.5 py-0.5 text-mut hover:text-ink disabled:opacity-30 text-[11px]">▼</button>
                      <button onClick={() => setPgDraft({ ...pgDraft, bloques: pgDraft.bloques.filter((x) => x.id !== b.id) })} className="px-1.5 py-0.5 text-brick hover:text-brick/70"><Icon name="x" size={11} /></button>
                    </span>
                  </div>
                  <BloqueEditor b={b} onChange={(nb) => setPgDraft({ ...pgDraft, bloques: pgDraft.bloques.map((x) => (x.id === nb.id ? nb : x)) })} />
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {(Object.keys(BLOQUE_LABEL) as Bloque["tipo"][]).map((t) => (
                <button key={t} onClick={() => setPgDraft({ ...pgDraft, bloques: [...pgDraft.bloques, newBloque(t)] })} className="px-2 py-1 rounded-md border border-line2 text-[10.5px] font-semibold text-mut hover:border-pine hover:text-pined transition-colors">+ {BLOQUE_LABEL[t]}</button>
              ))}
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-line">
              <Btn variant="ghost" onClick={() => setPgDraft(null)}>Cancelar</Btn>
              <Btn icon="check" onClick={savePage}>Guardar página</Btn>
            </div>
          </div>
        )}
      </Drawer>

      {/* ── drawer entrada (WordPress) ── */}
      <Drawer open={!!postDraft} onClose={() => setPostDraft(null)} kicker="Editor de entrada · WordPress" title={postDraft?.titulo || "Nueva entrada"}>
        {postDraft && (
          <div className="space-y-4">
            <Field label="Título"><Input value={postDraft.titulo} onChange={(e) => { const t = e.target.value; setPostDraft({ ...postDraft, titulo: t, slug: postSlugTouched ? postDraft.slug : slugify(t) }); }} /></Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="URL (slug)"><Input value={postDraft.slug} onChange={(e) => { setPostSlugTouched(true); setPostDraft({ ...postDraft, slug: slugify(e.target.value) }); }} className="font-mono" /></Field>
              <Field label="Categoría"><Input list="cats" value={postDraft.categoria} onChange={(e) => setPostDraft({ ...postDraft, categoria: e.target.value })} /><datalist id="cats">{categorias.map((c) => <option key={c} value={c} />)}</datalist></Field>
            </div>
            <div className="font-mono text-[11px] text-pine bg-pinel/60 border border-pine/20 rounded-lg px-3 py-2">bletia.ec/{catSlug(postDraft.categoria)}/{postDraft.slug || "…"}</div>
            <Field label="Etiquetas (separadas por coma)"><Input value={postDraft.etiquetas.join(", ")} onChange={(e) => setPostDraft({ ...postDraft, etiquetas: e.target.value.split(",").map((x) => x.trim()).filter(Boolean) })} /></Field>
            <Field label="Extracto"><Input value={postDraft.extracto} onChange={(e) => setPostDraft({ ...postDraft, extracto: e.target.value })} /></Field>
            <Field label="Imagen (URL)"><Input value={postDraft.img} onChange={(e) => setPostDraft({ ...postDraft, img: e.target.value })} className="font-mono" /></Field>
            <Field label="Cuerpo (una idea por línea)"><textarea value={postDraft.cuerpo.join("\n")} onChange={(e) => setPostDraft({ ...postDraft, cuerpo: e.target.value.split("\n") })} rows={6} className="w-full bg-card border border-line2 rounded-lg px-3 py-2 text-[13px] outline-none focus:border-pine" /></Field>
            <div className="flex items-center gap-3">
              <Field label="Min de lectura"><Input type="number" value={postDraft.min} onChange={(e) => setPostDraft({ ...postDraft, min: Number(e.target.value) })} className="w-24" /></Field>
              <Select value={postDraft.estado} onChange={(e) => setPostDraft({ ...postDraft, estado: e.target.value as PostBlog["estado"] })} className="w-auto ml-auto">
                <option value="publicado">publicado</option><option value="borrador">borrador</option>
              </Select>
            </div>
            <div className="flex justify-end gap-2 pt-2 border-t border-line">
              <Btn variant="ghost" onClick={() => setPostDraft(null)}>Cancelar</Btn>
              <Btn icon="check" onClick={savePost}>Guardar entrada</Btn>
            </div>
          </div>
        )}
      </Drawer>

      {/* ── drawer producto (Shopify) ── */}
      <Drawer open={!!prodDraft} onClose={() => setProdDraft(null)} kicker="Editor de producto · Shopify" title={prodDraft?.nombre || "Nuevo producto"}>
        {prodDraft && (
          <div className="space-y-4">
            <Field label="Nombre"><Input value={prodDraft.nombre} onChange={(e) => { const t = e.target.value; setProdDraft({ ...prodDraft, nombre: t, slug: prodSlugTouched ? prodDraft.slug : slugify(t) }); }} /></Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="URL (slug)"><Input value={prodDraft.slug} onChange={(e) => { setProdSlugTouched(true); setProdDraft({ ...prodDraft, slug: slugify(e.target.value) }); }} className="font-mono" /></Field>
              <Field label="Precio (IVA incluido)"><Input type="number" step="0.01" value={prodDraft.precio} onChange={(e) => setProdDraft({ ...prodDraft, precio: Number(e.target.value) })} className="font-mono" /></Field>
              <Field label="Categoría"><Input list="catsp" value={prodDraft.cat} onChange={(e) => setProdDraft({ ...prodDraft, cat: e.target.value })} /><datalist id="catsp">{catsProd.map((c) => <option key={c} value={c} />)}</datalist></Field>
              <Field label="Imagen (URL)"><Input value={prodDraft.img} onChange={(e) => setProdDraft({ ...prodDraft, img: e.target.value })} className="font-mono" /></Field>
            </div>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-[12.5px] text-mut"><input type="checkbox" className="accent-[#800000]" checked={prodDraft.destacado} onChange={(e) => setProdDraft({ ...prodDraft, destacado: e.target.checked })} />Destacado</label>
              <label className="flex items-center gap-2 text-[12.5px] text-mut"><input type="checkbox" className="accent-[#800000]" checked={prodDraft.novedad} onChange={(e) => setProdDraft({ ...prodDraft, novedad: e.target.checked })} />Novedad</label>
              <Select value={prodDraft.estado} onChange={(e) => setProdDraft({ ...prodDraft, estado: e.target.value as ProductoWeb["estado"] })} className="w-auto ml-auto">
                <option value="activo">activo</option><option value="oculto">oculto</option>
              </Select>
            </div>
            <Field label={`Tipo de variable (${prodDraft.vt})`}>
              <Select value={prodDraft.vt} onChange={(e) => setProdDraft({ ...prodDraft, vt: e.target.value })} className="w-auto">
                <option>Tapiz</option><option>Acabado</option><option>Color</option><option>Tamaño</option>
              </Select>
            </Field>
            <Field label="Variables (nombre + color)">
              <div className="space-y-1.5">
                {prodDraft.vars.map((v, i) => (
                  <div key={i} className="flex gap-2">
                    <Input value={v.n} onChange={(e) => setProdDraft({ ...prodDraft, vars: prodDraft.vars.map((x, ix) => (ix === i ? { ...x, n: e.target.value } : x)) })} placeholder="Nombre" />
                    <input type="color" value={v.c} onChange={(e) => setProdDraft({ ...prodDraft, vars: prodDraft.vars.map((x, ix) => (ix === i ? { ...x, c: e.target.value } : x)) })} className="w-12 h-9 rounded-lg border border-line2 cursor-pointer" />
                    <Btn variant="ghost" size="sm" icon="x" onClick={() => setProdDraft({ ...prodDraft, vars: prodDraft.vars.filter((_, ix) => ix !== i) })} />
                  </div>
                ))}
                <Btn size="sm" variant="outline" icon="plus" onClick={() => setProdDraft({ ...prodDraft, vars: [...prodDraft.vars, { n: "Nueva", c: "#c7a472" }] })}>Añadir variable</Btn>
              </div>
            </Field>
            <Field label="Descripción"><Input value={prodDraft.desc} onChange={(e) => setProdDraft({ ...prodDraft, desc: e.target.value })} /></Field>
            <Field label="Detalles (una línea cada uno)"><textarea value={prodDraft.detalles.join("\n")} onChange={(e) => setProdDraft({ ...prodDraft, detalles: e.target.value.split("\n").filter(Boolean) })} rows={3} className="w-full bg-card border border-line2 rounded-lg px-3 py-2 text-[13px] outline-none focus:border-pine" /></Field>
            <div className="flex justify-end gap-2 pt-2 border-t border-line">
              <Btn variant="ghost" onClick={() => setProdDraft(null)}>Cancelar</Btn>
              <Btn icon="check" onClick={saveProd}>Guardar producto</Btn>
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
}

/* ── editor de un bloque según su tipo ── */
function BloqueEditor({ b, onChange }: { b: Bloque; onChange: (b: Bloque) => void }) {
  if (b.tipo === "colecciones" || b.tipo === "novedades" || b.tipo === "destacado" || b.tipo === "diario" || b.tipo === "newsletter") {
    return <div className="px-3 py-2.5 text-[11.5px] text-mut">Se llena automáticamente con tu catálogo / diario. No requiere edición.</div>;
  }
  if (b.tipo === "hero") {
    return (
      <div className="p-3 space-y-2">
        <Input value={b.titulo} onChange={(e) => onChange({ ...b, titulo: e.target.value })} placeholder="Título" />
        <Input value={b.sub} onChange={(e) => onChange({ ...b, sub: e.target.value })} placeholder="Bajada" />
        <Input value={b.img} onChange={(e) => onChange({ ...b, img: e.target.value })} placeholder="Imagen (URL)" className="font-mono" />
        <div className="grid grid-cols-2 gap-2">
          <Input value={b.cta} onChange={(e) => onChange({ ...b, cta: e.target.value })} placeholder="Texto del botón" />
          <Input value={b.ctaTarget} onChange={(e) => onChange({ ...b, ctaTarget: e.target.value })} placeholder="/tienda" className="font-mono" />
        </div>
      </div>
    );
  }
  if (b.tipo === "texto") {
    return (
      <div className="p-3 space-y-2">
        <Input value={b.titulo} onChange={(e) => onChange({ ...b, titulo: e.target.value })} placeholder="Título" />
        <textarea value={b.cuerpo} onChange={(e) => onChange({ ...b, cuerpo: e.target.value })} rows={3} className="w-full bg-card border border-line2 rounded-lg px-3 py-2 text-[13px] outline-none focus:border-pine" />
      </div>
    );
  }
  if (b.tipo === "imagen") {
    return (
      <div className="p-3 space-y-2">
        <Input value={b.img} onChange={(e) => onChange({ ...b, img: e.target.value })} placeholder="Imagen (URL)" className="font-mono" />
        <Input value={b.pie} onChange={(e) => onChange({ ...b, pie: e.target.value })} placeholder="Pie de foto" />
      </div>
    );
  }
  if (b.tipo === "quote") {
    return <div className="p-3"><Input value={b.texto} onChange={(e) => onChange({ ...b, texto: e.target.value })} placeholder="La cita" /></div>;
  }
  if (b.tipo === "columnas") {
    return (
      <div className="p-3 space-y-2">
        <Input value={b.titulo} onChange={(e) => onChange({ ...b, titulo: e.target.value })} placeholder="Título" />
        {b.cols.map((c, i) => (
          <div key={i} className="flex gap-2">
            <Input value={c.t} onChange={(e) => onChange({ ...b, cols: b.cols.map((x, ix) => (ix === i ? { ...x, t: e.target.value } : x)) })} placeholder="Título" />
            <Input value={c.d} onChange={(e) => onChange({ ...b, cols: b.cols.map((x, ix) => (ix === i ? { ...x, d: e.target.value } : x)) })} placeholder="Descripción" />
          </div>
        ))}
        <Btn size="sm" variant="outline" icon="plus" onClick={() => onChange({ ...b, cols: [...b.cols, { t: "", d: "" }] })}>Columna</Btn>
      </div>
    );
  }
  if (b.tipo === "lista") {
    return (
      <div className="p-3 space-y-2">
        <Input value={b.titulo} onChange={(e) => onChange({ ...b, titulo: e.target.value })} placeholder="Título" />
        {b.items.map((it, i) => (
          <div key={i} className="flex gap-2">
            <Input value={it.t} onChange={(e) => onChange({ ...b, items: b.items.map((x, ix) => (ix === i ? { ...x, t: e.target.value } : x)) })} placeholder="Punto" />
            <Input value={it.d} onChange={(e) => onChange({ ...b, items: b.items.map((x, ix) => (ix === i ? { ...x, d: e.target.value } : x)) })} placeholder="Descripción" />
          </div>
        ))}
        <Btn size="sm" variant="outline" icon="plus" onClick={() => onChange({ ...b, items: [...b.items, { t: "", d: "" }] })}>Punto</Btn>
      </div>
    );
  }
  return null;
}

/* ── ajustes del sitio: fondo, anuncio, menús, footer, contacto ── */
function SitioSettings() {
  const { state, dispatch, toast } = useStore();
  const cfg = state.cms.config;
  const set = (patch: Partial<typeof cfg>) => dispatch({ type: "CMS_CONFIG", patch });

  return (
    <div className="grid lg:grid-cols-2 gap-4 anim-up">
      <Card>
        <SectionTitle kicker="Apariencia" title="Fondo y logo" />
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <input type="color" value={cfg.fondo} onChange={(e) => set({ fondo: e.target.value })} className="w-14 h-11 rounded-lg border border-line2 cursor-pointer" />
            <div>
              <Input value={cfg.fondo} onChange={(e) => set({ fondo: e.target.value })} className="w-36 font-mono" />
              <div className="text-[10.5px] text-mut mt-1">Fondo de toda la web · por defecto #ffffff</div>
            </div>
          </div>
          <Field label="Texto del logo"><Input value={cfg.logo} onChange={(e) => set({ logo: e.target.value })} className="w-48" /></Field>
        </div>
      </Card>

      <Card>
        <SectionTitle kicker="Franja superior" title="Anuncio" />
        <div className="space-y-3">
          <Field label="Texto del anuncio"><Input value={cfg.anuncio} onChange={(e) => set({ anuncio: e.target.value })} /></Field>
          <label className="flex items-center gap-2 text-[12.5px] text-mut"><input type="checkbox" className="accent-[#800000]" checked={cfg.anuncioVisible} onChange={(e) => set({ anuncioVisible: e.target.checked })} />Mostrar franja de anuncio</label>
        </div>
      </Card>

      <Card>
        <SectionTitle kicker="Header" title="Menú principal" right={<Btn size="sm" variant="outline" icon="plus" onClick={() => set({ nav: [...cfg.nav, { label: "Nueva", target: "/" }] })}>Enlace</Btn>} />
        <div className="space-y-1.5">
          {cfg.nav.map((n, i) => (
            <div key={i} className="flex gap-2">
              <Input value={n.label} onChange={(e) => set({ nav: cfg.nav.map((x, ix) => (ix === i ? { ...x, label: e.target.value } : x)) })} placeholder="Etiqueta" />
              <Input value={n.target} onChange={(e) => set({ nav: cfg.nav.map((x, ix) => (ix === i ? { ...x, target: e.target.value } : x)) })} placeholder="/pagina" className="font-mono" />
              <Btn variant="ghost" size="sm" icon="x" onClick={() => set({ nav: cfg.nav.filter((_, ix) => ix !== i) })} />
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <SectionTitle kicker="Footer" title="Columnas del pie" right={<Btn size="sm" variant="outline" icon="plus" onClick={() => set({ footer: [...cfg.footer, { titulo: "Nueva columna", links: [] }] })}>Columna</Btn>} />
        <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
          {cfg.footer.map((col, ci) => (
            <div key={ci} className="border border-line rounded-lg p-2.5">
              <div className="flex gap-2 mb-1.5">
                <Input value={col.titulo} onChange={(e) => set({ footer: cfg.footer.map((x, ix) => (ix === ci ? { ...x, titulo: e.target.value } : x)) })} placeholder="Título de columna" />
                <Btn variant="ghost" size="sm" icon="x" onClick={() => set({ footer: cfg.footer.filter((_, ix) => ix !== ci) })} />
              </div>
              {col.links.map((l, li) => (
                <div key={li} className="flex gap-1.5 mb-1">
                  <Input value={l.label} onChange={(e) => set({ footer: cfg.footer.map((x, ix) => (ix === ci ? { ...x, links: x.links.map((y, iy) => (iy === li ? { ...y, label: e.target.value } : y)) } : x)) })} placeholder="Enlace" />
                  <Input value={l.target} onChange={(e) => set({ footer: cfg.footer.map((x, ix) => (ix === ci ? { ...x, links: x.links.map((y, iy) => (iy === li ? { ...y, target: e.target.value } : y)) } : x)) })} placeholder="/destino" className="font-mono" />
                  <button onClick={() => set({ footer: cfg.footer.map((x, ix) => (ix === ci ? { ...x, links: x.links.filter((_, iy) => iy !== li) } : x)) })} className="text-fog hover:text-brick px-1"><Icon name="x" size={12} /></button>
                </div>
              ))}
              <button onClick={() => set({ footer: cfg.footer.map((x, ix) => (ix === ci ? { ...x, links: [...x.links, { label: "Nuevo", target: "/" }] } : x)) })} className="text-[10.5px] font-bold text-pined underline underline-offset-2">+ enlace</button>
            </div>
          ))}
        </div>
        <Field label="Línea de copyright"><Input value={cfg.copyright} onChange={(e) => set({ copyright: e.target.value })} /></Field>
      </Card>

      <Card>
        <SectionTitle kicker="Contacto" title="Datos visibles" />
        <div className="space-y-2.5">
          <Field label="Dirección"><Input value={cfg.contacto.direccion} onChange={(e) => set({ contacto: { ...cfg.contacto, direccion: e.target.value } })} /></Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Teléfono"><Input value={cfg.contacto.telefono} onChange={(e) => set({ contacto: { ...cfg.contacto, telefono: e.target.value } })} /></Field>
            <Field label="Horario"><Input value={cfg.contacto.horario} onChange={(e) => set({ contacto: { ...cfg.contacto, horario: e.target.value } })} /></Field>
          </div>
          <Field label="Email"><Input value={cfg.contacto.email} onChange={(e) => set({ contacto: { ...cfg.contacto, email: e.target.value } })} /></Field>
        </div>
      </Card>

      <Card>
        <SectionTitle kicker="Newsletter" title="Franja de suscripción" />
        <div className="space-y-2.5">
          <Field label="Título"><Input value={cfg.newsletterTitulo} onChange={(e) => set({ newsletterTitulo: e.target.value })} /></Field>
          <Field label="Bajada"><Input value={cfg.newsletterSub} onChange={(e) => set({ newsletterSub: e.target.value })} /></Field>
          <div className="pt-2"><Btn icon="check" onClick={() => toast("Ajustes del sitio guardados")}>Guardar cambios</Btn></div>
        </div>
      </Card>
    </div>
  );
}
