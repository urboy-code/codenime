'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
const InputSearch = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const value = searchRef.current?.value;

    if (!value || value.trim() === '') return

    router.push(`/search/${value}`);
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full md:w-1/2 sm:w-full py-5">
      <button
        onClick={handleSearch}
        type="submit"
        className="absolute inset-y-0 left-0 pl-4 flex items-center text-primary cursor-pointer"
      >
        <MagnifyingGlassIcon className="w-6 h-6" />
      </button>
      <input
        type="text"
        placeholder="Cari"
        className="w-full h-18 pl-15 bg-text-primary text-primary rounded-xl text-xl focus:outline-none"
        ref={searchRef}
      />
    </form>
  );
};

export default InputSearch;
