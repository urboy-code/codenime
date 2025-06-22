'use client';
import React, { useState } from 'react';
import { User } from 'next-auth';
import { ProfileDisplay } from './ProfileDisplay';
import ProfileEditForm from './ProfileEditForm';

type ProfileClientProps = {
  data: User & { bio?: string | null };
};
const ProfileClient = ({ data }: ProfileClientProps) => {
  const [mode, setMode] = useState<'display' | 'edit'>('display');

  return (
    <div>
      {mode === 'edit' ? (
        <ProfileEditForm data={data} onSaveSuccess={() => setMode('display')} />
      ) : (
        <ProfileDisplay data={data} onEditClick={() => setMode('edit')} />
      )}
    </div>
  );
};

export default ProfileClient;
