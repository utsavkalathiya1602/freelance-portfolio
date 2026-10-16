import type { ProcessStep } from "@/data/services";

type ProcessStepsProps = {
  steps: ProcessStep[];
  tone?: "light" | "dark";
};

/** Numbered, static four-step layout. */
export function ProcessSteps({ steps, tone = "light" }: ProcessStepsProps) {
  const dark = tone === "dark";

  return (
    <ol className={`grid gap-px overflow-hidden rounded-[var(--radius-card)] border sm:grid-cols-2 lg:grid-cols-4 ${dark ? "border-white/15 bg-white/15" : "border-line bg-line"}`}>
      {steps.map((step, index) => (
        <li key={step.title} className={`flex flex-col p-6 sm:p-8 ${dark ? "bg-ink" : "bg-white"}`}>
          <span
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-bold ${
              dark ? "bg-lime text-ink" : index === 0 ? "bg-lime text-ink" : "bg-stone text-ink"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className={`mt-8 font-display text-2xl font-bold tracking-[-0.02em] ${dark ? "text-white" : "text-ink"}`}>
            {step.title}
          </h3>
          <p className={`mt-3 text-[0.95rem] leading-relaxed ${dark ? "text-white/70" : "text-muted"}`}>
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
