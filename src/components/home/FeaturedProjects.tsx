import { ArrowRight } from "lucide-react";
import { websiteProjects } from "@/data/projects";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProjectShowcaseList } from "@/components/projects/ProjectShowcaseList";

export function FeaturedProjects() {
  const projects = websiteProjects.filter((project) => project.featured);

  return (
    <Section tone="stone" labelledBy="work-heading">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Selected work"
          id="work-heading"
          title="Work worth exploring."
          description="Live websites I've designed and built for real businesses — try them yourself."
        />
        <Button href="/work" variant="outline" className="self-start lg:self-auto">
          View all projects
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Button>
      </div>
      <div className="mt-12">
        <ProjectShowcaseList projects={projects} />
      </div>
    </Section>
  );
}
