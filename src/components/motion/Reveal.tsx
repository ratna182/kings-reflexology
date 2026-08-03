"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ease, duration, viewport } from "@/lib/motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  blur?: number;
}

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 30,
  x = 0,
  scale,
  blur,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y,
        x,
        scale: scale ? scale - 0.05 : undefined,
        filter: blur ? `blur(${blur}px)` : undefined,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: scale ? 1 : undefined,
        filter: blur ? "blur(0px)" : undefined,
      }}
      viewport={viewport}
      transition={{
        duration: duration.normal,
        ease: ease["out-expo"],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
