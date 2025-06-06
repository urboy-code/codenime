import Link from 'next/link';
import localFont from 'next/font/local';

const samurai = localFont({
  src: '../fonts/ShogunsClan.ttf',
});

const Navbar = () => {
  return (
    <header className="md:text-left sm:text-center py-6 px-12">
      <div className="flex flex-col md:flex-row items-center justify-start gap-8">
        <div className={`${samurai.className}` + ' '}>
          <Link href="/" className="md:text-8xl sm:text-7xl md:text-left sm:text-center text-center ">
            CODENIME
          </Link>
        </div>
        <input type="text" placeholder="Cari" className="w-1/2 h-20 p-3 bg-gray-300 rounded-xl text-xl" />
      </div>
    </header>
  );
};

export default Navbar;
