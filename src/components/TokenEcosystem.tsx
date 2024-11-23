import React from 'react';
import { Button, Card } from 'antd';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Coins, Crown, Rocket, Users, ChevronRight, Zap, Shield, BarChart } from 'lucide-react';

const MotionCard = motion(Card);

export default function TokenEcosystem() {
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
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-[#020B1C] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=2000')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020B1C]/50 to-[#020B1C] pointer-events-none" />
      
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <div className="text-center mb-20">
          <motion.div 
            className="flex justify-center mb-8"
            variants={itemVariants}
          >
            <div className="relative w-48 h-48">
              <img 
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=400&h=400" 
                alt="Coinpanions Ecosystem" 
                className="w-full h-full object-cover rounded-full border-4 border-indigo-500 glow-effect"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full" />
            </div>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
          >
            Double Token Ecosystem
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Experience the synergy of $CAME and $CMLN tokens, powering a unique ecosystem 
            of rewards, governance, and community engagement.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <MotionCard 
            variants={itemVariants}
            className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border-indigo-500 hover:border-indigo-400 transition-all transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <Crown className="w-12 h-12 text-indigo-400" />
              <div>
                <h3 className="text-3xl font-bold text-indigo-400">$CAME</h3>
                <p className="text-gray-400">Governance & Utility Token</p>
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-indigo-400" />
                <span>Platform Governance Rights</span>
              </li>
              <li className="flex items-center gap-2">
                <BarChart className="w-5 h-5 text-indigo-400" />
                <span>Premium Features Access</span>
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-400" />
                <span>Staking & Passive Income</span>
              </li>
            </ul>
            <Button 
              type="primary" 
              className="mt-6 w-full" 
              size="large"
              onClick={() => window.open('#tokenomics', '_blank')}
            >
              View $CAME Tokenomics
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </MotionCard>

          <MotionCard 
            variants={itemVariants}
            className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500 hover:border-purple-400 transition-all transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <Rocket className="w-12 h-12 text-purple-400" />
              <div>
                <h3 className="text-3xl font-bold text-purple-400">$CMLN</h3>
                <p className="text-gray-400">Community & Rewards Token</p>
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Coins className="w-5 h-5 text-purple-400" />
                <span>Task Completion Rewards</span>
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-400" />
                <span>Event Participation Benefits</span>
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-400" />
                <span>Community Perks & Bonuses</span>
              </li>
            </ul>
            <Button 
              type="primary" 
              className="mt-6 w-full bg-purple-500 hover:bg-purple-600" 
              size="large"
              onClick={() => window.open('#tokenomics', '_blank')}
            >
              View $CMLN Tokenomics
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </MotionCard>
        </div>

        <motion.div 
          variants={containerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ecosystem Benefits</h2>
          <p className="text-gray-400">Discover the advantages of our dual token system</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <MotionCard 
              key={index}
              variants={itemVariants}
              className="bg-gray-900/50 border-gray-700 hover:border-indigo-500 transition-all transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </MotionCard>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

const features = [
  {
    icon: <Shield className="w-12 h-12 text-indigo-400" />,
    title: "Decentralized Governance",
    description: "Shape the future of Coinpanions with your $CAME tokens"
  },
  {
    icon: <Coins className="w-12 h-12 text-purple-400" />,
    title: "Dual Rewards System",
    description: "Earn both tokens through active platform participation"
  },
  {
    icon: <Users className="w-12 h-12 text-pink-400" />,
    title: "Community Benefits",
    description: "Access exclusive features and events as a token holder"
  }
];