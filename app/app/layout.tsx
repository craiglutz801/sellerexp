import type { Metadata } from 'next'
import ExecShell from '@/components/app/ExecShell'

export const metadata: Metadata = {
  title: 'Leadership',
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return <ExecShell>{children}</ExecShell>
}
