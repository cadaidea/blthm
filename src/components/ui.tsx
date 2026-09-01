import type { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { cls, copyText } from "../lib/util";

/* ---------------------------------- icons ---------------------------------- */
const P: Record<string, ReactNode> = {
  logo: (
    <>
      <path d="M6 2.5h3.2V11h5.6V2.5H18V18h-3.2v-4H9.2v4H6V2.5z" fill="currentColor" stroke="none" />
    </>
  ),
  panel: <><rect x="3.5" y="3.5" width="7" height="9" rx="1.2" /><rect x="13.5" y="3.5" width="7" height="5" rx="1.2" /><rect x="13.5" y="11.5" width="7" height="9" rx="1.2" /><rect x="3.5" y="15.5" width="7" height="5" rx="1.2" /></>,
  box: <><path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5v-9z" /><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9" /></>,
  truck: <><path d="M2.5 6.5h11v10h-11zM13.5 10h4l3 3v3.5h-7" /><circle cx="6.5" cy="17.5" r="1.8" /><circle cx="16.5" cy="17.5" r="1.8" /></>,
  users: <><circle cx="9" cy="8" r="3.2" /><path d="M3.5 19.5c.6-3.4 2.8-5.2 5.5-5.2s4.9 1.8 5.5 5.2" /><circle cx="16.8" cy="9" r="2.4" /><path d="M15.6 14.6c2.6.2 4.4 1.8 4.9 4.6" /></>,
  saw: <><path d="M3.5 17 14 6.5l3.5 3.5L7 20.5H3.5V17z" /><path d="m14 6.5 2-2a2.1 2.1 0 0 1 3 0l.5.5a2.1 2.1 0 0 1 0 3l-2 2" /><path d="m7 14 1.5 1.5M10 11l1.5 1.5" /></>,
  link: <><path d="M10 14a4.2 4.2 0 0 0 6 0l3-3a4.24 4.24 0 1 0-6-6l-1.2 1.2" /><path d="M14 10a4.2 4.2 0 0 0-6 0l-3 3a4.24 4.24 0 1 0 6 6l1.2-1.2" /></>,
  image: <><rect x="3.5" y="4.5" width="17" height="15" rx="1.5" /><circle cx="9" cy="10" r="1.6" /><path d="m4.5 17.5 4.5-4 3.5 3 3-2.5 4 3.5" /></>,
  book: <><path d="M4.5 4.5h12.5a2 2 0 0 1 2 2v13H6.5a2 2 0 0 1-2-2v-13z" /><path d="M4.5 4.5a2 2 0 0 0 0 4h2M8 9h7M8 12.5h7" /></>,
  key: <><circle cx="8" cy="15.5" r="4" /><path d="m11 12.5 8-8M16.5 7l2 2M14 9.5l1.8 1.8" /></>,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M12 2.8v2.6M12 18.6v2.6M2.8 12h2.6M18.6 12h2.6M5.5 5.5l1.8 1.8M16.7 16.7l1.8 1.8M18.5 5.5l-1.8 1.8M7.3 16.7l-1.8 1.8" /></>,
  search: <><circle cx="10.5" cy="10.5" r="6" /><path d="m15.5 15.5 4.5 4.5" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  x: <path d="m6 6 12 12M18 6 6 18" />,
  copy: <><rect x="8.5" y="8.5" width="12" height="12" rx="1.6" /><path d="M15.5 8.5v-3a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3" /></>,
  check: <path d="m4.5 12.5 5 5L19.5 6.5" />,
  alert: <><path d="M12 3.5 22 20H2L12 3.5z" /><path d="M12 9.5v5M12 17.2v.3" /></>,
  arrow: <path d="M4 12h16m0 0-6-6m6 6-6 6" />,
  chevD: <path d="m6 9.5 6 6 6-6" />,
  ext: <><path d="M14 4h6v6M20 4l-9 9" /><path d="M19 13.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4.5" /></>,
  dl: <><path d="M12 3.5V15m0 0-4.5-4.5M12 15l4.5-4.5" /><path d="M4 17.5V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1.5" /></>,
  refresh: <><path d="M20 12a8 8 0 1 1-2.5-5.8" /><path d="M20 3.5V8h-4.5" /></>,
  zap: <path d="M13 2.5 4.5 13.5H11l-1 8 8.5-11H12l1-8z" />,
  clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5.2l3.4 2" /></>,
  play: <path d="M7 4.5v15l12-7.5-12-7.5z" />,
  qr: <><rect x="3.5" y="3.5" width="7" height="7" rx="1" /><rect x="13.5" y="3.5" width="7" height="7" rx="1" /><rect x="3.5" y="13.5" width="7" height="7" rx="1" /><path d="M13.5 13.5h3v3h-3zM17.5 17.5h3v3h-3zM20.5 13.5v1M13.5 20.5h1" /></>,
  card: <><rect x="3" y="5.5" width="18" height="13" rx="2" /><path d="M3 10h18M6.5 14.5h4" /></>,
  doc: <><path d="M6 3.5h8l4 4V20.5H6V3.5z" /><path d="M14 3.5v4h4M9 12h6M9 15.5h6" /></>,
  server: <><rect x="3.5" y="4" width="17" height="6.5" rx="1.2" /><rect x="3.5" y="13.5" width="17" height="6.5" rx="1.2" /><path d="M7 7.2h.01M7 16.7h.01M17 7.2h-4M17 16.7h-4" /></>,
  tag: <><path d="m12.5 3.5 8 8-9 9-8-8v-6a3 3 0 0 1 3-3h6z" /><circle cx="8.7" cy="8.7" r="1.3" /></>,
  warehouse: <><path d="M3.5 20V9L12 4l8.5 5v11" /><path d="M7 20v-7h10v7M7 16.5h10" /></>,
  phone: <path d="M7 3.5H5.5a2 2 0 0 0-2 2c0 8.3 6.7 15 15 15a2 2 0 0 0 2-2V17l-4-1.5-2 2a12.5 12.5 0 0 1-6-6l2-2L9 5.5 7 3.5z" />,
  mail: <><rect x="3" y="5.5" width="18" height="13" rx="1.8" /><path d="m3.5 7 8.5 6 8.5-6" /></>,
  star: <path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.9l-5.2 2.8 1-5.9-4.3-4.1 5.9-.8L12 3.5z" />,
};

export function Icon({ name, size = 18, className }: { name: string; size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={cls("shrink-0", className)} aria-hidden>
      {P[name] ?? P.box}
    </svg>
  );
}

/* --------------------------------- buttons --------------------------------- */
type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost" | "danger" | "oak" | "dark";
  size?: "sm" | "md";
  icon?: string;
};
export function Btn({ variant = "primary", size = "md", icon, className, children, ...rest }: BtnProps) {
  const base = "inline-flex items-center justify-center gap-1.5 font-semibold rounded-lg transition-all duration-150 active:scale-[0.97] disabled:opacity-45 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-pine";
  const v = {
    primary: "bg-pine text-paper hover:bg-pined shadow-sm shadow-pine/25",
    outline: "border border-line2 bg-card text-ink hover:border-pine hover:text-pine",
    ghost: "text-mut hover:bg-ink/5 hover:text-ink",
    danger: "bg-brick text-paper hover:bg-[#93381f]",
    oak: "bg-oak text-night hover:bg-oakd hover:text-paper",
    dark: "bg-ink text-paper hover:bg-night",
  }[variant];
  const s = size === "sm" ? "text-[12px] px-2.5 py-1.5" : "text-[13px] px-3.5 py-2";
  return (
    <button className={cls(base, v, s, className)} {...rest}>
      {icon && <Icon name={icon} size={size === "sm" ? 14 : 15} />}
      {children}
    </button>
  );
}

