'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `mx-2 px-3 py-1 rounded-md transition-all duration-300 ${
      pathname === path
        ? 'font-bold from-blue-500 to-indigo-500 bg-gradient-to-r text-white'
        : 'text-gray-200 dark:text-gray-300 hover:text-yellow-400 dark:hover:text-yellow-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white'
    }`;

  return (
    <header className="p-6 bg-gray-900 dark:bg-gray-800 text-white flex justify-between items-center shadow-md sticky top-0 z-50">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold">
        <Link href="/">Pixen</Link>
      </h1>

      {/* Navigation */}
      <nav className="flex flex-wrap items-center gap-2">
        {/* <Link href="/" className={linkClasses('/')}>Home</Link>
        <Link href="/about" className={linkClasses('/about')}>About</Link>
        <Link href="/projects" className={linkClasses('/projects')}>Projects</Link>
        <Link href="/resume" className={linkClasses('/resume')}>Resume</Link>
        <Link href="/blog" className={linkClasses('/blog')}>Blog</Link> */}

        {/* Extra pages */}
        <Link href="/hero-description" className={linkClasses('/hero-description')}>Hero</Link>
        <Link href="/interactive-features" className={linkClasses('/interactive-features')}>Features</Link>
        <Link href="/photo-editor" className={linkClasses('/photo-editor')}>Photo Editor</Link>
        <Link href="/ai-chat-simulator" className={linkClasses('/ai-chat-simulator')}>AI Chat</Link>
        <Link href="/smile-bot" className={linkClasses('/smile-bot')}>Smile Bot</Link>
      </nav>
    </header>
  );
}
