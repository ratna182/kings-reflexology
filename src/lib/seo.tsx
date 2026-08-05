import { branches, type Branch } from "@/data/branches";
import { services } from "@/data/services";

export const siteUrl = "https://www.kingsrefleksi.com";
export const siteName = "Kings Refleksi";
export const companyEmail = "info@kingsrefleksi.com";

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
    url: `${siteUrl}/#${branch.id}`,
    image: `${siteUrl}/hero-ambiance.webp`,
    telephone: phoneIntl(branch.phoneDisplay),
    priceRange: "Rp",
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
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    url: siteUrl,
    email: companyEmail,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo-kings.webp`,
      width: 396,
      height: 167,
    },
    subOrganization: branches.map((branch) => ({
      "@id": `${siteUrl}/#${branch.id}`,
    })),
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
    { name: "Bagaimana cara menjadi member Kings Refleksi?", answer: "Pendaftaran member dilakukan langsung melalui admin cabang terdekat di Bogor maupun Bekasi. Setiap transaksi Rp100.000 mendapatkan 1 poin yang dapat ditukarkan berupa diskon atau merchandise eksklusif." },
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

const schemas: Record<string, unknown>[] = [
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
          type === "Organization"
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
