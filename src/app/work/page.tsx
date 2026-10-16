import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { allWork, workCategories } from "@/data/work";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { ProjectShowcaseList } from "@/components/projects/ProjectShowcaseList";
import { websiteProjects } from "@/data/projects";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { SAMPLE_DATA_LABEL } from "@/components/projects/ProjectDisclaimer";
import { ContactCTA } from "@/components/home/ContactCTA";
import { WorkHeroAside } from "@/components/page-heroes/WorkHeroAside";

const title = "Work";
const description =
  "Live websites designed and built by Utsav Kalathiya for a dental clinic, a hotel and an event studio, plus Google Ads campaign plans.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/work" });

export default function WorkPage() {
  const groups = workCategories.map((category) => {
    const items = allWork.filter((item) => item.kind === category.id);
    return {
      id: category.id,
      label: category.label,
      description: category.description,
      count: items.length,
      content:
        category.id === "website" ? (
          <ProjectShowcaseList projects={websiteProjects} />
        ) : (
          <ProjectGrid items={items} />
        ),
    };
  });

  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Real websites, live and in use."
        description="Websites I've designed and built for a dental clinic, a heritage hotel and an event planning studio — each one live, with real screenshots and a link to try it yourself. Plus Google Ads campaign plans showing how I approach lead generation."
        aside={<WorkHeroAside />}
      >
        <div className="mt-10 max-w-md">
          <p className="rounded-2xl border border-line bg-white p-4 text-sm leading-relaxed text-muted">
            <span className="block font-semibold text-ink">{SAMPLE_DATA_LABEL}</span>
            Google Ads campaign figures are invented examples for demonstration.
          </p>
        </div>
      </PageHeader>

      <section aria-label="Projects" className="py-14 sm:py-20">
        <Container>
          <ProjectFilters groups={groups} />
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
