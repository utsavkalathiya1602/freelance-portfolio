/**
 * Data model for the Work section.
 *
 * Two kinds of entries:
 *  - "website":  website projects (fictional concept brands today, real client work later)
 *  - "campaign": Google Ads campaign plans (illustrative sample data today)
 *
 * `status` drives the disclaimers shown on cards and detail pages, so a future real
 * project only needs `status: "client"` (website) or `dataStatus: "actual"` (campaign).
 */

export type CurrencyCode = "AUD" | "GBP" | "USD" | "INR";

export type Market = {
  city: string;
  country: "Australia" | "United Kingdom" | "United States" | "India";
  currency: CurrencyCode;
};

export type WorkCategory = "website" | "campaign";

/** Visual identity used to render the static concept mockups. */
export type ConceptBrand = {
  name: string;
  /** Short label used in the mockup navigation. */
  navItems: string[];
  heroEyebrow: string;
  heroHeadline: string;
  heroText: string;
  ctaLabel: string;
  /** Which static illustration to draw in the mockup. */
  illustration: "interior" | "renovation" | "home-services" | "landscaping" | "courtyard";
  headingStyle: "serif" | "sans";
  palette: {
    background: string;
    surface: string;
    ink: string;
    muted: string;
    accent: string;
    accentInk: string;
    tones: [string, string, string];
  };
};

export type PageSpec = {
  name: string;
  purpose: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

type BaseWork = {
  slug: string;
  title: string;
  industry: string;
  market: Market;
  /** e.g. "Fictional brand · Website concept" */
  projectType: string;
  summary: string;
  /** Services provided or demonstrated. */
  services: string[];
  featured: boolean;
};

export type WebsiteProject = BaseWork & {
  kind: "website";
  /** "concept" = fictional brand, not a client. "client" = real, verified client work. */
  status: "concept" | "client";
  brand: ConceptBrand;
  overview: string;
  problem: string;
  goals: string[];
  solution: string[];
  designDecisions: string[];
  pages: PageSpec[];
  features: string[];
  stack: { label: string; items: string[] }[];
  process: ProcessStep[];
  /** Checks the build is verified against. Phrase as a plan unless they have been carried out. */
  qualityChecklist: string[];
  liveUrl?: string;
  sourceUrl?: string;
  /** Slug of a related campaign plan. */
  relatedCampaign?: string;
};

export type CampaignInputs = {
  /** Monthly advertising spend paid to Google, in the market currency. Excludes any fees. */
  adSpend: number;
  impressions: number;
  clicks: number;
  conversions: number;
};

export type KeywordGroup = {
  name: string;
  keywords: string[];
};

export type CampaignProject = BaseWork & {
  kind: "campaign";
  /** "illustrative" = invented sample figures. "actual" = verified account data. */
  dataStatus: "illustrative" | "actual";
  /** Fictional concept brand the plan is written for. */
  brandName: string;
  campaignType: string;
  objective: string;
  audience: string;
  /** What counts as one conversion in this plan. */
  conversionDefinition: string;
  inputs: CampaignInputs;
  setup: { label: string; value: string }[];
  keywordGroups: KeywordGroup[];
  negativeKeywords: string[];
  negativeStrategy: string;
  headlines: string[];
  descriptions: string[];
  /** Display URL path used in the ad preview, e.g. "interiors/consultation". */
  displayPath: string;
  landingPage: string[];
  tracking: string[];
  optimization: string[];
  /** Slug of the related website concept. */
  relatedWebsite?: string;
  accent: "lavender" | "lime" | "peach" | "stone";
};

export type WorkItem = WebsiteProject | CampaignProject;
