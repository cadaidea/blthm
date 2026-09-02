import type { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { cls, copyText } from "../lib/util";
import type { LinkStatus } from "../lib/types";
import type { Toast } from "../lib/store";

/* ---------------------------------- icons ---------------------------------- */
const P: Record<string, ReactNode> = {
  logo: <><path d="M6 2.5h3.2V11h5.6V2.5H18V18h-3.2v-4H9.2v4H6V2.5z" fill="currentColor" stroke="none" /></>,
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
  shield: <><path d="M12 3 5 5.5v5.6c0 4.4 2.9 7.6 7 9.4 4.1-1.8 7-5 7-9.4V5.5L12 3z" /><path d="m8.8 11.8 2.3 2.3 4.2-4.4" /></>,
  eye: <><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" /><circle cx="12" cy="12" r="2.8" /></>,
  layers: <><path d="m12 3.5 8.5 4.5L12 12.5 3.5 8 12 3.5z" /><path d="m3.5 12 8.5 4.5L20.5 12M3.5 16l8.5 4.5L20.5 16" /></>,
  package: <><path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5v-9z" /><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9M7.7 5.2l8.6 4.6" /></>,
  brush: <><path d="m14.5 4 5.5 5.5-8.5 8.5c-1.5 1.5-4 1.5-5.5 0s-1.5-4 0-5.5L14.5 4z" /><path d="m12 6.5 5.5 5.5M4.5 20.5c1.5 0 2.5-1 2.5-2.5" /></>,
  pin: <><path d="M12 21s-6.5-5.4-6.5-10.3A6.5 6.5 0 0 1 12 4a6.5 6.5 0 0 1 6.5 6.7C18.5 15.6 12 21 12 21z" /><circle cx="12" cy="10.5" r="2.2" /></>,
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
  return (
    <button
      className={cls(
        "inline-flex items-center justify-center gap-1.5 font-semibold rounded-lg transition-all duration-150 active:scale-[0.97] disabled:opacity-45 disabled:pointer-events-none whitespace-nowrap",
        size === "sm" ? "text-[11.5px] px-2.5 py-1.5" : "text-[12.5px] px-3.5 py-2",
        variant === "primary" && "bg-pine text-paper hover:bg-pined shadow-sm hover:shadow-md",
        variant === "outline" && "bg-card border border-line2 text-ink hover:border-pine/60 hover:text-pined hover:bg-pinel/40",
        variant === "ghost" && "text-mut hover:bg-ink/6 hover:text-ink",
        variant === "danger" && "bg-brick text-paper hover:bg-[#963823]",
        variant === "oak" && "bg-oak text-paper hover:bg-oakd shadow-sm",
        variant === "dark" && "bg-night text-paper hover:bg-night2 border border-ink3",
        className
      )}
      {...rest}
    >
      {icon && <Icon name={icon} size={size === "sm" ? 13 : 15} />}
      {children}
    </button>
  );
}

export function CopyBtn({ text, label, size = "sm", icon = "copy", variant = "outline" }: { text: string; label?: string; size?: "sm" | "md"; icon?: string; variant?: "outline" | "primary" }) {
  return (
    <Btn size={size} variant={variant} icon={icon} onClick={() => copyText(text)}>{label}</Btn>
  );
}

/* ---------------------------------- badge ---------------------------------- */
const TONES: Record<string, string> = {
  pine: "bg-pinel text-pined border-pine/25",
  oak: "bg-oakl text-oakd border-oak/30",
  steel: "bg-steell text-steel border-steel/25",
  moss: "bg-mossl text-[#41621f] border-moss/30",
  brick: "bg-brickl text-brick border-brick/25",
  fog: "bg-ink/5 text-mut border-ink/10",
};
export function Badge({ tone = "fog", dot, children, className }: { tone?: string; dot?: boolean; children: ReactNode; className?: string }) {
  return (
    <span className={cls("inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-[10.5px] font-bold uppercase tracking-wide", TONES[tone], className)}>
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />}
      {children}
    </span>
  );
}

