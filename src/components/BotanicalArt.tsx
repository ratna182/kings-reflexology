type BotanicalVariant = "leaf" | "branch" | "monstera";

interface BotanicalArtProps {
  className?: string;
  variant?: BotanicalVariant;
}

export default function BotanicalArt({
  className,
  variant = "leaf",
}: BotanicalArtProps) {
  return (
    <svg
      viewBox="0 0 220 300"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {variant === "leaf" && (
        <g>
          <path d="M44 292 C 52 250 38 214 50 152 C 60 120 44 96 56 62" />
          <path d="M50 152 C 70 140 90 130 108 126" />
          <path d="M50 152 C 30 142 18 134 10 128" />
          <path d="M48 248 C 34 240 22 230 14 220" />
          <path d="M52 212 C 38 202 28 194 20 184" />
          <path d="M54 168 C 42 160 32 150 28 142" />
          <path d="M58 118 C 44 110 36 100 32 90" />
          <path d="M62 78 C 52 70 46 64 44 56" />
          <path d="M48 248 C 64 240 76 232 84 224" />
          <path d="M50 212 C 66 204 78 196 88 190" />
          <path d="M52 168 C 68 160 80 154 92 150" />
          <path d="M56 118 C 72 110 84 106 96 102" />
          <path d="M60 78 C 72 72 82 66 90 62" />
          <circle cx="66" cy="54" r="5" />
          <circle cx="66" cy="54" r="2" />
        </g>
      )}

      {variant === "branch" && (
        <g>
          <path d="M52 292 C 60 250 66 210 78 168 C 88 132 96 100 104 66" />
          <path d="M78 168 C 92 160 108 154 124 152" />
          <path d="M82 136 C 96 128 112 124 128 122" />
          <path d="M86 106 C 100 98 114 94 130 92" />
          <path d="M74 198 C 58 192 44 184 34 174" />
          <path d="M70 228 C 54 222 40 214 30 202" />
          <path d="M66 262 C 50 256 38 248 30 238" />
          <path d="M124 152 C 130 144 138 138 146 134" />
          <path d="M128 122 C 136 114 144 108 152 104" />
          <path d="M34 174 C 30 166 28 158 28 150" />
          <path d="M28 202 C 22 194 18 186 16 178" />
          <path d="M30 238 C 22 230 16 222 12 214" />
          <circle cx="104" cy="66" r="5" />
          <circle cx="104" cy="66" r="2" />
        </g>
      )}

      {variant === "monstera" && (
        <g>
          <path d="M110 296 C 106 244 108 190 110 134 C 112 96 108 78 104 60" />
          <path d="M110 134 C 148 128 178 108 200 84" />
          <path d="M110 134 C 72 128 42 108 20 84" />
          <path d="M110 134 C 146 148 168 128 186 106" />
          <path d="M110 134 C 74 148 52 128 34 106" />
          <path d="M110 134 C 132 170 146 168 156 152" />
          <path d="M110 134 C 88 170 74 168 64 152" />
          <path d="M110 134 C 128 108 136 96 140 78" />
          <path d="M110 134 C 92 108 84 96 80 78" />
          <circle cx="104" cy="60" r="5" />
          <circle cx="104" cy="60" r="2" />
        </g>
      )}
    </svg>
  );
}