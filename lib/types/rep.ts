import type { PillarKey } from '@/lib/types/platform'

export type SurveyResponse = {
  response_id: string
  company: string
  employee_id: string
  title: string
  role_level: string
  team_segment: string
  location: string
  tenure_band: string
  tenure_months: number
  response_date: string
  L1: string
  L2: string
  L3: string
  [questionId: string]: string | number
}

export type RepFocusArea = {
  key: string
  label: string
  score: number
  orgAverage: number
  gap: number
  empathyLine: string
}

export type KitModuleType = 'playbook' | 'drill' | 'template' | 'video' | 'checklist'

export type KitModule = {
  id: string
  title: string
  description: string
  type: KitModuleType
  durationMinutes: number
  pillar: PillarKey | 'stage'
  status: 'not_started' | 'in_progress' | 'completed'
  progress: number
}

export type EnablementKit = {
  employeeId: string
  cycleLabel: string
  acknowledgment: string
  focusAreas: RepFocusArea[]
  modules: KitModule[]
  managerPrompt?: string
  totalMinutes: number
  completedModules: number
}

export type RepSnapshot = {
  employeeId: string
  title: string
  teamSegment: string
  location: string
  tenureBand: string
  overallScore: number
  orgOverallScore: number
  pillarScores: { key: PillarKey; label: string; yours: number; org: number }[]
  stageScores: { stage: string; yours: number; org: number }[]
  strengths: string[]
}

export type RepProfile = {
  employeeId: string
  displayName: string
  title: string
  teamSegment: string
  location: string
}
