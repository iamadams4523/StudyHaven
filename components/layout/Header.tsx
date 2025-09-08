import React from 'react';
import { MenuIcon, BellIcon, UserIcon } from 'lucide-react';
interface HeaderProps {
  title: string;
  onMenuClick: () => void;
}
export function Header({ title, onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center">
          <button
            type="button"
            className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={onMenuClick}
          >
            <MenuIcon className="h-6 w-6" />
          </button>
          <h1 className="ml-2 md:ml-0 text-xl font-semibold text-gray-800">
            {title}
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <BellIcon className="h-6 w-6" />
          </button>
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
            <UserIcon className="h-5 w-5 text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
}
