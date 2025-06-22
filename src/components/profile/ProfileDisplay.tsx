import { User } from 'next-auth';
import Image from 'next/image';
import React from 'react';
import { PencilIcon } from '@heroicons/react/20/solid';

type ProfileDisplayProps = {
  data: User & { bio?: string | null };
  onEditClick: () => void;
};

export const ProfileDisplay = ({ data, onEditClick }: ProfileDisplayProps) => {
  return (
    <div className="p-24 rounded-lg bg-text-primary">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
        <div className="flex flex-col items-center">
          <div className="relative h-72 w-72">
            <Image src={data.image ?? ''} alt={data.name ?? ''} fill className="object-cover rounded-lg" />
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="flex items-center">
            <h2 className="text-2xl font-bold text-primary">Profile Pengguna</h2>
          </div>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-lg font-medium text-primary">Nama</p>
              <p className="text-base text-slate-500">{data.name}</p>
            </div>
            <div>
              <p className="text-lg font-medium text-primary">Email</p>
              <p className="text-base text-slate-500">{data.email}</p>
            </div>
            <div>
              <p className="text-lg font-medium text-primary">Bio</p>
              <p className="text-base text-slate-500">{data.bio || 'Belum ada bio....'}</p>
            </div>

            <button
              onClick={onEditClick}
              className="border border-primary text-primary px-4 py-2 rounded-lg flex items-center gap-2 font-medium text-base cursor-pointer"
            >
              <PencilIcon className="h-4 w-4" /> EDIT PROFILE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
