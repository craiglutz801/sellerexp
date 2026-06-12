'use client'

import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { DEFAULT_DEMO_EMPLOYEE_ID } from '@/lib/data/demotech/config'
import { getDemoRepProfiles } from '@/lib/data/demotech/load'
import { getRepData } from '@/lib/data/demotech/enablement'
import type { EnablementKit, RepSnapshot, SurveyResponse } from '@/lib/types/rep'

type RepContextValue = {
  employeeId: string
  setEmployeeId: (id: string) => void
  profiles: ReturnType<typeof getDemoRepProfiles>
  response: SurveyResponse
  snapshot: RepSnapshot
  kit: EnablementKit
}

const RepContext = createContext<RepContextValue | null>(null)

export function RepProvider({ children }: { children: ReactNode }) {
  const profiles = useMemo(() => getDemoRepProfiles(), [])
  const [employeeId, setEmployeeId] = useState(DEFAULT_DEMO_EMPLOYEE_ID)

  const data = useMemo(() => getRepData(employeeId), [employeeId])
  const fallback = useMemo(() => getRepData(DEFAULT_DEMO_EMPLOYEE_ID)!, [])

  const value = useMemo(() => {
    const d = data ?? fallback
    return {
      employeeId,
      setEmployeeId,
      profiles,
      response: d.response,
      snapshot: d.snapshot,
      kit: d.kit,
    }
  }, [data, employeeId, fallback, profiles])

  return <RepContext.Provider value={value}>{children}</RepContext.Provider>
}

export function useRep() {
  const ctx = useContext(RepContext)
  if (!ctx) throw new Error('useRep must be used within RepProvider')
  return ctx
}
