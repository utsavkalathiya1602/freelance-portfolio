import { ArrowRight } from "lucide-react";
import { getFeaturedWork } from "@/data/work";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProjectGrid } from "@/components/projects/ProjectGrid";

export function FeaturedProjects() {
  const items = getFeaturedWork(4);

  return (
    <Section tone="stone" labelledBy="work-heading">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Selected work"
          id="work-heading"
          title="Work worth exploring."
          description="Website concepts and Google Ads campaign plans that show how I approach structure, design and lead generation. Concept brands and sample figures are clearly labelled."
        />
        <Button href="/work" variant="outline" className="self-start lg:self-auto">
          View all projects
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Button>
      </div>
      <div className="mt-12">
        <ProjectGrid items={items} />
      </div>
    </Section>
  );
}
