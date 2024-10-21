// src/app/page.tsx

import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/home'); // Redirect to the Home page
  return null; // Prevent any rendering while redirecting
}
