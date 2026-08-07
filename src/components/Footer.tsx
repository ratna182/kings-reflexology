import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import BotanicalArt from "@/components/BotanicalArt";
import { branches, companyEmail, waLinkWithMessage } from "@/data/branches";

export default function Footer() {
  return (
    <footer
      className="safe-bottom relative overflow-hidden border-t-2 border-tertiary"
      style={{
        background: "linear-gradient(180deg, #000000 0%, #0d0d0d 95%)",
      }}
    >
      <BotanicalArt
        photo="leaf-bottom-mirror"
        className="botanical absolute -bottom-8 right-[-40px] h-[240px] w-[180px] rotate-[14deg] opacity-[0.16] sm:right-[-20px]"
      />
      <BotanicalArt
        photo="leaf-bottom"
        className="botanical absolute -left-10 -top-6 h-[200px] w-[260px] -rotate-[10deg] opacity-[0.12]"
      />
      <div className="container-editorial relative py-12 lg:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div>
            <p className="label-caps text-tertiary">Lokasi</p>
            <ul className="mt-5 space-y-4">
              {branches.map((branch) => (
                <li key={branch.id} className="flex items-start gap-3 text-sm leading-5">
                  <svg
                    viewBox="0 0 24 24"
                    className="mt-0.5 h-4 w-4 shrink-0 text-tertiary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11Z" />
                    <circle cx="12" cy="10" r="2.6" />
                  </svg>
                  <span>
                    <span className="block text-on-surface">{branch.area}, {branch.city}</span>
                    <span className="mt-0.5 block text-on-surface-variant">
                      {branch.address}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-caps text-tertiary">Telepon</p>
            <ul className="mt-5 space-y-4">
              {branches.map((branch) => (
                <li key={branch.id}>
                  <a
                    href={waLinkWithMessage(branch)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex min-h-11 items-center gap-2 py-1 pr-3 text-sm text-secondary transition-colors hover:text-tertiary active:text-tertiary"
                  >
                    <WhatsAppIcon className="h-4 w-4 shrink-0 text-tertiary" />
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

          <div>
            <p className="label-caps text-tertiary">Email</p>
            <a
              href={`mailto:${companyEmail}`}
              className="group relative mt-5 inline-flex min-h-11 items-center gap-2 py-1 pr-3 text-sm text-secondary transition-colors hover:text-tertiary"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 shrink-0 text-tertiary"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              {companyEmail}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
              />
            </a>
            <p className="label-caps mt-8 text-tertiary">Jam Buka</p>
            <p className="mt-3 text-sm leading-6 text-on-surface-variant">
              Setiap hari 09.00–21.00 WIB
            </p>
          </div>
        </div>
      </div>
      <div className="relative border-t border-tertiary/15 py-6">
        <div className="container-editorial flex flex-col gap-2 text-xs text-on-surface-variant sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The King&apos;s Reflexology</p>
          <p>
            Pijat Refleksi &amp; Keluarga di Bogor &amp; Bekasi
          </p>
        </div>
      </div>
    </footer>
  );
}