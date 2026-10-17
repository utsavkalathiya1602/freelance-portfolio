import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { allWork, categoryOf, workCategories } from "@/data/work";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { ProjectShowcaseList } from "@/components/projects/ProjectShowcaseList";
import { websiteProjects } from "@/data/projects";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { ContactCTA } from "@/components/home/ContactCTA";
import { WorkHeroAside } from "@/components/page-heroes/WorkHeroAside";

const title = "Work";
const description =
  "Portfolio of websites designed and built by Utsav Kalathiya — a freelance web developer in Surat, Gujarat. Includes live websites for a dental clinic, a hotel, an event studio, and Google Ads management for a local business.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/work" });

export default function WorkPage() {
  const groups = workCategories.map((category) => {
    const items = allWork.filter((item) => categoryOf(item) === category.id);
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
        description="Websites I've designed and built for a dental clinic, a heritage hotel and an event planning studio — each one live, with real screenshots and a link to try it yourself. Plus Google Ads management for a local store in Surat."
        aside={<WorkHeroAside />}
      >
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
