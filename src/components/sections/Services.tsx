"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import ServiceIcon from "@/components/icons/ServiceIcon";
import SiteImage from "@/components/SiteImage";
import { services } from "@/data/services";
import { defaultBranch, waLinkWithMessage } from "@/data/branches";
import Reveal from "@/components/motion/Reveal";
import RevealText from "@/components/motion/RevealText";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import MagneticButton from "@/components/motion/MagneticButton";
import { ease, duration } from "@/lib/motion";

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="layanan"
      aria-labelledby="layanan-title"
      className="section-cut bg-surface-container-low"
    >
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-6 lg:col-start-2">
            <Reveal delay={0}>
              <p className="label-caps text-tertiary">Layanan</p>
            </Reveal>
            <RevealText
              text="Perawatan untuk Satu Keluarga"
              as="h2"
              className="mt-4 font-display text-[clamp(26px,3vw,32px)] leading-[1.3] text-primary"
              delay={0.1}
            />
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-xl text-lg leading-[1.6] text-on-surface-variant">
                Dari pijat relaksasi hingga terapi tradisional seperti bekam dan
                totok wajah — setiap perawatan disesuaikan dengan kebutuhan tubuh
                dan keluarga Anda.
              </p>
            </Reveal>
          </div>
        </div>

        <StaggerContainer
          className="mt-10 grid items-start gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4"
          staggerSpeed="fast"
          delay={0.3}
        >
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <StaggerItem key={service.slug} className="h-full">
                <article className="card card-hover h-full overflow-hidden">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <SiteImage
                      src={service.image}
                      alt={`Layanan ${service.name} di Kings Refleksi`}
                      className="h-full w-full object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="card-icon">
                      <ServiceIcon slug={service.slug} />
                    </span>
                  <h3 className="mt-5 font-display text-[clamp(20px,2vw,24px)] leading-[1.5] text-primary">
                    {service.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-on-surface-variant">
                    {service.summary}
                  </p>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`service-${service.slug}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="label-caps mt-4 flex items-center gap-3 text-primary transition-colors hover:text-tertiary"
                  >
                    <span aria-hidden="true" className="text-lg leading-none">
                      {isOpen ? "–" : "+"}
                    </span>
                    {isOpen ? "Tutup" : "Selengkapnya"}
                  </button>
                  {isOpen && (
                    <motion.div
                      id={`service-${service.slug}`}
                      className="mt-3 text-sm leading-6 text-on-surface-variant"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: duration.normal, ease: ease["out-expo"] }}
                    >
                      {service.description}
                    </motion.div>
                  )}
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="mt-10 flex flex-col items-start gap-5 lg:mt-12 lg:flex-row lg:items-center lg:justify-between">
          <Reveal delay={0.2}>
            <p className="max-w-lg text-on-surface-variant">
              Daftar harga bervariasi per cabang dan promo. Tanyakan langsung ke
              admin — pastikan Anda mendapat penawaran terbaik.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <MagneticButton>
              <a
                href={waLinkWithMessage(defaultBranch)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-tertiary px-7 py-4 text-sm font-semibold text-on-tertiary transition-colors hover:bg-primary"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Tanya Info &amp; Harga
              </a>
            </MagneticButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
