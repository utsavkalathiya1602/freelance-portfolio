import Link from "next/link";
import { cacheLife } from "next/cache";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { mailtoHref, phoneHref, siteConfig, whatsappHref } from "@/config/site";
import { Container } from "@/components/ui/Container";

async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

const footerLinks = [
  {
    heading: "Navigate",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Website Development", href: "/services/web-development" },
      { label: "Google Ads", href: "/services/google-ads" },
      { label: "Portfolio", href: "/work" },
    ],
  },
];

export function Footer() {
  const whatsapp = whatsappHref("Hi Utsav, I'd like to discuss a project.");
  const phone = phoneHref();
  const socials = [
    { label: "LinkedIn", href: siteConfig.social.linkedin },
    { label: "GitHub", href: siteConfig.social.github },
  ].filter((item) => item.href);

  return (
    <footer className="bg-ink text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="max-w-sm">
            <Link href="/" className="font-display text-4xl font-extrabold tracking-[-0.04em] text-white">
              {siteConfig.brandMark}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              {siteConfig.name} — independent web developer and Google Ads specialist based in{" "}
              {siteConfig.location}. Building practical websites for small businesses, startups and service providers.
            </p>
          </div>

          {footerLinks.map((group) => (
            <nav key={group.heading} aria-label={`Footer — ${group.heading}`}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">{group.heading}</h2>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/85 transition-colors duration-150 hover:text-lime"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">Get in touch</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={mailtoHref("Project enquiry")}
                  className="inline-flex items-center gap-2 break-all text-white/85 transition-colors duration-150 hover:text-lime"
                >
                  <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
                  {siteConfig.contact.email}
                </a>
              </li>
              {phone ? (
                <li>
                  <a
                    href={phone}
                    className="inline-flex items-center gap-2 text-white/85 transition-colors duration-150 hover:text-lime"
                  >
                    <Phone aria-hidden="true" className="h-4 w-4 shrink-0" />
                    {siteConfig.contact.phone}
                  </a>
                </li>
              ) : null}
              {whatsapp ? (
                <li>
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/85 transition-colors duration-150 hover:text-lime"
                  >
                    <MessageCircle aria-hidden="true" className="h-4 w-4 shrink-0" />
                    WhatsApp
                  </a>
                </li>
              ) : null}
            </ul>
            {socials.length > 0 ? (
              <ul className="mt-6 flex flex-wrap gap-2">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-white/20 px-3 py-1.5 text-xs font-medium text-white transition-colors duration-150 hover:border-lime hover:text-lime"
                    >
                      {social.label}
                      <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CopyrightYear /> {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.location}</p>
        </div>
      </Container>
    </footer>
  );
}
