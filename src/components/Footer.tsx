import { branches, companyEmail } from "@/data/branches";

export default function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-surface">
      <div className="container-editorial grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-display text-2xl text-primary">Kings Refleksi</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-secondary">
            Pijat sehat keluarga sejak 2003 — 3 cabang di Bogor &amp; Bekasi.
          </p>
        </div>
        <div className="lg:col-span-4">
          <p className="label-caps text-secondary">Cabang</p>
          <ul className="mt-4 space-y-3">
            {branches.map((branch) => (
              <li key={branch.id} className="text-sm leading-5">
                <span className="text-on-surface">{branch.name}</span>
                <br />
                <a
                  href={branch.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary transition-colors hover:text-tertiary"
                >
                  {branch.phoneDisplay}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-4">
          <p className="label-caps text-secondary">Kontak</p>
          <a
            href={`mailto:${companyEmail}`}
            className="mt-4 block text-sm text-secondary transition-colors hover:text-primary"
          >
            {companyEmail}
          </a>
        </div>
      </div>
      <div className="border-t border-primary/10 py-6">
        <div className="container-editorial flex flex-col gap-2 text-xs text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kings Refleksi</p>
          <p>Pijat Refleksi &amp; Keluarga di Bogor &amp; Bekasi</p>
        </div>
      </div>
    </footer>
  );
}
