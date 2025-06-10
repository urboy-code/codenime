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
};

// props untuk komponen
type HeroSlideProps = {
  anime: Anime;
};

const HeroSlide = ({ anime }: HeroSlideProps) => {
  return (
    <div
      className="relative h-full w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${anime.images.webp.large_image_url})` }}
    >
      {/* overlay gelap tipis untuk kontras */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Gradien dari transparan ke warna background utama */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-primary)]" />

      {/* Konten teks di atasnya */}
      <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-12">
        <h2 className="text-2xl font-bold text-white drop-shadow-lg md:text-4xl lg:text-5xl">{anime.title}</h2>
        <p className="mt-2 hidden max-w-2xl text-sm text-slate-200 drop-shadow-lg md:block">
          {anime.synopsis.substring(0, 200)}...
        </p>
        <Link
          href={`/anime/${anime.mal_id}`}
          className="mt-4 w-fit rounded-md bg-accent px-5 py-2.5 text-base font-semibold text-white transition hover:opacity-90"
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  );
};

export default HeroSlide;
