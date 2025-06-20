import Image from 'next/image';
import React from 'react';

type ProfileHeaderProps = {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
};
const ProfileHeader = ({ user }: ProfileHeaderProps) => {
  return (
    <div>
      <div className="relative md:h-72 h-36 w-full bg-slate-700"></div>

      {/* profile pic & nama */}
      <div className="container mx-auto">
        <div className="relative -mt-16">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary bg-slate-500">
            <Image src={user.image ?? ''} alt={user.name ?? ''} width={100} height={100} className="object-cover" />
          </div>

          <div className="pt-4">
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-slate-400">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
