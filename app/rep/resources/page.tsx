'use client'

import SectionHeader from '@/components/app/SectionHeader'
import { useRep } from '@/components/rep/RepProvider'

const RESOURCES = [
  { title: 'DemoTech demo platform — field guide', category: 'Tools', tag: 'Dogfooding' },
  { title: 'Enterprise security questionnaire — 2025 answers', category: 'Support', tag: 'Deal desk' },
  { title: 'Comp plan FAQ — Q2 2025', category: 'Compensation', tag: 'RevOps' },
  { title: 'Competitive talk tracks — Q2 refresh', category: 'Enablement', tag: 'Battlecards' },
  { title: 'CFO ROI calculator (Google Sheets)', category: 'Alignment', tag: 'Templates' },
  { title: 'SDR → AE handoff SOP', category: 'Process', tag: 'RevOps' },
]

export default function RepResourcesPage() {
  const { kit } = useRep()
  const focusKeys = new Set(kit.focusAreas.map((f) => f.label.toLowerCase()))

  return (
    <>
      <SectionHeader
        eyebrow="Resource library"
        title="Curated assets — prioritized for your focus areas."
        description="Company-approved content. Items matching your kit dimensions are highlighted."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {RESOURCES.map((r) => {
          const highlighted = focusKeys.has(r.category.toLowerCase())
          return (
            <article
              key={r.title}
              className={`app-card p-5 ${highlighted ? 'ring-2 ring-accent/30 bg-accent-soft/20' : ''}`}
            >
              {highlighted ? (
                <span className="text-[0.625rem] font-bold uppercase tracking-wider text-accent-dark">
                  Recommended for you
                </span>
              ) : (
                <span className="text-[0.625rem] font-bold uppercase tracking-wider text-warm-500">
                  {r.tag}
                </span>
              )}
              <h3 className="mt-2 font-semibold text-ink text-sm leading-snug">{r.title}</h3>
              <p className="mt-2 text-xs text-warm-500">{r.category}</p>
            </article>
          )
        })}
      </div>
    </>
  )
}
