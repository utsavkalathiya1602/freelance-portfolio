import type { CampaignProject } from "@/types/project";
import { calculateMetrics, formatCurrency, formatNumber, formatPercent } from "@/lib/metrics";

/** Funnel view and the worked calculations behind every derived metric. */
export function CampaignPerformance({ campaign }: { campaign: CampaignProject }) {
  const { inputs } = campaign;
  const currency = campaign.currency;
  const metrics = calculateMetrics(inputs);
  const money = (value: number) => formatCurrency(value, currency, { decimals: 0 });

  const funnel = [
    { label: "Impressions", value: formatNumber(inputs.impressions), width: "100%", tone: "bg-stone" },
    { label: "Clicks", value: formatNumber(inputs.clicks), width: "66%", tone: "bg-lavender", rate: `CTR ${formatPercent(metrics.ctr)}` },
    {
      label: "Conversions",
      value: formatNumber(inputs.conversions),
      width: "36%",
      tone: "bg-lime",
      rate: `Conversion rate ${formatPercent(metrics.conversionRate)}`,
    },
  ];

  const rows = [
    {
      metric: "Click-through rate (CTR)",
      formula: "Clicks ÷ impressions × 100",
      working: `${formatNumber(inputs.clicks)} ÷ ${formatNumber(inputs.impressions)} × 100`,
      result: formatPercent(metrics.ctr),
    },
    {
      metric: "Average cost per click",
      formula: "Ad spend ÷ clicks",
      working: `${money(inputs.adSpend)} ÷ ${formatNumber(inputs.clicks)}`,
      result: formatCurrency(metrics.averageCpc, currency),
    },
    {
      metric: "Conversion rate",
      formula: "Conversions ÷ clicks × 100",
      working: `${formatNumber(inputs.conversions)} ÷ ${formatNumber(inputs.clicks)} × 100`,
      result: formatPercent(metrics.conversionRate),
    },
    {
      metric: "Cost per conversion",
      formula: "Ad spend ÷ conversions",
      working: `${money(inputs.adSpend)} ÷ ${formatNumber(inputs.conversions)}`,
      result: formatCurrency(metrics.costPerConversion, currency),
    },
  ];

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14 [&>*]:min-w-0">
      <div>
        <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">Sample funnel</h3>
        <p className="mt-2 text-sm text-muted">Bar widths are not to scale.</p>
        <ol className="mt-6 space-y-3">
          {funnel.map((step) => (
            <li key={step.label}>
              {step.rate ? <p className="mb-1.5 text-xs font-semibold text-muted">↓ {step.rate}</p> : null}
              <div className={`flex items-center justify-between rounded-xl px-4 py-3 ${step.tone}`} style={{ width: step.width, minWidth: "11rem" }}>
                <span className="text-sm font-medium text-ink">{step.label}</span>
                <span className="font-display text-lg font-bold text-ink">{step.value}</span>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm leading-relaxed text-muted">
          A conversion here means: {campaign.conversionDefinition.charAt(0).toLowerCase() + campaign.conversionDefinition.slice(1)} It is not
          labelled as a qualified lead or a sale, because no lead-quality data exists for this sample.
        </p>
      </div>

      <div>
        <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">Performance calculation notes</h3>
        <p className="mt-2 text-sm text-muted">Only spend, impressions, clicks and conversions are stored. Everything else is calculated.</p>
        <div className="mt-6 overflow-x-auto rounded-[var(--radius-card)] border border-line bg-white">
          <table className="w-full min-w-[34rem] text-left text-sm">
            <caption className="sr-only">How each sample metric is calculated</caption>
            <thead className="border-b border-line bg-stone/60 text-xs uppercase tracking-[0.12em] text-muted">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Metric</th>
                <th scope="col" className="px-4 py-3 font-semibold">Formula</th>
                <th scope="col" className="px-4 py-3 font-semibold">Working</th>
                <th scope="col" className="px-4 py-3 text-right font-semibold">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {rows.map((row) => (
                <tr key={row.metric}>
                  <th scope="row" className="px-4 py-3 font-semibold text-ink">{row.metric}</th>
                  <td className="px-4 py-3 text-muted">{row.formula}</td>
                  <td className="px-4 py-3 font-mono text-xs text-ink">{row.working}</td>
                  <td className="px-4 py-3 text-right font-display font-bold text-ink">{row.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
