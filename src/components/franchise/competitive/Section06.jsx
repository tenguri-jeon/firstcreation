import { Section06Container } from './section06style';
import { useRef, useState } from 'react';

import competitiveData from '../../../assets/api/competitive_slide';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Section06 = () => {
    const se06Data = competitiveData.find((item) => item.sec === 6);
    const slideRef = useRef(null);

    const [now, setNow] = useState(1);

    const handleSlideChange = (swiper) => {
        if (swiper.realIndex + 1 > 34) {
            setNow(swiper.realIndex + 1 - 33);
        } else if (swiper.realIndex + 1 > 17) {
            setNow(swiper.realIndex + 1 - 17);
        } else {
            setNow(swiper.realIndex + 1);
        }
    };

    return (
        <Section06Container>
            <div className="inner">
                <h3>
                    실제 운영 점주님들의<span>성공창업스토리 & 업종변경 성공 스토리</span>
                </h3>
                {/* 오른쪽 밖으로 나가게 할건지... */}
                <div className="slide">
                    <Swiper
                        speed={1000}
                        loop={true}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                        onSlideChange={handleSlideChange}
                        breakpoints={{
                            1441: {
                                slidesPerView: 2.7,
                                spaceBetween: 50,
                            },
                            1025: {
                                slidesPerView: 2.4,
                                spaceBetween: 30,
                            },
                            769: {
                                slidesPerView: 1.7,
                                spaceBetween: 45,
                            },
                            481: {
                                slidesPerView: 1.5,
                                spaceBetween: 35,
                            },
                            0: {
                                slidesPerView: 1.3,
                                spaceBetween: 25,
                            },
                        }}>
                        {Array.from({ length: 3 }).flatMap((_, i) =>
                            se06Data.slide.map((slide, index) => (
                                <SwiperSlide ref={slideRef} key={`${i}-${index}`}>
                                    <div className="video">
                                        <iframe
                                            src={slide.url}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen></iframe>
                                    </div>
                                    <div className="box">
                                        <div className="txt">
                                            <h4>
                                                {slide.title}
                                                <br />
                                                [성공창업스토리 - {slide.store}]
                                            </h4>
                                            <div className="desc">
                                                {slide.desc.map((item, idx) => (
                                                    <p key={idx}>{item}</p>
                                                ))}
                                            </div>
                                        </div>
                                        <p>실제 가맹점주 인터뷰({slide.store})</p>
                                    </div>
                                </SwiperSlide>
                            ))
                        )}
                    </Swiper>
                </div>
                <div className="pagination">
                    <p>
                        <span>{now < 10 ? '0' + now : now}</span> / {se06Data.slide.length}
                    </p>
                </div>
            </div>
        </Section06Container>
    );
};

export default Section06;
