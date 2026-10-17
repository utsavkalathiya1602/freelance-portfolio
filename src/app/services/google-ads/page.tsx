import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Check, Minus } from "lucide-react";
import { adsDeliverables, adsNotGuaranteed, adsOfferings, adsProcess } from "@/data/services";
import { adsFaqs } from "@/data/faqs";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { ServiceHero } from "@/components/services/ServiceHero";
import { OfferingGrid } from "@/components/services/OfferingGrid";
import { FAQSection } from "@/components/services/FAQSection";
import Link from "next/link";
import { ClientVisual } from "@/components/projects/ClientVisual";
import { ContactCTA } from "@/components/home/ContactCTA";
import { whatsappMessages } from "@/lib/whatsapp";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { adsClients } from "@/data/clients";

const title = "Google Ads Management";
const description =
  "Google Search campaign planning, keyword research, ad copy and conversion tracking for small businesses, by Utsav Kalathiya in Surat, India.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/services/google-ads" });

const factors = ["Your business", "Your market", "Your budget", "Your landing page", "Your conversion goals"];

export default function GoogleAdsPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Google Ads"
        breadcrumb="Google Ads"
        current="google-ads"
        title="Reach the right audience with a more focused Google Ads strategy."
        description="I plan and set up Google Search campaigns around the services you actually want to sell, with conversion tracking in place so you can see what your budget is doing."
        primaryCta={{ label: "Discuss Your Campaign", href: "/contact" }}
        secondaryCta={{ label: "How It Works", href: "#process" }}
        aside={
          adsClients[0] ? (
            <Link
              href={`/work/${adsClients[0].slug}`}
              className="block overflow-hidden rounded-[var(--radius-panel)] border border-ink/10 transition-shadow duration-200 hover:shadow-[0_18px_40px_-24px_rgba(23,23,23,0.45)]"
            >
              <ClientVisual client={adsClients[0]} size="hero" />
              <span className="block bg-white px-6 py-4 text-sm font-semibold text-ink">
                Client work: {adsClients[0].clientName} →
              </span>
            </Link>
          ) : null
        }
      />

      <Section labelledBy="offerings-heading">
        <SectionHeading
          eyebrow="What's included"
          id="offerings-heading"
          title="From first keyword to regular review."
          description="Everything a search campaign needs to start on a solid foundation."
        />
        <div className="mt-12">
          <OfferingGrid offerings={adsOfferings} accent="lavender" />
        </div>
      </Section>

      <Section tone="stone" labelledBy="depends-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="It depends — honestly"
              id="depends-heading"
              title="The right campaign depends on your situation."
              description="Two businesses with the same budget can see very different results. Before recommending anything, I look at:"
            />
            <ul className="mt-8 flex flex-wrap gap-2">
              {factors.map((factor) => (
                <li key={factor} className="rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-medium text-ink">
                  {factor}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[var(--radius-card)] border border-ink/10 bg-lavender p-6 sm:p-7">
              <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-ink">What I deliver</h3>
              <ul className="mt-5 space-y-3">
                {adsDeliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-ink">
                    <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[var(--radius-card)] border border-line bg-white p-6 sm:p-7">
              <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-ink">What no one can guarantee</h3>
              <ul className="mt-5 space-y-3">
                {adsNotGuaranteed.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-muted">
                    <Minus aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-ink" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section id="process" labelledBy="process-heading">
        <SectionHeading
          eyebrow="Onboarding"
          id="process-heading"
          title="A clear onboarding process."
          description="You stay the owner of your Google Ads account and billing at every step. Ad spend is paid directly to Google."
        />
        <div className="mt-12">
          <ProcessSteps steps={adsProcess} />
        </div>
      </Section>

      {adsClients.length > 0 ? (
        <Section id="client-work" labelledBy="clients-heading">
          <SectionHeading
            eyebrow="Client work"
            id="clients-heading"
            title="Google Ads accounts I manage."
            description="Real businesses whose Google Search advertising I manage."
          />
          <div className="mt-12">
            <ProjectGrid items={adsClients} />
          </div>
        </Section>
      ) : null}

      <FAQSection faqs={adsFaqs} />
      <ContactCTA
        whatsappMessage={whatsappMessages.googleAds}
        heading="Thinking about Google Ads?"
        text="Tell me about your business, your area and what you'd like more of. I'll tell you honestly whether search ads are a sensible next step."
      />
    </>
  );
}
