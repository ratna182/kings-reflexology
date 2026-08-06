"use client";

import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { branches, waLinkWithMessage } from "@/data/branches";
import Reveal from "@/components/motion/Reveal";
import RevealText from "@/components/motion/RevealText";
import SettleHeading from "@/components/motion/SettleHeading";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import MagneticButton from "@/components/motion/MagneticButton";
import BotanicalArt from "@/components/BotanicalArt";

export default function Branches() {
  return (
    <section
      id="lokasi"
      aria-labelledby="lokasi-title"
      className="section-gap relative isolate overflow-hidden border-t border-tertiary/20"
    >
      <BotanicalArt className="botanical absolute -left-12 top-1/4 w-[min(240px,30vw)] -z-10" variant="branch" />
      <BotanicalArt className="botanical-dark absolute -right-14 bottom-1/4 w-[min(300px,38vw)] -z-10" variant="monstera" />
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-6 lg:col-start-2">
            <Reveal delay={0}>
              <p className="script-accent">
                Lokasi Kami
              </p>
            </Reveal>
            <SettleHeading>
              <RevealText
                text="Cabang Kami di Bogor & Bekasi"
                as="h2"
                id="lokasi-title"
                className="mt-4 font-display text-[clamp(26px,3vw,32px)] leading-[1.3] text-primary"
                delay={0.1}
              />
            </SettleHeading>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-xl text-lg leading-[1.6] text-on-surface-variant">
                Tiga cabang siap melayani Anda. Hubungi admin cabang terdekat
                melalui WhatsApp untuk reservasi dan informasi.
              </p>
            </Reveal>
          </div>
        </div>

        <StaggerContainer
          className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-3"
          staggerSpeed="normal"
          delay={0.3}
        >
          {branches.map((branch) => (
            <StaggerItem key={branch.id} className="h-full">
              <article
                id={branch.id}
                className="card card-hover flex h-full flex-col p-7"
              >
                <p className="label-caps text-tertiary">{branch.city}</p>
                <h3 className="mt-3 font-display text-[clamp(20px,2vw,24px)] leading-[1.4] text-primary">
                  {branch.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-on-surface-variant">
                  {branch.address}
                </p>
                {branch.hours && (
                  <div className="mt-6">
                    <p className="label-caps text-tertiary">Jam Operasional</p>
                    <ul className="mt-2 space-y-1">
                      {branch.hours.map((hours) => (
                        <li key={hours} className="text-sm text-on-surface-variant">
                          {hours}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-auto flex flex-col gap-3 pt-8">
                  <MagneticButton strength={0.2}>
                    <a
                      href={waLinkWithMessage(branch)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-tertiary px-6 py-3.5 text-sm font-semibold text-on-tertiary shadow-[0_4px_18px_-6px_rgba(201,162,75,0.55)] transition-[filter,transform,box-shadow] duration-200 hover:brightness-110 hover:shadow-[0_6px_24px_-4px_rgba(201,162,75,0.7)] active:scale-[0.98]"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      {branch.phoneDisplay}
                    </a>
                  </MagneticButton>
                  <a
                    href={branch.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label-caps inline-flex items-center justify-center gap-2 rounded-full border border-tertiary/50 px-6 py-3 text-tertiary transition-colors hover:bg-tertiary hover:text-on-tertiary"
                  >
                    Buka di Google Maps
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}