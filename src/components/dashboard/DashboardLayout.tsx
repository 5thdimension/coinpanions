import React from 'react';
import { Layout, Menu } from 'antd';
import { 
  LayoutDashboard, 
  Coins, 
  Trophy,
  Users,
  Settings,
  BarChart3,
  Wallet,
  MessageSquare
} from 'lucide-react';
import DashboardStats from './DashboardStats';
import TokenPanel from './TokenPanel';
import TasksPanel from './TasksPanel';
import CommunityPanel from './CommunityPanel';
import AnalyticsPanel from './AnalyticsPanel';
import WalletPanel from './WalletPanel';

const { Sider, Content } = Layout;

export default function DashboardLayout() {
  const [selectedPanel, setSelectedPanel] = React.useState('overview');

  const menuItems = [
    {
      key: 'overview',
      icon: <LayoutDashboard className="w-5 h-5" />,
      label: 'Overview'
    },
    {
      key: 'tokens',
      icon: <Coins className="w-5 h-5" />,
      label: 'Tokens'
    },
    {
      key: 'tasks',
      icon: <Trophy className="w-5 h-5" />,
      label: 'Tasks'
    },
    {
      key: 'community',
      icon: <Users className="w-5 h-5" />,
      label: 'Community'
    },
    {
      key: 'analytics',
      icon: <BarChart3 className="w-5 h-5" />,
      label: 'Analytics'
    },
    {
      key: 'wallet',
      icon: <Wallet className="w-5 h-5" />,
      label: 'Wallet'
    },
    {
      key: 'settings',
      icon: <Settings className="w-5 h-5" />,
      label: 'Settings'
    }
  ];

  const renderPanel = () => {
    switch (selectedPanel) {
      case 'overview':
        return <DashboardStats />;
      case 'tokens':
        return <TokenPanel />;
      case 'tasks':
        return <TasksPanel />;
      case 'community':
        return <CommunityPanel />;
      case 'analytics':
        return <AnalyticsPanel />;
      case 'wallet':
        return <WalletPanel />;
      default:
        return <DashboardStats />;
    }
  };

  return (
    <Layout className="min-h-screen bg-gray-900">
      <Sider
        theme="dark"
        className="bg-gray-800 border-r border-gray-700"
        width={260}
      >
        <div className="flex items-center gap-2 p-4 border-b border-gray-700">
          <MessageSquare className="w-8 h-8 text-indigo-500" />
          <span className="text-xl font-bold text-white">Coinpanions</span>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedPanel]}
          onClick={({ key }) => setSelectedPanel(key)}
          items={menuItems}
          className="bg-gray-800 border-r-0"
        />
      </Sider>
      <Content className="p-6">
        {renderPanel()}
      </Content>
    </Layout>
  );
}