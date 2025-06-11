import AnimeList from '@/src/components/AnimeList';
import Header from '@/src/components/AnimeList/Header';
import HeroCorousle from '@/src/components/HeroCorousel';
import fetchApi from '@/src/libs/api';
import Link from 'next/link';

// Menambahkan tipe untuk props yang diterima halaman ini
type SearchProps = {
  params: {
    keyword: string;
  };
};

const getUniqueAnimes = (animes: any) => {
  if (!Array.isArray(animes)) return [];
  const uniqueMap = new Map();
  animes.forEach((anime) => {
    uniqueMap.set(anime.mal_id, anime);
  });
  return Array.from(uniqueMap.values());
};

const Page = async ({ params }: SearchProps) => {
  const { keyword } = await params;
  const decodeKeyword = decodeURIComponent(keyword);

  const searchResponse = await fetchApi('anime', { q: decodeKeyword, limit: 24 });
  const uniqueAnimes = getUniqueAnimes(searchResponse?.data);

  return (
    <>
      <HeroCorousle animes={uniqueAnimes} />
      {/* Hasil Pencarian Anime */}
      <section className="p-8">
        <Header title={decodeKeyword} />

        {/* Pengecekan untuk hasil kosong */}
        {uniqueAnimes.length > 0 ? (
          // jika ada hasil, tampilkan daftar anime
          <AnimeList animes={uniqueAnimes} />
        ) : (
          // jika tidak ada hasil, tampilkan pesan
          <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-bold text-text-primary">Tidak ada hasil untuk pencarian "{decodeKeyword}"</h3>
            <p className="mt-2 text-slate-400">Silakan coba kata kunci lain yang lebih spesifik.</p>
            <Link
              href={'/'}
              className="mt-8 rounded-md bg-accent px-4 py-2 font-medium text-text-primary transition-colors hover:bg-primary hover:outline-1 hover:outline-accent focus:outline-none focus:ring-1 focus:ring-offset-1 foucs:ring-accent"
            >
              Kembali ke Beranda
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default Page;
