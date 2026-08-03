"use client";

import { motion } from "framer-motion";
import { ease, duration, stagger, viewport } from "@/lib/motion";
import type { ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerSpeed?: keyof typeof stagger;
}

export default function StaggerContainer({
  children,
  className,
  delay = 0,
  staggerSpeed = "normal",
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger[staggerSpeed],
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  y?: number;
}

export function StaggerItem({
  children,
  className,
  y = 40,
}: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: duration.normal,
            ease: ease["out-expo"],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
