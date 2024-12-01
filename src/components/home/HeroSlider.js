import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { HERO_IMAGES } from '../../constants/images';
import CryptoIconGroup from '../common/icons/CryptoIconGroup';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSlider = () => {
  return (
    <div className="relative h-hero">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-full"
      >
        <SwiperSlide>
          <div className="relative h-full">
            <img 
              src={HERO_IMAGES.main} 
              alt="Luxury Watch Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <h1 className="font-heading text-5xl md:text-6xl text-white mb-4">
                UNLOCK DESIGNER WITH CRYPTO
              </h1>
              <div className="flex items-center space-x-4 mb-8">
                <CryptoIconGroup />
              </div>
              <button className="bg-white text-black px-8 py-3 text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors">
                LEARN MORE
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;