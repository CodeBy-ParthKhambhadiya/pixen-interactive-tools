// /src/app/layout.tsx
import '../../app/globals.css';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Pixen',
  description: 'Pixen App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        
        {/* Global Header */}
        <header className="bg-red-600 text-white p-4 shadow-md">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Pixen</h1>
            <nav className="space-x-4">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/features" className="hover:underline">Features</Link>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 max-w-7xl mx-auto p-4">
          {children}
        </main>

        {/* Global Footer */}
        <footer className="bg-red-600 text-white p-4 mt-auto">
          <div className="max-w-7xl mx-auto text-center">
            &copy; {new Date().getFullYear()} Pixen. All rights reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}
