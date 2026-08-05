"use client";

import { companyCopy } from "@/data/content";
import Reveal from "@/components/motion/Reveal";
import RevealText from "@/components/motion/RevealText";
import SettleHeading from "@/components/motion/SettleHeading";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";

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
      className="section-gap"
    >
      <div className="container-editorial">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-10 lg:col-start-2">
            <RevealText
              text="Selamat datang di King's Refleksi, tempat di mana kesehatan dan kebugaran keluarga menjadi prioritas utama. Kami dengan senang hati menyambut Anda untuk merasakan pengalaman pijat sehat yang menenangkan dan menyegarkan. Bersiaplah untuk perjalanan relaksasi yang luar biasa bersama kami."
              as="p"
              className="mx-auto max-w-2xl text-center text-lg leading-[1.6] text-on-surface-variant"
            />
          </div>
        </div>
        <div className="mt-10 rounded-2xl border border-primary/10 bg-surface-container-low px-6 py-10 sm:px-10 lg:mt-12 lg:px-16 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4 lg:col-start-1">
              <Reveal delay={0}>
                <p className="label-caps text-secondary">
                  <span className="opacity-60">01</span>&nbsp;—&nbsp;Benefit Member
                </p>
              </Reveal>
              <SettleHeading>
                <RevealText
                  text="Poin untuk Setiap Kunjungan"
                  as="h2"
                  id="benefit-member-title"
                  className="mt-4 font-display text-[clamp(26px,3vw,32px)] leading-[1.3] text-primary"
                  delay={0.1}
                />
              </SettleHeading>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <StaggerContainer
                className="grid gap-5 sm:grid-cols-2"
                staggerSpeed="normal"
                delay={0.2}
              >
                {companyCopy.benefits.map((benefit, index) => (
                  <StaggerItem key={benefit} className="h-full" y={20}>
                    <article className="card card-hover h-full p-6">
                      <span className="card-icon">{benefitIcons[index]}</span>
                      <p className="mt-5 font-display text-[clamp(18px,1.5vw,20px)] leading-[1.4] text-primary">
                        {benefit}
                      </p>
                    </article>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              <Reveal delay={0.5}>
                <p className="mt-6 text-xs text-secondary">
                  {companyCopy.terms} — pendaftaran dilakukan melalui admin cabang
                  terdekat.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
