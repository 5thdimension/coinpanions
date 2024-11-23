import React from 'react';
import { ConfigProvider, theme } from 'antd';
import DashboardLayout from './components/dashboard/DashboardLayout';
import { FirebaseProvider } from './contexts/FirebaseContext';
import { UserTierProvider } from './contexts/UserTierContext';

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#818cf8',
          borderRadius: 8,
          colorBgContainer: '#1f2937',
          colorBgElevated: '#111827',
        },
      }}
    >
      <FirebaseProvider>
        <UserTierProvider>
          <DashboardLayout />
        </UserTierProvider>
      </FirebaseProvider>
    </ConfigProvider>
  );
}

export default App;