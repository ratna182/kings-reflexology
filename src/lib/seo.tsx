import { branches, type Branch } from "@/data/branches";
import { services } from "@/data/services";

export const siteUrl = "https://kingsrefleksi.com";
export const siteName = "The King's Reflexology";
export const companyEmail = "info@kingsrefleksi.com";

export const areaServed = [
  { "@type": "City", name: "Bogor" },
  { "@type": "City", name: "Bekasi" },
];

const dayMap: Record<string, string> = {
  "Senin–Jumat": "Mo-Fr",
  "Senin–Minggu": "Mo-Su",
  "Sabtu–Minggu": "Sa-Su",
};

export function phoneIntl(phoneDisplay: string): string {
  const digits = phoneDisplay.replace(/\D/g, "");
  return `+62${digits.replace(/^0/, "")}`;
}

export function openingHoursSpecification(branch: Branch) {
  return (branch.hours ?? []).map((h) => {
    const [days, time] = h.split(" ");
    const [opens, closes] = time.replace(/\./g, ":").split("–");
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: (dayMap[days] ?? days)
        .split("-")
        .map((d) => `https://schema.org/${d}`),
      opens: opens.trim(),
      closes: closes.trim(),
    };
  });
}

const serviceTypes: Record<string, string> = {
  massage: "Relaxation massage",
  reflexology: "Foot reflexology",
  bekam: "Cupping therapy (Bekam)",
  "scrub-massage": "Indonesian body scrub massage",
  "ear-candle": "Ear candling",
  "totok-wajah": "Facial acupressure (Totok Wajah)",
};

function hasOfferCatalog(branch: Branch) {
  return {
    "@type": "OfferCatalog",
    name: `Layanan ${branch.name}`,
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        serviceType: serviceTypes[service.slug],
        description: service.summary,
        url: `${siteUrl}/#layanan`,
        provider: { "@id": `${siteUrl}/#${branch.id}` },
      },
    })),
  };
}

function localBusinessSchema(branch: Branch) {
  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": `${siteUrl}/#${branch.id}`,
    name: branch.name,
    alternateName: "King's Refleksi",
    description: `Cabang ${branch.name} — pijat refleksi, bekam, totok wajah, dan perawatan relaksasi keluarga di ${branch.area}, ${branch.city}.`,
    url: `${siteUrl}/#${branch.id}`,
    image: `${siteUrl}/hero-ambiance.webp`,
    telephone: phoneIntl(branch.phoneDisplay),
    priceRange: "Rp",
    foundingDate: "2003",
    areaServed: branch.city,
    hasMap: branch.mapsUrl,
    sameAs: [branch.waLink, branch.mapsUrl],
    address: {
      "@type": "PostalAddress",
      streetAddress: branch.address,
      addressLocality: branch.area,
      addressRegion: "Jawa Barat",
      postalCode: branch.postalCode,
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: branch.geo.latitude,
      longitude: branch.geo.longitude,
    },
    openingHoursSpecification: openingHoursSpecification(branch),
    hasOfferCatalog: hasOfferCatalog(branch),
    parentOrganization: { "@id": `${siteUrl}/#organization` },
  };
}

function organizationSchema() {
  const [mainBranch] = branches;
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    alternateName: "King's Refleksi",
    url: siteUrl,
    email: companyEmail,
    description:
      "The King's Reflexology — pijat refleksi, bekam, totok wajah, dan perawatan relaksasi keluarga di Bogor & Bekasi sejak 2003. Sejak 2006 berganti nama menjadi King's Refleksi, berawal dari Bogor Refleksi pada 2003.",
    foundingDate: "2003",
    areaServed,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo-besar.webp`,
      width: 396,
      height: 167,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: phoneIntl(mainBranch.phoneDisplay),
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: ["id", "en"],
    },
    sameAs: [mainBranch.waLink],
    subOrganization: branches.map((branch) => ({
      "@id": `${siteUrl}/#${branch.id}`,
    })),
  };
}

