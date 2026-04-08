'use client'

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

type Row = { dimension: string; you: number; peerP50: number; peerP75: number }

type Props = {
  data: Row[]
  midLabel?: string
  highLabel?: string
}

export default function BenchmarkBars({ data, midLabel = 'Peer median', highLabel = 'Peer 75th' }: Props) {
  return (
    <div className="h-[320px] w-full">
      <ResponsiveContainer width="100%" height="100%" minWidth={280} minHeight={280}>
        <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.06)" />
          <XAxis dataKey="dimension" tick={{ fill: '#78716c', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis
            domain={[0, 100]}
            tick={{ fill: '#78716c', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            width={36}
          />
          <Tooltip
            contentStyle={{
              borderRadius: 12,
              border: '1px solid rgba(0,0,0,0.06)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
            }}
          />
          <Legend wrapperStyle={{ fontSize: 12, color: '#57534e' }} />
          <Bar dataKey="you" name="You" fill="#0c0f14" radius={[6, 6, 0, 0]} maxBarSize={28} />
          <Bar dataKey="peerP50" name={midLabel} fill="#a8a29e" radius={[6, 6, 0, 0]} maxBarSize={28} />
          <Bar dataKey="peerP75" name={highLabel} fill="#7CB9E8" radius={[6, 6, 0, 0]} maxBarSize={28} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
