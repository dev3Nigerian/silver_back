// src/components/DockedNav.tsx
import Link from 'next/link';
import Image from 'next/image';

const DockedNav = () => {
  return (
    <div className="fixed bottom-0 w-full bg-white flex justify-around py-3 shadow-md">
      <Link href="/" className="text-center text-gray-500">
        <Image src="/home-icon.svg" alt="Home" width={24} height={24} />
        <p className="text-xs mt-1">Home</p>
      </Link>
      
      <Link href="/tasks" className="text-center text-gray-500">
        <Image src="/tasks-icon.svg" alt="Tasks" width={24} height={24} />
        <p className="text-xs mt-1">Tasks</p>
      </Link>
      
      <Link href="/friends" className="text-center text-gray-500">
        <Image src="/friends-icon.svg" alt="Friends" width={24} height={24} />
        <p className="text-xs mt-1">Friends</p>
      </Link>
      
      <Link href="/profile" className="text-center text-gray-500">
        <Image src="/profile-icon.svg" alt="Profile" width={24} height={24} />
        <p className="text-xs mt-1">Profile</p>
      </Link>
    </div>
  );
};

export default DockedNav;