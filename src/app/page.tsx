import AnimeList from '@/components/AnimeList';
import Header from '@/components/AnimeList/Header';

const Page = async () => {
  let topAnimes = []
  try{
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=12`);
    if(!response.ok){
      // Jika response tidak OK (misal: 404, 500), lempar error
      throw new Error('Faild to fetch data')
    }
    const apiResponse = await response.json();
    topAnimes = apiResponse.data
  } catch (error){
    console.error('Gagal mengambil data anime:', error)
    // kalo gagal mengambil data, mengembalikan array kosong, sehingga UI tidak crash
  }

  return (
    <>
      {/* Anime yang sedang tren */}
      <section className='p-8'>
        <Header title="Sedang Tren" linkHref="/tren" linkTitle="Lihat Semua →" />
        <AnimeList animes={topAnimes} />
      </section>
    </>
  );
};

export default Page;
