'use client';
import { addFavorite } from '@/libs/actions/favorit.action';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/20/solid';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

// komponen ini menerima ID Anime yang akan dikirimkan ke server action
type FavoritButtonProps = {
  mal_id: string;
  is_favorite: boolean;
};

const FavoritButton = ({ mal_id, is_favorite }: FavoritButtonProps) => {
  const handleFavorite = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const result = await addFavorite(mal_id);

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
      onClick={handleFavorite}
      className="absolute top-2 left-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/80 transition-all hover:bg-text-primary"
      aria-label="Tambah ke favorit"
    >
      {is_favorite ? (
        <HeartIconSolid className="w-6 h-6 text-accent" />
      ) : (
        <HeartIconOutline className="w-6 h-6 hover:text-accent" />
      )}
    </button>
  );
};

export default FavoritButton;
