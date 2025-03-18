import React from 'react';

export default function GalleryPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-gold">Image Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Gallery grid will be populated here */}
        <div className="bg-secondary p-4 rounded-lg">
          <p className="text-white">Gallery content coming soon...</p>
        </div>
      </div>
    </main>
  );
} 