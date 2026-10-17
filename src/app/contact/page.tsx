import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { mailtoHref, phoneHref, siteConfig, whatsappHref } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { whatsappMessages } from "@/lib/whatsapp";

const title = "Contact";
const description =
  "Start a project with Utsav Kalathiya — website development and Google Ads for small businesses, startups and service providers.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/contact" });

export default function ContactPage() {
  const whatsapp = whatsappHref(whatsappMessages.contact);
  const phone = phoneHref();

  const channels = [
    {
      label: "Email",
      value: siteConfig.contact.email,
      href: mailtoHref("Project enquiry"),
      icon: Mail,
      external: false,
      highlight: true,
    },
    ...(whatsapp
      ? [{ label: "WhatsApp", value: "Send a message", href: whatsapp, icon: MessageCircle, external: true, highlight: false }]
      : []),
    ...(phone
      ? [{ label: "Phone", value: siteConfig.contact.phone, href: phone, icon: Phone, external: false, highlight: false }]
      : []),
  ];

  return (
    <section aria-labelledby="page-heading">
      <Container className="py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1
              id="page-heading"
              className="font-display text-[2.6rem] font-bold leading-[1.02] tracking-[-0.04em] text-ink text-balance sm:text-6xl"
            >
              Let&apos;s talk about your project.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Tell me about your business, your goals, and what you&apos;d like to build. I&apos;ll reply with
              questions or a suggested next step — no obligation.
            </p>

            <ul className="mt-10 space-y-3">
              {channels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className={`group flex items-center gap-4 rounded-2xl border p-4 transition-colors duration-150 sm:p-5 ${
                        channel.highlight
                          ? "border-ink/10 bg-lime hover:bg-ink hover:text-white"
                          : "border-line bg-white hover:border-ink"
                      }`}
                    >
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink text-white group-hover:bg-lime group-hover:text-ink">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs font-semibold uppercase tracking-[0.14em] opacity-70">
                          {channel.label}
                        </span>
                        <span className="block break-all font-semibold sm:break-normal">{channel.value}</span>
                      </span>
                      <ArrowUpRight aria-hidden="true" className="h-5 w-5 shrink-0" />
                    </a>
                  </li>
                );
              })}
            </ul>

            <dl className="mt-10 grid gap-4 border-t border-line pt-8 text-sm sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <dt className="font-semibold text-ink">Based in</dt>
                  <dd className="text-muted">{siteConfig.location}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <dt className="font-semibold text-ink">Working with</dt>
                  <dd className="text-muted">Clients in person in Surat and remotely</dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="rounded-[var(--radius-panel)] border border-line bg-stone p-6 sm:p-10">
            <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink sm:text-3xl">Project enquiry</h2>
            <p className="mb-8 mt-2 text-muted">A few details help me give you a useful first reply.</p>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
