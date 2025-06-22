import ProfileClient from '@/components/profile/ProfileClient';
import { getUserById } from '@/libs/actions/data.action';
import { notFound } from 'next/navigation';
import React from 'react';

type ProfileProps = {
  params: {
    id: string;
  };
};
const page = async ({ params }: ProfileProps) => {
  const { id } = params;
  try {
    if (!id) {
      console.error('User ID is missing');
      return notFound();
    }

    const data = await getUserById(id);

    if (!data) {
      console.error('No user data found for ID:', id);
      return notFound();
    }

    return (
      <div className="min-h-screen flex justify-center items-center">
        <ProfileClient data={data} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching user data:', error);
    return notFound();
  }
};

export default page;
