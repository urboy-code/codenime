import { auth } from '@/auth';
import { prisma } from '@/libs/prisma';
import React from 'react';
import ProfileHeader from '@/components/profile/ProfileHeader';
import CollectionTabs from '@/components/profile/CollectionTabs';
import { ProfileSidebar } from '@/components/profile/ProfileSidebar';
import { redirect } from 'next/navigation';

const page = async () => {
  // ambil data dari pengguna di server
  const session = await auth();

  if (!session?.user) {
    return redirect('/login');
  }

  // ambil data koleksi dari database menggunakan prisma
  //mencari data koleksi yang user_email nya sama dengan email pengguna
  const collection = await prisma.collection.findMany({
    where: { user_email: session.user.email! },
  });

  return (
    <section>
      <ProfileHeader user={session.user} />
      <div className="container mx-auto pt-8 flex md:flex-row flex-col gap-8 text-text-primary">
        <ProfileSidebar user={session.user} />
        <CollectionTabs collection={collection} />
      </div>
    </section>
  );
};

export default page;
