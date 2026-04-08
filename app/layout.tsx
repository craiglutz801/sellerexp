import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SellerEXP — Revenue Organization Intelligence',
  description: 'SellerEXP helps revenue leaders measure the health of their sales organization by revealing operational friction, misalignment, and support gaps that slow sellers down.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="min-h-screen font-sans bg-paper text-warm-800">{children}</body>
    </html>
  )
}
