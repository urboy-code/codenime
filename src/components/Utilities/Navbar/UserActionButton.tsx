import Link from 'next/link';
import { authUserSession } from '@/src/libs/auth';

const UserActionButton = async () => {
  const user = await authUserSession();
  // console.log(user?.name);
  return (
    <div className="bg-accent py-3 px-12 rounded-xl flex items-center justify-center font-semibold">
      <Link href={'/api/auth/signin'}>Login</Link>
    </div>
  );
};

export default UserActionButton;
