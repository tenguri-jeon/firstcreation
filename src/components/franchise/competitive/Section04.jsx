import { Section04Container } from './section04style';
import { useRef } from 'react';

import competitiveData from '../../../assets/api/competitive_slide';

// Import Swiper React components
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Section04 = () => {
    const se04Data = competitiveData.find((item) => item.sec === 4);

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <Section04Container>
            <div className="inner">
                <div className="title">
                    <h3>
                        홀 매출만으로
                        <br />
                        <em>
                            총 누적 매출 <span>32억</span> 돌파 !
                        </em>
                        <span>디저트39 역대급 매출 신화</span>
                    </h3>
                    <p>배달 매출을 제외한 홀 매출만 산정한 금액입니다.</p>
                </div>

                <div className="slide01">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 1500 }}
                        loop={true}
                        speed={1000}
                        breakpoints={{
                            1440: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1025: {
                                slidesPerView: 3,
                                spaceBetween: 25,
                            },
                            769: {
                                slidesPerView: 2.5,
                                spaceBetween: 25,
                            },
                            601: {
                                slidesPerView: 2,
                                spaceBetween: 25,
                            },
                            501: {
                                slidesPerView: 1.5,
                                spaceBetween: 25,
                            },
                            325: {
                                slidesPerView: 1.3,
                                spaceBetween: 40,
                            },
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 50,
                            },
                        }}
                        className="mySwiper">
                        {Array.from({ length: 3 }).flatMap((_, i) =>
                            se04Data.slide1.map((slide, index) => (
                                <SwiperSlide
                                    key={`${i}-${index}`}
                                    style={{
                                        backgroundImage: `url(${slide.img})`,
                                    }}>
                                    <div className="store">
                                        <p>{slide.store}</p>
                                    </div>
                                    <div className="txt">
                                        <p>포스 매출</p>
                                        <strong>{slide.sales}억 돌파!</strong>
                                        <p>[ 배달 매출 제외 ]</p>
                                    </div>
                                    <div className="info">
                                        <p>
                                            {slide.floor}평 / 임대료 {slide.rent}만원
                                        </p>
                                        <p>오픈 일자 | {slide.open}</p>
                                    </div>
                                </SwiperSlide>
                            ))
                        )}
                    </Swiper>
                </div>

                <p className="sub_tit">[ 배달 매출을 제외한 객관적인 포스 매출을 토대로 홀매출로만 산정된 가맹점별 매출입니다. ]</p>

                <div className="slide02">
                    <Swiper
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        modules={[Autoplay, Navigation]}
                        autoplay={{ delay: 900 }}
                        loop={true}
                        speed={600}
                        centeredSlides={true}
                        className="mySwiper"
                        breakpoints={{
                            1440: {
                                slidesPerView: 5,
                                spaceBetween: 25,
                            },
                            1025: {
                                slidesPerView: 4.5,
                                spaceBetween: 25,
                            },
                            769: {
                                slidesPerView: 3.5,
                                spaceBetween: 25,
                            },
                            501: {
                                slidesPerView: 2.5,
                                spaceBetween: 25,
                            },
                            0: {
                                slidesPerView: 1.8,
                                spaceBetween: 30,
                            },
                        }}>
                        {se04Data.slide2.map((slide, index) => (
                            <SwiperSlide
                                key={slide.id}
                                style={{
                                    backgroundImage: `url(${slide.img})`,
                                }}>
                                <div className="store">
                                    <p>{slide.store}</p>
                                </div>
                                <div className="txt">
                                    <p>포스 매출로만</p>
                                    <strong>{slide.sales}억 돌파!</strong>
                                    <p>[ 배달 매출 제외 ]</p>
                                </div>
                                <div className="info">
                                    <p>
                                        {slide.floor}평 / {slide.rent}
                                    </p>
                                    <p>오픈 일자 | {slide.open}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="navigation">
                        <button ref={prevRef} className="swiper-button-prev"></button>
                        <button ref={nextRef} className="swiper-button-next"></button>
                    </div>
                </div>
            </div>
        </Section04Container>
    );
};

export default Section04;
