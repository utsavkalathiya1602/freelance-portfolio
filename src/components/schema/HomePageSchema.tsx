import { siteConfig } from "@/config/site";
import { websiteProjects } from "@/data/projects";
import { adsClients } from "@/data/clients";

/**
 * JSON-LD WebPage schema for the homepage.
 *
 * Describes the homepage as a professional service listing page.
 * Only includes verifiable, real information.
 */
export function HomePageSchema() {
  const url = siteConfig.url;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    url,
    name: "Freelance Web Developer in Surat | Utsav Kalathiya",
    description:
      "Utsav Kalathiya is a freelance web developer in Surat, Gujarat, India, building business websites, landing pages, and web applications with React.js, and running Google Ads, Meta Ads and SEO for small businesses.",
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      url,
      name: siteConfig.name,
    },
    about: {
      "@type": "Person",
      name: siteConfig.name,
      jobTitle: "Freelance Web Developer & Digital Marketer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Surat",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
    },
    mainEntityOfPage: url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
