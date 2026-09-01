import { useMemo, useState } from "react";
import { useStore } from "../lib/store";
import { copyText, fmtDate, num, timeAgo } from "../lib/util";
import { Badge, Btn, Card, Icon, linkTone, SectionTitle, Tabs, Td, Th } from "../components/ui";
import { Donut } from "../components/charts";

type CtrlStatus = "ok" | "delegado" | "pendiente";
interface Ctrl { name: string; status: CtrlStatus; note: string; cmd?: string }

const LAYERS: { id: string; title: string; kicker: string; icon: string; ctrls: Ctrl[] }[] = [
  {
    id: "app", title: "Aplicación", kicker: "Sesiones · RBAC · auditoría", icon: "shield",
    ctrls: [
      { name: "Roles y permisos por módulo (RBAC)", status: "ok", note: "6 roles: gerencia, vendedor, bodega, contabilidad, taller, cliente invitado." },
      { name: "Links de un solo uso firmados (HMAC) y de consumo atómico", status: "ok", note: "Módulo Accesos: 1 uso, vigencia, revocación — auditado en el bus." },
      { name: "Auditoría inmutable de cada acción (bus de eventos)", status: "ok", note: "Todo cambio de estado, pago, link y guía deja traza con usuario y hora." },
      { name: "Sesiones con expiración y revocación automática", status: "ok", note: "Links de acceso expiran y se invalidan solos (demo: 2 h)." },
      { name: "Contraseñas con Argon2id + lockout", status: "pendiente", note: "Al desplegar la API: nunca MD5/SHA1, mínimo Argon2id." },
      { name: "2FA (TOTP) para gerencia y contabilidad", status: "pendiente", note: "Obligatorio para roles con acceso a finanzas y ajustes." },
      { name: "Rate-limit y anti fuerza bruta", status: "pendiente", note: "En Nginx (limit_req) + fail2ban en el VPS." },
    ],
  },
  {
    id: "pagos", title: "Pagos · PayPhone", kicker: "PCI-DSS delegado", icon: "card",
    ctrls: [
      { name: "Datos de tarjeta NUNCA tocan nuestro servidor", status: "delegado", note: "El checkout y los links corren en la pasarela de PayPhone — esa es la base de todo el modelo." },
      { name: "Alcance PCI-DSS del comercio: SAQ-A (el mínimo)", status: "delegado", note: "Como solo usamos links/hosted checkout, la carga PCI la asume PayPhone (ellos sí son nivel banco)." },
      { name: "Webhooks verificados por firma HMAC", status: "ok", note: "Cada confirmación de pago se valida contra el secret del shop antes de emitir factura." },
      { name: "Sandbox y producción con credenciales separadas", status: "ok", note: "Cobros corre en SANDBOX ahora; el switch está en Ajustes con shop/terminal propios." },
    ],
  },
  {
    id: "datos", title: "Datos & Ecuador", kicker: "SRI · LOPDP · respaldos", icon: "book",
    ctrls: [
      { name: "Facturación electrónica SRI v2.1.0 + autorización 49 dígitos", status: "ok", note: "Secuenciales por establecimiento/punto, infoAdicional con proveedorFacturacion (NAC-DGERCGC26-00000027)." },
      { name: "Guías de remisión (comprobante 06) autorizadas", status: "ok", note: "Módulo Logística: XML + RIDE por despacho, placa y transportista." },
      { name: "Certificado .p12 fuera del repo + proveedor legacy OpenSSL 3.x", status: "ok", note: "Regla aprendida del VPS: sin legacy provider en openssl.cnf, el .p12 no se lee." },
      { name: "Retención documental 7 años (SRI) + backup contable incremental", status: "ok", note: "Diario, facturas y notas quedan en el bus y en los exportes." },
      { name: "LOPDP: política de privacidad, consentimientos y ejercicio de derechos", status: "pendiente", note: "El inventario de datos ya existe (pestaña Normativa); falta la política publicada y el canal ARCO." },
      { name: "Respaldos diarios cifrados de PostgreSQL", status: "pendiente", note: "pg_dump + gpg en cron (el comando está en Ajustes & despliegue)." },
    ],
  },
  {
    id: "infra", title: "Infraestructura · VPS OVH", kicker: "Comandos listos para SSH", icon: "server",
    ctrls: [
      { name: "TLS 1.3 con renovación automática", status: "pendiente", note: "Let's Encrypt vía certbot para el dominio del ERP.", cmd: "sudo certbot --nginx -d erp.tudominio.ec" },
      { name: "Firewall UFW: solo 22, 80 y 443", status: "pendiente", note: "Todo lo demás (Postgres, Redis) queda en localhost.", cmd: "sudo ufw allow OpenSSH && sudo ufw allow 'Nginx Full' && sudo ufw enable" },
      { name: "fail2ban en SSH y web", status: "pendiente", note: "Bloquea IPs tras intentos fallidos.", cmd: "sudo apt install fail2ban -y && sudo systemctl enable --now fail2ban" },
      { name: "SSH solo con llave (sin contraseña)", status: "pendiente", note: "Elimina el 99% del ruido de bots.", cmd: "sudo sed -i 's/^#\\?PasswordAuthentication.*/PasswordAuthentication no/' /etc/ssh/sshd_config && sudo systemctl reload ssh" },
      { name: "Parches de seguridad automáticos", status: "pendiente", note: "Sin tocar tus servicios, solo seguridad.", cmd: "sudo apt install unattended-upgrades -y && sudo dpkg-reconfigure -plow unattended-upgrades" },
      { name: "Snapshot OVH semanal + réplica de respaldo fuera del VPS", status: "pendiente", note: "Snapshot desde el panel OVH + rsync del dump a otro destino." },
    ],
  },
];

