'use server';
import { signIn, signOut } from '@/auth';

export const login = async () => {
  // Panggil signIn dengan provider 'github'
  await signIn('github', { redirectTo: '/' });
};

export const logout = async () => {
  await signOut({ redirectTo: '/' });
};
