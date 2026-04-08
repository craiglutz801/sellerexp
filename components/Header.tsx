'use client'

import Link from 'next/link'

const NAV = [
  { label: 'Product', href: '#solution' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: "Who It's For", href: '#who-its-for' },
  { label: 'ROI', href: '#roi' },
  { label: 'About', href: '#category-insight' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-paper/90 backdrop-blur-md border-b border-warm-400/30">
      <div className="container-max section-padding flex items-center justify-between gap-6 py-4 md:py-5">
        <Link href="/" className="text-lg font-semibold tracking-tight text-ink">
          SellerEXP
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-warm-600 hover:text-ink transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Link
          href="#final-cta"
          className="shrink-0 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-dark transition-colors"
        >
          Book Overview
        </Link>
      </div>
    </header>
  )
}
