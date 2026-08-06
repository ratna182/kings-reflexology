"use client";

import SiteImage from "@/components/SiteImage";
import PhotoFrame from "@/components/PhotoFrame";
import { companyCopy } from "@/data/content";
import Reveal from "@/components/motion/Reveal";
import RevealText from "@/components/motion/RevealText";
import SettleHeading from "@/components/motion/SettleHeading";
import Timeline from "@/components/sections/Timeline";
import BotanicalArt from "@/components/BotanicalArt";

export default function About() {
  return (
    <section
      id="tentang-kami"
      aria-labelledby="tentang-title"
      className="section-gap relative isolate overflow-hidden"
    >
      <BotanicalArt className="botanical-dark absolute -left-16 top-1/4 w-[min(280px,36vw)] -z-10" variant="monstera" />
      <BotanicalArt className="botanical absolute -right-10 bottom-0 w-[min(220px,28vw)] -z-10" variant="leaf" />
      <div className="container-editorial">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5 lg:col-start-1">
            <Reveal delay={0.1}>
              <div className="relative mx-auto w-full max-w-[min(430px,82vw)]">
                <PhotoFrame variant="radius" aspect="4/5" radiusPct={0.24} className="aspect-[4/5] w-full">
                  <SiteImage
                    src="/about-hero.webp"
                    alt="Ruang perawatan pijat refleksi The King's Reflexology cabang Yasmin, Bogor"
                    className="h-full w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </PhotoFrame>
                <div className="ornate-frame absolute -bottom-6 right-2 z-10 flex w-44 flex-col items-center gap-1.5 bg-surface px-5 py-5 sm:-right-4 sm:w-48">
                  <span className="feature-icon h-11 w-11" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="M3 6l3-2 3 2 3-2 3 2 3-2 3 2v11l-3 2-3-2-3 2-3-2-3 2-3-2V6Z" />
                      <path d="M7 4.5 6 10m5-5.5-1 5.5m5-5.5-1 5.5m5-5.5-1 5.5" opacity="0.5" />
                    </svg>
                  </span>
                  <p className="font-display text-[clamp(32px,4vw,40px)] leading-none text-tertiary">20+</p>
                  <p className="label-caps text-center text-on-surface-variant">
                    Tahun Melayani Keluarga Indonesia
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0}>
              <p className="script-accent">Tentang Kami</p>
            </Reveal>
            <SettleHeading>
              <RevealText
                text="Pijat Sehat untuk Satu Keluarga"
                as="h2"
                id="tentang-title"
                className="mt-4 font-display text-[clamp(26px,3vw,32px)] leading-[1.3] text-primary"
                delay={0.1}
              />
            </SettleHeading>

            <Reveal delay={0.2}>
              <div className="mt-8">
                <p className="label-caps text-tertiary">Visi</p>
                <blockquote className="mt-3 font-display text-[clamp(20px,2.5vw,24px)] leading-[1.5] text-primary">
                  {companyCopy.vision}
                </blockquote>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10">
                <p className="label-caps text-tertiary">Misi</p>
                <ol className="mt-5 space-y-4">
                  {companyCopy.mission.map((item, index) => (
                    <li key={item.title} className="flex gap-4">
                      <span
                        aria-hidden="true"
                        className="feature-icon mt-0.5 h-9 w-9 shrink-0 font-display text-base text-tertiary"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-[clamp(17px,1.5vw,19px)] leading-[1.4] text-primary">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-on-surface-variant">
                          {item.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.3}>
          <Timeline />
        </Reveal>
      </div>
    </section>
  );
}
