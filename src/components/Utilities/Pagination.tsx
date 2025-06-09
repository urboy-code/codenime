import React from 'react';
import { ForwardIcon, BackwardIcon } from '@heroicons/react/16/solid';

type PaginationProps = {
  page: number;
  lastPage: number;
  onPageChange: (newPage: number) => void;
};

const Pagination = ({ page, lastPage, onPageChange }: PaginationProps) => {
  if (lastPage <= 1) return null;

  const handlePrevPage = () => {
    onPageChange(page - 1);
  };
  const handleNextPage = () => {
    onPageChange(page + 1);
  };

  return (
    <div className="flex items-center justify-center gap-4 py-12 text-2xl">
      <button
        onClick={handlePrevPage}
        disabled={page <= 1}
        className="flex items-center gap-2 transition hover:text-accent disabled:cursor-not-allowed disabled:opacity-50"
      >
        <BackwardIcon className="w-6 h-6" />
        prev
      </button>
      <p className='text-lg font-semibold text-slate-200'>{page} of {lastPage}</p>
      <button
        onClick={handleNextPage}
        disabled={page >= lastPage}
        className="flex items-center gap-2 transition hover:text-accent disabled:cursor-not-allowed disabled:opacity-50"
      >
        next
        <ForwardIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Pagination;
