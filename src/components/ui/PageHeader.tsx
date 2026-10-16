import type { ReactNode } from "react";
import { Container } from "./Container";
import { Eyebrow } from "./SectionHeading";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
};

export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <section aria-labelledby="page-heading" className="border-b border-line">
      <Container className="py-14 sm:py-20">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1
            id="page-heading"
            className="font-display text-[2.6rem] font-bold leading-[1.02] tracking-[-0.04em] text-ink text-balance sm:text-6xl lg:text-[4.4rem]"
          >
            {title}
          </h1>
          {description ? <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{description}</p> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
