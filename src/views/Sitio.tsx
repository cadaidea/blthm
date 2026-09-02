import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { buildPayLink, estadosCliente, estadosLabel, orderFlow, useStore } from "../lib/store";
import type { Order, Product } from "../lib/types";
import { calcTotals, copyText, fmtDate, money, uid } from "../lib/util";
import { Badge, Btn, Drawer, EmptyState, Field, Icon, Input, Modal, SectionTitle, Select } from "../components/ui";
import { Thumb } from "../components/Img";

type SubView = "tienda" | "blog" | "seguimiento" | "paginas";

const HERO_IMG = "https://image.qwenlm.ai/generated-images/876c81bb-04b7-4ecf-b3c5-5409001f7961/_result.png";

const ARTICULOS = [
  { id: "a1", titulo: "Cómo elegir el tapiz perfecto para tu sofá", cat: "Guías", lectura: "6 min", fecha: "12 ago 2026", img: "https://image.qwenlm.ai/generated-images/876c81bb-04b7-4ecf-b3c5-5409001f7961/_result.png", resumen: "Lino, bouclé o chenille: qué tela conviene según el uso, la luz y si hay niños o mascotas en casa.", cuerpo: ["El tapiz es el 60% de la vida útil percibida de un sofá. Para salas de alto tráfico recomendamos lino crudo con tratamiento antimanchas: respira bien en la Sierra y envejece con dignidad.", "El bouclé es la textura del momento — nuestra poltrona Esmeraldas lo usa — pero exige aspirado semanal. Si buscas algo indestructible, el chenille de trama cerrada gana por knockout.", "Regla del taller: pide siempre la muestra física antes de aprobar el spec. La pantalla miente; la luz de tu sala no."], },
  { id: "a2", titulo: "Roble vs laurel: qué madera conviene en la Sierra", cat: "Materiales", lectura: "8 min", fecha: "28 jul 2026", img: "https://image.qwenlm.ai/generated-images/c4c2d864-549d-421e-a9e9-ee3f14fc7e78/_result.png", resumen: "Densidad, estabilidad y precio: la comparación honesta que hacemos en el taller antes de cada comedor.", cuerpo: ["El roble nacional es más denso y estable frente a los cambios de humedad de Quito: por eso va en nuestros comedores Andinos. El laurel, más ligero y noble al cepillo, es el rey de los roperos y camas.", "¿Cuánto dura cada uno? Bien lacado, un comedor de roble supera los 30 años. El laurel, en interiores secos, no se queda atrás.", "En el BOM del COM-014 usamos 14 und de tabla roble 2\" — y el MRP nos avisa cuando Maderera del Austro tarda más de 6 días."], },
  { id: "a3", titulo: "Detrás de escena: 21 días de un comedor a medida", cat: "Taller", lectura: "5 min", fecha: "15 jul 2026", img: "https://image.qwenlm.ai/generated-images/2c56f5e9-08cb-49de-b7a4-963536e14050/_result.png", resumen: "Del link de confirmación con fotos al despacho: así se vive una orden de fabricación por dentro.", cuerpo: ["Día 1–3: el cliente confirma specs en su link único — tapiz, lacado y fotos de referencia. Sin ese clic, el taller no arranca.", "Día 4–14: corte, ensamblaje y tapicería. La orden OF-XXXX avanza por etapas y cada una queda en la traza del pedido.", "Día 15–21: control de calidad, embalaje de 10 bultos y guía de remisión SRI autorizada. El cliente ve 'En fabricación' hasta que sale en ruta."], },
  { id: "a4", titulo: "5 errores al amoblar un departamento pequeño", cat: "Guías", lectura: "4 min", fecha: "02 jul 2026", img: "https://image.qwenlm.ai/generated-images/087283f8-cf51-449d-9d01-520b4731854c/_result.png", resumen: "Sofás sobredimensionados, cero circulación y miedo al color: lo que más corregimos en proyectos.", cuerpo: ["Error #1: medir la sala pero no el ascensor. Nuestro sofá Nápoles (220 cm) entra justo en la mayoría de edificios de Cumbayá — pero verifícalo antes.", "Error #2: todo contra la pared. Flotar el sofá 40 cm crea circulación y hace el espacio más grande, no más chico.", "Error #3: ignorar la altura de techos. En departamentos de 2,40 m, respaldares bajos y patas altas estiran visualmente el muro."], },
  { id: "a5", titulo: "Proyecto: 40 suites del Hotel Plaza Grande", cat: "Proyectos", lectura: "7 min", fecha: "20 jun 2026", img: "https://image.qwenlm.ai/generated-images/087283f8-cf51-449d-9d01-520b4731854c/_result.png", resumen: "Doce poltronas Esmeraldas por ala, entregas nocturnas y facturación corporativa: el caso completo.", cuerpo: ["El comité de compras aprobó el 15 de cada mes; programamos los despachos DSP para la semana siguiente, siempre con guía de remisión al día.", "El reto logístico: Centro Histórico, camión de 3,5 t y ventanas de entrega de 22:00 a 05:00. Fletes Rápidos GYE lo bordó.", "Facturación: una factura por despacho, crédito corporativo a 45 días y retenciones electrónicas recibidas en el panel contable."], },
  { id: "a6", titulo: "Cuidado del lacado natural: guía de mantenimiento", cat: "Materiales", lectura: "3 min", fecha: "05 jun 2026", img: "https://image.qwenlm.ai/generated-images/4c03f0dd-cf51-487c-964a-67a34323efb3/_result.png", resumen: "Poro abierto, satinado o mate: cómo limpiar sin arruinar el acabado en los primeros 90 días.", cuerpo: ["Los primeros 90 días el lacado cura. Solo paño seco o apenas húmedo — nada de químicos.", "Mate poro abierto (nuestro estándar en comedores): se limpia con el grano de la madera, nunca en círculos.", "¿Un rayón superficial? Nuestro servicio de garantía lo repone con cera de abeja en una visita."], },
];

