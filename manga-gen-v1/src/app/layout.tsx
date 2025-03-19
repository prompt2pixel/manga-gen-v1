"use client";

import './globals.css';
import Navigation from './components/Navigation';
import { Barriecito } from 'next/font/google';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const barriecito = Barriecito({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-barriecito',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // For client-side scrolling effects
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blurAmount = Math.min(scrollY / 1000 * 10, 10);

  return (
    <html lang="en">
      <body className={`${barriecito.variable} font-barriecito relative min-h-screen`}>
        {/* Persistent Background Image */}
        <div className="fixed inset-0 w-full h-full z-0 bg-amber-50">
          <Image 
            src="/mang.jpg"
            alt="Manga background"
            fill
            style={{
              objectFit: 'cover',
              opacity: 0.1,
              filter: `blur(${blurAmount}px)`,
            }}
          />
        </div>
        
        {/* Persistent Dark Overlay */}
        <div className="fixed inset-0 w-full h-full z-0 bg-black opacity-80" />
        
        {/* Navigation - will appear on every page */}
        <Navigation />
        
        {/* Page Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