/* ---------------------------------- badges --------------------------------- */
export type Tone = "pine" | "oak" | "steel" | "brick" | "moss" | "fog" | "night";
const toneCls: Record<Tone, string> = {
  pine: "bg-pinel text-pined border-pine/25",
  oak: "bg-oakl text-oakd border-oak/30",
  steel: "bg-steell text-steel border-steel/25",
  brick: "bg-brickl text-brick border-brick/25",
  moss: "bg-mossl text-[#41621f] border-moss/30",
  fog: "bg-ink/5 text-mut border-line2",
  night: "bg-ink text-paper border-ink",
};
export function Badge({ tone = "fog", children, dot, className }: { tone?: Tone; children: ReactNode; dot?: boolean; className?: string }) {
  return (
    <span className={cls("inline-flex items-center gap-1.5 px-2 py-[3px] rounded-md border text-[11px] font-semibold tracking-wide whitespace-nowrap", toneCls[tone], className)}>
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
      {children}
    </span>
  );
}

export const orderTone: Record<string, Tone> = { nuevo: "steel", confirmado: "pine", fabricacion: "oak", listo: "moss", despacho: "steel", entregado: "pine", anulado: "brick" };
export const payTone: Record<string, Tone> = { pendiente: "brick", parcial: "oak", pagado: "moss" };
export const linkTone: Record<string, Tone> = { pendiente: "oak", pagado: "moss", expirado: "fog", anulado: "brick", activo: "pine", usado: "steel", revocado: "brick", emitida: "steel", por_cobrar: "oak", planificada: "steel", corte: "oak", ensamblaje: "steel", acabado: "oak", qa: "pine", terminada: "moss" };

