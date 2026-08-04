"use client";

import { useState } from "react";
import Image from "next/image";
import PlaceholderArt from "@/components/PlaceholderArt";

interface SiteImageProps {
  src?: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export default function SiteImage({
  src,
  alt,
  className,
  sizes,
  priority,
}: SiteImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return <PlaceholderArt className={className} />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
