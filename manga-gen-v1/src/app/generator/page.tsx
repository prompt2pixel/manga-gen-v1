import React from 'react';

export default function GeneratorPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-gold">Image Generator</h1>
      <div className="max-w-2xl mx-auto">
        <div className="bg-secondary p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-white">Generate Your Manga</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-white mb-2">Prompt</label>
              <textarea 
                className="w-full p-2 rounded bg-background-dark text-white border border-secondary-slate"
                rows={4}
                placeholder="Describe your manga scene..."
              />
            </div>
            <button className="btn-primary w-full">
              Generate Image
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 