/* ---------------------------------- layout --------------------------------- */
export function Card({ className, children, pad = true }: { className?: string; children: ReactNode; pad?: boolean }) {
  return <div className={cls("bg-card border border-line rounded-xl shadow-[0_1px_2px_rgba(21,33,31,0.05)]", pad && "p-4", className)}>{children}</div>;
}

export function SectionTitle({ kicker, title, right }: { kicker?: string; title: string; right?: ReactNode }) {
  return (
    <div className="flex items-end justify-between gap-3 mb-3">
      <div>
        {kicker && <div className="font-mono text-[10.5px] tracking-[0.18em] text-oak uppercase mb-0.5">{kicker}</div>}
        <h2 className="font-display font-bold text-[17px] text-ink leading-tight">{title}</h2>
      </div>
      {right}
    </div>
  );
}

/* ---------------------------------- inputs --------------------------------- */
export function Field({ label, children, hint }: { label: string; children: ReactNode; hint?: string }) {
  return (
    <label className="block">
      <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-mut mb-1.5">{label}</span>
      {children}
      {hint && <span className="block text-[11px] text-fog mt-1">{hint}</span>}
    </label>
  );
}
export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cls("w-full px-3 py-2 rounded-lg border border-line2 bg-card text-[13.5px] text-ink placeholder:text-fog focus:outline-none focus:border-pine focus:ring-2 focus:ring-pine/15 transition-shadow", props.className)} />;
}
export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={cls("w-full px-3 py-2 rounded-lg border border-line2 bg-card text-[13.5px] text-ink focus:outline-none focus:border-pine focus:ring-2 focus:ring-pine/15", props.className)} />;
}

/* ---------------------------------- modal ---------------------------------- */
export function Modal({ open, onClose, title, kicker, children, wide }: { open: boolean; onClose: () => void; title: string; kicker?: string; children: ReactNode; wide?: boolean }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-night/55 backdrop-blur-[2px]" onClick={onClose} />
      <div className={cls("relative bg-card border border-line rounded-xl shadow-2xl anim-pop max-h-[88vh] overflow-auto w-full", wide ? "max-w-2xl" : "max-w-md")}>
        <div className="sticky top-0 bg-card/95 backdrop-blur border-b border-line px-5 py-3.5 flex items-start justify-between gap-4 rounded-t-xl">
          <div>
            {kicker && <div className="font-mono text-[10px] tracking-[0.18em] text-oak uppercase">{kicker}</div>}
            <h3 className="font-display font-bold text-[16px] text-ink">{title}</h3>
          </div>
          <button onClick={onClose} className="p-1.5 -m-1 rounded-lg text-mut hover:bg-ink/5 hover:text-ink transition-colors"><Icon name="x" size={16} /></button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}

export function Drawer({ open, onClose, title, kicker, children }: { open: boolean; onClose: () => void; title: string; kicker?: string; children: ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-night/45" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-[440px] bg-card border-l border-line shadow-2xl anim-drawer overflow-auto">
        <div className="sticky top-0 bg-card/95 backdrop-blur border-b border-line px-5 py-3.5 flex items-start justify-between gap-4">
          <div>
            {kicker && <div className="font-mono text-[10px] tracking-[0.18em] text-oak uppercase">{kicker}</div>}
            <h3 className="font-display font-bold text-[16px] text-ink">{title}</h3>
          </div>
          <button onClick={onClose} className="p-1.5 -m-1 rounded-lg text-mut hover:bg-ink/5 hover:text-ink transition-colors"><Icon name="x" size={16} /></button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}

/* ---------------------------------- tabs ----------------------------------- */
export function Tabs({ tabs, value, onChange }: { tabs: { id: string; label: string; icon?: string; count?: number }[]; value: string; onChange: (id: string) => void }) {
  return (
    <div className="inline-flex items-center gap-1 bg-ink/5 border border-line rounded-lg p-1">
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className={cls(
            "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[12.5px] font-semibold transition-all duration-150",
            value === t.id ? "bg-card text-ink shadow-sm border border-line" : "text-mut hover:text-ink"
          )}
        >
          {t.icon && <Icon name={t.icon} size={13} />}
          {t.label}
          {t.count !== undefined && <span className={cls("text-[10.5px] px-1.5 py-px rounded-full num", value === t.id ? "bg-pinel text-pined" : "bg-ink/8 text-mut")}>{t.count}</span>}
        </button>
      ))}
    </div>
  );
}

