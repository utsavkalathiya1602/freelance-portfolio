import { siteConfig } from "@/config/site";

/**
 * Stable JSON-LD identifiers. The Person and WebSite entities are described in full once
 * (in SiteSchema); every other schema refers to them by @id, so search engines see one
 * consistent entity instead of several slightly different copies.
 */
export const personId = `${siteConfig.url}/#person`;
export const websiteId = `${siteConfig.url}/#website`;

export const personRef = { "@id": personId } as const;
export const websiteRef = { "@id": websiteId } as const;
