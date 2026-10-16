// Verifies the calculated campaign metrics against the expected values and checks ad copy limits.
// Run: node scripts/verify-metrics.mts
import { campaignProjects } from "../src/data/campaigns.ts";
import { calculateMetrics, formatCurrency, formatPercent, safeDivide } from "../src/lib/metrics.ts";

const expected: Record<string, { ctr: number; cpc: number; cvr: number; cpa: number }> = {
  "ads-interior-design": { ctr: 5, cpc: 2.5, cvr: 5, cpa: 50 },
  "ads-renovation": { ctr: 4, cpc: 3, cvr: 5, cpa: 60 },
  "ads-home-services": { ctr: 5, cpc: 2, cvr: 5, cpa: 40 },
  "ads-landscaping": { ctr: 4, cpc: 3, cvr: 4, cpa: 75 },
};

let failures = 0;
const close = (a: number | null, b: number) => a !== null && Math.abs(a - b) < 1e-9;

for (const campaign of campaignProjects) {
  const m = calculateMetrics(campaign.inputs);
  const e = expected[campaign.slug];
  const ok = e && close(m.ctr, e.ctr) && close(m.averageCpc, e.cpc) && close(m.conversionRate, e.cvr) && close(m.costPerConversion, e.cpa);
  if (!ok) failures++;
  const c = campaign.market.currency;
  console.log(
    `${ok ? "PASS" : "FAIL"} ${campaign.slug.padEnd(20)} CTR ${formatPercent(m.ctr)} | CPC ${formatCurrency(m.averageCpc, c)} | CVR ${formatPercent(m.conversionRate)} | CPA ${formatCurrency(m.costPerConversion, c)}`,
  );
}

const zero = calculateMetrics({ adSpend: 100, impressions: 0, clicks: 0, conversions: 0 });
const zeroOk = Object.values(zero).every((v) => v === null) && safeDivide(1, 0) === null;
console.log(`${zeroOk ? "PASS" : "FAIL"} zero denominators return null (shown as "${formatPercent(zero.ctr)}")`);
if (!zeroOk) failures++;

// Google Ads responsive search ad limits: 30 characters per headline, 90 per description.
for (const campaign of campaignProjects) {
  for (const headline of campaign.headlines) {
    if (headline.length > 30) {
      failures++;
      console.log(`FAIL ${campaign.slug} headline over 30 chars (${headline.length}): ${headline}`);
    }
  }
  for (const text of campaign.descriptions) {
    if (text.length > 90) {
      failures++;
      console.log(`FAIL ${campaign.slug} description over 90 chars (${text.length}): ${text}`);
    }
  }
}
console.log(failures ? `${failures} check(s) failed` : "PASS ad copy within character limits");

process.exit(failures ? 1 : 0);
