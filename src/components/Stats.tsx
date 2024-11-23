import React from 'react';
import { Card, Statistic } from 'antd';
import { TrendingUp, Users, Trophy, Coins, Activity } from 'lucide-react';
import { Stat } from '../types';

const defaultStats: Stat[] = [
  {
    label: "Active Users",
    value: "10K+",
    prefix: <Users className="w-4 h-4 text-indigo-500" />
  },
  {
    label: "Tasks Completed",
    value: "100K+",
    prefix: <Trophy className="w-4 h-4 text-indigo-500" />
  },
  {
    label: "Points Earned",
    value: "1M+",
    prefix: <Coins className="w-4 h-4 text-indigo-500" />
  },
  {
    label: "Total Rewards",
    value: "500K+",
    prefix: <Activity className="w-4 h-4 text-indigo-500" />
  }
];

export default function Stats() {
  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Platform Statistics</h2>
          <p className="mt-4 text-gray-400">Our growing ecosystem by the numbers</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {defaultStats.map((stat, index) => (
            <Card
              key={index}
              className="bg-gray-900 hover:bg-gray-800 transition-colors border-gray-700"
            >
              <Statistic
                title={<span className="text-gray-400">{stat.label}</span>}
                value={stat.value}
                prefix={stat.prefix}
                valueStyle={{ color: '#818cf8', fontWeight: 'bold' }}
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}