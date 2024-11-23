import React from 'react';
import { Card, Tag, Progress, Button, message, Badge, Tooltip } from 'antd';
import { Clock, Coins as CoinsIcon, Lock, Crown, TrendingUp, Users, BookOpen, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Task } from '../types';
import { useFirebase } from '../contexts/FirebaseContext';

const MotionCard = motion(Card);

interface TaskListProps {
  tasks?: Task[];
}

const difficultyColors = {
  easy: 'success',
  medium: 'warning',
  hard: 'error'
};

const categoryIcons = {
  social: <Users className="w-4 h-4" />,
  defi: <TrendingUp className="w-4 h-4" />,
  gaming: <Target className="w-4 h-4" />,
  education: <BookOpen className="w-4 h-4" />,
  analysis: <CoinsIcon className="w-4 h-4" />
};

const tokenColors = {
  '$CAME': 'text-indigo-400',
  '$CMLN': 'text-purple-400'
};

export default function TaskList({ tasks = defaultTasks }: TaskListProps) {
  const { user } = useFirebase();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const handleTaskAction = (task: Task) => {
    if (!user) {
      message.warning('Please connect your wallet to access tasks');
      return;
    }
    if (task.premium && !user.premium) {
      message.warning('This task requires a premium subscription');
      return;
    }
    message.success(`Task "${task.title}" ${task.status === 'available' ? 'started' : 'continued'}`);
  };

  return (
    <div className="py-24 bg-gray-800">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Available Tasks</h2>
          <p className="mt-4 text-gray-400">Complete tasks to earn tokens and level up</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task) => (
            <Badge.Ribbon 
              key={task.id}
              text={task.premium ? "Premium" : null}
              color="gold"
            >
              <MotionCard 
                variants={cardVariants}
                className="bg-gray-900 border-gray-700 hover:border-indigo-500 transition-all transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <Tooltip title={task.category.charAt(0).toUpperCase() + task.category.slice(1)}>
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-gray-800 rounded-lg">
                        {categoryIcons[task.category]}
                      </div>
                      <Tag color={difficultyColors[task.difficulty]}>
                        {task.difficulty.charAt(0).toUpperCase() + task.difficulty.slice(1)}
                      </Tag>
                    </div>
                  </Tooltip>
                  <div className={`flex items-center ${tokenColors[task.reward.token]}`}>
                    <CoinsIcon className="w-4 h-4 mr-1" />
                    <span>{task.reward.amount} {task.reward.token}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  {task.title}
                  {task.premium && (
                    <Tooltip title="Premium Task">
                      <Crown className="w-4 h-4 text-yellow-500" />
                    </Tooltip>
                  )}
                </h3>

                <p className="text-gray-400 mb-4">{task.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{task.timeEstimate}</span>
                  </div>
                  <Button 
                    type="primary"
                    icon={!user ? <Lock className="w-4 h-4" /> : undefined}
                    onClick={() => handleTaskAction(task)}
                    className={task.reward.token === '$CMLN' ? 'bg-purple-500 hover:bg-purple-600' : ''}
                  >
                    {!user ? 'Connect Wallet' :
                     task.premium && !user.premium ? 'Premium Required' :
                     task.status === 'available' ? 'Start Task' : 
                     task.status === 'in_progress' ? 'Continue' : 'Completed'}
                  </Button>
                </div>

                {task.status === 'in_progress' && (
                  <Progress 
                    percent={75} 
                    size="small" 
                    strokeColor={task.reward.token === '$CMLN' ? '#a855f7' : '#818cf8'}
                    className="mt-4"
                  />
                )}
              </MotionCard>
            </Badge.Ribbon>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

const defaultTasks: Task[] = [
  {
    id: '1',
    title: 'Share on Twitter',
    description: 'Share your Coinpanions experience on Twitter with #Coinpanions',
    reward: {
      amount: 50,
      token: '$CMLN'
    },
    difficulty: 'easy',
    category: 'social',
    timeEstimate: '5 min',
    status: 'available',
    requiresAuth: true
  },
  {
    id: '2',
    title: 'TON Project Analysis',
    description: 'Analyze a new TON ecosystem project and write a concise report',
    reward: {
      amount: 100,
      token: '$CAME'
    },
    difficulty: 'medium',
    category: 'analysis',
    timeEstimate: '30 min',
    status: 'in_progress',
    premium: true,
    requiresAuth: true
  },
  {
    id: '3',
    title: 'Trading Tournament',
    description: 'Participate in the weekly tournament and earn bonus points',
    reward: {
      amount: 200,
      token: '$CAME'
    },
    difficulty: 'hard',
    category: 'gaming',
    timeEstimate: '2h',
    status: 'available',
    requiresAuth: true
  }
];