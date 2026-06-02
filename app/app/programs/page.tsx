import SectionHeader from '@/components/app/SectionHeader'
import { MOCK_PROGRAMS } from '@/lib/data/mock/platform'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programs',
}

const statusStyles = {
  active: 'bg-emerald-500/10 text-emerald-800 border-emerald-500/20',
  scheduled: 'bg-accent/15 text-ink border-accent/25',
  closed: 'bg-warm-400/20 text-warm-800 border-warm-400/30',
} as const

export default function ProgramsPage() {
  return (
    <>
      <SectionHeader
        eyebrow="Programs"
        title="Measurement programs — operational, but not “survey software.”"
        description="Manage cadence, cohorts, participation, and framework versions. Keep visual language aligned with the intelligence product; heavy builders are phase 2+."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {MOCK_PROGRAMS.map((p) => (
          <article
            key={p.id}
            className="app-card flex flex-col p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg font-semibold text-ink leading-snug">{p.name}</h2>
              <span className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-bold capitalize ${statusStyles[p.status]}`}>
                {p.status}
              </span>
            </div>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-warm-500">Cohorts</dt>
                <dd className="font-semibold text-ink tabular-nums">{p.cohorts}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-warm-500">Response rate</dt>
                <dd className="font-semibold text-ink tabular-nums">
                  {p.responseRate}%
                  <span className="font-normal text-warm-500"> / {p.targetRate}% target</span>
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-warm-500">Closes</dt>
                <dd className="font-medium text-warm-800">{p.closesOn}</dd>
              </div>
            </dl>
            <div className="mt-6 pt-4 border-t border-warm-400/30">
              <div className="h-2 rounded-full bg-cream overflow-hidden border border-warm-400/20">
                <div
                  className="h-full rounded-full bg-ink"
                  style={{ width: `${Math.min(100, (p.responseRate / p.targetRate) * 100)}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-warm-500">Participation progress toward target.</p>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
