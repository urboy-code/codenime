import { updateProfile } from '@/libs/actions/profile.action';
import { User } from 'next-auth';
import React, { useActionState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { ProfileAvatarUploader } from './ProfileAvatarUploader';
import FormField from '../ui/FormField';
import Submit from '../ui/ProfileButtonSubmit';
import { useRouter } from 'next/navigation';

type ProfileEditFormProps = {
  data: User & { bio?: string | null };
  onSaveSuccess: () => void;
};
const ProfileEditForm = ({ data, onSaveSuccess }: ProfileEditFormProps) => {
  const router = useRouter();

  // membuat useState untuk menghubungkan form dengan server acion
  const [state, formAction] = useActionState(updateProfile, { status: 'idle', message: '' });

  useEffect(() => {
    if (state.status === 'success') {
      toast.success(state.message);
      const refreshUserSession = async () => {
        await fetch('/api/auth/session?update=true');
      };
      refreshUserSession().then(() => {
        router.refresh();
        onSaveSuccess();
      });
    }
    if (state.status === 'error') {
      toast.error(state.message ?? 'Terjadi kesalahan saat mengupdate profile');
    }
  }, [state, onSaveSuccess]);

  if (!data) return null;

  return (
    <form action={formAction} className="p-24 rounded-lg bg-text-primary">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
        <div className="flex flex-col items-center md:col-span-1">
          <ProfileAvatarUploader initialImageUrl={data?.image} />
        </div>
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-2xl font-bold text-primary">Edit Data Pengguna</h2>
          <FormField id="name" label="Nama" defaultValue={data?.name ?? ''} />
          <FormField
            id="bio"
            label="Bio"
            type="textarea"
            defaultValue={data?.bio ?? ''}
          />
          <div className="flex gap-4 pt-4">
            <Submit />
            <button
              onClick={onSaveSuccess}
              className="border border-primary text-primary px-6 py-2 rounded-lg flex items-center gap-2 font-medium text-base cursor-pointer"
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProfileEditForm;
