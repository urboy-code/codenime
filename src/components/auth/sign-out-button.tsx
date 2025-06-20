'use client';

import { logout } from '@/libs/actions/auth';

export const SignOutButton = () => {
  return (
    <form action={logout}>
      <button type="submit" className=" px-4 py-2 text-sm text-slate-200 hover:text-accent">
        Sign Out
      </button>
    </form>
  );
};
