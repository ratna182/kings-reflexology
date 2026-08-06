export default function PlaceholderArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 800"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <rect width="600" height="800" fill="var(--placeholder-bg)" />
      <g fill="none" stroke="var(--placeholder-line)">
        <path d="M80,220 C180,140 380,160 520,90" strokeWidth="1" opacity="0.3" />
        <path d="M80,340 C240,240 400,300 520,220" strokeWidth="1" opacity="0.5" />
        <path d="M80,500 C260,360 420,420 520,360" strokeWidth="1.2" opacity="0.65" />
        <path d="M80,640 C280,480 420,540 520,470" strokeWidth="2.5" opacity="0.8" />
      </g>
      <path
        d="M80,740 Q260,680 520,740"
        stroke="var(--placeholder-gold)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.9"
      />
    </svg>
  );
}
