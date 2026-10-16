import type { Offering } from "@/data/services";

type OfferingGridProps = {
  offerings: Offering[];
  accent: "lime" | "lavender";
};

const iconBg = { lime: "bg-lime", lavender: "bg-lavender" } as const;

export function OfferingGrid({ offerings, accent }: OfferingGridProps) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {offerings.map((offering) => {
        const Icon = offering.icon;
        return (
          <li
            key={offering.title}
            className="rounded-[var(--radius-card)] border border-line bg-white p-6 transition-colors duration-150 hover:border-ink/40 sm:p-7"
          >
            <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl text-ink ${iconBg[accent]}`}>
              <Icon aria-hidden="true" className="h-5 w-5" />
            </span>
            <h3 className="mt-6 font-display text-xl font-bold tracking-[-0.02em] text-ink">{offering.title}</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{offering.description}</p>
          </li>
        );
      })}
    </ul>
  );
}
