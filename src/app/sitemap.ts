import type { MetadataRoute } from "next";

const siteUrl = "https://www.kingsrefleksi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/#layanan`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/#tentang-kami`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/#lokasi`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/#kontak`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
