'use server';

import { auth } from '@/auth';
import { prisma } from '@/libs/prisma/prisma';
import { revalidatePath } from 'next/cache';

// server action untuk mengubah status favorite sebuah item di koleksi
export async function addFavorite(mal_id: string) {
  const session = await auth();

  if (!session?.user?.email) {
    return {
      status: 'error',
      message: 'Anda harus login terlebih dahulu.',
    };
  }

  const user_email = session.user.email;

  try {
    const collectionItem = await prisma.collection.findFirst({
      where: {
        user_email: user_email,
        anime_mal_id: mal_id,
      },
    });

    if (!collectionItem) {
      return {
        status: 'success',
        message: 'Anime sudah ada di daftar',
      };
    }

    const newFavStatus = !collectionItem.is_favorite;

    await prisma.collection.update({
      where: { id: collectionItem.id },
      data: { is_favorite: newFavStatus },
    });

    const message = newFavStatus
      ? 'Anime berhasil ditambahkan ke daftar favorit'
      : 'Anime berhasil dihapus dari daftar favorit';

    revalidatePath('/dashboard');
    return {
      status: 'success',
      message: message,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 'error',
      message: 'Terjadi kesalahan pada server',
    };
  }
}