function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteName,
    inLanguage: "id-ID",
    description:
      "Pijat refleksi, bekam, totok wajah, dan perawatan relaksasi keluarga di Bogor & Bekasi.",
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

function breadcrumbSchema() {
  const items = [
    { name: "Home", path: "/" },
    { name: "Layanan", path: "/#layanan" },
    { name: "Lokasi", path: "/#lokasi" },
    { name: "Kontak", path: "/#kontak" },
  ];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

function faqSchema() {
  const answers: Record<string, string> = {
    massage: services[0].description,
    reflexology: services[1].description,
    bekam: services[2].description,
    "scrub-massage": services[3].description,
    "ear-candle": services[4].description,
    "totok-wajah": services[5].description,
  };

  const questions = [
    {
      name: "Apa itu pijat refleksi dan apa bedanya dengan pijat biasa?",
      answer: answers.reflexology,
    },
    { name: "Apa itu bekam? Apakah bekam aman?", answer: answers.bekam },
    { name: "Apa itu totok wajah?", answer: answers["totok-wajah"] },
    { name: "Apa itu terapi ear candle?", answer: answers["ear-candle"] },
    { name: "Bagaimana cara menjadi member The King's Reflexology?", answer: "Pendaftaran member dilakukan langsung melalui admin cabang terdekat di Bogor maupun Bekasi. Setiap transaksi Rp100.000 mendapatkan 1 poin yang dapat ditukarkan berupa diskon atau merchandise eksklusif." },
    {
      name: "Sejak kapan The King's Reflexology berdiri dan apa sejarahnya?",
      answer: "Bogor Refleksi didirikan pada tahun 2003, hadir saat layanan refleksi profesional masih belum banyak tersedia di Kota Bogor. Pada tahun 2006 kami resmi berganti nama menjadi King's Refleksi, mencerminkan kemajuan dan komitmen kami dalam memberikan layanan terbaik. Kini kami memiliki 3 cabang aktif di Bogor dan Bekasi.",
    },
    {
      name: "Di mana saja lokasi cabang The King's Reflexology?",
      answer: "Kami memiliki 3 cabang: The King's Reflexology Yasmin di Bogor Barat, The King's Reflexology Bukit Cimanggu City di Tanah Sareal Bogor, dan The King's Reflexology Grand Galaxy di Ruko Grand Galaxy City, Jl. Boulevard Raya, Blok RGA No. 95, Bekasi Selatan. Setiap cabang buka mulai pukul 09.00 WIB.",
    },
    {
      name: "Bagaimana cara reservasi atau menanyakan harga?",
      answer: "Reservasi dan informasi harga dapat dilakukan langsung melalui WhatsApp admin cabang terdekat di Bogor maupun Bekasi. Harga bervariasi per cabang dan promo, pastikan Anda mendapat penawaran terbaik dengan bertanya langsung ke admin cabang.",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.name,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

function webpageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: `${siteName} — Pijat Refleksi & Keluarga di Bogor & Bekasi`,
    inLanguage: "id-ID",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteUrl}/hero-ambiance.webp`,
      width: 1200,
      height: 630,
    },
    datePublished: "2026-08-07",
  };
}

const schemas: Record<string, unknown>[] = [
  webpageSchema(),
  websiteSchema(),
  organizationSchema(),
  breadcrumbSchema(),
  faqSchema(),
  ...branches.map(localBusinessSchema),
];

export function JsonLd() {
  return (
    <>
      {schemas.map((schema) => {
        const type = String(schema["@type"]);
        const id =
          type === "WebSite"
            ? "website"
            : type === "Organization"
              ? "org"
              : type === "BreadcrumbList"
                ? "breadcrumb"
                : type === "FAQPage"
                  ? "faq"
                  : String(schema["@id"]);
        return (
          <script
            key={id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        );
      })}
    </>
  );
}
