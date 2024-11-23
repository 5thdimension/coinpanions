import React from 'react';
import { Card, Select } from 'antd';
import { BarChart3, TrendingUp, PieChart, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

export default function AnalyticsPanel() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Analytics</h1>
        <Select
          defaultValue="7d"
          className="w-32"
          options={[
            { value: '24h', label: 'Last 24h' },
            { value: '7d', label: 'Last 7 days' },
            { value: '30d', label: 'Last 30 days' },
            { value: 'all', label: 'All time' }
          ]}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MotionCard
          title={
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              <span>Token Performance</span>
            </div>
          }
          className="bg-gray-800 border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="h-64 flex items-center justify-center text-gray-500">
            Chart placeholder - Token price over time
          </div>
        </MotionCard>

        <MotionCard
          title={
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              <span>Task Completion Rate</span>
            </div>
          }
          className="bg-gray-800 border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="h-64 flex items-center justify-center text-gray-500">
            Chart placeholder - Task completion statistics
          </div>
        </MotionCard>

        <MotionCard
          title={
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span>Earnings Analysis</span>
            </div>
          }
          className="bg-gray-800 border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="h-64 flex items-center justify-center text-gray-500">
            Chart placeholder - Earnings over time
          </div>
        </MotionCard>

        <MotionCard
          title={
            <div className="flex items-center gap-2">
              <PieChart className="w-5 h-5" />
              <span>Token Distribution</span>
            </div>
          }
          className="bg-gray-800 border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="h-64 flex items-center justify-center text-gray-500">
            Chart placeholder - Token distribution breakdown
          </div>
        </MotionCard>
      </div>
    </div>
  );
}