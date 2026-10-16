import { FlaskConical } from "lucide-react";
import type { CampaignProject } from "@/types/project";
import { calculateMetrics, formatCurrency, formatNumber, formatPercent } from "@/lib/metrics";
import { SAMPLE_DATA_LABEL } from "./ProjectDisclaimer";

type Tile = { label: string; value: string; hint: string; emphasis?: boolean };

/** Custom report UI for the sample metrics. Every tile is derived from the four stored inputs. */
export function CampaignMetrics({ campaign }: { campaign: CampaignProject }) {
  const { inputs } = campaign;
  const currency = campaign.market.currency;
  const metrics = calculateMetrics(inputs);
  const isSample = campaign.dataStatus === "illustrative";

  const inputTiles: Tile[] = [
    { label: "Monthly ad spend", value: formatCurrency(inputs.adSpend, currency, { decimals: 0 }), hint: "Paid to Google; excludes fees" },
    { label: "Impressions", value: formatNumber(inputs.impressions), hint: "Times an ad was shown" },
    { label: "Clicks", value: formatNumber(inputs.clicks), hint: "Visits to the landing page" },
    { label: "Conversions", value: formatNumber(inputs.conversions), hint: campaign.conversionDefinition },
  ];

  const calculatedTiles: Tile[] = [
    { label: "Click-through rate", value: formatPercent(metrics.ctr), hint: "Clicks ÷ impressions", emphasis: true },
    { label: "Average CPC", value: formatCurrency(metrics.averageCpc, currency), hint: "Spend ÷ clicks", emphasis: true },
    { label: "Conversion rate", value: formatPercent(metrics.conversionRate), hint: "Conversions ÷ clicks", emphasis: true },
    {
      label: "Cost per conversion",
      value: formatCurrency(metrics.costPerConversion, currency),
      hint: "Spend ÷ conversions",
      emphasis: true,
    },
  ];

  return (
    <div className="overflow-hidden rounded-[var(--radius-panel)] border border-ink/15 bg-ink">
      <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <p className="font-display text-lg font-bold text-white">
          {campaign.title} <span className="font-normal text-white/60">· one month · {currency}</span>
        </p>
        {isSample ? (
          <p className="inline-flex items-center gap-2 self-start rounded-full bg-lime px-3 py-1.5 text-xs font-bold text-ink sm:self-auto">
            <FlaskConical aria-hidden="true" className="h-3.5 w-3.5" />
            {SAMPLE_DATA_LABEL}
          </p>
        ) : null}
      </div>

      <div className="space-y-px bg-white/10">
        <TileRow title="Sample inputs" tiles={inputTiles} />
        <TileRow title="Calculated from the inputs" tiles={calculatedTiles} />
      </div>
    </div>
  );
}

function TileRow({ title, tiles }: { title: string; tiles: Tile[] }) {
  return (
    <div className="bg-ivory p-4 sm:p-6">
      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{title}</h3>
      <dl className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {tiles.map((tile) => (
          <div
            key={tile.label}
            className={`rounded-2xl border p-4 sm:p-5 ${tile.emphasis ? "border-ink/10 bg-white" : "border-line bg-stone/60"}`}
          >
            <dt className="text-sm font-medium text-muted">{tile.label}</dt>
            <dd className="mt-2 font-display text-2xl font-bold tracking-[-0.02em] text-ink sm:text-3xl">{tile.value}</dd>
            <dd className="mt-1 text-xs leading-snug text-muted">{tile.hint}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
