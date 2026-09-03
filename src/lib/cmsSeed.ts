import type { AppState } from "./types";

/* Contenido inicial de la web pública — réplica de upgrade.bletia.ec, todo editable desde "Contenido web". */

const IMG = {
  sofa: "https://image.qwenlm.ai/generated-images/876c81bb-04b7-4ecf-b3c5-5409001f7961/_result.png",
  comedor: "https://image.qwenlm.ai/generated-images/c4c2d864-549d-421e-a9e9-ee3f14fc7e78/_result.png",
  cama: "https://image.qwenlm.ai/generated-images/4c03f0dd-cf51-487c-964a-67a34323efb3/_result.png",
  ropero: "https://image.qwenlm.ai/generated-images/9248a4c4-1d9b-4611-b940-870a805ce7d5/_result.png",
  escritorio: "https://image.qwenlm.ai/generated-images/2c56f5e9-08cb-49de-b7a4-963536e14050/_result.png",
  poltrona: "https://image.qwenlm.ai/generated-images/087283f8-cf51-449d-9d01-520b4731854c/_result.png",
};

export const TAPIZ = [
  { n: "Lino crudo", c: "#d9cbb0" },
  { n: "Bouclé marfil", c: "#efe8da" },
  { n: "Chenille gris", c: "#b3ada3" },
  { n: "Terciopelo verde", c: "#3f5d50" },
  { n: "Cuero coñac", c: "#a06a3c" },
];
export const MADERA = [
  { n: "Roble natural", c: "#c7a472" },
  { n: "Nogal", c: "#7b5233" },
  { n: "Cerezo", c: "#9a5b40" },
  { n: "Ébano", c: "#3b332c" },
];

