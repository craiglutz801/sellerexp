'use client'

import { useRep } from '@/components/rep/RepProvider'

export default function RepSwitcher() {
  const { employeeId, setEmployeeId, profiles, snapshot } = useRep()

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 min-w-0">
      <label htmlFor="rep-switcher" className="sr-only">
        Demo rep profile
      </label>
      <select
        id="rep-switcher"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
        className="max-w-full rounded-xl border border-warm-400/30 bg-white px-3 py-2 text-xs font-medium text-ink focus:outline-none focus:ring-2 focus:ring-accent/40"
      >
        {profiles.map((p) => (
          <option key={p.employeeId} value={p.employeeId}>
            {p.displayName} — {p.location.split(',')[0]}
          </option>
        ))}
      </select>
      <span className="hidden lg:inline text-xs text-warm-500 truncate">
        {snapshot.title} · {snapshot.tenureBand}
      </span>
    </div>
  )
}
