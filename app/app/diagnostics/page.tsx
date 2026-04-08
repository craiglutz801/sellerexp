import SectionHeader from '@/components/app/SectionHeader'
import {
  MOCK_DIMENSIONS,
  MOCK_DRIVERS,
  MOCK_STAGE_FRICTION,
} from '@/lib/data/mock/platform'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diagnostics',
}

export default function DiagnosticsPage() {
  return (
    <>
      <SectionHeader
        eyebrow="Diagnostics"
        title="Where operational friction shows up — by dimension, stage, and driver."
        description="Structured assessment of the revenue operating environment: process, tools, enablement, alignment, support, and incentives. Filters for segment / team ship next; mock data is global."
      />

      <section className="mb-12">
        <h2 className="text-lg font-semibold text-ink mb-4">Dimension scores</h2>
        <div className="app-card overflow-x-auto">
          <table className="min-w-[720px] w-full text-sm">
            <thead>
              <tr className="border-b border-warm-400/30 text-left text-xs font-semibold uppercase tracking-wider text-warm-500">
                <th className="p-4">Dimension</th>
                <th className="p-4">Score</th>
                <th className="p-4">Δ last cycle</th>
                <th className="p-4">Δ benchmark</th>
                <th className="p-4">Confidence</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_DIMENSIONS.map((row) => (
                <tr key={row.dimension} className="border-b border-warm-400/20 last:border-0">
                  <td className="p-4 font-medium text-ink">{row.dimension}</td>
                  <td className="p-4 tabular-nums font-semibold">{row.score}</td>
                  <td className={`p-4 tabular-nums ${row.deltaCycle >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
                    {row.deltaCycle >= 0 ? '+' : ''}
                    {row.deltaCycle}
                  </td>
                  <td className={`p-4 tabular-nums ${row.benchmarkGap >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
                    {row.benchmarkGap >= 0 ? '+' : ''}
                    {row.benchmarkGap}
                  </td>
                  <td className="p-4 text-warm-600 capitalize">{row.confidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-ink mb-2">Friction by sales stage</h2>
          <p className="text-sm text-warm-600 mb-6">Lower bars = more friction signal in this mock model.</p>
          <div className="space-y-4">
            {MOCK_STAGE_FRICTION.map((s) => (
              <div key={s.stage}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-ink">{s.stage}</span>
                  <span className="tabular-nums text-warm-600">{s.score}</span>
                </div>
                <div className="h-2 rounded-full bg-cream overflow-hidden border border-warm-400/20">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent to-accent-dark"
                    style={{ width: `${s.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-ink mb-2">Driver ranking</h2>
          <p className="text-sm text-warm-600 mb-6">Severity index × prevalence (mock). Ownership hints route to recommendations.</p>
          <ul className="space-y-4">
            {MOCK_DRIVERS.map((d) => (
              <li
                key={d.driver}
                className="app-card p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-semibold text-ink">{d.driver}</p>
                  <span className="text-sm font-bold tabular-nums text-accent-dark">{d.severity}</span>
                </div>
                <p className="mt-2 text-sm text-warm-600">{d.prevalence}</p>
                <p className="mt-2 text-xs text-warm-500">Suggested owner lens: {d.ownerHint}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
