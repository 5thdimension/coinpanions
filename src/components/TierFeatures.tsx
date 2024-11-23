import React from 'react';
import { Card, List, Button } from 'antd';
import { Shield, Crown, Lock } from 'lucide-react';
import { useUserTier, visitorFeatures, registeredFeatures, premiumFeatures } from '../contexts/UserTierContext';
import { useFirebase } from '../contexts/FirebaseContext';

export default function TierFeatures() {
  const { tier } = useUserTier();
  const { user } = useFirebase();

  return (
    <div className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Access Tiers</h2>
          <p className="mt-4 text-gray-400">Unlock more features as you level up</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Visitor Tier */}
          <Card
            title={
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-gray-400" />
                <span>Visitor</span>
              </div>
            }
            className={`bg-gray-900 border-gray-700 ${
              tier.type === 'visitor' ? 'ring-2 ring-indigo-500' : ''
            }`}
          >
            <List
              dataSource={visitorFeatures}
              renderItem={(feature) => (
                <List.Item className="text-gray-300">
                  {feature}
                </List.Item>
              )}
            />
            {!user && (
              <Button type="primary" block className="mt-4">
                Register Now
              </Button>
            )}
          </Card>

          {/* Registered Tier */}
          <Card
            title={
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-indigo-400" />
                <span>Registered</span>
              </div>
            }
            className={`bg-gray-900 border-gray-700 ${
              tier.type === 'registered' && !tier.premium ? 'ring-2 ring-indigo-500' : ''
            }`}
          >
            <List
              dataSource={registeredFeatures}
              renderItem={(feature) => (
                <List.Item className="text-gray-300">
                  {feature}
                </List.Item>
              )}
            />
            {!user && (
              <Button type="primary" block className="mt-4" disabled>
                <Lock className="w-4 h-4 mr-2" />
                Login Required
              </Button>
            )}
          </Card>

          {/* Premium Tier */}
          <Card
            title={
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-yellow-400" />
                <span>Premium</span>
              </div>
            }
            className={`bg-gray-900 border-gray-700 ${
              tier.premium ? 'ring-2 ring-yellow-500' : ''
            }`}
          >
            <List
              dataSource={premiumFeatures}
              renderItem={(feature) => (
                <List.Item className="text-gray-300">
                  {feature}
                </List.Item>
              )}
            />
            {user && !user.premium ? (
              <Button type="primary" block className="mt-4 bg-yellow-500 hover:bg-yellow-600">
                Upgrade to Premium
              </Button>
            ) : !user && (
              <Button type="primary" block className="mt-4" disabled>
                <Lock className="w-4 h-4 mr-2" />
                Login Required
              </Button>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}