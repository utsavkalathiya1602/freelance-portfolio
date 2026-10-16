import type { WorkItem } from "@/types/project";
import { ProjectCard } from "./ProjectCard";

type ProjectGridProps = {
  items: WorkItem[];
  headingLevel?: "h2" | "h3";
};

export function ProjectGrid({ items, headingLevel = "h3" }: ProjectGridProps) {
  if (items.length === 0) {
    return (
      <p className="rounded-[var(--radius-card)] border border-dashed border-ink/25 bg-white p-8 text-center text-muted">
        No projects in this category yet.
      </p>
    );
  }

  return (
    <ul className={`grid gap-6 md:grid-cols-2 lg:gap-8 ${items.length === 3 ? "xl:grid-cols-3" : ""}`}>
      {items.map((item) => (
        <li key={item.slug} className="min-w-0">
          <ProjectCard item={item} headingLevel={headingLevel} />
        </li>
      ))}
    </ul>
  );
}
