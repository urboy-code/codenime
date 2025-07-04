'use server';

import { auth } from '@/auth';
import { prisma } from '@/libs/prisma';
import { revalidatePath } from 'next/cache';

// ---CREATE---
export async function addToCollection(anime_mal_id: string, anime_image: string, anime_title: string) {
  const session = await auth();

  if (!session?.user?.email) {
    return {
      status: 'error',
      message: 'Anda harus login terlebih dahulu.',
    };
  }
  const user_email = session.user.email;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: user_email,
      },
    });

    if (!user) {
      return {
        status: 'error',
        message: 'User not found',
      };
    }
    // cek data apakah ada
    const existingCollection = await prisma.collection.findFirst({
      where: {
        user_email: user_email,
        anime_mal_id: anime_mal_id,
      },
    });

    if (existingCollection) {
      return {
        status: 'info',
        message: 'Anime sudah ada di koleksi.',
      };
    }

    // jika belum ada, tambahkan ke database
    await prisma.collection.create({
      data: {
        user_email,
        anime_mal_id,
        anime_image,
        anime_title,
      },
    });

    revalidatePath('/dashboard');
    return {
      status: 'success',
      message: 'Anime berhasil ditambahkan ke koleksi.',
    };
  } catch (error) {
    console.error(error);
    return {
      status: 'error',
      message: 'Terjadi kesalahan saat menambahkan anime ke koleksi.',
    };
  }
}

// ---DELETE---
export async function removeFromCollection(anime_mal_id: string) {
  const session = await auth();

  if (!session?.user?.email) {
    return {
      status: 'error',
      message: 'Anda harus login terlebih dahulu.',
    };
  }

  const user_email = session.user.email;

  try {
    await prisma.collection.delete({
      where: {
        anime_mal_id_user_email: {
          user_email,
          anime_mal_id,
        },
      },
    });

    revalidatePath('/dashboard');
    return {
      status: 'success',
      message: 'Anime berhasil dihapus dari koleksi.',
    };
  } catch (error) {
    console.error(error);
    return {
      status: 'error',
      message: 'Terjadi kesalahan saat menghapus anime dari koleksi.',
    };
  }
}

// ---UPDATE---
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
