import Link from "next/link";
import { ArrowLeft, ArrowUpRight, FolderGit2 } from "lucide-react";
import type { WorkItem } from "@/types/project";
import { formatLocation } from "@/data/work";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function ProjectHero({ item }: { item: WorkItem }) {
  const facts = [
    { label: "Industry", value: item.industry },
    { label: "Location", value: formatLocation(item) },
    { label: "Project type", value: item.projectType },
    ...(item.kind === "ads-client"
      ? [
            { label: "Campaign type", value: item.campaignType },
            { label: "Status", value: `${item.status} client` },
          ]
        : [
            { label: "My role", value: item.role },
            { label: "Services", value: item.services.join(", ") },
          ]),
  ];

  const liveUrl = item.kind === "website" ? item.liveUrl : item.kind === "ads-client" ? item.profileUrl : undefined;
  const liveLabel = item.kind === "ads-client" ? (item.profileLabel ?? "View business profile") : "Live demo";
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
            <Eyebrow>
              {item.kind === "website" ? "Website project" : "Google Ads · Client work"}
            </Eyebrow>
            <h1 className="font-display text-[2.6rem] font-bold leading-[1.02] tracking-[-0.04em] text-ink text-balance sm:text-6xl lg:text-[4.2rem]">
              {item.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{item.summary}</p>
            {liveUrl || sourceUrl ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {liveUrl ? (
                  <Button href={liveUrl} external>
                    {liveLabel}
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
      </Container>
    </header>
  );
}
