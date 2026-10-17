import { siteConfig } from "@/config/site";

/**
 * JSON-LD WebPage schema for the homepage.
 *
 * Describes the homepage as a professional service listing page.
 * Only includes verifiable, real information.
 */
export function HomePageSchema() {
  const url = siteConfig.url;

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    url,
    name: "Freelance Web Developer in Surat | Utsav Kalathiya",
    description:
      "Utsav Kalathiya is a freelance web developer in Surat, Gujarat, India, building business websites, landing pages, and web applications with React.js and MERN stack, and running Google Ads, Meta Ads and SEO for small businesses.",
    inLanguage: "en-IN",
    keywords:
      "freelance web developer Surat, MERN stack developer for hire, React.js developer Surat, website development for small businesses, Google Ads specialist Surat, hire web developer India",
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
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2"],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

