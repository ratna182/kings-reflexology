"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

interface SettleHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SettleHeading({ children, className }: SettleHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div
      ref={ref}
      className={`transition-[letter-spacing] duration-700 ease-out ${
        inView ? "tracking-[-0.02em]" : "tracking-[0.05em]"
      } ${className ?? ""}`}
    >
      {children}
    </div>
  );
}