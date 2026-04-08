import type { Metadata } from 'next'
import AppShell from '@/components/app/AppShell'
import { MOCK_CYCLE } from '@/lib/data/mock/platform'

export const metadata: Metadata = {
  title: {
    template: '%s · SellerEXP',
    default: 'Platform',
  },
  description:
    'Revenue Organization Intelligence — diagnose operational friction, benchmark performance, and prioritize leadership actions.',
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return <AppShell cycle={MOCK_CYCLE}>{children}</AppShell>
}
