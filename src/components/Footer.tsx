import React from 'react';
import { Button, Divider } from 'antd';
import { Github, Twitter, MessageCircle, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-indigo-500" />
              <h3 className="text-xl font-bold">Coinpanions</h3>
            </div>
            <p className="text-gray-400">
              Une plateforme innovante qui intègre Telegram et plusieurs écosystèmes blockchain, proposant un système complet de points, micro-tâches et outils financiers pour les passionnés de cryptomonnaies.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Ressources</h4>
            <ul className="mt-4 space-y-2">
              <li><Button type="link" className="text-gray-400 hover:text-indigo-400 p-0">Documentation</Button></li>
              <li><Button type="link" className="text-gray-400 hover:text-indigo-400 p-0">Livre Blanc</Button></li>
              <li><Button type="link" className="text-gray-400 hover:text-indigo-400 p-0">Blog</Button></li>
              <li><Button type="link" className="text-gray-400 hover:text-indigo-400 p-0">FAQ</Button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Communauté</h4>
            <div className="mt-4 flex space-x-4">
              <Button
                type="text"
                icon={<Github className="h-6 w-6" />}
                className="text-gray-400 hover:text-indigo-400"
              />
              <Button
                type="text"
                icon={<Twitter className="h-6 w-6" />}
                className="text-gray-400 hover:text-indigo-400"
              />
              <Button
                type="text"
                icon={<MessageCircle className="h-6 w-6" />}
                className="text-gray-400 hover:text-indigo-400"
              />
            </div>
          </div>
        </div>
        <Divider className="border-gray-800 my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Coinpanions. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <Button type="link" className="text-gray-400 hover:text-indigo-400 p-0">Conditions d'utilisation</Button>
            <Button type="link" className="text-gray-400 hover:text-indigo-400 p-0">Politique de confidentialité</Button>
          </div>
        </div>
      </div>
    </footer>
  );
}