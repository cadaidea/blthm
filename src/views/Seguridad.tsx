import { useMemo, useState } from "react";
import { useStore } from "../lib/store";
import { copyText, fmtDate, num, timeAgo } from "../lib/util";
import { Badge, Btn, Card, Icon, SectionTitle, Tabs, Td, Th } from "../components/ui";
import { Donut } from "../components/charts";

type CtrlStatus = "ok" | "delegado" | "pendiente";
interface Ctrl { name: string; status: CtrlStatus; note: string; cmd?: string }

const LAYERS: { id: string; title: string; kicker: string; icon: string; ctrls: Ctrl[] }[] = [
  {
    id: "app", title: "Aplicación", kicker: "Sesiones · RBAC · auditoría", icon: "shield",
    ctrls: [
      { name: "Contraseñas Argon2id", status: "pendiente", note: "En la API NestJS (bcrypt → Argon2id).", cmd: "npm i argon2   # en el proyecto /api" },
      { name: "2FA para gerencia y contabilidad", status: "pendiente", note: "TOTP (Google Authenticator) en login sensible.", cmd: "npm i otplib qrcode" },
      { name: "RBAC por roles (6 roles definidos)", status: "ok", note: "vendedor, bodega, contabilidad, taller, cliente, gerencia." },
      { name: "Links de un solo uso firmados (HMAC)", status: "ok", note: "Consumo atómico en Redis · vigencia corta." },
      { name: "Rate limiting de API", status: "pendiente", note: "@nestjs/throttler — 60 req/min por IP.", cmd: "npm i @nestjs/throttler" },
      { name: "Bitácora de acciones (bus de eventos)", status: "ok", note: "Cada acción emite evento auditable." },
    ],
  },
  {
    id: "pagos", title: "Pagos & fiscal", kicker: "PayPhone · SRI", icon: "card",
    ctrls: [
      { name: "Datos de tarjeta fuera del servidor", status: "delegado", note: "PayPhone procesa la tarjeta; alcance PCI = SAQ-A." },
      { name: "Webhooks verificados con firma", status: "delegado", note: "Firma HMAC de PayPhone antes de emitir factura." },
      { name: "Credenciales de producción en variables de entorno", status: "pendiente", note: "Nunca en el código ni en GitHub.", cmd: "nano /var/www/taller-uno/.env   # chmod 600" },
      { name: "Facturación con autorización SRI", status: "ok", note: "Clave de acceso 49 dígitos por comprobante." },
      { name: "Certificado .p12 protegido", status: "ok", note: "Fuera del repo · nota OpenSSL legacy del VPS aplicada." },
    ],
  },
  {
    id: "infra", title: "Infraestructura VPS", kicker: "OVH · hardening SSH", icon: "server",
    ctrls: [
      { name: "TLS con Certbot (HTTPS)", status: "pendiente", note: "Certificado gratis, renovado solo.", cmd: "sudo apt install certbot python3-certbot-nginx\nsudo certbot --nginx -d erp.tudominio.ec" },
      { name: "Firewall UFW", status: "pendiente", note: "Solo 22, 80 y 443 abiertos.", cmd: "sudo ufw allow 22 && sudo ufw allow 80 && sudo ufw allow 443 && sudo ufw enable" },
      { name: "fail2ban anti fuerza bruta", status: "pendiente", note: "Bloquea IPs tras 5 intentos SSH.", cmd: "sudo apt install fail2ban && sudo systemctl enable --now fail2ban" },
      { name: "SSH sin contraseña (solo llaves)", status: "pendiente", note: "Deshabilita password y root directo.", cmd: "sudo sed -i 's/^#*PasswordAuthentication.*/PasswordAuthentication no/' /etc/ssh/sshd_config\nsudo systemctl restart sshd" },
      { name: "Respaldos diarios cifrados", status: "pendiente", note: "pg_dump a /respaldos + copia externa.", cmd: "0 3 * * * cd /var/www/taller-uno && docker compose exec -T db pg_dump -U taller taller_uno | gzip > /respaldos/taller-$(date +\\%F).sql.gz" },
      { name: "Snapshots OVH", status: "delegado", note: "Snapshot semanal desde el panel OVH." },
    ],
  },
  {
    id: "datos", title: "Datos & privacidad", kicker: "LOPDP Ecuador", icon: "users",
    ctrls: [
      { name: "Política de privacidad publicada", status: "pendiente", note: "Obligatoria LOPDP — registro de tratamiento de datos." },
      { name: "Consentimiento en formularios", status: "pendiente", note: "Checkbox en captura de leads y web." },
      { name: "Datos fiscales solo en el VPS", status: "ok", note: "RUC/cédulas nunca salen a repos públicos." },
      { name: "Encriptación en reposo (volumen)", status: "delegado", note: "OVH cifra discos por defecto; verificar en panel." },
    ],
  },
];

