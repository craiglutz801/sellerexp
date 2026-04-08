const CAPABILITIES = [
  { label: 'Seller Insight Collection', short: 'Structured programs collect feedback from the field.' },
  { label: 'Diagnostics', short: 'Identify patterns, friction points, and gaps.' },
  { label: 'Trend Analytics', short: 'Dashboards and summaries over time.' },
  { label: 'Benchmarking', short: 'Compare against peers and benchmarks.' },
  { label: 'AI Recommendations', short: 'Actionable, prioritized guidance.' },
]

export default function Solution() {
  return (
    <section id="solution" className="section-padding bg-cream">
      <div className="container-wide">
        <h2 className="text-section font-bold text-ink text-center max-w-2xl mx-auto">
          SellerEXP Is a Revenue Organization Intelligence Platform
        </h2>
        <div className="mt-10 max-w-2xl mx-auto space-y-4 text-warm-600 text-lg text-center">
          <p>
            SellerEXP helps leadership understand whether the sales organization is truly set up to win. The platform combines structured seller insight, operational diagnostics, advanced analytics, benchmarking, and AI-driven recommendations.
          </p>
          <p>
            The result is clear visibility into the health of the revenue organization—and a faster path to improvement.
          </p>
        </div>
        <p className="mt-12 text-center font-semibold text-ink text-lg">
          Not another survey tool. A system for diagnosing and improving sales org performance.
        </p>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {CAPABILITIES.map((cap, i) => (
            <div
              key={cap.label}
              className="group rounded-2xl bg-paper border border-warm-400/20 p-6 hover:border-accent/30 transition-colors"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent font-bold text-sm group-hover:bg-accent/25 transition-colors">
                {i + 1}
              </span>
              <h3 className="mt-5 font-semibold text-ink">{cap.label}</h3>
              <p className="mt-2 text-sm text-warm-600 leading-relaxed">{cap.short}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
