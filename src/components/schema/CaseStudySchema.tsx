import { siteConfig } from "@/config/site";
import { personRef, websiteRef } from "@/lib/schema-ids";
import type { WorkItem } from "@/types/project";

/**
 * JSON-LD WebPage schema for individual work/case study pages.
 *
 * Renders a minimal WebPage schema linking the case study back to its
 * section on the site and to the portfolio owner.
 */
export function CaseStudySchema({ item }: { item: WorkItem }) {
  const url = `${siteConfig.url}/work/${item.slug}`;
  const name =
    item.kind === "website"
      ? `${item.title} — Website Project by Utsav Kalathiya`
      : `${item.title} — Google Ads by Utsav Kalathiya`;

  const description =
    item.kind === "website"
      ? `${item.summary} Designed and built by Utsav Kalathiya, freelance web developer in Surat, India.`
      : `${item.summary} Google Ads managed by Utsav Kalathiya, based in Surat, India.`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    url,
    name,
    description,
    inLanguage: "en-IN",
    isPartOf: websiteRef,
    author: personRef,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
