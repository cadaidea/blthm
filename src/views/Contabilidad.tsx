import { useMemo, useState } from "react";
import { useStore } from "../lib/store";
import { downloadCsv, fmtDate, money, uid } from "../lib/util";
import { Badge, Btn, Card, Field, Icon, Input, linkTone, Modal, SectionTitle, Select, Stat, Tabs, Td, Th } from "../components/ui";
import { Donut } from "../components/charts";

const ACCOUNTS = ["1010 Caja", "1020 Bancos Pichincha", "1030 Cuentas por cobrar", "1040 Inventario", "1050 IVA pagado", "2010 Proveedores", "2030 IVA por pagar", "2040 Sueldos por pagar", "2050 Anticipos clientes", "4010 Ventas", "6010 Sueldos y salarios", "6020 Arriendo showroom", "6030 Servicios básicos", "6040 Publicidad", "6050 Depreciación"];

export default function Contabilidad() {
  const { state, dispatch, toast } = useStore();
  const [tab, setTab] = useState("diario");
  const [show, setShow] = useState(false);
  const [ne, setNe] = useState({ doc: "", detail: "", debitAcc: ACCOUNTS[1], creditAcc: ACCOUNTS[9], amount: "" });

  const dTot = state.journal.reduce((a, j) => a + j.debit, 0);
  const cTot = state.journal.reduce((a, j) => a + j.credit, 0);
  const balanced = Math.abs(dTot - cTot) < 0.01;

  const ivaVentas = state.invoices.filter((i) => i.status !== "anulada").reduce((a, i) => a + i.iva, 0);
  const ivaCompras = state.journal.filter((j) => j.account.startsWith("1050")).reduce((a, j) => a + j.debit, 0);
  const ingresos = state.journal.filter((j) => j.account.startsWith("4010")).reduce((a, j) => a + j.credit, 0);
  const gastos = state.journal.filter((j) => j.account.startsWith("6")).reduce((a, j) => a + j.debit, 0);

  const gastoSlices = useMemo(() => {
    const by: Record<string, number> = {};
    state.journal.filter((j) => j.account.startsWith("6")).forEach((j) => { by[j.account] = (by[j.account] ?? 0) + j.debit; });
    const colors = ["#19604f", "#c9821f", "#38647e", "#b0452f", "#5d8a35"];
    return Object.entries(by).map(([k, v], i) => ({ label: k.replace(/^\d+\s/, ""), value: v, color: colors[i % colors.length] }));
  }, [state.journal]);

  const submit = () => {
    const amt = Number(ne.amount);
    if (!amt || !ne.detail.trim()) return toast("Detalle y monto son obligatorios", "warn");
    const date = new Date().toISOString();
    dispatch({
      type: "ADD_JOURNAL",
      entries: [
        { id: uid(), date, doc: ne.doc || "MAN-001", account: ne.debitAcc, detail: ne.detail, debit: amt, credit: 0 },
        { id: uid(), date, doc: ne.doc || "MAN-001", account: ne.creditAcc, detail: ne.detail, debit: 0, credit: amt },
      ],
    });
    setShow(false);
    setNe({ doc: "", detail: "", debitAcc: ACCOUNTS[1], creditAcc: ACCOUNTS[9], amount: "" });
    toast("Asiento en partida doble registrado");
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3 anim-up">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">Contabilidad · NIIF pymes · SRI</div>
          <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Libros, facturas e impuestos</h1>
        </div>
        <Badge tone={balanced ? "moss" : "brick"} dot>{balanced ? "Partida doble cuadrada" : "Descuadre detectado"}</Badge>
      </div>

      <Tabs value={tab} onChange={setTab} tabs={[
        { id: "diario", label: "Libro diario", icon: "book", count: state.journal.length },
        { id: "facturas", label: "Facturas SRI", icon: "doc", count: state.invoices.length },
        { id: "impuestos", label: "Impuestos", icon: "tag" },
      ]} />

      {tab === "diario" && (
        <Card pad={false} className="anim-up">
          <div className="p-3 border-b border-line flex items-center justify-between gap-2 flex-wrap">
            <SectionTitle title="Libro diario general" />
            <div className="flex gap-2">
              <Btn size="sm" variant="outline" icon="dl" onClick={() => downloadCsv("diario.csv", ["Fecha", "Documento", "Cuenta", "Detalle", "Debe", "Haber"], state.journal.map((j) => [fmtDate(j.date), j.doc, j.account, j.detail, j.debit, j.credit]))}>CSV</Btn>
              <Btn size="sm" icon="plus" onClick={() => setShow(true)}>Asiento manual</Btn>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px] min-w-[760px]">
              <thead className="bg-ink/3 border-b border-line">
                <tr><Th>Fecha</Th><Th>Doc</Th><Th>Cuenta</Th><Th>Detalle</Th><Th right>Debe</Th><Th right>Haber</Th></tr>
              </thead>
              <tbody>
                {state.journal.map((j) => (
                  <tr key={j.id} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors">
                    <Td className="font-mono text-[11.5px] text-mut whitespace-nowrap">{fmtDate(j.date)}</Td>
                    <Td className="font-mono text-[11.5px] text-fog">{j.doc}</Td>
                    <Td><span className="font-mono text-[11.5px] font-semibold text-pine">{j.account.slice(0, 4)}</span> <span className="text-mut text-[12px]">{j.account.slice(5)}</span></Td>
                    <Td className="text-ink max-w-[280px] truncate">{j.detail}</Td>
                    <Td right className="font-mono num">{j.debit ? money(j.debit) : ""}</Td>
                    <Td right className="font-mono num">{j.credit ? money(j.credit) : ""}</Td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-pinel/40">
                <tr>
                  <Td className="font-bold text-ink" >Σ totales</Td><Td /><Td /><Td />
                  <Td right className="font-mono num font-bold text-ink">{money(dTot)}</Td>
                  <Td right className="font-mono num font-bold text-ink">{money(cTot)}</Td>
                </tr>
              </tfoot>
            </table>
          </div>
        </Card>
      )}

      {tab === "facturas" && (
        <Card pad={false} className="anim-up">
          <div className="p-3 border-b border-line flex items-center justify-between gap-2 flex-wrap">
            <SectionTitle title="Facturación electrónica · autorizadas SRI" />
            <Btn size="sm" variant="outline" icon="dl" onClick={() => downloadCsv("facturas.csv", ["Número", "Autorización", "Cliente", "Fecha", "Base", "IVA", "Total", "Estado"], state.invoices.map((i) => [i.number, i.auth, i.customer, fmtDate(i.date), i.base, i.iva, i.total, i.status]))}>CSV</Btn>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px] min-w-[820px]">
              <thead className="bg-ink/3 border-b border-line">
                <tr><Th>Número</Th><Th>Cliente</Th><Th right>Base</Th><Th right>IVA 15%</Th><Th right>Total</Th><Th>Estado</Th><Th>Autorización SRI</Th></tr>
              </thead>
              <tbody>
                {state.invoices.map((i) => (
                  <tr key={i.id} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors">
                    <Td className="font-mono font-semibold text-ink">{i.number}</Td>
                    <Td className="text-ink">{i.customer}<div className="text-[10.5px] text-fog">{fmtDate(i.date)}</div></Td>
                    <Td right className="font-mono num text-mut">{money(i.base)}</Td>
                    <Td right className="font-mono num text-mut">{money(i.iva)}</Td>
                    <Td right className="font-mono num font-bold text-ink">{money(i.total)}</Td>
                    <Td><Badge tone={linkTone[i.status] ?? "fog"} dot>{i.status.replace("_", " ")}</Badge></Td>
                    <Td><span className="font-mono text-[10.5px] text-fog">…{i.auth.slice(-12)}</span></Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {tab === "impuestos" && (
        <>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 stagger">
            <Stat label="IVA trasladado (ventas)" value={money(ivaVentas)} icon="tag" tone="pine" sub={`sobre ${money(ingresos)} de ingresos`} />
            <Stat label="IVA pagado (compras)" value={money(ivaCompras)} icon="book" tone="steel" sub="crédito tributario" />
            <Stat label="IVA a declarar" value={money(Math.max(0, ivaVentas - ivaCompras))} icon="doc" tone="oak" sub="formulario 104 · mensual" />
            <Stat label="Renta estimada (25%)" value={money(Math.max(0, (ingresos - gastos) * 0.25))} icon="clock" tone="brick" sub="utilidad imponible parcial" />
          </div>
          <div className="grid lg:grid-cols-2 gap-4">
            <Card className="anim-up">
              <SectionTitle kicker="6xxx · periodo" title="Estructura de gastos" />
              <Donut slices={gastoSlices} centerTop={money(gastos, false)} centerBottom="gastos" />
            </Card>
            <Card className="anim-up">
              <SectionTitle kicker="Cumplimiento SRI" title="Obligaciones al día" />
              <div className="space-y-2">
                {[
                  { t: "Declaración IVA · Formulario 104", d: "vence 12 del próximo mes", ok: true },
                  { t: "Retenciones en la fuente · Formulario 103", d: "3 retenciones emitidas este mes", ok: true },
                  { t: "Anexos ATS", d: "generación automática desde el diario", ok: true },
                  { t: "RIMPE / Régimen general", d: "régimen general · establecimiento de Quito", ok: false },
                ].map((x, i) => (
                  <div key={i} className="flex items-center gap-2.5 rounded-lg border border-line px-3 py-2.5">
                    <span className={`w-6 h-6 rounded-full grid place-items-center ${x.ok ? "bg-mossl text-[#41621f]" : "bg-oakl text-oakd"}`}><Icon name={x.ok ? "check" : "clock"} size={12} /></span>
                    <div className="min-w-0">
                      <div className="text-[12.5px] font-semibold text-ink leading-tight">{x.t}</div>
                      <div className="text-[11px] text-mut">{x.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </>
      )}

      <Modal open={show} onClose={() => setShow(false)} kicker="Contabilidad" title="Asiento manual (partida doble)">
        <div className="space-y-3">
          <Field label="Detalle"><Input value={ne.detail} onChange={(e) => setNe({ ...ne, detail: e.target.value })} placeholder="Ej: Pago servicio eléctrico EEQ" /></Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Cuenta débito"><Select value={ne.debitAcc} onChange={(e) => setNe({ ...ne, debitAcc: e.target.value })}>{ACCOUNTS.map((a) => <option key={a}>{a}</option>)}</Select></Field>
            <Field label="Cuenta crédito"><Select value={ne.creditAcc} onChange={(e) => setNe({ ...ne, creditAcc: e.target.value })}>{ACCOUNTS.map((a) => <option key={a}>{a}</option>)}</Select></Field>
            <Field label="Documento"><Input value={ne.doc} onChange={(e) => setNe({ ...ne, doc: e.target.value })} placeholder="GAS-0078" /></Field>
            <Field label="Monto USD"><Input type="number" value={ne.amount} onChange={(e) => setNe({ ...ne, amount: e.target.value })} placeholder="0.00" /></Field>
          </div>
          <div className="rounded-lg bg-pinel/50 border border-pine/15 px-3 py-2 text-[11.5px] text-pined">Se registran 2 líneas: débito y crédito por el mismo monto, la partida siempre cuadra.</div>
          <div className="flex justify-end gap-2"><Btn variant="ghost" onClick={() => setShow(false)}>Cancelar</Btn><Btn icon="check" onClick={submit}>Registrar asiento</Btn></div>
        </div>
      </Modal>
    </div>
  );
}
