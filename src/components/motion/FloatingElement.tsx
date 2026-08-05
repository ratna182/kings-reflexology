"use client";

import { motion, useReducedMotion } from "framer-motion";
import { duration } from "@/lib/motion";
import type { ReactNode } from "react";

interface FloatingElementProps {
  children?: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
}

export default function FloatingElement({
  children,
  className,
  amplitude = 10,
  duration: dur = duration.glacial,
}: FloatingElementProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      animate={
        shouldReduceMotion ? undefined : { y: [0, -amplitude, 0, amplitude, 0] }
      }
      transition={{
        duration: dur * 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
