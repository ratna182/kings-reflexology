import Hero from "@/components/sections/Hero";
import MemberBenefits from "@/components/sections/MemberBenefits";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Branches from "@/components/sections/Branches";
import Contact from "@/components/sections/Contact";
import History from "@/components/sections/History";
import { branches } from "@/data/branches";

const siteUrl = "https://www.kingsrefleksi.com";

const dayMap: Record<string, string> = {
  "Senin–Jumat": "Mo-Fr",
  "Senin–Minggu": "Mo-Su",
  "Sabtu–Minggu": "Sa-Su",
};

function schemaHours(hours: string[]) {
  return hours.map((h) => {
    const [days, time] = h.split(" ");
    return `${dayMap[days] ?? days} ${time.replace(/\./g, ":")}`;
  });
}

function LocalBusinessSchemas() {
  const schemas = branches.map((branch) => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: branch.name,
    url: `${siteUrl}/#${branch.id}`,
    telephone: `+62${branch.phoneDisplay.replace(/\D/g, "").replace(/^0/, "")}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: branch.address,
      addressLocality: branch.city,
      addressCountry: "ID",
    },
    ...(branch.hours
      ? { openingHours: schemaHours(branch.hours) }
      : {}),
  }));

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

export default function Home() {
  return (
    <main>
      <LocalBusinessSchemas />
      <Hero />
      <MemberBenefits />
      <About />
      <Services />
      <Branches />
      <Contact />
      <History />
    </main>
  );
}
