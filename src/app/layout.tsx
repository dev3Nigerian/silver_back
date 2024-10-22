// src/app/layout.tsx
// import './globals.css';
// import DockedNav from '../app/components/dockedNav';

// export const metadata = {
//   title: 'Mobile-View App',
//   description: 'A Next.js mobile-only app with docked navigation.',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen flex flex-col">
//         {/* Page content */}
//         <main className="flex-grow">{children}</main>

//         {/* Docked Navigation */}
//         <DockedNav />
//       </body>
//     </html>
//   );
// }
// src/app/layout.tsx
import type { Metadata } from 'next';
import DockedNav from '../app/components/dockedNav';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mobile App',
  description: 'Mobile app with docked navigation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <main className="pb-16">
          {children}
        </main>
        <DockedNav />
      </body>
    </html>
  );
}