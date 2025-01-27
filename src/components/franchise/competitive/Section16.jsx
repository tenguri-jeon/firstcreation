import { Link } from 'react-router-dom';
import { Section16Container } from './section16style';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';
import ReadMore from '../../button/ReadMore';

const Section16 = () => {
    return (
        <Section16Container>
            <div className="inner">
                <div className="left">
                    <h3>
                        DESSERT39
                        <br className="pc" />
                        <span> </span>
                        INTERIOR
                    </h3>
                    <b>디저트39의 감각적인 인테리어</b>
                    <p>
                        디저트39의 감각적인 인테리어와 다양한 업종변경 성공의
                        <br className="pc" />
                        <span> </span>매장들로 구성된 감각적이고, SNS에서 핫한 인테리어
                    </p>
                    {/* 추후 버튼 수정, Link 사용 */}
                    <ReadMore linkUrl={'/franchise/interior'} txt={'INTERIOR MORE'} circle={true} />
                </div>
                <div className="right">
                    <div className="slide">
                        {/* Link 경로 수정 필요 */}
                        <Swiper
                            loop={true}
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 3000,
                            }}
                            speed={800}
                            slidesPerView={'auto'}
                            spaceBetween={30}
                            className="mySwiper box">
                            <SwiperSlide className="slide_item01 slide_item">
                                <div className="pic">
                                    <Link to={'/'}></Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="slide_item02 slide_item">
                                <div className="pic">
                                    <Link to={'/'}>
                                        <img
                                            src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_img02.jpg"
                                            alt="디저트39의 감각적인 인테리어02"
                                        />
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="slide_item03 slide_item">
                                <div className="pic">
                                    <Link to={'/'}></Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="slide_item04 slide_item">
                                <div className="pic">
                                    <Link to={'/'}></Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="slide_item05 slide_item">
                                <div className="pic">
                                    <Link to={'/'}></Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="slide_item06 slide_item">
                                <div className="pic">
                                    <Link to={'/'}></Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="slide_item07 slide_item">
                                <div className="pic">
                                    <Link to={'/'}></Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="slide_item08 slide_item">
                                <div className="pic">
                                    <Link to={'/'}></Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="slide_item09 slide_item">
                                <div className="pic">
                                    <Link to={'/'}></Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="slide_item10 slide_item">
                                <div className="pic">
                                    <Link to={'/'}></Link>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </Section16Container>
    );
};

export default Section16;
