import type { Metadata } from 'next'
import SectionHeader from '@/components/app/SectionHeader'
import BenchmarkExplorer from '@/components/app/benchmarks/BenchmarkExplorer'
import ScoreCard from '@/components/app/cards/ScoreCard'
import { MOCK_BENCHMARK, MOCK_BENCHMARK_DIMENSIONS, MOCK_BENCHMARK_INTERNAL } from '@/lib/data/mock/platform'

export const metadata: Metadata = {
  title: 'Benchmarks',
}

export default function BenchmarksPage() {
  return (
    <>
      <SectionHeader
        eyebrow="Benchmarks"
        title="Contextualize scores without overclaiming."
        description="Benchmarks should feel high-trust: clear cohort definition, methodology, and confidence. Toggle internal vs external views to separate peer context from org excellence pockets."
      />

      <div className="grid gap-6 sm:grid-cols-3 mb-10">
        <ScoreCard
          label="Your org"
          score={MOCK_BENCHMARK.yourScore}
          deltaCycle={3}
          deltaBenchmark={6}
          footnote="Headline index vs peer median."
        />
        <ScoreCard
          label="Peer median"
          score={MOCK_BENCHMARK.peerMedian}
          footnote="Anonymized B2B SaaS peer set."
        />
        <ScoreCard
          label="Top internal teams"
          score={MOCK_BENCHMARK.internalTopTeam}
          footnote="Best-performing internal cohort this cycle."
        />
      </div>

      <BenchmarkExplorer external={MOCK_BENCHMARK_DIMENSIONS} internal={MOCK_BENCHMARK_INTERNAL} />
    </>
  )
}
