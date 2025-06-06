import Image from 'next/image';
import AnimeList from '@/components/AnimeList';
import Link from 'next/link';

const home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=12`);
  const anime = await response.json();

  interface AnimeItem {
    mal_id: number;
    title: string;
    images: {
      webp: {
        image_url: string;
      };
    };
  }

  return (
    <>
      <div className='flex justify-between px-12 py-4 items-center'>
        <h1 className='md:text-4xl text-2xl font-bold '>Sedang Tren</h1>
        <Link href={'/tren'} className='md:text-xl text-lg font-semibold'>Lebih banyak →</Link>
      </div>
      <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-8 px-12">
        {anime.data.map((data: AnimeItem) => {
          return (
            <div key={data.mal_id} className="shadow-md rounded-lg">
              <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id} />;
            </div>
          );
        })}
      </div>
    </>
  );
};

export default home;
