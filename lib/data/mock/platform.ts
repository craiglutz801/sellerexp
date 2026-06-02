import type {
  DimensionRow,
  DriverRow,
  FrictionCell,
  Insight,
  MeasurementCycle,
  PillarScore,
  Program,
  Recommendation,
  ResponseRow,
  ThemeCluster,
  ActionItem,
} from '@/lib/types/platform'

export const MOCK_CYCLE: MeasurementCycle = {
  id: 'mc-q1-2026',
  label: 'Q1 2026 pulse',
  period: 'Jan 6 — Mar 18, 2026',
}

export const MOCK_HEALTH_INDEX = {
  score: 78,
  deltaCycle: 3,
  deltaBenchmark: 6,
  narrative:
    'Your revenue organization is strong in stage proficiency and ease of selling, but manager confidence and objection handling are creating measurable drag in late-stage cycles.',
}

export const MOCK_SPARKLINE = [
  { cycle: 'Aug 2024', y: 71 },
  { cycle: 'Oct 2024', y: 73 },
  { cycle: 'Dec 2024', y: 72 },
  { cycle: 'Feb 2025', y: 75 },
  { cycle: 'Apr 2025', y: 76 },
  { cycle: 'Jun 2025', y: 78 },
]

export const MOCK_PILLARS: PillarScore[] = [
  {
    key: 'process',
    label: 'Process',
    score: 82,
    deltaCycle: 4,
    deltaBenchmark: 9,
    narrative: 'Stages are understood; handoffs still add latency in enterprise.',
  },
  {
    key: 'tools',
    label: 'Tools',
    score: 74,
    deltaCycle: -2,
    deltaBenchmark: 1,
    narrative: 'CRM hygiene improved; reporting load remains a weekly tax.',
  },
  {
    key: 'enablement',
    label: 'Enablement',
    score: 79,
    deltaCycle: 5,
    deltaBenchmark: 7,
    narrative: 'Playbooks land well; live objection practice is under-indexed.',
  },
  {
    key: 'alignment',
    label: 'Alignment',
    score: 71,
    deltaCycle: 1,
    deltaBenchmark: -3,
    narrative: 'Marketing narrative matches early stage; mid-funnel proof is fuzzy.',
  },
  {
    key: 'support',
    label: 'Support',
    score: 68,
    deltaCycle: -4,
    deltaBenchmark: -8,
    narrative: 'Deal desk turnaround is inconsistent on complex pricing.',
  },
  {
    key: 'compensation',
    label: 'Compensation',
    score: 76,
    deltaCycle: 0,
    deltaBenchmark: 2,
    narrative: 'Plan clarity is good; SPIFF noise creates quarterly confusion.',
  },
]

const STAGES = ['Discover', 'Qualify', 'Propose', 'Negotiate', 'Close']

export const MOCK_HEATMAP: FrictionCell[] = MOCK_PILLARS.flatMap((p) =>
  STAGES.map((stage, i) => ({
    dimension: p.label,
    stage,
    intensity: Math.min(
      100,
      35 + (i + p.score) % 37 + (p.key === 'support' ? 12 : 0),
    ),
  })),
)

export const MOCK_RECOMMENDATIONS: Recommendation[] = [
  {
    id: 'rec-1',
    title: 'Prioritize manager coaching on objection handling',
    issue: 'Confidence drops sharply between Propose and Negotiate.',
    whyItMatters: 'Late-stage stalls correlate with inconsistent manager coaching.',
    expectedImpact: 'Estimated 4–7% improvement in stage conversion within one cycle.',
    affectedTeams: ['Enterprise AE', 'Commercial AE'],
    owner: 'VP Sales + Enablement',
    priority: 'P0',
    effort: 'Medium',
    effortAxis: 2,
    impactAxis: 5,
    confidence: 86,
    category: 'Manager coaching',
    evidenceSummary: 'Stage diagnostic −11 pts vs benchmark; 27 related seller quotes.',
    followUpMetric: 'Negotiate → Close conversion + manager coaching coverage',
  },
  {
    id: 'rec-2',
    title: 'Simplify pricing exception workflow',
    issue: 'Deal desk turnaround variance is driving cycle slip.',
    whyItMatters: 'Support friction is concentrated in complex SKUs and multi-year ramps.',
    expectedImpact: 'Reduce exception age by ~30% and recover ~5 days in sales cycle.',
    affectedTeams: ['Deal Desk', 'RevOps', 'Enterprise AE'],
    owner: 'RevOps',
    priority: 'P1',
    effort: 'High',
    effortAxis: 3,
    impactAxis: 4,
    confidence: 72,
    category: 'Internal support / handoffs',
    evidenceSummary: 'Support pillar −8 vs benchmark; SLA variance theme cluster.',
    followUpMetric: 'P95 exception resolution time',
  },
  {
    id: 'rec-3',
    title: 'Tighten mid-funnel proof points with Marketing',
    issue: 'Sellers report weaker collateral alignment after discovery.',
    whyItMatters: 'Alignment scores lag benchmark; buyers stall on ROI narrative.',
    expectedImpact: 'Improve qualified opp progression and reduce “no decision”.',
    affectedTeams: ['Product Marketing', 'Commercial AE'],
    owner: 'CRO / CMO',
    priority: 'P1',
    effort: 'Medium',
    effortAxis: 2,
    impactAxis: 3,
    confidence: 68,
    category: 'Marketing-sales alignment',
    evidenceSummary: 'Alignment pillar gap; 19 quotes tagged “proof” and “ROI story”.',
    followUpMetric: 'Stage 2→3 conversion + content usage signals',
  },
]

