import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

/**
 * Page metadata with canonical URL and Open Graph fields.
 *
 * @param title - Short page title used in the `%s | Name` template (e.g. "Services").
 * @param description - Unique meta description for this page.
 * @param path - Root-relative canonical path (e.g. "/services").
 * @param overrideTitle - Optional fully-formed title that bypasses the template.
 *   Use this for the homepage or any page where you need exact keyword placement.
 */
export function pageMetadata({
  title,
  description,
  path,
  overrideTitle,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  overrideTitle?: string;
  /** Optional page-specific keywords. Merged with global root-layout keywords by Google; no need to repeat global ones. */
  keywords?: string[];
}): Metadata {
  // When an override is provided, use it verbatim for the <title> tag and OG.
  // The root layout template is bypassed by returning an object as the title value.
  const resolvedTitle = overrideTitle ?? title;
  const fullTitle = overrideTitle ? overrideTitle : `${title} | ${siteConfig.name}`;

  return {
    title: overrideTitle ? { absolute: overrideTitle } : title,
    description,
    ...(keywords && keywords.length > 0 ? { keywords } : {}),
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      url: path,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${resolvedTitle} — ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/opengraph-image"],
    },
  };
}
