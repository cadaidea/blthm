import { useState } from "react";
import { cls } from "../lib/util";

function Placeholder({ label, className }: { label: string; className?: string }) {
  return (
    <div className={cls("grid place-items-center bg-[linear-gradient(135deg,#e6ebe2,#d9e2d6)] text-pined/60 overflow-hidden", className)}>
      <svg viewBox="0 0 80 60" className="w-3/4 h-3/4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="22" width="60" height="20" rx="3" />
        <rect x="16" y="12" width="48" height="12" rx="3" />
        <path d="M14 42v8M66 42v8M20 42v8M60 42v8" />
      </svg>
      <span className="sr-only">{label}</span>
    </div>
  );
}

export function Thumb({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [err, setErr] = useState(false);
  if (!src || err) return <Placeholder label={alt} className={className} />;
  return <img src={src} alt={alt} loading="lazy" onError={() => setErr(true)} className={cls("object-cover", className)} />;
}

export function Blueprint({ label, className }: { label: string; className?: string }) {
  return (
    <div className={cls("grid place-items-center bg-[#12242a] overflow-hidden relative", className)}>
      <svg viewBox="0 0 100 70" className="w-full h-full text-steel" fill="none" strokeWidth="0.7">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 12.5} y1="0" x2={i * 12.5} y2="70" stroke="currentColor" strokeOpacity="0.18" />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 11.6} x2="100" y2={i * 11.6} stroke="currentColor" strokeOpacity="0.18" />
        ))}
        <rect x="25" y="15" width="50" height="34" stroke="#8fb6cc" strokeDasharray="3 2" />
        <line x1="25" y1="15" x2="75" y2="49" stroke="#8fb6cc" strokeOpacity="0.5" strokeDasharray="2 2" />
        <line x1="75" y1="15" x2="25" y2="49" stroke="#8fb6cc" strokeOpacity="0.5" strokeDasharray="2 2" />
        <circle cx="50" cy="32" r="3" stroke="#c9821f" />
        <text x="50" y="60" textAnchor="middle" fontSize="5" fill="#8fb6cc" fontFamily="monospace">{label}</text>
      </svg>
    </div>
  );
}
