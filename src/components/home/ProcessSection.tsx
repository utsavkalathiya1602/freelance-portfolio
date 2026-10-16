import { processSteps } from "@/data/services";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessSteps } from "@/components/ui/ProcessSteps";

export function ProcessSection() {
  return (
    <Section tone="ink" labelledBy="process-heading">
      <SectionHeading
        eyebrow="How I work"
        id="process-heading"
        tone="dark"
        title="Clear communication. Practical solutions. Thoughtful execution."
        description="Every project follows the same simple structure, so you always know what is happening and what comes next."
      />
      <div className="mt-12">
        <ProcessSteps steps={processSteps} tone="dark" />
      </div>
    </Section>
  );
}
