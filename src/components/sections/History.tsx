"use client";

import Timeline from "@/components/sections/Timeline";
import Reveal from "@/components/motion/Reveal";
import RevealText from "@/components/motion/RevealText";

export default function History() {
  return (
    <section
      id="sejarah"
      aria-labelledby="sejarah-title"
      className="section-cut"
    >
      <div className="container-editorial">
        <Reveal delay={0.2}>
          <p className="label-caps text-tertiary">Sejarah</p>
        </Reveal>
        <RevealText
          text="Dua Dekade Merawat Keluarga"
          as="h2"
          id="sejarah-title"
          className="mt-4 font-display text-[clamp(26px,4vw,32px)] leading-[1.3] text-primary"
          delay={0.3}
        />
        <Reveal delay={0.4}>
          <Timeline />
        </Reveal>
      </div>
    </section>
  );
}
