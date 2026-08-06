"use client";

import { companyCopy } from "@/data/content";
import Reveal from "@/components/motion/Reveal";
import RevealText from "@/components/motion/RevealText";
import SettleHeading from "@/components/motion/SettleHeading";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import MagneticButton from "@/components/motion/MagneticButton";
import BotanicalArt from "@/components/BotanicalArt";

const benefitIcons = [
  (
    <svg
      key="points"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8l1 2.2 2.4.3-1.8 1.6.5 2.4-2.1-1.2-2.1 1.2.5-2.4L8.6 10.5l2.4-.3L12 8Z" />
    </svg>
  ),
  (
    <svg
      key="redeem"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <rect x="4.5" y="9.5" width="15" height="3.5" rx=".5" />
      <path d="M12 9.5v11" />
      <path d="M5.5 14.5h13" />
      <path d="M12 9.5S6.5 9.3 6.5 6.5A2.2 2.2 0 0 1 9 4.3c3 .2 3 5.2 3 5.2Z" />
      <path d="M12 9.5s5.5-.2 5.5-3A2.2 2.2 0 0 0 15 4.3c-3 .2-3 5.2-3 5.2Z" />
    </svg>
  ),
];

export default function MemberBenefits() {
  return (
    <section
      id="benefit-member"
      aria-labelledby="benefit-member-title"
      className="section-gap relative isolate overflow-hidden"
    >
      <BotanicalArt className="botanical absolute -right-10 top-0 w-[min(220px,28vw)] -z-10" variant="leaf" />
      <BotanicalArt className="botanical-dark absolute -left-14 bottom-0 w-[min(280px,36vw)] -z-10" variant="branch" />
      <div className="container-editorial">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-10 lg:col-start-2">
            <Reveal delay={0}>
              <p className="mx-auto max-w-2xl text-center text-lg leading-[1.6] text-on-surface-variant">
                {companyCopy.welcomeIntro}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="script-accent mt-8 text-center">Special Offer</p>
            </Reveal>
            <SettleHeading>
              <RevealText
                text="Poin untuk Setiap Kunjungan"
                as="h2"
                id="benefit-member-title"
                className="mx-auto mt-4 max-w-2xl text-center font-display text-[clamp(26px,3vw,32px)] leading-[1.3] text-primary"
                delay={0.1}
              />
            </SettleHeading>
          </div>
        </div>

        <div className="ornate-frame mt-10 bg-surface-container-low px-6 py-10 sm:px-10 lg:mt-12 lg:px-16 lg:py-12">
          <StaggerContainer
            className="grid gap-6 sm:grid-cols-2"
            staggerSpeed="normal"
            delay={0.2}
          >
            {companyCopy.benefits.map((benefit, index) => (
              <StaggerItem key={benefit} className="h-full" y={20}>
                <article className="card card-hover h-full flex items-start gap-5 p-6">
                  <span className="card-icon shrink-0">{benefitIcons[index]}</span>
                  <p className="font-display text-[clamp(18px,1.5vw,20px)] leading-[1.4] text-primary">
                    {benefit}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="mt-8 flex flex-col items-center gap-6">
            <Reveal delay={0.4}>
              <p className="text-xs text-secondary">
                {companyCopy.terms} — pendaftaran dilakukan melalui admin cabang terdekat.
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <MagneticButton>
                <a
                  href="#kontak"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-tertiary px-7 py-4 text-sm font-semibold text-on-tertiary shadow-[0_6px_20px_-6px_rgba(201,162,75,0.6)] transition-[filter,box-shadow] duration-200 hover:brightness-110 hover:shadow-[0_8px_28px_-4px_rgba(201,162,75,0.75)] active:scale-[0.98]"
                >
                  Cek Cara Daftar
                </a>
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}