export const cmsSeed: AppState["cms"] = {
  config: {
    logo: "BLETIA",
    fondo: "#ffffff",
    anuncio: "Envíos a todo Ecuador · Pago seguro con PayPhone · Garantía estructural 5 años",
    anuncioVisible: true,
    nav: [
      { label: "Colección", target: "/tienda" },
      { label: "Diario", target: "/diario" },
      { label: "La Casa", target: "/la-casa" },
      { label: "Garantía", target: "/garantia" },
    ],
    footer: [
      {
        titulo: "Colección",
        links: [
          { label: "Sofás", target: "/categoria/sofas" },
          { label: "Sillones", target: "/categoria/sillones" },
          { label: "Piezas", target: "/categoria/piezas" },
          { label: "Centros", target: "/categoria/centros" },
          { label: "Veladores", target: "/categoria/veladores" },
        ],
      },
      {
        titulo: "Ayuda",
        links: [
          { label: "Envíos y entregas", target: "/envios" },
          { label: "Cambios y devoluciones", target: "/cambios" },
          { label: "Garantía 5 años", target: "/garantia" },
          { label: "Seguir mi pedido", target: "/seguimiento" },
        ],
      },
      {
        titulo: "Legal",
        links: [
          { label: "Términos y condiciones", target: "/terminos" },
          { label: "Política de privacidad", target: "/privacidad" },
          { label: "Política de cookies", target: "/cookies" },
          { label: "Diario", target: "/diario" },
        ],
      },
    ],
    copyright: "© 2026 BLETIA · Hecho en Cuenca, Ecuador",
    contacto: {
      direccion: "Calle Larga 1-20 y Av. Solano, Cuenca",
      telefono: "07 284 5511",
      email: "hola@bletia.ec",
      horario: "Lun–Sáb · 09:30 a 18:30",
    },
    newsletterTitulo: "Sé la primera persona en recibir novedades de Bletia",
    newsletterSub: "Únete a nuestra lista y obtén un cupón para tu primera compra.",
  },
  paginas: [
    {
      id: "pg-inicio", slug: "inicio", titulo: "Inicio", enNav: false, estado: "publicada",
      seoTitle: "BLETIA · Muebles hechos en Cuenca", seoDesc: "Simple. Elegante. tu. Muebles a medida hechos a mano en Cuenca, Ecuador.",
      bloques: [
        { id: "b1", tipo: "hero", titulo: "Simple. Elegante. tu.", sub: "Hacemos a mano para cuidar a detalle en cada pieza. Cada pieza define tu espacio.", img: IMG.sofa, cta: "Ver colección", ctaTarget: "/tienda" },
        {
          id: "b2", tipo: "lista", titulo: "Muebles hechos en Cuenca",
          items: [
            { t: "A medida", d: "Tus dimensiones, tu tapiz, tu lacado. Confirmas con fotos antes de fabricar." },
            { t: "Con color", d: "Más de 40 telas y 12 acabados de madera para que la pieza sea tuya." },
            { t: "Un espacio", d: "Del plano a la sala: asesoría en showroom o por videollamada." },
          ],
        },
        { id: "b3", tipo: "colecciones" },
        { id: "b4", tipo: "novedades" },
        { id: "b5", tipo: "destacado" },
        { id: "b6", tipo: "diario" },
        { id: "b7", tipo: "newsletter" },
      ],
    },
    {
      id: "pg-casa", slug: "la-casa", titulo: "La Casa", enNav: false, estado: "publicada",
      seoTitle: "La Casa · Showroom y taller en Cuenca", seoDesc: "Visítanos en Cuenca: showroom, taller y asesoría a medida.",
      bloques: [
        { id: "c1", tipo: "texto", titulo: "Un espacio para las ideas", cuerpo: "Es un espacio en donde cabe desde las ideas, el diseño y cada pieza convertida en realidad. Visítanos en Cuenca: el café lo ponemos nosotros, las medidas tú." },
        {
          id: "c2", tipo: "columnas", titulo: "Así trabajamos",
          cols: [
            { t: "Eliges la pieza", d: "Cualquier modelo de la colección se adapta a ti." },
            { t: "Confirmas specs", d: "Tapiz, lacado y fotos vía un link único." },
            { t: "Fabricamos", d: "Sigue cada etapa desde tu cuenta." },
          ],
        },
        { id: "c3", tipo: "quote", texto: "La madera manda, nosotros escuchamos." },
      ],
    },
    {
      id: "pg-garantia", slug: "garantia", titulo: "Garantía 5 años", enNav: false, estado: "publicada",
      seoTitle: "Garantía estructural de 5 años", seoDesc: "5 años de garantía estructural en piezas de taller.",
      bloques: [
        { id: "g1", tipo: "texto", titulo: "Garantía estructural de 5 años", cuerpo: "Cada pieza que sale del taller responde: si algo falla en la estructura, vuelve. Cubre ensambles, herrajes de carga y lacado. No cubre desgaste natural del tapiz ni mal uso." },
        { id: "g2", tipo: "lista", titulo: "Qué cubre", items: [{ t: "Estructura y ensambles", d: "Caja y espiga, herrajes de carga." }, { t: "Lacado", d: "Desprendimiento o burbujas." }, { t: "Una visita de cortesía", d: "Ajuste en sitio dentro del primer año." }] },
      ],
    },
    { id: "pg-envios", slug: "envios", titulo: "Envíos y entregas", enNav: false, estado: "publicada", seoTitle: "Envíos y entregas", seoDesc: "Tiempos de entrega y cobertura.", bloques: [{ id: "e1", tipo: "texto", titulo: "Envíos y entregas", cuerpo: "Entregamos en todo Ecuador con transportistas propios y aliados. En Cuenca la entrega es gratis; el resto del país se cotiza por bulto y distancia. Cada despacho sale con guía de remisión del SRI." }] },
    { id: "pg-cambios", slug: "cambios", titulo: "Cambios y devoluciones", enNav: false, estado: "publicada", seoTitle: "Cambios y devoluciones", seoDesc: "15 días para cambios sin uso.", bloques: [{ id: "x1", tipo: "texto", titulo: "Cambios y devoluciones", cuerpo: "Tienes 15 días para cambios sin uso y con embalaje original. Las piezas a medida no tienen devolución, pero sí garantía estructural de 5 años." }] },
    { id: "pg-terminos", slug: "terminos", titulo: "Términos y condiciones", enNav: false, estado: "publicada", seoTitle: "Términos y condiciones", seoDesc: "Términos y condiciones de uso.", bloques: [{ id: "t1", tipo: "texto", titulo: "Términos y condiciones", cuerpo: "Al comprar en bletia.ec aceptas estos términos. Los precios incluyen IVA. Los pedidos a medida requieren confirmación de specs antes de iniciar fabricación." }] },
    { id: "pg-privacidad", slug: "privacidad", titulo: "Política de privacidad", enNav: false, estado: "publicada", seoTitle: "Política de privacidad", seoDesc: "Cómo tratamos tus datos (LOPDP).", bloques: [{ id: "p1", tipo: "texto", titulo: "Política de privacidad", cuerpo: "Tratamos tus datos conforme a la LOPDP Ecuador. Nunca compartimos tu información con terceros y puedes ejercer tus derechos ARCO escribiendo a hola@bletia.ec." }] },
    { id: "pg-cookies", slug: "cookies", titulo: "Política de cookies", enNav: false, estado: "publicada", seoTitle: "Política de cookies", seoDesc: "Uso de cookies.", bloques: [{ id: "k1", tipo: "texto", titulo: "Política de cookies", cuerpo: "Usamos cookies necesarias, analíticas y de marketing. Puedes aceptarlas todas, solo las necesarias o configurarlas desde el banner." }] },
  ],
  posts: [
    { id: "po1", slug: "como-conservar-tu-mueble-de-madera-para-que-dure-generaciones", titulo: "Cómo conservar tu mueble de madera para que dure generaciones", categoria: "Tips", etiquetas: ["madera", "cuidado"], extracto: "Descubre las mejores formas de conservar un mueble de madera con consejos prácticos y fáciles.", img: IMG.comedor, min: 5, fecha: "2026-08-12", estado: "publicado", cuerpo: ["La durabilidad de un mueble no es azar: depende de la especie, del secado de la madera y del cuidado cotidiano. En el taller usamos roble y laurel con humedad controlada al 8%.", "Regla de oro: lejos del sol directo y de las rejillas de calefacción. La madera respira; los cambios bruscos de temperatura la agrietan.", "Cada seis meses, una pasada de cera de abeja con paño de algodón devuelve el brillo sin sellar el poro."] },
    { id: "po2", slug: "no-te-rindas-esta-es-la-mejor-manera-de-quitar-una-mancha-de-tu-sofa", titulo: "No te rindas, esta es la mejor manera de quitar una mancha de tu sofá", categoria: "Tips", etiquetas: ["tapiz", "cuidado", "sala"], extracto: "¿Tu sofá tiene una mancha que consideras imposible? Hay forma de sacarla.", img: IMG.sofa, min: 4, fecha: "2026-07-28", estado: "publicado", cuerpo: ["Primero identifica el código de limpieza de tu tapiz (W, S, WS o X) — está en la etiqueta bajo el cojín.", "Para códigos W: agua tibia con una gota de jabón neutro, paño blanco, toques sin frotar. Nunca empapes.", "Nuestros tapices antimanchas salen con agua carbonatada en los primeros 10 minutos. Después de eso, llámanos: la garantía cubre una visita."] },
    { id: "po3", slug: "50-modelos-de-mesas-de-noche-para-tu-dormitorio", titulo: "50 modelos de mesas de noche para tu dormitorio", categoria: "Decoración", etiquetas: ["dormitorio", "veladores"], extracto: "50 ideas en madera, flotantes, con gavetas y a medida, hechas a mano.", img: IMG.cama, min: 14, fecha: "2026-07-15", estado: "publicado", cuerpo: ["Flotantes para cuartos pequeños: liberan el piso y la escoba lo agradece.", "Con gaveta y nicho, la combinación que más pedimos en Cuenca: cargador escondido y libro a la vista.", "A medida: la altura correcta es la del colchón +5 cm. La hacemos exacta para tu cama."] },
    { id: "po4", slug: "tapiz-ideal-para-un-sofa-que-no-se-mancha", titulo: "El tapiz ideal para un sofá que no se mancha", categoria: "Tendencias", etiquetas: ["tapiz", "sala", "tendencias"], extracto: "Qué tapiz para un sofá que no se mancha conviene a tu sala: telas antimanchas y códigos de limpieza.", img: IMG.poltrona, min: 9, fecha: "2026-07-02", estado: "publicado", cuerpo: ["Los códigos de limpieza mandan: busca telas con tratamiento PFAS-free que repelen líquidos sin plástico al tacto.", "El bouclé sigue en tendencia, pero en hogares con niños gana el chenille de trama cerrada.", "Pide la muestra física: la pantalla miente, la luz de tu sala no."] },
    { id: "po5", slug: "cuanto-dura-un-mueble-de-madera-y-de-que-depende-su-vida-real", titulo: "Cuánto dura un mueble de madera y de qué depende su vida real", categoria: "DIY", etiquetas: ["madera", "diy"], extracto: "La durabilidad de un mueble de madera no es azar: depende de la especie, el proceso y el cuidado.", img: IMG.ropero, min: 8, fecha: "2026-06-20", estado: "publicado", cuerpo: ["Un ensamble de caja y espiga bien ejecutado supera los 50 años; uno engrapado, cinco.", "El acabado importa tanto como la madera: laca de poliuretano para uso rudo, aceite-cera para tocar y sentir.", "Nuestra garantía estructural es de 5 años porque el taller responde: si algo falla, vuelve."] },
    { id: "po6", slug: "color-para-sofa-o-juego-de-sala", titulo: "El color de tu sofá lo decide la luz, no la tendencia", categoria: "Tips", etiquetas: ["color", "sala"], extracto: "Elegir el color de tu sofá es una decisión que cambia toda la habitación.", img: IMG.sofa, min: 9, fecha: "2026-06-05", estado: "publicado", cuerpo: ["Luz norte (fría): los grises se vuelven azules; mejor cremas y camel.", "Luz sur (cálida en la Sierra): casi todo funciona; cuidado con los verdes que se vuelven oliva.", "Lleva la muestra y mírala a las 9h, 14h y 20h. Tres visitas, una decisión para diez años."] },
  ],
  productos: [
    { id: "pr1", slug: "sofa-bletia", nombre: "Sofá Bletia", precio: 1299, cat: "Sofás", img: IMG.sofa, destacado: true, novedad: true, vt: "Tapiz", vars: TAPIZ, desc: "El sofá que da nombre a la casa. Estructura de laurel, espuma D30 y el tapiz que tú elijas.", detalles: ["220 × 92 × 86 cm", "Estructura de laurel seco al 8%", "Espuma D30 de alta densidad", "Tapizado a mano en el taller"], estado: "activo" },
    { id: "pr2", slug: "sofa-miro-studio", nombre: "Sofá Miro Studio", precio: 829, cat: "Sofás", img: IMG.poltrona, destacado: true, novedad: true, vt: "Tapiz", vars: TAPIZ, desc: "Linealmente cómodo para ideas brillantes.", detalles: ["190 × 90 × 84 cm", "Estructura de laurel", "Asientos de espuma D30"], estado: "activo" },
    { id: "pr3", slug: "sofa-dela-forma", nombre: "Sofá Dela Forma", precio: 1309, cat: "Sofás", img: "", destacado: false, novedad: true, vt: "Tapiz", vars: TAPIZ, desc: "Formas orgánicas, comodidad de abrazo.", detalles: ["230 × 95 × 82 cm", "Curvas torneadas a mano"], estado: "activo" },
    { id: "pr4", slug: "sofa-baal-studio", nombre: "Sofá Baal Studio", precio: 699, cat: "Sofás", img: "", destacado: false, novedad: true, vt: "Tapiz", vars: TAPIZ, desc: "El clásico de tres puestos, sin pretensiones.", detalles: ["210 × 90 × 85 cm"], estado: "activo" },
    { id: "pr5", slug: "sillon-zoe", nombre: "Sillón Zoe", precio: 349, cat: "Sillones", img: IMG.poltrona, destacado: false, novedad: false, vt: "Tapiz", vars: TAPIZ, desc: "Un sillón para leer, pensar y quedarse.", detalles: ["88 × 90 × 102 cm", "Gira 360°"], estado: "activo" },
    { id: "pr6", slug: "mesa-de-noche-lupe", nombre: "Mesa de noche Lupe", precio: 339, cat: "Veladores", img: IMG.cama, destacado: false, novedad: false, vt: "Acabado", vars: MADERA, desc: "Con gaveta y nicho, la que más pedimos.", detalles: ["45 × 40 × 60 cm"], estado: "activo" },
    { id: "pr7", slug: "mesa-de-noche-lira", nombre: "Mesa de noche Lira", precio: 289, cat: "Veladores", img: "", destacado: false, novedad: false, vt: "Acabado", vars: MADERA, desc: "Flotante o de piso, minimalista.", detalles: ["42 × 38 × 55 cm"], estado: "activo" },
    { id: "pr8", slug: "comedor-andino", nombre: "Comedor Andino", precio: 1189, cat: "Centros", img: IMG.comedor, destacado: false, novedad: false, vt: "Acabado", vars: MADERA, desc: "Roble nacional y seis sillas tapizadas.", detalles: ["180 × 100 × 76 cm"], estado: "activo" },
    { id: "pr9", slug: "cama-king-nordica", nombre: "Cama King Nórdica", precio: 699, cat: "Piezas", img: IMG.cama, destacado: false, novedad: false, vt: "Acabado", vars: MADERA, desc: "Cabecero flotante en roble.", detalles: ["210 × 190 cm"], estado: "activo" },
    { id: "pr10", slug: "ropero-amazonia", nombre: "Ropero Amazonia", precio: 789, cat: "Piezas", img: IMG.ropero, destacado: false, novedad: false, vt: "Acabado", vars: MADERA, desc: "Seis puertas, bisagras slow-close.", detalles: ["240 × 60 × 210 cm"], estado: "activo" },
    { id: "pr11", slug: "escritorio-canar", nombre: "Escritorio Cañar", precio: 459, cat: "Centros", img: IMG.escritorio, destacado: false, novedad: false, vt: "Acabado", vars: MADERA, desc: "Nogal, pasacables y cajonera doble.", detalles: ["160 × 75 × 76 cm"], estado: "activo" },
    { id: "pr12", slug: "marco-pino-a5", nombre: "Marco Pino A5", precio: 11.99, cat: "Piezas", img: "", destacado: false, novedad: false, vt: "Acabado", vars: MADERA, desc: "Un detalle pequeño, hecho a mano.", detalles: ["A5 · pino"], estado: "activo" },
  ],
  redirects: [
    /* ejemplo vivo: cambiamos el slug de una entrada y el viejo redirige al nuevo */
    { de: "/tips/tapiz-idea-para-sofa-que-no-mancha", a: "/tendencias/tapiz-ideal-para-un-sofa-que-no-se-mancha", ts: new Date().toISOString() },
  ],
};
