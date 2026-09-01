export type View =
  | "dashboard" | "pim" | "oms" | "crm" | "taller" | "bom" | "logistica"
  | "cobros" | "dam" | "contabilidad" | "accesos" | "seguridad" | "ajustes";

export type Warehouse = "showroom" | "bodega" | "taller";

/* ── BLETIA: dos rutas de venta ─────────────────────────────
   venta  = producto en stock, entrega inmediata
   pedido = bajo pedido / con specs de personalización        */
export type OrderKind = "venta" | "pedido";

/* Máquina de estados real BLETIA — EstadoPedidoErp::ESTADOS (verificado del código fuente) */
export type OrderStatus =
  | "borrador" | "pendiente" | "por_aprobar" | "aprobado" | "confirmado"
  | "enviado_proveedor" | "en_fabricacion" | "en_produccion" | "listo_proveedor"
  | "en_bodega" | "listo_despacho" | "despachado" | "entregado"
  | "anulado" | "cancelado";

export type PayStatus = "pendiente" | "parcial" | "pagado";
export type Channel = "tienda" | "web" | "link_pago" | "whatsapp";

export interface OrderSpec {
  tapiz: string;
  tapizSec: string;
  cojines: string;
  lacado: string;
  notas: string;
  fotos: { campo: string; label: string }[]; // fotos por campo (LinksErp)
}

export interface TraceEntry { ts: string; user: string; msg: string; }
export interface Recibo { id: string; code: string; date: string; amount: number; method: string; note: string; }

export interface OrderItem { productId: string; sku: string; name: string; qty: number; price: number; spec?: OrderSpec | null; }

export interface Order {
  id: string; code: string; kind: OrderKind;
  customerId: string; customer: string;
  items: OrderItem[];
  subtotal: number; iva: number; total: number;
  status: OrderStatus; channel: Channel; payment: PayStatus;
  transportId: string | null; bultos: number;
  createdAt: string; eta: string; city: string; workOrderId: string | null;
  trace: TraceEntry[]; recibos: Recibo[];
  confirmToken: string | null; confirmedAt: string | null; // link único de confirmación con fotos
}

export interface Movement {
  id: string; ts: string; type: "ingreso" | "egreso" | "transferencia" | "ajuste";
  warehouse: Warehouse; productId: string; sku: string; productName: string;
  qty: number; ref: string; user: string;
}

export interface Product {
  id: string; sku: string; name: string; category: string;
  line: "fabricacion" | "compra_local" | "importado";
  materials: string[]; cost: number; price: number;
  stock: Record<Warehouse, number>; min: number;
  status: "activo" | "inactivo" | "agotado";
  img: string; mediaIds: string[];
  dims: string; weightKg: number; leadDays: number; createdAt: string;
}

export interface Customer {
  id: string; code: string; name: string; doc: string; type: "natural" | "juridica";
  phone: string; email: string; city: string; segment: string;
  orders: number; total: number; credit: number; since: string; notes: string;
}

export type SupplierKind = "muebles" | "insumos" | "transporte";
export interface Supplier {
  id: string; name: string; kind: SupplierKind; contact: string; phone: string; email: string;
  city: string; rating: number; leadDays: number; balance: number; items: string; active: boolean;
}

export type WoStatus = "planificada" | "corte" | "ensamblaje" | "acabado" | "qa" | "terminada";
export interface WorkOrder {
  id: string; code: string; productId: string; productName: string; qty: number;
  status: WoStatus; start: string; due: string; assignedTo: string; progress: number;
  orderId: string | null; materials: { name: string; qty: string; cost: number }[]; laborCost: number;
}

export type LinkStatus = "pendiente" | "pagado" | "expirado" | "anulado";
export interface PayLink {
  id: string; token: string; concept: string; orderId: string | null; amount: number;
  customerName: string; createdAt: string; expiresAt: string; status: LinkStatus;
  method: string | null; authCode: string | null; last4: string | null;
}

export type AccessRole = "vendedor" | "bodega" | "contabilidad" | "taller" | "cliente" | "gerencia";
export interface AccessLink {
  id: string; token: string; label: string; role: AccessRole; scope: string;
  createdAt: string; expiresAt: string; maxUses: number; uses: number;
  status: "activo" | "usado" | "expirado" | "revocado";
}

export interface MediaAsset {
  id: string; name: string; kind: "foto" | "video" | "plano" | "render"; tag: string;
  size: string; src: string; usage: string[]; uploadedAt: string;
}

export interface JournalEntry { id: string; date: string; doc: string; account: string; detail: string; debit: number; credit: number; }

export interface Invoice {
  id: string; number: string; auth: string; customerId: string; customer: string;
  date: string; base: number; iva: number; total: number;
  status: "emitida" | "pagada" | "por_cobrar" | "anulada"; orderId: string | null;
}

export interface NotaCredito {
  id: string; number: string; auth: string; invoiceNumber: string; customer: string;
  date: string; motivo: string; amount: number;
}

/* ── Logística (DespachoErp) ── */
export interface GuiaRemision { numero: string; auth: string; xml: string; }
export interface Despacho {
  id: string; code: string; orderId: string; orderCode: string; customer: string; city: string;
  transportId: string; placa: string; conductor: string; motivo: "venta" | "traslado";
  fecha: string; ruta: string; bultos: number; pesoKg: number;
  guia: GuiaRemision | null;
  estado: "preparacion" | "en_ruta" | "entregado";
}

/* ── BOM / Materia prima (Materiales.php) ── */
export interface RawMaterial {
  id: string; code: string; name: string; unit: string; stock: number; min: number;
  costUnit: number; supplierId: string;
}
export interface Bom { productId: string; lines: { materialId: string; qty: number; unit: string }[]; laborMin: number; }

export interface EventItem {
  id: string; ts: number;
  type: "venta" | "stock" | "pago" | "web" | "taller" | "factura" | "link" | "logistica" | "sistema";
  msg: string;
}

export interface TeamMember { id: string; name: string; role: AccessRole; email: string; online: boolean; lastActive: string; }

export interface Settings {
  company: { name: string; ruc: string; address: string; phone: string; email: string };
  payphone: { mode: "sandbox" | "produccion"; shopId: string; terminalId: string; token: string };
  linkBase: string;
  sequence: { invoice: number; order: number; link: number; recibo: number; despacho: number; guia: number; nc: number };
}

export interface Session { events: number; salesToday: number; peakEps: number; startedAt: number; }

export interface AppState {
  hydrated: boolean;
  products: Product[]; customers: Customer[]; suppliers: Supplier[];
  orders: Order[]; movements: Movement[]; workOrders: WorkOrder[];
  payLinks: PayLink[]; accessLinks: AccessLink[]; media: MediaAsset[];
  journal: JournalEntry[]; invoices: Invoice[]; notas: NotaCredito[];
  despachos: Despacho[]; materials: RawMaterial[]; boms: Bom[];
  events: EventItem[]; team: TeamMember[]; settings: Settings; session: Session;
}
