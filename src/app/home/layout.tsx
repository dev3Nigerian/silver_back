// src/app/home/layout.tsx
import { TabNavigation } from '../components/tabNavigation';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <TabNavigation />
      {children}
    </div>
  );
}