import React, { useState } from 'react';
import { Modal, Button, message } from 'antd';
import { signInWithPopup, AuthError } from 'firebase/auth';
import { auth, googleProvider } from '../../lib/firebase';
import { LogIn } from 'lucide-react';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AuthModal({ open, onClose }: AuthModalProps) {
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      // Configure popup behavior
      googleProvider.setCustomParameters({
        prompt: 'select_account'
      });
      
      await signInWithPopup(auth, googleProvider);
      message.success('Connexion réussie!');
      onClose();
    } catch (error) {
      const authError = error as AuthError;
      console.error('Auth error:', authError);
      
      switch (authError.code) {
        case 'auth/popup-blocked':
          message.error('Veuillez autoriser les popups pour vous connecter');
          break;
        case 'auth/popup-closed-by-user':
        case 'auth/cancelled-popup-request':
          message.info('Connexion annulée');
          break;
        default:
          message.error('Erreur de connexion. Veuillez réessayer.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      title={
        <div className="text-center">
          <h3 className="text-xl font-semibold">Bienvenue sur Coinpanions</h3>
          <p className="text-sm text-gray-400 mt-1">
            Connectez-vous pour accéder à toutes les fonctionnalités
          </p>
        </div>
      }
      className="auth-modal"
      maskClosable={!loading}
      closable={!loading}
      width={400}
    >
      <div className="py-8 space-y-4">
        <Button
          type="primary"
          size="large"
          block
          icon={<LogIn className="w-5 h-5" />}
          onClick={handleGoogleSignIn}
          loading={loading}
          disabled={loading}
          className="h-12"
        >
          Continuer avec Google
        </Button>
        
        <div className="text-center text-sm text-gray-400">
          En continuant, vous acceptez nos{' '}
          <Button type="link" className="p-0 text-indigo-400 hover:text-indigo-300">
            conditions d'utilisation
          </Button>{' '}
          et notre{' '}
          <Button type="link" className="p-0 text-indigo-400 hover:text-indigo-300">
            politique de confidentialité
          </Button>
        </div>
      </div>
    </Modal>
  );
}