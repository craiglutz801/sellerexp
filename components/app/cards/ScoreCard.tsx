type Props = {
  label: string
  score: number
  suffix?: string
  deltaCycle?: number
  deltaBenchmark?: number
  footnote?: string
  className?: string
  emphasized?: boolean
}

function Delta({ value, label }: { value: number; label: string }) {
  const positive = value > 0
  const neutral = value === 0
  return (
    <p className="text-sm text-warm-600">
      <span
        className={
          neutral
            ? 'font-medium text-warm-600'
            : positive
              ? 'font-medium text-emerald-700'
              : 'font-medium text-rose-700'
        }
      >
        {neutral ? 'Flat' : `${positive ? '+' : ''}${value} pts`}
      </span>{' '}
      {label}
    </p>
  )
}

export default function ScoreCard({
  label,
  score,
  suffix = '',
  deltaCycle,
  deltaBenchmark,
  footnote,
  className = '',
  emphasized = false,
}: Props) {
  return (
    <div
      className={`app-card flex h-full flex-col p-6 ${emphasized ? 'app-card-accent ring-1 ring-accent/15' : ''} ${className}`}
    >
      <p className="app-eyebrow text-warm-500">{label}</p>
      <p
        className={`mt-3 font-semibold tracking-tight text-ink tabular-nums ${
          emphasized ? 'text-5xl sm:text-6xl' : 'text-4xl'
        }`}
      >
        {score}
        {suffix}
      </p>
      {deltaCycle !== undefined ? <Delta value={deltaCycle} label="vs last cycle" /> : null}
      {deltaBenchmark !== undefined ? (
        <p className="text-sm text-warm-600 mt-1">
          <span className={deltaBenchmark >= 0 ? 'font-medium text-emerald-700' : 'font-medium text-rose-700'}>
            {deltaBenchmark >= 0 ? '+' : ''}
            {deltaBenchmark} pts
          </span>{' '}
          vs benchmark
        </p>
      ) : null}
      {footnote ? (
        <>
          <div className="min-h-4 flex-1" aria-hidden />
          <p className="border-t border-warm-400/25 pt-3 text-[0.6875rem] leading-snug text-warm-500">
            {footnote}
          </p>
        </>
      ) : null}
    </div>
  )
}
