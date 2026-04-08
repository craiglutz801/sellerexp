'use client'

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

type Point = { x: number; y: number }

export default function TrendSparkline({ data }: { data: Point[] }) {
  return (
    <div className="h-[120px] w-full">
      <ResponsiveContainer width="100%" height="100%" minWidth={200} minHeight={120}>
        <LineChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <XAxis dataKey="x" hide />
          <YAxis domain={['dataMin - 2', 'dataMax + 2']} hide />
          <Tooltip
            contentStyle={{
              borderRadius: 12,
              border: '1px solid rgba(0,0,0,0.06)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
            }}
            formatter={(value) => [String(value ?? ''), 'Index']}
            labelFormatter={() => 'Trend'}
          />
          <Line
            type="monotone"
            dataKey="y"
            stroke="#5a9fd9"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: '#7CB9E8' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
