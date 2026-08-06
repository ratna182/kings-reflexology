"use client";

import SiteImage from "@/components/SiteImage";
import PhotoFrame from "@/components/PhotoFrame";
import { companyCopy } from "@/data/content";
import Reveal from "@/components/motion/Reveal";
import RevealText from "@/components/motion/RevealText";
import SettleHeading from "@/components/motion/SettleHeading";
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
      id="member"
      aria-labelledby="member-title"
      className="section-gap relative isolate overflow-hidden"
    >
      <BotanicalArt photo="leaf-top-mirror" className="botanical absolute -right-10 top-0 w-[min(220px,28vw)] -z-10" />
      <BotanicalArt photo="leaf-bottom" className="botanical-dark absolute -left-14 bottom-0 w-[min(280px,36vw)] -z-10" />
      <div className="container-editorial">
        <div className="ornate-frame overflow-hidden bg-surface-container-low">
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-6 lg:col-start-1">
              <div className="px-6 py-8 sm:px-10 lg:px-14 lg:py-12">
                <Reveal delay={0}>
                  <p className="script-accent">Member</p>
                </Reveal>
                <SettleHeading>
                  <RevealText
                    text="Menjadi Member, Menikmati Manfaat Pijat Sehat"
                    as="h2"
                    id="member-title"
                    className="mt-4 max-w-xl font-display text-[clamp(26px,3vw,36px)] leading-[1.3] text-primary"
                    delay={0.1}
                  />
                </SettleHeading>
                <ul className="mt-8 space-y-4">
                  {companyCopy.benefits.map((benefit, index) => (
                    <Reveal key={benefit} delay={0.2 + index * 0.1}>
                      <li className="flex items-start gap-4">
                        <span className="card-icon shrink-0">{benefitIcons[index]}</span>
                        <p className="pt-1 font-display text-[clamp(17px,1.5vw,20px)] leading-[1.4] text-primary">
                          {benefit}
                        </p>
                      </li>
                    </Reveal>
                  ))}
                </ul>
                <Reveal delay={0.4}>
                  <p className="mt-6 text-xs text-secondary">
                    {companyCopy.terms} — pendaftaran dilakukan melalui admin cabang terdekat.
                  </p>
                </Reveal>
                <Reveal delay={0.5}>
                  <MagneticButton>
                    <a
                      href="#kontak"
                      className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-tertiary px-7 py-4 text-sm font-semibold text-on-tertiary shadow-[0_6px_20px_-6px_rgba(201,162,75,0.6)] transition-[filter,box-shadow] duration-200 hover:brightness-110 hover:shadow-[0_8px_28px_-4px_rgba(201,162,75,0.75)] active:scale-[0.98]"
                    >
                      Cek Cara Daftar
                    </a>
                  </MagneticButton>
                </Reveal>
              </div>
            </div>
            <div className="relative lg:col-span-6">
              <PhotoFrame variant="round" className="mx-auto mt-10 w-full max-w-[min(380px,70vw)] aspect-square lg:absolute lg:right-8 lg:top-1/2 lg:mt-0 lg:-translate-y-1/2 lg:max-w-[min(340px,42%)]">
                <SiteImage
                  src="/about-today.webp"
                  alt="Suasana perawatan relaksasi The King's Reflexology untuk anggota member"
                  className="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 70vw, 42vw"
                />
              </PhotoFrame>
              <div
                aria-hidden="true"
                className="feature-icon absolute bottom-6 left-1/2 z-10 flex h-28 w-28 -translate-x-1/2 flex-col items-center justify-center gap-1 rounded-full border-2 border-tertiary bg-surface shadow-[0_18px_40px_-18px_rgba(201,162,75,0.6)] sm:bottom-10 lg:left-auto lg:right-0 lg:top-1/2 lg:-translate-x-0 lg:-translate-y-1/2 lg:h-32 lg:w-32"
              >
                <span className="font-display text-[clamp(20px,2.5vw,26px)] leading-none text-tertiary">
                  1 Poin
                </span>
                <span className="label-caps text-on-surface-variant">per Rp100rb</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
