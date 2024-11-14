// // src/app/page.tsx

import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/home'); // Redirect to the Home page
  return null; // Prevent any rendering while redirecting
}
// src/app/page.tsx

// "use client"; // This is necessary for client-side effects
// import { useEffect, useState } from 'react';
// import { redirect } from 'next/navigation';

// export default function RootPage() {
//   const [isMobile, setIsMobile] = useState<boolean | null>(null);

//   useEffect(() => {
//     // Check if the screen width is below 640px to determine if it's a mobile view
//     const checkIfMobile = () => window.innerWidth < 640;
    
//     // Set the mobile state on initial load and on resize
//     setIsMobile(checkIfMobile());
//     window.addEventListener("resize", () => setIsMobile(checkIfMobile()));

//     return () => window.removeEventListener("resize", () => setIsMobile(checkIfMobile()));
//   }, []);

//   // Redirect to /home if on mobile
//   if (isMobile) {
//     redirect('/home');
//     return null; // Prevent rendering during the redirect
//   } else {
//     redirect('/home');
//     return null; // Prevent rendering during the redirect
//   }

//   // Display a message or blank page for non-mobile devices
//   // return (
//   //   <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center">
//   //     <h1 className="text-2xl font-semibold">This site is available on mobile devices only.</h1>
//   //   </div>
//   // );
// }
