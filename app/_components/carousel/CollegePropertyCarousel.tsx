"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from 'next/image';
import { urlForImage } from '@/utils/image';
import "./swiper.css"; 

export const CollegePropertyCarousel: React.FC<{ images?: any[] }> = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{ enabled: true }}
      pagination={{ clickable: true }}  
      keyboard={{ enabled: true }}
      className="max-w-[20rem] "
    >
      {images?.map((img, index) => (
        <SwiperSlide key={index}>
          <Image height={2000} width={2000} src={urlForImage(img)} alt={`Slide ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
