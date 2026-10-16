import type { WebsiteProject } from "@/types/project";
import { ProjectShowcase } from "./ProjectShowcase";

/** Website projects as large rows, alternating the screenshot side. */
export function ProjectShowcaseList({ projects }: { projects: WebsiteProject[] }) {
  return (
    <ul className="space-y-8 lg:space-y-10">
      {projects.map((project, index) => (
        <li key={project.slug}>
          <ProjectShowcase project={project} reverse={index % 2 === 1} />
        </li>
      ))}
    </ul>
  );
}
