import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


// import required modules
import { Keyboard, Scrollbar } from 'swiper/modules';
import { MenuSlideComponents } from './styled';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import { useRef } from 'react';
import More from '../button/More';

const MenuSlide = ({newMenuItem}) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (

        <MenuSlideComponents>
            <div className="slide">
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    breakpoints={{
                        480 : {
                            slidesPerView: 2
                        },
                        769 : {
                            slidesPerView: 2.5
                        },
                    }}
                    pagination={{ type: 'progressbar', clickable: true }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    allowTouchMove={true}
                    watchSlidesProgress={true}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                >
                    {newMenuItem.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            <div className="slide-content-wrapper">
                                <img referrerPolicy="no-referrer" src={item.imgurl} alt={`Newmenu${index + 1}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-pagination"></div>
                </Swiper>
                <div className="swiper-button-prev" ref={prevRef}></div>
                <div className="swiper-button-next" ref={nextRef}></div>
            </div>
        </MenuSlideComponents>

    );
};

export default MenuSlide;