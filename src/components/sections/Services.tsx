"use client";

import { useState } from "react";
import Image from "next/image";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { services } from "@/data/services";
import { defaultBranch } from "@/data/branches";

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="layanan"
      aria-labelledby="layanan-title"
      className="section-gap border-t border-primary/10 bg-surface-container-low"
    >
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-6 lg:col-start-2">
            <p className="label-caps text-tertiary">Layanan</p>
            <h2
              id="layanan-title"
              className="mt-4 font-display text-[clamp(32px,5vw,48px)] leading-[1.1] text-primary"
            >
              Perawatan untuk Satu Keluarga
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-on-surface-variant">
              Dari pijat relaksasi hingga terapi tradisional seperti bekam dan
              totok wajah — setiap perawatan disesuaikan dengan kebutuhan tubuh
              dan keluarga Anda.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={service.slug}
                className="flex flex-col border border-primary/10 bg-surface"
              >
                <Image
                  src="/images/kings-portrait.svg"
                  alt={`${service.name} di Kings Refleksi`}
                  width={600}
                  height={800}
                  className="aspect-[3/4] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl leading-tight text-primary">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                    {service.summary}
                  </p>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`service-${service.slug}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="label-caps mt-5 flex items-center gap-3 text-primary transition-colors hover:text-tertiary"
                  >
                    <span aria-hidden="true" className="text-lg leading-none">
                      {isOpen ? "–" : "+"}
                    </span>
                    {isOpen ? "Tutup" : "Selengkapnya"}
                  </button>
                  {isOpen && (
                    <div
                      id={`service-${service.slug}`}
                      className="mt-4 border-t border-primary/10 pt-4 text-sm leading-7 text-on-surface-variant"
                    >
                      {service.description}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-20 flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-lg text-on-surface-variant">
            Daftar harga bervariasi per cabang dan promo. Tanyakan langsung ke
            admin — pastikan Anda mendapat penawaran terbaik.
          </p>
          <a
            href={defaultBranch.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-tertiary px-7 py-4 text-sm font-semibold text-on-tertiary transition-colors hover:bg-primary"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Tanya Info &amp; Harga
          </a>
        </div>
      </div>
    </section>
  );
}