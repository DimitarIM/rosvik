'use client'

import React from 'react'
// import Swiper JS
import {Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';

function SwiperComponent() {
  return (
      <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="w-[80%]"
          loop={true}
          modules={[Pagination, Navigation]}
          direction='horizontal'
      >

          <SwiperSlide>
              <Image src="/img/slideshow-img_1.png" width={300} height={200} alt='' layout='responsive'/>
             <Image src="/img/slideshow-img_2.png" width={300} height={200} alt='' layout='responsive'/>
             <Image src="/img/slideshow-img_3.png" width={300} height={200} alt='' layout='responsive'/>
              <Image src="/img/slideshow-img_4.png" width={300} height={200} alt='' layout='responsive'/>
              <Image src="/img/slideshow-img_5.png" width={300} height={200} alt='' layout='responsive'/>
              <Image src="/img/slideshow-img_6.png" width={300} height={200} alt='' layout='responsive'/>
          </SwiperSlide>
      </Swiper>
  )
}

export default SwiperComponent