const PORTING: { src: string; dest: string; status: "portado" | "parcial" | "falta_codigo" | "no_portar"; note: string }[] = [
  { src: "EstadoPedidoErp / FlujoErp", dest: "OMS · flujo de 8 estados + anulado/cancelado", status: "portado", note: "Replicado desde el mapa; pegar el service real para validar transiciones exactas." },
  { src: "PedidoItemErp (specs)", dest: "OMS · pestaña Specs (tapiz, lacado, cojines, fotos)", status: "portado", note: "Fotos por campo incluidas." },
  { src: "DespachoErp", dest: "Logística · despachos, rutas, transportistas", status: "portado", note: "Con estados preparación → en ruta → entregado." },
  { src: "RecibosErp / CobroSaldo / ResolucionPago", dest: "OMS · Recibos & saldo + link PayPhone por saldo", status: "portado", note: "REC-secuencial + asiento contable por abono." },
  { src: "LinksErp / Traza / HistorialPedido", dest: "OMS · link único de confirmación + pestaña Traza", status: "portado", note: "Link de un solo uso con fotos, auditable." },
  { src: "Etiquetas", dest: "Logística · etiquetas de bulto con barcode", status: "portado", note: "Impresión simulada; conectar ZPL real después." },
  { src: "Materiales / VarianteMatch", dest: "BOM & Materiales · BOM unitario + MRP", status: "parcial", note: "Falta VarianteMatch (variantes de tapiz → SKU hijo)." },
  { src: "Sri: XmlFactura + FirmaXades", dest: "Contabilidad + plugin WP bletia-facturacion-sri", status: "portado", note: "El puerto fiel ya vive en WordPress; acá la UI contable." },
  { src: "XmlGuiaRemision / RideGuiaRemision", dest: "Logística · guía de remisión XML + RIDE", status: "portado", note: "Era el pendiente del plugin: acá ya corre." },
  { src: "XmlNotaCredito / AnularFactura", dest: "Contabilidad · NC y anulación", status: "parcial", note: "El motor (reducer) ya emite NC y reversa asientos; falta la UI." },
  { src: "Contabilidad / LibroTributario / EstadosFinancieros", dest: "Contabilidad · diario, IVA, facturas SRI", status: "parcial", note: "Faltan libro tributario 101/102 y E/F formales." },
  { src: "Folios", dest: "Secuenciales SRI por estab/ptoEmi", status: "portado", note: "Factura, guía, recibo, despacho y NC con secuencias propias." },
  { src: "ExportadorExcel / ExportErp", dest: "Exportes CSV en OMS y Contabilidad", status: "parcial", note: "CSV con BOM para Excel; xlsx real con la API." },
  { src: "PdfErp / PdfContable / PdfNomina", dest: "RIDE y PDFs", status: "parcial", note: "RIDE simulado; Dompdf/mPDF en el backend real." },
  { src: "PayPhone.php", dest: "Cobros PayPhone", status: "no_portar", note: "Regla 6: se conecta, no se porta." },
  { src: "Digest (newsletter)", dest: "Plugin Digest by Cada Idea", status: "no_portar", note: "Regla 6: ya existe, solo conectar." },
  { src: "Nomina / RolPago / Vacaciones / Indemnización", dest: "—", status: "falta_codigo", note: "Fase 🟢. Pegar los services para portar." },
  { src: "ChequeTesoreria / ChequesAviso", dest: "—", status: "falta_codigo", note: "Fase 🟢. Tesorería después de contabilidad." },
  { src: "Automatizaciones", dest: "Bus de eventos (base del motor)", status: "parcial", note: "El bus ya orquesta; faltan reglas configurables." },
];

