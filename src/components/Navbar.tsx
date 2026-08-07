"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { defaultBranch, waLinkWithMessage } from "@/data/branches";
import MagneticButton from "@/components/motion/MagneticButton";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { spring } from "@/lib/motion";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#layanan", label: "Layanan" },
  { href: "#member", label: "Member" },
  { href: "#tentang-kami", label: "Tentang Kami" },
  { href: "#lokasi", label: "Lokasi" },
  { href: "#kontak", label: "Kontak" },
];

const mobileNavItems = [
  { href: "#home", label: "Home" },
  { href: "#layanan", label: "Layanan" },
  { href: "#member", label: "Member" },
  { href: "#tentang-kami", label: "Tentang Kami" },
  { href: "#lokasi", label: "Lokasi" },
  { href: "#kontak", label: "Kontak" },
];

const sectionIds = [...navItems, ...mobileNavItems].map((item) => item.href.slice(1));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="safe-top fixed inset-x-0 top-0 z-50 border-b-2 border-tertiary"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #0d0d0d 95%)",
      }}
    >
      <div className="container-editorial relative z-50 flex min-h-[96px] items-center justify-between gap-6">
        <div className="flex shrink-0 items-center">
          <Link
            href="#home"
            aria-label="The King's Reflexology"
            className="flex items-center"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/logo-besar.webp"
              alt="The King's Reflexology"
              width={396}
              height={167}
              priority
              className="h-[52px] w-auto md:h-[72px]"
            />
          </Link>
        </div>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigasi utama">
          {navItems.map((item) => {
            const isActive = activeId === item.href.slice(1);
            return (
              <motion.div
                key={item.href}
                whileHover={{ y: -2 }}
                transition={spring.gentle}
              >
                <Link
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`group relative label-caps text-on-surface transition-colors duration-200 ${
                    isActive
                      ? "text-primary"
                      : "hover:text-tertiary"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-2 left-0 h-[2px] w-full origin-left bg-[var(--tertiary)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </motion.div>
            );
          })}
          <MagneticButton strength={0.2}>
            <a
              href={waLinkWithMessage(defaultBranch)}
              target="_blank"
              rel="noopener noreferrer"
              className="label-caps inline-flex items-center gap-2 rounded-full bg-tertiary px-6 py-3 text-on-tertiary shadow-[0_4px_18px_-6px_rgba(201,162,75,0.55)] transition-[filter,transform,box-shadow] duration-200 hover:brightness-110 hover:shadow-[0_6px_24px_-4px_rgba(201,162,75,0.7)] active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat WhatsApp
            </a>
          </MagneticButton>
        </nav>

        <div className="flex items-center gap-1 lg:hidden">
          <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center text-primary active:scale-95"
        >
          <motion.div
            animate={{ rotate: open ? 90 : 0 }}
            transition={spring.snappy}
          >
            {open ? (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M4 7h16M4 17h16" />
              </svg>
            )}
          </motion.div>
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          className="fixed inset-0 top-0 z-40 flex flex-col px-6 pt-[calc(112px+env(safe-area-inset-top,0px))] pb-[max(3rem,env(safe-area-inset-bottom,0px))] lg:hidden"
          style={{
            background:
              "linear-gradient(180deg, #000000 0%, #0d0d0d 95%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="flex flex-col gap-2" aria-label="Menu seluler">
            {mobileNavItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b-2 border-tertiary/25 py-4 font-display text-[clamp(26px,7vw,32px)] leading-[1.3] text-primary"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.div
            className="mt-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <a
              href={waLinkWithMessage(defaultBranch)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="label-caps inline-flex w-full items-center justify-center gap-2 rounded-full bg-tertiary px-6 py-4 text-on-tertiary shadow-[0_4px_18px_-6px_rgba(201,162,75,0.55)] hover:brightness-110 active:bg-tertiary"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat WhatsApp
            </a>
          </motion.div>
        </motion.div>
      )}
    </header>
  );
}
