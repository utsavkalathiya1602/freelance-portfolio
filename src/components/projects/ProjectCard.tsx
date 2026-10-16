import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { CampaignProject, WebsiteProject, WorkItem } from "@/types/project";
import { calculateMetrics, formatCurrency, formatPercent } from "@/lib/metrics";
import { formatMarket } from "@/data/work";
import { Tag } from "@/components/ui/Tag";
import { DesktopMockup } from "./ConceptMockup";
import { AdPreview } from "./AdPreview";
import { ProjectDisclaimer } from "./ProjectDisclaimer";

type ProjectCardProps = {
  item: WorkItem;
  headingLevel?: "h2" | "h3";
};

const accentBg = { lavender: "bg-lavender", lime: "bg-lime", peach: "bg-peach", stone: "bg-stone" } as const;

export function ProjectCard({ item, headingLevel: Heading = "h3" }: ProjectCardProps) {
  const href = `/work/${item.slug}`;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-white transition-shadow duration-200 hover:shadow-[0_18px_40px_-24px_rgba(23,23,23,0.35)]">
      <Link href={href} tabIndex={-1} aria-hidden="true" className="block">
        {item.kind === "website" ? <WebsiteVisual project={item} /> : <CampaignVisual campaign={item} />}
      </Link>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <ProjectDisclaimer item={item} variant="compact" className="self-start" />

        <Heading className="mt-4 font-display text-2xl font-bold tracking-[-0.02em] text-ink">
          <Link href={href} className="hover:underline hover:decoration-2 hover:underline-offset-4">
            {item.title}
          </Link>
        </Heading>

        <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Industry</dt>
            <dd className="text-ink">{item.industry}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Target market</dt>
            <dd className="inline-flex items-center gap-1 text-ink">
              <MapPin aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
              {formatMarket(item)}
            </dd>
          </div>
          <div className="col-span-2">
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Project type</dt>
            <dd className="text-ink">{item.projectType}</dd>
          </div>
        </dl>

        <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">{item.summary}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Services demonstrated">
          {item.services.map((service) => (
            <li key={service}>
              <Tag>{service}</Tag>
            </li>
          ))}
        </ul>

        {item.kind === "website" ? (
          <p className="mt-4 text-sm text-muted">
            <span className="font-semibold text-ink">Proposed stack: </span>
            {item.stack.flatMap((group) => group.items).slice(0, 4).join(", ")}
          </p>
        ) : null}

        <div className="mt-auto pt-6">
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-lime decoration-[3px] underline-offset-[6px] transition-colors duration-150 hover:decoration-ink"
          >
            {item.kind === "website" ? "View case study" : "View campaign plan"}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
            <span className="sr-only">: {item.title}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

function WebsiteVisual({ project }: { project: WebsiteProject }) {
  return (
    <div className="px-5 pt-5 sm:px-8 sm:pt-8" style={{ background: project.brand.palette.tones[0] }}>
      <DesktopMockup brand={project.brand} />
    </div>
  );
}

function CampaignVisual({ campaign }: { campaign: CampaignProject }) {
  const metrics = calculateMetrics(campaign.inputs);
  const currency = campaign.market.currency;
  const stats = [
    { label: "CTR", value: formatPercent(metrics.ctr, 1) },
    { label: "Avg. CPC", value: formatCurrency(metrics.averageCpc, currency) },
    { label: "Cost / conv.", value: formatCurrency(metrics.costPerConversion, currency, { decimals: 0 }) },
  ];

  return (
    <div className={`p-5 sm:p-8 ${accentBg[campaign.accent]}`}>
      <AdPreview campaign={campaign} />
      <div className="mt-3 rounded-2xl border border-line bg-white p-4">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted">Sample figures</p>
        <dl className="mt-2 grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-xs text-muted">{stat.label}</dt>
              <dd className="font-display text-lg font-bold text-ink">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
