import { useId } from "react";

type Aspect = "4/3" | "4/5" | "16/9";

interface PhotoFrameProps {
  className?: string;
  aspect?: Aspect;
  radiusPct?: number;
  cursor?: boolean;
  variant?: "round" | "radius";
  children: React.ReactNode;
}

const ASPECT_VALUES: Record<Aspect, { w: number; h: number }> = {
  "4/3": { w: 4, h: 3 },
  "4/5": { w: 4, h: 5 },
  "16/9": { w: 16, h: 9 },
};

const GOLD_SHADOW =
  "0 14px 34px -14px rgba(201, 162, 75, 0.35), 4px 4px 14px 0 rgba(0, 0, 0, 0.25)";

export default function PhotoFrame({
  className,
  aspect = "4/3",
  radiusPct = 0.22,
  cursor = false,
  variant = "radius",
  children,
}: PhotoFrameProps) {
  const uid = useId().replace(/[^a-zA-Z0-9-_]/g, "");
  const clipId = `pf-clip-${uid}`;
  const { w, h } = ASPECT_VALUES[aspect];
  const hwRatio = h / w;
  const rx = radiusPct;
  const ry = radiusPct / hwRatio;
  const d = `M 0,0 L 1,0 L 1,${(1 - ry).toFixed(4)} A ${rx.toFixed(4)} ${ry.toFixed(4)} 0 0 1 ${(1 - rx).toFixed(4)},1 L 0,1 Z`;

  if (variant === "round") {
    return (
      <div
        className={`relative overflow-hidden rounded-full border-[1.5px] border-tertiary/60 ${className ?? ""}`}
        style={{ boxShadow: GOLD_SHADOW }}
        {...(cursor ? { "data-photo-cursor": "" } : {})}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden border-[1.5px] border-tertiary/55 ${className ?? ""}`}
      style={{ clipPath: `url(#${clipId})`, boxShadow: GOLD_SHADOW }}
      {...(cursor ? { "data-photo-cursor": "" } : {})}
    >
      <svg
        width="0"
        height="0"
        className="absolute"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d={d} />
          </clipPath>
        </defs>
      </svg>
      {children}
    </div>
  );
}