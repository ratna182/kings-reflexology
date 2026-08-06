import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import BotanicalArt from "@/components/BotanicalArt";
import { branches, companyEmail, waLinkWithMessage } from "@/data/branches";

export default function Footer() {
  return (
    <footer className="safe-bottom relative overflow-hidden border-t border-tertiary/15 bg-surface-container">
      <BotanicalArt
        photo="leaf-bottom-mirror"
        className="botanical absolute -bottom-8 right-[-40px] h-[240px] w-[180px] rotate-[14deg] opacity-[0.12] sm:right-[-20px]"
      />
      <div className="container-editorial relative py-12 lg:py-14">
        <div className="border-b border-tertiary/15 pb-8 lg:pb-10">
          <p className="font-display text-[clamp(20px,2vw,24px)] leading-[1.4] text-primary">The King&apos;s Reflexology</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-on-surface-variant">
            Pijat sehat keluarga sejak 2003 — 3 cabang di Bogor &amp; Bekasi.
          </p>
        </div>

        <div className="grid items-start gap-10 pt-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <p className="label-caps text-tertiary">Lokasi</p>
            <ul className="mt-4 space-y-3">
              {branches.map((branch) => (
                <li key={branch.id} className="text-sm leading-5">
                  <span className="text-on-surface">{branch.name}</span>
                  <span className="mt-0.5 block text-on-surface-variant">
                    {branch.area}, {branch.city}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="label-caps text-tertiary">Telepon</p>
            <ul className="mt-4 space-y-3">
              {branches.map((branch) => (
                <li key={branch.id}>
                  <a
                    href={waLinkWithMessage(branch)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex min-h-11 items-center gap-2 py-1 pr-3 text-sm text-secondary transition-colors hover:text-tertiary active:text-tertiary"
                  >
                    <WhatsAppIcon className="h-4 w-4 shrink-0" />
                    {branch.phoneDisplay}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="label-caps text-tertiary">Email</p>
            <a
              href={`mailto:${companyEmail}`}
              className="mt-4 block text-sm text-secondary transition-colors hover:text-tertiary"
            >
              {companyEmail}
            </a>
            <p className="label-caps mt-6 text-tertiary">Jam Buka</p>
            <p className="mt-3 text-sm leading-6 text-on-surface-variant">
              Setiap hari 09.00–21.00 WIB
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="label-caps text-tertiary">Sosial Media</p>
            <ul className="mt-4 space-y-3">
              {branches.map((branch) => (
                <li key={branch.id}>
                  <a
                    href={branch.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex min-h-11 items-center gap-2 py-1 pr-3 text-sm text-secondary transition-colors hover:text-tertiary active:text-tertiary"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11Z" />
                      <circle cx="12" cy="10" r="2.6" />
                    </svg>
                    {branch.area}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="relative border-t border-tertiary/15 py-6">
        <div className="container-editorial flex flex-col gap-2 text-xs text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The King&apos;s Reflexology</p>
          <p className="text-on-surface-variant">
            Pijat Refleksi &amp; Keluarga di Bogor &amp; Bekasi
          </p>
        </div>
      </div>
    </footer>
  );
}
