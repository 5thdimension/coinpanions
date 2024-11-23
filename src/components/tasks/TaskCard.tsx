import React from 'react';
import { Card, Tag, Progress, Button, Tooltip } from 'antd';
import { Clock, Trophy, Target, Lock, Crown } from 'lucide-react';
import { Task } from '../../types';

interface TaskCardProps {
  task: Task;
  onAction: (task: Task) => void;
}

export default function TaskCard({ task, onAction }: TaskCardProps) {
  const difficultyColors = {
    easy: 'success',
    medium: 'warning',
    hard: 'error'
  };

  return (
    <Card className="bg-gray-800 border-gray-700 hover:border-indigo-500 transition-all">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-white">{task.title}</h3>
            {task.premium && (
              <Tooltip title="Premium Task">
                <Crown className="w-4 h-4 text-yellow-500" />
              </Tooltip>
            )}
          </div>
          <Tag color={difficultyColors[task.difficulty]}>
            {task.difficulty.charAt(0).toUpperCase() + task.difficulty.slice(1)}
          </Tag>
        </div>

        <p className="text-gray-400">{task.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Trophy className="w-4 h-4 text-indigo-400" />
              <span>{task.reward.amount} {task.reward.token}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <Clock className="w-4 h-4" />
              <span>{task.timeEstimate}</span>
            </div>
          </div>
          <Button 
            type="primary"
            icon={task.requiresAuth ? <Lock className="w-4 h-4" /> : <Target className="w-4 h-4" />}
            onClick={() => onAction(task)}
            className={task.reward.token === '$CMLN' ? 'bg-purple-500 hover:bg-purple-600' : ''}
          >
            {task.requiresAuth ? 'Connect Wallet' : 'Start Task'}
          </Button>
        </div>

        {task.status === 'in_progress' && (
          <Progress 
            percent={75} 
            size="small" 
            strokeColor={task.reward.token === '$CMLN' ? '#a855f7' : '#818cf8'} 
          />
        )}
      </div>
    </Card>
  );
}