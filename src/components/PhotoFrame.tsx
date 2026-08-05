import { useId } from "react";

type Aspect = "4/3" | "4/5" | "16/9";

interface PhotoFrameProps {
  className?: string;
  aspect?: Aspect;
  radiusPct?: number;
  children: React.ReactNode;
}

const ASPECT_VALUES: Record<Aspect, { w: number; h: number }> = {
  "4/3": { w: 4, h: 3 },
  "4/5": { w: 4, h: 5 },
  "16/9": { w: 16, h: 9 },
};

export default function PhotoFrame({
  className,
  aspect = "4/3",
  radiusPct = 0.22,
  children,
}: PhotoFrameProps) {
  const uid = useId().replace(/[^a-zA-Z0-9-_]/g, "");
  const clipId = `pf-clip-${uid}`;
  const { w, h } = ASPECT_VALUES[aspect];
  const hwRatio = h / w;
  const rx = radiusPct;
  const ry = radiusPct / hwRatio;
  const d = `M 0,0 L 1,0 L 1,${(1 - ry).toFixed(4)} A ${rx.toFixed(4)} ${ry.toFixed(4)} 0 0 1 ${(1 - rx).toFixed(4)},1 L 0,1 Z`;

  return (
    <div
      className={`relative overflow-hidden ${className ?? ""}`}
      style={{ clipPath: `url(#${clipId})` }}
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