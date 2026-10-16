import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { allWork } from "@/data/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/services/web-development", "/services/google-ads", "/work", "/about", "/contact"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...allWork.map((item) => ({
      url: `${siteConfig.url}/work/${item.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
