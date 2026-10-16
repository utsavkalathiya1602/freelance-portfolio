import { Info } from "lucide-react";
import type { WorkItem } from "@/types/project";

export const SAMPLE_DATA_LABEL = "Illustrative sample data — not actual campaign results";

/** Returns the disclaimer that applies to an item, or null for real work and verified data. */
export function disclaimerFor(item: WorkItem): { label: string; text: string } | null {
  if (item.kind === "campaign" && item.dataStatus === "illustrative") {
    return {
      label: SAMPLE_DATA_LABEL,
      text: `${item.brandName.replace(" (fictional concept)", "")} is a fictional concept brand. This campaign has not been run: every figure on this page is invented for demonstration and calculated from sample inputs. The budget shown is illustrative advertising spend paid to Google and does not include management or website-development fees.`,
    };
  }
  return null;
}

type ProjectDisclaimerProps = {
  item: WorkItem;
  /** "compact" for cards, "full" for detail pages. */
  variant?: "compact" | "full";
  className?: string;
};

export function ProjectDisclaimer({ item, variant = "full", className = "" }: ProjectDisclaimerProps) {
  const disclaimer = disclaimerFor(item);
  if (!disclaimer) return null;

  if (variant === "compact") {
    return (
      <p
        className={`inline-flex items-start gap-1.5 rounded-lg border border-ink/15 bg-ivory px-2.5 py-1.5 text-xs font-semibold leading-snug text-ink ${className}`}
      >
        <Info aria-hidden="true" className="mt-px h-3.5 w-3.5 shrink-0" />
        {disclaimer.label}
      </p>
    );
  }

  return (
    <aside
      aria-label="Disclaimer"
      className={`flex gap-4 rounded-[var(--radius-card)] border-2 border-ink bg-white p-5 sm:p-6 ${className}`}
    >
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime">
        <Info aria-hidden="true" className="h-4 w-4" />
      </span>
      <div>
        <p className="font-display text-base font-bold text-ink sm:text-lg">{disclaimer.label}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{disclaimer.text}</p>
      </div>
    </aside>
  );
}
