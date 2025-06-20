'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';

const Notification = () => {
  const { status } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      const hasNotified = sessionStorage.getItem('hasNotified');
      if (!hasNotified) {
        toast.success('login berhasil');
        sessionStorage.setItem('hasNotified', 'true');
      }
    }

    if (status === 'unauthenticated') {
      sessionStorage.removeItem('hasNotified');
    }
  }, [status]);
  return null;
};

export default Notification;
