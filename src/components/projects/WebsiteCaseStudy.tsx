import { ArrowUpRight } from "lucide-react";
import type { WebsiteProject } from "@/types/project";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProjectHero } from "./ProjectHero";
import { ProjectOverview } from "./ProjectOverview";
import { FeatureList } from "./FeatureList";
import { TechnologyStack } from "./TechnologyStack";
import { ProjectScreenshot } from "./ProjectScreenshot";

export function WebsiteCaseStudy({ project }: { project: WebsiteProject }) {
  const [cover, ...desktopShots] = project.screenshots.filter((shot) => shot.device === "desktop");
  const mobileShots = project.screenshots.filter((shot) => shot.device === "mobile");

  return (
    <article>
      <ProjectHero item={project} />

      {cover ? (
        <div className="border-b border-line" style={{ background: project.accent }}>
          <figure className="mx-auto w-full max-w-[1180px] px-4 pb-0 pt-10 sm:px-6 sm:pt-14 lg:px-8">
            <ProjectScreenshot screenshot={cover} priority sizes="(min-width: 1180px) 1100px, 100vw" className="rounded-b-none" />
            <figcaption className="sr-only">{cover.caption}</figcaption>
          </figure>
        </div>
      ) : null}

      <Section labelledBy="overview-heading">
        <ProjectOverview
          overview={project.overview}
          problemTitle={project.team ? "What the product needed to do" : "What the website needed to do"}
          problem={
            <ul className="space-y-2">
              {project.goals.map((goal) => (
                <li key={goal} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                  {goal}
                </li>
              ))}
            </ul>
          }
          goalsTitle={project.team ? "How the product does that" : "How it was built to do that"}
          goals={project.approach}
        />      </Section>

      {project.contributions?.length ? (
        <Section labelledBy="contribution-heading">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <SectionHeading
              eyebrow="My role"
              id="contribution-heading"
              title="My contribution."
              description={`${project.title} is a team product. These are the parts I worked on as a developer.`}
            />
            <FeatureList items={project.contributions} columns={1} />
          </div>
        </Section>
      ) : null}

      {desktopShots.length > 0 ? (
        <Section tone="stone" labelledBy="desktop-heading">
          <SectionHeading eyebrow="Desktop" id="desktop-heading" title="Desktop screenshots." description="Real screenshots of the live website." />
          <ul className="mt-12 grid gap-8 md:grid-cols-2">
            {desktopShots.map((shot, index) => (
              <li key={shot.publicId} className={index === 0 && desktopShots.length % 2 === 1 ? "md:col-span-2" : ""}>
                <figure>
                  <ProjectScreenshot
                    screenshot={shot}
                    sizes={index === 0 && desktopShots.length % 2 === 1 ? "(min-width: 1180px) 1100px, 100vw" : "(min-width: 768px) 540px, 100vw"}
                  />
                  <figcaption className="mt-3 text-sm text-muted">{shot.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {mobileShots.length > 0 ? (
        <Section labelledBy="mobile-heading">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-16">
            <SectionHeading
              eyebrow="Mobile"
              id="mobile-heading"
              title="Built for phones first."
              description="Most visitors arrive on a phone, so layouts, buttons and forms are designed to work comfortably on small screens."
            />
            <ul className="grid grid-cols-2 gap-6 sm:gap-10">
              {mobileShots.map((shot) => (
                <li key={shot.publicId}>
                  <figure>
                    <ProjectScreenshot screenshot={shot} sizes="(min-width: 1024px) 260px, 45vw" className="mx-auto max-w-[260px]" />
                    <figcaption className="mt-4 text-center text-sm text-muted">{shot.caption}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ) : null}

      <Section tone="stone" labelledBy="sections-heading">
        <SectionHeading
          eyebrow="Structure"
          id="sections-heading"
          title="Page sections and features."
          description="How the website is organised, and what visitors can do on it."
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <ol className="divide-y divide-line overflow-hidden rounded-[var(--radius-card)] border border-line bg-white">
            {project.sections.map((section, index) => (
              <li key={section.name} className="grid grid-cols-[2.5rem_1fr] gap-3 p-5">
                <span className="font-display text-sm font-bold text-muted">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{section.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{section.description}</p>
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

      <Section labelledBy="stack-heading">
        <SectionHeading eyebrow="Technology" id="stack-heading" title="Technology stack." />
        <div className="mt-10">
          <TechnologyStack stack={project.stack} />
        </div>
      </Section>

      <Section tone="ink" labelledBy="live-heading">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 id="live-heading" className="font-display text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
              See it live.
            </h2>
            <p className="mt-3 max-w-xl text-white/70">
              The best way to judge a website is to use it. Open {project.title} on your phone or desktop.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={project.liveUrl} external size="lg">
              Visit live website
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            {project.sourceUrl ? (
              <Button href={project.sourceUrl} external variant="light" size="lg">
                View source code
              </Button>
            ) : null}
          </div>
        </div>
      </Section>
    </article>
  );
}
