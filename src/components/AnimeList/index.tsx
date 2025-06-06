import Image from 'next/image';
import Link from 'next/link';

interface AnimeListProps {
  id: number;
  title: string;
  images: string;
}
const AnimeList = ({ title, images, id }: AnimeListProps) => {
  return (
    <Link href={`/${id}`} className="cursor-pointer">
      <Image src={images} alt="Anime Image" width={600} height={600} className="w-full max-h-64 object-cover rounded-lg" />
      <h3 className="font-medium md:text-2xl text-xl pt-6 font-samurai px-5">{title}</h3>
    </Link>
  );
};

export default AnimeList;
