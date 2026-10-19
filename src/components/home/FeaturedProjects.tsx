import { ArrowRight } from "lucide-react";
import { websiteProjects } from "@/data/projects";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProjectShowcaseList } from "@/components/projects/ProjectShowcaseList";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { adsClients } from "@/data/clients";

export function FeaturedProjects() {
  const projects = websiteProjects.filter((project) => project.featured);
  const clients = adsClients.filter((client) => client.featured);

  return (
    <Section tone="stone" labelledBy="work-heading">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Selected work"
          id="work-heading"
          title="Work worth exploring."
          description="Live websites and web products I've built or worked on — try them yourself."
        />
        <Button href="/work" variant="outline" className="self-start lg:self-auto">
          View all projects
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Button>
      </div>
      <div className="mt-12">
        <ProjectShowcaseList projects={projects} />
      </div>
      {clients.length > 0 ? (
        <div className="mt-16">
          <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink sm:text-3xl">Digital marketing client work</h3>
          <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:gap-8">
            {clients.map((client) => (
              <li key={client.slug}>
                <ProjectCard item={client} headingLevel="h3" />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </Section>
  );
}
