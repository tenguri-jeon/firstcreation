import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import mainBanner1 from '../../assets/images/mainBanner1.png';
import mainBanner2 from '../../assets/images/mainBanner2.png';
import mainBanner3 from '../../assets/images/mainBanner3.png';
import mainBanner4 from '../../assets/images/mainBanner4.png';

export default function ImageSlider() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false, 
        }}
        speed={1000} 
        loop={true} 
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={mainBanner1} alt="첫번째 배너" /></SwiperSlide>
        <SwiperSlide><img src={mainBanner2} alt="두번째 배너" /></SwiperSlide>
        <SwiperSlide><img src={mainBanner3} alt="세번째 배너" /></SwiperSlide>
        <SwiperSlide><img src={mainBanner4} alt="네번째 배너" /></SwiperSlide>
      </Swiper>
    </>
  );
}
