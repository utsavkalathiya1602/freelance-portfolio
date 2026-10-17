import { siteConfig } from "@/config/site";

type ServiceSchemaProps = {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string;
};

/**
 * Service JSON-LD structured data for individual service pages.
 *
 * Uses the "Service" type because it accurately describes a specific service offering.
 * Does not use LocalBusiness as there is no verified physical business address.
 */
export function ServiceSchema({
  name,
  description,
  url,
  serviceType,
  areaServed = "India",
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
      address: {
        "@type": "PostalAddress",
        addressLocality: "Surat",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
    },
    areaServed,
    availableLanguage: "English",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
