import React from 'react';
import { Card, Tag, Progress, Button } from 'antd';
import { Clock, Trophy, Target, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

export default function TasksPanel() {
  const tasks = [
    {
      id: 1,
      title: 'TON Project Analysis',
      description: 'Research and analyze a new TON ecosystem project',
      reward: '100 $CAME',
      progress: 75,
      timeLeft: '2 days',
      difficulty: 'Medium',
      type: 'Analysis'
    },
    {
      id: 2,
      title: 'Community Challenge',
      description: 'Participate in weekly community activities',
      reward: '50 $CMLN',
      progress: 45,
      timeLeft: '5 days',
      difficulty: 'Easy',
      type: 'Social'
    },
    {
      id: 3,
      title: 'Trading Tournament',
      description: 'Compete in the weekly trading competition',
      reward: '200 $CAME',
      progress: 90,
      timeLeft: '1 day',
      difficulty: 'Hard',
      type: 'Competition'
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Active Tasks</h1>

      <div className="grid gap-6">
        {tasks.map((task) => (
          <MotionCard
            key={task.id}
            className="bg-gray-800 border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-white">{task.title}</h3>
                    <Tag color="blue">{task.type}</Tag>
                    <Tag color={
                      task.difficulty === 'Easy' ? 'success' :
                      task.difficulty === 'Medium' ? 'warning' :
                      'error'
                    }>{task.difficulty}</Tag>
                  </div>
                  <p className="text-gray-400">{task.description}</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-gray-400">
                    <Trophy className="w-4 h-4" />
                    <span>{task.reward}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{task.timeLeft} left</span>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-indigo-400">{task.progress}%</span>
                  </div>
                  <Progress percent={task.progress} strokeColor="#818cf8" />
                </div>
              </div>

              <div className="flex flex-row sm:flex-col gap-2 justify-end">
                <Button type="primary" icon={<Target className="w-4 h-4" />}>
                  Continue
                </Button>
                <Button type="text" icon={<TrendingUp className="w-4 h-4" />}>
                  Details
                </Button>
              </div>
            </div>
          </MotionCard>
        ))}
      </div>
    </div>
  );
}