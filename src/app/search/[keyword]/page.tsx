import AnimeList from '@/components/AnimeList';
import Header from '@/components/AnimeList/Header';

const Page = async ({params}: any) => {
  const { keyword } = await params;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`);
  const searchAnime = await response.json();

  return (
    <>
      {/* Hasil Pencarian Anime */}
      <section>
        <Header title={decodeURIComponent(keyword)}/>
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
