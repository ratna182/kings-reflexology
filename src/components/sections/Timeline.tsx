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
    <StaggerContainer
      className="grid items-start gap-5 md:grid-cols-3"
      staggerSpeed="glacial"
      delay={0.2}
    >
      {companyCopy.history.map((milestone, index) => {
        const isOpen = openIndex === index;
        return (
          <StaggerItem key={milestone.year} className="h-full" y={20}>
            <article className="card card-hover group h-full overflow-hidden">
              <PhotoFrame aspect="16/9" radiusPct={0.22} className="aspect-[16/9] w-full">
                <SiteImage
                  src={milestone.image}
                  alt={`Dokumentasi ${milestone.title} Kings Refleksi — ${milestone.year}`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </PhotoFrame>
              <div className="flex flex-1 flex-col p-6">
                <p className="label-caps text-tertiary">{milestone.year}</p>
                <h3 className="mt-3 font-display text-[clamp(20px,2vw,24px)] leading-[1.5] text-primary">
                  {milestone.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-on-surface-variant">
                  {milestone.excerpt}
                </p>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`history-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="label-caps mt-4 inline-flex min-h-11 items-center gap-3 text-primary transition-colors hover:text-tertiary active:translate-y-px active:text-tertiary"
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
                  <p className="pt-3">{milestone.text}</p>
                </motion.div>
              </div>
            </article>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
}
