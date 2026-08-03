"use client";

import { motion } from "framer-motion";
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
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -amplitude, 0, amplitude, 0],
      }}
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
