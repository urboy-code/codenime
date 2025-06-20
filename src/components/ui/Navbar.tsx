import Link from 'next/link';
import InputSearch from './InputSearch';
import { auth } from '@/auth';
import { UserActionButton } from './UserActioButton';

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="md:text-left sm:text-center py-4 md:fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/70 to-transparent">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 md:flex-row">
        <div className='order-1'>
          <Link href="/" className="md:text-5xl text-2xl text-text-primary">
            CODENIME
          </Link>
        </div>
        <InputSearch />
        <UserActionButton />
      </div>
    </header>
  );
};

export default Navbar;
