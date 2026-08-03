import { companyEmail } from "@/data/branches";

export default function Contact() {
  return (
    <section
      id="kontak"
      aria-labelledby="kontak-title"
      className="section-gap border-t border-primary/10 bg-surface-container-low"
    >
      <div className="container-editorial grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:col-start-2">
          <p className="label-caps text-tertiary">Kontak</p>
          <h2
            id="kontak-title"
            className="mt-4 font-display text-[clamp(32px,5vw,48px)] leading-[1.1] text-primary"
          >
            Siap Melayani Anda
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-on-surface-variant">
            Pendaftaran member dan transaksi dilakukan langsung melalui admin
            cabang. Pilih cabang terdekat dan mulai percakapan di WhatsApp.
          </p>
        </div>
        <div className="lg:col-span-4 lg:col-start-8">
          <p className="label-caps text-secondary">Email</p>
          <a
            href={`mailto:${companyEmail}`}
            className="mt-3 inline-block font-display text-[clamp(20px,2.5vw,24px)] leading-tight text-primary underline-offset-4 transition-colors hover:text-tertiary hover:underline"
          >
            {companyEmail}
          </a>
          <div className="mt-10">
            <p className="label-caps text-secondary">Jam Layanan</p>
            <p className="mt-3 text-sm leading-6 text-on-surface-variant">
              Setiap cabang buka mulai pukul 09.00 — jam tutup bervariasi per
              cabang (lihat kartu lokasi di atas).
            </p>
          </div>
          <div className="mt-10">
            <p className="label-caps text-secondary">Pencarian Cepat</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="#lokasi-yasmin-bogor"
                  className="text-on-surface-variant underline-offset-4 transition-colors hover:text-tertiary hover:underline"
                >
                  Yasmin, Bogor
                </a>
              </li>
              <li>
                <a
                  href="#lokasi-bukit-cimanggu-bogor"
                  className="text-on-surface-variant underline-offset-4 transition-colors hover:text-tertiary hover:underline"
                >
                  Bukit Cimanggu City, Bogor
                </a>
              </li>
              <li>
                <a
                  href="#lokasi-grand-galaxy-bekasi"
                  className="text-on-surface-variant underline-offset-4 transition-colors hover:text-tertiary hover:underline"
                >
                  Grand Galaxy, Bekasi
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
