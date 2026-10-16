import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";

const toneBg = { lime: "bg-lime", lavender: "bg-lavender" } as const;

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="border-b border-line">
      <Container className="grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16 lg:py-24">
        <div>
          <Eyebrow>Independent Freelancer · Surat, India</Eyebrow>
          <h1
            id="hero-heading"
            className="font-display text-[2.6rem] font-bold leading-[1.02] tracking-[-0.04em] text-ink text-balance sm:text-6xl lg:text-[4.4rem]"
          >
            Digital experiences that{" "}
            <span className="relative whitespace-nowrap">
              <span aria-hidden="true" className="absolute inset-x-[-0.08em] bottom-[0.06em] -z-10 h-[0.38em] bg-lime" />
              move
            </span>{" "}
            your business forward.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I&apos;m Utsav Kalathiya, a web developer helping businesses build modern websites and reach relevant
            customers through Google Ads.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg">
              Start a Project
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Button>
            <Button href="/work" variant="outline" size="lg">
              Explore My Work
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {["Clear written scope", "Responsive by default", "Direct communication"].map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <Check aria-hidden="true" className="h-4 w-4 text-ink" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="absolute -right-3 -top-3 -z-10 hidden h-40 w-40 rounded-[var(--radius-panel)] bg-peach sm:block"
          />
          <ul className="grid gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <li key={service.slug}>
                  <Link
                    href={service.href}
                    className={`group block rounded-[var(--radius-panel)] border border-ink/10 p-6 transition-shadow duration-200 hover:shadow-[0_18px_40px_-24px_rgba(23,23,23,0.45)] sm:p-8 ${toneBg[service.tone]} ${
                      index === 1 ? "sm:ml-10" : "sm:mr-10"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-white">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>
                      <span className="font-display text-sm font-semibold text-ink/60">0{index + 1}</span>
                    </div>
                    <h2 className="mt-8 font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-[2.1rem]">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink/75">
                      {service.includes.slice(0, 3).join(" · ")}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                      Learn more
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white transition-colors duration-150 group-hover:bg-ink group-hover:text-white">
                        <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
