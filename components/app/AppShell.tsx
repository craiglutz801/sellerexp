'use client'

import { useState } from 'react'
import type { MeasurementCycle } from '@/lib/types/platform'
import AppSidebar from '@/components/app/AppSidebar'
import AppTopbar from '@/components/app/AppTopbar'

type Props = {
  cycle: MeasurementCycle
  children: React.ReactNode
}

export default function AppShell({ cycle, children }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-paper flex text-ink">
      <AppSidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <div className="flex-1 flex flex-col min-w-0 md:pl-0 app-shell-main">
        <AppTopbar cycle={cycle} onMenu={() => setMobileOpen(true)} />
        <div className="flex-1 px-4 py-8 sm:px-6 md:px-8 lg:px-10">
          <div className="max-w-[1440px] mx-auto w-full">{children}</div>
        </div>
      </div>
    </div>
  )
}
