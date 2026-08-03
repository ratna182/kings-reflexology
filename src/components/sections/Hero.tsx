import Image from "next/image";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { defaultBranch } from "@/data/branches";
import { companyCopy } from "@/data/content";

export default function Hero() {
  const { hero } = companyCopy;
  return (
    <section id="home" aria-labelledby="home-title" className="pt-16">
      <div className="container-editorial">
        <div className="grid min-h-[calc(100svh-64px)] items-center gap-16 py-20 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="label-caps text-tertiary">{hero.overline}</p>
            <h1
              id="home-title"
              className="mt-6 font-display text-[clamp(40px,7vw,64px)] leading-[1.1] tracking-[-0.02em] text-primary"
            >
              {hero.title1}
              <br />
              <em className="italic">{hero.title2}</em>
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-on-surface-variant">
              {hero.body}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={defaultBranch.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-tertiary px-7 py-4 text-sm font-semibold text-on-tertiary transition-colors hover:bg-primary"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Hubungi WhatsApp
              </a>
              <a
                href="#lokasi"
                className="inline-flex items-center justify-center border border-primary px-7 py-4 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-on-primary"
              >
                Lihat Lokasi
              </a>
            </div>
          </div>
          <div className="lg:col-start-8 lg:col-span-4">
            <Image
              src="/images/kings-hero.svg"
              alt="Suasana pijat refleksi keluarga di Kings Refleksi"
              width={800}
              height={1000}
              priority
              className="aspect-[4/5] w-full object-cover"
            />
            <p className="mt-3 text-xs text-secondary">
              Foto ambiance 4:5 — placeholder, menunggu aset foto asli
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
