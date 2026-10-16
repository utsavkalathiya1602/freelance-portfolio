import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NavLinks } from "./NavLinks";
import { MobileNavigation } from "./MobileNavigation";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ivory/95 backdrop-blur-sm">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <Container className="flex h-16 items-center justify-between gap-6 sm:h-[4.5rem]">
        <Link
          href="/"
          className="font-display text-2xl font-extrabold tracking-[-0.04em] text-ink"
          aria-label={`${siteConfig.name} — home`}
        >
          {siteConfig.brandMark}
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <Button href="/contact">
              Let&apos;s Talk
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Button>
          </div>
          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}
