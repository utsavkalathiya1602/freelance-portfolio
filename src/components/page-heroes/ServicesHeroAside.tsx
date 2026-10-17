import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { services } from "@/data/services";

const toneBg = { lime: "bg-lime", lavender: "bg-lavender" } as const;

/** How each service is engaged — complements the detailed cards further down the page. */
const engagement: Record<string, { type: string; pricing: string }> = {
  "web-development": { type: "Project-based", pricing: "Quoted per project" },
  "digital-marketing": { type: "Ongoing", pricing: "Monthly management + your ad spend" },
};

export function ServicesHeroAside() {
  return (
    <div className="grid gap-4">
      <ul className="grid gap-4 sm:grid-cols-2">
        {services.map((service, index) => {
          const Icon = service.icon;
          const info = engagement[service.slug];
          return (
            <li key={service.slug} className={index === 0 ? "sm:pb-8" : "sm:pt-8"}>
              <Link
                href={service.href}
                className={`group flex h-full flex-col rounded-[var(--radius-panel)] border border-ink/10 p-6 transition-shadow duration-200 hover:shadow-[0_18px_40px_-24px_rgba(23,23,23,0.45)] ${toneBg[service.tone]}`}
              >
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-white">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span className="font-display text-sm font-semibold text-ink/60">0{index + 1}</span>
                </div>
                <p className="mt-8 font-display text-2xl font-bold leading-tight tracking-[-0.03em] text-ink">
                  {service.title}
                </p>
                {info ? (
                  <dl className="mt-4 space-y-2 text-sm">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink/60">Type</dt>
                      <dd className="text-ink">{info.type}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink/60">Pricing</dt>
                      <dd className="text-ink">{info.pricing}</dd>
                    </div>
                  </dl>
                ) : null}
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-ink">
                  Details
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white transition-colors duration-150 group-hover:bg-ink group-hover:text-white">
                    <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      <a
        href="#combined-heading"
        className="group flex items-center justify-between gap-4 rounded-[var(--radius-card)] bg-ink px-6 py-5 text-white transition-colors duration-150 hover:bg-ink/90"
      >
        <span className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-lime text-ink">
            <Plus aria-hidden="true" className="h-4 w-4" />
          </span>
          <span>
            <span className="block font-display text-lg font-bold">Need both?</span>
            <span className="block text-sm text-white/65">Landing page + search campaign, planned together</span>
          </span>
        </span>
        <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0 text-lime" />
      </a>
    </div>
  );
}
