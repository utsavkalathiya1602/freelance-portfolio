import { siteConfig } from "@/config/site";

type ServiceSchemaProps = {
  name: string;
  description: string;
  url: string;
  serviceType: string;
};

/**
 * Service JSON-LD structured data for individual service pages.
 *
 * Uses the "Service" type because it accurately describes a specific service offering.
 * Does not use LocalBusiness as there is no verified physical business address.
 * Includes Surat neighbourhood areas to improve local SEO signals.
 */
export function ServiceSchema({
  name,
  description,
  url,
  serviceType,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    serviceType,
    provider: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.contact.phone,
      email: `mailto:${siteConfig.contact.email}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Surat",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
    },
    areaServed: [
      { "@type": "City", name: "Surat", containedInPlace: { "@type": "State", name: "Gujarat" } },
      { "@type": "Place", name: "Varachha, Surat" },
      { "@type": "Place", name: "Sarthana, Surat" },
      { "@type": "Place", name: "Katargam, Surat" },
      { "@type": "Place", name: "Adajan, Surat" },
      { "@type": "Country", name: "India" },
    ],
    availableLanguage: ["English", "Gujarati", "Hindi"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

