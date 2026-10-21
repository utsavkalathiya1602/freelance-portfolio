import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * Web App Manifest — served at /manifest.webmanifest
 * Google Search uses this to discover the site's icon for search results.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — ${siteConfig.title}`,
    short_name: siteConfig.brandMark,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F7F5EF",
    theme_color: "#171717",
    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
