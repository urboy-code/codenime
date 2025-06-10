import AnimeList from '@/components/AnimeList';
import Header from '@/components/AnimeList/Header';
import HeroCorousle from '@/components/HeroCorousel';
import fetchApi from '@/libs/api';

const Page = async () => {
  const topAnimeResponse = await fetchApi('top/anime', { limit: 12 });

  return (
    <>
      {/* Hero Carousel */}
      <HeroCorousle animes={topAnimeResponse.data} />
      {/* Anime yang sedang tren */}
      <section className="p-8">
        <Header title="Sedang Tren" linkHref="/tren" linkTitle="Lihat Semua →" />
        <AnimeList animes={topAnimeResponse.data} />
      </section>
    </>
  );
};

export default Page;
