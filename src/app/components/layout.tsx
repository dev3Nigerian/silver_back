// components/Layout.tsx

import { ReactNode } from 'react';
import DockedNav from './dockedNav';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      {children}
      <DockedNav />
    </div>
  );
}
