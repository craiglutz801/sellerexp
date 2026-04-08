const BLOCKS = [
  {
    quote: 'We already track performance metrics.',
    response: 'Performance metrics show outcomes. SellerEXP shows the operating conditions causing them.',
  },
  {
    quote: 'We already collect feedback.',
    response: 'Most feedback programs are episodic, fragmented, and hard to act on. SellerEXP turns seller insight into continuous operational intelligence.',
  },
  {
    quote: 'This sounds like an HR or survey tool.',
    response: 'SellerEXP is designed for CROs and revenue leaders. It measures the revenue organization, not employee engagement.',
  },
  {
    quote: 'We already know our biggest issues.',
    response: 'Most leadership teams know some issues. Few can measure them systematically, prioritize them objectively, and track improvement over time.',
  },
]

export default function Objections() {
  return (
    <section id="why-now" className="section-padding bg-paper">
      <div className="container-wide">
        <h2 className="text-section font-bold text-ink text-center max-w-2xl mx-auto">
          Why This Matters Now
        </h2>
        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {BLOCKS.map((b) => (
            <div
              key={b.quote}
              className="rounded-2xl border-l-4 border-accent bg-cream/50 p-6 md:p-8"
            >
              <p className="font-semibold text-ink text-lg">&ldquo;{b.quote}&rdquo;</p>
              <p className="mt-4 text-warm-600 leading-relaxed">{b.response}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
