import type { PillarKey } from '@/lib/types/platform'

export const DEMOTECH_COMPANY = 'DemoTech'
export const DEMOTECH_CYCLE = {
  id: 'mc-q2-2025',
  label: 'Q2 2025 pulse',
  period: 'Apr 1 — May 31, 2025',
}

/** Likert question IDs grouped by operating dimension */
export const QUESTION_GROUPS = {
  process: ['B1', 'B2', 'B3', 'B4', 'B5'],
  tools: ['C1', 'C2', 'C3', 'C4', 'C5'],
  enablement: ['D1', 'D2', 'D3', 'D4', 'D5'],
  marketing_alignment: ['E1', 'E2', 'E3', 'E4'],
  pipeline: ['F1', 'F2', 'F3', 'F4'],
  compensation: ['G1', 'G2', 'G3', 'G4'],
  support: ['H1', 'H2', 'H3', 'H4'],
  org_alignment: ['I1', 'I2', 'I3', 'I4'],
  overall: ['J1', 'J2', 'J3', 'J4'],
} as const

export const STAGE_QUESTIONS: Record<string, string> = {
  Discover: 'K1',
  Qualify: 'K2',
  Demo: 'K3',
  'Propose / Negotiate': 'K4',
  Close: 'K5',
}

export const PILLAR_LABELS: Record<PillarKey, string> = {
  process: 'Process',
  tools: 'Tools',
  enablement: 'Enablement',
  alignment: 'Alignment',
  support: 'Support',
  compensation: 'Compensation',
}

/** Map survey groups → executive pillar keys */
export const PILLAR_QUESTION_MAP: Record<PillarKey, readonly string[]> = {
  process: QUESTION_GROUPS.process,
  tools: QUESTION_GROUPS.tools,
  enablement: QUESTION_GROUPS.enablement,
  alignment: [...QUESTION_GROUPS.marketing_alignment, ...QUESTION_GROUPS.org_alignment],
  support: QUESTION_GROUPS.support,
  compensation: QUESTION_GROUPS.compensation,
}

export const LIKERT_IDS = [
  ...Object.values(QUESTION_GROUPS).flat(),
  ...Object.values(STAGE_QUESTIONS),
]

/** Default demo rep — Enterprise AE with mixed support/marketing friction */
export const DEFAULT_DEMO_EMPLOYEE_ID = 'DT-10001'
