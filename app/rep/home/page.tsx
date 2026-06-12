'use client'

import Link from 'next/link'
import SectionHeader from '@/components/app/SectionHeader'
import KitModuleCard from '@/components/rep/KitModuleCard'
import { useRep } from '@/components/rep/RepProvider'
import { ArrowRight, Lock, Sparkles } from 'lucide-react'

export default function RepHomePage() {
  const { snapshot, kit } = useRep()
  const nextModule = kit.modules.find((m) => m.status !== 'completed')
  const completedCount = kit.modules.filter((m) => m.status === 'completed').length

  return (
    <>
      <SectionHeader
        eyebrow="Your private seller center"
        title={`Welcome back — here's help built for you, not a generic training catalog.`}
        description="This space is yours alone. Leadership sees org trends from the Q2 pulse — never your individual quotes or kit activity."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="app-card-accent lg:col-span-2 p-6 md:p-8">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft ring-1 ring-accent/25">
              <Sparkles className="h-5 w-5 text-accent-dark" strokeWidth={1.75} />
            </span>
            <div>
              <p className="app-eyebrow">Personal acknowledgment</p>
              <p className="mt-3 text-base text-ink leading-relaxed">{kit.acknowledgment}</p>
            </div>
          </div>
        </div>

        <div className="app-card p-6 flex flex-col">
          <p className="app-eyebrow text-warm-500">Your snapshot</p>
          <p className="mt-3 text-4xl font-semibold tabular-nums text-ink">{snapshot.overallScore}</p>
          <p className="text-sm text-warm-600 mt-1">Seller experience score</p>
          <p className="text-xs text-warm-500 mt-2">Org average: {snapshot.orgOverallScore}</p>
          <div className="mt-auto pt-6">
            <Link
              href="/rep/snapshot"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-dark hover:text-ink"
            >
              See full breakdown <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="section-title">Your focus areas</h2>
            <p className="text-sm text-warm-600 mt-1">Top 3 dimensions where targeted help will move the needle.</p>
          </div>
          <Link
            href="/rep/kit"
            className="inline-flex items-center rounded-full bg-accent-dark px-5 py-2.5 text-sm font-semibold text-white hover:bg-ink transition-colors"
          >
            Open enablement kit
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {kit.focusAreas.map((area) => (
            <div key={area.key} className="app-card p-5">
              <p className="text-xs font-semibold text-accent-dark uppercase tracking-wide">{area.label}</p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-2xl font-semibold tabular-nums">{area.score}</span>
                <span className="text-sm text-warm-500">/ 100 · org {area.orgAverage}</span>
              </div>
              <p className="mt-3 text-sm text-warm-600 leading-relaxed">{area.empathyLine}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="section-title mb-2">Continue learning</h2>
        <p className="text-sm text-warm-600 mb-6">
          {completedCount} of {kit.modules.length} modules complete · ~{kit.totalMinutes} min total
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {kit.modules.slice(0, 2).map((mod) => (
            <KitModuleCard key={mod.id} module={mod} />
          ))}
        </div>
        {nextModule ? (
          <p className="mt-4 text-sm text-warm-600">
            Up next: <span className="font-medium text-ink">{nextModule.title}</span>
          </p>
        ) : null}
      </section>

      {kit.managerPrompt ? (
        <section className="mt-12 app-card p-6 border-dashed">
          <div className="flex items-start gap-3">
            <Lock className="h-5 w-5 text-warm-500 shrink-0 mt-0.5" strokeWidth={1.75} />
            <div>
              <p className="text-sm font-semibold text-ink">Optional — share with your manager</p>
              <p className="mt-2 text-sm text-warm-600 leading-relaxed">{kit.managerPrompt}</p>
              <p className="mt-2 text-xs text-warm-500">You control if and when this is shared. Nothing is sent automatically.</p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
