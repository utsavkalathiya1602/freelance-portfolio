import type { WebsiteProject } from "@/types/project";
import { ProjectScreenshot } from "./ProjectScreenshot";

type WebsiteVisualProps = {
  project: WebsiteProject;
  /** "card" for grid cards, "showcase" for the large Work page rows. */
  size?: "card" | "showcase";
  priority?: boolean;
  className?: string;
};

/**
 * Desktop screenshot with the mobile screenshot overlapping its lower-right corner,
 * on the project's accent colour.
 */
export function WebsiteVisual({ project, size = "card", priority = false, className = "" }: WebsiteVisualProps) {
  const desktop = project.screenshots.find((shot) => shot.device === "desktop");
  const mobile = project.screenshots.find((shot) => shot.device === "mobile");
  const showcase = size === "showcase";

  return (
    <div
      className={`relative flex h-full items-center ${showcase ? "p-6 sm:p-10 lg:p-12" : "p-5 sm:p-7"} ${className}`}
      style={{ background: project.accent }}
    >
      <div className="relative w-full pb-[8%] pr-[12%]">
        {desktop ? (
          <ProjectScreenshot
            screenshot={desktop}
            priority={priority}
            sizes={showcase ? "(min-width: 1024px) 560px, 90vw" : "(min-width: 1280px) 340px, (min-width: 768px) 45vw, 85vw"}
          />
        ) : null}
        {mobile ? (
          <ProjectScreenshot
            screenshot={mobile}
            priority={priority}
            frame={showcase ? "default" : "compact"}
            sizes={showcase ? "150px" : "90px"}
            className={`absolute bottom-0 right-0 ${showcase ? "w-[24%] max-w-[150px]" : "w-[22%] max-w-[96px]"}`}
          />
        ) : null}
      </div>
    </div>
  );
}
