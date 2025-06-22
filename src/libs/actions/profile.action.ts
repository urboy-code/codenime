'use server';

import { revalidatePath } from 'next/cache';
import { auth } from '@/auth';

export const updateProfile = async (prevState: unknown, formData: FormData) => {
  const data = await auth();

  if (!data?.user?.id) return { status: 'error', message: 'User not found' };

  const name = formData.get('name') as string;
  const bio = formData.get('bio') as string;

  try {
    await prisma?.user.update({
      data: {
        name: name,
        bio: bio,
      },
      where: {
        id: data.user.id,
      },
    });

    revalidatePath('/profile');
    revalidatePath('/dashboard');

    return { status: 'success', message: 'Profile berhasil diupdate' };
  } catch (error) {
    return { status: 'error', message: 'Terjadi kesalahan saat mengupdate profile' };
  }
};
