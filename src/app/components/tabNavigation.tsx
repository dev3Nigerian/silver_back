// src/components/TabNavigation.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { name: 'Hot', path: 'hot' },
  { name: 'New', path: 'new' },
  { name: 'Played', path: 'played' }
];

export function TabNavigation() {
  const pathname = usePathname();
  const activeTab = pathname.split('/').pop() || 'hot';

 return (
    <div className="flex justify-around border-b border-gray-200 bg-white">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          href={`/home/${tab.path}`}
          className={`py-3 px-6 text-sm font-medium transition-colors ${
            activeTab === tab.path 
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
}