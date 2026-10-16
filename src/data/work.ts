import type { CampaignProject, WebsiteProject, WorkCategory, WorkItem } from "../types/project";
import { websiteProjects } from "./projects";
import { campaignProjects } from "./campaigns";

export const workCategories: { id: WorkCategory; label: string; description: string }[] = [
  {
    id: "website",
    label: "Website Development",
    description: "Website concepts for service businesses in Australia, the UK, the US and India.",
  },
  {
    id: "campaign",
    label: "Google Ads & Lead Generation",
    description: "Google Search campaign plans with illustrative sample data.",
  },
];

export const allWork: WorkItem[] = [...websiteProjects, ...campaignProjects];

export function getWorkItem(slug: string): WorkItem | undefined {
  return allWork.find((item) => item.slug === slug);
}

export function getWebsiteProject(slug: string | undefined): WebsiteProject | undefined {
  return slug ? websiteProjects.find((item) => item.slug === slug) : undefined;
}

export function getCampaign(slug: string | undefined): CampaignProject | undefined {
  return slug ? campaignProjects.find((item) => item.slug === slug) : undefined;
}

/** Featured websites first, then featured campaigns. */
export function getFeaturedWork(limit = 4): WorkItem[] {
  return allWork.filter((item) => item.featured).slice(0, limit);
}

/** Same-kind items first, then the paired item from the other category. */
export function getRelatedWork(item: WorkItem, limit = 2): WorkItem[] {
  const pairedSlug = item.kind === "website" ? item.relatedCampaign : item.relatedWebsite;
  const paired = pairedSlug ? getWorkItem(pairedSlug) : undefined;
  const sameKind = allWork.filter((other) => other.kind === item.kind && other.slug !== item.slug);
  const ordered = paired ? [paired, ...sameKind] : sameKind;
  return ordered.slice(0, limit);
}

export function formatMarket(item: WorkItem): string {
  return `${item.market.city}, ${item.market.country}`;
}
