import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { branches } from "@/data/branches";

export default function Branches() {
  return (
    <section
      id="lokasi"
      aria-labelledby="lokasi-title"
      className="section-gap border-t border-primary/10"
    >
      <div className="container-editorial">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-6 lg:col-start-2">
            <p className="label-caps text-tertiary">Lokasi</p>
            <h2
              id="lokasi-title"
              className="mt-4 font-display text-[clamp(32px,5vw,48px)] leading-[1.1] text-primary"
            >
              Cabang Kami di Bogor &amp; Bekasi
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-on-surface-variant">
              Tiga cabang siap melayani Anda. Hubungi admin cabang terdekat
              melalui WhatsApp untuk reservasi dan informasi.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {branches.map((branch, index) => (
            <article
              key={branch.id}
              id={branch.id}
              className="flex flex-col border border-primary/10 bg-surface p-8"
            >
              <p className="label-caps text-tertiary">{branch.city}</p>
              <h3 className="mt-3 font-display text-2xl leading-tight text-primary">
                {branch.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-on-surface-variant">
                {branch.address}
              </p>
              {branch.hours && (
                <div className="mt-6">
                  <p className="label-caps text-secondary">Jam Operasional</p>
                  <ul className="mt-2 space-y-1">
                    {branch.hours.map((hours) => (
                      <li key={hours} className="text-sm text-on-surface-variant">
                        {hours}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-auto flex flex-col gap-3 pt-8">
                <a
                  href={branch.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    index === 0
                      ? "inline-flex items-center justify-center gap-3 bg-tertiary px-6 py-3.5 text-sm font-semibold text-on-tertiary transition-colors hover:bg-primary"
                      : "inline-flex items-center justify-center gap-3 border border-primary px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-on-primary"
                  }
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {branch.phoneDisplay}
                </a>
                <a
                  href={branch.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-caps inline-flex items-center justify-center gap-2 text-secondary transition-colors hover:text-primary"
                >
                  Buka di Google Maps
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
