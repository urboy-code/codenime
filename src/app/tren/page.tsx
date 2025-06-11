'use client';
import HeaderMenu from '@/components/Utilities/HeaderMenu';
import Pagination from '@/components/Utilities/Pagination';
import { useEffect, useState } from 'react';
import AnimeList from '@/components/AnimeList';
import SkeletonLoading from '@/components/Skeleton/Skeleton';
import fetchApi from '@/libs/api';

const Tren = () => {
  const [page, setPage] = useState(1);
  const [lastPage, setLasPage] = useState(1);
  const [topAnimes, setTopAnimes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    const trenResponse = await fetchApi('top/anime', { page: page, limit: 24 });
    if (trenResponse) {
      setTopAnimes(trenResponse.data);
      setLasPage(trenResponse.pagination?.last_visible_page || 1);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    // Scroll ke atas saat halaman berubah
    window.scrollTo(0, 0);
    fetchData();
  }, [page]); // useEffect akan berjalan setiap kali page berubah

  if (isLoading) {
    return (
      <div>
        <HeaderMenu title={'ANIME TERPOPULER....'} />
        <SkeletonLoading count={24} />
      </div>
    );
  }

  return (
    <div className="md:mt-32">
      <HeaderMenu title={`ANIME TER-POPULER #${page}`} />
      <Pagination page={page} lastPage={lastPage} onPageChange={setPage} />
      <AnimeList animes={topAnimes} />
      <Pagination page={page} lastPage={lastPage} onPageChange={setPage} />
    </div>
  );
};

export default Tren;
