'use client'

import { useState } from 'react'
import BenchmarkBars from '@/components/app/charts/BenchmarkBars'

type Row = { dimension: string; you: number; peerP50: number; peerP75: number }

type Props = {
  external: Row[]
  internal: Row[]
}

export default function BenchmarkExplorer({ external, internal }: Props) {
  const [mode, setMode] = useState<'external' | 'internal'>('external')

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm font-medium text-warm-600">Compare against</span>
        <div className="inline-flex rounded-full border border-warm-400/40 bg-white p-1 shadow-sm">
          <button
            type="button"
            onClick={() => setMode('external')}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              mode === 'external' ? 'bg-ink text-white' : 'text-warm-600 hover:text-ink'
            }`}
          >
            External peers
          </button>
          <button
            type="button"
            onClick={() => setMode('internal')}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              mode === 'internal' ? 'bg-ink text-white' : 'text-warm-600 hover:text-ink'
            }`}
          >
            Internal org
          </button>
        </div>
      </div>
      <p className="text-sm text-warm-600 max-w-3xl leading-relaxed">
        {mode === 'external'
          ? 'Benchmarks vs anonymized peer cohort. Label sample size, methodology, and confidence explicitly — never overclaim precision.'
          : 'Internal view compares your score to company average and top-performing teams. Use this to find pockets of excellence to replicate.'}
      </p>
      <BenchmarkBars
        data={mode === 'external' ? external : internal}
        midLabel={mode === 'external' ? 'Peer median' : 'Company avg'}
        highLabel={mode === 'external' ? 'Peer 75th' : 'Top teams'}
      />
    </div>
  )
}
