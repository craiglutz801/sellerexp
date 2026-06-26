export const FLOW_STAGES = [
  {
    label: 'Seller signals',
    body: 'Feedback, stage confidence, open-text context, and role-specific friction.',
    icon: 'signal' as const,
  },
  {
    label: 'Diagnostic spine',
    body: 'Patterns, root causes, benchmark gaps, enablement needs, and priorities.',
    icon: 'spine' as const,
  },
  {
    label: 'AI action layer',
    body: 'Guides investigation, recommends next steps, and activates the right support.',
    icon: 'action' as const,
  },
]

export const LEADERSHIP_BRANCH = {
  label: 'For leadership',
  headline: 'Move from dashboard to decision.',
  body: 'Agents investigate friction, assemble the evidence, propose actions, and help track whether interventions are working.',
  examples: ['Root-cause brief', 'Action plan and owner', 'Executive update', 'Intervention measurement'],
}

export const SELLER_BRANCH = {
  label: 'For sellers',
  headline: 'Move from feedback to forward motion.',
  body: 'A private seller coach helps reps find approved resources, prepare for key moments, practice tough conversations, and use their kit in context.',
  examples: [
    'Prepare for a CFO call',
    'Find the right playbook',
    'Practice a pricing objection',
    'Use a proposal-stage checklist',
  ],
}

export const SELLER_COACH_USE_CASES = [
  {
    title: 'Prepare',
    description:
      'Build a focused plan for an upcoming discovery, proposal, pricing, or executive conversation.',
  },
  {
    title: 'Find',
    description:
      'Surface the approved playbook, deck, proof point, template, or checklist that fits the moment.',
  },
  {
    title: 'Practice',
    description: 'Run a private role-play for pricing, ROI, competitive, or executive objections.',
  },
  {
    title: 'Apply',
    description:
      'Turn a recommended module into an action for the next real deal — not generic training to complete later.',
  },
]

export const AI_GOVERNANCE_CHIPS = [
  'Approved content first',
  'No individual leadership reporting',
  'No automated performance decisions',
  'Seller-controlled sharing',
]