export const linkTone: Record<LinkStatus, "pine" | "oak" | "steel" | "moss" | "brick" | "fog"> = {
  pendiente: "oak", pagado: "moss", expirado: "fog", anulado: "brick",
};

/* ---------------------------------- cards ---------------------------------- */
export function Card({ children, className, pad = true }: { children: ReactNode; className?: string; pad?: boolean }) {
  return <div className={cls("bg-card border border-line rounded-xl shadow-[0_1px_2px_rgba(21,33,31,0.05)]", pad && "p-4", className)}>{children}</div>;
}

export function SectionTitle({ kicker, title, right }: { kicker: string; title: string; right?: ReactNode }) {
  return (
    <div className="flex items-end justify-between gap-3 mb-3">
      <div>
        <div className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-oakd">{kicker}</div>
        <h3 className="font-display font-bold text-[15.5px] text-ink leading-tight mt-0.5">{title}</h3>
      </div>
      {right}
    </div>
  );
}

const STAT_TONES: Record<string, string> = {
  pine: "bg-pinel text-pined", oak: "bg-oakl text-oakd", steel: "bg-steell text-steel", moss: "bg-mossl text-[#41621f]",
};
export function Stat({ label, value, icon, tone = "pine", sub, flash }: { label: string; value: string; icon: string; tone?: string; sub?: ReactNode; flash?: boolean }) {
  return (
    <div className={cls("bg-card border border-line rounded-xl p-3.5 hover:shadow-md hover:-translate-y-px transition-all", flash && "flash-cell")}>
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-mut">{label}</span>
        <span className={cls("w-8 h-8 rounded-lg grid place-items-center", STAT_TONES[tone])}><Icon name={icon} size={15} /></span>
      </div>
      <div className="font-display font-extrabold text-[24px] text-ink num leading-tight mt-1.5">{value}</div>
      {sub && <div className="text-[10.5px] text-mut mt-1 leading-snug">{sub}</div>}
    </div>
  );
}

/* ---------------------------------- forms ---------------------------------- */
export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[11px] font-bold uppercase tracking-[0.1em] text-mut mb-1">{label}</span>
      {children}
    </label>
  );
}
export function Input({ className, ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cls("w-full bg-card border border-line2 rounded-lg px-3 py-2 text-[13px] text-ink placeholder:text-fog outline-none focus:border-pine focus:ring-2 focus:ring-pine/15 transition-all", className)} {...rest} />;
}
export function Select({ className, children, ...rest }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={cls("w-full bg-card border border-line2 rounded-lg px-2.5 py-2 text-[13px] text-ink outline-none focus:border-pine focus:ring-2 focus:ring-pine/15 transition-all", className)} {...rest}>
      {children}
    </select>
  );
}

