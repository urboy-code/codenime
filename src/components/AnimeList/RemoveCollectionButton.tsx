'use client';

import { removeFromCollection } from '@/libs/actions/collection.action';
import { TrashIcon } from '@heroicons/react/20/solid';
import toast from 'react-hot-toast';

const RemoveCollectionButton = ({ mal_id }: { mal_id: string }) => {
  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const result = await removeFromCollection(mal_id);
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
      onClick={handleDelete}
      className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/80 text-text-primary transition-all hover:bg-accent"
    >
      <TrashIcon className="w-6 h-6" />
    </button>
  );
};

export default RemoveCollectionButton;
