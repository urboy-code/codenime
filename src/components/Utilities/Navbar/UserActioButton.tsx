'use client';

import { SignInButton } from '@/components/AuthButton/sign-in-button';
import { ProfileDropdown } from '@/components/ProfileDropdown';
import { useSession } from 'next-auth/react';

export const UserActionButton = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div className="h-10 w-24 animate-pulse rounded-md bg-slate-700"></div>;
  }

  if (status === 'authenticated') {
    return <ProfileDropdown user={session.user} />;
  }

  return <SignInButton />;
};
