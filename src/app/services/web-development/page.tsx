import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Check } from "lucide-react";
import { webAudiences, webOfferings, webProcess } from "@/data/services";
import { webFaqs } from "@/data/faqs";
import { websiteProjects } from "@/data/projects";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { ServiceHero } from "@/components/services/ServiceHero";
import { OfferingGrid } from "@/components/services/OfferingGrid";
import { FAQSection } from "@/components/services/FAQSection";
import { WebsiteIllustration } from "@/components/services/Illustrations";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { ContactCTA } from "@/components/home/ContactCTA";

const title = "Website Development";
const description =
  "Business websites, landing pages and custom web applications built around your goals by Utsav Kalathiya, a freelance web developer in Surat, India.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/services/web-development" });

export default function WebDevelopmentPage() {
  const projects = websiteProjects.slice(0, 4);

  return (
    <>
      <ServiceHero
        eyebrow="Website Development"
        breadcrumb="Website Development"
        current="web-development"
        title="Websites built around your business goals."
        description="From a focused landing page to a custom web application, I build fast, responsive websites that explain what you do clearly and make it easy for customers to get in touch."
        primaryCta={{ label: "Request a Project Discussion", href: "/contact" }}
        secondaryCta={{ label: "See Related Work", href: "#projects" }}
        aside={<WebsiteIllustration />}
      />

      <Section labelledBy="offerings-heading">
        <SectionHeading
          eyebrow="What I can help with"
          id="offerings-heading"
          title="The right kind of website for the job."
          description="Not every business needs the same thing. We'll choose the simplest solution that does what you need."
        />
        <div className="mt-12">
          <OfferingGrid offerings={webOfferings} accent="lime" />
        </div>
      </Section>

      <Section tone="stone" labelledBy="fit-heading">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Who it's for"
            id="fit-heading"
            title="A good fit for small teams with real goals."
            description="I work best with businesses that want a dependable website, honest advice and a direct line to the person building it."
          />
          <ul className="space-y-3">
            {webAudiences.map((item) => (
              <li key={item} className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime">
                  <Check aria-hidden="true" className="h-4 w-4" />
                </span>
                <span className="text-[0.95rem] leading-relaxed text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section labelledBy="process-heading">
        <SectionHeading
          eyebrow="Process"
          id="process-heading"
          title="How a website project runs."
          description="Pricing and timelines depend on scope, so they are agreed in writing during planning — before development starts."
        />
        <div className="mt-12">
          <ProcessSteps steps={webProcess} />
        </div>
      </Section>

      {projects.length > 0 ? (
        <Section id="projects" tone="stone" labelledBy="projects-heading">
          <SectionHeading
            eyebrow="Related work"
            id="projects-heading"
            title="Website concepts."
            description="Concept projects for fictional brands, showing how I plan websites for different industries and markets."
          />
          <div className="mt-12">
            <ProjectGrid items={projects} />
          </div>
        </Section>
      ) : null}

      <FAQSection faqs={webFaqs} />
      <ContactCTA heading="Ready to plan your website?" />
    </>
  );
}
