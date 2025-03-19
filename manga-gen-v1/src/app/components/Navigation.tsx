"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/gallery', label: 'Gallery' },
    { href: '/generator', label: 'Generator' },
    { href: '/market', label: 'Market' },
  ];

  return (
    <>
      {/* Logo Section */}
      <div className="fixed top-8 left-8 z-50">
        <Link 
          href="/" 
          className="p-2 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-2 transform-gpu"
        >
          <Image
            src="/logo.png"
            alt="MangaGen Logo"
            width={120}
            height={40}
            priority
            className="filter drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
          />
        </Link>
      </div>

      {/* Vertical Navigation */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-12">
        <div className="h-[200px] w-[2px] bg-white opacity-50" />
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`group relative writing-vertical-rl transform transition-transform duration-300
                      font-barriecito text-xl tracking-wider ${
                        pathname === item.href 
                          ? 'text-white scale-110' 
                          : 'text-white/70 hover:text-white hover:scale-105'
                      }`}
          >
            {item.label}
            {pathname === item.href && (
              <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-full" />
            )}
          </Link>
        ))}
        <div className="h-[200px] w-[2px] bg-white opacity-50" />
      </nav>
    </>
  );
} 