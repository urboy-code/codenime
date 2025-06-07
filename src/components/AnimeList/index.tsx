import Image from 'next/image';
import Link from 'next/link';

const AnimeList = ({ api }: any) => {
  return (
    <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-8 px-12">
      {api.data.map((anime: any) => {
        return (
          <Link href={`/${anime.mal_id}`} key={anime.mal_id} className="cursor-pointer">
            <Image
              src={anime.images.webp.image_url}
              alt="Anime Image"
              width={600}
              height={600}
              className="w-full max-h-64 object-cover rounded-lg"
            />
            <h3 className="font-medium md:text-2xl text-xl pt-6 font-samurai px-5">{anime.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
