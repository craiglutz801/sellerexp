const MEASURED = [
  'Pipeline',
  'Win rates',
  'Forecast',
  'Quota',
  'Deal velocity',
]

const HIDDEN = [
  'Friction',
  'Tool overload',
  'Misalignment',
  'Enablement quality',
  'Support effectiveness',
  'Organizational health',
]

export default function CategoryInsight() {
  return (
    <section id="category-insight" className="section-padding bg-paper">
      <div className="container-wide">
        <h2 className="text-section font-bold text-ink text-center max-w-3xl mx-auto">
          Revenue Teams Measure Outcomes. Almost None Measure the Environment Producing Them.
        </h2>
        <div className="mt-12 max-w-2xl mx-auto space-y-6 text-warm-600 text-lg leading-relaxed text-center">
          <p>
            Revenue leaders track pipeline, forecast accuracy, win rates, quota attainment, and deal velocity.
          </p>
          <p>
            But those metrics only show the result. They do not show whether the sales organization itself is structurally helping sellers succeed—or quietly making success harder.
          </p>
          <p>
            That means the biggest operational barriers often stay hidden: sales process friction, tool inefficiencies, enablement gaps, marketing misalignment, unclear compensation, internal support breakdowns, territory or coverage imbalance. By the time these issues show up in revenue metrics, the damage is already underway.
          </p>
        </div>
        <div className="mt-20 grid md:grid-cols-2 gap-6 lg:gap-10">
          <div className="rounded-2xl bg-cream p-8 md:p-10 border border-warm-400/20">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-warm-500 mb-6">
              What leaders already measure
            </h3>
            <ul className="space-y-3">
              {MEASURED.map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink font-medium">
                  <span className="h-2 w-2 rounded-full bg-warm-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-accent/10 border border-accent/30 p-8 md:p-10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-dark mb-6">
              What they usually cannot see
            </h3>
            <ul className="space-y-3">
              {HIDDEN.map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink font-medium">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
