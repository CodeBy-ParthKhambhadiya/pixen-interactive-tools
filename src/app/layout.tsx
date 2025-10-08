import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Parth Portfolio',
  description: 'My personal portfolio website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1 w-full px-6 py-10">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
