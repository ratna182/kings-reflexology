"use client";

import Timeline from "@/components/sections/Timeline";
import Reveal from "@/components/motion/Reveal";
import RevealText from "@/components/motion/RevealText";
import SettleHeading from "@/components/motion/SettleHeading";
import BotanicalArt from "@/components/BotanicalArt";

export default function History() {
  return (
    <section
      id="sejarah"
      aria-labelledby="sejarah-title"
      className="section-gap relative isolate overflow-hidden"
    >
      <BotanicalArt className="botanical-dark absolute -right-14 top-0 w-[min(300px,38vw)] -z-10" variant="monstera" />
      <BotanicalArt className="botanical absolute -left-12 bottom-0 w-[min(240px,30vw)] -z-10" variant="branch" />
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-6 lg:col-start-2">
            <Reveal delay={0.2}>
              <p className="script-accent">Sejarah Kami</p>
            </Reveal>
            <SettleHeading>
              <RevealText
                text="Dua Dekade Merawat Keluarga"
                as="h2"
                id="sejarah-title"
                className="mt-4 font-display text-[clamp(26px,4vw,32px)] leading-[1.3] text-primary"
                delay={0.3}
              />
            </SettleHeading>
          </div>
        </div>
        <Reveal delay={0.4}>
          <Timeline />
        </Reveal>
      </div>
    </section>
  );
}