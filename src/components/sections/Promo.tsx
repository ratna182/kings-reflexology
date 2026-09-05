"use client";

import Reveal from "@/components/motion/Reveal";
import RevealText from "@/components/motion/RevealText";
import SettleHeading from "@/components/motion/SettleHeading";
import BotanicalArt from "@/components/BotanicalArt";

export default function Promo() {
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
          <div className="lg:col-span-8 lg:col-start-3 text-center">
            <Reveal delay={0}>
              <p className="script-accent">Jangan Sampai Terlewat</p>
            </Reveal>
            <SettleHeading>
              <RevealText
                text="Promo Baru Akan Segera Hadir"
                as="h2"
                id="promo-title"
                className="mt-4 font-display text-[clamp(26px,3vw,32px)] leading-[1.3] text-primary"
                delay={0.1}
              />
            </SettleHeading>
            <Reveal delay={0.2}>
              <p className="mt-5 mx-auto max-w-2xl text-lg leading-[1.6] text-on-surface-variant">
                Nantikan penawaran eksklusif berikutnya dari The King's Reflexology.
                Jadilah member untuk mendapat notifikasi promo terbaru lebih dulu.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
