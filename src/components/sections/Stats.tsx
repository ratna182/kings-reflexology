"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useTransform, motion } from "framer-motion";
import { branches } from "@/data/branches";
import { services } from "@/data/services";

const stats = [
  { value: 20, suffix: "+", label: "Tahun Pengalaman" },
  { value: branches.length, suffix: "", label: "Cabang di Bogor & Bekasi" },
  { value: services.length, suffix: "", label: "Jenis Layanan" },
];

function Stat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => `${Math.round(v)}${suffix ?? ""}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, value, count]);

  return (
    <div ref={ref} className="text-center">
      <motion.p className="font-display text-[clamp(48px,8vw,88px)] leading-none text-primary tabular-nums">
        {display}
      </motion.p>
      <p className="label-caps mt-4 text-secondary">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="section-gap border-t border-primary/10">
      <div className="container-editorial">
        <div className="grid gap-12 sm:grid-cols-3">
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}