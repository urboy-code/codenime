import { PrismaClient } from "@prisma/client"

// deklarasi variable untuk menampung instance Prisma Client
declare global {
  var prisma: PrismaClient | undefined
}

export const prisma = globalThis.prisma || new PrismaClient()

if(process.env.NODE_ENV !== 'production') globalThis.prisma = prisma