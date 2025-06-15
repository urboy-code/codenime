import { auth } from '@/auth';
import { prisma } from '@/libs/prisma/prisma';
import { redirect } from 'next/dist/server/api-utils';
import React from 'react';
import ProfileHeader from '@/components/dashboard/ProfileHeader';
import CollectionTabs from '@/components/dashboard/CollectionTabs';
import { ProfileSidebar } from '@/components/dashboard/ProfileSidebar';

const page = async () => {
  // ambil data dari pengguna di server
  const session = await auth();

  // lapisan keamanan kedua setelah middleware
  if (!session) {
    redirect('/api/auth/signin');
  }

  // ambil data koleksi dari database menggunakan prisma
  //mencari data koleksi yang user_email nya sama dengan email pengguna
  const collection = await prisma?.collection.findMany({
    where: { user_email: session?.user?.email! },
  });

  return (
    <section>
      <ProfileHeader user={session?.user} />
      <div className="container mx-auto pt-8 flex flex-row gap-8 text-text-primary">
        <ProfileSidebar user={session?.user} />
        <CollectionTabs collection={collection} />
      </div>
    </section>
  );
};

export default page;
