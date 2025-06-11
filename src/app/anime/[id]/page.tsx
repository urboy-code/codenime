import NotFound from '@/src/app/not-found';
import VideoPlayer from '@/src/components/VideoPlayer';
import fetchApi from '@/src/libs/api';
import Image from 'next/image';

const AnimeDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const animeResponse = await fetchApi(`anime/${id}/full`);
  const anime = animeResponse?.data;

  if (!anime) {
    return <NotFound />;
  }
  const backgroundImgUrl = anime.trailer?.images?.maximum_image_url || anime.images.webp.large_image_url;
  return (
    <div className="w-full text-text-primary">
      <div className="relative h-[50vh] w-full md:h-[65vh]">
        <Image
          src={backgroundImgUrl}
          alt={anime.images.webp.large_image_url}
          fill
          className="object-cover opacity-30 blur-sm"
          style={{ objectPosition: 'center-top' }}
        />
        <div
          className="absolute bottom-0 flex w-full items-center sm:items-end gap-4 px-4 py-4
          md:gap-8 md:px-12 md:py-8 [@media_(orientation:landscape)_and_(max-height:600px)]:flex-row [@media_(orientation:landscape)_and_(max-height:600px)]:items-end"
        >
          <div className="flex-shrink-0">
            <Image
              src={anime.images.webp.large_image_url}
              alt={anime.title}
              width={250}
              height={375}
              className="rounded-lg shadow-2xl w-24 h-auto sm:w-40 md:w-96 [@media_(orientation:landscape)_and_(max-height:600px)]:w-36"
            />
          </div>

          {/* Kolom kanan: judu, rating, genre */}
          <div className="flex flex-col justify-end gap-4 sm:gap-2">
            <h1 className="text-3xl font-bold drop-shadow-lg md:text-5xl [@media_(orientation:landscape)_and_(max-height:600px)]:text-2xl">
              {anime.title}
            </h1>
            <p className="text-lg italic text-slate-300 drop-shadow-lg">{anime.title_english}</p>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 rounded-full bg-black/50 px-3 py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xl font-bold">{anime.score}</span>
              </div>
              <p className="font-semibold">Rank #{anime.rank}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {anime.genres.map((genre: any) => (
                <span key={genre.mal_id} className="rounded-full border border-white/50 px-3 py-1 text-sm">
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Konten Bawah Banner */}
      <div className="container grid grid-cols-1 mx-auto gap-12 px-4 py-8 md:grid-cols-3 md:px-12">
        {/*  */}
        <div className="md:col-span-2">
          <h2 className="mb-4 text-2xl font-semibold">Synopsis</h2>
          <p className="text-slate-300 leading-relaxed text-justify">{anime.synopsis}</p>
          <VideoPlayer youtubeId={anime.trailer?.youtube_id} />
        </div>

        <aside>
          <h2 className="mb-4 text-2xl font-semibold">Information</h2>
          <div className="space-y-3 rounded-lg bg-slate-800 p-4">
            <div className="flex justify-between border-b border-slate-700 pb-2">
              <span className="font-semibold text-slate-400">Type:</span>
              <span className="font-medium">{anime.type}</span>
            </div>
            <div className="flex justify-between border-b border-slate-700 pb-2">
              <span className="font-semibold text-slate-400">Episodes:</span>
              <span className="font-medium">{anime.episodes || 'N/A'}</span>
            </div>
            <div className="flex justify-between border-b border-slate-700 pb-2">
              <span className="font-semibold text-slate-400">Status:</span>
              <span className="font-medium">{anime.status}</span>
            </div>
            <div className="flex justify-between border-b border-slate-700 pb-2">
              <span className="font-semibold text-slate-400">Aired:</span>
              <span className="font-medium">{anime.aired.string}</span>
            </div>
            <div className="flex justify-between border-b border-slate-700 pb-2">
              <span className="font-semibold text-slate-400">Studios:</span>
              <span className="font-medium">{anime.studios.map((studio: any) => studio.name).join(', ')}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AnimeDetailPage;
