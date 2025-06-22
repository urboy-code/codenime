import { auth } from '@/auth';
import { prisma } from '@/libs/prisma';
import React from 'react';
import ProfileHeader from '@/components/profile/ProfileHeader';
import CollectionTabs from '@/components/profile/CollectionTabs';
import { ProfileSidebar } from '@/components/profile/ProfileSidebar';
import { redirect } from 'next/navigation';

const page = async () => {
  const session = await auth();
  if (!session?.user?.id) {
    redirect('/');
  }
  // ambil data dari pengguna di server
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  });

  if (!user) {
    return redirect('/');
  }

  // ambil data koleksi dari database menggunakan prisma
  //mencari data koleksi yang user_email nya sama dengan email pengguna
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email! },
  });

  return (
    <section>
      <ProfileHeader user={user} />
      <div className="container mx-auto pt-8 flex md:flex-row flex-col gap-8 text-text-primary">
        <ProfileSidebar user={user} />
        <CollectionTabs collection={collection} />
      </div>
    </section>
  );
};

export default page;
