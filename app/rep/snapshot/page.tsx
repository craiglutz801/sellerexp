'use client'

import SectionHeader from '@/components/app/SectionHeader'
import { useRep } from '@/components/rep/RepProvider'

function BarCompare({ label, yours, org }: { label: string; yours: number; org: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="font-medium text-ink">{label}</span>
        <span className="text-warm-500 tabular-nums">
          You <span className="font-semibold text-ink">{yours}</span> · Org {org}
        </span>
      </div>
      <div className="relative h-2 rounded-full bg-warm-400/15 overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-warm-400/35"
          style={{ width: `${org}%` }}
        />
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-accent-dark"
          style={{ width: `${yours}%` }}
        />
      </div>
    </div>
  )
}

export default function RepSnapshotPage() {
  const { snapshot, response } = useRep()

  return (
    <>
      <SectionHeader
        eyebrow="My snapshot"
        title="Your seller environment at a glance — compared to DemoTech overall."
        description={`${snapshot.title} · ${snapshot.teamSegment} · ${snapshot.location}. Only you see this view.`}
      />

      <div className="grid gap-6 lg:grid-cols-3 mb-12">
        <div className="app-card p-6 lg:col-span-1">
          <p className="app-eyebrow text-warm-500">Overall</p>
          <p className="text-5xl font-semibold tabular-nums mt-2">{snapshot.overallScore}</p>
          <p className="text-sm text-warm-600 mt-1">vs org {snapshot.orgOverallScore}</p>
        </div>
        <div className="app-card p-6 lg:col-span-2">
          <p className="app-eyebrow text-warm-500">What's working</p>
          <ul className="mt-3 space-y-2">
            {snapshot.strengths.map((s) => (
              <li key={s} className="text-sm text-warm-600 flex gap-2">
                <span className="text-emerald-600 font-bold">+</span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="section-title mb-6">Operating dimensions</h2>
        <div className="app-card p-6 space-y-5">
          {snapshot.pillarScores.map((p) => (
            <BarCompare key={p.key} label={p.label} yours={p.yours} org={p.org} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title mb-6">Stage confidence</h2>
        <div className="app-card p-6 space-y-5">
          {snapshot.stageScores.map((s) => (
            <BarCompare key={s.stage} label={s.stage} yours={s.yours} org={s.org} />
          ))}
        </div>
      </section>

      <section className="app-card p-6">
        <p className="app-eyebrow text-warm-500">Your words (private)</p>
        <blockquote className="mt-3 text-sm text-warm-600 leading-relaxed border-l-2 border-accent/50 pl-4">
          {response.L1}
        </blockquote>
        {response.L2 ? (
          <p className="mt-4 text-sm text-warm-600">
            <span className="font-semibold text-ink">Change you asked for:</span> {response.L2}
          </p>
        ) : null}
      </section>
    </>
  )
}
