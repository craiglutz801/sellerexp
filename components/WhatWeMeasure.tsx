const DIMENSIONS = [
  { label: 'Sales process effectiveness', desc: 'How well the sales process helps sellers move deals forward.' },
  { label: 'Technology and tool experience', desc: 'Whether tools and systems support selling rather than slow it down.' },
  { label: 'Sales enablement quality', desc: 'Training, content, and resources that help reps perform.' },
  { label: 'Marketing alignment', desc: 'How well marketing supports pipeline and seller needs.' },
  { label: 'Lead quality and pipeline support', desc: 'Whether leads and pipeline are set up for success.' },
  { label: 'Compensation clarity', desc: 'How clear and fair comp and incentives are to sellers.' },
  { label: 'Internal support systems', desc: 'Deal support, operations, and cross-functional help.' },
  { label: 'Organizational alignment', desc: 'Strategy, goals, and priorities understood across the org.' },
]

export default function WhatWeMeasure() {
  return (
    <section id="what-we-measure" className="section-padding bg-ink text-white">
      <div className="container-wide">
        <h2 className="text-section font-bold text-center max-w-2xl mx-auto">
          The Key Drivers of Seller Performance
        </h2>
        <p className="mt-8 text-warm-400 text-lg max-w-xl mx-auto text-center leading-relaxed">
          SellerEXP evaluates the operational dimensions that have the biggest impact on whether sellers can perform at a high level.
        </p>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DIMENSIONS.map((d) => (
            <div
              key={d.label}
              className="rounded-xl bg-ink-light border border-white/10 p-6 hover:border-accent/40 transition-colors"
            >
              <div className="h-8 w-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent-light font-bold text-sm">
                —
              </div>
              <h3 className="mt-4 font-semibold text-white">{d.label}</h3>
              <p className="mt-2 text-sm text-warm-400 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
