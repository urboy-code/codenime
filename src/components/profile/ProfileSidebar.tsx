import { CalendarIcon, UserIcon } from '@heroicons/react/24/outline';
import React from 'react';

type ProfileSidebarProps = {
  user: {
    name?: string | null;
    email?: string | null;
    bio?: string | null;
    createdAt?: Date | null;
  };
};
export const ProfileSidebar = ({ user }: ProfileSidebarProps) => {
  return (
    <aside className="w-full md:w-1/3 lg:w-1/4">
      <div className="sticky top-24 rounded-lg bg-slate-700 p-4">
        <h3 className="text-xl font-bold">{user.name}</h3>
        <p className="text-slate-400">{user.email}</p>

        <div className="mt-4 space-y-2 text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <UserIcon className="h-4 w-4" />
            <span className="text-slate-400">{user.bio}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            <span>{user.createdAt?.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
