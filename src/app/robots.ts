import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Disallow Next.js internal paths and any future API routes.
        // CSS, JS and other render resources are intentionally NOT blocked.
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
