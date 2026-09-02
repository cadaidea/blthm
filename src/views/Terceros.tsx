import { useState } from "react";
import { useStore } from "../lib/store";
import type { Customer, Supplier } from "../lib/types";
import { fmtDate, initials, money, uid } from "../lib/util";
import { Badge, Btn, Card, Drawer, Field, Icon, Input, SectionTitle, Select, Tabs, Td, Th } from "../components/ui";

const SEG_TONE: Record<Customer["segment"], "pine" | "oak" | "steel" | "moss"> = {
  hogar: "pine", corporativo: "steel", distribuidor: "oak", arquitectura: "moss",
};
const KIND_META: Record<Supplier["kind"], { label: string; tone: "pine" | "oak" | "steel" }> = {
  insumos: { label: "Insumos / MP", tone: "pine" },
  muebles: { label: "Muebles", tone: "oak" },
  transporte: { label: "Transporte", tone: "steel" },
};

export default function Terceros() {
  const { state, dispatch, toast } = useStore();
  const [tab, setTab] = useState<"clientes" | "proveedores">("clientes");
  const [openC, setOpenC] = useState<Customer | null>(null);
  const [showSup, setShowSup] = useState(false);
  const [ns, setNs] = useState({ name: "", kind: "insumos" as Supplier["kind"], contact: "", city: "Quito", leadDays: "7", items: "" });

  const addSupplier = () => {
    if (!ns.name.trim()) return toast("Nombre del proveedor obligatorio", "warn");
    const sup: Supplier = {
      id: uid(), name: ns.name.trim(), kind: ns.kind, contact: ns.contact || "—",
      phone: "—", email: "—", city: ns.city, rating: 4.0, leadDays: Number(ns.leadDays) || 7,
      balance: 0, items: ns.items || "Por catalogar", active: true,
    };
    dispatch({ type: "ADD_SUPPLIER", supplier: sup });
    setShowSup(false);
    setNs({ name: "", kind: "insumos", contact: "", city: "Quito", leadDays: "7", items: "" });
    toast(`${sup.name} agregado al SRM`);
  };

  const cxp = state.suppliers.reduce((a, s) => a + s.balance, 0);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3 anim-up">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">CRM + SRM · relaciones del negocio</div>
          <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Clientes & proveedores</h1>
        </div>
        <Btn icon="plus" onClick={() => setShowSup(true)}>Nuevo proveedor</Btn>
      </div>

      <Tabs
        tabs={[{ id: "clientes", label: `Clientes (${state.customers.length})` }, { id: "proveedores", label: `Proveedores (${state.suppliers.length})` }]}
        value={tab} onChange={(t) => setTab(t as typeof tab)}
      />

      {tab === "clientes" && (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3 stagger">
          {state.customers.map((c) => (
            <button key={c.id} onClick={() => setOpenC(c)} className="bg-card border border-line rounded-xl p-4 text-left hover:shadow-md hover:-translate-y-px hover:border-pine/40 transition-all">
              <div className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-xl bg-pined text-oakl grid place-items-center font-display font-bold text-[13px] shrink-0">{initials(c.name)}</span>
                <div className="min-w-0">
                  <div className="font-semibold text-[13.5px] text-ink leading-tight truncate">{c.name}</div>
                  <div className="font-mono text-[10.5px] text-fog">{c.code} · {c.type === "juridica" ? "RUC" : "ced."} {c.doc}</div>
                </div>
                <Badge tone={SEG_TONE[c.segment]} className="ml-auto shrink-0">{c.segment}</Badge>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                <div className="rounded-lg bg-ink/4 py-1.5"><div className="font-mono font-bold text-[13px] text-ink num">{c.orders}</div><div className="text-[8.5px] uppercase tracking-wider text-fog font-bold">pedidos</div></div>
                <div className="rounded-lg bg-ink/4 py-1.5"><div className="font-mono font-bold text-[13px] text-ink num">{money(c.total, false)}</div><div className="text-[8.5px] uppercase tracking-wider text-fog font-bold">comprado</div></div>
                <div className={`rounded-lg py-1.5 ${c.credit > 0 ? "bg-oakl/70" : "bg-ink/4"}`}><div className={`font-mono font-bold text-[13px] num ${c.credit > 0 ? "text-oakd" : "text-ink"}`}>{money(c.credit, false)}</div><div className="text-[8.5px] uppercase tracking-wider text-fog font-bold">crédito</div></div>
              </div>
              <div className="flex items-center gap-1.5 mt-2.5 text-[11px] text-mut"><Icon name="pin" size={11} className="text-fog" />{c.city} · cliente desde {fmtDate(c.since)}</div>
            </button>
          ))}
        </div>
      )}

      {tab === "proveedores" && (
        <>
          <div className="flex items-center gap-3 anim-up">
            <div className="rounded-xl bg-card border border-line px-4 py-2.5 flex items-center gap-2.5">
              <Icon name="clock" size={15} className="text-oakd" />
              <span className="text-[12.5px] text-mut">Cuentas por pagar a proveedores: <b className="font-mono text-ink num">{money(cxp)}</b></span>
            </div>
          </div>
          <Card pad={false} className="anim-up">
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] min-w-[820px]">
                <thead className="bg-ink/3 border-b border-line">
                  <tr><Th>Proveedor</Th><Th>Tipo</Th><Th>Contacto</Th><Th right>Rating</Th><Th right>Lead</Th><Th right>CxP</Th><Th>Catálogo</Th></tr>
                </thead>
                <tbody>
                  {state.suppliers.map((s) => (
                    <tr key={s.id} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors">
                      <Td>
                        <div className="font-semibold text-ink">{s.name}</div>
                        <div className="text-[11px] text-mut">{s.city} · {s.phone}</div>
                      </Td>
                      <Td><Badge tone={KIND_META[s.kind].tone}>{KIND_META[s.kind].label}</Badge></Td>
                      <Td><div className="text-ink">{s.contact}</div><div className="text-[10.5px] font-mono text-fog">{s.email}</div></Td>
                      <Td right><span className="font-bold text-oakd num">★ {s.rating}</span></Td>
                      <Td right className="font-mono text-mut num">{s.leadDays} d</Td>
                      <Td right><span className={`font-mono num ${s.balance > 0 ? "text-oakd font-semibold" : "text-[#41621f]"}`}>{s.balance > 0 ? money(s.balance) : "al día"}</span></Td>
                      <Td className="text-mut text-[12px]">{s.items}</Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </>
      )}

      {/* ficha cliente */}
      <Drawer open={!!openC} onClose={() => setOpenC(null)} kicker={`CRM · ${openC?.code ?? ""}`} title={openC?.name ?? ""}>
        {openC && (() => {
          const hist = state.orders.filter((o) => o.customerId === openC.id);
          return (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-12 h-12 rounded-xl bg-pined text-oakl grid place-items-center font-display font-bold text-[15px]">{initials(openC.name)}</span>
                <div>
                  <Badge tone={SEG_TONE[openC.segment]}>{openC.segment}</Badge>
                  <div className="font-mono text-[11px] text-fog mt-1">{openC.type === "juridica" ? "RUC" : "Cédula"} {openC.doc} · {openC.city}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[12.5px]">
                <div className="rounded-lg border border-line p-2.5 flex items-center gap-2"><Icon name="phone" size={13} className="text-pine" />{openC.phone}</div>
                <div className="rounded-lg border border-line p-2.5 flex items-center gap-2 truncate"><Icon name="mail" size={13} className="text-pine" />{openC.email}</div>
              </div>
              <div className="rounded-lg bg-oakl/60 border border-oak/25 p-3 text-[12px] text-oakd leading-relaxed">✎ {openC.notes}</div>
              <div>
                <SectionTitle kicker="OMS" title={`Historial (${hist.length} pedidos)`} />
                <div className="space-y-1.5">
                  {hist.map((o) => (
                    <div key={o.id} className="flex items-center justify-between rounded-lg border border-line px-3 py-2 text-[12.5px]">
                      <span className="font-mono text-mut">{o.code}</span>
                      <span className="text-ink">{fmtDate(o.createdAt)}</span>
                      <Badge tone={o.status === "entregado" ? "moss" : o.status === "anulado" || o.status === "cancelado" ? "brick" : "steel"}>{o.status.replace("_", " ")}</Badge>
                      <span className="font-mono num text-ink">{money(o.total)}</span>
                    </div>
                  ))}
                  {hist.length === 0 && <div className="text-[12px] text-mut">Sin pedidos registrados.</div>}
                </div>
              </div>
            </div>
          );
        })()}
      </Drawer>

      {/* nuevo proveedor */}
      <Drawer open={showSup} onClose={() => setShowSup(false)} kicker="SRM · alta" title="Nuevo proveedor">
        <div className="space-y-3">
          <Field label="Razón social"><Input value={ns.name} onChange={(e) => setNs({ ...ns, name: e.target.value })} placeholder="Ej: Herrajes y Corredizas Cuenca" /></Field>
          <Field label="Tipo">
            <Select value={ns.kind} onChange={(e) => setNs({ ...ns, kind: e.target.value as Supplier["kind"] })}>
              <option value="insumos">Insumos / materia prima</option>
              <option value="muebles">Muebles (producto terminado)</option>
              <option value="transporte">Transporte / fletes</option>
            </Select>
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Contacto"><Input value={ns.contact} onChange={(e) => setNs({ ...ns, contact: e.target.value })} /></Field>
            <Field label="Ciudad"><Input value={ns.city} onChange={(e) => setNs({ ...ns, city: e.target.value })} /></Field>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Lead time (días)"><Input type="number" value={ns.leadDays} onChange={(e) => setNs({ ...ns, leadDays: e.target.value })} /></Field>
          </div>
          <Field label="Qué provee"><Input value={ns.items} onChange={(e) => setNs({ ...ns, items: e.target.value })} placeholder="Ej: bisagras, correderas, tornillería" /></Field>
          <Btn icon="check" className="w-full" onClick={addSupplier}>Guardar proveedor</Btn>
        </div>
      </Drawer>
    </div>
  );
}
