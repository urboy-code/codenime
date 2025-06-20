import Image from 'next/image';
import Link from 'next/link';
import CardCollectionButton from './CardCollectionButton';
import FavoritButton from './FavoritButton';
import RemoveCollectionButton from './RemoveCollectionButton';

type Anime = {
  mal_id: number;
  title: string;
  images: {
    webp: {
      image_url: string;
    };
  };
  is_favorite?: boolean;
  isInCollection?: boolean;
};

type AnimeListProps = {
  animes: Anime[];
  isDashboard?: boolean;
};

const AnimeList = ({ animes, isDashboard = false }: AnimeListProps) => {
  return (
    <div className="container mx-auto grid grid-cols-2 gap-5 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {animes?.map((anime) => (
        <div key={anime.mal_id} className="group relative">
          <Link href={`/anime/${anime.mal_id}`} key={anime.mal_id} className="cursor-pointer">
            <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[2/3]">
              <Image
                src={anime.images.webp.image_url}
                alt="Anime Image"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 className="font-medium md:text-xl text-xl mt-2 line-clamp-2 hover:text-accent">{anime.title}</h3>
          </Link>

          <div className="">
            {isDashboard ? (
              <div className="opacity-100 flex flex-col gap-2 p-2">
                <FavoritButton mal_id={anime.mal_id.toString()} is_favorite={anime.is_favorite ?? false} />
                <RemoveCollectionButton mal_id={anime.mal_id.toString()} />
              </div>
            ) : (
              <div className="opacity-100 transition-opacity group-hover:opacity-100">
                {!anime.isInCollection && (
                  <CardCollectionButton
                    anime_mal_id={anime.mal_id.toString()}
                    anime_image={anime.images.webp.image_url}
                    anime_title={anime.title}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimeList;
