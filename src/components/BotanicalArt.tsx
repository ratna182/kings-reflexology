import Image from "next/image";

type BotanicalPhoto = "leaf-top" | "leaf-top-mirror" | "leaf-bottom" | "leaf-bottom-mirror";

interface BotanicalArtProps {
  className?: string;
  photo?: BotanicalPhoto;
  variant?: "leaf" | "branch" | "monstera";
}

const PHOTOS: Record<BotanicalPhoto, { src: string; aspect: string }> = {
  "leaf-top": { src: "/daun-atas.webp", aspect: "aspect-[5/8]" },
  "leaf-top-mirror": { src: "/daun-atas - Copy.webp", aspect: "aspect-[5/8]" },
  "leaf-bottom": { src: "/daun-kiri-bawah.webp", aspect: "aspect-[7/4]" },
  "leaf-bottom-mirror": { src: "/daun-kiri-bawah - Copy.webp", aspect: "aspect-[7/4]" },
};

const VARIANT_FALLBACK: Record<string, BotanicalPhoto> = {
  leaf: "leaf-top",
  monstera: "leaf-top-mirror",
  branch: "leaf-bottom",
};

const GOLD_TINT_FILTER =
  "grayscale(1) sepia(1) saturate(2.4) hue-rotate(5deg) brightness(0.85)";

export default function BotanicalArt({
  className,
  photo,
  variant = "leaf",
}: BotanicalArtProps) {
  const resolved: BotanicalPhoto = photo ?? VARIANT_FALLBACK[variant];

  return (
    <div className={`${className ?? ""} ${PHOTOS[resolved].aspect}`} aria-hidden="true">
      <Image
        src={PHOTOS[resolved].src}
        alt=""
        fill
        sizes="(max-width: 768px) 40vw, 26vw"
        className="object-contain"
        style={{ filter: GOLD_TINT_FILTER }}
        loading="lazy"
        draggable={false}
      />
    </div>
  );
}
