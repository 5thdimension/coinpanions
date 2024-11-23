import React from 'react';
import { Card, Avatar, Button, List } from 'antd';
import { MessageSquare, Users, Trophy, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

export default function CommunityPanel() {
  const events = [
    {
      id: 1,
      title: 'Weekly AMA Session',
      description: 'Join our weekly AMA with crypto experts',
      time: 'Tomorrow at 2 PM UTC',
      participants: 156,
      type: 'Live'
    },
    {
      id: 2,
      title: 'Trading Tournament',
      description: 'Compete with other traders for prizes',
      time: 'Starts in 3 days',
      participants: 89,
      type: 'Competition'
    },
    {
      id: 3,
      title: 'Educational Workshop',
      description: 'Learn about DeFi fundamentals',
      time: 'Next week',
      participants: 234,
      type: 'Education'
    }
  ];

  const topContributors = [
    {
      name: 'Alex Thompson',
      points: '15,234',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
      name: 'Sarah Chen',
      points: '12,456',
      avatar: 'https://i.pravatar.cc/150?img=2'
    },
    {
      name: 'Mike Johnson',
      points: '11,789',
      avatar: 'https://i.pravatar.cc/150?img=3'
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Community Hub</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <MotionCard
            title={
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                <span>Upcoming Events</span>
              </div>
            }
            className="bg-gray-800 border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <List
              dataSource={events}
              renderItem={event => (
                <List.Item
                  actions={[
                    <Button key="join" type="primary">Join</Button>
                  ]}
                >
                  <List.Item.Meta
                    title={
                      <div className="flex items-center gap-2">
                        <span className="text-white">{event.title}</span>
                        <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 text-indigo-400">
                          {event.type}
                        </span>
                      </div>
                    }
                    description={
                      <div className="space-y-2">
                        <p className="text-gray-400">{event.description}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-gray-500">{event.time}</span>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-500">{event.participants}</span>
                          </div>
                        </div>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </MotionCard>
        </div>

        <div className="space-y-6">
          <MotionCard
            title={
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                <span>Top Contributors</span>
              </div>
            }
            className="bg-gray-800 border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <List
              dataSource={topContributors}
              renderItem={(contributor, index) => (
                <List.Item>
                  <div className="flex items-center w-full">
                    <div className="flex items-center gap-3 flex-1">
                      <span className="text-gray-500 w-6">{index + 1}</span>
                      <Avatar src={contributor.avatar} />
                      <div>
                        <div className="text-white">{contributor.name}</div>
                        <div className="text-sm text-gray-400">
                          <Star className="w-3 h-3 inline mr-1" />
                          {contributor.points} points
                        </div>
                      </div>
                    </div>
                  </div>
                </List.Item>
              )}
            />
          </MotionCard>
        </div>
      </div>
    </div>
  );
}