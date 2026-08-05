"use client";

import { useEffect, useRef } from "react";

export default function PageTransition() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const target = e.target as HTMLElement;
      const link = target.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el || !overlayRef.current) return;
      e.preventDefault();
      const overlay = overlayRef.current;
      overlay.classList.remove("pointer-events-none");
      overlay.style.opacity = "1";
      setTimeout(() => {
        el.scrollIntoView();
        setTimeout(() => {
          overlay.style.opacity = "0";
          overlay.classList.add("pointer-events-none");
        }, 150);
      }, 150);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[80] bg-surface opacity-0 transition-opacity duration-150"
    />
  );
}