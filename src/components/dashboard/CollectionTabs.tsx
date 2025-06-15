'use client';
import React, { useState } from 'react';
import AnimeList from '../AnimeList';

const CollectionTabs = ({ collection }: any) => {
  const [activeTab, setActiveTab] = useState('koleksiku');

  const filteredCollection = collection;
  return (
    <main className="w-full md:w-2/3 lg:w-1/4 flex-1">
      <div className="mb-4 border-b border-slate-700">
        <nav className="-mb-px flex gap-6" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('koleksiku')}
            className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
              activeTab === 'koleksiku' ? 'border-accent text-accent' : 'border-transparent text-slate-400'
            }`}
          >
            Koleksiku
          </button>
        </nav>
      </div>
      <div>
        {activeTab === 'koleksiku' &&
          (collection.length > 0 ? (
            <AnimeList
              animes={collection.map((item: any) => ({
                mal_id: item.anime_mal_id,
                title: item.anime_title,
                images: { webp: { image_url: item.anime_image } },
              }))}
            />
          ) : (
            <p>Belum ada koleksi</p>
          ))}
      </div>
    </main>
  );
};

export default CollectionTabs;
