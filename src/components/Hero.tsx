import React from 'react';
import { Button } from 'antd';
import { ArrowRight, Coins, Rocket } from 'lucide-react';
import { useFirebase } from '../contexts/FirebaseContext';

export default function Hero() {
  const { user } = useFirebase();

  return (
    <div className="relative overflow-hidden pt-32 pb-96 sm:pt-40 sm:pb-96">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8 gap-4">
            <Coins className="h-16 w-16 text-indigo-400 animate-pulse" />
            <Rocket className="h-16 w-16 text-purple-400 animate-pulse" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text mb-8">
            Votre Portail vers l'Univers des Cryptomonnaies
          </h1>
          <div className="flex justify-center gap-8 mb-8">
            <div className="bg-gray-800/50 backdrop-blur rounded-lg p-4">
              <h3 className="text-xl font-semibold text-indigo-400">$CAME</h3>
              <p className="text-sm text-gray-300">Token de Gouvernance</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur rounded-lg p-4">
              <h3 className="text-xl font-semibold text-purple-400">$CMLN</h3>
              <p className="text-sm text-gray-300">Token Communautaire</p>
            </div>
          </div>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Coinpanions est votre compagnon de confiance pour explorer et prospérer dans le monde des cryptomonnaies. Gagnez des tokens en accomplissant des micro-tâches, participez à des événements exclusifs et rejoignez une communauté passionnée.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button 
              type="primary" 
              size="large" 
              icon={<ArrowRight className="w-5 h-5" />}
              className="min-w-[200px]"
            >
              {user ? 'Accéder aux Tâches' : 'Commencer'}
            </Button>
            <Button 
              size="large"
              className="min-w-[200px]"
            >
              Livre Blanc
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-96 bg-gradient-to-t from-gray-900 to-transparent" />
    </div>
  );
}