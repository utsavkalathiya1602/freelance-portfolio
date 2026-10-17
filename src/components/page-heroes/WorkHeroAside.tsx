import Link from "next/link";
import { ArrowUpRight, Globe, Megaphone } from "lucide-react";
import { websiteProjects } from "@/data/projects";
import { adsClients } from "@/data/clients";
import { ProjectScreenshot } from "@/components/projects/ProjectScreenshot";

/** Real screenshots of a featured live project, plus counts derived from the project data. */
export function WorkHeroAside() {
  const project = websiteProjects.find((item) => item.featured) ?? websiteProjects[0];
  if (!project) return null;

  const desktop = project.screenshots.find((shot) => shot.device === "desktop");
  const mobile = project.screenshots.find((shot) => shot.device === "mobile");

  return (
    <div className="grid gap-4">
      <Link
        href={`/work/${project.slug}`}
        className="group relative block rounded-[var(--radius-panel)] border border-ink/10 p-5 pb-8 transition-shadow duration-200 hover:shadow-[0_18px_40px_-24px_rgba(23,23,23,0.45)] sm:p-7 sm:pb-10"
        style={{ background: project.accent }}
      >
        {desktop ? (
          <ProjectScreenshot
            screenshot={desktop}
            priority
            sizes="(min-width: 1024px) 440px, 90vw"
            className="sm:mr-20"
          />
        ) : null}
        {mobile ? (
          <ProjectScreenshot
            screenshot={mobile}
            priority
            sizes="130px"
            className="absolute bottom-5 right-5 hidden w-[26%] max-w-[130px] sm:block"
          />
        ) : null}
        <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink">
          Featured: {project.title}
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </span>
      </Link>

      <dl className="grid grid-cols-2 gap-4">
        <div className="rounded-[var(--radius-card)] border border-ink/10 bg-lime p-5">
          <Globe aria-hidden="true" className="h-5 w-5" />
          <dt className="mt-4 text-sm font-medium text-ink/70">Live websites</dt>
          <dd className="font-display text-4xl font-bold tracking-[-0.03em] text-ink">{websiteProjects.length}</dd>
        </div>
        <div className="rounded-[var(--radius-card)] border border-ink/10 bg-lavender p-5">
          <Megaphone aria-hidden="true" className="h-5 w-5" />
          <dt className="mt-4 text-sm font-medium text-ink/70">Marketing clients</dt>
          <dd className="font-display text-4xl font-bold tracking-[-0.03em] text-ink">{adsClients.length}</dd>
        </div>
      </dl>
    </div>
  );
}
