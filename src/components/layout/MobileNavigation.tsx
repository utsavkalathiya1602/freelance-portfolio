"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { isActive } from "@/lib/nav";
import { services } from "@/data/services";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 bg-white text-ink transition-colors duration-150 hover:bg-stone"
      >
        {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
      </button>

      {open ? (
        <nav
          id={panelId}
          aria-label="Mobile"
          className="absolute inset-x-0 top-full border-b border-line bg-ivory px-4 pb-6 pt-2 shadow-[0_12px_24px_-16px_rgba(23,23,23,0.25)]"
        >
          <ul className="flex flex-col">
            {siteConfig.nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className="border-b border-line last:border-b-0">
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={active ? "page" : undefined}
                    className="flex items-center justify-between py-4 font-display text-xl font-semibold text-ink"
                  >
                    {item.label}
                    {active ? <span aria-hidden="true" className="h-2 w-2 rounded-full bg-ink" /> : null}
                  </Link>
                  {item.href === "/services" ? (
                    <ul className="-mt-1 mb-3 flex flex-col gap-1 pl-4">
                      {services.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={service.href}
                            onClick={close}
                            aria-current={pathname === service.href ? "page" : undefined}
                            className={`block rounded-lg px-3 py-2.5 text-base font-medium ${
                              pathname === service.href ? "bg-stone text-ink" : "text-muted hover:text-ink"
                            }`}
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact"
            onClick={close}
            className="mt-4 flex h-12 items-center justify-center gap-2 rounded-full bg-lime text-sm font-semibold text-ink"
          >
            Let&apos;s Talk
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </nav>
      ) : null}
    </div>
  );
}
