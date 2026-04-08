import SectionHeader from '@/components/app/SectionHeader'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Settings',
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-warm-500">{label}</span>
      <input
        readOnly
        value={value}
        className="mt-2 w-full rounded-xl border border-warm-400/40 bg-paper px-4 py-2.5 text-sm text-ink"
      />
    </label>
  )
}

export default function SettingsPage() {
  return (
    <>
      <SectionHeader
        eyebrow="Settings"
        title="Workspace administration"
        description="Connect integrations, permissions, benchmark sources, and AI preferences. Form fields are static placeholders until auth and API layers land."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <section className="app-card space-y-5 p-6 md:p-8">
          <h2 className="text-sm font-semibold text-ink">Workspace</h2>
          <Field label="Organization name" value="Acme Revenue Co." />
          <Field label="Default measurement cycle" value="Quarterly + monthly manager pulse" />
        </section>
        <section className="app-card space-y-5 p-6 md:p-8">
          <h2 className="text-sm font-semibold text-ink">Roles & permissions</h2>
          <Field label="Admin contact" value="revops@acme.example" />
          <p className="text-sm text-warm-600">
            Production: row-level access by team / region, auditor read-only, executive roll-ups.
          </p>
        </section>
        <section className="app-card space-y-5 p-6 md:p-8">
          <h2 className="text-sm font-semibold text-ink">Benchmarks</h2>
          <Field label="Primary peer cohort" value="B2B SaaS · 200–800 sellers" />
          <p className="text-sm text-warm-600">Disclose methodology, sample size, and refresh cadence in-app.</p>
        </section>
        <section className="app-card space-y-5 p-6 md:p-8">
          <h2 className="text-sm font-semibold text-ink">AI / insights</h2>
          <Field label="Executive summary tone" value="Board-ready · conservative claims" />
          <p className="text-sm text-warm-600">Require citations to scores, benchmarks, and quotes for every generated insight.</p>
        </section>
      </div>
    </>
  )
}
