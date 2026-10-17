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
    jobTitle: "Freelance Web Developer & Digital Marketer",
    description:
      "Independent web developer based in Surat, Gujarat, India. Builds business websites, landing pages, and custom web applications with React.js and the MERN stack (MongoDB, Express.js, React.js, Node.js), and runs Google Ads, Meta Ads and SEO for small businesses.",
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
      "Express.js",
      "MongoDB",
      "MERN Stack",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "REST API Development",
      "Full Stack Web Development",
      "Business Website Development",
      "Landing Page Development",
      "Custom Web Application Development",
      "Google Ads",
      "Meta Ads",
      "Facebook Advertising",
      "Instagram Advertising",
      "Search Engine Optimization",
      "Search Engine Marketing",
      "Local SEO",
      "Google Business Profile Optimization",
      "Digital Marketing",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Development",
          description: "Custom business websites, landing pages, and web applications built with React.js and MERN stack for small businesses in Surat and across India.",
          url: `${url}/services/web-development`,
        },
        areaServed: [
          { "@type": "City", name: "Surat" },
          { "@type": "Country", name: "India" },
        ],
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Marketing — Google Ads, Meta Ads & SEO",
          description: "Google Ads management, Meta Ads (Facebook & Instagram) and local SEO / Google Business Profile optimisation for small businesses.",
          url: `${url}/services/digital-marketing`,
        },
        areaServed: [
          { "@type": "City", name: "Surat" },
          { "@type": "Country", name: "India" },
        ],
      },
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
