import { useState } from "react";
import { useStore } from "../lib/store";
import type { AccessLink, AccessRole } from "../lib/types";
import { copyText, fmtDate, token, uid } from "../lib/util";
import { Badge, Btn, Card, Field, Icon, Input, linkTone, SectionTitle, Select, Td, Th } from "../components/ui";

const ROLE_META: Record<AccessRole, { label: string; scope: string; tone: "pine" | "oak" | "steel" | "moss" | "brick" | "fog" }> = {
  vendedor: { label: "Vendedor", scope: "Catálogo, precios y pedidos propios", tone: "pine" },
  bodega: { label: "Bodega", scope: "Movimientos de stock y kardex", tone: "steel" },
  contabilidad: { label: "Contabilidad", scope: "CxC, diario y conciliación", tone: "oak" },
  taller: { label: "Taller", scope: "Órdenes de fabricación y materiales", tone: "moss" },
  cliente: { label: "Cliente invitado", scope: "Catálogo + cotizador de un solo uso", tone: "fog" },
  gerencia: { label: "Gerencia", scope: "Reportes financieros completos", tone: "brick" },
};

export default function Accesos() {
  const { state, dispatch, toast } = useStore();
  const [nf, setNf] = useState({ label: "", role: "vendedor" as AccessRole, hours: "168" });

  const create = () => {
    if (!nf.label.trim()) return toast("Ponle un nombre al acceso", "warn");
    const link: AccessLink = {
      id: uid(),
      token: `ac_${token(12)}`,
      label: nf.label.trim(),
      role: nf.role,
      scope: ROLE_META[nf.role].scope,
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + Number(nf.hours) * 3600e3).toISOString(),
      maxUses: 1,
      uses: 0,
      status: "activo",
    };
    dispatch({ type: "CREATE_ACCESS", link });
    setNf({ label: "", role: "vendedor", hours: "168" });
    toast("Link de un solo uso generado");
  };

  const redeem = (l: AccessLink) => {
    dispatch({ type: "REDEEM_ACCESS", id: l.id });
    toast(`Acceso consumido · rol ${ROLE_META[l.role].label} — el link quedó inutilizable`);
  };

  const url = (l: AccessLink) => `${state.settings.linkBase}/acc/${l.token}`;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end justify-between gap-3 anim-up">
        <div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-oak uppercase">Seguridad · zero-trust</div>
          <h1 className="font-display font-extrabold text-[26px] text-ink mt-0.5">Links de acceso de un solo uso</h1>
          <p className="text-[13px] text-mut mt-1 max-w-2xl">
            Cada link firma una sesión temporal con rol limitado. Se consume al primer uso o expira — ideal para trabajadores de campo, auditores y clientes sin crear cuentas.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 gap-4">
        <Card className="lg:col-span-2 h-fit sticky top-20 anim-up">
          <SectionTitle kicker="Emitir" title="Nuevo link de acceso" />
          <div className="space-y-3">
            <Field label="Descripción"><Input value={nf.label} onChange={(e) => setNf({ ...nf, label: e.target.value })} placeholder="Ej: Conteo de inventario — sábado" /></Field>
            <Field label="Rol y permisos">
              <Select value={nf.role} onChange={(e) => setNf({ ...nf, role: e.target.value as AccessRole })}>
                {(Object.keys(ROLE_META) as AccessRole[]).map((r) => <option key={r} value={r}>{ROLE_META[r].label} — {ROLE_META[r].scope}</option>)}
              </Select>
            </Field>
            <Field label="Vigencia">
              <Select value={nf.hours} onChange={(e) => setNf({ ...nf, hours: e.target.value })}>
                <option value="24">24 horas</option><option value="72">3 días</option><option value="168">7 días</option><option value="720">30 días</option>
              </Select>
            </Field>
            <div className="rounded-lg bg-night text-paper/80 p-3 font-mono text-[11px] leading-relaxed">
              <span className="text-oakl">$</span> permiso: 1 uso · expira en {Number(nf.hours) / 24} días<br />
              <span className="text-oakl">$</span> scopes: {ROLE_META[nf.role].scope.toLowerCase()}<br />
              <span className="text-oakl">$</span> firma: HMAC + rate-limit 5 intentos
            </div>
            <Btn className="w-full" icon="key" onClick={create}>Generar link de un solo uso</Btn>
          </div>

          <div className="mt-5 pt-4 border-t border-line">
            <SectionTitle kicker="Equipo" title="Usuarios internos" />
            <div className="space-y-2">
              {state.team.map((t) => (
                <div key={t.id} className="flex items-center gap-2.5">
                  <span className="relative w-8 h-8 rounded-lg bg-ink text-paper grid place-items-center font-display font-bold text-[11px]">
                    {t.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                    <span className={`absolute -right-0.5 -bottom-0.5 w-2.5 h-2.5 rounded-full border-2 border-card ${t.online ? "bg-moss" : "bg-fog"}`} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[12.5px] font-semibold text-ink leading-tight">{t.name}</div>
                    <div className="text-[10.5px] text-mut">{t.role} · {t.lastActive}</div>
                  </div>
                  <Badge tone={ROLE_META[t.role].tone} className="ml-auto">{t.role}</Badge>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className="lg:col-span-3">
          <Card pad={false} className="anim-up">
            <div className="overflow-x-auto">
              <table className="w-full text-[13px] min-w-[640px]">
                <thead className="bg-ink/3 border-b border-line">
                  <tr><Th>Acceso</Th><Th>Rol</Th><Th>Uso</Th><Th>Expira</Th><Th>Estado</Th><Th right>Acciones</Th></tr>
                </thead>
                <tbody>
                  {state.accessLinks.map((l) => (
                    <tr key={l.id} className="border-b border-line/70 last:border-0 hover:bg-pinel/25 transition-colors">
                      <Td>
                        <div className="font-semibold text-ink leading-tight">{l.label}</div>
                        <div className="font-mono text-[10.5px] text-fog truncate max-w-[220px]">{url(l)}</div>
                        <div className="text-[10.5px] text-mut mt-0.5">{l.scope}</div>
                      </Td>
                      <Td><Badge tone={ROLE_META[l.role].tone}>{ROLE_META[l.role].label}</Badge></Td>
                      <Td className="font-mono num text-mut">{l.uses}/{l.maxUses}</Td>
                      <Td className="text-mut whitespace-nowrap">{fmtDate(l.expiresAt)}</Td>
                      <Td><Badge tone={linkTone[l.status]} dot>{l.status}</Badge></Td>
                      <Td right>
                        <div className="flex justify-end gap-1">
                          <Btn size="sm" variant="outline" icon="copy" onClick={async () => { await copyText(url(l)); toast("Link copiado — envíalo por WhatsApp o email"); }} />
                          {l.status === "activo" && <Btn size="sm" variant="oak" icon="play" onClick={() => redeem(l)}>Usar</Btn>}
                          {l.status === "activo" && <Btn size="sm" variant="ghost" icon="x" onClick={() => { dispatch({ type: "REVOKE_ACCESS", id: l.id }); toast("Link revocado", "warn"); }} />}
                        </div>
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="mt-3 anim-up">
            <div className="flex items-start gap-3">
              <span className="w-9 h-9 rounded-lg bg-steell text-steel grid place-items-center shrink-0"><Icon name="key" size={16} /></span>
              <div className="text-[12.5px] text-mut leading-relaxed">
                <b className="text-ink">Cómo funciona:</b> el link lleva un token HMAC de un solo uso. Al abrirlo, la API valida vigencia y consumo en Redis (atómico con <span className="font-mono text-[11px]">DECR</span>),
                crea una sesión de 2 horas con el rol asignado y registra el evento en el bus. Si el token ya fue usado o expiró, la puerta se cierra y se notifica a gerencia.
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
