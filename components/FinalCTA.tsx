import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section id="final-cta" className="section-padding bg-cream">
      <div className="container-narrow text-center">
        <h2 className="text-section font-bold text-ink max-w-2xl mx-auto">
          See What&apos;s Helping—or Preventing—Your Sellers From Winning
        </h2>
        <p className="mt-10 text-warm-600 text-lg max-w-xl mx-auto leading-relaxed">
          Book a 20-minute overview to see how SellerEXP can reveal the hidden friction inside your sales organization and turn seller insight into measurable operational improvement.
        </p>
        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#final-cta"
            className="inline-flex rounded-full bg-accent px-8 py-4 text-base font-semibold text-white hover:bg-accent-dark transition-colors"
          >
            Book a 20-Minute Overview
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex rounded-full border-2 border-ink px-8 py-4 text-base font-semibold text-ink hover:bg-ink hover:text-white transition-colors"
          >
            See How It Works
          </Link>
        </div>
      </div>
    </section>
  )
}
