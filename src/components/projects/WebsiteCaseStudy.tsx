import type { WebsiteProject } from "@/types/project";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { ProjectHero } from "./ProjectHero";
import { ProjectOverview } from "./ProjectOverview";
import { FeatureList } from "./FeatureList";
import { TechnologyStack } from "./TechnologyStack";
import { DesktopMockup, MobileMockup } from "./ConceptMockup";
import { ProjectDisclaimer } from "./ProjectDisclaimer";

export function WebsiteCaseStudy({ project }: { project: WebsiteProject }) {
  const isConcept = project.status === "concept";
  const [tone0, tone1] = project.brand.palette.tones;

  return (
    <article>
      <ProjectHero item={project} />

      <Section labelledBy="overview-heading">
        <ProjectOverview overview={project.overview} problem={<p>{project.problem}</p>} goals={project.goals} />
      </Section>

      <Section tone="stone" labelledBy="solution-heading">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Solution" id="solution-heading" title="How the website solves it." />
            <ul className="mt-8 space-y-4">
              {project.solution.map((item) => (
                <li key={item} className="flex items-start gap-3 leading-relaxed text-ink">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[var(--radius-card)] border border-line bg-white p-6 sm:p-8">
            <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">Design decisions</h3>
            <ul className="mt-6 divide-y divide-line">
              {project.designDecisions.map((item) => (
                <li key={item} className="py-3 text-[0.95rem] leading-relaxed text-muted first:pt-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-2" aria-label="Concept colour palette">
              {[project.brand.palette.background, ...project.brand.palette.tones, project.brand.palette.ink].map((color) => (
                <span key={color} title={color} className="h-8 flex-1 rounded-lg border border-ink/10" style={{ background: color }} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section labelledBy="pages-heading">
        <SectionHeading
          eyebrow="Pages and features"
          id="pages-heading"
          title="Site structure."
          description="Every page has one job and one primary action."
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <ol className="divide-y divide-line overflow-hidden rounded-[var(--radius-card)] border border-line bg-white">
            {project.pages.map((page, index) => (
              <li key={page.name} className="grid grid-cols-[2.5rem_1fr] gap-3 p-5">
                <span className="font-display text-sm font-bold text-muted">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{page.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{page.purpose}</p>
                </div>
              </li>
            ))}
          </ol>
          <div>
            <h3 className="mb-5 font-display text-2xl font-bold tracking-[-0.02em] text-ink">Features</h3>
            <FeatureList items={project.features} columns={1} />
          </div>
        </div>
      </Section>

      <Section tone="stone" labelledBy="stack-heading">
        <SectionHeading
          eyebrow="Technology"
          id="stack-heading"
          title={isConcept ? "Proposed technology stack." : "Technology stack."}
        />
        <div className="mt-10">
          <TechnologyStack
            stack={project.stack}
            note={isConcept ? "This is the planned implementation for the concept; no live build has been deployed yet." : undefined}
          />
        </div>
      </Section>

      <Section labelledBy="screens-heading">
        <SectionHeading
          eyebrow="Visuals"
          id="screens-heading"
          title="Desktop and mobile views."
          description={isConcept ? "Concept mockups rendered in code to show layout and visual direction — not screenshots of a live website." : undefined}
        />
        <figure className="mt-12">
          <div className="overflow-hidden rounded-[var(--radius-panel)] px-5 pt-5 sm:px-12 sm:pt-12" style={{ background: tone0 }}>
            <DesktopMockup brand={project.brand} />
          </div>
          <figcaption className="mt-3 text-sm text-muted">
            Desktop homepage{isConcept ? " — concept mockup" : ""}
          </figcaption>
        </figure>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <figure>
            <div className="rounded-[var(--radius-panel)] px-8 py-10" style={{ background: tone1 }}>
              <MobileMockup brand={project.brand} variant="home" />
            </div>
            <figcaption className="mt-3 text-sm text-muted">Mobile homepage{isConcept ? " — concept mockup" : ""}</figcaption>
          </figure>
          <figure>
            <div className="rounded-[var(--radius-panel)] bg-white px-8 py-10 ring-1 ring-line">
              <MobileMockup brand={project.brand} variant="form" />
            </div>
            <figcaption className="mt-3 text-sm text-muted">Mobile enquiry form{isConcept ? " — concept mockup" : ""}</figcaption>
          </figure>
        </div>
      </Section>

      <Section tone="ink" labelledBy="process-heading">
        <SectionHeading eyebrow="Development process" id="process-heading" tone="dark" title="From research to review." />
        <div className="mt-12">
          <ProcessSteps steps={project.process} tone="dark" />
        </div>
        <div className="mt-12 rounded-[var(--radius-card)] border border-white/15 p-6 sm:p-8">
          <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-white">
            {isConcept ? "Quality checklist for the build" : "Testing"}
          </h3>
          <p className="mt-2 text-sm text-white/60">
            {isConcept ? "What the implementation is to be checked against before launch." : "What was checked before launch."}
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.qualityChecklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-white/85">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section labelledBy="links-heading">
        <h2 id="links-heading" className="font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl">
          Live demo and source code
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          {project.liveUrl || project.sourceUrl
            ? "Links are shown at the top of this page."
            : "There is no live demo or public repository for this concept yet. Links will be added here once a working version is built and tested."}
        </p>
        <ProjectDisclaimer item={project} className="mt-8" />
      </Section>
    </article>
  );
}
