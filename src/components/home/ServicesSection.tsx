import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const toneDot = { lime: "bg-lime", lavender: "bg-lavender" } as const;

/** Compact homepage overview. The full detail lives on /services and each service page. */
export function ServicesSection() {
  return (
    <Section id="services" labelledBy="services-heading">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="What I do"
            id="services-heading"
            title="Build the website. Bring the right visitors."
            description="Small businesses and service providers in Surat and across India often need one of two things: a website people trust, or more of the right people finding it. I help with both."
          />
          <div className="mt-8">
            <Button href="/services" variant="dark">
              Compare services
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <ol className="border-t border-ink">
          {services.map((service, index) => (
            <li key={service.slug} className="border-b border-line">
              <Link
                href={service.href}
                className="group grid gap-3 py-7 transition-colors duration-150 hover:bg-white sm:grid-cols-[4rem_1fr_auto] sm:items-start sm:gap-6 sm:px-4"
              >
                <span className="font-display text-sm font-bold text-muted">0{index + 1}</span>
                <span>
                  <span className="flex items-center gap-3">
                    <span aria-hidden="true" className={`h-3 w-3 rounded-full ${toneDot[service.tone]}`} />
                    <span className="font-display text-2xl font-bold tracking-[-0.02em] text-ink sm:text-3xl">
                      {service.title}
                    </span>
                  </span>
                  <span className="mt-2 block max-w-xl text-[0.95rem] leading-relaxed text-muted">
                    {service.description}
                  </span>
                </span>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors duration-150 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  <span className="sr-only">View {service.title}</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
