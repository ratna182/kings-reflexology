import type { MetadataRoute } from "next";

const siteUrl = "https://kingsrefleksi.com";

const images = [
  "/hero-ambiance.webp",
  "/about-hero.webp",
  "/about-heritage-2003.webp",
  "/about-rebrand-2006.webp",
  "/about-today.webp",
  "/layanan-massage.webp",
  "/layanan-reflexology.webp",
  "/layanan-bekam.webp",
  "/layanan-scrub-massage.webp",
  "/layanan-ear-candle.webp",
  "/layanan-totok-wajah.webp",
  "/logo-kings.webp",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: images.map((path) => `${siteUrl}${path}`),
    },
  ];
}