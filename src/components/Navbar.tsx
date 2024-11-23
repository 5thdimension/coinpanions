import React, { useState } from 'react';
import { Button, Drawer, Menu, Avatar } from 'antd';
import { Menu as MenuIcon, X, Zap, LogOut } from 'lucide-react';
import { MenuItem } from '../types';
import { useFirebase } from '../contexts/FirebaseContext';
import { auth } from '../lib/firebase';
import AuthModal from './auth/AuthModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user } = useFirebase();

  const menuItems: MenuItem[] = [
    { key: 'features', label: 'Fonctionnalités' },
    { key: 'tasks', label: 'Tâches' },
    { key: 'stats', label: 'Statistiques' },
    { key: 'community', label: 'Communauté' },
  ];

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Erreur de déconnexion:', error);
    }
  };

  return (
    <>
      <nav className="bg-gray-900/50 backdrop-blur-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center gap-2">
                  <Zap className="h-8 w-8 text-indigo-500" />
                  <span className="text-xl font-bold">Coinpanions</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <Menu
                mode="horizontal"
                items={menuItems}
                className="bg-transparent border-none"
                selectedKeys={[]}
              />
              {user ? (
                <div className="flex items-center gap-4 ml-4">
                  <Avatar src={user.photoURL} alt={user.displayName || ''}>
                    {user.displayName?.[0]}
                  </Avatar>
                  <Button 
                    icon={<LogOut className="w-4 h-4" />}
                    onClick={handleLogout}
                  >
                    Déconnexion
                  </Button>
                </div>
              ) : (
                <Button 
                  type="primary" 
                  className="ml-4"
                  onClick={() => setShowAuthModal(true)}
                >
                  Connexion
                </Button>
              )}
            </div>
            <div className="md:hidden">
              <Button
                icon={isOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
                onClick={() => setIsOpen(!isOpen)}
                type="text"
                className="text-gray-400 hover:text-white"
              />
            </div>
          </div>
        </div>
      </nav>

      <Drawer
        placement="right"
        onClose={() => setIsOpen(false)}
        open={isOpen}
        width={280}
        className="md:hidden"
      >
        <Menu
          mode="vertical"
          items={menuItems}
          className="bg-transparent border-none"
          selectedKeys={[]}
        />
        {user ? (
          <div className="mt-4 space-y-4">
            <div className="flex items-center gap-2">
              <Avatar src={user.photoURL} alt={user.displayName || ''}>
                {user.displayName?.[0]}
              </Avatar>
              <span className="text-gray-200">{user.displayName}</span>
            </div>
            <Button 
              block
              icon={<LogOut className="w-4 h-4" />}
              onClick={handleLogout}
            >
              Déconnexion
            </Button>
          </div>
        ) : (
          <Button 
            type="primary" 
            block 
            className="mt-4"
            onClick={() => setShowAuthModal(true)}
          >
            Connexion
          </Button>
        )}
      </Drawer>

      <AuthModal 
        open={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </>
  );
}