import { useState } from "react";
import { useStore } from "../lib/store";
import type { Customer, Supplier } from "../lib/types";
import { daysAgoIso, fmtDate, initials, money, uid } from "../lib/util";
import { Badge, Btn, Card, Drawer, Field, Icon, Input, Modal, SectionTitle, Select, Tabs, Td, Th, Tone } from "../components/ui";

const SEG_TONE: Record<Customer["segment"], Tone> = { hogar: "pine", corporativo: "steel", distribuidor: "oak", arquitectura: "moss" };
const KIND_LABEL: Record<Supplier["kind"], string> = { muebles: "Proveedor de muebles", insumos: "Insumos & materia prima", transporte: "Transporte & fletes" };

export default function Terceros() {
  const { state, dispatch, toast } = useStore();
  const [tab, setTab] = useState("clientes");
  const [kindF, setKindF] = useState("todos");
  const [openC, setOpenC] = useState<Customer | null>(null);
  const [showC, setShowC] = useState(false);
  const [showS, setShowS] = useState(false);
  const [nc, setNc] = useState({ name: "", doc: "", phone: "", email: "", city: "Quito", segment: "hogar" as Customer["segment"], notes: "" });
  const [ns, setNs] = useState({ name: "", kind: "insumos" as Supplier["kind"], contact: "", phone: "", city: "Quito", items: "" });

  const addCustomer = () => {
    if (!nc.name.trim()) return toast("Escribe el nombre del cliente", "warn");
    dispatch({ type: "ADD_CUSTOMER", customer: { id: uid(), code: `CL-0${160 + state.customers.length}`, name: nc.name.trim(), doc: nc.doc || "—", type: nc.doc.length === 13 ? "juridica" : "natural", phone: nc.phone, email: nc.email, city: nc.city, segment: nc.segment, orders: 0, total: 0, credit: 0, since: daysAgoIso(0), notes: nc.notes } });
    setShowC(false);
    setNc({ name: "", doc: "", phone: "", email: "", city: "Quito", segment: "hogar", notes: "" });
    toast("Cliente creado en el CRM");
  };

  const addSupplier = () => {
    if (!ns.name.trim()) return toast("Escribe la razón social", "warn");
    dispatch({ type: "ADD_SUPPLIER", supplier: { id: uid(), name: ns.name.trim(), kind: ns.kind, contact: ns.contact, phone: ns.phone, email: "", city: ns.city, rating: 4, leadDays: 7, balance: 0, items: ns.items, active: true } });
    setShowS(false);
    setNs({ name: "", kind: "insumos", contact: "", phone: "", city: "Quito", items: "" });
    toast("Proveedor registrado");
  };

  const sups = state.suppliers.filter((s) => kindF === "todos" || s.kind === kindF);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3 anim-up">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">CRM · SRM</div>
          <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Clientes, proveedores y transporte</h1>
        </div>
        <Btn icon="plus" onClick={() => (tab === "clientes" ? setShowC(true) : setShowS(true))}>{tab === "clientes" ? "Nuevo cliente" : "Nuevo proveedor"}</Btn>
      </div>

      <Tabs value={tab} onChange={setTab} tabs={[
        { id: "clientes", label: "Clientes", icon: "users", count: state.customers.length },
        { id: "proveedores", label: "Proveedores", icon: "truck", count: state.suppliers.length },
      ]} />

      {tab === "clientes" && (
        <Card pad={false} className="anim-up">
          <div className="overflow-x-auto">
            <table className="w-full text-[13px] min-w-[780px]">
              <thead className="bg-ink/3 border-b border-line">
                <tr><Th>Cliente</Th><Th>Ciudad</Th><Th>Segmento</Th><Th right>Pedidos</Th><Th right>Facturado</Th><Th right>Crédito usado</Th><Th>Cliente desde</Th></tr>
              </thead>
              <tbody>
                {state.customers.map((c) => (
                  <tr key={c.id} onClick={() => setOpenC(c)} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors cursor-pointer">
                    <Td>
                      <div className="flex items-center gap-2.5">
                        <span className="w-9 h-9 rounded-lg bg-ink text-paper grid place-items-center font-display font-bold text-[12px]">{initials(c.name)}</span>
                        <div>
                          <div className="font-semibold text-ink leading-tight">{c.name}</div>
                          <div className="font-mono text-[10.5px] text-fog">{c.code} · {c.type === "juridica" ? "RUC" : "CI"} {c.doc}</div>
                        </div>
                      </div>
                    </Td>
                    <Td className="text-mut">{c.city}</Td>
                    <Td><Badge tone={SEG_TONE[c.segment]}>{c.segment}</Badge></Td>
                    <Td right className="num font-mono">{c.orders}</Td>
                    <Td right className="num font-mono font-semibold">{money(c.total)}</Td>
                    <Td right>{c.credit > 0 ? <Badge tone="oak">{money(c.credit, false)}</Badge> : <span className="text-fog text-[12px]">—</span>}</Td>
                    <Td className="text-mut">{fmtDate(c.since)}</Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {tab === "proveedores" && (
        <>
          <div className="flex gap-2 flex-wrap anim-up">
            {["todos", "muebles", "insumos", "transporte"].map((k) => (
              <button key={k} onClick={() => setKindF(k)} className={`px-3 py-1.5 rounded-lg border text-[12px] font-semibold transition-all ${kindF === k ? "bg-ink text-paper border-ink" : "bg-card border-line2 text-mut hover:text-ink"}`}>
                {k === "todos" ? "Todos" : KIND_LABEL[k as Supplier["kind"]]}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3 stagger">
            {sups.map((s) => (
              <Card key={s.id} className="hover:-translate-y-0.5 hover:shadow-md transition-all">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className={`w-10 h-10 rounded-lg grid place-items-center ${s.kind === "transporte" ? "bg-steell text-steel" : s.kind === "muebles" ? "bg-oakl text-oakd" : "bg-pinel text-pine"}`}>
                      <Icon name={s.kind === "transporte" ? "truck" : s.kind === "muebles" ? "box" : "saw"} size={18} />
                    </span>
                    <div className="min-w-0">
                      <div className="font-semibold text-ink leading-tight truncate">{s.name}</div>
                      <div className="text-[11px] text-mut">{s.city} · {s.contact}</div>
                    </div>
                  </div>
                  <Badge tone={s.kind === "transporte" ? "steel" : s.kind === "muebles" ? "oak" : "pine"}>{s.kind}</Badge>
                </div>
                <div className="text-[12px] text-mut mt-2.5">{s.items}</div>
                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-line text-[12px]">
                  <span className="flex items-center gap-1 text-oak"><Icon name="star" size={13} className="fill-current" /><b className="num text-ink">{s.rating}</b></span>
                  <span className="text-mut">lead <b className="text-ink num">{s.leadDays}d</b></span>
                  <span className="ml-auto">{s.balance > 0 ? <Badge tone="brick">CxP {money(s.balance, false)}</Badge> : <Badge tone="moss">al día</Badge>}</span>
                </div>
              </Card>
            ))}
          </div>
        </>
      )}

      {/* customer drawer */}
      <Drawer open={!!openC} onClose={() => setOpenC(null)} kicker={`CRM · ${openC?.code ?? ""}`} title={openC?.name ?? ""}>
        {openC && (
          <div className="space-y-4">
            <div className="flex gap-2 flex-wrap">
              <Badge tone={SEG_TONE[openC.segment]}>{openC.segment}</Badge>
              <Badge tone="fog">{openC.city}</Badge>
              <Badge tone={openC.credit > 0 ? "oak" : "moss"}>{openC.credit > 0 ? `crédito ${money(openC.credit, false)}` : "sin saldo"}</Badge>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[12.5px]">
              <div className="rounded-lg border border-line p-2.5"><div className="text-fog text-[10.5px] uppercase font-bold flex items-center gap-1"><Icon name="phone" size={11} />Teléfono</div>{openC.phone || "—"}</div>
              <div className="rounded-lg border border-line p-2.5"><div className="text-fog text-[10.5px] uppercase font-bold flex items-center gap-1"><Icon name="mail" size={11} />Email</div><span className="break-all">{openC.email || "—"}</span></div>
            </div>
            <div className="rounded-lg bg-oakl/60 border border-oak/20 p-3 text-[12.5px] text-oakd">
              <b>Nota comercial:</b> {openC.notes || "sin notas"}
            </div>
            <div>
              <SectionTitle kicker="OMS" title="Historial de pedidos" />
              <div className="space-y-1.5">
                {state.orders.filter((o) => o.customerId === openC.id).map((o) => (
                  <div key={o.id} className="flex items-center justify-between rounded-lg border border-line px-3 py-2 text-[12.5px]">
                    <span className="font-mono text-mut">{o.code}</span>
                    <span className="text-mut">{fmtDate(o.createdAt)}</span>
                    <span className="font-mono num font-semibold">{money(o.total)}</span>
                  </div>
                ))}
                {state.orders.filter((o) => o.customerId === openC.id).length === 0 && <div className="text-[12px] text-mut">Primer pedido pendiente.</div>}
              </div>
            </div>
          </div>
        )}
      </Drawer>

      {/* modals */}
      <Modal open={showC} onClose={() => setShowC(false)} kicker="CRM" title="Nuevo cliente">
        <div className="space-y-3">
          <Field label="Nombre / razón social"><Input value={nc.name} onChange={(e) => setNc({ ...nc, name: e.target.value })} placeholder="Ej: Constructora Río Tomebamba" /></Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="CI / RUC"><Input value={nc.doc} onChange={(e) => setNc({ ...nc, doc: e.target.value })} /></Field>
            <Field label="Ciudad">
              <Select value={nc.city} onChange={(e) => setNc({ ...nc, city: e.target.value })}>
                {["Quito", "Guayaquil", "Cuenca", "Ambato", "Manta", "Loja"].map((c) => <option key={c}>{c}</option>)}
              </Select>
            </Field>
            <Field label="Teléfono"><Input value={nc.phone} onChange={(e) => setNc({ ...nc, phone: e.target.value })} /></Field>
            <Field label="Email"><Input value={nc.email} onChange={(e) => setNc({ ...nc, email: e.target.value })} /></Field>
          </div>
          <Field label="Segmento">
            <Select value={nc.segment} onChange={(e) => setNc({ ...nc, segment: e.target.value as Customer["segment"] })}>
              <option value="hogar">Hogar</option><option value="corporativo">Corporativo</option><option value="distribuidor">Distribuidor</option><option value="arquitectura">Arquitectura / proyectos</option>
            </Select>
          </Field>
          <Field label="Notas"><Input value={nc.notes} onChange={(e) => setNc({ ...nc, notes: e.target.value })} placeholder="Preferencias, horarios de entrega…" /></Field>
          <div className="flex justify-end gap-2"><Btn variant="ghost" onClick={() => setShowC(false)}>Cancelar</Btn><Btn icon="check" onClick={addCustomer}>Guardar</Btn></div>
        </div>
      </Modal>

      <Modal open={showS} onClose={() => setShowS(false)} kicker="SRM" title="Nuevo proveedor">
        <div className="space-y-3">
          <Field label="Razón social"><Input value={ns.name} onChange={(e) => setNs({ ...ns, name: e.target.value })} /></Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Tipo">
              <Select value={ns.kind} onChange={(e) => setNs({ ...ns, kind: e.target.value as Supplier["kind"] })}>
                <option value="insumos">Insumos / materia prima</option><option value="muebles">Muebles terminados</option><option value="transporte">Transporte / fletes</option>
              </Select>
            </Field>
            <Field label="Ciudad">
              <Select value={ns.city} onChange={(e) => setNs({ ...ns, city: e.target.value })}>
                {["Quito", "Guayaquil", "Cuenca", "Ibarra", "Ambato", "Manta"].map((c) => <option key={c}>{c}</option>)}
              </Select>
            </Field>
          </div>
          <Field label="Contacto"><Input value={ns.contact} onChange={(e) => setNs({ ...ns, contact: e.target.value })} /></Field>
          <Field label="Teléfono"><Input value={ns.phone} onChange={(e) => setNs({ ...ns, phone: e.target.value })} /></Field>
          <Field label="Qué provee"><Input value={ns.items} onChange={(e) => setNs({ ...ns, items: e.target.value })} placeholder="Ej: terciado, espuma, fletes Costa" /></Field>
          <div className="flex justify-end gap-2"><Btn variant="ghost" onClick={() => setShowS(false)}>Cancelar</Btn><Btn icon="check" onClick={addSupplier}>Guardar</Btn></div>
        </div>
      </Modal>
    </div>
  );
}
