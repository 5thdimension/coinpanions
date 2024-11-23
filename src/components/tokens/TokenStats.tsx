import React from 'react';
import { Card, Statistic } from 'antd';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import CountUp from 'react-countup';

interface TokenStatsProps {
  symbol: '$CAME' | '$CMLN';
  balance: number;
  change24h: number;
  price: number;
}

export default function TokenStats({ symbol, balance, change24h, price }: TokenStatsProps) {
  const isPositiveChange = change24h > 0;
  const Arrow = isPositiveChange ? ArrowUpRight : ArrowDownRight;
  const colorClass = isPositiveChange ? 'text-green-500' : 'text-red-500';

  return (
    <Card className="bg-gray-800 border-gray-700">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium text-gray-400">{symbol} Balance</h3>
          <div className="mt-2">
            <CountUp
              end={balance}
              decimals={2}
              duration={2}
              separator=","
              className="text-3xl font-bold text-white"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className={`flex items-center gap-1 ${colorClass}`}>
            <Arrow className="w-4 h-4" />
            <span>{Math.abs(change24h)}%</span>
            <span className="text-gray-400 text-sm">24h</span>
          </div>
          <Statistic
            title="Price"
            value={price}
            precision={4}
            prefix="$"
            className="text-right"
          />
        </div>
      </div>
    </Card>
  );
}