// src/components/DockedNav.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DockedNav = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around items-center py-2 px-4 shadow-lg space-x-4">
      <Link href="/home" className={`flex flex-col items-center flex-shrink-0 ${isActive('/home') ? 'text-blue-500' : 'text-gray-500'}`}>
        <svg className="icon-fixed-size" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span className="text-xs mt-1">Home</span>
      </Link>

      <Link href="/tasks" className={`flex flex-col items-center flex-shrink-0 ${isActive('/tasks') ? 'text-blue-500' : 'text-gray-500'}`}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <span className="text-xs mt-1">Tasks</span>
      </Link>

      <Link href="/friends" className={`flex flex-col items-center flex-shrink-0 ${isActive('/friends') ? 'text-blue-500' : 'text-gray-500'}`}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <span className="text-xs mt-1">Friends</span>
      </Link>

      <Link href="/profile" className={`flex flex-col items-center flex-shrink-0 ${isActive('/profile') ? 'text-blue-500' : 'text-gray-500'}`}>
        <svg className="icon-fixed-size" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span className="text-xs mt-1">Profile</span>
      </Link>
    </div>
  );
};

export default DockedNav;
