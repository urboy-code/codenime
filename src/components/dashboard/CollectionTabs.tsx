'use client';
import { useMemo, useState } from 'react';
import AnimeList from '../AnimeList';

type CollectionItem = {
  id: number;
  anime_mal_id: string;
  anime_title: string | null;
  anime_image: string | null;
  is_favorite: boolean;
};

type CollectionTabsProps = {
  collection: CollectionItem[];
};

const CollectionTabs = ({ collection }: CollectionTabsProps) => {
  const [activeTab, setActiveTab] = useState('koleksiku');

  const displayedAnimes = useMemo(() => {
    if (activeTab === 'favorite') {
      return collection.filter((item) => item.is_favorite);
    }

    return collection;
  }, [activeTab, collection]);

  return (
    <main className="w-full md:w-2/3 lg:w-1/4 flex-1">
      <div className="mb-4 border-b border-slate-700">
        <nav className="-mb-px flex gap-6" aria-label="Tabs">
          {/* Tombol Tab Koleksi */}
          <button
            onClick={() => setActiveTab('koleksiku')}
            className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
              activeTab === 'koleksiku' ? 'border-accent' : 'border-transparent text-slate-400'
            }`}
          >
            Koleksiku
          </button>

          {/* Tombol Tab Favorit */}
          <button
            onClick={() => setActiveTab('favorite')}
            className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
              activeTab === 'favorite' ? 'border-accent' : 'border-transparent text-slate-400'
            }`}
          >
            Favorit
          </button>
        </nav>
      </div>
      {/* Display animes */}
      <div>
        {displayedAnimes.length > 0 ? (
          <AnimeList
            animes={displayedAnimes.map((anime: any) => ({
              mal_id: parseInt(anime.anime_mal_id),
              title: anime.anime_title,
              images: { webp: { image_url: anime.anime_image } },
              is_favorite: anime.is_favorite,
            }))}
            isDashboard={true}
          />
        ) : (
          <p className="text-slate-400">Koleksimu masih kosong</p>
        )}
      </div>
    </main>
  );
};

export default CollectionTabs;
