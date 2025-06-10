'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import HeroSlide from './HeroSlide';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './HeroCorousel.css';

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

type HeroCorouselProps = {
  animes: Anime[];
};

const HeroCorousle = ({ animes }: HeroCorouselProps) => {
  return (
    <div className="h-[50vh] w-full md:h-[80vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {animes?.map((anime) => (
          <SwiperSlide key={anime.mal_id}>
            <HeroSlide anime={anime} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCorousle;
