import React from 'react';
import { Card, Button, Table, Tag } from 'antd';
import { Wallet, ArrowUpRight, ArrowDownRight, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionCard = motion(Card);

export default function WalletPanel() {
  const transactions = [
    {
      key: '1',
      type: 'Received',
      amount: '100 $CAME',
      from: '0x1234...5678',
      date: '2024-03-15 14:30',
      status: 'Completed'
    },
    {
      key: '2',
      type: 'Sent',
      amount: '50 $CMLN',
      to: '0x8765...4321',
      date: '2024-03-15 12:15',
      status: 'Pending'
    }
  ];

  const columns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (text: string) => (
        <div className="flex items-center gap-2">
          {text === 'Received' ? (
            <ArrowDownRight className="w-4 h-4 text-green-500" />
          ) : (
            <ArrowUpRight className="w-4 h-4 text-red-500" />
          )}
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'From/To',
      dataIndex: 'from',
      key: 'from',
      render: (text: string, record: any) => (
        <div className="flex items-center gap-2">
          <span>{record.from || record.to}</span>
          <ExternalLink className="w-4 h-4 text-gray-400 cursor-pointer" />
        </div>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (text: string) => (
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text: string) => (
        <Tag color={text === 'Completed' ? 'success' : 'processing'}>
          {text}
        </Tag>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Wallet</h1>
        <Button type="primary" icon={<Wallet className="w-4 h-4" />}>
          Connect Wallet
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MotionCard
          className="bg-gray-800 border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400">$CAME Balance</p>
              <h3 className="text-3xl font-bold text-white mt-2">1,234.56</h3>
              <div className="flex items-center gap-2 mt-2">
                <ArrowUpRight className="w-4 h-4 text-green-500" />
                <span className="text-green-500">+5.23%</span>
                <span className="text-gray-400">24h</span>
              </div>
            </div>
            <Button type="primary">Send</Button>
          </div>
        </MotionCard>

        <MotionCard
          className="bg-gray-800 border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400">$CMLN Balance</p>
              <h3 className="text-3xl font-bold text-white mt-2">5,678.90</h3>
              <div className="flex items-center gap-2 mt-2">
                <ArrowDownRight className="w-4 h-4 text-red-500" />
                <span className="text-red-500">-2.45%</span>
                <span className="text-gray-400">24h</span>
              </div>
            </div>
            <Button type="primary" className="bg-purple-500 hover:bg-purple-600">
              Send
            </Button>
          </div>
        </MotionCard>
      </div>

      <MotionCard
        title="Recent Transactions"
        className="bg-gray-800 border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Table
          columns={columns}
          dataSource={transactions}
          pagination={false}
          className="custom-table"
        />
      </MotionCard>
    </div>
  );
}