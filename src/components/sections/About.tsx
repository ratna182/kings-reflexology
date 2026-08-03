import PlaceholderArt from "@/components/PlaceholderArt";
import { companyCopy } from "@/data/content";
import Timeline from "@/components/sections/Timeline";

export default function About() {
  return (
    <section
      id="tentang-kami"
      aria-labelledby="tentang-title"
      className="section-gap"
    >
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-6 lg:col-start-2">
            <p className="label-caps text-tertiary">Tentang Kami</p>
            <h2
              id="tentang-title"
              className="mt-4 font-display text-[clamp(32px,5vw,48px)] leading-[1.1] text-primary"
            >
              Visi &amp; Misi
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:col-start-2">
            <h3 className="label-caps text-secondary">Visi</h3>
            <blockquote className="mt-4 font-display text-[clamp(20px,2.5vw,24px)] leading-[1.5] text-primary">
              {companyCopy.vision}
            </blockquote>
          </div>
          <div className="lg:col-span-4 lg:col-start-8">
            <div className="aspect-[4/5] w-full overflow-hidden">
              <PlaceholderArt className="h-full w-full" />
            </div>
            <p className="mt-3 text-xs text-secondary">
              Foto ambiance 4:5 — placeholder, menunggu aset foto asli
            </p>
          </div>
        </div>

        <div className="mt-32 lg:mt-40">
          <h3 className="label-caps text-secondary">Misi</h3>
          <ol className="mt-10">
            {companyCopy.mission.map((item, index) => (
              <li
                key={item.title}
                className="grid gap-3 border-t border-primary/10 py-8 last:border-b lg:grid-cols-12"
              >
                <span className="font-display text-2xl italic text-secondary lg:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h4 className="font-display text-xl leading-tight text-primary lg:col-span-4">
                  {item.title}
                </h4>
                <p className="leading-7 text-on-surface-variant lg:col-span-6">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-32 lg:mt-40">
          <h3 className="label-caps text-tertiary">Sejarah</h3>
          <h4 className="mt-4 font-display text-[clamp(26px,4vw,32px)] leading-[1.3] text-primary">
            Dua Dekade Merawat Keluarga
          </h4>
          <Timeline />
        </div>
      </div>
    </section>
  );
}
