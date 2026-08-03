"use client";

import PlaceholderArt from "@/components/PlaceholderArt";
import { companyCopy } from "@/data/content";
import Timeline from "@/components/sections/Timeline";
import Reveal from "@/components/motion/Reveal";
import RevealText from "@/components/motion/RevealText";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import ParallaxImage from "@/components/motion/ParallaxImage";

export default function About() {
  return (
    <section
      id="tentang-kami"
      aria-labelledby="tentang-title"
      className="section-gap"
    >
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-6 lg:col-start-2">
            <Reveal delay={0}>
              <p className="label-caps text-tertiary">Tentang Kami</p>
            </Reveal>
            <RevealText
              text="Visi & Misi"
              as="h2"
              className="mt-4 font-display text-[clamp(32px,5vw,48px)] leading-[1.1] text-primary"
              delay={0.1}
            />
          </div>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:col-start-2">
            <Reveal delay={0.2}>
              <h3 className="label-caps text-secondary">Visi</h3>
            </Reveal>
            <Reveal delay={0.3}>
              <blockquote className="mt-4 font-display text-[clamp(20px,2.5vw,24px)] leading-[1.5] text-primary">
                {companyCopy.vision}
              </blockquote>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-8">
            <Reveal delay={0.4} scale={0.95}>
              <div className="aspect-[4/5] w-full overflow-hidden">
                <ParallaxImage speed={0.05}>
                  <PlaceholderArt className="h-full w-full" />
                </ParallaxImage>
              </div>
            </Reveal>
            <Reveal delay={0.5}>
              <p className="mt-3 text-xs text-secondary">
                Foto ambiance 4:5 — placeholder, menunggu aset foto asli
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-32 lg:mt-40">
          <Reveal delay={0.2}>
            <h3 className="label-caps text-secondary">Misi</h3>
          </Reveal>
          <StaggerContainer
            className="mt-10"
            staggerSpeed="slow"
          >
            {companyCopy.mission.map((item, index) => (
              <StaggerItem key={item.title} y={20}>
                <li
                  className="grid gap-3 border-t border-primary/10 py-8 last:border-b lg:grid-cols-12"
                >
                  <span className="font-display text-2xl italic text-secondary lg:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-display text-xl leading-tight text-primary lg:col-span-4">
                    {item.title}
                  </h4>
                  <p className="leading-7 text-on-surface-variant lg:col-span-6">
                    {item.text}
                  </p>
                </li>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div className="mt-32 lg:mt-40">
          <Reveal delay={0.2}>
            <h3 className="label-caps text-tertiary">Sejarah</h3>
          </Reveal>
          <RevealText
            text="Dua Dekade Merawat Keluarga"
            as="h4"
            className="mt-4 font-display text-[clamp(26px,4vw,32px)] leading-[1.3] text-primary"
            delay={0.3}
          />
          <Reveal delay={0.4}>
            <Timeline />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
