"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SIZE = 72;
const HALF = SIZE / 2;

export default function PhotoCursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 350, damping: 32 });
  const springY = useSpring(y, { stiffness: 350, damping: 32 });

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX - HALF);
      y.set(e.clientY - HALF);
    };
    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("[data-photo-cursor]")) {
        setActive(true);
        document.documentElement.classList.add("hide-native-cursor");
      }
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("[data-photo-cursor]")) {
        setActive(false);
        document.documentElement.classList.remove("hide-native-cursor");
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mouseout", onOut, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      document.documentElement.classList.remove("hide-native-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[70] flex items-center justify-center rounded-full border border-tertiary/40 bg-tertiary/15 text-tertiary transition-opacity duration-200 ${
        active ? "opacity-100" : "opacity-0"
      }`}
      style={{ x: springX, y: springY, width: SIZE, height: SIZE }}
    >
      <span className="label-caps">Lihat</span>
    </motion.div>
  );
}