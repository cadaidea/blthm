import { useMemo, useState } from "react";
import { useStore } from "../lib/store";
import { downloadCsv, fmtDate, money, uid } from "../lib/util";
import { Badge, Btn, Card, Field, Icon, Input, Modal, SectionTitle, Select, Stat, Tabs, Td, Th } from "../components/ui";

export default function Contabilidad() {
  const { state, dispatch, toast } = useStore();
  const [tab, setTab] = useState<"diario" | "facturas" | "impuestos">("diario");
  const [showAsiento, setShowAsiento] = useState(false);
  const [anular, setAnular] = useState<string | null>(null);
  const [motivo, setMotivo] = useState("");
  const [nj, setNj] = useState({ doc: "", account: "", detail: "", debit: "", credit: "" });

  const totals = useMemo(() => {
    const debit = state.journal.reduce((a, j) => a + j.debit, 0);
    const credit = state.journal.reduce((a, j) => a + j.credit, 0);
    return { debit, credit, ok: Math.abs(debit - credit) < 0.01 };
  }, [state.journal]);

  const ivaTrasladado = state.invoices.filter((i) => i.status !== "anulada").reduce((a, i) => a + i.iva, 0);
  const ivaPagado = state.journal.filter((j) => j.account === "1050 IVA pagado").reduce((a, j) => a + j.debit, 0);
  const ivaDeclarar = Math.max(0, ivaTrasladado - ivaPagado);
  const cxc = state.journal.filter((j) => j.account === "1030 Cuentas por cobrar").reduce((a, j) => a + j.debit - j.credit, 0);

  const saveAsiento = () => {
    const d = Number(nj.debit), c = Number(nj.credit);
    if (!nj.account || !nj.doc || (d === 0 && c === 0)) return toast("Completa documento, cuenta y monto", "warn");
    dispatch({
      type: "ADD_JOURNAL",
      entries: [{ id: uid(), date: new Date().toISOString(), doc: nj.doc, account: nj.account, detail: nj.detail || "Asiento manual", debit: d, credit: c }],
    });
    setShowAsiento(false);
    setNj({ doc: "", account: "", detail: "", debit: "", credit: "" });
    toast("Asiento registrado en el diario");
  };

  const inv = state.invoices.find((i) => i.id === anular);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3 anim-up">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">Contabilidad.php · partida doble · SRI</div>
          <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Contabilidad & obligaciones</h1>
        </div>
        <div className="flex gap-2">
          <Btn variant="outline" icon="dl" onClick={() => {
            downloadCsv("diario-contable.csv", ["Fecha", "Documento", "Cuenta", "Detalle", "Debe", "Haber"],
              state.journal.map((j) => [fmtDate(j.date), j.doc, j.account, j.detail, j.debit.toFixed(2), j.credit.toFixed(2)]));
            toast("Diario exportado en CSV (compatible Excel)");
          }}>Exportar CSV</Btn>
          <Btn icon="plus" onClick={() => setShowAsiento(true)}>Asiento manual</Btn>
        </div>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 stagger">
        <Stat label="Debe / Haber" value={`${money(totals.debit, false)} / ${money(totals.credit, false)}`} icon="book" tone="pine" sub={totals.ok ? <span className="text-[#41621f] font-semibold">✓ partida doble cuadrada</span> : <span className="text-brick font-semibold">✗ descuadre — revisar</span>} />
        <Stat label="Cuentas por cobrar" value={money(cxc)} icon="clock" tone="oak" sub="cartera abierta con clientes" />
        <Stat label="IVA por declarar" value={money(ivaDeclarar)} icon="doc" tone="steel" sub="trasladado − pagado (Form. 104)" />
        <Stat label="Facturas emitidas" value={String(state.invoices.length)} icon="check" tone="moss" sub={`${state.invoices.filter((i) => i.status === "anulada").length} anuladas con NC`} />
      </div>

      <Tabs
        tabs={[{ id: "diario", label: "Libro diario" }, { id: "facturas", label: "Facturas & NC" }, { id: "impuestos", label: "Obligaciones SRI" }]}
        value={tab} onChange={(t) => setTab(t as typeof tab)}
      />

      {tab === "diario" && (
        <Card pad={false} className="anim-up">
          <div className="overflow-x-auto">
            <table className="w-full text-[13px] min-w-[760px]">
              <thead className="bg-ink/3 border-b border-line">
                <tr><Th>Fecha</Th><Th>Documento</Th><Th>Cuenta</Th><Th>Detalle</Th><Th right>Debe</Th><Th right>Haber</Th></tr>
              </thead>
              <tbody>
                {state.journal.map((j) => (
                  <tr key={j.id} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors">
                    <Td className="text-mut whitespace-nowrap">{fmtDate(j.date)}</Td>
                    <Td className="font-mono text-[11.5px] text-ink">{j.doc}</Td>
                    <Td className="font-semibold text-ink whitespace-nowrap">{j.account}</Td>
                    <Td className="text-mut">{j.detail}</Td>
                    <Td right className="num font-mono text-ink">{j.debit > 0 ? money(j.debit) : ""}</Td>
                    <Td right className="num font-mono text-ink">{j.credit > 0 ? money(j.credit) : ""}</Td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-ink/4 font-bold">
                  <Td /><Td /><Td /><Td className="text-ink">Totales</Td>
                  <Td right className="num font-mono text-ink">{money(totals.debit)}</Td>
                  <Td right className="num font-mono text-ink">{money(totals.credit)}</Td>
                </tr>
              </tfoot>
            </table>
          </div>
        </Card>
      )}

      {tab === "facturas" && (
        <div className="space-y-4 anim-up">
          <Card pad={false}>
            <div className="p-3 border-b border-line"><SectionTitle kicker="Comprobantes electrónicos" title="Facturas autorizadas por el SRI" /></div>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] min-w-[820px]">
                <thead className="bg-ink/3 border-b border-line">
                  <tr><Th>Número</Th><Th>Cliente</Th><Th>Fecha</Th><Th right>Base</Th><Th right>IVA</Th><Th right>Total</Th><Th>Estado</Th><Th right>Acciones</Th></tr>
                </thead>
                <tbody>
                  {state.invoices.map((i) => (
                    <tr key={i.id} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors">
                      <Td className="font-mono text-[11.5px] text-ink">{i.number}</Td>
                      <Td className="font-semibold text-ink">{i.customer}</Td>
                      <Td className="text-mut whitespace-nowrap">{fmtDate(i.date)}</Td>
                      <Td right className="num font-mono text-mut">{money(i.base)}</Td>
                      <Td right className="num font-mono text-mut">{money(i.iva)}</Td>
                      <Td right className="num font-mono font-semibold text-ink">{money(i.total)}</Td>
                      <Td><Badge tone={i.status === "pagada" ? "moss" : i.status === "anulada" ? "brick" : i.status === "por_cobrar" ? "oak" : "steel"} dot>{i.status.replace("_", " ")}</Badge></Td>
                      <Td right>
                        {i.status !== "anulada" && <Btn size="sm" variant="ghost" icon="x" onClick={() => { setAnular(i.id); setMotivo(""); }}>Anular</Btn>}
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {state.notas.length > 0 && (
            <Card>
              <SectionTitle kicker="Comprobante 04" title="Notas de crédito emitidas" />
              <div className="space-y-1.5">
                {state.notas.map((n) => (
                  <div key={n.id} className="flex flex-wrap items-center gap-3 rounded-lg border border-brick/25 bg-brickl/40 px-3 py-2 text-[12.5px]">
                    <span className="font-mono text-brick">{n.number}</span>
                    <span className="text-ink">anula <b className="font-mono">{n.invoiceNumber}</b> · {n.customer}</span>
                    <span className="text-mut">· {n.motivo}</span>
                    <span className="ml-auto font-mono font-bold text-brick num">−{money(n.amount)}</span>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      )}

      {tab === "impuestos" && (
        <div className="grid lg:grid-cols-2 gap-4 anim-up">
          <Card>
            <SectionTitle kicker="IVA 15% · periodo actual" title="Cálculo del Formulario 104" />
            <div className="space-y-2 text-[13px]">
              <div className="flex justify-between rounded-lg border border-line px-3 py-2.5"><span className="text-mut">IVA trasladado (de facturas emitidas)</span><span className="font-mono font-semibold text-ink num">{money(ivaTrasladado)}</span></div>
              <div className="flex justify-between rounded-lg border border-line px-3 py-2.5"><span className="text-mut">IVA pagado (crédito tributario)</span><span className="font-mono text-mut num">−{money(ivaPagado)}</span></div>
              <div className="flex justify-between rounded-lg bg-pinel/60 border border-pine/25 px-3 py-2.5 font-bold"><span className="text-pined">A declarar / pagar</span><span className="font-mono text-pined num">{money(ivaDeclarar)}</span></div>
            </div>
          </Card>
          <Card>
            <SectionTitle kicker="Calendario SRI" title="Obligaciones próximas" />
            <div className="space-y-1.5">
              {[
                ["Form. 104 · IVA mensual", "según 9no dígito del RUC (6)", "15 días"],
                ["Form. 103 · Retenciones en la fuente", "según 9no dígito del RUC (6)", "15 días"],
                ["ATS · Anexo transaccional simplificado", "mes siguiente", "10 días"],
                ["Impuesto a la renta · anticipos", "mar/jun/sep/dic", "28 días"],
              ].map(([doc, cuando, vence]) => (
                <div key={doc} className="flex items-center gap-3 rounded-lg border border-line px-3 py-2.5">
                  <span className="w-8 h-8 rounded-lg bg-oakl text-oakd grid place-items-center shrink-0"><Icon name="clock" size={15} /></span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[12.5px] font-semibold text-ink">{doc}</div>
                    <div className="text-[10.5px] text-mut">{cuando}</div>
                  </div>
                  <Badge tone="oak">vence {vence}</Badge>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      <Modal open={showAsiento} onClose={() => setShowAsiento(false)} kicker="Libro diario" title="Nuevo asiento manual">
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Field label="Documento"><Input placeholder="GAS-0078" value={nj.doc} onChange={(e) => setNj({ ...nj, doc: e.target.value })} /></Field>
            <Field label="Cuenta">
              <Select value={nj.account} onChange={(e) => setNj({ ...nj, account: e.target.value })}>
                <option value="">—</option>
                {["1020 Bancos Pichincha", "1030 Cuentas por cobrar", "1040 Inventario", "2010 Proveedores", "2030 IVA por pagar", "6010 Sueldos y salarios", "6020 Arriendo showroom"].map((c) => <option key={c}>{c}</option>)}
              </Select>
            </Field>
          </div>
          <Field label="Detalle"><Input value={nj.detail} onChange={(e) => setNj({ ...nj, detail: e.target.value })} placeholder="Descripción del movimiento" /></Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Debe"><Input type="number" value={nj.debit} onChange={(e) => setNj({ ...nj, debit: e.target.value })} placeholder="0.00" /></Field>
            <Field label="Haber"><Input type="number" value={nj.credit} onChange={(e) => setNj({ ...nj, credit: e.target.value })} placeholder="0.00" /></Field>
          </div>
          <div className="flex justify-end gap-2"><Btn variant="ghost" onClick={() => setShowAsiento(false)}>Cancelar</Btn><Btn icon="check" onClick={saveAsiento}>Registrar</Btn></div>
        </div>
      </Modal>

      <Modal open={!!anular && !!inv} onClose={() => setAnular(null)} kicker="SRI · comprobante 04" title="Anular con nota de crédito">
        {inv && (
          <div className="space-y-3">
            <div className="text-[13px] text-mut">
              Se emitirá una <b className="text-ink">nota de crédito electrónica</b> que anula <b className="font-mono">{inv.number}</b> de {inv.customer} por {money(inv.total)} y reversa los asientos contables.
            </div>
            <Field label="Motivo de la anulación"><Input value={motivo} onChange={(e) => setMotivo(e.target.value)} placeholder="Ej: devolución, error de facturación…" /></Field>
            <div className="flex justify-end gap-2">
              <Btn variant="ghost" onClick={() => setAnular(null)}>Volver</Btn>
              <Btn icon="x" onClick={() => {
                if (!motivo.trim()) return toast("Escribe el motivo", "warn");
                dispatch({ type: "ANULAR_FACTURA", id: inv.id, motivo: motivo.trim() });
                toast(`Nota de crédito emitida · ${inv.number} anulada`);
                setAnular(null);
              }}>Emitir NC y anular</Btn>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
