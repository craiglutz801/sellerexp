'use client'

import SectionHeader from '@/components/app/SectionHeader'
import KitModuleCard from '@/components/rep/KitModuleCard'
import { useRep } from '@/components/rep/RepProvider'

export default function RepKitPage() {
  const { kit } = useRep()
  const inProgress = kit.modules.filter((m) => m.status === 'in_progress')
  const notStarted = kit.modules.filter((m) => m.status === 'not_started')
  const completed = kit.modules.filter((m) => m.status === 'completed')

  return (
    <>
      <SectionHeader
        eyebrow="Enablement kit"
        title="Direct help for the friction you flagged — not another survey readout."
        description={`Personalized from your ${kit.cycleLabel} responses. Each module is short, practical, and tied to a specific gap.`}
      />

      <div className="app-card p-6 mb-10 grid gap-4 sm:grid-cols-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-warm-500">Modules</p>
          <p className="text-2xl font-semibold tabular-nums mt-1">{kit.modules.length}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-warm-500">Est. time</p>
          <p className="text-2xl font-semibold tabular-nums mt-1">{kit.totalMinutes} min</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-warm-500">Focus areas</p>
          <p className="text-sm font-medium text-ink mt-2">{kit.focusAreas.map((f) => f.label).join(' · ')}</p>
        </div>
      </div>

      {inProgress.length > 0 ? (
        <section className="mb-12">
          <h2 className="section-title mb-4">In progress</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {inProgress.map((mod) => (
              <KitModuleCard key={mod.id} module={mod} />
            ))}
          </div>
        </section>
      ) : null}

      {notStarted.length > 0 ? (
        <section className="mb-12">
          <h2 className="section-title mb-4">Up next</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {notStarted.map((mod) => (
              <KitModuleCard key={mod.id} module={mod} />
            ))}
          </div>
        </section>
      ) : null}

      {completed.length > 0 ? (
        <section>
          <h2 className="section-title mb-4">Completed</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {completed.map((mod) => (
              <KitModuleCard key={mod.id} module={mod} />
            ))}
          </div>
        </section>
      ) : null}

      <div className="mt-12 app-card p-6 bg-cream/30">
        <p className="text-sm font-semibold text-ink">How this stays private</p>
        <p className="mt-2 text-sm text-warm-600 leading-relaxed max-w-2xl">
          Your kit is generated from your survey scores and optional open text. Managers and executives see
          aggregated themes (e.g. “31% mention deal desk delays”) — not which modules you opened or your
          verbatim comments.
        </p>
      </div>
    </>
  )
}
