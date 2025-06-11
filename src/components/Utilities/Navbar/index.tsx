import Link from 'next/link';
import localFont from 'next/font/local';
import InputSearch from './InputSearch';

const samurai = localFont({
  src: '../fonts/ShogunsClan.ttf',
});

const Navbar = () => {
  return (
    <header className="md:text-left sm:text-center py-6 px-12 md:fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/70 to-transparent">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <div className={`${samurai.className}`}>
          <Link href="/" className="md:text-8xl sm:text-7xl md:text-left sm:text-center text-center ">
            CODENIME
          </Link>
        </div>
        <InputSearch />
        <div className="bg-accent py-6 px-12 rounded-xl flex items-center justify-center font-semibold">
          <button>MASUK</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
