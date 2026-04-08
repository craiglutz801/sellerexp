const ROLES = [
  'Chief Revenue Officers',
  'Revenue Operations Leaders',
  'Sales Operations Teams',
  'Sales Enablement Leaders',
  'GTM Strategy Teams',
]

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="section-padding bg-paper">
      <div className="container-narrow text-center">
        <h2 className="text-section font-bold text-ink max-w-2xl mx-auto">
          Built for Complex Revenue Organizations
        </h2>
        <p className="mt-10 text-warm-600 text-lg max-w-xl mx-auto leading-relaxed">
          SellerEXP is designed for companies where operational complexity creates distance between leadership and the day-to-day reality of sellers.
        </p>
        <ul className="mt-12 flex flex-wrap justify-center gap-3">
          {ROLES.map((role) => (
            <li
              key={role}
              className="rounded-full bg-cream border border-warm-400/30 px-5 py-2.5 text-sm font-medium text-ink"
            >
              {role}
            </li>
          ))}
        </ul>
        <p className="mt-12 text-warm-600 font-medium">
          Best fit for organizations with <span className="text-ink">100+ sellers</span>.
        </p>
      </div>
    </section>
  )
}
