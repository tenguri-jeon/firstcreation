import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import EventNewsList from '../../assets/api/mainEventNewsList';

import { EventNewsSliderWrap } from './EventNewsCss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const EventNewsSlider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <EventNewsSliderWrap>
            <div className="swiper-container">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    breakpoints={{
                        1440: {
                            slidesPerView: 3.5,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2.5,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 1.5,
                            spaceBetween: 5,
                        },
                    }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    allowTouchMove={true}
                    watchSlidesProgress={true}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                >
                    {EventNewsList.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Link to={item.linkUrl}>
                                <img referrerPolicy="no-referrer" src={item.photoUrl} alt={`EventNews_${item.id}`} />
                                <div className="swiper-slide-content">
                                    <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
                                    <h3 dangerouslySetInnerHTML={{ __html: item.date }} />
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-button-prev" ref={prevRef}></div>
                <div className="swiper-button-next" ref={nextRef}></div>
            </div>
        </EventNewsSliderWrap>
    );
};

export default EventNewsSlider;
