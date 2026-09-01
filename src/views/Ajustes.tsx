import { useState } from "react";
import { useStore } from "../lib/store";
import { copyText } from "../lib/util";
import { Badge, Btn, Card, Field, Icon, Input, SectionTitle, Select } from "../components/ui";

const STACK = [
  { n: "React 18 + Vite", l: "MIT", role: "Frontend (este panel)" },
  { n: "Node.js + NestJS", l: "MIT", role: "API REST + workers del bus" },
  { n: "PostgreSQL 16", l: "PostgreSQL", role: "Datos maestros y contables" },
  { n: "Redis 7", l: "BSD-3", role: "Bus de eventos + tokens de un solo uso" },
  { n: "Nginx + Certbot", l: "BSD / Apache-2.0", role: "Proxy inverso + SSL gratis" },
  { n: "Docker Compose", l: "Apache-2.0", role: "Orquestación en el VPS" },
];

function Cmd({ title, cmd }: { title: string; cmd: string }) {
  return (
    <div className="rounded-lg overflow-hidden border border-paper/10">
      <div className="flex items-center justify-between bg-night2 px-3 py-1.5">
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-paper/40">{title}</span>
        <button onClick={async () => { await copyText(cmd); }} className="text-paper/50 hover:text-oakl transition-colors"><Icon name="copy" size={13} /></button>
      </div>
      <pre className="bg-night text-[11.5px] leading-relaxed font-mono text-[#9fd4b8] p-3 overflow-x-auto whitespace-pre">{cmd}</pre>
    </div>
  );
}

