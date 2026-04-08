import Link from 'next/link'
import SectionHeader from '@/components/app/SectionHeader'
import ImpactEffortMatrix from '@/components/app/recommendations/ImpactEffortMatrix'
import RecommendationDetailCard from '@/components/app/recommendations/RecommendationDetailCard'
import { MOCK_RECOMMENDATIONS } from '@/lib/data/mock/platform'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Recommendations',
}

export default function RecommendationsPage() {
  return (
    <>
      <SectionHeader
        eyebrow="Recommendations"
        title="Prioritize manager coaching and objection-handling enablement"
        description="Each recommendation ties to business impact, ownership, effort, and evidence. This is the decision-support layer — not generic HR action items."
      />

      <div className="grid gap-8 lg:grid-cols-5 mb-12">
        <div className="lg:col-span-2">
          <ImpactEffortMatrix items={MOCK_RECOMMENDATIONS} />
        </div>
        <div className="lg:col-span-3 app-card p-6">
          <h3 className="text-sm font-semibold text-ink">How to use this view</h3>
          <ul className="mt-4 space-y-3 text-sm text-warm-600 leading-relaxed">
            <li>Start with P0 items tied to the largest benchmark gaps and stage-level friction.</li>
            <li>Assign a single accountable owner; split execution across partners.</li>
            <li>Attach one follow-up metric per initiative so progress is measurable next cycle.</li>
            <li>In production, open evidence drawers for quotes, score trends, and affected segments.</li>
          </ul>
        <div className="mt-6 pt-5 border-t border-warm-400/30">
          <p className="text-sm text-warm-600">
            Once priorities are approved, move work into assigned execution items.
          </p>
          <Link
            href="/app/actions"
            className="inline-flex mt-3 items-center rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white hover:bg-accent-dark transition-colors"
          >
            Open Action Items
          </Link>
        </div>
        </div>
      </div>

      <div className="space-y-8">
        {MOCK_RECOMMENDATIONS.map((rec) => (
          <RecommendationDetailCard key={rec.id} rec={rec} />
        ))}
      </div>
    </>
  )
}
