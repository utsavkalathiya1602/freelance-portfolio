import type { CampaignProject, WebsiteProject, WorkCategory, WorkItem } from "../types/project";
import { websiteProjects } from "./projects";
import { campaignProjects } from "./campaigns";

export const workCategories: { id: WorkCategory; label: string; description: string }[] = [
  {
    id: "website",
    label: "Website Development",
    description: "Live websites I've designed and built for businesses.",
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

/** Other items of the same kind. */
export function getRelatedWork(item: WorkItem, limit = 2): WorkItem[] {
  return allWork.filter((other) => other.kind === item.kind && other.slug !== item.slug).slice(0, limit);
}

export function formatLocation(item: WorkItem): string {
  return item.location.city ? `${item.location.city}, ${item.location.country}` : item.location.country;
}
