"use client";

import { motion } from "framer-motion";
import { ease, duration, viewport } from "@/lib/motion";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  id?: string;
}

export default function RevealText({
  text,
  className,
  delay = 0,
  as: Tag = "h2",
  id,
}: RevealTextProps) {
  const words = text.split(" ");

  return (
    <Tag id={id} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={viewport}
            transition={{
              duration: duration.slow,
              ease: ease["out-expo"],
              delay: delay + i * 0.04,
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </Tag>
  );
}
