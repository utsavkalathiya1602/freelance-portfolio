import { siteConfig } from "@/config/site";
import { personRef, websiteRef } from "@/lib/schema-ids";
import { allWork } from "@/data/work";

/**
 * JSON-LD CollectionPage schema for the /work portfolio listing page.
 *
 * Uses CollectionPage + ItemList so Google understands this page as a
 * curated list of real completed projects — not a generated or generic page.
 * Only includes publicly verifiable project names and URLs.
 */
export function WorkPageSchema() {
  const url = `${siteConfig.url}/work`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}/#webpage`,
    url,
    name: "Portfolio — Websites & Digital Marketing Projects | Utsav Kalathiya",
    description:
      "Portfolio of real websites and digital marketing campaigns by Utsav Kalathiya, freelance web developer and digital marketer in Surat, Gujarat, India.",
    inLanguage: "en-IN",
    isPartOf: websiteRef,
    author: personRef,
    mainEntity: {
      "@type": "ItemList",
      name: "Portfolio Projects",
      itemListElement: allWork.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteConfig.url}/work/${item.slug}`,
        name: item.title,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
