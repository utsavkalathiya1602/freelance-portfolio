import { siteConfig } from "@/config/site";

/**
 * Site-wide JSON-LD structured data rendered once in the root layout.
 *
 * Includes:
 *   - Person — Utsav Kalathiya's professional identity
 *   - WebSite — enables search engines to understand the site's purpose
 *
 * Only real, verifiable information is included. No fabricated ratings,
 * addresses, certifications, or business details.
 */
export function SiteSchema() {
  const url = siteConfig.url;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url,
    jobTitle: "Freelance Web Developer & Google Ads Specialist",
    description:
      "Independent web developer based in Surat, Gujarat, India. Builds business websites, landing pages, and custom web applications with React.js and Node.js, and manages Google Ads Search campaigns for small businesses.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    email: `mailto:${siteConfig.contact.email}`,
    telephone: siteConfig.contact.phone,
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.github,
    ].filter(Boolean),
    knowsAbout: [
      "React.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Web Development",
      "Google Ads",
      "Search Engine Marketing",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