const PAGINAS_CMS = [
  { slug: "/", titulo: "Inicio", seo: "Muebles a medida en Quito | Andina Madera & Hogar", estado: "publicada" },
  { slug: "/tienda", titulo: "Tienda", seo: "Comprar muebles online — envío a todo Ecuador", estado: "publicada" },
  { slug: "/nosotros", titulo: "Nosotros", seo: "Taller propio desde 1998 · madera certificada", estado: "publicada" },
  { slug: "/envios-y-entregas", titulo: "Envíos y entregas", seo: "Tiempos de entrega y cobertura nacional", estado: "publicada" },
  { slug: "/garantia", titulo: "Garantía 5 años", seo: "Garantía estructural de 5 años en muebles de taller", estado: "publicada" },
  { slug: "/cambios", titulo: "Cambios y devoluciones", seo: "15 días para cambios sin uso", estado: "borrador" },
];

const CATEGORIAS = ["Todas", "Sala", "Comedor", "Dormitorio", "Oficina"];

export default function Sitio() {
  const { state, dispatch, toast } = useStore();
  const [sub, setSub] = useState<SubView>("tienda");
  const [cat, setCat] = useState("Todas");
  const [q, setQ] = useState("");
  const [detail, setDetail] = useState<Product | null>(null);
  const [qty, setQty] = useState(1);
  const [cart, setCart] = useState<{ productId: string; qty: number }[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [co, setCo] = useState({ nombre: "", contacto: "", ciudad: "Quito", direccion: "" });
  const [done, setDone] = useState<{ code: string; link: string; total: number } | null>(null);
  const [artOpen, setArtOpen] = useState<(typeof ARTICULOS)[0] | null>(null);
  const [blogCat, setBlogCat] = useState("Todas");
  const [trackCode, setTrackCode] = useState("");
  const [tracked, setTracked] = useState<Order | null | "nf">("nf");

  const productos = state.products.filter((p) => p.status === "activo");
  const list = productos.filter((p) => (cat === "Todas" || p.category === cat) && (p.name + p.sku).toLowerCase().includes(q.toLowerCase()));
  const cartCount = cart.reduce((a, c) => a + c.qty, 0);
  const cartLines = cart.map((c) => ({ ...c, p: state.products.find((p) => p.id === c.productId)! })).filter((c) => c.p);
  const cartTotals = calcTotals(cartLines.map((c) => ({ qty: c.qty, price: c.p.price })));
  const sinStock = cartLines.some((c) => c.qty > c.p.stock.showroom + c.p.stock.bodega);

  const addCart = (p: Product, n: number) => {
    setCart((prev) => {
      const ex = prev.find((c) => c.productId === p.id);
      return ex ? prev.map((c) => (c.productId === p.id ? { ...c, qty: c.qty + n } : c)) : [...prev, { productId: p.id, qty: n }];
    });
    toast(`${p.name} · ${n} und al carrito`);
  };

  const checkout = () => {
    if (!co.nombre.trim() || !co.contacto.trim()) return toast("Nombre y contacto son obligatorios", "warn");
    const cid = uid();
    dispatch({
      type: "ADD_CUSTOMER",
      customer: { id: cid, code: `CL-0${160 + state.customers.length}`, name: co.nombre.trim(), doc: "—", type: "natural" as const, phone: co.contacto, email: co.contacto.includes("@") ? co.contacto : "", city: co.ciudad, segment: "hogar", orders: 0, total: 0, credit: 0, since: new Date().toISOString(), notes: `Cliente web · ${co.direccion || "sin dirección"}` },
    });
    const kind = sinStock ? "pedido" : "venta";
    const lines = cartLines.map((c) => ({ productId: c.p.id, sku: c.p.sku, name: c.p.name, qty: c.qty, price: c.p.price, spec: null }));
    const t = calcTotals(lines);
    const now = new Date().toISOString();
    const o: Order = {
      id: uid(), code: `PED-${state.settings.sequence.order}`, kind, customerId: cid, customer: co.nombre.trim(),
      items: lines, ...t, status: "pendiente", channel: "web", payment: "pendiente", transportId: null,
      bultos: Math.max(1, Math.ceil(lines.reduce((a, l) => a + l.qty, 0) / 2)),
      createdAt: now, eta: new Date(Date.now() + (kind === "pedido" ? 14 : 5) * 864e5).toISOString(), city: co.ciudad, workOrderId: null,
      trace: [{ ts: now, user: "sistema", msg: kind === "venta" ? "Pedido recibido desde tienda web (checkout online · stock)" : "Pedido recibido desde tienda web — sin stock: pasa a fabricación bajo pedido" }],
      recibos: [], confirmToken: null, confirmedAt: null,
    };
    dispatch({ type: "CREATE_ORDER", order: o });
    const link = buildPayLink(state, Math.round(o.total * 100) / 100, `Pedido web ${o.code}`, co.nombre.trim(), o.id);
    dispatch({ type: "CREATE_PAYLINK", link });
    setDone({ code: o.code, link: `${state.settings.linkBase}/${link.token}`, total: o.total });
    setCart([]); setCheckoutOpen(false); setCartOpen(false);
    setCo({ nombre: "", contacto: "", ciudad: "Quito", direccion: "" });
    toast(`Pedido ${o.code} entró al OMS · canal web${kind === "pedido" ? " · bajo pedido (sin stock)" : ""}`);
  };

  const buscarPedido = () => {
    const o = state.orders.find((x) => x.code.toLowerCase() === trackCode.trim().toLowerCase() || x.code.replace("PED-", "") === trackCode.trim());
    setTracked(o ?? "nf");
    if (!o) toast("Pedido no encontrado — revisa el código", "warn");
  };

  const stepsIdx = (o: Order) => {
    const i = orderFlow.indexOf(o.status);
    if (i !== -1) return i;
    if (o.status === "borrador") return 0;
    if (o.status === "en_fabricacion" || o.status === "en_produccion") return 4;
    if (o.status === "listo_proveedor") return 5;
    return 0;
  };

  const articulos = useMemo(() => ARTICULOS.filter((a) => blogCat === "Todas" || a.cat === blogCat), [blogCat]);
  const stockDe = (p: Product) => p.stock.showroom + p.stock.bodega;

  return (
    <div className="space-y-0">
      {/* ── cabecera del sitio público ── */}
      <div className="anim-up -mx-4 lg:-mx-6">
        <div className="bg-pined text-pinel text-center text-[11px] font-mono tracking-wide py-1.5 px-4 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-oak live-dot" />
          Envíos a todo Ecuador · 15 días de cambio · Pago seguro con PayPhone · Garantía estructural 5 años
        </div>
        <div className="bg-night text-paper px-4 lg:px-8 py-3.5 flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-pined text-oakl grid place-items-center"><Icon name="logo" size={18} /></span>
            <div className="leading-none">
              <div className="font-display font-extrabold text-[16px] tracking-wide">ANDINA MADERA & HOGAR</div>
              <div className="font-mono text-[8.5px] tracking-[0.3em] text-paper/40 uppercase mt-1">Simple · Elegante · Tú</div>
            </div>
          </div>
          <nav className="flex items-center gap-1 mx-auto">
            {([["tienda", "Tienda"], ["blog", "Blog"], ["seguimiento", "Mi pedido"], ["paginas", "Páginas"]] as const).map(([k, l]) => (
              <button key={k} onClick={() => setSub(k)} className={`px-3.5 py-1.5 rounded-lg text-[12.5px] font-bold transition-all ${sub === k ? "bg-oak text-night" : "text-paper/60 hover:text-paper"}`}>{l}</button>
            ))}
          </nav>
          <button onClick={() => setCartOpen(true)} className="relative flex items-center gap-2 bg-paper/10 hover:bg-paper/15 border border-paper/15 rounded-xl px-3.5 py-2 transition-all ml-auto">
            <Icon name="cart" size={16} className="text-oakl" />
            <span className="text-[12.5px] font-bold">Carrito</span>
            {cartCount > 0 && <span key={cartCount} className="anim-pop absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-oak text-night font-display font-extrabold text-[10.5px] grid place-items-center num">{cartCount}</span>}
          </button>
        </div>
      </div>

      {sub === "tienda" && (
        <div className="pt-6 space-y-8">
          {/* hero editorial */}
          <div className="grid lg:grid-cols-2 gap-6 items-center anim-up">
            <div>
              <div className="font-mono text-[11px] tracking-[0.24em] text-oak uppercase">Fabricado en nuestro taller · Quito</div>
              <h1 className="font-display font-extrabold text-[38px] lg:text-[46px] leading-[1.04] text-ink mt-2.5">
                Muebles que huelen<br />a <span className="text-pine">madera de verdad</span>,<br />no a bodega.
              </h1>
              <p className="text-[14.5px] text-mut mt-4 max-w-md leading-relaxed">
                Cada pieza sale del taller con su orden de fabricación, su lista de materiales y un link para que sigas el pedido paso a paso. Stock inmediato o a medida con tus specs.
              </p>
              <div className="flex flex-wrap gap-2.5 mt-5">
                <Btn icon="box" onClick={() => document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" })}>Ver catálogo</Btn>
                <Btn variant="outline" icon="saw" onClick={() => setSub("seguimiento")}>Rastrear mi pedido</Btn>
              </div>
              <div className="flex gap-6 mt-7 pt-5 border-t border-line max-w-md">
                <div><div className="font-display font-extrabold text-[22px] text-ink num">27</div><div className="text-[10.5px] uppercase tracking-wider text-fog font-bold">años de taller</div></div>
                <div><div className="font-display font-extrabold text-[22px] text-ink num">4.8★</div><div className="text-[10.5px] uppercase tracking-wider text-fog font-bold">1.240 reseñas</div></div>
                <div><div className="font-display font-extrabold text-[22px] text-ink num">5–21</div><div className="text-[10.5px] uppercase tracking-wider text-fog font-bold">días de entrega</div></div>
              </div>
            </div>
            <div className="relative group">
              <Thumb src={HERO_IMG} alt="Sofá Nápoles" className="w-full h-[300px] lg:h-[360px] rounded-2xl border border-line group-hover:scale-[1.01] transition-transform duration-500" />
              <div className="absolute bottom-4 left-4 right-4 bg-night/85 text-paper rounded-xl px-4 py-3 flex items-center justify-between backdrop-blur-sm">
                <div><div className="text-[12.5px] font-bold">Sofá Nápoles 3 puestos</div><div className="text-[10.5px] text-paper/50 font-mono">lino crudo · laurel · espuma D30</div></div>
                <div className="text-right"><div className="font-display font-extrabold text-[18px] text-oakl num">$899</div><div className="text-[9px] text-paper/45">+ IVA · stock: {stockDe(state.products[0])} und</div></div>
              </div>
            </div>
          </div>

          {/* catálogo */}
          <div id="catalogo" className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIAS.map((c) => (
                <button key={c} onClick={() => setCat(c)} className={`px-3.5 py-1.5 rounded-lg border text-[12.5px] font-bold transition-all ${cat === c ? "bg-ink text-paper border-ink" : "bg-card border-line2 text-mut hover:text-ink hover:border-line"}`}>{c}</button>
              ))}
              <div className="relative ml-auto w-full sm:w-60">
                <Icon name="search" size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-fog" />
                <Input placeholder="Buscar en la tienda…" value={q} onChange={(e) => setQ(e.target.value)} className="pl-8" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 stagger">
              {list.map((p) => {
                const stk = stockDe(p);
                return (
                  <div key={p.id} className="group bg-card border border-line rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer" onClick={() => { setDetail(p); setQty(1); }}>
                    <div className="relative h-44 overflow-hidden">
                      <Thumb src={p.img} alt={p.name} className="w-full h-full group-hover:scale-[1.06] transition-transform duration-500" />
                      <span className="absolute top-2.5 left-2.5"><Badge tone={p.line === "fabricacion" ? "pine" : p.line === "importado" ? "steel" : "fog"}>{p.line === "fabricacion" ? "hecho en taller" : p.line === "importado" ? "importado" : "nacional"}</Badge></span>
                      {stk === 0 && <span className="absolute top-2.5 right-2.5"><Badge tone="oak">bajo pedido</Badge></span>}
                    </div>
                    <div className="p-3.5">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-fog">{p.category} · {p.sku}</div>
                      <div className="font-display font-bold text-[15px] text-ink leading-tight mt-0.5">{p.name}</div>
                      <div className="flex items-end justify-between mt-2.5">
                        <div>
                          <div className="font-display font-extrabold text-[18px] text-pine num">{money(p.price * 1.15, false)}</div>
                          <div className="text-[9.5px] text-fog -mt-0.5">IVA incluido · {stk > 0 ? `${stk} disponibles` : `entrega ${p.leadDays} días`}</div>
                        </div>
                        <button onClick={(e) => { e.stopPropagation(); addCart(p, 1); }} className="w-9 h-9 rounded-xl bg-pined text-oakl grid place-items-center hover:bg-pine hover:scale-105 active:scale-95 transition-all" title="Agregar al carrito">
                          <Icon name="cart" size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {list.length === 0 && <EmptyState icon="box" title="Nada por aquí" sub="Prueba con otra categoría o palabra clave." />}
          </div>
        </div>
      )}

      {sub === "blog" && (
        <div className="pt-6 space-y-5">
          <div className="flex flex-wrap items-end justify-between gap-3 anim-up">
            <div>
              <div className="font-mono text-[11px] tracking-[0.24em] text-oak uppercase">Blog · contenido del CMS (Editor.js)</div>
              <h1 className="font-display font-extrabold text-[30px] text-ink">Del taller a tu casa</h1>
            </div>
            <div className="flex gap-2">
              {["Todas", "Guías", "Materiales", "Taller", "Proyectos"].map((c) => (
                <button key={c} onClick={() => setBlogCat(c)} className={`px-3 py-1.5 rounded-lg border text-[12px] font-bold transition-all ${blogCat === c ? "bg-ink text-paper border-ink" : "bg-card border-line2 text-mut"}`}>{c}</button>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger">
            {articulos.map((a) => (
              <article key={a.id} className="group bg-card border border-line rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer" onClick={() => setArtOpen(a)}>
                <div className="relative h-40 overflow-hidden">
                  <Thumb src={a.img} alt={a.titulo} className="w-full h-full group-hover:scale-[1.05] transition-transform duration-500" />
                  <span className="absolute top-2.5 left-2.5"><Badge tone="oak">{a.cat}</Badge></span>
                </div>
                <div className="p-4">
                  <div className="font-mono text-[10px] text-fog uppercase tracking-wider">{a.fecha} · lectura {a.lectura}</div>
                  <h3 className="font-display font-bold text-[16.5px] text-ink leading-snug mt-1 group-hover:text-pine transition-colors">{a.titulo}</h3>
                  <p className="text-[12.5px] text-mut mt-1.5 leading-relaxed">{a.resumen}</p>
                  <div className="text-[12px] font-bold text-pine mt-2.5 flex items-center gap-1">Leer artículo <Icon name="arrow" size={12} /></div>
                </div>
              </article>
            ))}
          </div>
          <Card className="!p-5 bg-night text-paper flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[240px]">
              <div className="font-display font-extrabold text-[17px]">Digest semanal del taller</div>
              <div className="text-[12px] text-paper/55 mt-1">Nuevos modelos, guías de cuidado y proyectos. Enviado con <b className="text-oakl">Digest by Cada Idea</b> — plugin propio, ya conectado.</div>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <Input placeholder="tu@email.com" className="bg-paper/10 border-paper/20 text-paper placeholder:text-paper/35 sm:w-56" />
              <Btn variant="oak" icon="check" onClick={() => toast("Suscripción confirmada · revisa tu correo (double opt-in)")}>Suscribirme</Btn>
            </div>
          </Card>
        </div>
      )}

      {sub === "seguimiento" && (
        <div className="pt-6 max-w-2xl mx-auto space-y-4">
          <div className="text-center anim-up">
            <div className="font-mono text-[11px] tracking-[0.24em] text-oak uppercase">SeguimientoController · así lo ve el cliente</div>
            <h1 className="font-display font-extrabold text-[30px] text-ink mt-1">¿Dónde está mi pedido?</h1>
            <p className="text-[13px] text-mut mt-1.5">Ingresa el código que recibiste por WhatsApp o correo (ej: PED-1041)</p>
          </div>
          <div className="flex gap-2 anim-up">
            <Input placeholder="PED-1041" value={trackCode} onChange={(e) => setTrackCode(e.target.value)} onKeyDown={(e) => e.key === "Enter" && buscarPedido()} className="font-mono text-center text-[15px]" />
            <Btn icon="search" onClick={buscarPedido}>Buscar</Btn>
          </div>
          {tracked === "nf" && (
            <Card className="text-center anim-up"><div className="py-4"><EmptyState icon="truck" title="Prueba con un código de la demo" sub="PED-1041 (en ruta) · PED-1043 (en producción) · PED-1038 (entregado)" /></div></Card>
          )}
          {tracked !== "nf" && tracked && (() => {
            const o = tracked as Order;
            const idx = stepsIdx(o);
            const fin = ["anulado", "cancelado"].includes(o.status);
            return (
              <Card className="anim-pop space-y-4">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <div className="font-mono text-[11.5px] text-fog">{o.code} · {fmtDate(o.createdAt)}</div>
                    <div className="font-display font-extrabold text-[24px] text-ink leading-tight">{fin ? estadosCliente[o.status] : estadosCliente[o.status]}</div>
                    <div className="text-[12px] text-mut mt-0.5">{o.items.reduce((a, i) => a + i.qty, 0)} productos · {o.bultos} bultos · entrega estimada {fmtDate(o.eta)}</div>
                  </div>
                  {!fin && <Badge tone={idx >= 6 ? "moss" : "oak"} dot className="mt-1">paso {idx + 1} de {orderFlow.length}</Badge>}
                </div>
                {fin && (
                  <div className="rounded-xl bg-brickl border border-brick/30 p-3 text-[12.5px] text-brick anim-pop">
                    Este pedido fue {o.status === "anulado" ? "anulado" : "cancelado"}. Si ya pagaste, tu reembolso sale en 48 h. Escríbenos por WhatsApp.
                  </div>
                )}
                <div className="relative pl-6 space-y-0 before:absolute before:left-[9px] before:top-2 before:bottom-2 before:w-px before:bg-line2">
                  {orderFlow.map((s, i) => {
                    const doneS = !fin && i <= idx;
                    const cur = !fin && i === idx;
                    return (
                      <div key={s} className="relative py-1.5">
                        <span className={`absolute -left-6 top-2 w-[19px] h-[19px] rounded-full grid place-items-center border-[3px] border-paper transition-colors ${doneS ? (s === "entregado" ? "bg-moss" : "bg-pine") : "bg-ink/10"}`}>
                          {doneS && <Icon name="check" size={9} className="text-paper" />}
                        </span>
                        <div className={`text-[13.5px] leading-tight ${cur ? "font-display font-extrabold text-ink" : doneS ? "font-semibold text-ink/70" : "text-fog"}`}>{estadosCliente[s]}</div>
                        {cur && <div className="text-[10.5px] font-mono text-oakd mt-0.5 anim-feed">estás aquí · el taller reporta avances en cada etapa</div>}
                      </div>
                    );
                  })}
                </div>
                <div className="rounded-xl border border-line p-3 space-y-1.5">
                  {o.items.map((i, ix) => (
                    <div key={ix} className="flex justify-between text-[12.5px]"><span className="text-ink">{i.qty}× {i.name}</span><span className="font-mono text-mut num">{money(i.qty * i.price * 1.15)}</span></div>
                  ))}
                  <div className="flex justify-between text-[13.5px] font-bold text-ink pt-1.5 border-t border-line"><span>Total</span><span className="font-mono num">{money(o.total)}</span></div>
                </div>
                <div className="rounded-lg bg-steell/60 border border-steel/20 px-3 py-2 text-[11px] text-steel flex items-center gap-2">
                  <Icon name="eye" size={13} /> Vista del cliente · internamente el ERP está en <b>{estadosLabel[o.status]}</b> (mapeo ESTADOS_CLIENTE de EstadoPedidoErp.php)
                </div>
              </Card>
            );
          })()}
        </div>
      )}

      {sub === "paginas" && (
        <div className="pt-6 space-y-4">
          <div className="anim-up">
            <div className="font-mono text-[11px] tracking-[0.24em] text-oak uppercase">CMS · PaginaController + EditorJsController + AjustesSeoBletia</div>
            <h1 className="font-display font-extrabold text-[30px] text-ink mt-1">Páginas del sitio & SEO</h1>
          </div>
          <div className="grid lg:grid-cols-3 gap-4">
            <Card pad={false} className="lg:col-span-2 anim-up">
              <div className="p-4 border-b border-line"><SectionTitle kicker="Contenido editable con bloques" title="Páginas publicadas" /></div>
              <div className="divide-y divide-line/70">
                {PAGINAS_CMS.map((p) => (
                  <div key={p.slug} className="flex items-center gap-3 px-4 py-3 hover:bg-pinel/25 transition-colors">
                    <span className="w-8 h-8 rounded-lg bg-ink/5 text-mut grid place-items-center font-mono text-[10px]">{p.slug === "/" ? "⌂" : p.slug.slice(1, 3)}</span>
                    <div className="min-w-0 flex-1">
                      <div className="text-[13px] font-semibold text-ink">{p.titulo} <span className="font-mono text-[10.5px] text-fog font-normal">· {p.slug}</span></div>
                      <div className="text-[11px] text-mut truncate">SEO: {p.seo}</div>
                    </div>
                    <Badge tone={p.estado === "publicada" ? "moss" : "oak"} dot>{p.estado}</Badge>
                    <Btn size="sm" variant="outline" icon="edit" onClick={() => toast(`Editor de bloques abierto · ${p.titulo}`, "info")}>Editar</Btn>
                  </div>
                ))}
              </div>
            </Card>
            <div className="space-y-4">
              <Card className="anim-up">
                <SectionTitle kicker="AjustesSeoBletia" title="SEO global" />
                <div className="space-y-2.5 text-[12px]">
                  <div><div className="text-[10px] uppercase font-bold text-fog mb-1">Meta título</div><div className="rounded-lg border border-line px-2.5 py-1.5 bg-ink/3 text-ink">Muebles a medida en Quito | Andina Madera & Hogar</div></div>
                  <div><div className="text-[10px] uppercase font-bold text-fog mb-1">Meta descripción</div><div className="rounded-lg border border-line px-2.5 py-1.5 bg-ink/3 text-mut">Taller propio, madera certificada y envíos a todo Ecuador. Compra online con PayPhone.</div></div>
                  <div className="flex gap-1.5 flex-wrap pt-1">
                    {["sitemap.xml ✓", "robots.txt ✓", "Open Graph ✓", "Schema.org ✓"].map((x) => <span key={x} className="font-mono text-[10px] bg-mossl text-[#41621f] px-2 py-0.5 rounded">{x}</span>)}
                  </div>
                  <p className="text-[10.5px] text-fog">En producción se aplica con <span className="font-mono">aplicar-robots.sh</span> (ya está en el repo).</p>
                </div>
              </Card>
              <Card className="anim-up">
                <SectionTitle kicker="Integraciones" title="Conectadas al ERP" />
                <div className="space-y-1.5 text-[12px]">
                  {[["Checkout web", "crea pedidos canal web en el OMS"], ["Seguimiento", "lee ESTADOS_CLIENTE del pedido"], ["Digest", "newsletter con plugin propio"], ["Garantía", "reclamos → postventa del ERP"]].map(([a, b]) => (
                    <div key={a} className="flex items-center gap-2 rounded-lg border border-line px-2.5 py-2"><Icon name="check" size={12} className="text-moss" /><span><b className="text-ink">{a}</b> <span className="text-mut">— {b}</span></span></div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      )}

      {/* footer del sitio */}
      <div className="-mx-4 lg:-mx-6 mt-12 bg-night text-paper/70 px-6 lg:px-10 py-8">
        <div className="flex flex-wrap gap-8 justify-between items-start">
          <div className="max-w-xs">
            <div className="font-display font-extrabold text-[15px] text-paper tracking-wide">ANDINA MADERA & HOGAR</div>
            <p className="text-[11.5px] mt-2 leading-relaxed">{state.settings.company.address} · RUC {state.settings.company.ruc}<br />{state.settings.company.phone} · {state.settings.company.email}</p>
          </div>
          <div className="text-[11.5px] space-y-1.5">
            <div className="font-bold text-paper/90 uppercase tracking-wider text-[10px] mb-2">Tienda</div>
            {CATEGORIAS.slice(1).map((c) => <div key={c} className="hover:text-oakl cursor-pointer transition-colors" onClick={() => { setSub("tienda"); setCat(c); }}>{c}</div>)}
          </div>
          <div className="text-[11.5px] space-y-1.5">
            <div className="font-bold text-paper/90 uppercase tracking-wider text-[10px] mb-2">Ayuda</div>
            {["Envíos y entregas", "Garantía 5 años", "Cambios y devoluciones", "Rastrear pedido"].map((x, i) => (
              <div key={x} className="hover:text-oakl cursor-pointer transition-colors" onClick={() => setSub(i === 3 ? "seguimiento" : "paginas")}>{x}</div>
            ))}
          </div>
          <div className="text-[11.5px] space-y-1.5">
            <div className="font-bold text-paper/90 uppercase tracking-wider text-[10px] mb-2">Pagos</div>
            <div className="flex gap-1.5"><Badge tone="oak">PayPhone</Badge><Badge tone="fog">Visa</Badge><Badge tone="fog">Mastercard</Badge></div>
            <div className="text-[10px] text-paper/40 pt-1">Factura electrónica autorizada por el SRI</div>
          </div>
        </div>
        <div className="border-t border-paper/10 mt-6 pt-4 text-[10px] font-mono text-paper/35 flex justify-between flex-wrap gap-2">
          <span>© 2026 Andina Madera & Hogar S.A. · Hecho en Ecuador</span>
          <span>demo del canal digital · conectado al ERP en tiempo real</span>
        </div>
      </div>

      {/* ficha de producto */}
      <Drawer open={!!detail} onClose={() => setDetail(null)} kicker={`Tienda · ${detail?.sku ?? ""}`} title={detail?.name ?? ""}>
        {detail && (
          <div className="space-y-4">
            <Thumb src={detail.img} alt={detail.name} className="w-full h-52 rounded-xl border border-line" />
            <div className="flex items-end justify-between">
              <div>
                <div className="font-display font-extrabold text-[26px] text-pine num">{money(detail.price * 1.15, false)}</div>
                <div className="text-[11px] text-fog">IVA 15% incluido · {detail.leadDays} días si es bajo pedido</div>
              </div>
              <Badge tone={stockDe(detail) > 0 ? "moss" : "oak"} dot>{stockDe(detail) > 0 ? `${stockDe(detail)} en stock` : "bajo pedido"}</Badge>
            </div>
            <div className="rounded-lg border border-line p-3 text-[12.5px] text-mut leading-relaxed">
              <b className="text-ink">Ficha técnica:</b> {detail.dims} · {detail.weightKg} kg
              <div className="flex flex-wrap gap-1.5 mt-2">{detail.materials.map((m) => <Badge key={m} tone="pine">{m}</Badge>)}</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-line rounded-xl overflow-hidden">
                <button className="px-3 py-2 hover:bg-ink/5 text-ink" onClick={() => setQty(Math.max(1, qty - 1))}><Icon name="minus" size={13} /></button>
                <span className="px-4 font-mono font-semibold num">{qty}</span>
                <button className="px-3 py-2 hover:bg-ink/5 text-ink" onClick={() => setQty(qty + 1)}><Icon name="plus" size={13} /></button>
              </div>
              <Btn className="flex-1" icon="cart" onClick={() => { addCart(detail, qty); setDetail(null); setCartOpen(true); }}>Agregar · {money(detail.price * 1.15 * qty, false)}</Btn>
            </div>
            <p className="text-[11.5px] text-fog leading-relaxed">
              ¿Lo quieres con tu tapiz y lacado? Cómpralo y te enviamos un <b className="text-ink">link único para confirmar specs con fotos</b> antes de fabricar.
            </p>
          </div>
        )}
      </Drawer>

      {/* carrito */}
      <Drawer open={cartOpen} onClose={() => setCartOpen(false)} kicker={`Carrito · ${cartCount} und`} title="Tu compra">
        {cartLines.length === 0 ? (
          <EmptyState icon="cart" title="Carrito vacío" sub="Agrega algo del catálogo — hay stock inmediato en varios modelos." />
        ) : (
          <div className="space-y-3">
            {cartLines.map((c) => (
              <div key={c.productId} className="flex items-center gap-3 rounded-xl border border-line p-2.5">
                <Thumb src={c.p.img} alt={c.p.name} className="w-14 h-14 rounded-lg border border-line" />
                <div className="min-w-0 flex-1">
                  <div className="text-[13px] font-semibold text-ink leading-tight">{c.p.name}</div>
                  <div className="font-mono text-[11px] text-fog">{money(c.p.price * 1.15, false)} c/u {stockDe(c.p) < c.qty && <span className="text-oakd font-bold">· sin stock: se fabrica</span>}</div>
                </div>
                <div className="flex items-center border border-line rounded-lg overflow-hidden shrink-0">
                  <button className="px-2 py-1 hover:bg-ink/5" onClick={() => setCart(cart.map((x) => x.productId === c.productId ? { ...x, qty: Math.max(1, x.qty - 1) } : x))}><Icon name="minus" size={11} /></button>
                  <span className="px-2.5 font-mono text-[12px] num">{c.qty}</span>
                  <button className="px-2 py-1 hover:bg-ink/5" onClick={() => setCart(cart.map((x) => x.productId === c.productId ? { ...x, qty: x.qty + 1 } : x))}><Icon name="plus" size={11} /></button>
                </div>
                <button className="text-fog hover:text-brick transition-colors shrink-0" onClick={() => setCart(cart.filter((x) => x.productId !== c.productId))}><Icon name="x" size={14} /></button>
              </div>
            ))}
            {sinStock && (
              <div className="rounded-lg bg-oakl/70 border border-oak/30 px-3 py-2 text-[11.5px] text-oakd anim-pop flex gap-2"><Icon name="alert" size={13} className="shrink-0 mt-0.5" />Parte de tu compra no tiene stock inmediato: esos ítems entrarán como <b>pedido bajo fabricación</b> (14 días).</div>
            )}
            <div className="rounded-xl bg-pinel/60 border border-pine/20 p-3.5 space-y-1 text-[12.5px]">
              <div className="flex justify-between text-pined"><span>Subtotal</span><span className="font-mono num">{money(cartTotals.subtotal)}</span></div>
              <div className="flex justify-between text-pined"><span>IVA 15%</span><span className="font-mono num">{money(cartTotals.iva)}</span></div>
              <div className="flex justify-between font-display font-extrabold text-[17px] text-pined pt-1"><span>Total</span><span className="num">{money(cartTotals.total)}</span></div>
            </div>
            <Btn className="w-full" icon="qr" onClick={() => setCheckoutOpen(true)}>Pagar con PayPhone</Btn>
            <p className="text-center text-[10.5px] text-fog">Pago 100% seguro · la tarjeta nunca toca nuestros servidores</p>
          </div>
        )}
      </Drawer>

      {/* checkout */}
      <Modal open={checkoutOpen} onClose={() => setCheckoutOpen(false)} kicker="Checkout web · canal digital → OMS" title="Finalizar compra" wide>
        {done ? (
          <div className="text-center py-6 anim-pop max-w-md mx-auto">
            <div className="w-16 h-16 mx-auto rounded-full bg-mossl text-[#41621f] grid place-items-center mb-3"><Icon name="check" size={30} /></div>
            <div className="font-display font-extrabold text-[22px] text-ink">¡Pedido recibido!</div>
            <div className="text-[13px] text-mut mt-1">Tu pedido <b className="font-mono">{done.code}</b> por <b className="num">{money(done.total)}</b> ya está en el pipeline del ERP.</div>
            <div className="mt-4 rounded-xl bg-night p-4 text-left">
              <div className="text-[10px] font-mono text-paper/50 uppercase tracking-widest">Tu link de pago PayPhone</div>
              <div className="font-mono text-[12px] text-oakl break-all mt-1.5">{done.link}</div>
              <div className="flex gap-2 mt-3">
                <Btn size="sm" variant="outline" icon="copy" onClick={async () => { await copyText(done.link); toast("Link de pago copiado"); }}>Copiar link</Btn>
                <Btn size="sm" variant="oak" icon="truck" onClick={() => { setDone(null); setSub("seguimiento"); setTrackCode(done.code); setTracked(state.orders.find((o) => o.code === done.code) ?? "nf"); }}>Rastrear pedido</Btn>
              </div>
            </div>
            <p className="text-[11px] text-fog mt-3">Te llegará un correo con el link y podrás seguir cada etapa: el taller te avisa cuando entre en fabricación.</p>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="grid sm:grid-cols-2 gap-3">
              <Field label="Nombre completo"><Input value={co.nombre} onChange={(e) => setCo({ ...co, nombre: e.target.value })} placeholder="Ej: Camila Ruiz" /></Field>
              <Field label="WhatsApp o email"><Input value={co.contacto} onChange={(e) => setCo({ ...co, contacto: e.target.value })} placeholder="099… o correo" /></Field>
              <Field label="Ciudad">
                <Select value={co.ciudad} onChange={(e) => setCo({ ...co, ciudad: e.target.value })}>
                  {["Quito", "Guayaquil", "Cuenca", "Ambato", "Riobamba", "Manta"].map((c) => <option key={c}>{c}</option>)}
                </Select>
              </Field>
              <Field label="Dirección de entrega"><Input value={co.direccion} onChange={(e) => setCo({ ...co, direccion: e.target.value })} placeholder="Calle, número, referencia" /></Field>
            </div>
            <div className="rounded-lg bg-ink/4 border border-line px-3.5 py-2.5 flex justify-between text-[13px]">
              <span className="text-mut">{cartCount} productos · {sinStock ? "mixto: stock + fabricación" : "todo con stock inmediato"}</span>
              <b className="font-mono num text-ink">{money(cartTotals.total)}</b>
            </div>
            <div className="flex justify-end gap-2"><Btn variant="ghost" onClick={() => setCheckoutOpen(false)}>Volver</Btn><Btn icon="qr" onClick={checkout}>Crear pedido y link de pago</Btn></div>
          </div>
        )}
      </Modal>
    </div>
  );
}

function Card({ children, className = "" }: { children: ReactNode; className?: string; pad?: boolean }) {
  return <div className={`bg-card border border-line rounded-2xl p-4 ${className}`}>{children}</div>;
}
