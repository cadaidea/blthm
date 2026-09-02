/* Gráficos SVG a mano — sin librerías externas */

export function Sparkline({ data, height = 56, stroke = "#19604f", fill = true }: { data: number[]; height?: number; stroke?: string; fill?: boolean }) {
  const w = 260;
  const max = Math.max(...data, 1);
  const min = Math.min(...data, 0);
  const span = max - min || 1;
  const pts = data.map((v, i) => [8 + (i / (data.length - 1)) * (w - 16), height - 8 - ((v - min) / span) * (height - 16)] as const);
  const path = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
  const area = `${path} L${pts[pts.length - 1][0]},${height - 2} L${pts[0][0]},${height - 2} Z`;
  const gid = `sg${stroke.replace("#", "")}`;
  return (
    <svg viewBox={`0 0 ${w} ${height}`} className="w-full" style={{ height }} preserveAspectRatio="none">
      {fill && (
        <>
          <defs>
            <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={stroke} stopOpacity="0.22" />
              <stop offset="100%" stopColor={stroke} stopOpacity="0.01" />
            </linearGradient>
          </defs>
          <path d={area} fill={`url(#${gid})`} />
        </>
      )}
      <path d={path} fill="none" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" className="line-draw" />
      <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="3.4" fill={stroke} stroke="#fcfdfa" strokeWidth="1.5" />
    </svg>
  );
}

export function Bars({ data, labels, height = 130, color = "#19604f" }: { data: number[]; labels: string[]; height?: number; color?: string }) {
  const max = Math.max(...data, 1);
  return (
    <div className="flex items-end gap-2 w-full" style={{ height: height + 22 }}>
      {data.map((v, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1.5 group min-w-0">
          <div className="text-[10px] font-mono text-mut opacity-0 group-hover:opacity-100 transition-opacity num">${Math.round(v).toLocaleString()}</div>
          <div className="w-full rounded-t-md transition-all duration-200 group-hover:opacity-80 bar-grow" style={{ height: Math.max(4, (v / max) * height), background: i === data.length - 1 ? "#c9821f" : color, animationDelay: `${i * 40}ms` }} />
          <div className="text-[9.5px] text-mut truncate max-w-full">{labels[i]}</div>
        </div>
      ))}
    </div>
  );
}

export function Donut({ slices, size = 128, thickness = 17, centerTop, centerBottom }: { slices: { value: number; color: string; label: string }[]; size?: number; thickness?: number; centerTop?: string; centerBottom?: string }) {
  const total = Math.max(slices.reduce((a, s) => a + s.value, 0), 1);
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  let acc = 0;
  return (
    <div className="flex items-center gap-4">
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e6eae1" strokeWidth={thickness} />
          {slices.map((s, i) => {
            const frac = s.value / total;
            const dash = `${frac * c} ${c}`;
            const offset = -acc * c;
            acc += frac;
            return <circle key={i} cx={size / 2} cy={size / 2} r={r} fill="none" stroke={s.color} strokeWidth={thickness} strokeDasharray={dash} strokeDashoffset={offset} strokeLinecap="butt" style={{ transition: "stroke-dasharray .6s ease" }} />;
          })}
        </svg>
        <div className="absolute inset-0 grid place-items-center text-center">
          <div>
            <div className="font-display font-extrabold text-[17px] text-ink num leading-none">{centerTop}</div>
            {centerBottom && <div className="text-[9.5px] text-mut mt-1 uppercase tracking-wider">{centerBottom}</div>}
          </div>
        </div>
      </div>
      <div className="space-y-1.5 min-w-0">
        {slices.map((s, i) => (
          <div key={i} className="flex items-center gap-2 text-[11.5px]">
            <span className="w-2.5 h-2.5 rounded-[3px] shrink-0" style={{ background: s.color }} />
            <span className="text-mut truncate">{s.label}</span>
            <span className="ml-auto font-mono text-[11px] text-ink num pl-2">{Math.round((s.value / total) * 100)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
