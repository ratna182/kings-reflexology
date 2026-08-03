import { companyCopy } from "@/data/content";

export default function MemberCta() {
  const { member } = companyCopy;
  return (
    <div className="section-gap border-y border-primary/10 bg-surface-container-low">
      <div className="container-editorial grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7 lg:col-start-2">
          <p className="label-caps text-tertiary">Member</p>
          <h2
            id="member-title"
            className="mt-4 font-display text-[clamp(26px,4vw,32px)] leading-[1.3] text-primary"
          >
            {member.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-on-surface-variant">
            {member.body}
          </p>
        </div>
        <div className="flex items-end lg:col-span-3 lg:col-start-10">
          <a
            href="#kontak"
            className="inline-flex items-center justify-center bg-tertiary px-7 py-4 text-sm font-semibold text-on-tertiary transition-colors hover:bg-primary"
          >
            {member.cta}
          </a>
        </div>
      </div>
    </div>
  );
}
