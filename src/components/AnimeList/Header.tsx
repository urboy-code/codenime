import Link from 'next/link';
const Header = ({ title, linkHref, linkTitle }: any) => {
  return (
    <div className="flex justify-between px-12 py-4 items-center">
      <h1 className="md:text-4xl text-2xl font-bold capitalize">{title}</h1>
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="md:text-xl text-lg font-semibold">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
