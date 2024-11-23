import React from 'react';
import { Card, Progress, Button } from 'antd';
import { motion } from 'framer-motion';
import { Clock, Trophy } from 'lucide-react';

interface TaskProgressProps {
  task: {
    title: string;
    progress: number;
    timeLeft: string;
    reward: string;
  };
}

export default function TaskProgress({ task }: TaskProgressProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-gray-800 border-gray-700">
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-white">{task.title}</h3>
            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="w-4 h-4" />
              <span>{task.timeLeft}</span>
            </div>
          </div>

          <Progress 
            percent={task.progress} 
            strokeColor="#818cf8"
            trailColor="#374151"
          />

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-yellow-500" />
              <span className="text-gray-300">{task.reward}</span>
            </div>
            <Button type="primary">Continue</Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}