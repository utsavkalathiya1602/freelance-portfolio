import type { ReactNode } from "react";

type ProjectOverviewProps = {
  overview: string;
  problemTitle?: string;
  problem: ReactNode;
  goalsTitle?: string;
  goals: string[];
};

export function ProjectOverview({
  overview,
  problemTitle = "The problem this concept addresses",
  problem,
  goalsTitle = "Goals",
  goals,
}: ProjectOverviewProps) {
  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
      <div>
        <h2 id="overview-heading" className="font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl">
          Overview
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted">{overview}</p>
        <h3 className="mt-10 font-display text-2xl font-bold tracking-[-0.02em] text-ink">{problemTitle}</h3>
        <div className="mt-3 leading-relaxed text-muted">{problem}</div>
      </div>
      <div className="rounded-[var(--radius-card)] border border-line bg-white p-6 sm:p-8">
        <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">{goalsTitle}</h3>
        <ol className="mt-6 space-y-4">
          {goals.map((goal, index) => (
            <li key={goal} className="flex gap-4">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime font-display text-sm font-bold text-ink">
                {index + 1}
              </span>
              <span className="pt-1 leading-relaxed text-ink">{goal}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
