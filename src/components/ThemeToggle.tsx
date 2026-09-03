import { useEffect, useRef, useState } from "react";
import { Icon } from "./ui";

type Mode = "light" | "dark" | "system";
const KEY = "bletia-theme";

const apply = (mode: Mode) => {
  const dark = mode === "dark" || (mode === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
};

export function useTheme() {
  const [mode, setMode] = useState<Mode>(() => (localStorage.getItem(KEY) as Mode) || "system");
  useEffect(() => {
    localStorage.setItem(KEY, mode);
    apply(mode);
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => mode === "system" && apply("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [mode]);
  return [mode, setMode] as const;
}

const OPTS: { id: Mode; icon: string; label: string }[] = [
  { id: "light", icon: "sun", label: "Día" },
  { id: "dark", icon: "moon", label: "Noche" },
  { id: "system", icon: "monitor", label: "Sistema" },
];

/* Un solo ícono visible (el del modo activo). Al hacer clic, popup para elegir — sin texto. */
export default function ThemeToggle({ dark = false }: { dark?: boolean }) {
  const [mode, setMode] = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = OPTS.find((o) => o.id === mode)!;

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={`Apariencia: ${active.label}`}
        title={`Apariencia: ${active.label}`}
        className={`w-10 h-10 grid place-items-center rounded-full transition-all hover:scale-105 active:scale-95 ${
          dark ? "text-paper/80 hover:bg-paper/10" : "text-ink/70 hover:bg-ink/6"
        } ${open ? (dark ? "bg-paper/10" : "bg-ink/6") : ""}`}
      >
        <Icon name={active.icon} size={18} />
      </button>
      {open && (
        <div
          className={`anim-pop absolute right-0 top-12 z-50 p-1.5 rounded-xl border shadow-xl flex gap-1 ${
            dark ? "bg-night2 border-line" : "bg-card border-line"
          }`}
          role="radiogroup"
          aria-label="Elegir apariencia"
        >
          {OPTS.map((o) => (
            <button
              key={o.id}
              role="radio"
              aria-checked={mode === o.id}
              title={o.label}
              onClick={() => { setMode(o.id); setOpen(false); }}
              className={`w-10 h-10 grid place-items-center rounded-lg transition-all ${
                mode === o.id
                  ? "bg-ink text-paper dark:bg-paper dark:text-ink shadow-sm"
                  : dark
                    ? "text-paper/60 hover:bg-paper/10 hover:text-paper"
                    : "text-mut hover:bg-ink/6 hover:text-ink"
              }`}
            >
              <Icon name={o.icon} size={17} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
