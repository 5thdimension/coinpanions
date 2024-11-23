export interface UserTier {
  type: 'visitor' | 'registered';
  premium: boolean;
  features: string[];
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}

export interface MenuItem {
  key: string;
  label: string;
  href?: string;
  requiresAuth?: boolean;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  reward: {
    amount: number;
    token: '$CAME' | '$CMLN';
  };
  difficulty: 'easy' | 'medium' | 'hard';
  category: 'social' | 'defi' | 'gaming' | 'education' | 'analysis';
  timeEstimate: string;
  status: 'available' | 'in_progress' | 'completed';
  premium?: boolean;
  requiresAuth: boolean;
}