'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { SignOutButton } from '@/components/auth/sign-out-button';


export const ProfileDropdown = ({user}: any) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative order-2 md:order-3">
      <button
        type="button"
        onClick={handleToggleDropdown}
        className="rounded-full focus:outline-none"
      >
        <Image
          src={user.image ?? ''}
          alt={user.name ?? 'user avatar'}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full ring-1 ring-text-primary"
        />
      </button>

      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 z-10"
        >
          <Link
            href={`/profile/${user.id}`}
            className="block px-4 py-2 text-sm text-slate-200 hover:bg-slate-700"
          >
            Profil
          </Link>
          <Link
            href="/dashboard"
            className="block px-4 py-2 text-sm text-slate-200 hover:bg-slate-700"
          >
            Dashboard
          </Link>
          <SignOutButton />
        </div>
      )}
    </div>
  );
};
