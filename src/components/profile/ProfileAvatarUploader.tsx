'use client';

import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';

export const ProfileAvatarUploader = ({ initialImageUrl }: { initialImageUrl: string | null | undefined }) => {
  const [avatarUrl, setAvatarUrl] = useState(initialImageUrl);
  const [isUploading, setIsUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const response = await fetch(`/api/avatar/upload?filename=${file.name}`, { method: 'POST', body: file });
      if (!response.ok) {
        throw new Error('Failed to upload avatar');
      }

      const newBlob = await response.json();
      setAvatarUrl(newBlob.url);
      toast.success('Foto profile berhasil di upload!');
    } catch (error) {
      toast.error('Terjadi kesalahan saat mengupload foto profile');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative h-72 w-72 rounded-lg overflow-hidden bg-slate-600 border drop-shadow-2xl">
        {isUploading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-primary/80">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-400 border-t-white"></div>
          </div>
        )}
        {avatarUrl ? (
          <Image src={avatarUrl} alt="avatar" fill className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-slate-400">No Image</div>
        )}
      </div>
      <input
        type="file"
        name="image"
        onChange={handleAvatarUpload}
        className="hidden"
        ref={inputRef}
        accept="image/*"
        disabled={isUploading}
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={isUploading}
        className="flex items-center gap-2 rounded-md border border-dashed border-slate-600 px-4 py-2 text-sm font-semibold text-primary transition disabled:opacity-50 cursor-pointer"
      >
        <ArrowUpTrayIcon className="w-5 h-5" />
        <span>Ubah Foto</span>
      </button>
    </div>
  );
};
