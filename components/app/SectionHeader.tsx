type Props = {
  eyebrow?: string
  title: string
  description?: string
}

export default function SectionHeader({ eyebrow, title, description }: Props) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-wider text-accent-dark mb-2">{eyebrow}</p>
      ) : null}
      <h1 className="text-2xl sm:text-section font-semibold tracking-tight text-ink">{title}</h1>
      {description ? <p className="mt-3 text-base text-warm-600 leading-relaxed">{description}</p> : null}
    </div>
  )
}
