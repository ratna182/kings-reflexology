"use client";

import { motion } from "framer-motion";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import PlaceholderArt from "@/components/PlaceholderArt";
import { defaultBranch } from "@/data/branches";
import { companyCopy } from "@/data/content";
import { ease, duration } from "@/lib/motion";
import MagneticButton from "@/components/motion/MagneticButton";
import ParallaxImage from "@/components/motion/ParallaxImage";
import FloatingElement from "@/components/motion/FloatingElement";

const headlineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.8,
    },
  },
};

const wordVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: duration.slow, ease: ease["out-expo"] },
  },
};

const bodyVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.normal, ease: ease["out-expo"], delay: 1.2 },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.normal, ease: ease["out-expo"], delay: 1.4 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.glacial, ease: ease["out-expo"], delay: 1.0 },
  },
};

export default function Hero() {
  const { hero } = companyCopy;

  const titleWords1 = hero.title1.split(" ");
  const titleWords2 = hero.title2.split(" ");

  return (
    <section id="home" aria-labelledby="home-title" className="relative pt-16 overflow-hidden">
      <FloatingElement className="absolute top-1/4 right-1/4 h-2 w-2 rounded-full bg-tertiary/20" amplitude={15} duration={duration.glacial * 2} />
      <FloatingElement className="absolute bottom-1/3 left-1/3 h-3 w-3 rounded-full bg-primary/10" amplitude={20} duration={duration.glacial * 2.5} />
      <FloatingElement className="absolute top-1/2 right-1/3 h-1.5 w-1.5 rounded-full bg-secondary/15" amplitude={10} duration={duration.glacial * 1.8} />
      <div className="container-editorial">
        <div className="grid items-center gap-16 pt-12 pb-16 lg:grid-cols-12 lg:pb-[104px]">
          <div className="lg:col-span-6">
            <h1
              id="home-title"
              className="mt-6 font-display text-[clamp(40px,7vw,64px)] leading-[1.1] tracking-[-0.02em] text-primary"
            >
              <motion.span
                className="block"
                variants={headlineVariants}
                initial="hidden"
                animate="visible"
              >
                {titleWords1.map((word, i) => (
                  <span key={i} className="inline-block overflow-hidden">
                    <motion.span
                      className="inline-block"
                      variants={wordVariants}
                    >
                      {word}
                    </motion.span>
                    {i < titleWords1.length - 1 && "\u00A0"}
                  </span>
                ))}
              </motion.span>
              <motion.span
                className="block"
                variants={headlineVariants}
                initial="hidden"
                animate="visible"
              >
                {titleWords2.map((word, i) => (
                  <span key={i} className="inline-block overflow-hidden">
                    <motion.span
                      className="inline-block italic"
                      variants={wordVariants}
                    >
                      {word}
                    </motion.span>
                    {i < titleWords2.length - 1 && "\u00A0"}
                  </span>
                ))}
              </motion.span>
            </h1>
            <motion.p
              className="mt-8 max-w-md text-lg leading-relaxed text-on-surface-variant"
              variants={bodyVariants}
              initial="hidden"
              animate="visible"
            >
              {hero.body}
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row"
              variants={ctaVariants}
              initial="hidden"
              animate="visible"
            >
              <MagneticButton>
                <a
                  href={defaultBranch.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-tertiary px-7 py-4 text-sm font-semibold text-on-tertiary transition-colors hover:bg-primary"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Hubungi WhatsApp
                </a>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="#lokasi"
                  className="inline-flex items-center justify-center border border-primary px-7 py-4 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-on-primary"
                >
                  Lihat Lokasi
                </a>
              </MagneticButton>
            </motion.div>
          </div>
          <div className="lg:col-start-8 lg:col-span-4">
            <motion.div
              className="aspect-[4/5] w-full overflow-hidden"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <ParallaxImage speed={0.05}>
                <PlaceholderArt className="h-full w-full" />
              </ParallaxImage>
            </motion.div>
            <p className="mt-3 text-xs text-secondary">
              Foto ambiance 4:5 — placeholder, menunggu aset foto asli
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
