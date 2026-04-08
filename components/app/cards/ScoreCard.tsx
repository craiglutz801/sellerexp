type Props = {
  label: string
  score: number
  suffix?: string
  deltaCycle?: number
  deltaBenchmark?: number
  footnote?: string
  className?: string
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
}: Props) {
  return (
    <div className={`app-card p-6 ${className}`}>
      <p className="text-xs font-semibold uppercase tracking-wider text-warm-500">{label}</p>
      <p className="mt-3 text-4xl font-semibold tracking-tight text-ink tabular-nums">
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
      {footnote ? <p className="mt-4 text-sm text-warm-600 leading-relaxed border-t border-warm-400/30 pt-4">{footnote}</p> : null}
    </div>
  )
}
