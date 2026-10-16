import type { CampaignInputs, CurrencyCode } from "../types/project";

export type CampaignMetrics = {
  /** Click-through rate, as a percentage (0–100). */
  ctr: number | null;
  /** Average cost per click, in the campaign currency. */
  averageCpc: number | null;
  /** Conversion rate, as a percentage (0–100). */
  conversionRate: number | null;
  /** Cost per conversion, in the campaign currency. */
  costPerConversion: number | null;
};

/** Returns null instead of Infinity/NaN when the denominator is zero or invalid. */
export function safeDivide(numerator: number, denominator: number): number | null {
  if (!Number.isFinite(numerator) || !Number.isFinite(denominator) || denominator === 0) return null;
  return numerator / denominator;
}

function percent(value: number | null): number | null {
  return value === null ? null : value * 100;
}

/**
 * CTR                 = clicks / impressions × 100
 * Average CPC         = ad spend / clicks
 * Conversion rate     = conversions / clicks × 100
 * Cost per conversion = ad spend / conversions
 */
export function calculateMetrics(inputs: CampaignInputs): CampaignMetrics {
  return {
    ctr: percent(safeDivide(inputs.clicks, inputs.impressions)),
    averageCpc: safeDivide(inputs.adSpend, inputs.clicks),
    conversionRate: percent(safeDivide(inputs.conversions, inputs.clicks)),
    costPerConversion: safeDivide(inputs.adSpend, inputs.conversions),
  };
}

/** Prefixes that stay unambiguous for an international audience. */
const currencyPrefix: Record<CurrencyCode, string> = {
  AUD: "A$",
  GBP: "£",
  USD: "US$",
  INR: "₹",
};

const NOT_AVAILABLE = "—";

export function formatCurrency(
  value: number | null,
  currency: CurrencyCode,
  { decimals = 2 }: { decimals?: number } = {},
): string {
  if (value === null) return NOT_AVAILABLE;
  const amount = new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-GB", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
  return `${currencyPrefix[currency]}${amount}`;
}

export function formatPercent(value: number | null, decimals = 2): string {
  if (value === null) return NOT_AVAILABLE;
  return `${value.toFixed(decimals)}%`;
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-GB").format(value);
}
