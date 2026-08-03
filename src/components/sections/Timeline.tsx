"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PlaceholderArt from "@/components/PlaceholderArt";
import { companyCopy } from "@/data/content";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import { ease, duration, spring } from "@/lib/motion";

export default function Timeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ol className="relative grid gap-16 md:grid-cols-3 md:gap-10">
      <span
        aria-hidden="true"
        className="absolute bottom-2 left-[5px] top-2 w-px bg-primary/15 md:hidden"
      />
      <span
        aria-hidden="true"
        className="absolute left-[16.66%] right-[16.66%] top-[5px] hidden h-px bg-primary/15 md:block"
      />
      <StaggerContainer
        className="contents"
        staggerSpeed="glacial"
        delay={0.2}
      >
        {companyCopy.history.map((milestone, index) => {
          const isOpen = openIndex === index;
          return (
            <StaggerItem key={milestone.year} y={20}>
              <li className="relative pl-10 md:pl-0">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1 h-2.5 w-2.5 bg-primary md:left-1/2 md:-translate-x-1/2"
                />
                <motion.div
                  className="aspect-square w-full overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={spring.gentle}
                >
                  <PlaceholderArt className="h-full w-full" />
                </motion.div>
                <p className="label-caps mt-6 text-tertiary">{milestone.year}</p>
                <h3 className="mt-3 font-display text-2xl leading-tight text-primary">
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
                  className="label-caps mt-5 flex items-center gap-3 text-primary transition-colors hover:text-tertiary"
                >
                  <span aria-hidden="true" className="text-lg leading-none">
                    {isOpen ? "–" : "+"}
                  </span>
                  {isOpen ? "Tutup" : "Selengkapnya"}
                </button>
                {isOpen && (
                  <motion.div
                    id={`history-${index}`}
                    className="mt-4 border-l-2 border-primary/10 pl-4 text-sm leading-6 text-on-surface-variant"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: duration.normal, ease: ease["out-expo"] }}
                  >
                    {milestone.text}
                  </motion.div>
                )}
              </li>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </ol>
  );
}
