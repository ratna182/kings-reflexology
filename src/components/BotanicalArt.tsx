type BotanicalVariant = "leaf" | "branch" | "monstera";

interface BotanicalArtProps {
  className?: string;
  variant?: BotanicalVariant;
}

const shared = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function BotanicalArt({
  className,
  variant = "leaf",
}: BotanicalArtProps) {
  return (
    <svg viewBox="0 0 220 300" className={className} aria-hidden="true" {...shared}>
      {variant === "leaf" && (
        <g>
          <g opacity="0.3">
            <path d="M56 70 C 44 108 40 150 46 196 C 50 232 44 262 30 292" />
            <path d="M44 120 C 18 118 2 112 -4 104" />
            <path d="M40 174 C 14 170 -2 162 -8 152" />
            <path d="M42 226 C 16 222 0 214 -6 204" />
          </g>
          <g opacity="0.55">
            <path d="M78 66 C 72 118 78 178 86 230 C 92 268 96 282 108 294" />
            <path d="M80 150 C 60 146 46 140 38 132" />
            <path d="M82 192 C 62 188 48 182 40 172" />
            <path d="M82 88 C 64 84 52 78 46 68" />
          </g>
          <g opacity="0.9">
            <path d="M108 60 C 100 118 106 184 114 234 C 120 272 124 286 136 294" />
            <path d="M108 134 C 88 130 72 122 64 112" />
            <path d="M110 176 C 90 172 74 164 66 154" />
            <path d="M110 96 C 92 92 78 84 72 72" />
            <circle cx="114" cy="40" r="4" />
            <circle cx="114" cy="40" r="1.5" />
          </g>
        </g>
      )}

      {variant === "branch" && (
        <g>
          <g opacity="0.3">
            <path d="M96 30 C 88 84 82 140 78 196 C 74 244 68 276 58 300" />
            <path d="M80 150 C 56 142 38 130 26 114" />
            <path d="M76 210 C 54 202 38 190 28 174" />
            <path d="M90 60 C 68 54 52 44 42 30" />
          </g>
          <g opacity="0.55">
            <path d="M112 44 C 104 92 100 148 98 206 C 96 252 94 276 92 296" />
            <path d="M99 120 C 78 112 60 98 48 80" />
            <path d="M98 172 C 78 164 62 150 52 132" />
            <path d="M103 76 C 82 68 66 54 56 38" />
          </g>
          <g opacity="0.9">
            <path d="M132 52 C 126 96 122 152 122 210 C 122 256 124 280 128 296" />
            <path d="M123 132 C 104 124 88 110 78 92" />
            <path d="M123 186 C 104 178 88 164 78 146" />
            <path d="M128 86 C 110 78 96 64 88 48" />
            <circle cx="133" cy="36" r="4" />
            <circle cx="133" cy="36" r="1.5" />
          </g>
        </g>
      )}

      {variant === "monstera" && (
        <g>
          <g opacity="0.28">
            <path d="M110 292 C 108 240 110 184 112 132 C 114 92 116 72 122 52" />
            <path d="M112 140 C 150 134 182 112 204 84" />
            <path d="M112 140 C 74 134 42 112 20 84" />
            <path d="M112 140 C 146 160 170 150 190 128" />
          </g>
          <g opacity="0.55">
            <path d="M112 292 C 110 244 112 190 112 134 C 112 96 114 74 116 54" />
            <path d="M112 134 C 88 162 76 162 64 148" />
            <path d="M112 134 C 136 162 148 162 160 148" />
            <path d="M112 96 C 96 74 92 60 92 42" />
            <path d="M112 178 C 90 198 82 196 74 184" />
            <path d="M112 178 C 134 198 142 196 150 184" />
          </g>
          <g opacity="0.9">
            <path d="M112 292 C 110 248 112 196 112 136 C 112 98 114 76 116 56" />
            <path d="M112 136 C 136 126 158 110 176 88" />
            <path d="M112 136 C 88 126 66 110 48 88" />
            <path d="M112 136 C 130 120 140 112 146 96" />
            <path d="M112 136 C 94 120 84 112 78 96" />
            <circle cx="116" cy="42" r="4" />
            <circle cx="116" cy="42" r="1.5" />
          </g>
        </g>
      )}
    </svg>
  );
}
