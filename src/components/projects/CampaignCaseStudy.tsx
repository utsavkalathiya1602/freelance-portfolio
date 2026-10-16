import Link from "next/link";
import { ArrowRight, Ban } from "lucide-react";
import type { CampaignProject } from "@/types/project";
import { getWebsiteProject } from "@/data/work";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectHero } from "./ProjectHero";
import { ProjectOverview } from "./ProjectOverview";
import { FeatureList } from "./FeatureList";
import { CampaignMetrics } from "./CampaignMetrics";
import { CampaignPerformance } from "./CampaignPerformance";
import { AdPreview } from "./AdPreview";
import { ProjectDisclaimer } from "./ProjectDisclaimer";

export function CampaignCaseStudy({ campaign }: { campaign: CampaignProject }) {
  const website = getWebsiteProject(campaign.relatedWebsite);

  return (
    <article>
      <ProjectHero item={campaign} />

      <Section labelledBy="overview-heading">
        <ProjectOverview
          overview={`${campaign.summary} The plan is written for ${campaign.brandName}, targeting ${campaign.market.city}, ${campaign.market.country}.`}
          problemTitle="Objective and target audience"
          problem={
            <div className="space-y-3">
              <p>
                <span className="font-semibold text-ink">Objective: </span>
                {campaign.objective}.
              </p>
              <p>
                <span className="font-semibold text-ink">Audience: </span>
                {campaign.audience}
              </p>
              <p>
                <span className="font-semibold text-ink">Conversion: </span>
                {campaign.conversionDefinition}
              </p>
            </div>
          }
          goalsTitle="Services demonstrated"
          goals={campaign.services}
        />
      </Section>

      <Section tone="stone" labelledBy="setup-heading">
        <SectionHeading eyebrow="Campaign setup concept" id="setup-heading" title={`${campaign.campaignType} campaign structure.`} />
        <dl className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line">
          {campaign.setup.map((row) => (
            <div key={row.label} className="grid gap-1 bg-white p-5 sm:grid-cols-[12rem_1fr] sm:gap-6">
              <dt className="text-sm font-semibold text-ink">{row.label}</dt>
              <dd className="text-sm leading-relaxed text-muted">{row.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section labelledBy="keywords-heading">
        <SectionHeading
          eyebrow="Example keyword strategy"
          id="keywords-heading"
          title="Keyword themes and exclusions."
          description="Example keywords grouped by intent, so each ad group can point to a closely matching ad and landing page."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-3">
            {campaign.keywordGroups.map((group) => (
              <div key={group.name} className="rounded-[var(--radius-card)] border border-line bg-white p-5">
                <h3 className="font-display text-lg font-bold text-ink">{group.name}</h3>
                <ul className="mt-3 space-y-2">
                  {group.keywords.map((keyword) => (
                    <li key={keyword} className="rounded-lg bg-lavender/60 px-3 py-2 font-mono text-xs text-ink">
                      {keyword}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="rounded-[var(--radius-card)] border border-line bg-white p-5 sm:p-6">
            <h3 className="inline-flex items-center gap-2 font-display text-lg font-bold text-ink">
              <Ban aria-hidden="true" className="h-4 w-4" />
              Negative keyword strategy
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{campaign.negativeStrategy}</p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Example negative keywords">
              {campaign.negativeKeywords.map((keyword) => (
                <li key={keyword} className="rounded-full border border-line bg-ivory px-3 py-1 font-mono text-xs text-ink line-through decoration-muted">
                  {keyword}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="stone" labelledBy="ads-heading">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Example ad copy" id="ads-heading" title="Clear, accurate ads." />
            <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-muted">Headlines</h3>
            <ul className="mt-3 space-y-2">
              {campaign.headlines.map((headline) => (
                <li key={headline} className="flex items-center justify-between gap-4 rounded-xl bg-white px-4 py-3 text-ink">
                  <span className="font-medium">{headline}</span>
                  <span className="shrink-0 text-xs text-muted">{headline.length}/30</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-muted">Descriptions</h3>
            <ul className="mt-3 space-y-2">
              {campaign.descriptions.map((description) => (
                <li key={description} className="rounded-xl bg-white px-4 py-3 text-ink">
                  <span>{description}</span>
                  <span className="mt-1 block text-xs text-muted">{description.length}/90 characters</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 lg:pt-24">
            <AdPreview campaign={campaign} headlineIndex={0} />
            <AdPreview campaign={campaign} headlineIndex={1} />
            <p className="text-xs text-muted">Simplified previews of how headline combinations could read. Not a screenshot of Google search results.</p>
          </div>
        </div>
      </Section>

      <Section labelledBy="landing-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Landing-page design"
            id="landing-heading"
            title="Where the click lands matters."
            description="The landing page should continue the promise made in the ad and make the next step obvious."
          />
          <div>
            <FeatureList items={campaign.landingPage} columns={1} />
            {website ? (
              <Link
                href={`/work/${website.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-lime decoration-[3px] underline-offset-[6px] hover:decoration-ink"
              >
                See the related website concept: {website.title}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            ) : null}
          </div>
        </div>
      </Section>

      <Section tone="stone" labelledBy="metrics-heading">
        <SectionHeading
          eyebrow="Illustrative metrics dashboard"
          id="metrics-heading"
          title="What one month could look like."
          description="A worked example using invented figures, to show how the plan would be measured and reported."
        />
        <div className="mt-10">
          <CampaignMetrics campaign={campaign} />
        </div>
        <div className="mt-14">
          <CampaignPerformance campaign={campaign} />
        </div>
      </Section>

      <Section labelledBy="plan-heading">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="plan-heading" className="font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl">
              Proposed optimization strategy
            </h2>
            <ol className="mt-8 space-y-4">
              {campaign.optimization.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone font-display text-sm font-bold text-ink">
                    {index + 1}
                  </span>
                  <span className="pt-1 leading-relaxed text-ink">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl">Conversion-tracking plan</h2>
            <div className="mt-8">
              <FeatureList items={campaign.tracking} columns={1} />
            </div>
          </div>
        </div>
        <ProjectDisclaimer item={campaign} className="mt-14" />
      </Section>
    </article>
  );
}
