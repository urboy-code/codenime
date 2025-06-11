import Image from 'next/image';
import Link from 'next/link';

const AnimeList = ({ animes }: any) => {
  return (
    <div className="grid grid-cols-2 gap-5 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 px-12">
      {animes?.map((anime: any) => {
        return (
          <Link href={`/anime/${anime.mal_id}`} key={anime.mal_id} className="cursor-pointer">
            <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[2/3]">
              <Image
                src={anime.images.webp.image_url}
                alt="Anime Image"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="font-medium md:text-2xl text-xl mt-2 line-clamp-2 transition-colors group-hover:text-[var(--color-accent)]">
              {anime.title}
            </h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