/* ---------------------------------- misc ----------------------------------- */
export function Stat({ label, value, sub, icon, tone = "pine", flash }: { label: string; value: string; sub?: ReactNode; icon: string; tone?: Tone; flash?: boolean }) {
  const iconBg: Record<Tone, string> = { pine: "bg-pinel text-pine", oak: "bg-oakl text-oakd", steel: "bg-steell text-steel", brick: "bg-brickl text-brick", moss: "bg-mossl text-[#41621f]", fog: "bg-ink/5 text-mut", night: "bg-ink text-paper" };
  return (
    <div className={cls("bg-card border border-line rounded-xl p-4 shadow-[0_1px_2px_rgba(21,33,31,0.05)] hover:shadow-md hover:-translate-y-px transition-all duration-200", flash && "flash-cell")}>
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-mut">{label}</div>
          <div className="font-display font-extrabold text-[26px] leading-tight text-ink mt-1 num">{value}</div>
          {sub && <div className="text-[11.5px] text-mut mt-1">{sub}</div>}
        </div>
        <div className={cls("w-9 h-9 rounded-lg grid place-items-center", iconBg[tone])}><Icon name={icon} size={17} /></div>
      </div>
    </div>
  );
}

export function Progress({ value, tone = "pine" }: { value: number; tone?: Tone }) {
  const bar: Record<Tone, string> = { pine: "bg-pine", oak: "bg-oak", steel: "bg-steel", brick: "bg-brick", moss: "bg-moss", fog: "bg-fog", night: "bg-ink" };
  return (
    <div className="h-1.5 w-full bg-ink/8 rounded-full overflow-hidden">
      <div className={cls("h-full rounded-full transition-all duration-500", bar[tone])} style={{ width: `${Math.min(100, value)}%` }} />
    </div>
  );
}

export function CopyBtn({ text, label = "Copiar", size = "sm" }: { text: string; label?: string; size?: "sm" | "md" }) {
  return (
    <Btn variant="outline" size={size} icon="copy" onClick={async () => { await copyText(text); }}>
      {label}
    </Btn>
  );
}

export function EmptyState({ icon, title, sub, action }: { icon: string; title: string; sub: string; action?: ReactNode }) {
  return (
    <div className="text-center py-12">
      <div className="w-14 h-14 mx-auto rounded-2xl bg-ink/5 grid place-items-center text-fog mb-3"><Icon name={icon} size={26} /></div>
      <div className="font-display font-bold text-[15px] text-ink">{title}</div>
      <div className="text-[12.5px] text-mut mt-1 max-w-sm mx-auto">{sub}</div>
      {action && <div className="mt-4 flex justify-center">{action}</div>}
    </div>
  );
}

export function Th({ children, right }: { children?: ReactNode; right?: boolean }) {
  return <th className={cls("px-3 py-2.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-mut whitespace-nowrap", right ? "text-right" : "text-left")}>{children}</th>;
}
export function Td({ children, right, className }: { children?: ReactNode; right?: boolean; className?: string }) {
  return <td className={cls("px-3 py-2.5 align-middle", right && "text-right", className)}>{children}</td>;
}

/* --------------------------------- toasts ---------------------------------- */
export function ToastHost({ toasts }: { toasts: { id: string; kind: "ok" | "warn" | "info"; msg: string }[] }) {
  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col gap-2 items-end">
      {toasts.map((t) => (
        <div key={t.id} className={cls("anim-pop flex items-center gap-2.5 pl-3 pr-4 py-2.5 rounded-lg border shadow-lg text-[13px] font-medium max-w-sm", t.kind === "ok" && "bg-pined text-paper border-pined", t.kind === "warn" && "bg-oak text-night border-oakd", t.kind === "info" && "bg-ink text-paper border-night")}>
          <Icon name={t.kind === "ok" ? "check" : t.kind === "warn" ? "alert" : "zap"} size={15} />
          {t.msg}
        </div>
      ))}
    </div>
  );
}
