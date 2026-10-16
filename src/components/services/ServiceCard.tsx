import { ArrowRight, Check } from "lucide-react";
import type { Service } from "@/data/services";
import { Button } from "@/components/ui/Button";

const toneBg = { lime: "bg-lime", lavender: "bg-lavender" } as const;

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;

  return (
    <article
      className={`flex h-full flex-col rounded-[var(--radius-panel)] border border-ink/10 p-7 sm:p-10 ${toneBg[service.tone]}`}
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-white">
          <Icon aria-hidden="true" className="h-6 w-6" />
        </span>
        <span className="font-display text-5xl font-bold tracking-[-0.04em] text-ink/15">0{index + 1}</span>
      </div>

      <h3 className="mt-10 font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl">{service.title}</h3>
      <p className="mt-4 max-w-md text-base leading-relaxed text-ink/80">{service.description}</p>

      <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
        {service.includes.map((item) => (
          <li key={item} className="flex items-start gap-3 py-3 text-[0.95rem] text-ink">
            <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <Button href={service.href} variant="dark">
          {service.cta}
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Button>
      </div>
    </article>
  );
}
