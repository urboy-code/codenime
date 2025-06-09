import React from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center p-8">
      <ExclamationTriangleIcon className="w-24 h-24 text-accent" />
      <h1 className="mt-6 text-5xl font-bold text-text-primary">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-slate-200">Halaman Tidak Ditemukan</h2>
      <p className="mt-2 text-slate-400">Maaf, halaman yang kamu cari sepertinya sudah pindah atau tidak pernah ada.</p>
      <Link
        href={'/'}
        className="mt-8 rounded-md bg-accent px-4 py-2 font-medium text-text-primary transition-colors hover:bg-primary hover:outline-1 hover:outline-accent focus:outline-none focus:ring-1 focus:ring-offset-1 foucs:ring-accent"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default NotFound;
