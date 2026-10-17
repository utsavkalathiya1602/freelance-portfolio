import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Code2, Megaphone, Plus } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { services } from "@/data/services";
import { generalServiceFaqs } from "@/data/faqs";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/services/ServiceCard";
import { FAQSection } from "@/components/services/FAQSection";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ServicesHeroAside } from "@/components/page-heroes/ServicesHeroAside";

const title = "Web Development & Digital Marketing Services — Surat";
const description =
  "Website development and digital marketing services by Utsav Kalathiya — freelance web developer and digital marketer in Surat, Gujarat. Custom websites using React.js and MERN stack, plus Google Ads, Meta Ads and SEO for small businesses in Surat and across India.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/services",
  keywords: [
    "web development services Surat",
    "digital marketing services Surat",
    "freelance web developer and digital marketer Surat",
    "React.js development services India",
    "MERN stack services",
    "Google Ads Meta Ads SEO Surat",
    "small business web and marketing services",
    "affordable web development digital marketing India",
  ],
});


/** Side-by-side comparison. Keep wording factual: no prices, no promised results. */
const comparison: { label: string; web: string; ads: string }[] = [
  {
    label: "Best for",
    web: "Businesses with no website, an outdated one, or a new product or service to launch",
    ads: "Businesses that want more of the right local customers to find them — on Google, Facebook, Instagram or Maps",
  },
  {
    label: "Main goal",
    web: "Explain what you do clearly and make it easy to contact you",
    ads: "Put your business in front of people who are likely to become customers",
  },
  {
    label: "What you receive",
    web: "A responsive website or landing page, set up and handed over with a walkthrough",
    ads: "Google Ads, Meta Ads and/or SEO set up with tracking, plus regular reviews",
  },
  {
    label: "Type of work",
    web: "A project with a defined scope and end date",
    ads: "Ongoing — campaigns need regular review and adjustment",
  },
  {
    label: "What I need from you",
    web: "Business details, photos and any content you already have",
    ads: "Access to your ad accounts or Business Profile, your budget and what counts as a good enquiry",
  },
  {
    label: "How pricing works",
    web: "Quoted per project after the scope is agreed",
    ads: "Management fee agreed in writing; ad spend is paid directly to Google or Meta",
  },
];

