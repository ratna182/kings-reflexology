import Image from "next/image";

type BotanicalVariant = "leaf" | "branch" | "monstera";

interface BotanicalArtProps {
  className?: string;
  variant?: BotanicalVariant;
}

const PHOTOS: Record<BotanicalVariant, { src: string; alt: string }> = {
  leaf: { src: "/daun-atas.webp", alt: "" },
  branch: { src: "/daun-kiri-bawah.webp", alt: "" },
  monstera: { src: "/daun-atas.webp", alt: "" },
};

const GOLD_TINT_FILTER =
  "grayscale(1) sepia(1) saturate(2.4) hue-rotate(5deg) brightness(0.85)";

export default function BotanicalArt({
  className,
  variant = "leaf",
}: BotanicalArtProps) {
  const photo = PHOTOS[variant];

  return (
    <div className={`${className ?? ""} aspect-[220/300]`} aria-hidden="true">
      <Image
        src={photo.src}
        alt={photo.alt}
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
