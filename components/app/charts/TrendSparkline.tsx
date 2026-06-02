'use client'

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

export type TrendChartPoint = {
  cycle: string
  y: number
}

export default function TrendSparkline({ data }: { data: TrendChartPoint[] }) {
  return (
    <div className="h-[152px] w-full">
      <ResponsiveContainer width="100%" height="100%" minWidth={200} minHeight={152}>
        <LineChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 22 }}>
          <XAxis
            dataKey="cycle"
            tick={{ fontSize: 10, fill: '#78716c' }}
            tickLine={false}
            axisLine={{ stroke: 'rgba(120, 113, 108, 0.25)' }}
            interval={0}
            height={36}
          />
          <YAxis domain={['dataMin - 2', 'dataMax + 2']} hide />
          <Tooltip
            contentStyle={{
              borderRadius: 12,
              border: '1px solid rgba(0,0,0,0.06)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
            }}
            formatter={(value) => [String(value ?? ''), 'Seller Experience Index Score']}
            labelFormatter={(label) => String(label)}
          />
          <Line
            type="monotone"
            dataKey="y"
            stroke="#5a9fd9"
            strokeWidth={2}
            dot={{ r: 3.5, fill: '#5a9fd9', stroke: '#fff', strokeWidth: 1.5 }}
            activeDot={{ r: 5, fill: '#7CB9E8', stroke: '#fff', strokeWidth: 1.5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
