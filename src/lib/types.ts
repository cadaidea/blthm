export type View =
  | "dashboard" | "pim" | "oms" | "crm" | "taller"
  | "cobros" | "dam" | "contabilidad" | "accesos" | "ajustes";

export type Warehouse = "showroom" | "bodega" | "taller";

export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  line: "fabricacion" | "importado" | "compra_local";
  materials: string[];
  cost: number;
  price: number;
  stock: Record<Warehouse, number>;
  min: number;
  status: "activo" | "agotado" | "descontinuado";
  img: string;
  mediaIds: string[];
  dims: string;
  weightKg: number;
  leadDays: number;
  createdAt: string;
}

export interface Customer {
  id: string;
  code: string;
  name: string;
  doc: string;
  type: "natural" | "juridica";
  phone: string;
  email: string;
  city: string;
  segment: "hogar" | "corporativo" | "distribuidor" | "arquitectura";
  orders: number;
  total: number;
  credit: number;
  since: string;
  notes: string;
}

export interface Supplier {
  id: string;
  name: string;
  kind: "muebles" | "insumos" | "transporte";
  contact: string;
  phone: string;
  email: string;
  city: string;
  rating: number;
  leadDays: number;
  balance: number;
  items: string;
  active: boolean;
}

export type OrderStatus = "nuevo" | "confirmado" | "fabricacion" | "listo" | "despacho" | "entregado" | "anulado";

export interface OrderItem {
  productId: string;
  sku: string;
  name: string;
  qty: number;
  price: number;
}

export interface Order {
  id: string;
  code: string;
  customerId: string;
  customer: string;
  items: OrderItem[];
  subtotal: number;
  iva: number;
  total: number;
  status: OrderStatus;
  channel: "tienda" | "web" | "link_pago" | "whatsapp";
  payment: "pendiente" | "parcial" | "pagado";
  transportId: string | null;
  createdAt: string;
  eta: string;
  city: string;
  workOrderId: string | null;
}

export interface Movement {
  id: string;
  ts: string;
  type: "ingreso" | "egreso" | "transferencia" | "ajuste";
  warehouse: Warehouse;
  productId: string;
  sku: string;
  productName: string;
  qty: number;
  ref: string;
  user: string;
}

export type WoStatus = "planificada" | "corte" | "ensamblaje" | "acabado" | "qa" | "terminada";

export interface WorkOrder {
  id: string;
  code: string;
  productId: string;
  productName: string;
  qty: number;
  status: WoStatus;
  start: string;
  due: string;
  assignedTo: string;
  progress: number;
  orderId: string | null;
  materials: { name: string; qty: string; cost: number }[];
  laborCost: number;
}

export interface PayLink {
  id: string;
  token: string;
  concept: string;
  orderId: string | null;
  amount: number;
  customerName: string;
  createdAt: string;
  expiresAt: string;
  status: "pendiente" | "pagado" | "expirado" | "anulado";
  method: string | null;
  authCode: string | null;
  last4: string | null;
}

export type AccessRole = "vendedor" | "bodega" | "contabilidad" | "taller" | "cliente" | "gerencia";

export interface AccessLink {
  id: string;
  token: string;
  label: string;
  role: AccessRole;
  scope: string;
  createdAt: string;
  expiresAt: string;
  maxUses: number;
  uses: number;
  status: "activo" | "usado" | "revocado" | "expirado";
}

export interface MediaAsset {
  id: string;
  name: string;
  kind: "foto" | "render" | "plano";
  tag: string;
  size: string;
  src: string;
  usage: string[];
  uploadedAt: string;
}

export interface JournalEntry {
  id: string;
  date: string;
  doc: string;
  account: string;
  detail: string;
  debit: number;
  credit: number;
}

export interface Invoice {
  id: string;
  number: string;
  auth: string;
  customerId: string;
  customer: string;
  date: string;
  base: number;
  iva: number;
  total: number;
  status: "emitida" | "pagada" | "por_cobrar" | "anulada";
  orderId: string | null;
}

export interface EventItem {
  id: string;
  ts: number;
  type: "venta" | "stock" | "pago" | "web" | "taller" | "factura" | "sistema" | "link";
  msg: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: AccessRole;
  email: string;
  online: boolean;
  lastActive: string;
}

export interface Settings {
  company: { name: string; ruc: string; address: string; phone: string; email: string };
  payphone: { mode: "sandbox" | "produccion"; shopId: string; terminalId: string; token: string };
  linkBase: string;
  sequence: { invoice: number; order: number; link: number };
}

export interface AppState {
  hydrated: boolean;
  products: Product[];
  customers: Customer[];
  suppliers: Supplier[];
  orders: Order[];
  movements: Movement[];
  workOrders: WorkOrder[];
  payLinks: PayLink[];
  accessLinks: AccessLink[];
  media: MediaAsset[];
  journal: JournalEntry[];
  invoices: Invoice[];
  events: EventItem[];
  team: TeamMember[];
  settings: Settings;
  session: { events: number; salesToday: number; peakEps: number; startedAt: number };
}
