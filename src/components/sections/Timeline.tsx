"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SiteImage from "@/components/SiteImage";
import PhotoFrame from "@/components/PhotoFrame";
import { companyCopy } from "@/data/content";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import { ease, duration } from "@/lib/motion";

export default function Timeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="relative mt-14">
      {/* connecting gold line */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-tertiary/60 to-transparent md:block"
      />
      <StaggerContainer
        className="grid items-start gap-10 md:grid-cols-3 md:gap-6"
        staggerSpeed="glacial"
        delay={0.2}
      >
        {companyCopy.history.map((milestone, index) => {
          const isOpen = openIndex === index;
          const isLast = index === companyCopy.history.length - 1;
          return (
            <StaggerItem key={milestone.year} className="h-full" y={20}>
              <article className="group flex h-full flex-col items-center text-center">
                <div className="ornate-frame relative z-10 flex h-16 min-w-[7rem] items-center justify-center bg-surface px-6">
                  <p className="font-display text-[clamp(22px,2.5vw,28px)] leading-none text-tertiary">
                    {milestone.year}
                  </p>
                </div>

                <div className="relative mx-auto mt-8 w-full max-w-[min(300px,80vw)]">
                  <PhotoFrame variant="round" className="aspect-square w-full">
                    <SiteImage
                      src={milestone.image}
                      alt={`Dokumentasi ${milestone.title} The King's Reflexology — ${milestone.year}`}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </PhotoFrame>
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="absolute -right-3 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-tertiary/50 bg-surface text-tertiary md:flex"
                    >
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  )}
                </div>

                <h3 className="mt-6 font-display text-[clamp(20px,2vw,24px)] leading-[1.4] text-primary">
                  {milestone.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                  {milestone.excerpt}
                </p>

                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`history-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="label-caps mt-4 inline-flex min-h-11 items-center gap-3 rounded-full border border-tertiary/50 px-5 text-tertiary transition-colors hover:bg-tertiary hover:text-on-tertiary active:translate-y-px"
                >
                  <span aria-hidden="true" className="text-lg leading-none">
                    {isOpen ? "–" : "+"}
                  </span>
                  {isOpen ? "Tutup" : "Selengkapnya"}
                </button>
                <motion.div
                  id={`history-${index}`}
                  className="overflow-hidden text-sm leading-6 text-on-surface-variant"
                  initial={false}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    height: isOpen ? "auto" : 0,
                  }}
                  transition={{ duration: duration.normal, ease: ease["out-expo"] }}
                >
                  <p className="pt-4">{milestone.text}</p>
                </motion.div>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  );
}