import { OBJECTIONS } from '@/lib/landing/content'

export default function Objections() {
  return (
    <section id="why-now" className="section-padding bg-cream">
      <div className="container-wide">
        <h2 className="text-section font-bold text-ink text-center max-w-2xl mx-auto">
          Why This Matters Now
        </h2>
        <div className="mt-16 grid sm:grid-cols-2 gap-5 lg:gap-6">
          {OBJECTIONS.map((b) => (
            <div
              key={b.quote}
              className="rounded-2xl border-l-4 border-accent bg-paper p-6 md:p-7 hover:shadow-sm transition-shadow"
            >
              <p className="font-semibold text-ink">&ldquo;{b.quote}&rdquo;</p>
              <p className="mt-4 text-sm text-warm-600 leading-relaxed">{b.response}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
