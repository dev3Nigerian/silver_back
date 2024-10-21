// src/app/layout.tsx
import './globals.css';
import DockedNav from '../app/components/dockedNav';

export const metadata = {
  title: 'Mobile-View App',
  description: 'A Next.js mobile-only app with docked navigation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Page content */}
        <main className="flex-grow">{children}</main>

        {/* Docked Navigation */}
        <DockedNav />
      </body>
    </html>
  );
}
