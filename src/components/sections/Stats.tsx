"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useTransform, motion } from "framer-motion";
import { branches } from "@/data/branches";
import { services } from "@/data/services";
import BotanicalArt from "@/components/BotanicalArt";

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
      <div className="ornate-frame mx-auto inline-flex min-w-[7.5rem] flex-col items-center gap-2 bg-surface px-8 py-6">
        <motion.p className="font-display text-[clamp(44px,6vw,72px)] leading-none text-primary tabular-nums">
          {display}
        </motion.p>
        <p className="label-caps text-tertiary">{label}</p>
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="section-gap relative isolate overflow-hidden border-t border-tertiary/20">
      <BotanicalArt className="botanical absolute -left-10 top-0 w-[min(220px,28vw)] -z-10" variant="monstera" />
      <BotanicalArt className="botanical absolute -right-10 bottom-0 w-[min(200px,26vw)] -z-10" variant="branch" />
      <div className="container-editorial">
        <div className="grid gap-10 sm:grid-cols-3">
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}