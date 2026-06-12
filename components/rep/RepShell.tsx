'use client'

import AppShell from '@/components/app/AppShell'
import { RepProvider } from '@/components/rep/RepProvider'
import RepSwitcher from '@/components/rep/RepSwitcher'
import { DEMOTECH_CYCLE } from '@/lib/data/demotech/config'

export default function RepShell({ children }: { children: React.ReactNode }) {
  return (
    <RepProvider>
      <AppShell
        portal="rep"
        cycle={{
          id: DEMOTECH_CYCLE.id,
          label: DEMOTECH_CYCLE.label,
          period: DEMOTECH_CYCLE.period,
        }}
        topbarExtra={<RepSwitcher />}
      >
        {children}
      </AppShell>
    </RepProvider>
  )
}
