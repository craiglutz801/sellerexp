'use client'

import AppShell from '@/components/app/AppShell'
import { DEMOTECH_CYCLE } from '@/lib/data/demotech/config'

export default function ExecShell({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      portal="exec"
      cycle={{
        id: DEMOTECH_CYCLE.id,
        label: DEMOTECH_CYCLE.label,
        period: DEMOTECH_CYCLE.period,
      }}
    >
      {children}
    </AppShell>
  )
}
