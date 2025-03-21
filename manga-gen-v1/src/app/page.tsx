"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-barriecito text-7xl text-white mb-6 animate-fadeIn tracking-wide">
              Welcome to Manga Meme Generator
            </h1>
            <p className="font-barriecito text-2xl text-white/80 mb-12 max-w-2xl mx-auto animate-fadeIn animation-delay-200">
              Transform your ideas into stunning manga artwork using the power of AI
            </p>
            <div className="space-x-8 animate-fadeIn animation-delay-400">
              <Link 
                href="/generator" 
                className="bg-white text-black px-8 py-4 rounded-lg font-barriecito text-2xl tracking-wide
                          transform transition-all duration-200 inline-block
                          border-2 border-white shadow-manga hover:shadow-manga-hover
                          hover:-translate-y-1 hover:scale-105"
              >
                Start Creating!
              </Link>
              <Link 
                href="/gallery" 
                className="bg-transparent text-white px-8 py-4 rounded-lg font-barriecito text-2xl tracking-wide
                          transform transition-all duration-200 inline-block
                          border-2 border-white shadow-manga hover:shadow-manga-hover
                          hover:-translate-y-1 hover:scale-105"
              >
                Explore Gallery!
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <h2 className="font-barriecito text-5xl text-white mb-12 text-center tracking-wide">What You Can Create!</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                title="Character Design"
                description="Create unique manga characters with customizable features, expressions, and poses!"
              />
              <FeatureCard 
                title="Scene Generation"
                description="Generate dynamic manga scenes with detailed backgrounds and compelling compositions!"
              />
              <FeatureCard 
                title="Style Transfer"
                description="Transform your sketches into professional manga-style artwork with various art styles!"
              />
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-black/30">
          <div className="container mx-auto px-4">
            <h2 className="font-barriecito text-5xl text-white mb-12 text-center tracking-wide">Who Can Use It?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <UseCaseCard 
                title="For Artists"
                description="Speed up your workflow, generate reference images, and explore new art styles effortlessly!"
              />
              <UseCaseCard 
                title="For Writers"
                description="Visualize your characters and scenes instantly as you develop your manga story!"
              />
              <UseCaseCard 
                title="For Publishers"
                description="Create promotional materials and concept art quickly for your manga projects!"
              />
              <UseCaseCard 
                title="For Enthusiasts"
                description="Bring your manga ideas to life without extensive artistic training!"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`bg-white/10 backdrop-blur-sm p-6 rounded-lg transform transition-all duration-700
                  border-2 border-white/30 
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <h3 className="font-barriecito text-3xl text-white mb-4 tracking-wide">{title}</h3>
      <p className="font-barriecito text-white/80 text-lg">{description}</p>
    </div>
  );
}

function UseCaseCard({ title, description }: { title: string; description: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`bg-white/5 backdrop-blur-sm p-8 rounded-lg transform transition-all duration-700
                  border-2 border-white/20 hover:border-white/40
                  ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
    >
      <h3 className="font-barriecito text-3xl text-white mb-4 tracking-wide">{title}</h3>
      <p className="font-barriecito text-white/80 text-lg">{description}</p>
    </div>
  );
}
