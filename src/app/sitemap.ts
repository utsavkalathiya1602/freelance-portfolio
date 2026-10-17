import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { allWork } from "@/data/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  /** Core pages — ordered by crawl priority. */
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/web-development`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/google-ads`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/work`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.8 },
  ];

  /** Individual work/case-study pages — generated from actual data, no phantom routes. */
  const workPages: MetadataRoute.Sitemap = allWork.map((item) => ({
    url: `${base}/work/${item.slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...workPages];
}
