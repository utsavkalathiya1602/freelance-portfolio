import { Lock } from "lucide-react";
import type { AdsClientProject } from "@/types/project";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectHero } from "./ProjectHero";
import { ProjectOverview } from "./ProjectOverview";
import { FeatureList } from "./FeatureList";
import { ClientVisual } from "./ClientVisual";

export function AdsClientCaseStudy({ client }: { client: AdsClientProject }) {
  return (
    <article>
      <ProjectHero item={client} />

      <Section labelledBy="overview-heading">
        <ProjectOverview
          overview={client.about}
          problemTitle="The challenge"
          problem={<p>{client.challenge}</p>}
          goalsTitle="Advertising goals"
          goals={client.goals}
        />
      </Section>

      <Section tone="stone" labelledBy="approach-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Approach"
              id="approach-heading"
              title="From a local search to the store."
              description={`With no separate website, the ${client.campaignType} campaigns are built around helping nearby customers identify the store and visit it.`}
            />
            <ul className="mt-8 space-y-4">
              {client.approach.map((item) => (
                <li key={item} className="flex items-start gap-3 leading-relaxed text-ink">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-panel)] border border-ink/10">
            <ClientVisual client={client} size="hero" />
          </div>
        </div>
      </Section>

      <Section labelledBy="role-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="My role"
            id="role-heading"
            title="What I manage."
            description={`I manage ${client.clientName}'s Google Ads account on an ongoing basis.`}
          />
          <FeatureList items={client.responsibilities} columns={1} />
        </div>
      </Section>

      <Section tone="white" labelledBy="results-heading">
        <div className="flex flex-col gap-5 rounded-[var(--radius-card)] border border-line bg-ivory p-6 sm:flex-row sm:items-start sm:p-8">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-white">
            <Lock aria-hidden="true" className="h-5 w-5" />
          </span>
          <div>
            <h2 id="results-heading" className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">
              About results
            </h2>
            <p className="mt-2 max-w-2xl leading-relaxed text-muted">{client.resultsNote}</p>
          </div>
        </div>
      </Section>
    </article>
  );
}
