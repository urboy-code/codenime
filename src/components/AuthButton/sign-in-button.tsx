'use client';

import { login } from '@/libs/actions/auth';

export const SignInButton = () => {
  return (
    <form action={login} className="order-2 md:order-3">
      <button
        type="submit"
        className="bg-accent py-3 px-12 rounded-xl flex items-center justify-center font-semibold transition hover:opacity-90 cursor-pointer "
      >
        Sign In
      </button>
    </form>
  );
};
