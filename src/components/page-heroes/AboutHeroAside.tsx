import Link from "next/link";
import { ArrowRight, Briefcase, GraduationCap, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

type AboutHeroAsideProps = {
  currentRole: { role: string; company: string };
  currentStudy: { title: string; place: string };
  stack: string[];
};

/** Profile card built from real details. Uses the brand monogram instead of a photo. */
export function AboutHeroAside({ currentRole, currentStudy, stack }: AboutHeroAsideProps) {
  return (
    <div className="grid gap-4">
      <div className="rounded-[var(--radius-panel)] border border-ink/10 bg-lime p-6 sm:p-8">
        <div className="flex items-center gap-4">
          <span
            aria-hidden="true"
            className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-ink font-display text-2xl font-extrabold tracking-[-0.04em] text-lime"
          >
            {siteConfig.brandMark}
          </span>
          <div>
            <p className="font-display text-2xl font-bold tracking-[-0.03em] text-ink">{siteConfig.name}</p>
            <p className="text-sm text-ink/75">{siteConfig.title}</p>
          </div>
        </div>

        <dl className="mt-8 grid gap-4 text-sm">
          <div className="flex items-start gap-3">
            <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
            <div>
              <dt className="sr-only">Location</dt>
              <dd className="text-ink">{siteConfig.location}</dd>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Briefcase aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
            <div>
              <dt className="sr-only">Current role</dt>
              <dd className="text-ink">
                {currentRole.role} at {currentRole.company}
              </dd>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <GraduationCap aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
            <div>
              <dt className="sr-only">Studying</dt>
              <dd className="text-ink">
                {currentStudy.title}, {currentStudy.place}
              </dd>
            </div>
          </div>
        </dl>
      </div>

      <div className="grid gap-4 sm:grid-cols-[1.2fr_1fr]">
        <div className="rounded-[var(--radius-card)] border border-ink/10 bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Works with</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {stack.map((item) => (
              <li key={item} className="rounded-full bg-ivory px-3 py-1 text-sm font-medium text-ink">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="/contact"
          className="group flex flex-col justify-between rounded-[var(--radius-card)] border border-ink/10 bg-lavender p-5 transition-shadow duration-200 hover:shadow-[0_18px_40px_-24px_rgba(23,23,23,0.45)]"
        >
          <span className="font-display text-lg font-bold leading-snug text-ink">Open to freelance projects</span>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink">
            Get in touch
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white transition-colors duration-150 group-hover:bg-ink group-hover:text-white">
              <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
