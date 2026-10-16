import type { WebsiteProject, WorkCategory, WorkItem } from "../types/project";
import { websiteProjects } from "./projects";
import { adsClients } from "./clients";

export const workCategories: { id: WorkCategory; label: string; description: string }[] = [
  {
    id: "website",
    label: "Website Development",
    description: "Live websites I've designed and built for businesses.",
  },
  {
    id: "google-ads",
    label: "Google Ads & Lead Generation",
    description: "Google Search advertising I manage for real businesses.",
  },
];

export const allWork: WorkItem[] = [...websiteProjects, ...adsClients];

/** Which Work page category an item belongs to. */
export function categoryOf(item: WorkItem): WorkCategory {
  return item.kind === "website" ? "website" : "google-ads";
}

export function getWorkItem(slug: string): WorkItem | undefined {
  return allWork.find((item) => item.slug === slug);
}

export function getWebsiteProject(slug: string | undefined): WebsiteProject | undefined {
  return slug ? websiteProjects.find((item) => item.slug === slug) : undefined;
}

/**
 * Related items of the same kind. Google Ads clients fall back to live websites
 * while there is only one client.
 */
export function getRelatedWork(item: WorkItem, limit = 2): WorkItem[] {
  const sameKind = allWork.filter((other) => other.kind === item.kind && other.slug !== item.slug);
  const fallback = item.kind === "ads-client" ? websiteProjects : [];
  return [...sameKind, ...fallback].slice(0, limit);
}

export function formatLocation(item: WorkItem): string {
  return item.location.city ? `${item.location.city}, ${item.location.country}` : item.location.country;
}