export const MOCK_BENCHMARK = {
  internalTopTeam: 84,
  peerMedian: 72,
  yourScore: 78,
  label: 'External peer set: B2B SaaS, 200–800 sellers (n=38 orgs, SellerEXP benchmark)',
}

export const MOCK_THEMES: ThemeCluster[] = [
  {
    id: 'th-1',
    label: 'Manager coaching inconsistency',
    prevalence: 34,
    sentiment: 'negative',
    quotes: [
      '“I get different advice from my manager vs what enablement trained.”',
      '“Objection practice is ad hoc — I’m winging it on enterprise calls.”',
    ],
  },
  {
    id: 'th-2',
    label: 'Deal desk responsiveness',
    prevalence: 22,
    sentiment: 'mixed',
    quotes: [
      '“When deal desk is fast, we win. When it stalls, the opp dies quietly.”',
    ],
  },
]

export const MOCK_INSIGHTS: Insight[] = [
  {
    id: 'in-1',
    type: 'Segment variance',
    headline: 'Enterprise is cooling on support confidence faster than Commercial',
    body: 'Support scores fell 6 pts in Enterprise while Commercial held flat. Exceptions and legal review are the common thread.',
    severity: 'risk',
  },
  {
    id: 'in-2',
    type: 'Trend',
    headline: 'Enablement lift is sticking post-playbook refresh',
    body: 'Enablement scores are up 5 pts for two consecutive cycles, concentrated in new hires and ramping reps.',
    severity: 'positive',
  },
  {
    id: 'in-3',
    type: 'Benchmark',
    headline: 'You outperform peers on ease of selling',
    body: 'Ease-of-selling proxy metrics sit +9 vs peer median, driven by process clarity and territory design.',
    severity: 'positive',
  },
  {
    id: 'in-4',
    type: 'Risk',
    headline: 'Emerging theme: “forecast pressure → bad hygiene”',
    body: 'Qualitative volume increased 18% WoW with language about pipeline scrub quality and CRM distrust.',
    severity: 'risk',
  },
]

export const MOCK_DIMENSIONS: DimensionRow[] = [
  {
    dimension: 'Sales process effectiveness',
    score: 81,
    deltaCycle: 3,
    benchmarkGap: 6,
    confidence: 'high',
  },
  {
    dimension: 'Technology & tools',
    score: 74,
    deltaCycle: -2,
    benchmarkGap: 1,
    confidence: 'high',
  },
  {
    dimension: 'Sales enablement',
    score: 79,
    deltaCycle: 5,
    benchmarkGap: 7,
    confidence: 'medium',
  },
  {
    dimension: 'Marketing alignment',
    score: 71,
    deltaCycle: 1,
    benchmarkGap: -3,
    confidence: 'medium',
  },
  {
    dimension: 'Lead quality & pipeline support',
    score: 77,
    deltaCycle: 2,
    benchmarkGap: 4,
    confidence: 'medium',
  },
  {
    dimension: 'Compensation & incentives',
    score: 76,
    deltaCycle: 0,
    benchmarkGap: 2,
    confidence: 'low',
  },
  {
    dimension: 'Internal support systems',
    score: 68,
    deltaCycle: -4,
    benchmarkGap: -8,
    confidence: 'high',
  },
  {
    dimension: 'Organizational alignment',
    score: 73,
    deltaCycle: -1,
    benchmarkGap: -2,
    confidence: 'medium',
  },
]

export const MOCK_DRIVERS: DriverRow[] = [
  {
    driver: 'Late-stage objection handling',
    severity: 88,
    prevalence: '41% of enterprise sellers',
    ownerHint: 'Enablement + front-line managers',
  },
  {
    driver: 'Pricing exception latency',
    severity: 76,
    prevalence: '29% of deals >$250k',
    ownerHint: 'Deal desk / RevOps',
  },
  {
    driver: 'Mid-funnel proof / ROI story',
    severity: 64,
    prevalence: '23% of qualified opps',
    ownerHint: 'Product marketing',
  },
  {
    driver: 'CRM reporting burden',
    severity: 52,
    prevalence: 'Cross-segment',
    ownerHint: 'RevOps',
  },
]

export const MOCK_STAGE_FRICTION = [
  { stage: 'Discover', score: 82 },
  { stage: 'Qualify', score: 79 },
  { stage: 'Propose', score: 74 },
  { stage: 'Negotiate', score: 61 },
  { stage: 'Close', score: 77 },
]

