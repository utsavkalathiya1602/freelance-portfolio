import Link from "next/link";
import { ArrowLeft, ArrowUpRight, FolderGit2 } from "lucide-react";
import type { WorkItem } from "@/types/project";
import { formatMarket } from "@/data/work";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProjectDisclaimer } from "./ProjectDisclaimer";

export function ProjectHero({ item }: { item: WorkItem }) {
  const facts = [
    { label: "Industry", value: item.industry },
    { label: "Target market", value: formatMarket(item) },
    { label: "Project type", value: item.projectType },
    ...(item.kind === "campaign"
      ? [
          { label: "Objective", value: item.objective },
          { label: "Currency", value: item.market.currency },
        ]
      : [{ label: "Services", value: item.services.join(", ") }]),
  ];

  const liveUrl = item.kind === "website" ? item.liveUrl : undefined;
  const sourceUrl = item.kind === "website" ? item.sourceUrl : undefined;

  return (
    <header className="border-b border-line">
      <Container className="py-12 sm:py-16">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-150 hover:text-ink"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          All work
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start lg:gap-16">
          <div>
            <Eyebrow>{item.kind === "website" ? "Website concept" : "Google Ads campaign plan"}</Eyebrow>
            <h1 className="font-display text-[2.6rem] font-bold leading-[1.02] tracking-[-0.04em] text-ink text-balance sm:text-6xl lg:text-[4.2rem]">
              {item.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{item.summary}</p>
            {liveUrl || sourceUrl ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {liveUrl ? (
                  <Button href={liveUrl} external>
                    Live demo
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </Button>
                ) : null}
                {sourceUrl ? (
                  <Button href={sourceUrl} variant="outline" external>
                    <FolderGit2 aria-hidden="true" className="h-4 w-4" />
                    Source code
                  </Button>
                ) : null}
              </div>
            ) : null}
          </div>

          <dl className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line text-sm">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-white p-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{fact.label}</dt>
                <dd className="mt-1.5 text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ProjectDisclaimer item={item} className="mt-10" />
      </Container>
    </header>
  );
}
