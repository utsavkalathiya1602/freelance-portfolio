/**
 * Data model for the Work section.
 *
 * Two kinds of entries:
 *  - "website":  real websites I have designed and built (with live links and real screenshots)
 *  - "campaign": Google Ads campaign plans (illustrative sample data until real results exist)
 *
 * `dataStatus` on campaigns drives the sample-data disclaimer shown on cards and pages.
 */

export type CurrencyCode = "AUD" | "GBP" | "USD" | "INR";

export type Location = {
  city?: string;
  country: string;
};

export type WorkCategory = "website" | "campaign";

type BaseWork = {
  slug: string;
  title: string;
  industry: string;
  location: Location;
  /** e.g. "Live business website" or "Hypothetical Google Search campaign" */
  projectType: string;
  summary: string;
  /** Services provided or demonstrated. */
  services: string[];
  featured: boolean;
};

export type ProjectScreenshot = {
  /** Cloudinary public ID, e.g. "portfolio/projects/hotel-bhabha/desktop-home". */
  publicId: string;
  device: "desktop" | "mobile";
  alt: string;
  caption: string;
};

export type WebsiteSection = {
  name: string;
  description: string;
};

export type WebsiteProject = BaseWork & {
  kind: "website";
  /** Business the website was built for. */
  businessName: string;
  overview: string;
  /** What the website needed to achieve for the business. */
  goals: string[];
  /** How the build addresses those goals. */
  approach: string[];
  /** Main sections or pages of the website. */
  sections: WebsiteSection[];
  features: string[];
  stack: { label: string; items: string[] }[];
  role: string;
  /** Background colour behind screenshots on cards (any CSS colour). */
  accent: string;
  /** First desktop screenshot is used as the cover image. */
  screenshots: ProjectScreenshot[];
  liveUrl: string;
  sourceUrl?: string;
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
  currency: CurrencyCode;
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
  accent: "lavender" | "lime" | "peach" | "stone";
};

export type WorkItem = WebsiteProject | CampaignProject;
