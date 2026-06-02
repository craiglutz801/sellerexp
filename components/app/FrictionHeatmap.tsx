import type { FrictionCell } from '@/lib/types/platform'

const STAGES = ['Discover', 'Qualify', 'Propose', 'Negotiate', 'Close']

function intensityClass(v: number) {
  if (v >= 80) return 'bg-rose-500/90'
  if (v >= 65) return 'bg-rose-400/70'
  if (v >= 50) return 'bg-amber-400/60'
  if (v >= 38) return 'bg-warm-400/50'
  return 'bg-emerald-500/25'
}

export default function FrictionHeatmap({ cells }: { cells: FrictionCell[] }) {
  const dimensions = Array.from(new Set(cells.map((c) => c.dimension)))

  const get = (dimension: string, stage: string) =>
    cells.find((c) => c.dimension === dimension && c.stage === stage)?.intensity ?? 0

  return (
    <div className="app-card overflow-x-auto">
      <table className="min-w-[640px] w-full text-sm">
        <thead>
          <tr className="border-b border-warm-400/30">
            <th className="text-left font-semibold text-warm-600 p-4 w-44">Dimension</th>
            {STAGES.map((s) => (
              <th key={s} className="text-center font-semibold text-warm-600 p-4">
                {s}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dimensions.map((d) => (
            <tr key={d} className="border-b border-warm-400/20 last:border-0">
              <td className="p-4 font-medium text-ink">{d}</td>
              {STAGES.map((s) => {
                const v = get(d, s)
                return (
                  <td key={s} className="p-2">
                    <div
                      className={`mx-auto h-10 w-full max-w-[72px] rounded-xl ${intensityClass(v)}`}
                      title={`${d} · ${s}: intensity ${v}`}
                    />
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="px-4 py-3 text-xs text-warm-500 border-t border-warm-400/30">
        Darker cells indicate higher modeled friction. Pair with sample size and confidence where available.
      </p>
    </div>
  )
}