const startSteps = [
  {
    title: "Send an enquiry",
    text: "Tell me about your business and what you'd like to improve, through the contact form or by email.",
  },
  {
    title: "Short discussion",
    text: "We talk through your goals and I ask the questions needed to understand the scope.",
  },
  {
    title: "Written proposal",
    text: "You receive a clear scope, timeline and price. Work only starts once you've agreed to it.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Websites and digital marketing, explained clearly."
        description="Compare what each service includes, who it suits and how it's priced — then start with the one that fits your business today."
        aside={<ServicesHeroAside />}
      >
        <nav aria-label="Jump to a service" className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/services/web-development" variant="outline">
            <Code2 aria-hidden="true" className="h-4 w-4" />
            Website Development
          </Button>
          <Button href="/services/digital-marketing" variant="outline">
            <Megaphone aria-hidden="true" className="h-4 w-4" />
            Digital Marketing
          </Button>
        </nav>
      </PageHeader>

      <Section labelledBy="services-list-heading">
        <h2 id="services-list-heading" className="sr-only">
          Services offered
        </h2>
        <ul className="grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <li key={service.slug}>
              <ServiceCard service={service} index={index} />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white" labelledBy="compare-heading">
        <SectionHeading
          eyebrow="Side by side"
          id="compare-heading"
          title="Which service fits your situation?"
          description="A quick comparison to help you decide where to start."
        />

        {/* Table on larger screens */}
        <div className="mt-12 hidden overflow-hidden rounded-[var(--radius-card)] border border-line md:block">
          <table className="w-full text-left">
            <caption className="sr-only">Comparison of Website Development and Digital Marketing services</caption>
            <thead>
              <tr className="border-b border-line">
                <td className="w-48 bg-ivory p-5" />
                <th scope="col" className="bg-lime p-5 font-display text-xl font-bold text-ink">
                  Website Development
                </th>
                <th scope="col" className="bg-lavender p-5 font-display text-xl font-bold text-ink">
                  Digital Marketing
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {comparison.map((row) => (
                <tr key={row.label}>
                  <th scope="row" className="bg-ivory p-5 align-top text-sm font-semibold text-ink">
                    {row.label}
                  </th>
                  <td className="p-5 align-top text-[0.95rem] leading-relaxed text-muted">{row.web}</td>
                  <td className="border-l border-line p-5 align-top text-[0.95rem] leading-relaxed text-muted">
                    {row.ads}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Stacked cards on phones */}
        <div className="mt-10 grid gap-4 md:hidden">
          {[
            { key: "web" as const, name: "Website Development", tone: "bg-lime" },
            { key: "ads" as const, name: "Digital Marketing", tone: "bg-lavender" },
          ].map((column) => (
            <div key={column.key} className="overflow-hidden rounded-[var(--radius-card)] border border-line">
              <h3 className={`p-5 font-display text-xl font-bold text-ink ${column.tone}`}>{column.name}</h3>
              <dl className="divide-y divide-line bg-white">
                {comparison.map((row) => (
                  <div key={row.label} className="p-5">
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{row.label}</dt>
                    <dd className="mt-1.5 text-[0.95rem] leading-relaxed text-ink">{row[column.key]}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </Section>

      <Section labelledBy="combined-heading">
        <div className="grid overflow-hidden rounded-[var(--radius-panel)] border border-ink/10 lg:grid-cols-[1fr_auto_1fr_1.2fr]">
          <div className="bg-lime p-7 sm:p-9">
            <Code2 aria-hidden="true" className="h-6 w-6" />
            <p className="mt-6 font-display text-2xl font-bold tracking-[-0.02em] text-ink">Landing page</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">A focused page built around one offer and one action.</p>
          </div>
          <div className="flex items-center justify-center bg-ink p-3 text-lime" aria-hidden="true">
            <Plus className="h-6 w-6" />
          </div>
          <div className="bg-lavender p-7 sm:p-9">
            <Megaphone aria-hidden="true" className="h-6 w-6" />
            <p className="mt-6 font-display text-2xl font-bold tracking-[-0.02em] text-ink">Search campaign</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">Ads that match the page, with tracking set up from day one.</p>
          </div>
          <div className="bg-ink p-7 text-white sm:p-9">
            <h2 id="combined-heading" className="font-display text-3xl font-bold tracking-[-0.03em]">
              Need both? Plan them together.
            </h2>
            <p className="mt-4 leading-relaxed text-white/70">
              When the same person builds the landing page and the campaign, the ad, the page and the conversion
              tracking are planned to work together from the start.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary">
                Discuss a combined project
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="stone" labelledBy="start-heading">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Getting started" id="start-heading" title="Three steps to a clear proposal." />
          <Link
            href="/work"
            className="inline-flex items-center gap-2 self-start text-sm font-semibold text-ink underline decoration-lime decoration-[3px] underline-offset-[6px] hover:decoration-ink lg:self-auto"
          >
            See example projects first
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
        <ol className="mt-12 grid gap-4 md:grid-cols-3">
          {startSteps.map((step, index) => (
            <li key={step.title} className="relative rounded-[var(--radius-card)] border border-line bg-white p-6 sm:p-8">
              <span aria-hidden="true" className="font-display text-6xl font-bold leading-none tracking-[-0.05em] text-stone">
                {index + 1}
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold tracking-[-0.02em] text-ink">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <FAQSection faqs={generalServiceFaqs} description="General questions about working together." />
      <ContactCTA heading="Not sure where to start?" text="Describe your business and what you'd like to change. I'll recommend a sensible first step — even if that's something small." />
    </>
  );
}
