import { companyCopy } from "@/data/content";

export default function MemberBenefits() {
  return (
    <div className="section-gap">
      <div className="container-editorial grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4 lg:col-start-2">
          <h3 className="label-caps text-secondary">Benefit Member</h3>
          <h4 className="mt-4 font-display text-[clamp(24px,3vw,32px)] leading-[1.3] text-primary">
            Poin untuk Setiap Kunjungan
          </h4>
        </div>
        <div className="lg:col-span-6 lg:col-start-6">
          <ol>
            {companyCopy.benefits.map((benefit, index) => (
              <li
                key={benefit}
                className="flex gap-6 border-t border-primary/10 py-6 last:border-b"
              >
                <span className="font-display text-2xl italic text-secondary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-lg leading-7 text-on-surface-variant">
                  {benefit}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-xs text-secondary">
            {companyCopy.terms} — pendaftaran dilakukan melalui admin cabang
            terdekat.
          </p>
        </div>
      </div>
    </div>
  );
}
