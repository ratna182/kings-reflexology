"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SiteImage from "@/components/SiteImage";
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
            <article className="card card-hover h-full overflow-hidden">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <SiteImage
                  src={milestone.image}
                  alt={`Foto dokumentasi — ${milestone.title} (${milestone.year})`}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
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
                  className="label-caps mt-4 flex items-center gap-3 text-primary transition-colors hover:text-tertiary"
                >
                  <span aria-hidden="true" className="text-lg leading-none">
                    {isOpen ? "–" : "+"}
                  </span>
                  {isOpen ? "Tutup" : "Selengkapnya"}
                </button>
                {isOpen && (
                  <motion.div
                    id={`history-${index}`}
                    className="mt-3 text-sm leading-6 text-on-surface-variant"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: duration.normal, ease: ease["out-expo"] }}
                  >
                    {milestone.text}
                  </motion.div>
                )}
              </div>
            </article>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
}
