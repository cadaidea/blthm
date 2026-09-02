import { useEffect, useState } from "react";
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

export default function ThemeToggle({ dark = false }: { dark?: boolean }) {
  const [mode, setMode] = useTheme();
  const opts: { id: Mode; label: string; icon: string }[] = [
    { id: "light", label: "Día", icon: "panel" },
    { id: "dark", label: "Noche", icon: "clock" },
    { id: "system", label: "Sistema", icon: "gear" },
  ];
  return (
    <div
      className={`inline-flex items-center rounded-lg p-0.5 border ${dark ? "bg-paper/10 border-paper/15" : "bg-card border-line"}`}
      title="Apariencia"
      role="radiogroup"
    >
      {opts.map((o) => (
        <button
          key={o.id}
          role="radio"
          aria-checked={mode === o.id}
          onClick={() => setMode(o.id)}
          title={o.label}
          className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-bold transition-all ${
            mode === o.id
              ? dark
                ? "bg-oak text-night"
                : "bg-ink text-paper"
              : dark
                ? "text-paper/60 hover:text-paper"
                : "text-mut hover:text-ink"
          }`}
        >
          <Icon name={o.icon} size={12} />
          <span className="max-sm:hidden">{o.label}</span>
        </button>
      ))}
    </div>
  );
}
