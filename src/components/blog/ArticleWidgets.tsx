"use client";

import { useState } from "react";

type Row = { label: string; a: string; b: string };

/**
 * Comparison table widget used inside blog articles.
 * colA / colB are the two column headers. rows are the comparison points.
 */
export function ComparisonTable({
  colA,
  colB,
  rows,
  note,
}: {
  colA: string;
  colB: string;
  rows: Row[];
  note?: string;
}) {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-line">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[420px] border-collapse text-sm">
          <thead>
            <tr className="bg-ink">
              <th className="px-5 py-3.5 text-left font-semibold text-white">
                Feature
              </th>
              <th className="px-5 py-3.5 text-left font-semibold text-lime">
                {colA}
              </th>
              <th className="px-5 py-3.5 text-left font-semibold text-lime">
                {colB}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-white" : "bg-stone/50"}
              >
                <td className="px-5 py-3 font-medium text-ink">{row.label}</td>
                <td className="px-5 py-3 text-muted">{row.a}</td>
                <td className="px-5 py-3 text-muted">{row.b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && (
        <p className="border-t border-line bg-stone px-5 py-3 text-xs text-muted">
          {note}
        </p>
      )}
    </div>
  );
}

/**
 * Simple budget/cost calculator widget.
 * Renders labelled sliders the user can adjust to see estimated totals.
 *
 * NOTE: `compute` cannot be passed as a function prop from a Server Component
 * (Next.js 16 restriction). Instead pass a `computeType` string and add the
 * corresponding formula inside `runCompute` below.
 */
type CalcField = {
  id: string;
  label: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  prefix?: string;
  suffix?: string;
};

/** All supported calculator types. Add a new case here when you need a new formula. */
export type CalcType = "websiteCost" | "adsBudget";

function runCompute(type: CalcType, values: Record<string, number>): string {
  if (type === "websiteCost") {
    const base = 8000;
    const perPage = 2500 * values.pages;
    const designMultiplier = 1 + (values.design - 1) * 0.4;
    const featuresAdd = values.features * 6000;
    const low = Math.round(((base + perPage + featuresAdd) * designMultiplier) / 1000) * 1000;
    const high = Math.round((low * 1.6) / 1000) * 1000;
    return `₹${low.toLocaleString("en-IN")} – ₹${high.toLocaleString("en-IN")}`;
  }
  if (type === "adsBudget") {
    const clicks = values.budget / values.cpc;
    const leads = Math.round(clicks * (values.convRate / 100));
    const cpl = leads > 0 ? Math.round(values.budget / leads) : 0;
    return `~${leads} leads (₹${cpl.toLocaleString("en-IN")} per lead)`;
  }
  return "—";
}

export function BudgetCalculator({
  title,
  fields,
  resultLabel,
  note,
  computeType,
}: {
  title: string;
  fields: CalcField[];
  resultLabel: string;
  note?: string;
  computeType: CalcType;
}) {
  const initial: Record<string, number> = {};
  for (const f of fields) initial[f.id] = f.defaultValue;
  const [values, setValues] = useState<Record<string, number>>(initial);

  function set(id: string, v: number) {
    setValues((prev) => ({ ...prev, [id]: v }));
  }

  return (
    <div className="my-8 rounded-2xl border border-line bg-white p-6 shadow-sm">
      <h3 className="mb-5 font-display text-lg font-bold text-ink">{title}</h3>
      <div className="space-y-5">
        {fields.map((f) => (
          <div key={f.id}>
            <div className="mb-1.5 flex justify-between text-sm">
              <label htmlFor={f.id} className="font-medium text-ink">
                {f.label}
              </label>
              <span className="font-semibold text-ink">
                {f.prefix ?? ""}
                {values[f.id].toLocaleString("en-IN")}
                {f.suffix ?? ""}
              </span>
            </div>
            <input
              id={f.id}
              type="range"
              min={f.min}
              max={f.max}
              step={f.step}
              value={values[f.id]}
              onChange={(e) => set(f.id, Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-stone accent-ink"
            />
            <div className="mt-0.5 flex justify-between text-xs text-muted">
              <span>
                {f.prefix ?? ""}
                {f.min.toLocaleString("en-IN")}
                {f.suffix ?? ""}
              </span>
              <span>
                {f.prefix ?? ""}
                {f.max.toLocaleString("en-IN")}
                {f.suffix ?? ""}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-xl bg-lime px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-ink/60">
          {resultLabel}
        </p>
        <p className="mt-1 font-display text-2xl font-bold text-ink">
          {runCompute(computeType, values)}
        </p>
      </div>
      {note && <p className="mt-3 text-xs text-muted">{note}</p>}
    </div>
  );
}
