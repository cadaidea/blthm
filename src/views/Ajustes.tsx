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
  const reset = () => { localStorage.removeItem("taller-uno-v2"); location.reload(); };

  const bajarZip = async () => {
    toast("Empaquetando 36 archivos + guías de despliegue…", "info");
    const { exportProjectZip } = await import("../lib/projectFiles");
    await exportProjectZip(state);
    toast("taller-uno.zip descargado — súbelo al VPS por File Manager");
  };
  const bajarDatos = async () => {
    const { exportDataJson } = await import("../lib/projectFiles");
    exportDataJson(state);
    toast("Datos exportados en JSON — llévalos a producción vía importador");
  };

  return (
    <div className="space-y-4">
      <div className="anim-up">
        <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">Plataforma</div>
        <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Ajustes, integraciones y despliegue</h1>
      </div>

      {/* entrega del proyecto */}
      <div className="grid lg:grid-cols-2 gap-4">
        <Card className="anim-up hover:shadow-md transition-shadow">
          <SectionTitle kicker="Tu flujo: File Manager → SSH" title="Paquete de entrega (.zip)" />
          <div className="space-y-3">
            <div className="rounded-xl bg-night p-4 flex items-center justify-between gap-3">
              <div>
                <div className="font-mono text-[12.5px] text-oakl">taller-uno.zip</div>
                <div className="text-[11px] text-paper/50 mt-0.5">36 archivos de código real · ~420 KB comprimido</div>
              </div>
              <span className="w-11 h-11 rounded-xl bg-pined text-oakl grid place-items-center shrink-0"><Icon name="package" size={20} /></span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11.5px]">
              <div className="rounded-lg border border-line p-2.5">
                <div className="text-[9.5px] uppercase tracking-wider font-bold text-[#41621f] mb-1">✓ Incluye</div>
                <ul className="text-mut space-y-0.5 leading-relaxed">
                  <li>src/ completo (los 12 módulos)</li>
                  <li>package.json · vite · tailwind</li>
                  <li>docker-compose.yml + nginx.conf</li>
                  <li>deploy/comandos-ssh.txt (paso a paso)</li>
                  <li>deploy/datos-demo.json (tus datos)</li>
                </ul>
              </div>
              <div className="rounded-lg border border-line p-2.5">
                <div className="text-[9.5px] uppercase tracking-wider font-bold text-brick mb-1">✗ No incluye (correcto)</div>
                <ul className="text-mut space-y-0.5 leading-relaxed">
                  <li>node_modules — se crea con npm install</li>
                  <li>Base de datos — vive en el VPS</li>
                  <li>dist/ — se genera con npm run build</li>
                  <li>Credenciales reales — van en .env</li>
                </ul>
              </div>
            </div>
            <Btn className="w-full" icon="dl" onClick={bajarZip}>Descargar taller-uno.zip</Btn>
            <p className="text-[11px] text-fog leading-relaxed">
              El ZIP se genera con el <b>código tal como está corriendo ahora</b>. Lo subes al VPS por File Manager y aplicas
              los comandos de <span className="font-mono">deploy/comandos-ssh.txt</span> — actualización sin pérdida de datos en ~2 segundos.
            </p>
          </div>
        </Card>

        <Card className="anim-up hover:shadow-md transition-shadow">
          <SectionTitle kicker="Pregunta clave" title="¿Dónde vive la base de datos?" />
          <div className="space-y-2.5">
            <div className="rounded-lg border border-line p-3 flex items-start gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-steell text-steel grid place-items-center shrink-0"><Icon name="panel" size={15} /></span>
              <div className="text-[12px] text-mut leading-relaxed">
                <b className="text-ink">Aquí (demo):</b> tus datos viven en el navegador (localStorage). Funcional y persistente en tu máquina — <b className="text-brick">no</b> es donde deben vivir en producción.
              </div>
            </div>
            <div className="rounded-lg border border-pine/25 bg-pinel/40 p-3 flex items-start gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-pinel text-pined grid place-items-center shrink-0"><Icon name="server" size={15} /></span>
              <div className="text-[12px] text-pined leading-relaxed">
                <b>En el VPS:</b> <span className="font-mono text-[11px]">docker compose up -d</span> crea PostgreSQL 16 con el volumen <span className="font-mono text-[11px]">datos_pg</span>. Al re-subir un .zip nuevo, <b>solo cambia el código — la base jamás se toca</b>. Ahí está garantizado lo de "los trabajadores ni se dan cuenta".
              </div>
            </div>
            <div className="rounded-lg border border-line p-3 flex items-start gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-oakl text-oakd grid place-items-center shrink-0"><Icon name="arrow" size={15} /></span>
              <div className="text-[12px] text-mut leading-relaxed">
                <b className="text-ink">El puente:</b> exporta tus datos de la demo ahora y cárgalos en producción cuando conectemos la API NestJS.
              </div>
            </div>
            <div className="flex gap-2 pt-1">
              <Btn variant="outline" icon="dl" className="flex-1" onClick={bajarDatos}>Exportar mis datos (JSON)</Btn>
              <Btn variant="ghost" icon="refresh" onClick={() => { if (confirm("¿Restablecer la demo a los datos de fábrica? Tus cambios locales se pierden.")) reset(); }}>Reset demo</Btn>
            </div>
          </div>
        </Card>
      </div>

      {/* flujo GitHub */}
      <Card className="anim-up hover:shadow-md transition-shadow" pad={false}>
        <div className="p-4 pb-0">
          <SectionTitle kicker="Recomendado · versionado y rollback" title="Subir a GitHub (la fuente de verdad)" right={<Badge tone="pine">git-ready</Badge>} />
          <p className="text-[12px] text-mut max-w-3xl -mt-1 mb-3">
            GitHub es tu <b>historial</b>: cada entrega queda como commit y puedes volver atrás con un <span className="font-mono">git revert</span>.
            El VPS puede clonar directo o seguir usando el .zip — ambos caminos conviven. El ZIP ya incluye <span className="font-mono">.gitignore</span>, así que <span className="font-mono">node_modules</span>, <span className="font-mono">dist</span> y <span className="font-mono">.env</span> quedan fuera del repo.
          </p>
        </div>
        <div className="px-4 pb-4 grid md:grid-cols-3 gap-3">
          <Cmd title="1 · Crear repo y primer push (una vez)" cmd={`git init
git add -A
git commit -m "v1.0 — suite mueblera (12 módulos)"
git branch -M main
git remote add origin git@github.com:TU-USUARIO/taller-uno.git
git push -u origin main`} />
          <Cmd title="2 · Publicar una actualización (rutina)" cmd={`git add -A
git commit -m "v1.1 — guías de remisión SRI"
git tag v1.1.0 && git push origin main --tags`} />
          <Cmd title="3 · En el VPS — desplegar desde GitHub" cmd={`# primera vez:
git clone git@github.com:TU-USUARIO/taller-uno.git /var/www/taller-uno
# cada actualización:
cd /var/www/taller-uno && git pull
npm install && npm run build && docker compose restart web`} />
        </div>
        <div className="mx-4 mb-4 rounded-lg bg-oakl/60 border border-oak/25 px-3.5 py-2.5 text-[11.5px] text-oakd flex items-start gap-2">
          <Icon name="alert" size={14} className="shrink-0 mt-0.5" />
          <span><b>Flujo híbrido sugerido:</b> GitHub como origen del código (paso 3) y el .zip como plan B offline. Nunca subas <span className="font-mono">.env</span> ni credenciales al repo — el <span className="font-mono">.gitignore</span> ya los bloquea.</span>
        </div>
      </Card>

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