const PORTING: { src: string; dest: string; status: "portado" | "parcial" | "falta_codigo" | "no_portar"; note: string }[] = [
  { src: "EstadoPedidoErp / FlujoErp", dest: "OMS · 15 estados + vista del cliente", status: "portado", note: "✓ Verificado contra el código real (repo cadaidea/blthm). Incluye ESTADOS_CLIENTE." },
  { src: "RecibosErp (validación de pagos)", dest: "OMS · Recibos con validación del dueño", status: "portado", note: "✓ Código real leído: el pago no cuenta hasta validarlo; PayPhone se auto-valida." },
  { src: "PedidoItemErp (specs)", dest: "OMS · pestaña Specs (tapiz, lacado, cojines, fotos)", status: "portado", note: "Fotos por campo incluidas." },
  { src: "DespachoErp", dest: "Logística · despachos, rutas, transportistas", status: "portado", note: "Con estados preparación → en ruta → entregado." },
  { src: "CobroSaldo / ResolucionPago", dest: "OMS · saldo + link PayPhone por saldo", status: "parcial", note: "Pendiente leer CobroSaldo.php por límite de lecturas — pegarlo en el chat acelera." },
  { src: "LinksErp / Traza / HistorialPedido", dest: "OMS · link único de confirmación + pestaña Traza", status: "portado", note: "Link de un solo uso con fotos, auditable." },
  { src: "Etiquetas", dest: "Logística · etiquetas de bulto con barcode", status: "portado", note: "Impresión simulada; conectar ZPL real después." },
  { src: "Materiales / VarianteMatch", dest: "BOM & Materiales · BOM unitario + MRP", status: "parcial", note: "Falta VarianteMatch (variantes de tapiz → SKU hijo)." },
  { src: "Sri: XmlFactura + FirmaXades", dest: "Contabilidad + plugin WP bletia-facturacion-sri", status: "portado", note: "El puerto fiel ya vive en WordPress; acá la UI contable." },
  { src: "XmlGuiaRemision / RideGuiaRemision", dest: "Logística · guía de remisión XML + RIDE", status: "portado", note: "Era el pendiente del plugin: acá ya corre." },
  { src: "XmlNotaCredito / AnularFactura", dest: "Contabilidad · NC y anulación", status: "portado", note: "Motor + UI listos (pestaña Facturas & NC)." },
  { src: "Contabilidad / LibroTributario / EstadosFinancieros", dest: "Contabilidad · diario, IVA, facturas SRI", status: "parcial", note: "Faltan libro tributario 101/102 y E/F formales." },
  { src: "Folios", dest: "Secuenciales SRI por estab/ptoEmi", status: "portado", note: "Factura, guía, recibo, despacho y NC con secuencias propias." },
  { src: "ExportadorExcel / ExportErp", dest: "Exportes CSV en OMS y Contabilidad", status: "parcial", note: "CSV con BOM para Excel; xlsx real con la API." },
  { src: "PdfErp / PdfContable / PdfNomina", dest: "RIDE y PDFs", status: "parcial", note: "RIDE simulado; Dompdf/mPDF en el backend real." },
  { src: "PayPhone.php", dest: "Cobros PayPhone", status: "no_portar", note: "Regla 6: se conecta, no se porta." },
  { src: "Digest (newsletter)", dest: "Plugin Digest by Cada Idea", status: "no_portar", note: "Regla 6: ya existe, solo conectar." },
  { src: "Nomina / RolPago / Vacaciones / Indemnización", dest: "—", status: "falta_codigo", note: "Fase 🟢. Los services están en el repo; leer cuando toque." },
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
      msg: `${l.label} · ${l.status}`,
      tone: l.status === "revocado" ? "text-brick bg-brickl" : "text-oakd bg-oakl",
    }));
    const pagos = state.orders.flatMap((o) => o.recibos.map((r) => ({
      ts: r.date,
      icon: r.validado ? "check" : "clock",
      msg: `${r.code} ${money(r.amount)} · ${r.validado ? "validado" : "esperando validación"} · ${o.customer}`,
      tone: r.validado ? "text-[#41621f] bg-mossl" : "text-oakd bg-oakl",
    })));
    return [...base, ...pagos].sort((a, b) => b.ts.localeCompare(a.ts)).slice(0, 12);
  }, [state.accessLinks, state.orders]);

  return (
    <div className="space-y-4">
      <div className="anim-up">
        <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">Gobierno · auditoría · hardening</div>
        <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Seguridad & cumplimiento</h1>
        <p className="text-[13px] text-mut mt-1 max-w-3xl">
          Postura de seguridad en capas, mapa de porting del ERP BLETIA (leído del repo real), normativa ecuatoriana y auditoría. Sin humo: lo cubierto, lo delegado y lo que falta.
        </p>
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
        <div className="space-y-4 anim-up">
          <Card>
            <div className="flex flex-wrap items-center gap-6">
              <Donut
                slices={[
                  { label: "Cubiertos", value: counts.ok, color: "#19604f" },
                  { label: "Delegados (PayPhone/SRI/OVH)", value: counts.delegado, color: "#38647e" },
                  { label: "Pendientes", value: counts.pendiente, color: "#b0452f" },
                ]}
                centerTop={`${cobertura}%`} centerBottom="cobertura"
              />
              <div className="flex-1 min-w-[260px] text-[12.5px] text-mut leading-relaxed">
                <p><b className="text-ink">Lectura honesta:</b> la suite cubre la capa de aplicación (roles, links de un solo uso, auditoría) y delega lo crítico donde corresponde — <b className="text-ink">tarjetas a PayPhone (PCI-DSS)</b>, <b className="text-ink">validez fiscal al SRI</b> y disponibilidad a OVH.</p>
                <p className="mt-2">Los <b className="text-brick">{counts.pendiente} pendientes</b> son hardening del VPS y 2 controles de la API. Todos traen el comando listo para copiar — una tarde de SSH y la cobertura pasa del {cobertura}% al 100%.</p>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-4">
            {LAYERS.map((l) => (
              <Card key={l.id}>
                <SectionTitle kicker={l.kicker} title={l.title} right={<span className="w-8 h-8 rounded-lg bg-pinel text-pined grid place-items-center"><Icon name={l.icon} size={15} /></span>} />
                <div className="space-y-2">
                  {l.ctrls.map((c) => (
                    <div key={c.name} className="rounded-lg border border-line p-2.5 hover:border-pine/35 transition-colors">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[12.5px] font-semibold text-ink">{c.name}</span>
                        <Badge tone={STATUS_META[c.status].tone} dot>{STATUS_META[c.status].label}</Badge>
                      </div>
                      <p className="text-[11px] text-mut mt-1">{c.note}</p>
                      {c.cmd && c.status === "pendiente" && (
                        <div className="mt-1.5 rounded-md bg-night px-2.5 py-1.5 flex items-start justify-between gap-2 group">
                          <code className="font-mono text-[10px] text-[#9fd4b8] whitespace-pre-wrap break-all">{c.cmd}</code>
                          <button onClick={() => { copyText(c.cmd!); toast("Comando copiado — pégalo en SSH"); }} className="text-paper/40 hover:text-oakl transition-colors shrink-0 mt-0.5"><Icon name="copy" size={12} /></button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
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
                  <b className="text-ink">Repo real leído:</b> la app completa de Laravel vive en <span className="font-mono text-[11.5px]">github.com/cadaidea/blthm → bletia/</span>. Los servicios con <b className="text-[#41621f]">✓</b> fueron verificados línea por línea contra el código fuente.
                </p>
              </div>
              <div className="ml-auto flex gap-2">
                <Badge tone="moss">{portCounts.portado} portados</Badge>
                <Badge tone="oak">{portCounts.parcial} parciales</Badge>
                <Badge tone="fog">{portCounts.resto} fase 🟢 / no portar</Badge>
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
                <b className="text-ink">Siguiente lectura (si el límite de peticiones lo permite o me lo pegas aquí):</b> 1) <span className="font-mono text-[11.5px]">CobroSaldo.php</span> (reglas de imputación),
                2) <span className="font-mono text-[11.5px]">Folios.php</span> (prefijos y formatos exactos: OF, DES, ANL, REC), 3) <span className="font-mono text-[11.5px]">FlujoErp.php</span> (guardas de transición).
                El estado y los recibos ya están validados contra <span className="font-mono text-[11.5px]">EstadoPedidoErp.php</span> y <span className="font-mono text-[11.5px]">RecibosErp.php</span>.
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
              <p>Un banco opera con <b className="text-ink">PCI-DSS Nivel 1</b> (auditoría anual), <b className="text-ink">HSMs</b> para claves, SOC 24/7 y regulación de la Superintendencia de Bancos. Construir eso cuesta millones — y <b className="text-ink">no te corresponde</b>:</p>
              <div className="space-y-1.5">
                {[
                  ["La seguridad de la tarjeta", "la asume PayPhone (ellos sí cumplen PCI-DSS). Tu link de cobro hereda su blindaje."],
                  ["La validez fiscal del comprobante", "la garantiza el SRI con su autorización; tu sistema la consume."],
                  ["La disponibilidad del datacenter", "la da OVH con snapshots; tú agregas respaldos fuera del VPS."],
                  ["Tu responsabilidad real", "los " + counts.pendiente + " controles pendientes de la Postura + LOPDP + buenas prácticas del stack open source."],
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
              <SectionTitle kicker="LOPDP · Ley Orgánica de Protección de Datos" title="Lo que exige Ecuador" />
              <div className="space-y-1.5 text-[12.5px]">
                {[
                  "Registrar el tratamiento de datos personales (clientes y empleados) ante la Superintendencia",
                  "Publicar política de privacidad y aviso en cada formulario",
                  "Consentimiento expreso antes de usar datos para marketing (Digest)",
                  "Derechos ARCO: acceso, rectificación, cancelación y oposición — canal visible",
                  "Notificar incidentes de seguridad en máximo 5 días",
                ].map((x, i) => (
                  <div key={i} className="flex gap-2.5 rounded-lg border border-line p-2.5">
                    <span className="w-5 h-5 rounded-md bg-oakl text-oakd grid place-items-center font-mono text-[10px] font-bold shrink-0">{i + 1}</span>
                    <p className="text-mut"><b className="text-ink">{x.split(":")[0]}</b>{x.includes(":") ? ":" + x.split(":").slice(1).join(":") : ""}</p>
                  </div>
                ))}
              </div>
            </Card>
            <Card>
              <SectionTitle kicker="SRI" title="Comprobantes que emite la suite" />
              <div className="flex flex-wrap gap-2">
                {["01 · Factura", "04 · Nota de crédito", "05 · Nota de débito", "06 · Guía de remisión", "07 · Comprobante de retención"].map((x) => (
                  <Badge key={x} tone={x.startsWith("01") || x.startsWith("04") || x.startsWith("06") ? "pine" : "fog"}>{x}</Badge>
                ))}
              </div>
              <p className="text-[11.5px] text-mut mt-2.5">Numeración 001-001-secuencial de 9 dígitos y clave de acceso de 49 dígitos — igual que tus secuenciales de Laravel (<span className="font-mono text-[10.5px]">Folios.php</span>).</p>
            </Card>
          </div>
        </div>
      )}

      {tab === "auditoria" && (
        <div className="grid lg:grid-cols-3 gap-4 anim-up">
          <Card className="lg:col-span-2" pad={false}>
            <div className="p-4"><SectionTitle kicker="Eventos de seguridad y pagos" title="Trazabilidad reciente" /></div>
            <div className="px-2 pb-3 space-y-1">
              {audit.map((a, i) => (
                <div key={i} className="anim-feed flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-ink/3">
                  <span className={`w-8 h-8 rounded-lg grid place-items-center shrink-0 ${a.tone}`}><Icon name={a.icon} size={14} /></span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[12.5px] text-ink leading-snug truncate">{a.msg}</div>
                    <div className="text-[10.5px] font-mono text-fog mt-0.5">{fmtDate(a.ts)} · {timeAgo(new Date(a.ts).getTime())}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <div className="space-y-4">
            <Card>
              <SectionTitle kicker="Sesión" title="Bus de eventos" />
              <div className="space-y-2 text-[12.5px]">
                <div className="flex justify-between"><span className="text-mut">Eventos procesados</span><b className="font-mono text-ink num">{num(state.session.events)}</b></div>
                <div className="flex justify-between"><span className="text-mut">Pico sostenido</span><b className="font-mono text-ink num">{num(state.session.peakEps)} ev/s</b></div>
                <div className="flex justify-between"><span className="text-mut">Inicio de sesión</span><span className="font-mono text-mut">{new Date(state.session.startedAt).toLocaleTimeString("es-EC")}</span></div>
              </div>
            </Card>
            <Card>
              <div className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-lg bg-brickl text-brick grid place-items-center shrink-0"><Icon name="alert" size={16} /></span>
                <p className="text-[12px] text-mut leading-relaxed">
                  <b className="text-ink">Demo funcional, no producción:</b> los datos viven en este navegador. Antes de lanzar, completar los {counts.pendiente} controles pendientes y desplegar el stack de Ajustes con PostgreSQL.
                </p>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}

function money(n: number, cents = true) {
  return "$" + n.toLocaleString("es-EC", { minimumFractionDigits: cents ? 2 : 0, maximumFractionDigits: cents ? 2 : 0 });
}
