import Link from 'next/link'
import type { Metadata } from 'next'
import SectionHeader from '@/components/app/SectionHeader'
import { MOCK_ACTION_ITEMS, MOCK_RECOMMENDATIONS } from '@/lib/data/mock/platform'

export const metadata: Metadata = {
  title: 'Actions',
}

const statusStyles = {
  todo: 'bg-warm-400/20 text-warm-800 border-warm-400/30',
  in_progress: 'bg-accent/15 text-ink border-accent/30',
  blocked: 'bg-rose-500/10 text-rose-800 border-rose-500/20',
  done: 'bg-emerald-500/10 text-emerald-800 border-emerald-500/20',
} as const

function StatusLabel({ status }: { status: keyof typeof statusStyles }) {
  const label = status.replace('_', ' ')
  return (
    <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold capitalize ${statusStyles[status]}`}>
      {label}
    </span>
  )
}

function recTitle(id: string) {
  return MOCK_RECOMMENDATIONS.find((r) => r.id === id)?.title ?? 'Unmapped recommendation'
}

export default function ActionsPage() {
  const totals = {
    open: MOCK_ACTION_ITEMS.filter((a) => a.status !== 'done').length,
    blocked: MOCK_ACTION_ITEMS.filter((a) => a.status === 'blocked').length,
    done: MOCK_ACTION_ITEMS.filter((a) => a.status === 'done').length,
  }

  return (
    <>
      <SectionHeader
        eyebrow="Execution"
        title="Action Items"
        description="Turn strategic recommendations into assigned execution work. This page centralizes ownership, notes, and communication touchpoints (including Slack updates)."
      />

      <div className="grid gap-4 sm:grid-cols-3 mb-10">
        <div className="app-card p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-warm-500">Open</p>
          <p className="mt-2 text-3xl font-semibold tabular-nums text-ink">{totals.open}</p>
        </div>
        <div className="app-card p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-warm-500">Blocked</p>
          <p className="mt-2 text-3xl font-semibold tabular-nums text-rose-700">{totals.blocked}</p>
        </div>
        <div className="app-card p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-warm-500">Completed</p>
          <p className="mt-2 text-3xl font-semibold tabular-nums text-emerald-700">{totals.done}</p>
        </div>
      </div>

      <section className="app-card overflow-x-auto">
        <table className="min-w-[1020px] w-full text-sm">
          <thead>
            <tr className="border-b border-warm-400/30 text-left text-xs font-semibold uppercase tracking-wider text-warm-500">
              <th className="p-4 w-[28%]">Action item</th>
              <th className="p-4">Linked recommendation</th>
              <th className="p-4">Assignee</th>
              <th className="p-4">Due</th>
              <th className="p-4">Status</th>
              <th className="p-4">Notes</th>
              <th className="p-4">Slack</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_ACTION_ITEMS.map((item) => (
              <tr key={item.id} className="border-b border-warm-400/20 last:border-0 align-top">
                <td className="p-4">
                  <p className="font-semibold text-ink">{item.title}</p>
                  <p className="mt-2 text-xs text-warm-500">Owner: {item.owner} · {item.priority}</p>
                </td>
                <td className="p-4 text-warm-600">{recTitle(item.recommendationId)}</td>
                <td className="p-4 text-warm-700 font-medium">{item.assignee}</td>
                <td className="p-4 text-warm-600 whitespace-nowrap">{item.dueDate}</td>
                <td className="p-4">
                  <StatusLabel status={item.status} />
                </td>
                <td className="p-4">
                  <div className="rounded-xl border border-warm-400/30 bg-paper p-3">
                    <p className="text-xs text-warm-500 mb-1">{item.notesCount} notes</p>
                    <p className="text-sm text-warm-700 leading-relaxed">{item.lastNote}</p>
                  </div>
                </td>
                <td className="p-4">
                  <div className="space-y-2">
                    <p className="text-xs text-warm-500">{item.slackChannel}</p>
                    <button
                      type="button"
                      className="inline-flex rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-ink hover:bg-accent/20 transition-colors"
                    >
                      Send Slack update
                    </button>
                    <p className="text-[11px] text-warm-500">Last: {item.lastSlackMessageAt}</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div className="mt-8 rounded-2xl border border-accent/25 bg-accent/10 p-5">
        <p className="text-sm text-warm-700 leading-relaxed">
          Next step: connect this page to your task backend and Slack API so status, comments, and notifications are real-time and auditable.
        </p>
        <Link href="/app/recommendations" className="inline-flex mt-3 text-sm font-semibold text-accent-dark hover:text-ink">
          ← Back to recommendations
        </Link>
      </div>
    </>
  )
}
