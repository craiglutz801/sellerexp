type Props = {
  eyebrow?: string
  title: string
  description?: string
}

export default function SectionHeader({ eyebrow, title, description }: Props) {
  return (
    <div className="mb-10 max-w-3xl border-l-[3px] border-accent/50 pl-5 sm:pl-6">
      {eyebrow ? <p className="app-eyebrow mb-2">{eyebrow}</p> : null}
      <h1 className="text-2xl sm:text-section font-semibold tracking-tight text-ink [text-wrap:balance]">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 text-base text-warm-600 leading-relaxed max-w-2xl">{description}</p>
      ) : null}
    </div>
  )
}
