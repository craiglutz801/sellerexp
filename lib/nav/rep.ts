import type { LucideIcon } from 'lucide-react'
import { BookOpen, GraduationCap, Home, LineChart, Sparkles } from 'lucide-react'

export type NavItem = {
  href: string
  label: string
  icon: LucideIcon
}

export const REP_NAV: NavItem[] = [
  { href: '/rep/home', label: 'My home', icon: Home },
  { href: '/rep/kit', label: 'Enablement kit', icon: Sparkles },
  { href: '/rep/snapshot', label: 'My snapshot', icon: LineChart },
  { href: '/rep/learn', label: 'Learning path', icon: GraduationCap },
  { href: '/rep/resources', label: 'Resources', icon: BookOpen },
]

export const REP_PORTAL = {
  id: 'rep' as const,
  name: 'Seller center',
  homeHref: '/rep/home',
  badge: 'DemoTech · Private',
}
