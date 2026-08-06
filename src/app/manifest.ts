import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The King's Reflexology — Pijat Refleksi & Keluarga di Bogor & Bekasi",
    short_name: "The King's Reflexology",
    description:
      "Pijat refleksi, bekam, totok wajah, dan perawatan relaksasi keluarga di 3 cabang Bogor & Bekasi. Reservasi mudah via WhatsApp.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    lang: "id-ID",
    categories: ["health", "lifestyle", "beauty", "business"],
    icons: [
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.png",
        sizes: "32x32",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/og-image.jpg",
        sizes: "1200x630",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}