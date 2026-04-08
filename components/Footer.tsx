import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-warm-400/30 bg-paper py-12">
      <div className="container-max section-padding flex flex-col sm:flex-row items-center justify-between gap-6 py-8">
        <Link href="/" className="text-lg font-semibold text-ink">
          SellerEXP
        </Link>
        <nav className="flex items-center gap-8 text-sm text-warm-600">
          <a href="#solution" className="hover:text-ink transition-colors">Product</a>
          <a href="#how-it-works" className="hover:text-ink transition-colors">How It Works</a>
          <a href="#who-its-for" className="hover:text-ink transition-colors">Who It&apos;s For</a>
          <a href="#roi" className="hover:text-ink transition-colors">ROI</a>
          <a href="#final-cta" className="hover:text-ink transition-colors">Book Overview</a>
        </nav>
        <p className="text-sm text-warm-500">
          Revenue Organization Intelligence
        </p>
      </div>
    </footer>
  )
}
