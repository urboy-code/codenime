import Link from 'next/link';

// Tipe data untuk anime
type Anime = {
  mal_id: number;
  title: string;
  synopsis: string;
  images: {
    webp: {
      large_image_url: string;
    };
  };
  trailer?: {
    images?: {
      maximum_image_url?: string;
    };
  };
};

// props untuk komponen
type HeroSlideProps = {
  anime: Anime;
};

const HeroSlide = ({ anime }: HeroSlideProps) => {
  return (
    <div
      className="relative h-full w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${anime.trailer?.images?.maximum_image_url})` }}
    >
      {/* overlay gelap tipis untuk kontras */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Gradien dari transparan ke warna background utama */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-primary)]" />

      {/* Konten teks di atasnya */}
      <div className="relative z-10 flex flex-col h-full justify-center items-start px-12 md:p-12">
        <h2 className="text-2xl font-bold text-white drop-shadow-lg md:text-5xl lg:text-7xl">{anime.title}</h2>
        <p className="mt-4 max-w-2xl text-xl text-slate-200 drop-shadow-lg">{anime.synopsis?.substring(0, 200)}...</p>
        <Link
          href={`/anime/${anime.mal_id}`}
          className="mt-6 w-fit rounded-md bg-accent hover:bg-transparent hover:border-1 hover:text-text-primary hover:border-accent px-10 py-4 text-lg font-semibold text-white transition-colors  hover:opacity-90"
        >
          Lihat detail
        </Link>
      </div>
    </div>
  );
};

export default HeroSlide;
