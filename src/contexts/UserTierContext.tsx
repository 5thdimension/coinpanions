import React, { createContext, useContext } from 'react';
import { useFirebase } from './FirebaseContext';
import { UserTier } from '../types';

// Define feature lists first
const visitorFeatures = [
  'View basic platform information',
  'Browse public tasks',
  'View token information'
];

const registeredFeatures = [
  ...visitorFeatures,
  'Complete tasks and earn rewards',
  'Participate in community events',
  'Track progress and earnings',
  'Access basic analytics'
];

const premiumFeatures = [
  ...registeredFeatures,
  'Access premium tasks',
  'Priority support',
  'Advanced analytics',
  'Exclusive events participation'
];

interface UserTierContextType {
  tier: UserTier;
  features: string[];
}

// Initialize context with visitor features
const UserTierContext = createContext<UserTierContextType>({
  tier: {
    type: 'visitor',
    premium: false,
    features: visitorFeatures
  },
  features: visitorFeatures
});

export function UserTierProvider({ children }: { children: React.ReactNode }) {
  const { user } = useFirebase();

  const tier: UserTier = {
    type: user ? 'registered' : 'visitor',
    premium: user?.premium || false,
    features: user ? (user.premium ? premiumFeatures : registeredFeatures) : visitorFeatures
  };

  return (
    <UserTierContext.Provider value={{ tier, features: tier.features }}>
      {children}
    </UserTierContext.Provider>
  );
}

export const useUserTier = () => useContext(UserTierContext);

// Export features for use in other components
export { visitorFeatures, registeredFeatures, premiumFeatures };