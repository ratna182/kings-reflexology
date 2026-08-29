"use client";

import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { promos } from "@/data/promos";
import { branches, waLinkWithMessage } from "@/data/branches";
import Reveal from "@/components/motion/Reveal";
import RevealText from "@/components/motion/RevealText";
import SettleHeading from "@/components/motion/SettleHeading";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import MagneticButton from "@/components/motion/MagneticButton";
import BotanicalArt from "@/components/BotanicalArt";

function getWaLink(cabangTerkait: string): string {
  if (cabangTerkait === "semua") {
    return waLinkWithMessage(branches[0]);
  }
  const branch = branches.find(
    (b) => b.name.toLowerCase().includes(cabangTerkait.toLowerCase()),
  );
  return branch ? waLinkWithMessage(branch) : waLinkWithMessage(branches[0]);
}

export default function Promo() {
  if (promos.length === 0) return null;

  return (
    <section
      id="promo"
      aria-labelledby="promo-title"
      className="section-gap relative isolate overflow-hidden"
    >
      <BotanicalArt photo="leaf-top-mirror" className="botanical absolute -right-10 top-0 w-[min(220px,28vw)] -z-10" />
      <BotanicalArt photo="leaf-bottom" className="botanical-dark absolute -left-14 bottom-0 w-[min(280px,36vw)] -z-10" />
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-6 lg:col-start-2">
            <Reveal delay={0}>
              <p className="script-accent">Jangan Sampai Terlewat</p>
            </Reveal>
            <SettleHeading>
              <RevealText
                text="Promo Spesial"
                as="h2"
                id="promo-title"
                className="mt-4 font-display text-[clamp(26px,3vw,32px)] leading-[1.3] text-primary"
                delay={0.1}
              />
            </SettleHeading>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-xl text-lg leading-[1.6] text-on-surface-variant">
                Manfaatkan penawaran terbatas dari The King's Reflexology.
                Nikmati layanan terbaik dengan harga spesial untuk Anda dan
                keluarga.
              </p>
            </Reveal>
          </div>
        </div>

        <StaggerContainer
          className="mt-10 grid items-stretch gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3"
          staggerSpeed="fast"
          delay={0.3}
        >
          {promos.map((promo) => (
            <StaggerItem key={promo.id} className="h-full">
              <article className="card card-hover group flex h-full flex-col overflow-hidden border-[1.5px] border-tertiary/40 shadow-[0_8px_30px_-12px_rgba(201,162,75,0.35)]">
                <div className="relative p-6 pt-8">
                  <span className="label-caps absolute left-4 top-4 rounded-full bg-tertiary px-3 py-1 text-[10px] text-on-tertiary">
                    Promo
                  </span>
                  <h3 className="mt-6 font-display text-[clamp(20px,2vw,24px)] leading-[1.4] text-primary">
                    {promo.judul}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-on-surface-variant">
                    {promo.deskripsi}
                  </p>
                  <p className="label-caps mt-4 text-[10px] text-secondary">
                    {promo.periodeBerlaku}
                  </p>
                  <div className="mt-6 space-y-2">
                    {promo.cabangTerkait === "semua" ? (
                      branches.map((branch) => (
                        <MagneticButton key={branch.id} strength={0.2}>
                          <a
                            href={waLinkWithMessage(branch)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-tertiary px-5 py-3 text-xs font-semibold text-tertiary transition-colors duration-200 hover:bg-tertiary hover:text-on-tertiary"
                          >
                            <WhatsAppIcon className="h-3.5 w-3.5" />
                            {branch.area}
                          </a>
                        </MagneticButton>
                      ))
                    ) : (
                      <MagneticButton strength={0.2}>
                        <a
                          href={getWaLink(promo.cabangTerkait)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-tertiary px-5 py-3 text-sm font-semibold text-on-tertiary shadow-[0_6px_20px_-6px_rgba(201,162,75,0.6)] transition-[filter,box-shadow] duration-200 hover:brightness-110 hover:shadow-[0_8px_28px_-4px_rgba(201,162,75,0.75)] active:scale-[0.98]"
                        >
                          <WhatsAppIcon className="h-4 w-4" />
                          {promo.ctaText}
                        </a>
                      </MagneticButton>
                    )}
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
