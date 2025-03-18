"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path 
      ? 'text-gold font-bangers text-2xl tracking-wide transform scale-110 transition-all duration-200' 
      : 'text-white hover:text-gold font-bangers text-xl tracking-wide transform hover:scale-110 transition-all duration-200';
  };

  return (
    <nav className="bg-secondary p-4 border-b-4 border-black">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bangers tracking-wide text-gold transform hover:scale-110 transition-all duration-200">
          MangaGen
        </Link>
        <div className="space-x-8">
          <Link href="/gallery" className={isActive('/gallery')}>
            Gallery
          </Link>
          <Link href="/generator" className={isActive('/generator')}>
            Generator
          </Link>
          <Link href="/market" className={isActive('/market')}>
            Market
          </Link>
        </div>
      </div>
    </nav>
  );
} 