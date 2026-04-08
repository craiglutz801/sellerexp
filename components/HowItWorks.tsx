const STEPS = [
  {
    title: 'Gather Seller Insight',
    body: 'Structured programs collect quantitative and qualitative feedback from sellers about the systems, processes, and support structures that affect performance.',
  },
  {
    title: 'Diagnose the Organization',
    body: 'SellerEXP identifies patterns, friction points, operational gaps, and areas of misalignment across the revenue organization.',
  },
  {
    title: 'Deliver Leadership Intelligence',
    body: 'Executives receive dashboards, summaries, benchmark views, and AI-guided insight into what is helping—or preventing—sellers from winning.',
  },
  {
    title: 'Improve and Track Progress',
    body: 'Leaders make targeted operational improvements and measure whether the seller experience improves over time.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-paper">
      <div className="container-wide">
        <h2 className="text-section font-bold text-ink text-center max-w-2xl mx-auto">
          A Continuous Intelligence Loop for Revenue Organizations
        </h2>
        <div className="mt-20 grid md:grid-cols-4 gap-6 lg:gap-8">
          {STEPS.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="h-full rounded-2xl border-l-4 border-accent bg-cream/50 p-6 md:p-8 pl-8">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 text-warm-600 leading-relaxed">{step.body}</p>
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-warm-400/40 -translate-y-1/2" aria-hidden />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
