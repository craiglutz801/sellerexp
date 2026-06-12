'use client'

import { Menu } from 'lucide-react'
import type { MeasurementCycle } from '@/lib/types/platform'
import PortalSwitcher from '@/components/app/PortalSwitcher'

type Props = {
  cycle: MeasurementCycle
  portalBadge: string
  onMenu: () => void
  extra?: React.ReactNode
}

export default function AppTopbar({ cycle, portalBadge, onMenu, extra }: Props) {
  return (
    <header className="sticky top-0 z-30 h-[76px] border-b border-accent/20 bg-white/85 backdrop-blur-md shadow-[0_1px_0_rgba(124,185,232,0.12)]">
      <div className="h-full px-4 sm:px-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <button
            type="button"
            onClick={onMenu}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-warm-400/30 text-ink hover:bg-accent-soft/50 transition-colors"
            aria-label="Open navigation"
          >
            <Menu className="h-5 w-5" strokeWidth={1.75} />
          </button>
          <div className="min-w-0">
            <p className="app-eyebrow">Measurement cycle</p>
            <p className="text-[0.9375rem] font-semibold text-ink truncate tracking-tight">{cycle.label}</p>
            <p className="text-xs text-warm-500 truncate">{cycle.period}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          {extra}
          <PortalSwitcher />
          <span className="hidden sm:inline rounded-full border border-accent/25 bg-accent-soft/60 px-3 py-1.5 text-xs font-semibold text-accent-dark whitespace-nowrap">
            {portalBadge}
          </span>
        </div>
      </div>
    </header>
  )
}
