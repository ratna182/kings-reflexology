"use client";

import Reveal from "@/components/motion/Reveal";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import BotanicalArt from "@/components/BotanicalArt";

type Feather = { title: string; text: string; icon: React.ReactNode };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const features: Feather[] = [
  {
    title: "20+ Tahun Pengalaman",
    text: "Melayani keluarga Bogor & Bekasi sejak 2003",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" {...stroke}>
        <path d="M3 6l3-2 3 2 3-2 3 2 3-2 3 2v11l-3 2-3-2-3 2-3-2-3 2-3-2V6Z" />
        <path d="M7 4.5 6 10m5-5.5-1 5.5m5-5.5-1 5.5m5-5.5-1 5.5" opacity="0.55" />
      </svg>
    ),
  },
  {
    title: "Terapis Bersertifikat",
    text: "Profesional terlatih di tiap teknik pijat",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" {...stroke}>
        <circle cx="12" cy="9" r="3.2" />
        <path d="M8 13.5 6.5 21l5.5-2.6 5.5 2.6L16 13.5" />
        <path d="M12 5.8v1.4m0 3v1.4" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Suasana Nyaman & Higienis",
    text: "Ruang perawatan bersih, tenang, dan privat",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" {...stroke}>
        <path d="M12 3.5c3 3 5.5 5.5 5.5 9a5.5 5.5 0 0 1-11 0c0-3.5 2.5-6 5.5-9Z" />
        <path d="M12 21v-2" />
        <path d="M9 17c.5 0 1 .7 3 .7s2.5-.7 3-.7" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Kepuasan Pelanggan",
    text: "Member setia jadi bukti kualitas layanan kami",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true" {...stroke}>
        <path d="m12 4 2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 9.7l5.4-.8L12 4Z" />
        <path d="M9 13h6" opacity="0.5" />
      </svg>
    ),
  },
];

export default function FeatureIconRow() {
  return (
    <section aria-label="Keunggulan The King's Reflexology" className="relative isolate overflow-hidden py-[var(--section-gap-mobile)] lg:py-[var(--section-gap)]">
      <BotanicalArt className="botanical-dark absolute -left-14 -top-10 w-[min(260px,32vw)] -z-10" variant="branch" />
      <BotanicalArt className="botanical absolute -right-14 bottom-0 w-[min(240px,30vw)] -z-10" variant="leaf" />
      <div className="container-editorial">
        <StaggerContainer
          className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
          staggerSpeed="normal"
        >
          {features.map((f) => (
            <StaggerItem key={f.title} className="h-full">
              <Reveal delay={0.1}>
                <div className="group">
                  <span className="feature-icon transition-colors duration-300 group-hover:bg-tertiary group-hover:text-on-tertiary">
                    {f.icon}
                  </span>
                  <h3 className="mt-5 font-display text-[clamp(18px,1.8vw,22px)] leading-[1.4] text-primary">
                    {f.title}
                  </h3>
                  <p className="mt-2 max-w-[26ch] text-sm leading-6 text-on-surface-variant">
                    {f.text}
                  </p>
                </div>
              </Reveal>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}