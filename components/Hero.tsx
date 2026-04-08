import Link from 'next/link'

const BULLETS = [
  'Identify the operational barriers slowing down sellers',
  'Measure the health of your revenue organization',
  'Turn seller insight into revenue-driving improvements',
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink bg-hero-gradient bg-[length:100%_100%] section-padding">
      <div className="relative container-narrow text-center">
        <h1 className="text-display font-bold text-white tracking-tight">
          Know Whether Your Sales Organization Is Actually Set Up to Win
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-warm-400 max-w-2xl mx-auto leading-relaxed">
          SellerEXP gives revenue leaders a continuous intelligence system for measuring sales org health—revealing the operational friction, misalignment, and support gaps that slow sellers down.
        </p>
        <ul className="mt-12 space-y-4 text-left max-w-md mx-auto text-warm-400">
          {BULLETS.map((text, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" aria-hidden />
              <span>{text}</span>
            </li>
          ))}
        </ul>
        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#final-cta"
            className="inline-flex rounded-full bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-dark transition-colors"
          >
            Book a 20-Minute Overview
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex rounded-full border-2 border-warm-500 px-8 py-4 text-base font-semibold text-white hover:border-warm-400 hover:bg-white/5 transition-colors"
          >
            See How It Works
          </Link>
        </div>
        <p className="mt-12 text-sm text-warm-500 uppercase tracking-wider">
          Built for modern revenue organizations with 100+ sellers
        </p>
      </div>
    </section>
  )
}
