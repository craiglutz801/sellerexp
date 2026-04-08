'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Activity,
  BarChart2,
  FolderKanban,
  LayoutDashboard,
  Lightbulb,
  ListChecks,
  MessageSquare,
  Settings,
  Target,
} from 'lucide-react'

const NAV = [
  { href: '/app/overview', label: 'Overview', icon: LayoutDashboard },
  { href: '/app/diagnostics', label: 'Diagnostics', icon: Activity },
  { href: '/app/insights', label: 'Insights', icon: Lightbulb },
  { href: '/app/recommendations', label: 'Recommendations', icon: Target },
  { href: '/app/actions', label: 'Actions', icon: ListChecks },
  { href: '/app/benchmarks', label: 'Benchmarks', icon: BarChart2 },
  { href: '/app/responses', label: 'Responses', icon: MessageSquare },
  { href: '/app/programs', label: 'Programs', icon: FolderKanban },
  { href: '/app/settings', label: 'Settings', icon: Settings },
] as const

type Props = {
  mobileOpen: boolean
  onClose: () => void
}

export default function AppSidebar({ mobileOpen, onClose }: Props) {
  const pathname = usePathname()

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm md:hidden transition-opacity ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileOpen}
        onClick={onClose}
      />
      <aside
        className={`fixed md:sticky top-0 z-50 h-screen w-[260px] shrink-0 border-r border-warm-400/30 bg-paper/95 backdrop-blur-md flex flex-col transition-transform md:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="h-[76px] px-6 flex items-center border-b border-warm-400/30">
          <Link href="/" className="text-lg font-semibold tracking-tight text-ink" onClick={onClose}>
            SellerEXP
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
          {NAV.map(({ href, label, icon: Icon }) => {
            const active = pathname === href || pathname.startsWith(`${href}/`)
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={`flex items-center gap-3 rounded-xl py-2.5 pr-3 pl-2.5 text-sm font-medium transition-colors border-l-2 ${
                  active
                    ? 'border-accent bg-cream text-ink shadow-sm'
                    : 'border-transparent text-warm-600 hover:bg-cream/60 hover:text-ink'
                }`}
              >
                <Icon
                  className={`h-4 w-4 shrink-0 ${active ? 'text-accent-dark' : 'opacity-80'}`}
                  strokeWidth={1.75}
                />
                {label}
              </Link>
            )
          })}
        </nav>
        <div className="p-4 border-t border-warm-400/30">
          <Link
            href="/"
            className="text-xs font-medium text-warm-500 hover:text-ink transition-colors"
            onClick={onClose}
          >
            ← Marketing site
          </Link>
        </div>
      </aside>
    </>
  )
}
