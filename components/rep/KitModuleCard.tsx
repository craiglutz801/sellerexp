import type { KitModule } from '@/lib/types/rep'
import { BookOpen, CheckSquare, FileText, Play, Swords } from 'lucide-react'

const TYPE_META: Record<
  KitModule['type'],
  { label: string; icon: typeof BookOpen; className: string }
> = {
  playbook: { label: 'Playbook', icon: BookOpen, className: 'bg-accent-soft/70 text-accent-dark' },
  drill: { label: 'Live drill', icon: Swords, className: 'bg-violet-50 text-violet-700' },
  template: { label: 'Template', icon: FileText, className: 'bg-emerald-50 text-emerald-700' },
  video: { label: 'Video', icon: Play, className: 'bg-amber-50 text-amber-800' },
  checklist: { label: 'Checklist', icon: CheckSquare, className: 'bg-sky-50 text-sky-800' },
}

const STATUS_LABEL = {
  not_started: 'Not started',
  in_progress: 'In progress',
  completed: 'Completed',
} as const

export default function KitModuleCard({ module }: { module: KitModule }) {
  const meta = TYPE_META[module.type]
  const Icon = meta.icon

  return (
    <article className="app-card p-5 md:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-wide ${meta.className}`}>
          <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
          {meta.label}
        </span>
        <span className="text-xs font-medium text-warm-500 tabular-nums">{module.durationMinutes} min</span>
      </div>
      <h3 className="mt-3 font-semibold text-ink">{module.title}</h3>
      <p className="mt-2 text-sm text-warm-600 leading-relaxed">{module.description}</p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span className="text-xs font-semibold text-warm-500">{STATUS_LABEL[module.status]}</span>
        {module.status === 'in_progress' ? (
          <div className="flex-1 min-w-[120px] max-w-[200px] h-1.5 rounded-full bg-warm-400/20 overflow-hidden">
            <div
              className="h-full rounded-full bg-accent-dark transition-all"
              style={{ width: `${module.progress}%` }}
            />
          </div>
        ) : null}
      </div>
    </article>
  )
}
