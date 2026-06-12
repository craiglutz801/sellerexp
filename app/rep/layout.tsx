import type { Metadata } from 'next'
import RepShell from '@/components/rep/RepShell'

export const metadata: Metadata = {
  title: 'Seller center',
}

export default function RepLayout({ children }: { children: React.ReactNode }) {
  return <RepShell>{children}</RepShell>
}
