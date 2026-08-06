"use client";

import { companyEmail, branches, waLinkWithMessage } from "@/data/branches";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import Reveal from "@/components/motion/Reveal";
import RevealText from "@/components/motion/RevealText";
import SettleHeading from "@/components/motion/SettleHeading";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import BotanicalArt from "@/components/BotanicalArt";

export default function Contact() {
  return (
    <section
      id="kontak"
      aria-labelledby="kontak-title"
      className="section-gap relative isolate overflow-hidden border-t border-tertiary/20 bg-surface-container-low"
    >
      <BotanicalArt className="botanical absolute -left-12 top-0 w-[min(240px,30vw)] -z-10" variant="monstera" />
      <BotanicalArt className="botanical-dark absolute -right-14 bottom-0 w-[min(280px,36vw)] -z-10" variant="branch" />
      <div className="container-editorial grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5 lg:col-start-2">
          <Reveal delay={0}>
            <p className="script-accent">
              Kontak Kami
            </p>
          </Reveal>
          <SettleHeading>
            <RevealText
              text="Siap Melayani Anda"
              as="h2"
              id="kontak-title"
              className="mt-4 font-display text-[clamp(26px,3vw,32px)] leading-[1.3] text-primary"
              delay={0.1}
            />
          </SettleHeading>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-md text-lg leading-[1.6] text-on-surface-variant">
              Pendaftaran member dan transaksi dilakukan langsung melalui admin
              cabang. Pilih cabang terdekat dan mulai percakapan di WhatsApp.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-4 lg:col-start-8">
          <Reveal delay={0.3}>
            <p className="label-caps text-tertiary">Email</p>
          </Reveal>
          <Reveal delay={0.4}>
            <a
              href={`mailto:${companyEmail}`}
              className="mt-3 inline-block font-display text-[clamp(20px,2.5vw,24px)] leading-[1.5] text-tertiary underline-offset-4 transition-colors hover:text-on-tertiary-container hover:underline"
            >
              {companyEmail}
            </a>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="mt-10">
              <p className="label-caps text-tertiary">Jam Layanan</p>
              <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                Setiap cabang buka mulai pukul 09.00 — jam tutup bervariasi per
                cabang (lihat kartu lokasi di atas).
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="container-editorial">
        <div className="mt-10 lg:mt-12">
          <Reveal delay={0.2}>
            <p className="label-caps text-tertiary">WhatsApp Cabang</p>
            <p className="mt-3 text-sm leading-6 text-on-surface-variant">
              Hubungi untuk reservasi dan pendaftaran member.
            </p>
          </Reveal>
          <StaggerContainer
            className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            staggerSpeed="fast"
            delay={0.4}
          >
            {branches.map((branch) => (
              <StaggerItem key={branch.id} className="h-full">
                <a
                  href={waLinkWithMessage(branch)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover flex h-full items-center gap-3 p-4"
                >
                  <span className="card-icon shrink-0 h-11 w-11">
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-primary">
                      {branch.name}
                    </span>
                    <span className="block text-sm text-on-surface-variant">
                      {branch.phoneDisplay} — Reservasi &amp; Pendaftaran Member
                    </span>
                  </span>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}