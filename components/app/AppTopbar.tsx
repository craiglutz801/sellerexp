'use client'

import { Menu } from 'lucide-react'
import type { MeasurementCycle } from '@/lib/types/platform'

type Props = {
  cycle: MeasurementCycle
  onMenu: () => void
}

export default function AppTopbar({ cycle, onMenu }: Props) {
  return (
    <header className="sticky top-0 z-30 h-[76px] border-b border-accent/25 bg-paper/90 backdrop-blur-md">
      <div className="h-full px-4 sm:px-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <button
            type="button"
            onClick={onMenu}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-warm-400/40 text-ink hover:bg-cream/80 transition-colors"
            aria-label="Open navigation"
          >
            <Menu className="h-5 w-5" strokeWidth={1.75} />
          </button>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-dark/90">Measurement</p>
            <p className="text-sm font-semibold text-ink truncate">{cycle.label}</p>
            <p className="text-xs text-warm-600 truncate">{cycle.period}</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <span className="rounded-full border border-warm-400/40 bg-white px-3 py-1.5 text-xs font-medium text-warm-600">
            Demo workspace
          </span>
          <span className="rounded-full bg-accent/15 text-ink px-3 py-1.5 text-xs font-semibold">
            Mock data
          </span>
        </div>
      </div>
    </header>
  )
}
