'use client';
import { PlusIcon } from '@heroicons/react/24/outline';
import { addToCollection } from '@/libs/actions/collection.action';
import React from 'react';
import toast from 'react-hot-toast';

type CardCollectionButtonProps = {
  anime_mal_id: string;
  anime_image: string;
  anime_title: string;
};

const CardCollectionButton = ({ anime_mal_id, anime_image, anime_title }: CardCollectionButtonProps) => {
  const handleCollection = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const result = await addToCollection(anime_mal_id, anime_image, anime_title);

    if (result.status === 'success') {
      toast.success(result.message);
    } else if (result.status === 'info') {
      toast(result.message, { icon: 'ℹ️' });
    } else {
      toast.error(result.message);
    }
  };

  return (
    <button
      onClick={handleCollection}
      className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/80 text-text-primary transition-all hover:bg-accent"
    >
      <PlusIcon className="h-5 w-5" />
    </button>
  );
};

export default CardCollectionButton;
