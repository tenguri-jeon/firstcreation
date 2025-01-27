import { BeverageSliderWrap } from './BeverageCss';
import mainBeverageList from '../../assets/api/mainBeverageList';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { useRef } from 'react';
import More from '../button/More';

const BeverageSlider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <BeverageSliderWrap>
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={4}
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
                {mainBeverageList.map((item, index) => (
                    <SwiperSlide key={item.id}>
                        <div className="slide-content-wrapper">
                            <img referrerPolicy="no-referrer" src={item.urlLink} alt={`DesseretSlider_${index + 1}`} />
                            <div className="swiper-slide-content">
                                <h2>{item.name}</h2>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev" ref={prevRef}></div>
                <div className="swiper-button-next" ref={nextRef}></div>
            </Swiper>
            <More linkUrl={'/menu/beverage'} />
        </BeverageSliderWrap>
    );
};

export default BeverageSlider;
