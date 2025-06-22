import { auth } from '@/auth';
import { prisma } from '@/libs/prisma';
import { del, put } from '@vercel/blob';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');
  const session = await auth();

  if (!session?.user?.id || !filename || !request.body) {
    return NextResponse.json({ message: 'File not uploaded', status: 401 });
  }

  try {
    const currentImage = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { image: true },
    });

    if (currentImage?.image && currentImage.image.includes('blob.vercel-storage.com')) {
      await del(currentImage.image);
    }

    const blob = await put(filename, request.body, {
      access: 'public',
      multipart: true,
    });

    await prisma.user.update({
      where: { id: session.user.id },
      data: { image: blob.url },
    });

    revalidatePath('/profile');
    revalidatePath('/dashboard');

    return NextResponse.json(blob);
  } catch (error) {
    console.error('Upload avatar gagal: ', error);

    return NextResponse.json(
      { message: 'Terjadi kesalahan saat mengupload foto profile', error: error as Error },
      { status: 500 }
    );
  }
}
