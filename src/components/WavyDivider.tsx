interface WavyDividerProps {
  className?: string;
}

export default function WavyDivider({ className }: WavyDividerProps) {
  return (
    <div
      className={`wavy-divider ${className ?? ""}`}
      aria-hidden="true"
      style={{ filter: "drop-shadow(0 0 6px rgba(201,162,75,0.35))" }}
    >
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="h-full w-full"
        fill="none"
      >
        <path
          d="M0,34 C120,14 240,46 360,38 C480,30 600,10 720,22 C840,34 960,52 1080,40 C1200,28 1320,12 1440,30"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}