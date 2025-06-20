'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { SignOutButton } from '@/components/auth/sign-out-button';

type ProfileDropdownProps = {
  user: {
    name: string;
    email: string;
    image: string;
  };
};

export const ProfileDropdown = ({ user }: ProfileDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Effect untuk menangani klik di luar dropdown
  useEffect(() => {
    // buat fungsi untuk menjalankan setiap kali ada klik
    const handleClickOutside = (event: MouseEvent) => {
      // cek: apakah ref sudah ada dan area yang di klik bukan bagian dari dropdown
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false); // jika ya, tutup dropdown
      }
    };

    // buat event listener
    document.addEventListener('mousedown', handleClickOutside);

    // bikin fungsi cleanup untuk membersihkan event listener saat komponen akan hilang
    // Ini penting untuk mencegah memory leak
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative order-2 md:order-3">
      <button onClick={handleToggle} className="rounded-full">
        <Image
          src={user.image ?? ''}
          alt={user.name ?? 'user avatar'}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full ring-1 ring-text-primary focus:outline-none"
        />
      </button>

      {/* Menu dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-non z-10">
          <Link href={'/profile'} className="block px-4 py-2 text-sm text-slate-200">
            Profil
          </Link>
          <Link href={'/dashboard'} className="block px-4 py-2 text-sm text-slate-200">
            Dashboard
          </Link>
          <SignOutButton />
        </div>
      )}
    </div>
  );
};
