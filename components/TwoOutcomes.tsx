import SectionEyebrow from '@/components/SectionEyebrow'

const LEADERSHIP = [
  'Org health score and trends',
  'Segment and role-level diagnostics',
  'Theme clusters and friction drivers',
  'Benchmark gaps',
  'Prioritized recommendations',
  'Owners, effort, impact, and urgency',
]

const SELLERS = [
  'Personal snapshot',
  'Top focus areas',
  'Curated resources',
  'Short learning modules',
  'Optional manager prompts',
  'Progress over time',
]

export default function TwoOutcomes() {
  return (
    <section id="two-outcomes" className="section-padding bg-paper">
      <div className="container-wide">
        <SectionEyebrow>One diagnostic, two outcomes</SectionEyebrow>
        <h2 className="text-section font-bold text-ink text-center max-w-2xl mx-auto">
          One Diagnostic System. Two Powerful Outcomes.
        </h2>
        <p className="mt-6 text-lg text-warm-600 text-center max-w-2xl mx-auto">
          The same seller signals power executive visibility and individual enablement — without compromising trust or
          privacy.
        </p>
        <div className="mt-16 grid lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="rounded-2xl border border-warm-400/25 bg-cream/50 p-8 md:p-10">
            <p className="text-xs font-bold uppercase tracking-wider text-warm-500">For leadership</p>
            <h3 className="mt-2 text-xl font-semibold text-ink">Leadership Intelligence</h3>
            <p className="mt-3 text-warm-600 leading-relaxed">
              See the operating conditions helping or hurting sales performance.
            </p>
            <ul className="mt-6 space-y-2.5">
              {LEADERSHIP.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warm-400" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#how-it-works" className="inline-block mt-8 text-sm font-semibold text-accent-dark hover:text-ink">
              See how leadership uses it →
            </a>
          </div>
          <div className="rounded-2xl border-2 border-accent/35 bg-gradient-to-br from-accent-soft/40 to-paper p-8 md:p-10 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-accent-dark">For IC sellers</p>
            <h3 className="mt-2 text-xl font-semibold text-ink">Seller Enablement</h3>
            <p className="mt-3 text-warm-600 leading-relaxed">
              Receive a private kit built from your own feedback, confidence gaps, and role context.
            </p>
            <ul className="mt-6 space-y-2.5">
              {SELLERS.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#enablement-kits" className="inline-block mt-8 text-sm font-semibold text-accent-dark hover:text-ink">
              Explore enablement kits →
            </a>
          </div>
        </div>
        <p className="mt-12 text-center text-lg font-semibold text-ink max-w-xl mx-auto">
          Same friction signal. Two outcomes: fix the system and help the seller.
        </p>
      </div>
    </section>
  )
}
