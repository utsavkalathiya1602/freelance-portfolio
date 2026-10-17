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
import { WorkPageSchema } from "@/components/schema/WorkPageSchema";

const title = "Portfolio — Websites & Digital Marketing Projects";
const description =
  "Portfolio of websites and digital marketing campaigns by Utsav Kalathiya, freelance web developer in Surat, Gujarat. Live websites for a dental clinic, a heritage hotel, an event planning studio, and a photography business — plus Google Ads management for a local store in Surat.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/work",
  keywords: [
    "freelance web developer portfolio Surat",
    "website development portfolio India",
    "dental clinic website developer",
    "hotel website developer India",
    "event management website developer Surat",
    "photography studio website developer",
    "MERN stack portfolio projects",
    "React.js website examples",
  ],
});

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
      <WorkPageSchema />
      <PageHeader
        eyebrow="Work"
        title="Real websites, live and in use."
        description="Websites I've designed and built for a dental clinic, a heritage hotel and an event planning studio — each one live, with real screenshots and a link to try it yourself. Plus digital marketing for a local store in Surat."
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
