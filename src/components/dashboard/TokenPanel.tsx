import React from 'react';
import { Card, Table, Button, Tag, Tooltip } from 'antd';
import { ArrowUpRight, ArrowDownRight, Clock, Info } from 'lucide-react';

export default function TokenPanel() {
  const columns = [
    {
      title: 'Token',
      dataIndex: 'token',
      key: 'token',
      render: (text: string) => (
        <div className="flex items-center gap-2">
          <span className={text === '$CAME' ? 'text-indigo-400' : 'text-purple-400'}>
            {text}
          </span>
        </div>
      ),
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: number) => (
        <span className="font-medium">{amount.toFixed(2)}</span>
      ),
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (type: string) => (
        <Tag color={type === 'Earned' ? 'success' : 'processing'}>
          {type}
        </Tag>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date: string) => (
        <div className="flex items-center gap-1 text-gray-400">
          <Clock className="w-4 h-4" />
          <span>{date}</span>
        </div>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'Completed' ? 'success' : 'warning'}>
          {status}
        </Tag>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      token: '$CAME',
      amount: 100.00,
      type: 'Earned',
      date: '2024-03-15 14:30',
      status: 'Completed',
    },
    {
      key: '2',
      token: '$CMLN',
      amount: 250.00,
      type: 'Staked',
      date: '2024-03-15 12:15',
      status: 'Processing',
    },
    // Add more transaction data as needed
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Token Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gray-800 border-gray-700">
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
            <Tooltip title="Governance & Utility Token">
              <Button type="text" icon={<Info className="w-5 h-5 text-gray-400" />} />
            </Tooltip>
          </div>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
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
            <Tooltip title="Community & Rewards Token">
              <Button type="text" icon={<Info className="w-5 h-5 text-gray-400" />} />
            </Tooltip>
          </div>
        </Card>
      </div>

      <Card 
        title="Recent Transactions" 
        className="bg-gray-800 border-gray-700"
        extra={
          <Button type="primary">
            View All
          </Button>
        }
      >
        <Table 
          columns={columns} 
          dataSource={data} 
          pagination={false}
          className="custom-table"
        />
      </Card>
    </div>
  );
}