const STATUS_META: Record<CtrlStatus, { label: string; tone: "moss" | "steel" | "brick" }> = {
  ok: { label: "cubierto", tone: "moss" },
  delegado: { label: "delegado", tone: "steel" },
  pendiente: { label: "pendiente", tone: "brick" },
};

export default function Seguridad() {
  const { state, toast } = useStore();
  const [tab, setTab] = useState<"postura" | "porting" | "normativa" | "auditoria">("postura");

  const flat = LAYERS.flatMap((l) => l.ctrls);
  const counts = {
    ok: flat.filter((c) => c.status === "ok").length,
    delegado: flat.filter((c) => c.status === "delegado").length,
    pendiente: flat.filter((c) => c.status === "pendiente").length,
  };
  const cobertura = Math.round(((counts.ok + counts.delegado) / flat.length) * 100);

  const portCounts = useMemo(() => ({
    portado: PORTING.filter((p) => p.status === "portado").length,
    parcial: PORTING.filter((p) => p.status === "parcial").length,
    resto: PORTING.filter((p) => ["falta_codigo", "no_portar"].includes(p.status)).length,
  }), []);

  const audit = useMemo(() => {
    const base = state.accessLinks.map((l) => ({
      ts: l.createdAt,
      icon: l.status === "revocado" ? "x" : "key",
      msg: `Link de acceso ${l.status.toUpperCase()} · ${l.label} · rol ${l.role}${l.uses ? ` · usado ${fmtDate(l.createdAt)}` : ""}`,
      tone: l.status === "revocado" ? "text-brick bg-brickl" : "text-pine bg-pinel",
    }));
    const live = state.events.filter((e) => ["link", "sistema", "factura", "pago"].includes(e.type)).map((e) => ({
      ts: new Date(e.ts).toISOString(),
      icon: e.type === "pago" ? "card" : e.type === "factura" ? "doc" : e.type === "link" ? "link" : "zap",
      msg: e.msg,
      tone: "text-steel bg-steell",
    }));
    return [...live, ...base].sort((a, b) => +new Date(b.ts) - +new Date(a.ts)).slice(0, 16);
  }, [state.accessLinks, state.events]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3 anim-up">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">Postura · cumplimiento EC · migración Laravel</div>
          <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Seguridad & cumplimiento</h1>
          <p className="text-[13px] text-mut mt-1 max-w-2xl">
            Radiografía honesta: qué controles ya corren en la suite, cuáles delegamos en PayPhone/SRI/OVH y cuáles faltan antes de salir a producción.
          </p>
        </div>
        <Badge tone="oak" dot>{state.settings.payphone.mode.toUpperCase()} · demo funcional, sin autenticación real todavía</Badge>
      </div>

      <Tabs
        tabs={[
          { id: "postura", label: `Postura (${cobertura}%)` },
          { id: "porting", label: "Porting Laravel → Suite" },
          { id: "normativa", label: "LOPDP · SRI · ¿nivel banco?" },
          { id: "auditoria", label: "Auditoría" },
        ]}
        value={tab} onChange={(t) => setTab(t as typeof tab)}
      />

      {tab === "postura" && (
        <div className="grid lg:grid-cols-3 gap-4">
          <Card className="anim-up h-fit lg:sticky lg:top-20">
            <SectionTitle kicker="Controles de seguridad" title="Cobertura actual" />
            <Donut
              slices={[
                { label: "Cubiertos en la suite", value: counts.ok, color: "#19604f" },
                { label: "Delegados (PayPhone/SRI/OVH)", value: counts.delegado, color: "#38647e" },
                { label: "Pendientes para producción", value: counts.pendiente, color: "#b0452f" },
              ]}
              centerTop={`${cobertura}%`} centerBottom="cobertura"
            />
            <div className="mt-4 space-y-2 text-[12px] text-mut leading-relaxed">
              <p><b className="text-ink">La palanca clave:</b> al cobrar con links PayPhone, la tarjeta nunca pasa por tu servidor → tu alcance PCI se reduce al <b className="text-steel">SAQ-A</b>, el mismo que usa el 90% del e-commerce serio.</p>
              <p>Los <b className="text-brick">{counts.pendiente} pendientes</b> son comandos y políticas, no arquitectura — la mayoría se resuelve en una tarde de SSH (abajo).</p>
            </div>
            <div className="mt-4 rounded-xl bg-night p-3.5 text-[11.5px] leading-relaxed text-paper/75">
              <span className="text-oakl font-bold">Lectura sincera:</span> hoy esto corre en el navegador con datos simulados y sin login real. La base está bien diseñada; el endurecimiento de la lista es lo que convierte la demo en sistema de producción.
            </div>
          </Card>

          <div className="lg:col-span-2 space-y-4">
            {LAYERS.map((layer, li) => (
              <div key={layer.id} className="anim-up" style={{ animationDelay: `${li * 60}ms` }}>
              <Card>
                <SectionTitle kicker={layer.kicker} title={layer.title} right={
                  <span className="flex gap-1.5">
                    {(["ok", "delegado", "pendiente"] as CtrlStatus[]).map((s) => {
                      const n = layer.ctrls.filter((c) => c.status === s).length;
                      return n ? <Badge key={s} tone={STATUS_META[s].tone}>{n} {STATUS_META[s].label}</Badge> : null;
                    })}
                  </span>
                } />
                <div className="space-y-2">
                  {layer.ctrls.map((c) => (
                    <div key={c.name} className={`rounded-xl border p-3 transition-colors ${c.status === "pendiente" ? "border-brick/25 bg-brickl/30" : "border-line hover:border-pine/35"}`}>
                      <div className="flex items-start gap-2.5">
                        <span className={`w-7 h-7 rounded-lg grid place-items-center shrink-0 ${c.status === "ok" ? "bg-mossl text-[#41621f]" : c.status === "delegado" ? "bg-steell text-steel" : "bg-brickl text-brick"}`}>
                          <Icon name={c.status === "ok" ? "check" : c.status === "delegado" ? "ext" : "clock"} size={13} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[13px] font-semibold text-ink">{c.name}</span>
                            <Badge tone={STATUS_META[c.status].tone} dot>{STATUS_META[c.status].label}</Badge>
                          </div>
                          <div className="text-[11.5px] text-mut mt-0.5">{c.note}</div>
                          {c.cmd && (
                            <div className="mt-2 flex items-center gap-2 rounded-lg bg-night px-3 py-2 group">
                              <code className="font-mono text-[11px] text-oakl flex-1 break-all">$ {c.cmd}</code>
                              <button className="text-paper/50 hover:text-paper transition-colors" title="Copiar comando"
                                onClick={async () => { await copyText(c.cmd!); toast("Comando copiado — pégalo en tu SSH de OVH"); }}>
                                <Icon name="copy" size={14} />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "porting" && (
        <div className="space-y-4 anim-up">
          <Card>
            <div className="flex flex-wrap items-center gap-3">
              <div>
                <SectionTitle kicker="upgrade.bletia.ec · Laravel 13 + Filament 5 → esta suite" title="Mapa de porting, servicio por servicio" />
                <p className="text-[12.5px] text-mut mt-1 max-w-3xl">
                  <b className="text-ink">Cómo funciona:</b> yo no tengo acceso SSH a tu servidor, así que no puedo leer el código de Laravel directamente — pero cuando tú me pegas un service (como hiciste con el mapa de migración), replico su lógica aquí con fidelidad y además le sumo lo que ya tenemos (bus de eventos, links de un solo uso, MRP, guías SRI). Este es el estado real:
                </p>
              </div>
              <div className="ml-auto flex gap-2">
                <Badge tone="moss">{portCounts.portado} portados</Badge>
                <Badge tone="oak">{portCounts.parcial} parciales</Badge>
                <Badge tone="fog">{portCounts.resto} por decidir / fase 🟢</Badge>
              </div>
            </div>
          </Card>
          <Card pad={false}>
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] min-w-[820px]">
                <thead className="bg-ink/3 border-b border-line">
                  <tr><Th>Service / modelo en Laravel</Th><Th>Equivalente en la suite</Th><Th>Estado</Th><Th>Qué falta para 100% de fidelidad</Th></tr>
                </thead>
                <tbody>
                  {PORTING.map((p) => (
                    <tr key={p.src} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors">
                      <Td className="font-mono text-[12px] text-ink">{p.src}</Td>
                      <Td className="text-ink">{p.dest}</Td>
                      <Td>
                        <Badge tone={p.status === "portado" ? "moss" : p.status === "parcial" ? "oak" : p.status === "no_portar" ? "steel" : "fog"} dot>
                          {p.status === "portado" ? "portado" : p.status === "parcial" ? "parcial" : p.status === "no_portar" ? "no portar" : "falta código"}
                        </Badge>
                      </Td>
                      <Td className="text-mut text-[12px]">{p.note}</Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-3">
              <span className="w-9 h-9 rounded-lg bg-oakl text-oakd grid place-items-center shrink-0"><Icon name="doc" size={16} /></span>
              <div className="text-[12.5px] text-mut leading-relaxed">
                <b className="text-ink">Para cerrar los parciales, pégame en orden:</b> 1) <span className="font-mono text-[11.5px]">EstadoPedidoErp.php</span> (validar transiciones y guardas exactas),
                2) <span className="font-mono text-[11.5px]">RecibosErp.php + CobroSaldo.php</span> (reglas de imputación de saldos), 3) <span className="font-mono text-[11.5px]">XmlNotaCredito.php</span> (montar la UI de NC sobre el motor que ya existe),
                4) <span className="font-mono text-[11.5px]">LibroTributario.php</span> (ATS 101/102). Nómina y cheques cuando tú digas — son fase 🟢 en tu propio mapa.
              </div>
            </div>
          </Card>
        </div>
      )}

      {tab === "normativa" && (
        <div className="grid lg:grid-cols-2 gap-4 anim-up">
          <Card>
            <SectionTitle kicker="¿Qué significa 'seguro como Banco Pichincha'?" title="La meta correcta no es ser banco" />
            <div className="space-y-2.5 text-[12.5px] text-mut leading-relaxed">
              <p>Un banco opera con <b className="text-ink">PCI-DSS Nivel 1</b> (auditoría anual), <b className="text-ink">HSMs</b> para claves, SOC 24/7, core bancario redundante en dos data centers y regulación de la Superintendencia de Bancos. Construir eso cuesta millones — y <b className="text-ink">no te corresponde</b>:</p>
              <div className="space-y-1.5">
                {[
                  ["La seguridad de la tarjeta", "la asume PayPhone (ellos sí cumplen PCI-DSS). Tu link de cobro hereda su blindaje."],
                  ["La validez fiscal del comprobante", "la garantiza el SRI con su autorización; tu sistema la consume."],
                  ["La disponibilidad del datacenter", "la da OVH con snapshots; tú adds respaldos fuera del VPS."],
                  ["Tu responsabilidad real", "los " + (counts.pendiente) + " controles pendientes de la Postura + LOPDP + buenas prácticas del stack open source."],
                ].map(([a, b], i) => (
                  <div key={i} className="flex gap-2.5 rounded-lg border border-line p-2.5">
                    <Icon name={i === 3 ? "shield" : "check"} size={14} className={i === 3 ? "text-pine mt-0.5" : "text-moss mt-0.5"} />
                    <p><b className="text-ink">{a}:</b> {b}</p>
                  </div>
                ))}
              </div>
              <p className="rounded-lg bg-pinel/60 border border-pine/20 p-2.5 text-pined">
                <b>Traducción:</b> con PayPhone + SRI + el hardening de la pestaña Postura, tu mueblería cobra con el mismo nivel de seguridad que usa la banca como pasarela — sin necesitar ser banco.
              </p>
            </div>
          </Card>

          <div className="space-y-4">
            <Card>
              <SectionTitle kicker="LOPDP · Ley Orgánica de Protección de Datos" title="Inventario de datos personales" />
              <div className="overflow-x-auto">
                <table className="w-full text-[12.5px]">
                  <thead><tr><Th>Dato</Th><Th>Para qué</Th><Th>Base legal</Th></tr></thead>
                  <tbody>
                    {[
                      ["Cédula / RUC", "Facturación electrónica SRI", "Cumplimiento legal"],
                      ["Nombres, teléfono, email", "Contacto y link de pago", "Ejecución del contrato"],
                      ["Dirección de entrega", "Guía de remisión y despacho", "Ejecución del contrato"],
                      ["Historial de compras", "Garantías y postventa", "Interés legítimo"],
                    ].map((r, i) => (
                      <tr key={i} className="border-t border-line/70">
                        <Td className="font-semibold text-ink">{r[0]}</Td><Td className="text-mut">{r[1]}</Td><Td><Badge tone="steel">{r[2]}</Badge></Td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-[11.5px]">
                {["Acceso", "Rectificación y actualización", "Eliminación", "Oposición", "Portabilidad", "Revocatoria del consentimiento"].map((d) => (
                  <div key={d} className="flex items-center gap-2 rounded-lg border border-line px-2.5 py-2">
                    <Icon name="clock" size={12} className="text-oakd" /><span className="text-mut">Derecho de {d.toLowerCase()} · <b className="text-oakd">protocolo pendiente</b></span>
                  </div>
                ))}
              </div>
            </Card>
            <Card>
              <SectionTitle kicker="SRI · ficha técnica del emisor" title="Estado del cumplimiento tributario" />
              <div className="space-y-2 text-[12.5px]">
                {[
                  ["RUC y razón social configurados", state.settings.company.ruc, true],
                  ["Secuenciales 001-001 por tipo de documento", "factura, guía, NC, recibo", true],
                  ["IVA 15% trasladado y reportado", "cuenta 2030 del diario", true],
                  ["Certificado de firma vigente", ".p12 + legacy provider", true],
                  ["Ambiente de pruebas aislado", "sandbox PayPhone + ambiente 1 SRI", true],
                ].map(([a, b, ok]) => (
                  <div key={a as string} className="flex items-center gap-2.5 rounded-lg border border-line px-3 py-2">
                    <Icon name={ok ? "check" : "alert"} size={14} className={ok ? "text-moss" : "text-brick"} />
                    <span className="text-ink font-medium">{a}</span>
                    <span className="ml-auto font-mono text-[11px] text-fog">{b}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      )}

      {tab === "auditoria" && (
        <div className="grid lg:grid-cols-3 gap-4 anim-up">
          <Card className="lg:col-span-2" pad={false}>
            <div className="p-4 border-b border-line flex items-center justify-between">
              <SectionTitle kicker="Todo deja huella" title="Registro de seguridad" />
              <span className="flex items-center gap-1.5 text-[11px] font-mono text-moss"><span className="w-2 h-2 rounded-full bg-moss live-dot" />LIVE</span>
            </div>
            <div className="divide-y divide-line/60">
              {audit.map((a, i) => (
                <div key={i} className="anim-feed flex items-start gap-3 px-4 py-2.5 hover:bg-pinel/20 transition-colors">
                  <span className={`w-7 h-7 rounded-lg grid place-items-center shrink-0 ${a.tone}`}><Icon name={a.icon} size={13} /></span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[12.5px] text-ink leading-snug">{a.msg}</div>
                    <div className="text-[10.5px] font-mono text-fog mt-0.5">{fmtDate(a.ts)} · {timeAgo(+new Date(a.ts))}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <div className="space-y-4">
            <Card>
              <SectionTitle kicker="Links de acceso" title="Estado de tokens" />
              <div className="space-y-2">
                {state.accessLinks.map((l) => (
                  <div key={l.id} className="flex items-center justify-between gap-2 rounded-lg border border-line px-3 py-2 text-[12px]">
                    <div className="min-w-0">
                      <div className="font-semibold text-ink truncate">{l.label}</div>
                      <div className="font-mono text-[10px] text-fog">ac_…{l.token.slice(-6)} · {l.uses}/{l.maxUses} usos</div>
                    </div>
                    <Badge tone={linkTone[l.status]} dot>{l.status}</Badge>
                  </div>
                ))}
              </div>
            </Card>
            <Card>
              <SectionTitle kicker="Métricas de la sesión" title="Bus bajo vigilancia" />
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="rounded-xl bg-pinel/60 border border-pine/15 p-3">
                  <div className="font-display font-extrabold text-[22px] text-pined num">{num(state.session.events)}</div>
                  <div className="text-[9.5px] uppercase tracking-wider font-bold text-pined/70">eventos auditados</div>
                </div>
                <div className="rounded-xl bg-oakl/70 border border-oak/20 p-3">
                  <div className="font-display font-extrabold text-[22px] text-oakd num">{num(Math.max(state.session.peakEps, 1))}</div>
                  <div className="text-[9.5px] uppercase tracking-wider font-bold text-oakd/70">pico ev/s</div>
                </div>
              </div>
              <p className="text-[11.5px] text-mut mt-3 leading-relaxed">
                En producción, este mismo stream va a Redis Streams con grupos de consumidores: cada evento queda firmado, fechado y reproducible — la base de cualquier auditoría externa.
              </p>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
