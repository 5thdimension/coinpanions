import React from 'react';
import { Card, Row, Col, Progress } from 'antd';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Coins, Trophy, Users, TrendingUp, Target, Rocket } from 'lucide-react';

const MotionCard = motion(Card);

export default function DashboardStats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="text-2xl font-bold text-white mb-6">Dashboard Overview</h1>
      
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <MotionCard variants={itemVariants} className="bg-gray-800 border-gray-700">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-500/10 rounded-lg">
                <Coins className="w-8 h-8 text-indigo-500" />
              </div>
              <div>
                <p className="text-gray-400">$CAME Balance</p>
                <h3 className="text-2xl font-bold text-white">
                  <CountUp end={1234.56} decimals={2} duration={2} />
                </h3>
              </div>
            </div>
          </MotionCard>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <MotionCard variants={itemVariants} className="bg-gray-800 border-gray-700">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <Rocket className="w-8 h-8 text-purple-500" />
              </div>
              <div>
                <p className="text-gray-400">$CMLN Balance</p>
                <h3 className="text-2xl font-bold text-white">
                  <CountUp end={5678.90} decimals={2} duration={2} />
                </h3>
              </div>
            </div>
          </MotionCard>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <MotionCard variants={itemVariants} className="bg-gray-800 border-gray-700">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-500/10 rounded-lg">
                <Trophy className="w-8 h-8 text-green-500" />
              </div>
              <div>
                <p className="text-gray-400">Tasks Completed</p>
                <h3 className="text-2xl font-bold text-white">
                  <CountUp end={42} duration={2} />
                </h3>
              </div>
            </div>
          </MotionCard>
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <MotionCard variants={itemVariants} className="bg-gray-800 border-gray-700">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-pink-500/10 rounded-lg">
                <Users className="w-8 h-8 text-pink-500" />
              </div>
              <div>
                <p className="text-gray-400">Referrals</p>
                <h3 className="text-2xl font-bold text-white">
                  <CountUp end={15} duration={2} />
                </h3>
              </div>
            </div>
          </MotionCard>
        </Col>
      </Row>

      <Row gutter={[16, 16]} className="mt-6">
        <Col xs={24} lg={16}>
          <MotionCard 
            variants={itemVariants} 
            title="Active Tasks Progress" 
            className="bg-gray-800 border-gray-700"
          >
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">TON Project Analysis</span>
                  <span className="text-indigo-400">75%</span>
                </div>
                <Progress percent={75} strokeColor="#818cf8" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Community Challenge</span>
                  <span className="text-purple-400">45%</span>
                </div>
                <Progress percent={45} strokeColor="#a855f7" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Trading Tournament</span>
                  <span className="text-green-400">90%</span>
                </div>
                <Progress percent={90} strokeColor="#22c55e" />
              </div>
            </div>
          </MotionCard>
        </Col>

        <Col xs={24} lg={8}>
          <MotionCard 
            variants={itemVariants} 
            title="Recent Achievements" 
            className="bg-gray-800 border-gray-700"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-green-500" />
                <div>
                  <p className="font-medium text-white">First Task Completed</p>
                  <p className="text-sm text-gray-400">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-indigo-500" />
                <div>
                  <p className="font-medium text-white">Reached Level 5</p>
                  <p className="text-sm text-gray-400">1 day ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <div>
                  <p className="font-medium text-white">Won Tournament</p>
                  <p className="text-sm text-gray-400">3 days ago</p>
                </div>
              </div>
            </div>
          </MotionCard>
        </Col>
      </Row>
    </motion.div>
  );
}