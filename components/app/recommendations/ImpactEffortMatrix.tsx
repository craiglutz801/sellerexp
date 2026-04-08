'use client'

import type { Recommendation } from '@/lib/types/platform'

export default function ImpactEffortMatrix({ items }: { items: Recommendation[] }) {
  return (
    <div className="app-card p-6">
      <h3 className="text-sm font-semibold text-ink">Impact vs. effort (mock)</h3>
      <p className="mt-1 text-xs text-warm-500 mb-6">
        Upper-left quadrant = higher modeled leverage with lower execution cost. Used for prioritization narratives, not project planning.
      </p>
      <div className="relative h-64 rounded-xl bg-cream/40 border border-warm-400/30">
        <div className="absolute left-3 top-3 bottom-10 w-px bg-warm-400/40" aria-hidden />
        <div className="absolute left-3 right-3 bottom-10 h-px bg-warm-400/40" aria-hidden />
        <span className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-semibold uppercase tracking-wider text-warm-500 whitespace-nowrap">
          Impact
        </span>
        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-wider text-warm-500">
          Effort
        </span>
        <span className="absolute top-2 left-14 text-[10px] text-warm-500">High</span>
        <span className="absolute bottom-12 left-14 text-[10px] text-warm-500">Low</span>
        <span className="absolute bottom-11 left-12 text-[10px] text-warm-500">Low</span>
        <span className="absolute bottom-11 right-4 text-[10px] text-warm-500">High</span>

        {items.map((r) => {
          const xPct = 12 + ((r.effortAxis - 1) / 2) * 76
          const yPct = 88 - ((r.impactAxis - 1) / 4) * 76
          return (
            <div
              key={r.id}
              className="absolute h-3 w-3 -ml-1.5 -mt-1.5 rounded-full bg-accent border-2 border-white shadow-sm"
              style={{ left: `${xPct}%`, top: `${yPct}%` }}
              title={r.title}
            />
          )
        })}
      </div>
      <ul className="mt-4 space-y-2 text-sm text-warm-600">
        {items.map((r) => (
          <li key={r.id} className="flex gap-2">
            <span className="h-2 w-2 mt-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <span className="font-medium text-ink">{r.title}</span>
              <span className="text-warm-500"> · {r.priority}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
