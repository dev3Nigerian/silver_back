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
    <>
      <div className="flex justify-around border-b border-gray-200 mb-4">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            href={`./home/${tab.path}`}
            className={`py-2 px-4 transition-colors ${
              activeTab === tab.path 
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.name}
          </Link>
        ))}
      </div>

      <div>
        <p>This is the {activeTab} section of the Home page.</p>
      </div>
    </>
  );
}