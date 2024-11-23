import React from 'react';
import { Card, Button, Tag } from 'antd';
import { Users, Calendar, Trophy } from 'lucide-react';

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  participants: number;
  reward: string;
  type: 'tournament' | 'ama' | 'workshop';
  onJoin: () => void;
}

export default function EventCard({
  title,
  description,
  date,
  participants,
  reward,
  type,
  onJoin
}: EventCardProps) {
  const typeColors = {
    tournament: 'error',
    ama: 'processing',
    workshop: 'success'
  };

  const typeIcons = {
    tournament: <Trophy className="w-4 h-4" />,
    ama: <Users className="w-4 h-4" />,
    workshop: <Calendar className="w-4 h-4" />
  };

  return (
    <Card className="bg-gray-800 border-gray-700">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <Tag color={typeColors[type]} icon={typeIcons[type]}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Tag>
            </div>
            <p className="text-gray-400">{description}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Users className="w-4 h-4" />
              <span>{participants} participants</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Trophy className="w-4 h-4" />
              <span>{reward}</span>
            </div>
          </div>
          <Button type="primary" onClick={onJoin}>
            Join Event
          </Button>
        </div>
      </div>
    </Card>
  );
}