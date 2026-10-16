import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, MapPin } from "lucide-react";
import type { WebsiteProject } from "@/types/project";
import { formatLocation } from "@/data/work";
import { WebsiteVisual } from "./WebsiteVisual";

type ProjectShowcaseProps = {
  project: WebsiteProject;
  /** Puts the screenshots on the right on large screens, for alternating rows. */
  reverse?: boolean;
  priority?: boolean;
};

/** Large, horizontal project row used on the Work page. */
export function ProjectShowcase({ project, reverse = false, priority = false }: ProjectShowcaseProps) {
  const href = `/work/${project.slug}`;
  const category = project.industry.split(" · ")[0];
  const stack = project.stack.flatMap((group) => group.items).slice(0, 5);

  return (
    <article className="grid overflow-hidden rounded-[var(--radius-panel)] border border-line bg-white lg:grid-cols-[1.15fr_1fr]">
      <Link href={href} tabIndex={-1} aria-hidden="true" className={reverse ? "lg:order-2" : ""}>
        <WebsiteVisual project={project} size="showcase" priority={priority} />
      </Link>

      <div className="flex flex-col p-6 sm:p-10 lg:p-12">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="rounded-full bg-stone px-3 py-1 font-semibold text-ink">{category}</span>
          <span className="inline-flex items-center gap-1 text-muted">
            <MapPin aria-hidden="true" className="h-3.5 w-3.5" />
            {formatLocation(project)}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs font-semibold text-ink">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#2f9e5b]" />
            Live
          </span>
        </div>

        <h3 className="mt-5 font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl">
          <Link href={href} className="hover:underline hover:decoration-2 hover:underline-offset-4">
            {project.title}
          </Link>
        </h3>
        <p className="mt-4 leading-relaxed text-muted">{project.summary}</p>

        <ul className="mt-6 space-y-2.5" aria-label="Key features">
          {project.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-[0.95rem] text-ink">
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime">
                <Check aria-hidden="true" className="h-3 w-3" />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Built with</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {stack.map((item) => (
              <li key={item} className="rounded-full bg-ivory px-3 py-1 text-sm text-ink">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
          <Link
            href={href}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-ink bg-ink px-5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-lime hover:text-ink"
          >
            View case study
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
            <span className="sr-only">: {project.title}</span>
          </Link>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-ink/25 px-5 text-sm font-semibold text-ink transition-colors duration-150 hover:border-ink hover:bg-ivory"
          >
            Visit live site
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            <span className="sr-only">(opens {project.title} in a new tab)</span>
          </a>
        </div>
      </div>
    </article>
  );
}
