import React from 'react';
import { Box, LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  iconColor?: string;
}

export function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  iconColor = 'text-indigo-600',
}: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{value}</p>
          {trend && (
            <div className="mt-1 flex items-center">
              <span
                className={`text-sm ${
                  trend.isPositive ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {trend.isPositive ? '+' : ''}
                {trend.value}%
              </span>
              <span className="ml-2 text-xs text-gray-500">
                from last month
              </span>
            </div>
          )}
        </div>
        <div
          className={`p-2 rounded-lg ${iconColor
            .replace('text-', 'bg-')
            .replace('600', '100')}`}
        >
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
      </div>
    </div>
  );
}
