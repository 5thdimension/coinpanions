import React from 'react';
import { Button } from 'antd';
import { ArrowRight, Coins, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=2000')] bg-cover bg-center opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-8 gap-4"
        >
          <Coins className="h-16 w-16 text-indigo-400 animate-pulse" />
          <Rocket className="h-16 w-16 text-purple-400 animate-pulse" />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text mb-8"
        >
          Welcome to Coinpanions
        </motion.h1>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-8 mb-8"
        >
          <div className="bg-gray-800/50 backdrop-blur rounded-lg p-4">
            <h3 className="text-xl font-semibold text-indigo-400">$CAME</h3>
            <p className="text-sm text-gray-300">Governance Token</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur rounded-lg p-4">
            <h3 className="text-xl font-semibold text-purple-400">$CMLN</h3>
            <p className="text-sm text-gray-300">Community Token</p>
          </div>
        </motion.div>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Your gateway to the crypto universe. Earn tokens through micro-tasks, 
          participate in exclusive events, and join a passionate community.
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex justify-center gap-4"
        >
          <Button 
            type="primary" 
            size="large" 
            icon={<ArrowRight className="w-5 h-5" />}
            className="min-w-[200px]"
          >
            Get Started
          </Button>
          <Button 
            size="large"
            className="min-w-[200px]"
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}