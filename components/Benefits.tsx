const BENEFITS = [
  'Increase seller productivity',
  'Identify operational barriers earlier',
  'Improve rep retention',
  'Make better operational decisions',
  'Reduce blind spots across functions',
  'Continuously improve the seller experience',
]

export default function Benefits() {
  return (
    <section id="outcomes" className="section-padding bg-paper">
      <div className="container-narrow">
        <h2 className="text-section font-bold text-ink text-center max-w-2xl mx-auto">
          A Better Way to Understand and Improve the Sales Organization
        </h2>
        <p className="mt-10 text-warm-600 text-lg text-center">
          SellerEXP helps revenue leaders:
        </p>
        <ul className="mt-8 space-y-5 max-w-lg mx-auto">
          {BENEFITS.map((item) => (
            <li key={item} className="flex items-start gap-4">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-white" aria-hidden>
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              </span>
              <span className="text-ink font-medium text-lg">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-14 text-warm-600 text-lg text-center font-medium max-w-xl mx-auto">
          When the seller experience improves, performance improves with it.
        </p>
      </div>
    </section>
  )
}
