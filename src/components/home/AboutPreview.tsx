import { ArrowRight, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const principles = [
  { title: "Understand first", text: "I start by learning how your business works and what the project needs to achieve." },
  { title: "Build to last", text: "Responsive, maintainable code that is easy to update as your business grows." },
  { title: "Talk clearly", text: "Plain-language updates, no jargon, and quick answers to your questions." },
  { title: "Be honest about scope", text: "Realistic timelines and a clear list of what is and isn't included." },
];

export function AboutPreview() {
  return (
    <Section labelledBy="about-heading">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow="About" id="about-heading" title="Let's turn your idea into something useful." />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              I&apos;m {siteConfig.name}, an independent developer based in {siteConfig.location}. I build modern
              websites and web applications with React.js and Node.js, and I set up Google Ads search campaigns
              for businesses where advertising makes sense.
            </p>
            <p>
              You work with me directly — the person planning, building and supporting your project.
            </p>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink">
            <MapPin aria-hidden="true" className="h-4 w-4" />
            {siteConfig.location}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/about" variant="dark">
              More about me
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="outline">
              Get in touch
            </Button>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {principles.map((item, index) => (
            <li
              key={item.title}
              className={`rounded-[var(--radius-card)] border border-line p-6 sm:p-7 ${
                index === 0 ? "bg-peach" : index === 3 ? "bg-lavender" : "bg-white"
              }`}
            >
              <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-ink">{item.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/75">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
