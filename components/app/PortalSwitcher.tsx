'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowLeftRight } from 'lucide-react'
import { EXEC_PORTAL } from '@/lib/nav/exec'
import { REP_PORTAL } from '@/lib/nav/rep'

export default function PortalSwitcher() {
  const pathname = usePathname()
  const isRep = pathname.startsWith('/rep')
  const target = isRep ? EXEC_PORTAL : REP_PORTAL

  return (
    <Link
      href={target.homeHref}
      className="inline-flex items-center gap-2 rounded-full border border-warm-400/30 bg-white px-3 py-1.5 text-xs font-semibold text-warm-600 hover:border-accent/40 hover:text-ink transition-colors"
    >
      <ArrowLeftRight className="h-3.5 w-3.5" strokeWidth={1.75} />
      Switch to {target.name}
    </Link>
  )
}