/* ---------------------------------- overlay -------------------------------- */
export function Modal({ open, onClose, kicker, title, children, wide }: { open: boolean; onClose: () => void; kicker: string; title: string; children: ReactNode; wide?: boolean }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4" role="dialog" aria-modal>
      <div className="absolute inset-0 bg-night/55 backdrop-blur-[2px]" onClick={onClose} />
      <div className={cls("relative bg-card border border-line rounded-2xl shadow-2xl w-full anim-pop max-h-[88vh] overflow-y-auto", wide ? "max-w-2xl" : "max-w-lg")}>
        <div className="sticky top-0 bg-card/95 backdrop-blur px-5 pt-4 pb-3 border-b border-line flex items-start justify-between gap-3 z-10">
          <div>
            <div className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-oakd">{kicker}</div>
            <h2 className="font-display font-extrabold text-[19px] text-ink leading-tight">{title}</h2>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg grid place-items-center text-mut hover:bg-ink/6 hover:text-ink transition-colors"><Icon name="x" size={16} /></button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}

export function Drawer({ open, onClose, kicker, title, children }: { open: boolean; onClose: () => void; kicker: string; title: string; children: ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-night/50 backdrop-blur-[2px]" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-card border-l border-line shadow-2xl anim-drawer flex flex-col">
        <div className="px-5 pt-5 pb-3.5 border-b border-line flex items-start justify-between gap-3">
          <div>
            <div className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-oakd">{kicker}</div>
            <h2 className="font-display font-extrabold text-[19px] text-ink leading-tight mt-0.5">{title}</h2>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg grid place-items-center text-mut hover:bg-ink/6 hover:text-ink transition-colors"><Icon name="x" size={16} /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-5">{children}</div>
      </div>
    </div>
  );
}

export function Tabs({ tabs, value, onChange }: { tabs: { id: string; label: string }[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex gap-1 bg-ink/5 rounded-xl p-1 w-fit max-w-full overflow-x-auto anim-up">
      {tabs.map((t) => (
        <button key={t.id} onClick={() => onChange(t.id)}
          className={cls("px-3.5 py-1.5 rounded-lg text-[12px] font-bold whitespace-nowrap transition-all", value === t.id ? "bg-card shadow-sm text-pined" : "text-mut hover:text-ink")}>
          {t.label}
        </button>
      ))}
    </div>
  );
}

/* ---------------------------------- tables --------------------------------- */
export function Th({ children, right }: { children?: ReactNode; right?: boolean }) {
  return <th className={cls("px-3 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-mut whitespace-nowrap", right ? "text-right" : "text-left")}>{children}</th>;
}
export function Td({ children, right, className }: { children?: ReactNode; right?: boolean; className?: string }) {
  return <td className={cls("px-3 py-2.5 align-middle", right && "text-right", className)}>{children}</td>;
}

export function Progress({ value, tone = "pine" }: { value: number; tone?: "pine" | "oak" | "moss" | "brick" | "steel" }) {
  const c = { pine: "bg-pine", oak: "bg-oak", moss: "bg-moss", brick: "bg-brick", steel: "bg-steel" }[tone];
  return (
    <div className="h-1.5 w-full rounded-full bg-ink/10 overflow-hidden">
      <div className={cls("h-full rounded-full transition-all duration-500", c)} style={{ width: `${Math.min(100, Math.max(2, value))}%` }} />
    </div>
  );
}

export function EmptyState({ icon, title, sub }: { icon: string; title: string; sub: string }) {
  return (
    <div className="py-12 text-center">
      <span className="w-12 h-12 mx-auto rounded-xl bg-ink/5 text-fog grid place-items-center mb-3"><Icon name={icon} size={22} /></span>
      <div className="font-display font-bold text-[15px] text-ink">{title}</div>
      <div className="text-[12px] text-mut mt-1 max-w-xs mx-auto">{sub}</div>
    </div>
  );
}

/* ---------------------------------- toasts --------------------------------- */
export function ToastHost({ toasts }: { toasts: Toast[] }) {
  return (
    <div className="fixed bottom-4 right-4 z-[80] space-y-2 w-[320px] max-w-[calc(100vw-2rem)]">
      {toasts.map((t) => (
        <div key={t.id} className={cls(
          "anim-pop flex items-start gap-2.5 rounded-xl border px-3.5 py-3 shadow-lg backdrop-blur text-[12.5px] font-medium",
          t.kind === "ok" && "bg-pined/95 border-pine text-paper",
          t.kind === "warn" && "bg-oakd/95 border-oak text-paper",
          t.kind === "info" && "bg-night/95 border-ink3 text-paper"
        )}>
          <Icon name={t.kind === "ok" ? "check" : t.kind === "warn" ? "alert" : "zap"} size={15} className="mt-0.5 shrink-0" />
          <span className="leading-snug">{t.msg}</span>
        </div>
      ))}
    </div>
  );
}
