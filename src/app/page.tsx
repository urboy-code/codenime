import AnimeList from '@/components/AnimeList';
import Header from '@/components/AnimeList/Header';
import HeroCorousle from '@/components/HeroCorousel';
import fetchApi from '@/libs/api';

const shuffleArray = (array: any[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = ~~(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const getUniqueAnimes = (animes: any[]) => {
  if (!Array.isArray(animes)) return [];
  const uniqueMap = new Map();
  animes.forEach((anime) => {
    if (anime && anime.mal_id) {
      uniqueMap.set(anime.mal_id, anime);
    }
  });
  return Array.from(uniqueMap.values());
};

const Page = async () => {
  const topAnimeResponse = await fetchApi('top/anime', { limit: 12 });
  const topAnimes = topAnimeResponse?.data;

  const recomendationsResposne = await fetchApi('recommendations/anime');
  const rawRecomendations = recomendationsResposne?.data || [];

  const allAnimeEntries = rawRecomendations.flatMap((rec: any) => rec.entry);

  const uniqueAnimes = getUniqueAnimes(allAnimeEntries);
  const shuffledAnimes = shuffleArray(uniqueAnimes);

  const recomendationsAnime = shuffledAnimes.slice(0, 12);

  return (
    <main>
      {/* Hero Carousel */}
      <HeroCorousle animes={topAnimes} />
      <div>
        {/* Anime yang sedang tren */}
        <section className="">
          <Header title="Anime Popular" linkHref="/tren" linkTitle="Lihat Semua →" />
          <AnimeList animes={topAnimes} />
        </section>
        <section className="mt-32">
          <Header title="Rekomendasi Anime" />
          <AnimeList animes={recomendationsAnime} />
        </section>
      </div>
    </main>
  );
};

export default Page;
