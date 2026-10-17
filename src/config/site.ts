/**
 * Central site configuration.
 * Update your name, contact details and social links here — every page reads from this file.
 */

export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Utsav Kalathiya",
  brandMark: "UK.",
  title: "Web Developer & Google Ads Specialist",
  location: "Surat, Gujarat, India",
  shortLocation: "Surat, India",
  description:
    "Utsav Kalathiya is an independent web developer in Surat, India, building modern business websites, landing pages and web applications, and setting up Google Ads search campaigns.",

  /** The public URL the site is deployed to. Used for canonical URLs, Open Graph and the sitemap. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://utsavkalathiya-freelance.vercel.app",

  contact: {
    email: "utsavkalathiya0001@gmail.com",
    /** Displayed phone number. Leave empty ("") to hide it. */
    phone: "+91 98793 54064",
    /**
     * WhatsApp number in international format, digits only (e.g. "919879354064").
     * Leave empty ("") to hide every WhatsApp button on the site.
     */
    whatsapp: "919879354064",
  },

  /** Only add profiles that really exist. Empty strings are hidden. */
  social: {
    linkedin: "https://www.linkedin.com/in/utsavkalathiya1602/",
    github: "https://github.com/utsavkalathiya1602",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
} as const;

export function mailtoHref(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString().replace(/\+/g, "%20");
  return `mailto:${siteConfig.contact.email}${query ? `?${query}` : ""}`;
}

export function whatsappHref(message?: string): string | null {
  const number = siteConfig.contact.whatsapp.replace(/\D/g, "");
  if (!number) return null;
  return `https://wa.me/${number}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
}

export function phoneHref(): string | null {
  const digits = siteConfig.contact.phone.replace(/[^\d+]/g, "");
  return digits ? `tel:${digits}` : null;
}
