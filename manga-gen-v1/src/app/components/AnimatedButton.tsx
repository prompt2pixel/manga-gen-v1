"use client";

import { ReactNode } from 'react';
import Link from 'next/link';

interface AnimatedButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  isActive?: boolean;
  children: ReactNode;
}

export default function AnimatedButton({ 
  href, 
  variant = 'primary', 
  className = '',
  isActive = false,
  children 
}: AnimatedButtonProps) {
  const baseStyles = "relative font-barriecito tracking-wide transition-all duration-300 group";
  const pulseRing = "absolute inset-0 rounded-lg border-2 border-manga-dark transform scale-100 transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse";
  
  const variants = {
    primary: `
      bg-manga-dark text-manga-light
      hover:bg-manga-accent hover:text-manga-light
      active:bg-manga-dark active:scale-95
      focus:outline-none focus:ring-2 focus:ring-manga-accent focus:ring-offset-2
    `,
    secondary: `
      bg-manga-light text-manga-dark
      hover:bg-manga-gray hover:text-manga-dark
      active:bg-manga-light active:scale-95
      focus:outline-none focus:ring-2 focus:ring-manga-accent focus:ring-offset-2
    `
  };

  const activeStyles = isActive ? `
    after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full 
    after:h-1 after:bg-manga-dark after:transform after:scale-x-100
    scale-110 font-bold
  ` : `
    after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full 
    after:h-1 after:bg-manga-dark after:transform after:scale-x-0
    after:transition-transform after:duration-300
    hover:after:scale-x-100
  `;

  return (
    <Link 
      href={href}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${activeStyles}
        ${className}
      `}
    >
      <span className={pulseRing}></span>
      <span className="relative z-10 block">
        {children}
      </span>
    </Link>
  );
} 