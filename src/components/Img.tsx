import { useState } from "react";
import { cls } from "../lib/util";
import { Icon } from "./ui";

export const IMG: Record<string, string> = {
  "/img/p1.jpg": "https://image.qwenlm.ai/generated-images/876c81bb-04b7-4ecf-b3c5-5409001f7961/_result.png",
  "/img/p2.jpg": "https://image.qwenlm.ai/generated-images/c4c2d864-549d-421e-a9e9-ee3f14fc7e78/_result.png",
  "/img/p3.jpg": "https://image.qwenlm.ai/generated-images/4c03f0dd-cf51-487c-964a-67a34323efb3/_result.png",
  "/img/p4.jpg": "https://image.qwenlm.ai/generated-images/9248a4c4-1d9b-4611-b940-870a805ce7d5/_result.png",
  "/img/p5.jpg": "https://image.qwenlm.ai/generated-images/2c56f5e9-08cb-49de-b7a4-963536e14050/_result.png",
  "/img/p6.jpg": "https://image.qwenlm.ai/generated-images/087283f8-cf51-449d-9d01-520b4731854c/_result.png",
};

export const resolveImg = (src: string) => IMG[src] ?? src;

export function Thumb({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div className={cls("grid place-items-center bg-pinel/50 text-pine/60 overflow-hidden", className)}>
        <Icon name="saw" size={22} />
      </div>
    );
  }
  return <img src={resolveImg(src)} alt={alt} loading="lazy" onError={() => setFailed(true)} className={cls("object-cover", className)} />;
}

/* blueprint placeholder for planos/renders without raster */
export function Blueprint({ label, className }: { label: string; className?: string }) {
  return (
    <div className={cls("relative grid place-items-center overflow-hidden bg-[#12303d] text-[#7fb3c9]", className)}>
      <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 200 120" preserveAspectRatio="none">
        <defs>
          <pattern id="bpgrid" width="14" height="14" patternUnits="userSpaceOnUse">
            <path d="M14 0H0v14" fill="none" stroke="#7fb3c9" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="200" height="120" fill="url(#bpgrid)" />
        <rect x="40" y="30" width="70" height="60" fill="none" stroke="#7fb3c9" strokeWidth="1" />
        <circle cx="140" cy="60" r="22" fill="none" stroke="#7fb3c9" strokeWidth="1" />
        <path d="M40 100h120M60 30V15h30v15" fill="none" stroke="#7fb3c9" strokeWidth="0.8" />
      </svg>
      <div className="relative text-center px-3">
        <Icon name="doc" size={22} className="mx-auto mb-1.5 opacity-80" />
        <div className="font-mono text-[10px] tracking-wider truncate max-w-[160px]">{label}</div>
      </div>
    </div>
  );
}
