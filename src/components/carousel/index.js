'use client'
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';




const ImageCarousel = ({images}) => {
  return (
    <div className='px-10 py-6'>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            images.map((image, index)=> (
                <SwiperSlide key={index}>
                    <Image
                    src={image}
                    alt={`Slide ${index}`}
                    width={1280}
                    height={720}
                    />
                </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  );
}

export default ImageCarousel;