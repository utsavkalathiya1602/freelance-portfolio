import Image from "next/image";
import type { ProjectScreenshot as Screenshot } from "@/types/project";
import { projectImage } from "@/lib/cloudinary";

type ProjectScreenshotProps = {
  screenshot: Screenshot;
  sizes: string;
  priority?: boolean;
  className?: string;
  /** "compact" uses a thinner phone frame for small renderings such as cards. */
  frame?: "default" | "compact";
};

/** A real screenshot (Cloudinary, or the local fallback), framed as a browser window or a phone. */
export function ProjectScreenshot({
  screenshot,
  sizes,
  priority = false,
  className = "",
  frame = "default",
}: ProjectScreenshotProps) {
  const image = projectImage(screenshot.publicId, screenshot.device);
  const isMobile = screenshot.device === "mobile";

  const content = (
    <Image
      src={image.src}
      alt={screenshot.alt}
      width={image.width}
      height={image.height}
      sizes={sizes}
      priority={priority}
      className="block h-auto w-full"
    />
  );

  if (isMobile) {
    return (
      <div
        className={`border-ink bg-ink shadow-[0_24px_48px_-28px_rgba(23,23,23,0.6)] ${
          frame === "compact" ? "rounded-[1.1rem] border-[3px]" : "rounded-[2rem] border-[6px]"
        } ${className}`}
      >
        <div className={`overflow-hidden bg-white ${frame === "compact" ? "rounded-[0.9rem]" : "rounded-[1.6rem]"}`}>
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden rounded-xl border border-ink/15 bg-white shadow-[0_24px_48px_-32px_rgba(23,23,23,0.55)] ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2.5" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-stone" />
        <span className="h-2 w-2 rounded-full bg-stone" />
        <span className="h-2 w-2 rounded-full bg-stone" />
      </div>
      {content}
    </div>
  );
}