export default function Ajustes() {
  const { state, dispatch, toast } = useStore();
  const [co, setCo] = useState({ ...state.settings.company });
  const [pp, setPp] = useState({ ...state.settings.payphone });

  const saveCo = () => { dispatch({ type: "SETTINGS", patch: { company: co } }); toast("Datos de la empresa guardados"); };
  const savePp = () => { dispatch({ type: "SETTINGS", patch: { payphone: pp } }); toast(pp.mode === "sandbox" ? "Credenciales sandbox guardadas" : "¡Cuidado! credenciales de producción activas", pp.mode === "sandbox" ? "ok" : "warn"); };
  const reset = () => { localStorage.removeItem("taller-uno-v1"); location.reload(); };

  return (
    <div className="space-y-4">
      <div className="anim-up">
        <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">Plataforma</div>
        <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Ajustes, integraciones y despliegue</h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <Card className="anim-up">
          <SectionTitle kicker="Domicilio fiscal · Ecuador" title="Datos de la empresa" />
          <div className="space-y-3">
            <Field label="Razón social"><Input value={co.name} onChange={(e) => setCo({ ...co, name: e.target.value })} /></Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="RUC (13 dígitos)"><Input value={co.ruc} onChange={(e) => setCo({ ...co, ruc: e.target.value })} className="font-mono" /></Field>
              <Field label="Teléfono"><Input value={co.phone} onChange={(e) => setCo({ ...co, phone: e.target.value })} /></Field>
            </div>
            <Field label="Dirección fiscal"><Input value={co.address} onChange={(e) => setCo({ ...co, address: e.target.value })} /></Field>
            <Field label="Email (facturación electrónica)"><Input value={co.email} onChange={(e) => setCo({ ...co, email: e.target.value })} /></Field>
            <div className="flex justify-end"><Btn icon="check" onClick={saveCo}>Guardar cambios</Btn></div>
          </div>
        </Card>

        <Card className="anim-up">
          <SectionTitle kicker="Pasarela de pagos" title="Credenciales PayPhone" right={<Badge tone={pp.mode === "sandbox" ? "oak" : "brick"} dot>{pp.mode}</Badge>} />
          <div className="space-y-3">
            <Field label="Modo de operación">
              <Select value={pp.mode} onChange={(e) => setPp({ ...pp, mode: e.target.value as "sandbox" | "produccion" })}>
                <option value="sandbox">Sandbox (pruebas sin dinero real)</option>
                <option value="produccion">Producción (cobros reales)</option>
              </Select>
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Shop ID"><Input value={pp.shopId} onChange={(e) => setPp({ ...pp, shopId: e.target.value })} className="font-mono" /></Field>
              <Field label="Terminal ID"><Input value={pp.terminalId} onChange={(e) => setPp({ ...pp, terminalId: e.target.value })} className="font-mono" /></Field>
            </div>
            <Field label="Token de integración"><Input value={pp.token} onChange={(e) => setPp({ ...pp, token: e.target.value })} className="font-mono" /></Field>
            <Field label="Base de links de cobro"><Input value={state.settings.linkBase} readOnly className="font-mono text-mut" /></Field>
            <div className="flex items-center justify-between">
              <p className="text-[11px] text-fog max-w-[240px]">Webhooks verificados con firma HMAC antes de emitir la factura.</p>
              <Btn icon="check" onClick={savePp}>Guardar</Btn>
            </div>
          </div>
        </Card>
      </div>

      <Card className="anim-up">
        <SectionTitle kicker="100% open source · costo de licencias $0" title="Stack de la plataforma" right={<Badge tone="moss">auditado</Badge>} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {STACK.map((s) => (
            <div key={s.n} className="rounded-lg border border-line px-3 py-2.5 hover:border-pine/40 transition-colors">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[12.5px] font-semibold text-ink">{s.n}</span>
                <Badge tone="pine">{s.l}</Badge>
              </div>
              <div className="text-[11.5px] text-mut mt-1">{s.role}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="anim-up" pad={false}>
        <div className="p-4">
          <SectionTitle kicker="VPS OVHcloud · actualizaciones sin perder datos" title="Guía de despliegue (copiar y pegar en SSH)" right={<Badge tone="steel">zero-downtime</Badge>} />
          <div className="grid md:grid-cols-2 gap-3">
            <Cmd title="1 · En tu PC — versión en GitHub + paquete" cmd={`git tag v1.5.0 && git push origin v1.5.0
tar --exclude='.git' --exclude='node_modules' \\
  -czf taller-uno-v1.5.0.tar.gz .`} />
            <Cmd title="2 · Subir el release al VPS" cmd={`scp taller-uno-v1.5.0.tar.gz \\
  root@vps-xxxx.ovh.net:/opt/erp/releases/`} />
            <Cmd title="3 · En el VPS — desplegar sin tocar los datos" cmd={`ssh root@vps-xxxx.ovh.net
cd /opt/erp
mkdir -p app && tar -xzf releases/taller-uno-v1.5.0.tar.gz -C app
docker compose -f app/docker-compose.yml run --rm api npm run migrate
docker compose -f app/docker-compose.yml up -d --build --no-deps web api
docker image prune -f`} />
            <Cmd title="4 · Respaldo automático (cron diario 02:00)" cmd={`0 2 * * * docker compose -f /opt/erp/app/docker-compose.yml \\
  exec -T db pg_dump -U erp taller_uno | gzip \\
  > /opt/erp/backups/db-$(date +\\%F).sql.gz`} />
          </div>
          <div className="grid md:grid-cols-3 gap-3 mt-4">
            <div className="rounded-lg bg-pinel/60 border border-pine/20 p-3">
              <div className="flex items-center gap-2 text-pined font-bold text-[12.5px]"><Icon name="warehouse" size={14} />Datos intactos</div>
              <p className="text-[11.5px] text-pined/80 mt-1">PostgreSQL vive en el volumen <span className="font-mono">/opt/erp/data</span>, fuera del código. Actualizar el .tar nunca lo toca.</p>
            </div>
            <div className="rounded-lg bg-oakl/60 border border-oak/25 p-3">
              <div className="flex items-center gap-2 text-oakd font-bold text-[12.5px]"><Icon name="refresh" size={14} />Rollback en 30s</div>
              <p className="text-[11.5px] text-oakd/80 mt-1">Cada release queda en <span className="font-mono">releases/</span>. Si algo falla, re-despliegas el tar anterior y listo.</p>
            </div>
            <div className="rounded-lg bg-steell/70 border border-steel/25 p-3">
              <div className="flex items-center gap-2 text-steel font-bold text-[12.5px]"><Icon name="users" size={14} />Nadie lo nota</div>
              <p className="text-[11.5px] text-steel/80 mt-1">Nginx mantiene las conexiones; los workers del bus drenan la cola antes del reinicio. Tus trabajadores siguen vendiendo.</p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="anim-up border-brick/30">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="font-display font-bold text-[15px] text-ink">Zona de riesgo</div>
            <p className="text-[12px] text-mut mt-0.5">Restablece la demo a los datos de fábrica (borra lo guardado en este navegador).</p>
          </div>
          <Btn variant="danger" icon="refresh" onClick={reset}>Restablecer datos demo</Btn>
        </div>
      </Card>
    </div>
  );
}