export const MOCK_PROGRAMS: Program[] = [
  {
    id: 'pr-1',
    name: 'Revenue org health — Q1 pulse',
    status: 'active',
    cohorts: 6,
    responseRate: 78,
    targetRate: 85,
    closesOn: 'Mar 28, 2026',
  },
  {
    id: 'pr-2',
    name: 'Enterprise late-stage diagnostic',
    status: 'scheduled',
    cohorts: 2,
    responseRate: 0,
    targetRate: 80,
    closesOn: 'Apr 12, 2026',
  },
  {
    id: 'pr-3',
    name: 'Manager effectiveness — round 2',
    status: 'closed',
    cohorts: 4,
    responseRate: 91,
    targetRate: 85,
    closesOn: 'Dec 14, 2025',
  },
]

export const MOCK_RESPONSES: ResponseRow[] = [
  {
    id: 'r1',
    excerpt:
      '“Our process is clear, but I don’t get consistent coaching when deals hit legal and security reviews.”',
    role: 'Enterprise AE',
    region: 'NA-East',
    team: 'Enterprise',
    themes: ['Support', 'Coaching'],
    sentiment: 'neutral',
  },
  {
    id: 'r2',
    excerpt:
      '“Enablement decks are strong for discovery, but I’m rebuilding ROI slides every week for CFO conversations.”',
    role: 'Commercial AE',
    region: 'NA-West',
    team: 'Commercial',
    themes: ['Alignment', 'Enablement'],
    sentiment: 'negative',
  },
  {
    id: 'r3',
    excerpt:
      '“When deal desk responds same day, we win. When it slips 3–4 days, the champion goes quiet.”',
    role: 'Enterprise AE',
    region: 'EMEA',
    team: 'Enterprise',
    themes: ['Support', 'Process'],
    sentiment: 'negative',
  },
  {
    id: 'r4',
    excerpt:
      '“I finally trust our stage definitions — forecasting conversations got calmer this quarter.”',
    role: 'Sales Manager',
    region: 'NA-Central',
    team: 'Commercial',
    themes: ['Process'],
    sentiment: 'positive',
  },
]

export const MOCK_BENCHMARK_DIMENSIONS = [
  { dimension: 'Overall health', you: 78, peerP50: 72, peerP75: 81 },
  { dimension: 'Ease of selling', you: 84, peerP50: 74, peerP75: 82 },
  { dimension: 'Manager confidence', you: 63, peerP50: 74, peerP75: 79 },
  { dimension: 'Tool efficiency', you: 74, peerP50: 71, peerP75: 78 },
  { dimension: 'Internal alignment', you: 73, peerP50: 72, peerP75: 77 },
]

/** Same shape as external chart: mid = company average, high = top teams */
export const MOCK_BENCHMARK_INTERNAL = [
  { dimension: 'Overall health', you: 78, peerP50: 71, peerP75: 84 },
  { dimension: 'Ease of selling', you: 84, peerP50: 76, peerP75: 88 },
  { dimension: 'Manager confidence', you: 63, peerP50: 69, peerP75: 81 },
  { dimension: 'Tool efficiency', you: 74, peerP50: 72, peerP75: 80 },
  { dimension: 'Internal alignment', you: 73, peerP50: 70, peerP75: 79 },
]


export const MOCK_ACTION_ITEMS: ActionItem[] = [
  {
    id: 'act-1',
    title: 'Launch weekly manager objection-handling clinic',
    recommendationId: 'rec-1',
    owner: 'VP Sales',
    assignee: 'Sales Enablement Lead',
    dueDate: 'Apr 15, 2026',
    status: 'in_progress',
    priority: 'P0',
    notesCount: 5,
    lastNote: 'Pilot content approved; first cohort list drafted.',
    slackChannel: '#sellerexp-exec-actions',
    lastSlackMessageAt: '2h ago',
  },
  {
    id: 'act-2',
    title: 'Define deal desk exception SLA by segment',
    recommendationId: 'rec-2',
    owner: 'RevOps',
    assignee: 'Deal Desk Manager',
    dueDate: 'Apr 10, 2026',
    status: 'blocked',
    priority: 'P1',
    notesCount: 3,
    lastNote: 'Waiting on Finance sign-off for discount guardrails.',
    slackChannel: '#sellerexp-ops',
    lastSlackMessageAt: '1d ago',
  },
  {
    id: 'act-3',
    title: 'Ship CFO-ready ROI proof pack for stage 3',
    recommendationId: 'rec-3',
    owner: 'CRO / CMO',
    assignee: 'Product Marketing Manager',
    dueDate: 'Apr 18, 2026',
    status: 'todo',
    priority: 'P1',
    notesCount: 2,
    lastNote: 'Need 3 customer proof points from CS for final narrative.',
    slackChannel: '#sellerexp-gtm',
    lastSlackMessageAt: '5h ago',
  },
  {
    id: 'act-4',
    title: 'Publish manager coaching coverage dashboard',
    recommendationId: 'rec-1',
    owner: 'Sales Ops',
    assignee: 'BI Analyst',
    dueDate: 'Apr 22, 2026',
    status: 'done',
    priority: 'P2',
    notesCount: 4,
    lastNote: 'Dashboard live in BI workspace; linked in enablement playbook.',
    slackChannel: '#sellerexp-revops',
    lastSlackMessageAt: '3d ago',
  },
]
