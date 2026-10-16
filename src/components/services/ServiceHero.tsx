import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { services, type ServiceSlug } from "@/data/services";

type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb: string;
  /** The service this page describes; highlighted in the service switcher. */
  current: ServiceSlug;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Static visual shown on the right on large screens. */
  aside: ReactNode;
};

export function ServiceHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  current,
  primaryCta,
  secondaryCta,
  aside,
}: ServiceHeroProps) {
  return (
    <section aria-labelledby="page-heading" className="border-b border-line">
      <Container className="py-12 sm:py-16 lg:py-20">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
            <li>
              <Link href="/" className="hover:text-ink">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li>
              <Link href="/services" className="hover:text-ink">
                Services
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li aria-current="page" className="font-medium text-ink">
              {breadcrumb}
            </li>
          </ol>
        </nav>

        <nav aria-label="Services" className="self-start sm:self-auto">
          <ul className="flex rounded-full border border-line bg-white p-1">
            {services.map((service) => {
              const active = service.slug === current;
              return (
                <li key={service.slug}>
                  <Link
                    href={service.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex h-9 items-center rounded-full px-4 text-sm font-semibold transition-colors duration-150 ${
                      active ? "bg-ink text-white" : "text-ink hover:bg-stone"
                    }`}
                  >
                    {service.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1
              id="page-heading"
              className="font-display text-[2.4rem] font-bold leading-[1.04] tracking-[-0.04em] text-ink text-balance sm:text-5xl lg:text-[3.9rem]"
            >
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={primaryCta.href} size="lg">
                {primaryCta.label}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Button>
              {secondaryCta ? (
                <Button href={secondaryCta.href} variant="outline" size="lg">
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          </div>
          <div>{aside}</div>
        </div>
      </Container>
    </section>
  );
}
