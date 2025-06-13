import Link from 'next/link';
const Header = ({ title, linkHref, linkTitle }: any) => {
  return (
    <div className="container mx-auto flex justify-between py-4 items-center">
      <h1 className="md:text-4xl text-2xl font-bold capitalize">
        <span className='text-accent'>|</span> {title}
      </h1>
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="md:text-xl text-lg font-semibold">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
