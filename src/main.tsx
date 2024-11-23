import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { FirebaseProvider } from './contexts/FirebaseContext';
import { UserTierProvider } from './contexts/UserTierContext';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirebaseProvider>
      <UserTierProvider>
        <App />
      </UserTierProvider>
    </FirebaseProvider>
  </StrictMode>
);