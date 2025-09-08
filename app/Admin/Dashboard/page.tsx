'use client';
import React from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/Card';
import { StatCard } from '@/components/ui/StatCard';
import { DataTable } from '@/components/ui/DataTable';
import {
  BookOpenIcon,
  GraduationCapIcon,
  FileTextIcon,
  BookIcon,
  UsersIcon,
} from 'lucide-react';
const Dashboard = () => {
  // Mock data for recent activities
  const recentActivities = [
    {
      action: 'Added new course material',
      subject: 'Mathematics Calculus',
      user: 'Admin',
      time: '2 hours ago',
    },
    {
      action: 'Updated past question',
      subject: 'Physics Mechanics',
      user: 'Admin',
      time: '5 hours ago',
    },
    {
      action: 'Added new level',
      subject: 'Senior Secondary 3',
      user: 'Admin',
      time: 'Yesterday',
    },
    {
      action: 'Deleted course material',
      subject: 'English Literature',
      user: 'Admin',
      time: '2 days ago',
    },
  ];
  // Columns for recent activities table
  const activityColumns = [
    {
      key: 'action',
      header: 'Action',
      width: 'w-1/4',
    },
    {
      key: 'subject',
      header: 'Subject',
      width: 'w-1/3',
    },
    {
      key: 'user',
      header: 'User',
      width: 'w-1/6',
    },
    {
      key: 'time',
      header: 'Time',
      width: 'w-1/6',
    },
  ];
  return (
    <DashboardLayout title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        <StatCard
          title="Total Students"
          value="1,234"
          icon={UsersIcon}
          trend={{
            value: 12,
            isPositive: true,
          }}
        />
        <StatCard
          title="Course Materials"
          value="356"
          icon={BookOpenIcon}
          iconColor="text-blue-600"
        />
        <StatCard
          title="Past Questions"
          value="512"
          icon={FileTextIcon}
          iconColor="text-green-600"
        />
        <StatCard
          title="Academic Levels"
          value="6"
          icon={GraduationCapIcon}
          iconColor="text-purple-600"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card title="Recent Activities">
            <DataTable columns={activityColumns} data={recentActivities} />
          </Card>
        </div>
        <div>
          <Card title="Quick Actions" className="mb-6">
            <div className="space-y-3">
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md flex items-center justify-center">
                <BookOpenIcon className="h-5 w-5 mr-2" />
                Add Course Material
              </button>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center justify-center">
                <FileTextIcon className="h-5 w-5 mr-2" />
                Upload Past Question
              </button>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md flex items-center justify-center">
                <GraduationCapIcon className="h-5 w-5 mr-2" />
                Manage Levels
              </button>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md flex items-center justify-center">
                <BookIcon className="h-5 w-5 mr-2" />
                Add Book
              </button>
            </div>
          </Card>
          <Card title="System Status">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Storage</span>
                <span className="text-sm font-medium">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{
                    width: '65%',
                  }}
                ></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Last Backup</span>
                <span className="text-sm font-medium text-green-600">
                  Today, 09:32 AM
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">System Version</span>
                <span className="text-sm font-medium">v2.3.0</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
