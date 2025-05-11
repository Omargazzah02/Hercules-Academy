'use client'
import {Swiper , SwiperSlide} from 'swiper/react'
import { FC } from 'react';
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import '../../app/globals.css'

interface ImageCarouselProps {
    images: string[];
  }


const ImageCarousel:  FC<ImageCarouselProps>  = ({images}) => {
    return (
          <Swiper className='my-swiper'
        modules={[Navigation]}
        
        centeredSlides={true}
        
        loop={true}
        navigation = {true}

        watchSlidesProgress={true}

        breakpoints={{
            640: {
              slidesPerView: 3,
            },
           
            1024: {
              slidesPerView: 3,
            },
          }}


      
        >


            {images.map((src,index)=>(<SwiperSlide
            key={index}
            ><img src={src} alt={`Image ${index + 1}`} className='carousel-image' /></SwiperSlide>))}
           
        </Swiper>
    )

}

export default ImageCarousel