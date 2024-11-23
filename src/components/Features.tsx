import React from 'react';
import { Card } from 'antd';
import { Coins, Trophy, Activity, Users, MessageCircle, Wallet, Target, Rocket } from 'lucide-react';
import { Feature } from '../types';

interface FeaturesProps {
  features: Feature[];
}

export default function Features({ features = defaultFeatures }: FeaturesProps) {
  return (
    <div className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Fonctionnalités de la Plateforme</h2>
          <p className="mt-4 text-gray-400">Une expérience complète pour les passionnés de crypto</p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {defaultFeatures.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-800 hover:bg-gray-700 transition-colors border-gray-700"
            >
              <div className="flex flex-col items-start">
                <div className="bg-gray-900 p-3 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-4 text-gray-400">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

const defaultFeatures: Feature[] = [
  {
    icon: <Coins className="w-6 h-6 text-indigo-500" />,
    title: "Système de Points",
    description: "Gagnez et échangez des Coins via des micro-tâches et activités communautaires"
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-indigo-500" />,
    title: "Intégration Telegram",
    description: "Accédez à toutes les fonctionnalités directement depuis Telegram"
  },
  {
    icon: <Wallet className="w-6 h-6 text-indigo-500" />,
    title: "Multi-Écosystèmes",
    description: "Compatibilité avec TON, EVM et futures blockchains"
  },
  {
    icon: <Target className="w-6 h-6 text-indigo-500" />,
    title: "Micro-tâches",
    description: "Accomplissez des tâches variées et gagnez des récompenses"
  },
  {
    icon: <Trophy className="w-6 h-6 text-indigo-500" />,
    title: "Compétitions",
    description: "Participez aux événements saisonniers et grimpez les classements"
  },
  {
    icon: <Activity className="w-6 h-6 text-indigo-500" />,
    title: "Farming de Points",
    description: "Optimisez vos gains grâce aux mécaniques de farming"
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-500" />,
    title: "Communauté",
    description: "Rejoignez un réseau dynamique de passionnés de crypto"
  },
  {
    icon: <Rocket className="w-6 h-6 text-indigo-500" />,
    title: "Outils Financiers",
    description: "Accédez à des outils avancés pour gérer vos actifs"
  }
];