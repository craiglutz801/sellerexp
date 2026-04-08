import SectionHeader from '@/components/app/SectionHeader'
import { MOCK_RESPONSES } from '@/lib/data/mock/platform'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Responses',
}

const sentimentClass = {
  positive: 'bg-emerald-500/10 text-emerald-800',
  neutral: 'bg-warm-400/20 text-warm-800',
  negative: 'bg-rose-500/10 text-rose-800',
} as const

export default function ResponsesPage() {
  return (
    <>
      <SectionHeader
        eyebrow="Responses"
        title="Explore qualitative evidence with restraint."
        description="Progressive disclosure: filters, theme chips, and excerpts — not a spreadsheet of raw text. Production adds search, clustering, and role-based redaction."
      />

      <div className="app-card mb-8 p-4 sm:p-6">
        <div className="flex flex-wrap gap-3">
          <input
            type="search"
            placeholder="Search themes, roles, or keywords (UI only)"
            className="min-w-[200px] flex-1 rounded-xl border border-warm-400/40 bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-warm-400 focus:outline-none focus:ring-2 focus:ring-accent/40"
            disabled
            readOnly
          />
          <span className="inline-flex items-center rounded-full border border-warm-400/40 px-3 py-1.5 text-xs font-medium text-warm-600">
            Region: All
          </span>
          <span className="inline-flex items-center rounded-full border border-warm-400/40 px-3 py-1.5 text-xs font-medium text-warm-600">
            Team: All
          </span>
          <span className="inline-flex items-center rounded-full border border-warm-400/40 px-3 py-1.5 text-xs font-medium text-warm-600">
            Sentiment: All
          </span>
        </div>
        <p className="mt-3 text-xs text-warm-500">Filters are visual placeholders; wire-up comes with auth and data.</p>
      </div>

      <div className="app-card overflow-x-auto">
        <table className="min-w-[800px] w-full text-sm">
          <thead>
            <tr className="border-b border-warm-400/30 text-left text-xs font-semibold uppercase tracking-wider text-warm-500">
              <th className="p-4 w-[44%]">Excerpt</th>
              <th className="p-4">Role</th>
              <th className="p-4">Region</th>
              <th className="p-4">Team</th>
              <th className="p-4">Themes</th>
              <th className="p-4">Sentiment</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_RESPONSES.map((r) => (
              <tr key={r.id} className="border-b border-warm-400/15 last:border-0 align-top">
                <td className="p-4 text-warm-600 leading-relaxed">{r.excerpt}</td>
                <td className="p-4 text-ink font-medium whitespace-nowrap">{r.role}</td>
                <td className="p-4 text-warm-600 whitespace-nowrap">{r.region}</td>
                <td className="p-4 text-warm-600 whitespace-nowrap">{r.team}</td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-1.5">
                    {r.themes.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-cream px-2.5 py-0.5 text-xs font-medium text-warm-800 border border-warm-400/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-4">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${sentimentClass[r.sentiment]}`}
                  >
                    {r.sentiment}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
