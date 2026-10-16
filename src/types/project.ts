/**
 * Data model for the Work section.
 *
 * Two kinds of entries, both real work:
 *  - "website":    websites I have designed and built (with live links and real screenshots)
 *  - "ads-client": Google Ads clients I manage (facts only — no figures unless verified and approved)
 */

export type Location = {
  city?: string;
  country: string;
};

export type WorkCategory = "website" | "google-ads";

type BaseWork = {
  slug: string;
  title: string;
  industry: string;
  location: Location;
  /** e.g. "Live business website" or "Google Ads management · Real client" */
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

export type AdsClientProject = BaseWork & {
  kind: "ads-client";
  clientName: string;
  status: "Active" | "Completed";
  campaignType: string;
  objective: string;
  /** About the client's business, written in the third person. */
  about: string;
  /** The situation the advertising needs to address. */
  challenge: string;
  goals: string[];
  /** How the account is approached. */
  approach: string[];
  /** What I am responsible for in the account. */
  responsibilities: string[];
  /** Shown where performance figures would be, explaining why they are not published. */
  resultsNote: string;
  /** Public listing for the business, e.g. its Google Business Profile. */
  profileUrl?: string;
  profileLabel?: string;
};

export type WorkItem = WebsiteProject | AdsClientProject;
