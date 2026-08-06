"use client";

import SiteImage from "@/components/SiteImage";
import PhotoFrame from "@/components/PhotoFrame";
import { companyCopy } from "@/data/content";
import Reveal from "@/components/motion/Reveal";
import RevealText from "@/components/motion/RevealText";
import SettleHeading from "@/components/motion/SettleHeading";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";

const missionIcons = [
  (
    <g key="quality">
      <circle cx="12" cy="9" r="4.2" />
      <path d="M9.5 12.5 8 20l4-2.5L16 20l-1.5-7.5" />
    </g>
  ),
  (
    <path
      key="satisfaction"
      d="M12 19.5 5.8 13a4.1 4.1 0 0 1 0-5.8 4.1 4.1 0 0 1 5.8 0l.4.4.4-.4a4.1 4.1 0 0 1 5.8 0 4.1 4.1 0 0 1 0 5.8L12 19.5Z"
    />
  ),
  (
    <g key="people">
      <circle cx="9" cy="8.5" r="3.2" />
      <path d="M3.5 19.5c.6-3.2 2.7-5 5.5-5s4.9 1.8 5.5 5" />
      <circle cx="16.5" cy="9.5" r="2.5" />
      <path d="M15.5 14.7c2.4.3 4 1.9 4.5 4.3" />
    </g>
  ),
  (
    <g key="innovation">
      <path d="M12 3.5a5.5 5.5 0 0 0-3 10.1c.8.6 1.2 1.3 1.3 2.1h3.4c.1-.8.5-1.5 1.3-2.1A5.5 5.5 0 0 0 12 3.5Z" />
      <path d="M10.5 19.5h3" />
      <path d="M11 17h2" />
    </g>
  ),
  (
    <g key="wellness">
      <path d="M19 5C11 5.2 5 9 5 16.4c0 1.5.3 2.9.9 4.1" />
      <path d="M5.5 20c2.4-5.8 7-10.3 12-13.2" />
    </g>
  ),
];

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
              <p className="label-caps text-tertiary">
                Tentang Kami
              </p>
            </Reveal>
            <SettleHeading>
              <RevealText
                text="Visi & Misi"
                as="h2"
                id="tentang-title"
                className="mt-4 font-display text-[clamp(26px,3vw,32px)] leading-[1.3] text-primary"
                delay={0.1}
              />
            </SettleHeading>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-4 lg:col-start-2">
            <Reveal delay={0.2}>
              <h3 className="label-caps text-secondary">Visi</h3>
            </Reveal>
            <Reveal delay={0.3}>
              <blockquote className="mt-4 font-display text-[clamp(20px,2.5vw,24px)] leading-[1.5] text-primary">
                {companyCopy.vision}
              </blockquote>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="relative mt-8">
                <PhotoFrame aspect="4/5" radiusPct={0.28} cursor className="aspect-[4/5] w-full border border-primary/10">
                  <SiteImage
                    src="/about-hero.webp"
                    alt="Ruang perawatan pijat refleksi The King's Reflexology cabang Yasmin, Bogor"
                    className="h-full w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </PhotoFrame>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.2}>
              <h3 className="label-caps text-secondary">Misi</h3>
            </Reveal>
            <StaggerContainer
              className="mt-6 grid items-stretch gap-5 sm:grid-cols-2"
              staggerSpeed="slow"
            >
              {companyCopy.mission.map((item, index) => {
                const isClosing = index === companyCopy.mission.length - 1;
                return (
                  <StaggerItem
                    key={item.title}
                    className={`h-full ${isClosing ? "sm:col-span-2" : ""}`}
                    y={20}
                  >
                    <article
                      className={`card card-hover h-full p-6 ${isClosing ? "sm:flex-row sm:items-center sm:gap-6" : ""}`}
                    >
                      <span className="card-icon sm:shrink-0">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                          aria-hidden="true"
                        >
                          {missionIcons[index % missionIcons.length]}
                        </svg>
                      </span>
                      <div className={isClosing ? "sm:flex-1" : ""}>
                        <h4 className="mt-5 font-display text-[clamp(18px,1.5vw,20px)] leading-[1.4] text-primary">
                          {item.title}
                        </h4>
                        <p className="mt-2 flex-1 text-sm leading-6 text-on-surface-variant">
                          {item.text}
                        </p>
                      </div>
                    </article>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
