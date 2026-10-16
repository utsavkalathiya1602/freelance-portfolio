import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import type { WorkItem } from "@/types/project";
import { formatLocation } from "@/data/work";
import { Tag } from "@/components/ui/Tag";
import { WebsiteVisual } from "./WebsiteVisual";
import { ClientVisual } from "./ClientVisual";

type ProjectCardProps = {
  item: WorkItem;
  headingLevel?: "h2" | "h3";
};

export function ProjectCard({ item, headingLevel: Heading = "h3" }: ProjectCardProps) {
  const href = `/work/${item.slug}`;
  const category = item.industry.split(" · ")[0];
  const tags =
    item.kind === "website" ? item.stack.flatMap((group) => group.items).slice(0, 4) : item.services.slice(0, 3);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white transition-shadow duration-200 hover:shadow-[0_18px_40px_-24px_rgba(23,23,23,0.35)]">
      <Link href={href} tabIndex={-1} aria-hidden="true" className="block">
        {item.kind === "website" ? <WebsiteVisual project={item} /> : <ClientVisual client={item} />}
      </Link>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex min-w-0 items-center gap-2 text-sm">
          <span className="shrink-0 rounded-full bg-stone px-3 py-1 font-semibold text-ink">{category}</span>
          <span className="inline-flex min-w-0 items-center gap-1 text-muted">
            <MapPin aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{formatLocation(item)}</span>
          </span>
        </div>

        <Heading className="mt-4 font-display text-2xl font-bold tracking-[-0.02em] text-ink">
          <Link href={href} className="hover:underline hover:decoration-2 hover:underline-offset-4">
            {item.title}
          </Link>
        </Heading>

        <p className="mt-3 line-clamp-3 text-[0.95rem] leading-relaxed text-muted">{item.summary}</p>

        <ul
          className="mt-5 flex flex-wrap gap-2"
          aria-label={item.kind === "website" ? "Built with" : "Services demonstrated"}
        >
          {tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-line pt-5">
            <Link
              href={href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-lime decoration-[3px] underline-offset-[6px] transition-colors duration-150 hover:decoration-ink"
            >
              View case study
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
              <span className="sr-only">: {item.title}</span>
            </Link>
            {item.kind === "website" ? (
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors duration-150 hover:text-ink"
              >
                Live site
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                <span className="sr-only">(opens {item.title} in a new tab)</span>
              </a>
            ) : item.kind === "ads-client" && item.profileUrl ? (
              <a
                href={item.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors duration-150 hover:text-ink"
              >
                {item.profileLabel ?? "Business profile"}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                <span className="sr-only">(opens {item.title} on Google in a new tab)</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
