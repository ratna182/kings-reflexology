"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import ServiceIcon from "@/components/icons/ServiceIcon";
import SiteImage from "@/components/SiteImage";
import PhotoFrame from "@/components/PhotoFrame";
import { services } from "@/data/services";
import { defaultBranch, waLinkWithMessage } from "@/data/branches";
import Reveal from "@/components/motion/Reveal";
import RevealText from "@/components/motion/RevealText";
import SettleHeading from "@/components/motion/SettleHeading";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import MagneticButton from "@/components/motion/MagneticButton";
import BotanicalArt from "@/components/BotanicalArt";
import { ease, duration } from "@/lib/motion";

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="layanan"
      aria-labelledby="layanan-title"
      className="section-gap relative isolate overflow-hidden bg-surface-container-low"
    >
      <BotanicalArt photo="leaf-top" className="botanical absolute -left-12 top-0 w-[min(240px,30vw)] -z-10" />
      <BotanicalArt photo="leaf-bottom-mirror" className="botanical-dark absolute -right-14 bottom-0 w-[min(300px,38vw)] -z-10" />
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-6 lg:col-start-2">
            <Reveal delay={0}>
              <p className="script-accent">
                Layanan Kami
              </p>
            </Reveal>
            <SettleHeading>
              <RevealText
                text="Perawatan untuk Satu Keluarga"
                as="h2"
                id="layanan-title"
                className="mt-4 font-display text-[clamp(26px,3vw,32px)] leading-[1.3] text-primary"
                delay={0.1}
              />
            </SettleHeading>
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
          className="mt-10 grid items-start gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3"
          staggerSpeed="fast"
          delay={0.3}
        >
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <StaggerItem key={service.slug} className="h-full">
                <article className="card card-hover group flex h-full flex-col overflow-hidden">
                  <div className="relative mx-auto mt-7 w-full max-w-[min(220px,70%)]">
                    <PhotoFrame variant="round" className="aspect-square w-full">
                      <SiteImage
                        src={service.image}
                        alt={`Layanan ${service.name.toLowerCase()} di The King's Reflexology Bogor & Bekasi`}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </PhotoFrame>
                    <span className="card-icon absolute -bottom-3 right-2 h-12 w-12 shadow-[0_8px_18px_-8px_rgba(201,162,75,0.6)]">
                      <ServiceIcon slug={service.slug} className="h-6 w-6" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 pt-8">
                    <h3 className="text-center font-display text-[clamp(20px,2vw,24px)] leading-[1.4] text-primary">
                      {service.name}
                    </h3>
                    <p className="mt-2 flex-1 text-center text-sm leading-6 text-on-surface-variant">
                      {service.summary}
                    </p>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`service-${service.slug}`}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="label-caps mt-4 inline-flex min-h-11 items-center justify-center gap-3 rounded-full border border-tertiary/50 px-5 text-tertiary transition-colors hover:bg-tertiary hover:text-on-tertiary active:translate-y-px"
                    >
                      <span aria-hidden="true" className="text-lg leading-none">
                        {isOpen ? "–" : "+"}
                      </span>
                      {isOpen ? "Tutup" : "Selengkapnya"}
                    </button>
                    <motion.div
                      id={`service-${service.slug}`}
                      className="overflow-hidden text-sm leading-6 text-on-surface-variant"
                      initial={false}
                      animate={{
                        opacity: isOpen ? 1 : 0,
                        height: isOpen ? "auto" : 0,
                      }}
                      transition={{ duration: duration.normal, ease: ease["out-expo"] }}
                    >
                      <p className="pt-4 text-center">{service.description}</p>
                    </motion.div>
                    <div className="mt-auto pt-6">
                      <MagneticButton strength={0.2}>
                        <a
                          href={waLinkWithMessage(defaultBranch)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-tertiary px-5 py-3 text-sm font-semibold text-tertiary transition-colors duration-200 hover:bg-tertiary hover:text-on-tertiary"
                        >
                          <WhatsAppIcon className="h-4 w-4" />
                          Tanya Harga
                        </a>
                      </MagneticButton>
                    </div>
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
                className="inline-flex items-center justify-center gap-3 rounded-full bg-tertiary px-7 py-4 text-sm font-semibold text-on-tertiary shadow-[0_6px_20px_-6px_rgba(201,162,75,0.6)] transition-[filter,box-shadow] duration-200 hover:brightness-110 hover:shadow-[0_8px_28px_-4px_rgba(201,162,75,0.75)] active:scale-[0.98]"
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