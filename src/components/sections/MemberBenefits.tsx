"use client";

import { companyCopy } from "@/data/content";
import Reveal from "@/components/motion/Reveal";
import RevealText from "@/components/motion/RevealText";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";

export default function MemberBenefits() {
  return (
    <div className="section-gap">
      <div className="container-editorial grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4 lg:col-start-2">
          <Reveal delay={0}>
            <h3 className="label-caps text-secondary">Benefit Member</h3>
          </Reveal>
          <RevealText
            text="Poin untuk Setiap Kunjungan"
            as="h4"
            className="mt-4 font-display text-[clamp(24px,3vw,32px)] leading-[1.3] text-primary"
            delay={0.1}
          />
        </div>
        <div className="lg:col-span-6 lg:col-start-6">
          <StaggerContainer
            className="ol"
            staggerSpeed="normal"
            delay={0.2}
          >
            {companyCopy.benefits.map((benefit, index) => (
              <StaggerItem key={benefit} y={20}>
                <li
                  className="flex gap-6 border-t border-primary/10 py-6 last:border-b"
                >
                  <span className="font-display text-2xl italic text-secondary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg leading-7 text-on-surface-variant">
                    {benefit}
                  </p>
                </li>
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
  );
}
