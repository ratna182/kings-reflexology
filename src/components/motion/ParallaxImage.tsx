"use client";

import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface ParallaxImageProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

function ParallaxInner({
  children,
  className,
  speed,
}: {
  children: React.ReactNode;
  className?: string;
  speed: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, -speed * 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.02]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y, scale }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}

export default function ParallaxImage({
  children,
  className,
  speed = 0.1,
}: ParallaxImageProps) {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (shouldReduceMotion || !mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <ParallaxInner className={className} speed={speed}>
      {children}
    </ParallaxInner>
  );
}
