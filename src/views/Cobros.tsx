import { useState } from "react";
import { buildPayLink, saldoDe, useStore } from "../lib/store";
import type { PayLink } from "../lib/types";
import { copyText, fmtDate, money, num } from "../lib/util";
import { Badge, Btn, Card, Field, Icon, Input, linkTone, Modal, SectionTitle, Select, Stat } from "../components/ui";

export default function Cobros() {
  const { state, dispatch, toast } = useStore();
  const [form, setForm] = useState({ mode: "orden" as "orden" | "saldo" | "libre", orderId: "", amount: "", concept: "", customer: "", days: "7" });
  const [checkout, setCheckout] = useState<PayLink | null>(null);
  const [payTab, setPayTab] = useState<"tarjeta" | "qr">("tarjeta");
  const [card, setCard] = useState({ num: "4242 4242 4242 4242", exp: "12/27", cvv: "123" });
  const [paying, setPaying] = useState<"idle" | "processing" | "done">("idle");
  const [auth, setAuth] = useState("");

  const cobrado = state.payLinks.filter((l) => l.status === "pagado").reduce((a, l) => a + l.amount, 0);
  const porCobrar = state.payLinks.filter((l) => l.status === "pendiente").reduce((a, l) => a + l.amount, 0);
  const cerrados = state.payLinks.filter((l) => l.status !== "pendiente").length;
  const conv = cerrados ? Math.round((state.payLinks.filter((l) => l.status === "pagado").length / cerrados) * 100) : 0;

  const openOrders = state.orders.filter((o) => !["anulado", "cancelado"].includes(o.status) && saldoDe(o) > 0);

  const generate = () => {
    let amount = 0, concept = "", customer = "", orderId: string | null = null;
    if (form.mode === "orden") {
      const o = state.orders.find((x) => x.id === form.orderId);
      if (!o) return toast("Selecciona un pedido", "warn");
      amount = o.total; concept = `Pedido ${o.code} · ${o.items.length} ítem(s)`; customer = o.customer; orderId = o.id;
    } else if (form.mode === "saldo") {
      const o = state.orders.find((x) => x.id === form.orderId);
      if (!o) return toast("Selecciona un pedido", "warn");
      amount = saldoDe(o);
      if (amount <= 0) return toast("Ese pedido no tiene saldo pendiente", "warn");
      concept = `Saldo ${o.code}`; customer = o.customer; orderId = o.id;
    } else {
      amount = Number(form.amount);
      if (!amount || !form.concept.trim()) return toast("Monto y concepto son obligatorios", "warn");
      concept = form.concept.trim(); customer = form.customer.trim() || "Cliente web";
    }
    const link = buildPayLink(state, Math.round(amount * 100) / 100, concept, customer, orderId, Number(form.days) || 7);
    dispatch({ type: "CREATE_PAYLINK", link });
    setForm({ mode: "orden", orderId: "", amount: "", concept: "", customer: "", days: "7" });
    toast(`Link de un solo uso generado por ${money(link.amount)}`);
  };

  const doPay = () => {
    if (!checkout) return;
    setPaying("processing");
    setTimeout(() => {
      const last4 = card.num.replace(/\s/g, "").slice(-4) || "4242";
      dispatch({ type: "PAY_LINK", id: checkout.id, method: "PayPhone · Visa", last4 });
      setAuth(String(Math.floor(10000000 + Math.random() * 89999999)));
      setPaying("done");
      toast(`Pago de ${money(checkout.amount)} acreditado vía PayPhone`);
    }, 1400);
  };

  const closeCheckout = () => { setCheckout(null); setPaying("idle"); setPayTab("tarjeta"); };
  const url = (l: PayLink) => `${state.settings.linkBase}/${l.token}`;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3 anim-up">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">Pasarela · PayPhone Ecuador</div>
          <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Cobros con link de pago</h1>
        </div>
        <Badge tone={state.settings.payphone.mode === "sandbox" ? "oak" : "moss"} dot>
          {state.settings.payphone.mode === "sandbox" ? "SANDBOX · credenciales de prueba" : "PRODUCCIÓN"} · shop {state.settings.payphone.shopId}
        </Badge>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 stagger">
        <Stat label="Cobrado por link" value={money(cobrado)} icon="qr" tone="moss" sub="acreditado en Bancos Pichincha" />
        <Stat label="Por cobrar" value={money(porCobrar)} icon="clock" tone="oak" sub={`${state.payLinks.filter((l) => l.status === "pendiente").length} links activos`} />
        <Stat label="Conversión" value={`${conv}%`} icon="zap" tone="pine" sub="links pagados vs cerrados" />
        <Stat label="Comisión PayPhone" value={money(cobrado * 0.0249)} icon="card" tone="steel" sub="2,49% + IVA por transacción" />
      </div>

      <div className="grid lg:grid-cols-5 gap-4">
        <Card className="lg:col-span-2 anim-up h-fit sticky top-20">
          <SectionTitle kicker="Un solo uso" title="Generar link de cobro" />
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              {([["orden", "Pedido total"], ["saldo", "Solo saldo"], ["libre", "Monto libre"]] as const).map(([k, l]) => (
                <button key={k} onClick={() => setForm({ ...form, mode: k })} className={`rounded-lg border px-2 py-2.5 text-left transition-all ${form.mode === k ? "border-pine bg-pinel/50" : "border-line hover:border-line2"}`}>
                  <div className="text-[12px] font-bold text-ink leading-tight">{l}</div>
                </button>
              ))}
            </div>
            {form.mode !== "libre" ? (
              <Field label={form.mode === "saldo" ? "Pedido con saldo pendiente" : "Pedido pendiente"}>
                <Select value={form.orderId} onChange={(e) => setForm({ ...form, orderId: e.target.value })}>
                  <option value="">— seleccionar —</option>
                  {openOrders.map((o) => <option key={o.id} value={o.id}>{o.code} · {o.customer} · {form.mode === "saldo" ? `saldo ${money(saldoDe(o))}` : money(o.total)}</option>)}
                </Select>
              </Field>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Monto USD"><Input type="number" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} placeholder="0.00" /></Field>
                  <Field label="Cliente"><Input value={form.customer} onChange={(e) => setForm({ ...form, customer: e.target.value })} placeholder="Opcional" /></Field>
                </div>
                <Field label="Concepto"><Input value={form.concept} onChange={(e) => setForm({ ...form, concept: e.target.value })} placeholder="Ej: Reserva sofá Nápoles" /></Field>
              </>
            )}
            <Field label="Vigencia del link">
              <Select value={form.days} onChange={(e) => setForm({ ...form, days: e.target.value })}>
                <option value="1">24 horas</option><option value="3">3 días</option><option value="7">7 días</option><option value="15">15 días</option>
              </Select>
            </Field>
            <Btn className="w-full" icon="link" onClick={generate}>Generar link de un solo uso</Btn>
            <p className="text-[11px] text-fog leading-relaxed">
              El link acepta <b>tarjetas, débito y QR PayPhone</b>. Al pagarse, el recibo queda <b className="text-pined">validado automáticamente</b> (webhook firmado), emite la factura electrónica (SRI) y registra el asiento contable.
            </p>
          </div>
        </Card>

        <div className="lg:col-span-3 space-y-2.5 anim-up">
          {state.payLinks.map((l) => (
            <div key={l.id} className="bg-card border border-line rounded-xl p-3.5 hover:border-pine/40 hover:shadow-md transition-all">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-[12px] font-semibold text-ink">{l.concept}</span>
                    <Badge tone={linkTone[l.status]} dot>{l.status}</Badge>
                  </div>
                  <div className="font-mono text-[11px] text-fog mt-1 truncate max-w-md">{url(l)}</div>
                  <div className="text-[11px] text-mut mt-1">
                    {l.customerName} · creado {fmtDate(l.createdAt)} · vence {fmtDate(l.expiresAt)}
                    {l.method && <span className="text-moss font-semibold"> · {l.method} •••• {l.last4} · aut. {l.authCode}</span>}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display font-extrabold text-[19px] text-ink num">{money(l.amount)}</div>
                  <div className="flex gap-1.5 mt-1.5 justify-end">
                    <Btn size="sm" variant="outline" icon="copy" onClick={async () => { await copyText(url(l)); toast("Link copiado al portapapeles"); }}>Copiar</Btn>
                    {l.status === "pendiente" && <Btn size="sm" variant="oak" icon="play" onClick={() => { setCheckout(l); }}>Simular pago</Btn>}
                    {l.status === "pendiente" && <Btn size="sm" variant="ghost" icon="x" onClick={() => { dispatch({ type: "CANCEL_PAYLINK", id: l.id }); toast("Link anulado", "warn"); }} />}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal open={!!checkout} onClose={closeCheckout} kicker="Pasarela · demostración" title="Checkout PayPhone" wide>
        {checkout && (
          <div className="max-w-md mx-auto">
            {paying !== "done" ? (
              <>
                <div className="rounded-xl border border-line overflow-hidden">
                  <div className="bg-[#6b2f8f] text-paper px-4 py-3 flex items-center justify-between">
                    <span className="font-display font-extrabold tracking-wide flex items-center gap-2"><Icon name="qr" size={16} />PayPhone</span>
                    <span className="font-mono text-[10px] opacity-75">SANDBOX EC</span>
                  </div>
                  <div className="p-4">
                    <div className="text-center mb-4">
                      <div className="font-display font-extrabold text-[30px] text-ink num">{money(checkout.amount)}</div>
                      <div className="text-[12px] text-mut">{checkout.concept}</div>
                      <div className="text-[11px] text-fog font-mono mt-0.5">{state.settings.company.name}</div>
                    </div>
                    <div className="flex gap-1 bg-ink/5 rounded-lg p-1 mb-4">
                      {(["tarjeta", "qr"] as const).map((t) => (
                        <button key={t} onClick={() => setPayTab(t)} className={`flex-1 py-1.5 rounded-md text-[12px] font-bold capitalize transition-all ${payTab === t ? "bg-card shadow-sm text-ink" : "text-mut"}`}>{t === "tarjeta" ? "Tarjeta" : "QR PayPhone"}</button>
                      ))}
                    </div>
                    {payTab === "tarjeta" ? (
                      <div className="space-y-2.5">
                        <Field label="Número de tarjeta"><Input value={card.num} onChange={(e) => setCard({ ...card, num: e.target.value })} className="font-mono" /></Field>
                        <div className="grid grid-cols-2 gap-3">
                          <Field label="Vence"><Input value={card.exp} onChange={(e) => setCard({ ...card, exp: e.target.value })} className="font-mono" /></Field>
                          <Field label="CVV"><Input value={card.cvv} onChange={(e) => setCard({ ...card, cvv: e.target.value })} className="font-mono" /></Field>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-2">
                        <div className="w-40 h-40 mx-auto rounded-xl border border-line p-2 bg-card">
                          <svg viewBox="0 0 100 100" className="w-full h-full text-ink">
                            {Array.from({ length: 120 }).map((_, i) => {
                              const x = (i * 37) % 95, y = (i * 53) % 95;
                              return (i * 7) % 3 === 0 ? <rect key={i} x={x} y={y} width="4" height="4" fill="currentColor" /> : null;
                            })}
                            <rect x="2" y="2" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" />
                            <rect x="76" y="2" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" />
                            <rect x="2" y="76" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" />
                          </svg>
                        </div>
                        <p className="text-[11.5px] text-mut mt-2.5">Escanea con la app PayPhone — o usa la pestaña tarjeta en este sandbox.</p>
                      </div>
                    )}
                    <Btn className="w-full mt-4" disabled={paying === "processing"} onClick={doPay} icon={paying === "processing" ? "refresh" : "card"}>
                      {paying === "processing" ? "Procesando con el banco…" : `Pagar ${money(checkout.amount)}`}
                    </Btn>
                    <p className="text-center text-[10.5px] text-fog mt-2.5 flex items-center justify-center gap-1"><Icon name="key" size={11} />Transacción cifrada · PCI-DSS · recibo auto-validado</p>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-8 anim-pop">
                <div className="w-16 h-16 mx-auto rounded-full bg-mossl text-[#41621f] grid place-items-center mb-3"><Icon name="check" size={30} /></div>
                <div className="font-display font-extrabold text-[22px] text-ink">¡Pago aprobado!</div>
                <div className="text-[13px] text-mut mt-1">{money(checkout.amount)} · autorización <span className="font-mono">{auth}</span></div>
                <div className="mt-4 mx-auto max-w-xs rounded-lg bg-pinel/60 border border-pine/20 p-3 text-left text-[11.5px] text-pined space-y-1">
                  <div>✓ Webhook recibido, firmado y verificado</div>
                  <div>✓ Recibo validado automáticamente (sin revisión manual)</div>
                  <div>✓ Factura electrónica emitida (SRI)</div>
                  <div>✓ Asiento contable registrado</div>
                </div>
                <Btn className="mt-4" onClick={closeCheckout}>Listo</Btn>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}
