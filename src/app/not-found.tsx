import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

const suggestions = [
  { label: "Website Development", href: "/services/web-development" },
  { label: "Google Ads", href: "/services/google-ads" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <section aria-labelledby="nf-heading">
      <Container className="py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-muted">Error 404</p>
            <h1
              id="nf-heading"
              className="mt-4 font-display text-[2.6rem] font-bold leading-[1.02] tracking-[-0.04em] text-ink text-balance sm:text-6xl"
            >
              This page doesn&apos;t exist.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              The link may be broken or the page may have moved. Here are a few useful places to go instead.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {suggestions.map((item) => (
                <li key={item.href}>
                  <Button href={item.href} variant="outline">
                    {item.label}
                  </Button>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/" variant="dark" size="lg">
                <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                Back to home
              </Button>
            </div>
          </div>
          <p
            aria-hidden="true"
            className="font-display text-[9rem] font-extrabold leading-none tracking-[-0.06em] text-ink sm:text-[13rem]"
          >
            4<span className="text-lime [-webkit-text-stroke:3px_var(--ink)]">0</span>4
          </p>
        </div>
      </Container>
    </section>
  );
}
