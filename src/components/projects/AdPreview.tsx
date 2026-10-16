import type { CampaignProject } from "@/types/project";

type AdPreviewProps = {
  campaign: CampaignProject;
  headlineIndex?: number;
  className?: string;
};

/**
 * A simplified example of how a search ad from the plan could read.
 * Deliberately styled in the portfolio's own visual language rather than imitating Google's UI.
 */
export function AdPreview({ campaign, headlineIndex = 0, className = "" }: AdPreviewProps) {
  const domain = `${campaign.brandName.split(" (")[0].toLowerCase().replace(/[^a-z]+/g, "")}.example`;
  const headlines = [
    campaign.headlines[headlineIndex % campaign.headlines.length],
    campaign.headlines[(headlineIndex + 1) % campaign.headlines.length],
  ];

  return (
    <div className={`rounded-2xl border border-line bg-white p-4 sm:p-5 ${className}`}>
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted">Example ad copy</p>
      <p className="mt-2 truncate text-xs text-ink">
        <span className="font-semibold">Ad</span> · {domain}/{campaign.displayPath}
      </p>
      <p className="mt-1 font-display text-base font-semibold leading-snug text-ink [overflow-wrap:anywhere] sm:text-lg">{headlines.join(" | ")}</p>
      <p className="mt-1 text-sm leading-relaxed text-muted">{campaign.descriptions[0]}</p>
    </div>
  );
}
