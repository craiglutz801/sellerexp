import type { SurveyResponse } from '@/lib/types/rep'
import responses from '@/lib/data/demotech/responses.json'

const ALL_RESPONSES = responses as SurveyResponse[]

export function getAllResponses(): SurveyResponse[] {
  return ALL_RESPONSES
}

export function getResponseByEmployeeId(employeeId: string): SurveyResponse | undefined {
  return ALL_RESPONSES.find((r) => r.employee_id === employeeId)
}

export function getIcResponses(): SurveyResponse[] {
  return ALL_RESPONSES.filter((r) => r.role_level === 'Individual Contributor')
}

export function getDemoRepProfiles(limit = 12): {
  employeeId: string
  displayName: string
  title: string
  teamSegment: string
  location: string
}[] {
  const picks = [
    'DT-10001',
    'DT-10009',
    'DT-10018',
    'DT-10027',
    'DT-10003',
    'DT-10008',
    'DT-10016',
    'DT-10024',
    'DT-10006',
    'DT-10017',
    'DT-10021',
    'DT-10004',
  ]
  return picks
    .map((id) => getResponseByEmployeeId(id))
    .filter(Boolean)
    .slice(0, limit)
    .map((r) => ({
      employeeId: r!.employee_id,
      displayName: `${r!.title} · ${r!.team_segment}`,
      title: r!.title,
      teamSegment: r!.team_segment,
      location: r!.location,
    }))
}
