"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { defaultBranch, waLinkWithMessage } from "@/data/branches";
import ThemeToggle from "@/components/icons/ThemeToggle";
import MagneticButton from "@/components/motion/MagneticButton";
import { spring } from "@/lib/motion";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#layanan", label: "Layanan" },
  { href: "#member", label: "Member" },
  { href: "#tentang-kami", label: "Tentang Kami" },
  { href: "#lokasi", label: "Lokasi" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/10 bg-surface">
      <div className="container-editorial flex h-16 items-center justify-between">
        <Link
          href="#home"
          className="flex shrink-0 items-center"
          aria-label="Kings Refleksi — kembali ke beranda"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-kings.webp"
            alt="Kings Refleksi"
            width={396}
            height={167}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigasi utama">
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ y: -2 }}
              transition={spring.gentle}
            >
              <Link
                href={item.href}
                className="label-caps text-on-surface-variant transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <MagneticButton strength={0.2}>
            <a
              href={waLinkWithMessage(defaultBranch)}
              target="_blank"
              rel="noopener noreferrer"
              className="label-caps text-tertiary transition-opacity hover:opacity-70"
            >
              Chat WhatsApp
            </a>
          </MagneticButton>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-primary lg:hidden"
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
          className="fixed inset-0 top-16 z-40 flex flex-col bg-surface px-6 pb-12 pt-10 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="flex flex-col gap-2" aria-label="Menu seluler">
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-primary/10 py-4 font-display text-3xl text-primary"
                >
                  <span className="label-caps mr-4 inline-block w-6 text-secondary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
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
              className="inline-flex items-center justify-center bg-tertiary px-6 py-4 text-sm font-semibold text-on-tertiary"
            >
              Chat WhatsApp
            </a>
          </motion.div>
        </motion.div>
      )}
    </header>
  );
}
