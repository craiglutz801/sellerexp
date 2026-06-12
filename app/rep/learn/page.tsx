'use client'

import Link from 'next/link'
import SectionHeader from '@/components/app/SectionHeader'
import { useRep } from '@/components/rep/RepProvider'

const PATH_STEPS = [
  { week: 1, title: 'Acknowledge & orient', desc: 'Review your snapshot and focus areas.' },
  { week: 2, title: 'Core modules', desc: 'Complete playbooks and checklists in your kit.' },
  { week: 3, title: 'Live practice', desc: 'Attend objection lab or manager ride-along.' },
  { week: 4, title: 'Check-in', desc: 'Short pulse: did these modules help?' },
]

export default function RepLearnPage() {
  const { kit, snapshot } = useRep()
  const done = kit.modules.filter((m) => m.status === 'completed').length
  const progress = kit.modules.length ? Math.round((done / kit.modules.length) * 100) : 0

  return (
    <>
      <SectionHeader
        eyebrow="Learning path"
        title="A four-week path — not a mandatory curriculum."
        description="Work at your pace. Skip what you already do well. The path follows your kit focus areas."
      />

      <div className="app-card p-6 md:p-8 mb-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="app-eyebrow text-warm-500">Path progress</p>
            <p className="text-3xl font-semibold tabular-nums mt-2">{progress}%</p>
          </div>
          <Link
            href="/rep/kit"
            className="text-sm font-semibold text-accent-dark hover:text-ink"
          >
            Go to kit →
          </Link>
        </div>
        <div className="mt-4 h-2 rounded-full bg-warm-400/15 overflow-hidden">
          <div className="h-full rounded-full bg-accent-dark" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {PATH_STEPS.map((step, i) => (
          <div key={step.week} className="app-card p-5 relative">
            <span className="text-xs font-bold text-accent-dark">Week {step.week}</span>
            <h3 className="mt-2 font-semibold text-ink">{step.title}</h3>
            <p className="mt-2 text-sm text-warm-600">{step.desc}</p>
            {i === 0 ? (
              <p className="mt-3 text-xs text-emerald-700 font-medium">Current step</p>
            ) : null}
          </div>
        ))}
      </div>

      <section className="mt-12 app-card p-6">
        <p className="text-sm font-semibold text-ink">Personalized for {snapshot.title}</p>
        <p className="mt-2 text-sm text-warm-600">
          Primary focus: {kit.focusAreas.map((f) => f.label.toLowerCase()).join(', ')}.
          Next cycle we'll ask if these modules helped — your answer stays private.
        </p>
      </section>
    </>
  )
}
