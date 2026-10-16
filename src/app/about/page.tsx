import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { ArrowRight, Briefcase, GraduationCap } from "lucide-react";
import { siteConfig } from "@/config/site";
import { processSteps } from "@/data/services";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { Button } from "@/components/ui/Button";
import { ContactCTA } from "@/components/home/ContactCTA";

const title = "About";
const description =
  "Utsav Kalathiya is an independent web developer and Google Ads specialist in Surat, India, building websites and web applications with React.js and Node.js.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/about" });

const skills = [
  {
    label: "Frontend",
    tone: "bg-lime",
    items: ["React.js", "Angular", "JavaScript", "Tailwind CSS", "Bootstrap", "React Native"],
  },
  {
    label: "Backend",
    tone: "bg-peach",
    items: ["Node.js", "Express.js", "REST APIs", "JWT & bcrypt", "Google OAuth"],
  },
  {
    label: "Databases",
    tone: "bg-lavender",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    label: "Marketing",
    tone: "bg-stone",
    items: ["Google Ads (Search)", "Keyword research", "Conversion tracking"],
  },
];

/** Update this list as your career develops. */
const experience = [
  {
    role: "Full Stack Developer (Remote)",
    company: "Elpiora",
    period: "May 2026 – Present",
    text: "Building full-stack features with React.js, Node.js, Express.js and MongoDB for a product-based startup.",
  },
  {
    role: "Full Stack Developer",
    company: "WRT InfoTech, Surat",
    period: "Nov 2025 – Apr 2026",
    text: "Upgraded an Angular application from v11 to v19, maintained React.js and React Native codebases, and integrated APIs.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "NIQOX, Surat",
    period: "Jul 2025 – Sep 2025",
    text: "Built a MERN job portal with authentication, session handling and CRUD APIs.",
  },
];

const education = [
  { title: "MCA (Online)", place: "Manipal University Jaipur", period: "2025 – Present" },
  { title: "BCA", place: "Sutex Bank College of Computer Application", period: "2022 – 2025" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={`About · ${siteConfig.shortLocation}`}
        title="Hi, I'm Utsav. I build websites that do a job."
        description={`I'm an independent web developer based in ${siteConfig.location}. I help small businesses, startups and service providers with modern websites, web applications and Google Ads search campaigns.`}
      />

      <Section labelledBy="story-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <SectionHeading eyebrow="How I think about projects" id="story-heading" title="Useful first. Impressive second." />
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              Alongside my freelance work, I work as a full-stack developer, building features with React.js,
              Node.js, Express.js and MongoDB. That day-to-day work shapes how I approach client projects: understand
              the requirement properly, write code that is easy to maintain, and test it before calling it done.
            </p>
            <p>
              For freelance clients, I focus on the things that matter to a business: a website that explains what you
              do clearly, works on every screen size, and makes it easy for customers to contact you. Where it makes
              sense, I also set up Google Ads search campaigns so the right people can find you.
            </p>
            <p>
              I keep communication simple and honest — a clear scope, realistic timelines, and no promises I can&apos;t
              keep.
            </p>
            <div className="pt-2">
              <Button href="/contact" variant="dark">
                Start a conversation
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="stone" labelledBy="skills-heading">
        <SectionHeading
          eyebrow="Skills"
          id="skills-heading"
          title="Tools and technologies."
          description="The stack I use most often. The right tools for your project depend on what it needs to do."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <li key={group.label} className="rounded-[var(--radius-card)] border border-line bg-white p-6">
              <h3 className="inline-flex items-center gap-2 font-display text-xl font-bold tracking-[-0.02em] text-ink">
                <span aria-hidden="true" className={`h-3 w-3 rounded-full ${group.tone}`} />
                {group.label}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full bg-ivory px-3 py-1.5 text-sm text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="experience-heading">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <h2
              id="experience-heading"
              className="flex items-center gap-3 font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl"
            >
              <Briefcase aria-hidden="true" className="h-7 w-7" />
              Experience
            </h2>
            <ol className="mt-8 divide-y divide-line border-y border-line">
              {experience.map((item) => (
                <li key={item.company} className="grid gap-2 py-6 sm:grid-cols-[10rem_1fr] sm:gap-6">
                  <p className="text-sm font-medium text-muted">{item.period}</p>
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-ink">{item.role}</h3>
                    <p className="text-sm font-medium text-ink">{item.company}</p>
                    <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="flex items-center gap-3 font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl">
              <GraduationCap aria-hidden="true" className="h-7 w-7" />
              Education
            </h2>
            <ul className="mt-8 space-y-4">
              {education.map((item) => (
                <li key={item.title} className="rounded-[var(--radius-card)] border border-line bg-white p-6">
                  <p className="text-sm text-muted">{item.period}</p>
                  <h3 className="mt-1 font-display text-xl font-bold tracking-[-0.02em] text-ink">{item.title}</h3>
                  <p className="text-sm text-ink">{item.place}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="ink" labelledBy="process-heading">
        <SectionHeading eyebrow="Working process" id="process-heading" tone="dark" title="How we'll work together." />
        <div className="mt-12">
          <ProcessSteps steps={processSteps} tone="dark" />
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}
