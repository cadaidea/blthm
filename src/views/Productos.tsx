import { useMemo, useState } from "react";
import { buildPayLink, useStore } from "../lib/store";
import type { Product, Warehouse } from "../lib/types";
import { marginPct, money, uid } from "../lib/util";
import { Badge, Btn, Card, Drawer, Field, Icon, Input, Modal, SectionTitle, Select, Td, Th, EmptyState, CopyBtn } from "../components/ui";
import { Thumb } from "../components/Img";

const WH_LABEL: Record<Warehouse, string> = { showroom: "Showroom", bodega: "Bodega", taller: "Taller" };

export default function Productos({ initialQuery }: { initialQuery?: string }) {
  const { state, dispatch, toast } = useStore();
  const [q, setQ] = useState(initialQuery ?? "");
  const [cat, setCat] = useState("todas");
  const [status, setStatus] = useState("todos");
  const [open, setOpen] = useState<Product | null>(null);
  const [showNew, setShowNew] = useState(false);
  const [np, setNp] = useState({ name: "", category: "Sala", line: "fabricacion" as Product["line"], cost: "", price: "", min: "2", stock: "4" });

  const cats = useMemo(() => Array.from(new Set(state.products.map((p) => p.category))), [state.products]);
  const list = state.products.filter((p) => {
    const okQ = (p.name + p.sku + p.category + p.materials.join(" ")).toLowerCase().includes(q.toLowerCase());
    const okC = cat === "todas" || p.category === cat;
    const okS = status === "todos" || (status === "bajo" ? p.stock.showroom + p.stock.bodega + p.stock.taller <= p.min : p.status === status);
    return okQ && okC && okS;
  });

  const totalUnits = state.products.reduce((a, p) => a + p.stock.showroom + p.stock.bodega + p.stock.taller, 0);
  const totalValue = state.products.reduce((a, p) => a + (p.stock.showroom + p.stock.bodega + p.stock.taller) * p.cost, 0);

  const createProduct = () => {
    if (!np.name.trim() || !np.price) return toast("Completa nombre y precio", "warn");
    const p: Product = {
      id: uid(),
      sku: `${np.category.slice(0, 3).toUpperCase()}-${String(100 + state.products.length + 1)}`,
      name: np.name.trim(),
      category: np.category,
      line: np.line,
      materials: ["Por definir en ficha"],
      cost: Number(np.cost) || 0,
      price: Number(np.price),
      stock: { showroom: 0, bodega: Number(np.stock) || 0, taller: 0 },
      min: Number(np.min) || 2,
      status: "activo",
      img: "",
      mediaIds: [],
      dims: "—",
      weightKg: 0,
      leadDays: np.line === "importado" ? 40 : 15,
      createdAt: new Date().toISOString(),
    };
    dispatch({ type: "CREATE_PRODUCT", product: p });
    setShowNew(false);
    setNp({ name: "", category: "Sala", line: "fabricacion", cost: "", price: "", min: "2", stock: "4" });
    toast(`Producto ${p.sku} publicado en el PIM`);
  };

  const quickPayLink = (p: Product) => {
    const link = buildPayLink(state, Math.round(p.price * 1.15 * 100) / 100, `Venta directa · ${p.sku} ${p.name}`, "Cliente en tienda", null);
    dispatch({ type: "CREATE_PAYLINK", link });
    toast(`Link PayPhone generado por ${money(link.amount)} — cópialo en Cobros`);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3 anim-up">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">PIM · información maestra de producto</div>
          <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Catálogo & fichas técnicas</h1>
        </div>
        <div className="flex items-center gap-2 text-[12px] text-mut">
          <span className="font-mono">{state.products.length} SKUs</span> · <span className="font-mono">{totalUnits} und</span> · <span className="font-mono">{money(totalValue, false)} en costo</span>
        </div>
      </div>

      <Card pad={false} className="anim-up">
        <div className="flex flex-wrap items-center gap-2 p-3 border-b border-line">
          <div className="relative flex-1 min-w-[200px]">
            <Icon name="search" size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-fog" />
            <Input placeholder="Buscar por nombre, SKU, material…" value={q} onChange={(e) => setQ(e.target.value)} className="pl-8" />
          </div>
          <Select value={cat} onChange={(e) => setCat(e.target.value)} className="w-auto">
            <option value="todas">Todas las categorías</option>
            {cats.map((c) => <option key={c} value={c}>{c}</option>)}
          </Select>
          <Select value={status} onChange={(e) => setStatus(e.target.value)} className="w-auto">
            <option value="todos">Todos los estados</option>
            <option value="activo">Activos</option>
            <option value="bajo">Bajo mínimo</option>
            <option value="agotado">Agotados</option>
          </Select>
          <Btn icon="plus" onClick={() => setShowNew(true)}>Nuevo producto</Btn>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-[13px] min-w-[860px]">
            <thead className="bg-ink/3 border-b border-line">
              <tr>
                <Th>Producto</Th><Th>Categoría</Th><Th right>Costo</Th><Th right>PVP +IVA</Th><Th right>Margen</Th>
                <Th>Stock (S/B/T)</Th><Th>Estado</Th><Th right>Acciones</Th>
              </tr>
            </thead>
            <tbody>
              {list.map((p) => {
                const total = p.stock.showroom + p.stock.bodega + p.stock.taller;
                const low = total <= p.min;
                return (
                  <tr key={p.id} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors cursor-pointer" onClick={() => setOpen(p)}>
                    <Td>
                      <div className="flex items-center gap-2.5">
                        <Thumb src={p.img} alt={p.name} className="w-11 h-11 rounded-lg border border-line" />
                        <div>
                          <div className="font-semibold text-ink leading-tight">{p.name}</div>
                          <div className="font-mono text-[10.5px] text-fog">{p.sku} · {p.line === "fabricacion" ? "fabricación propia" : p.line === "importado" ? "importado" : "compra local"}</div>
                        </div>
                      </div>
                    </Td>
                    <Td><Badge tone="fog">{p.category}</Badge></Td>
                    <Td right className="num font-mono text-[12.5px] text-mut">{money(p.cost)}</Td>
                    <Td right className="num font-mono text-[12.5px] font-semibold text-ink">{money(p.price)}</Td>
                    <Td right><Badge tone={marginPct(p.cost, p.price) >= 40 ? "moss" : marginPct(p.cost, p.price) >= 25 ? "oak" : "brick"}>{marginPct(p.cost, p.price)}%</Badge></Td>
                    <Td>
                      <div className="font-mono text-[12px] text-ink num">{p.stock.showroom} / {p.stock.bodega} / {p.stock.taller}</div>
                      {low && <div className="text-[10px] text-brick font-semibold flex items-center gap-1"><Icon name="alert" size={10} />bajo mínimo ({p.min})</div>}
                    </Td>
                    <Td><Badge tone={low ? "brick" : p.status === "activo" ? "pine" : "fog"} dot>{low ? "reponer" : p.status}</Badge></Td>
                    <Td right>
                      <div className="flex justify-end gap-1" onClick={(e) => e.stopPropagation()}>
                        <Btn size="sm" variant="outline" icon="qr" onClick={() => quickPayLink(p)}>Cobrar</Btn>
                        <Btn size="sm" variant="ghost" icon="arrow" onClick={() => setOpen(p)}>Ficha</Btn>
                      </div>
                    </Td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {list.length === 0 && <EmptyState icon="box" title="Sin resultados" sub="Ajusta la búsqueda o los filtros para encontrar el SKU." />}
        </div>
      </Card>

      {/* ficha drawer */}
      <Drawer open={!!open} onClose={() => setOpen(null)} kicker={`Ficha PIM · ${open?.sku ?? ""}`} title={open?.name ?? ""}>
        {open && (() => {
          const history = state.orders.filter((o) => o.items.some((i) => i.productId === open.id));
          return (
            <div className="space-y-4">
              <Thumb src={open.img} alt={open.name} className="w-full h-44 rounded-xl border border-line" />
              <div className="grid grid-cols-3 gap-2 text-center">
                {(["showroom", "bodega", "taller"] as Warehouse[]).map((w) => (
                  <div key={w} className="rounded-lg border border-line p-2.5">
                    <div className="font-display font-extrabold text-[20px] text-ink num">{open.stock[w]}</div>
                    <div className="text-[10px] uppercase tracking-wider text-mut font-bold">{WH_LABEL[w]}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-lg bg-pinel/50 border border-pine/15 p-3 flex items-center justify-between">
                <div className="text-[12px] text-pined">Margen bruto sobre PVP</div>
                <div className="font-display font-extrabold text-[18px] text-pine num">{marginPct(open.cost, open.price)}%</div>
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-mut mb-1.5">Materiales</div>
                <div className="flex flex-wrap gap-1.5">
                  {open.materials.map((m) => <Badge key={m} tone="oak">{m}</Badge>)}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[12.5px]">
                <div className="rounded-lg border border-line p-2.5"><div className="text-fog text-[10.5px] uppercase font-bold">Dimensiones</div>{open.dims}</div>
                <div className="rounded-lg border border-line p-2.5"><div className="text-fog text-[10.5px] uppercase font-bold">Peso</div>{open.weightKg} kg</div>
                <div className="rounded-lg border border-line p-2.5"><div className="text-fog text-[10.5px] uppercase font-bold">Lead time</div>{open.leadDays} días</div>
                <div className="rounded-lg border border-line p-2.5"><div className="text-fog text-[10.5px] uppercase font-bold">Costo / PVP</div><span className="font-mono">{money(open.cost)} → {money(open.price)}</span></div>
              </div>
              <div>
                <SectionTitle kicker="OMS" title={`Historial de ventas (${history.length})`} />
                <div className="space-y-1.5">
                  {history.slice(0, 4).map((o) => (
                    <div key={o.id} className="flex items-center justify-between text-[12.5px] rounded-lg border border-line px-3 py-2">
                      <span className="font-mono text-mut">{o.code}</span>
                      <span className="text-ink">{o.customer}</span>
                      <Badge tone={o.status === "entregado" ? "pine" : "steel"}>{o.status}</Badge>
                    </div>
                  ))}
                  {history.length === 0 && <div className="text-[12px] text-mut">Aún sin pedidos con este SKU.</div>}
                </div>
              </div>
              <div className="flex gap-2 pt-1">
                <CopyBtn text={`${state.settings.linkBase}/cat/${open.sku}`} label="Copiar link de catálogo" size="md" />
                <Btn variant="oak" icon="qr" onClick={() => { quickPayLink(open); }} className="flex-1">Link de cobro directo</Btn>
              </div>
            </div>
          );
        })()}
      </Drawer>

      {/* new product */}
      <Modal open={showNew} onClose={() => setShowNew(false)} kicker="PIM · alta de SKU" title="Nuevo producto">
        <div className="space-y-3">
          <Field label="Nombre comercial"><Input value={np.name} onChange={(e) => setNp({ ...np, name: e.target.value })} placeholder="Ej: Mesa de Centro Mármol Cotopaxi" /></Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Categoría">
              <Select value={np.category} onChange={(e) => setNp({ ...np, category: e.target.value })}>
                {["Sala", "Comedor", "Dormitorio", "Oficina", "Exterior"].map((c) => <option key={c}>{c}</option>)}
              </Select>
            </Field>
            <Field label="Origen">
              <Select value={np.line} onChange={(e) => setNp({ ...np, line: e.target.value as Product["line"] })}>
                <option value="fabricacion">Fabricación propia</option>
                <option value="compra_local">Compra local</option>
                <option value="importado">Importado</option>
              </Select>
            </Field>
            <Field label="Costo USD"><Input type="number" value={np.cost} onChange={(e) => setNp({ ...np, cost: e.target.value })} placeholder="0.00" /></Field>
            <Field label="PVP (sin IVA)"><Input type="number" value={np.price} onChange={(e) => setNp({ ...np, price: e.target.value })} placeholder="0.00" /></Field>
            <Field label="Stock inicial (bodega)"><Input type="number" value={np.stock} onChange={(e) => setNp({ ...np, stock: e.target.value })} /></Field>
            <Field label="Mínimo de reposición"><Input type="number" value={np.min} onChange={(e) => setNp({ ...np, min: e.target.value })} /></Field>
          </div>
          {np.price && np.cost && (
            <div className="rounded-lg bg-oakl/70 border border-oak/25 px-3 py-2 text-[12px] text-oakd anim-pop">
              PVP con IVA 15%: <b className="font-mono">{money(Number(np.price) * 1.15)}</b> · margen <b>{marginPct(Number(np.cost), Number(np.price))}%</b>
            </div>
          )}
          <div className="flex justify-end gap-2 pt-1">
            <Btn variant="ghost" onClick={() => setShowNew(false)}>Cancelar</Btn>
            <Btn icon="check" onClick={createProduct}>Publicar en PIM</Btn>
          </div>
        </div>
      </Modal>
    </div>
  );
}
