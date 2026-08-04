"use client";

import { companyEmail } from "@/data/branches";
import Reveal from "@/components/motion/Reveal";
import RevealText from "@/components/motion/RevealText";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";

export default function Contact() {
  return (
    <section
      id="kontak"
      aria-labelledby="kontak-title"
      className="section-gap border-t border-primary/10 bg-surface-container-low"
    >
      <div className="container-editorial grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:col-start-2">
          <Reveal delay={0}>
            <p className="label-caps text-tertiary">Kontak</p>
          </Reveal>
          <RevealText
            text="Siap Melayani Anda"
            as="h2"
            className="mt-4 font-display text-[clamp(26px,3vw,32px)] leading-[1.3] text-primary"
            delay={0.1}
          />
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-md text-lg leading-[1.6] text-on-surface-variant">
              Pendaftaran member dan transaksi dilakukan langsung melalui admin
              cabang. Pilih cabang terdekat dan mulai percakapan di WhatsApp.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-4 lg:col-start-8">
          <Reveal delay={0.3}>
            <p className="label-caps text-secondary">Email</p>
          </Reveal>
          <Reveal delay={0.4}>
            <a
              href={`mailto:${companyEmail}`}
              className="mt-3 inline-block font-display text-[clamp(20px,2.5vw,24px)] leading-[1.5] text-primary underline-offset-4 transition-colors hover:text-tertiary hover:underline"
            >
              {companyEmail}
            </a>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="mt-10">
              <p className="label-caps text-secondary">Jam Layanan</p>
              <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                Setiap cabang buka mulai pukul 09.00 — jam tutup bervariasi per
                cabang (lihat kartu lokasi di atas).
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.6}>
            <div className="mt-10">
              <p className="label-caps text-secondary">Pencarian Cepat</p>
              <StaggerContainer
                className="mt-3 space-y-2 text-sm"
                staggerSpeed="fast"
                delay={0.7}
              >
                <StaggerItem>
                  <a
                    href="#lokasi-yasmin-bogor"
                    className="text-on-surface-variant underline-offset-4 transition-colors hover:text-tertiary hover:underline"
                  >
                    Yasmin, Bogor
                  </a>
                </StaggerItem>
                <StaggerItem>
                  <a
                    href="#lokasi-bukit-cimanggu-bogor"
                    className="text-on-surface-variant underline-offset-4 transition-colors hover:text-tertiary hover:underline"
                  >
                    Bukit Cimanggu City, Bogor
                  </a>
                </StaggerItem>
                <StaggerItem>
                  <a
                    href="#lokasi-grand-galaxy-bekasi"
                    className="text-on-surface-variant underline-offset-4 transition-colors hover:text-tertiary hover:underline"
                  >
                    Grand Galaxy, Bekasi
                  </a>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
