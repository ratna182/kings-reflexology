import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import RevealText from "@/components/motion/RevealText";
import SettleHeading from "@/components/motion/SettleHeading";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import { galleryItems } from "@/data/gallery";

export default function Gallery() {
  return (
    <section
      id="galeri"
      aria-labelledby="galeri-title"
      className="section-gap relative isolate overflow-hidden bg-surface-container"
    >
      <div className="container-editorial">
        <div className="max-w-2xl">
          <Reveal>
            <p className="script-accent">Suasana Kami</p>
          </Reveal>
          <SettleHeading>
            <RevealText
              text="Ruang untuk Merawat Diri"
              as="h2"
              id="galeri-title"
              className="mt-4 font-display text-[clamp(26px,3vw,36px)] leading-[1.3] text-primary"
              delay={0.1}
            />
          </SettleHeading>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-xl text-lg leading-[1.6] text-on-surface-variant">
              Lihat lebih dekat suasana tenang dan hangat yang menyambut setiap
              kunjungan Anda.
            </p>
          </Reveal>
        </div>

        <StaggerContainer
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-5 lg:gap-6"
          staggerSpeed="fast"
          delay={0.3}
        >
          {galleryItems.map((item) => (
            <StaggerItem key={item.src}>
              <figure className="group overflow-hidden rounded-[1.25rem] border border-tertiary/50 bg-surface-container-low">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="px-5 py-4 font-display text-lg text-primary">
                  {item.caption}
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
