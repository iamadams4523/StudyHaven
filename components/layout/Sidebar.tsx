'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // ✅ Next.js hook
import {
  BookOpenIcon,
  GraduationCapIcon,
  FileTextIcon,
  BookIcon,
  UsersIcon,
  SettingsIcon,
  XIcon,
  LayoutDashboardIcon,
} from 'lucide-react';

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function Sidebar({ open, setOpen }: SidebarProps) {
  const pathname = usePathname(); // ✅ replaces useLocation()

  const navigation = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboardIcon },
    { name: 'Levels', href: '/levels', icon: GraduationCapIcon },
    { name: 'Past Questions', href: '/past-questions', icon: FileTextIcon },
    { name: 'Course Materials', href: '/course-materials', icon: BookOpenIcon },
    { name: 'Students', href: '/students', icon: UsersIcon },
    { name: 'Books', href: '/books', icon: BookIcon },
    { name: 'Settings', href: '/settings', icon: SettingsIcon },
  ];

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:z-0
        `}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <Link href="/" className="flex items-center">
            <BookOpenIcon className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">
              Library Admin
            </span>
          </Link>
          <button
            className="md:hidden text-gray-500 hover:text-gray-700"
            onClick={() => setOpen(false)}
          >
            <XIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-5 px-4 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href; // ✅ active check
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  group flex items-center px-2 py-2 text-base font-medium rounded-md
                  ${
                    isActive
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }
                `}
              >
                <Icon
                  className={`
                    mr-4 h-5 w-5
                    ${
                      isActive
                        ? 'text-indigo-600'
                        : 'text-gray-500 group-hover:text-gray-500'
                    }
                  `}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
