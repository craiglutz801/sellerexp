import { OPERATING_DIMENSIONS, STAGE_CONFIDENCE } from '@/lib/landing/content'
import SectionEyebrow from '@/components/SectionEyebrow'

export default function WhatWeMeasure() {
  return (
    <section id="what-we-measure" className="section-padding bg-ink text-white">
      <div className="container-wide">
        <SectionEyebrow>
          <span className="text-accent-light">What we measure</span>
        </SectionEyebrow>
        <h2 className="text-section font-bold text-center max-w-2xl mx-auto">
          The Key Drivers of Seller Performance
        </h2>
        <p className="mt-8 text-warm-400 text-lg max-w-xl mx-auto text-center leading-relaxed">
          These dimensions power both organizational diagnostics and individual enablement kits.
        </p>

        <div className="mt-16">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-warm-500 text-center mb-8">
            Operating environment
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {OPERATING_DIMENSIONS.map((d) => (
              <div
                key={d.label}
                className="rounded-xl bg-ink-light border border-white/10 p-6 hover:border-accent/40 transition-colors"
              >
                <h4 className="font-semibold text-white text-sm leading-snug">{d.label}</h4>
                <p className="mt-2 text-xs text-warm-400 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-ink-light/50 p-8 md:p-10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-light mb-6 text-center">
            Stage confidence signals
          </h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {STAGE_CONFIDENCE.map((stage) => (
              <span
                key={stage}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-warm-400"
              >
                {stage}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-warm-500 text-center max-w-xl mx-auto">
            Stage confidence helps personalize kits — support needs depend on where confidence breaks down in the
            sales motion.
          </p>
        </div>
      </div>
    </section>
  )
}
