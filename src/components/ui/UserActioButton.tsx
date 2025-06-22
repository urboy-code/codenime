'use client';
import { useSession } from 'next-auth/react';
import { ProfileDropdown } from '@/components/profile/ProfileDropDown';
import { useLoginModalStore } from '@/stores/useLoginModalStore';

export const UserActionButton = () => {
  const { data: session, status } = useSession();
  const { onOpen } = useLoginModalStore();

  if (status === 'loading') {
    return <div className="order-2 md:order-3 bg-slate-600 h-8 w-24 rounded-lg animate-pulse"></div>;
  }

  if (status === 'authenticated' && session.user) {
    return <ProfileDropdown user={session.user} />;
  }

  return (
    <button onClick={onOpen} className="order-2 md:order-3 bg-accent px-6 py-2 rounded-xl">
      Sign In
    </button>
  );
};
