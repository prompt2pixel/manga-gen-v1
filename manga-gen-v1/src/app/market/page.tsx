import React from 'react';

export default function MarketPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-gold">Manga Market</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Market items will be populated here */}
        <div className="bg-secondary p-6 rounded-lg">
          <div className="aspect-square bg-background-dark rounded-lg mb-4"></div>
          <h3 className="text-xl font-semibold text-white mb-2">Manga Title</h3>
          <p className="text-gray-400 mb-4">Description of the manga...</p>
          <div className="flex justify-between items-center">
            <span className="text-gold font-semibold">$XX.XX</span>
            <button className="btn-primary">Purchase</button>
          </div>
        </div>
      </div>
    </main>
  );
} 