import { useRef } from 'react';
import { Section12Container } from './section12style';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Section12 = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <Section12Container>
            <div className="inner">
                <div className="title">
                    <p>
                        DESSERT 39
                        <br />
                        Best Delivery Experience
                    </p>
                    <h3>
                        디저트39의 <span>독보적인 배달 경쟁력</span>
                    </h3>
                </div>
                <div className="box">
                    <div className="slide">
                        <Swiper
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }}
                            modules={[Navigation]}
                            loop={true}
                            speed={800}
                            breakpoints={{
                                1440: {
                                    slidesPerView: 3,
                                    spaceBetween: 60,
                                },
                                1025: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                769: {
                                    slidesPerView: 2.2,
                                    spaceBetween: 20,
                                },
                                581: {
                                    slidesPerView: 2,
                                    spaceBetween: 15,
                                },
                            }}
                            className="mySwiper">
                            <SwiperSlide className="slide_item01 slide_item">
                                <p className="num">01</p>
                                <div className="txt_wrap">
                                    <div className="txt">
                                        <p>디저트39의</p>
                                        <b>
                                            독보적인 배달경쟁력
                                            <br />
                                            실시간 전국 1위
                                        </b>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="slide_item slide_item02">
                                <p className="num">02</p>
                                <div className="txt_wrap">
                                    <div className="txt">
                                        <b>
                                            평점 <span>5.0점</span> 만점에 <span>5.0점!</span>
                                            <br />
                                            소비자 만족도 최상!
                                        </b>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="slide_item slide_item03">
                                <p className="num">03</p>
                                <div className="txt_wrap">
                                    <div className="txt">
                                        <p>
                                            <span>#카페</span>
                                            <span>#디저트 분야 최다리뷰</span>
                                            <span>#최다평점</span>
                                        </p>
                                        <b>
                                            리뷰 600개 이상에도 별점 유지
                                            <br />
                                            소비자 만족도 최상!
                                        </b>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="slide_item slide_item04">
                                <p className="num">04</p>
                                <div className="txt_wrap">
                                    <div className="txt">
                                        <b>
                                            고객만족도 1000%
                                            <br />
                                            믿고보는 사진 리뷰!
                                        </b>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="slide_item slide_item05">
                                <p className="num">05</p>
                                <div className="txt_wrap">
                                    <div className="txt">
                                        <b>
                                            딜리버리 앱 인기 폭발!
                                            <br />
                                            포토리뷰 다수!
                                        </b>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="navigation">
                        <button ref={prevRef} className="swiper-button-prev"></button>
                        <button ref={nextRef} className="swiper-button-next"></button>
                    </div>
                </div>
            </div>
        </Section12Container>
    );
};

export default Section12;
