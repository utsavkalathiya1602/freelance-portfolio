import type { CSSProperties } from "react";
import type { ConceptBrand } from "@/types/project";
import { ConceptIllustration } from "./ConceptIllustration";

/**
 * Static website mockups rendered from a concept brand definition.
 * All sizes use container-query units (cqw) so the mockup scales as one image
 * at any card width. They are decorative: hidden from assistive technology and
 * always accompanied by a visible "concept mockup" label.
 */

function headingFont(brand: ConceptBrand): CSSProperties {
  return brand.headingStyle === "serif"
    ? { fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: "-0.02em", fontWeight: 500 }
    : { fontFamily: "var(--font-sans)", letterSpacing: "-0.04em", fontWeight: 700 };
}

export function DesktopMockup({ brand, className = "" }: { brand: ConceptBrand; className?: string }) {
  const p = brand.palette;

  return (
    <div aria-hidden="true" className={`@container ${className}`}>
     <div className="overflow-hidden rounded-t-[1.6cqw] border border-b-0 border-ink/15">
      <div className="flex items-center gap-[0.8cqw] border-b border-black/10 bg-white px-[2cqw] py-[1.4cqw]">
        <span className="h-[1.1cqw] w-[1.1cqw] rounded-full bg-stone" />
        <span className="h-[1.1cqw] w-[1.1cqw] rounded-full bg-stone" />
        <span className="h-[1.1cqw] w-[1.1cqw] rounded-full bg-stone" />
        <span className="ml-[2cqw] h-[2.4cqw] flex-1 rounded-full bg-ivory" />
      </div>

      <div style={{ background: p.background, color: p.ink }}>
        <div className="flex items-center justify-between px-[4cqw] py-[2.6cqw]">
          <span style={{ ...headingFont(brand), fontSize: "2.6cqw" }}>{brand.name}</span>
          <span className="flex items-center gap-[2.6cqw]" style={{ fontSize: "1.45cqw", color: p.muted }}>
            {brand.navItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
            <span
              className="rounded-full px-[1.8cqw] py-[0.8cqw]"
              style={{ background: p.accent, color: p.accentInk, fontWeight: 600 }}
            >
              {brand.ctaLabel}
            </span>
          </span>
        </div>

        <div className="grid grid-cols-[1.05fr_1fr] items-center gap-[4cqw] px-[4cqw] pb-[4cqw] pt-[2cqw]">
          <div>
            <p
              className="uppercase"
              style={{ fontSize: "1.25cqw", letterSpacing: "0.16em", color: p.muted, fontWeight: 600 }}
            >
              {brand.heroEyebrow}
            </p>
            <p className="mt-[1.6cqw]" style={{ ...headingFont(brand), fontSize: "5cqw", lineHeight: 1.04 }}>
              {brand.heroHeadline}
            </p>
            <p className="mt-[1.8cqw]" style={{ fontSize: "1.7cqw", lineHeight: 1.5, color: p.muted }}>
              {brand.heroText}
            </p>
            <span
              className="mt-[2.6cqw] inline-block rounded-full px-[2.4cqw] py-[1.2cqw]"
              style={{ background: p.accent, color: p.accentInk, fontSize: "1.6cqw", fontWeight: 600 }}
            >
              {brand.ctaLabel}
            </span>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-[1.6cqw]">
            <ConceptIllustration brand={brand} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[2cqw] px-[4cqw] pb-[4cqw]">
          {p.tones.map((tone, index) => (
            <div key={tone + index} className="rounded-[1.2cqw] p-[2cqw]" style={{ background: p.surface }}>
              <span className="block h-[5cqw] rounded-[0.8cqw]" style={{ background: tone }} />
              <span className="mt-[1.4cqw] block h-[1.2cqw] w-3/4 rounded-full" style={{ background: p.ink, opacity: 0.8 }} />
              <span className="mt-[0.9cqw] block h-[0.9cqw] w-full rounded-full" style={{ background: p.muted, opacity: 0.3 }} />
            </div>
          ))}
        </div>
      </div>
     </div>
    </div>
  );
}

type MobileVariant = "home" | "form";

export function MobileMockup({
  brand,
  variant = "home",
  className = "",
}: {
  brand: ConceptBrand;
  variant?: MobileVariant;
  className?: string;
}) {
  const p = brand.palette;

  return (
    <div aria-hidden="true" className={`@container mx-auto w-full max-w-[260px] ${className}`}>
     <div className="rounded-[12cqw] border-[3cqw] border-ink bg-ink">
      <div className="overflow-hidden rounded-[9cqw]" style={{ background: p.background, color: p.ink }}>
        <div className="flex items-center justify-between px-[7cqw] pb-[4cqw] pt-[7cqw]">
          <span style={{ ...headingFont(brand), fontSize: "6cqw" }}>{brand.name}</span>
          <span className="flex flex-col gap-[1.4cqw]">
            <span className="block h-[1cqw] w-[7cqw] rounded-full" style={{ background: p.ink }} />
            <span className="block h-[1cqw] w-[7cqw] rounded-full" style={{ background: p.ink }} />
          </span>
        </div>

        {variant === "home" ? (
          <div className="px-[7cqw] pb-[9cqw]">
            <div className="aspect-[4/3] overflow-hidden rounded-[5cqw]">
              <ConceptIllustration brand={brand} />
            </div>
            <p
              className="mt-[6cqw] uppercase"
              style={{ fontSize: "3cqw", letterSpacing: "0.14em", color: p.muted, fontWeight: 600 }}
            >
              {brand.heroEyebrow}
            </p>
            <p className="mt-[2.5cqw]" style={{ ...headingFont(brand), fontSize: "9.5cqw", lineHeight: 1.05 }}>
              {brand.heroHeadline}
            </p>
            <p className="mt-[3cqw]" style={{ fontSize: "3.8cqw", lineHeight: 1.5, color: p.muted }}>
              {brand.heroText}
            </p>
            <span
              className="mt-[6cqw] block rounded-full py-[4cqw] text-center"
              style={{ background: p.accent, color: p.accentInk, fontSize: "4cqw", fontWeight: 600 }}
            >
              {brand.ctaLabel}
            </span>
          </div>
        ) : (
          <div className="px-[7cqw] pb-[9cqw]">
            <p className="mt-[2cqw]" style={{ ...headingFont(brand), fontSize: "8.5cqw", lineHeight: 1.08 }}>
              {brand.ctaLabel}
            </p>
            <p className="mt-[2.5cqw]" style={{ fontSize: "3.6cqw", lineHeight: 1.5, color: p.muted }}>
              Share a few details and we&apos;ll be in touch.
            </p>
            {["Name", "Email", "Project type", "Tell us about your project"].map((label, index) => (
              <div key={label} className="mt-[4.5cqw]">
                <span style={{ fontSize: "3.2cqw", fontWeight: 600 }}>{label}</span>
                <span
                  className="mt-[1.5cqw] block rounded-[2.5cqw] border"
                  style={{
                    borderColor: `${p.muted}55`,
                    background: p.surface,
                    height: index === 3 ? "20cqw" : "10cqw",
                  }}
                />
              </div>
            ))}
            <span
              className="mt-[6cqw] block rounded-full py-[4cqw] text-center"
              style={{ background: p.accent, color: p.accentInk, fontSize: "4cqw", fontWeight: 600 }}
            >
              Send enquiry
            </span>
          </div>
        )}
      </div>
     </div>
    </div>
  );
}
