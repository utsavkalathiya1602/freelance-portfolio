import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { allWork, workCategories } from "@/data/work";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { CONCEPT_LABEL, SAMPLE_DATA_LABEL } from "@/components/projects/ProjectDisclaimer";
import { ContactCTA } from "@/components/home/ContactCTA";

const title = "Work";
const description =
  "Website concepts and Google Ads campaign plans for service businesses in Australia, the United Kingdom, the United States and India.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/work" });

export default function WorkPage() {
  const groups = workCategories.map((category) => {
    const items = allWork.filter((item) => item.kind === category.id);
    return {
      id: category.id,
      label: category.label,
      description: category.description,
      count: items.length,
      content: <ProjectGrid items={items} />,
    };
  });

  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Websites and campaigns, planned in detail."
        description="Concept websites and Google Ads campaign plans for interior design, renovation, home services and landscaping businesses — showing how I approach structure, design, development and lead generation for different markets."
      >
        <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
          <p className="rounded-2xl border border-line bg-white p-4 text-sm leading-relaxed text-muted">
            <span className="block font-semibold text-ink">{CONCEPT_LABEL}</span>
            Website projects use fictional brands created for this portfolio.
          </p>
          <p className="rounded-2xl border border-line bg-white p-4 text-sm leading-relaxed text-muted">
            <span className="block font-semibold text-ink">{SAMPLE_DATA_LABEL}</span>
            Campaign figures are invented examples for demonstration.
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
