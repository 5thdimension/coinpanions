import React from 'react';
import { Card } from 'antd';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface TokenChartProps {
  data: {
    name: string;
    value: number;
    pv: number;
  }[];
  token: '$CAME' | '$CMLN';
}

export default function TokenChart({ data, token }: TokenChartProps) {
  const gradientColor = token === '$CAME' ? '#818cf8' : '#a855f7';

  return (
    <Card className="bg-gray-800 border-gray-700 h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: '1px solid #374151',
              borderRadius: '8px',
            }}
            labelStyle={{ color: '#E5E7EB' }}
          />
          <defs>
            <linearGradient id={`gradient-${token}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={gradientColor} stopOpacity={0.8}/>
              <stop offset="95%" stopColor={gradientColor} stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke={gradientColor}
            fillOpacity={1}
            fill={`url(#gradient-${token})`}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
}