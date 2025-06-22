import { prisma } from '@/libs/prisma';

export const getUserById = async (id: string) => {
  try {
    const result = await prisma.user.findUnique({
      where: { id },
    });

    return result;
  } catch (error) {
    throw new Error('Error get user by id');
  }
};

