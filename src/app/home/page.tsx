// src/app/home/page.tsx

// import { TabNavigation } from '../components/tabNavigation';  // Add this import

// // Keep this as a Server Component (remove "use client")
// export default function HomePage() {
//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Home</h1>
//       <TabNavigation />
//     </div>
//   );
// }
// src/app/home/page.tsx
import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/home/hot');
}