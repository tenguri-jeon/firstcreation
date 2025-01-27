import { useRef } from 'react';
import { Section10Container } from './section10style';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Section10 = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <Section10Container>
            <div className="inner">
                <div className="title">
                    <h3>
                        CERTIFICATION <span>&</span> TECHNOLOGY
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
                            slidesPerView={'auto'}
                            spaceBetween={40}
                            loop={true}
                            // speed={800}
                            // freeMode={true}
                            className="mySwiper">
                            <SwiperSlide>
                                <div className="left">
                                    <div className="pic">
                                        <img
                                            src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se10_icon01.svg"
                                            alt="식품안전관리 HACCP 인증"
                                        />
                                    </div>
                                    <p>
                                        디저트39는 <span>전제품 해썹인증제품</span>으로 <span>철저한 위생관리 시스템</span>을 통해 만들어진 제품입니다.
                                    </p>
                                </div>
                                <div className="right">
                                    <strong>식품안전관리 HACCP 인증</strong>
                                    <p>
                                        건강한 디저트 문화를 선두하는 글로벌 제과 전문 기업으로서, 언제나 고객의 건강을 최우선으로 생각하며, 기업의 사훈으로
                                        삼아 모든 임직원들이 최선을 다하고 있습니다.
                                        <br />
                                        이를 위해 저희 디저트39 는 디저트를 만드는 과정에서 발생할 수 있는 생물학적,화학적, 물리적 위해 요인들을 과학적으로
                                        분석하고 사전에 차단하여 고객 여러분들께 항상 안전하고 깨끗한 제품만을 공급하기 위한 시스템을 갖추고 있으며, 이에 대한
                                        노력에 힘입어 <b>한국 식품 안전 관리 인증원과 식품의학품 안전처로부터 해썹(HACCP)인증을 받은 기업</b>입니다.
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="left">
                                    <div className="pic">
                                        <img
                                            src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se10_icon02.svg"
                                            alt="제과 업계 유일 완제품 보존기술 보유"
                                        />
                                    </div>
                                    <p>
                                        제과 업계에서 유일한 <span>완제품 보존기술</span>을 보유, <span>콜드체인 효과를 극대화</span> 하고있습니다.
                                    </p>
                                </div>
                                <div className="right">
                                    <strong>제과 업계 유일 완제품 보존기술 보유</strong>
                                    <p>
                                        고객분들의 건강을 최우선으로 생각하여, 갓 생산된 제품을 어떠한 변질이나{' '}
                                        <b>품질 손상 없이 신선한 상태로 제공하기위해 콜드 체인 시스템을 도입</b>하였으며, 이를 극대화 하는데 성공 하였습니다.
                                        <br />
                                        고객분들의 건강 그것이 곧 디저트39의 자부심이기 때문입니다.
                                    </p>
                                    <p>
                                        <b>“냉장으로 보관되어 판매되는 제품이 건강에 반드지 좋다는건 잘못된 상식”</b>
                                        <br />갓 구워낸 상태의 디저트를 그 품질 그대로 고객분들께 제공해 드리고자 연구한 끝에 디저트의 급속 예냉을 통해 신선
                                        식품의 대사 작용을 지연시켜 제품의 변질을 늦출 수 있으며,다양한 기술을 복합적으로 적용시켜 완벽한 콜드 체인 및 완제품
                                        보존 기술을 보유하게 되었습니다.
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="left">
                                    <div className="pic">
                                        <img
                                            src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se10_icon01.svg"
                                            alt="식품안전관리 HACCP 인증"
                                        />
                                    </div>
                                    <p>
                                        디저트39는 <span>전제품 해썹인증제품</span>으로 <span>철저한 위생관리 시스템</span>을 통해 만들어진 제품입니다.
                                    </p>
                                </div>
                                <div className="right">
                                    <strong>식품안전관리 HACCP 인증</strong>
                                    <p>
                                        건강한 디저트 문화를 선두하는 글로벌 제과 전문 기업으로서, 언제나 고객의 건강을 최우선으로 생각하며, 기업의 사훈으로
                                        삼아 모든 임직원들이 최선을 다하고 있습니다.
                                        <br />
                                        이를 위해 저희 디저트39 는 디저트를 만드는 과정에서 발생할 수 있는 생물학적,화학적, 물리적 위해 요인들을 과학적으로
                                        분석하고 사전에 차단하여 고객 여러분들께 항상 안전하고 깨끗한 제품만을 공급하기 위한 시스템을 갖추고 있으며, 이에 대한
                                        노력에 힘입어 <b>한국 식품 안전 관리 인증원과 식품의학품 안전처로부터 해썹(HACCP)인증을 받은 기업</b>입니다.
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="left">
                                    <div className="pic">
                                        <img
                                            src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se10_icon02.svg"
                                            alt="제과 업계 유일 완제품 보존기술 보유"
                                        />
                                    </div>
                                    <p>
                                        제과 업계에서 유일한 <span>완제품 보존기술</span>을 보유, <span>콜드체인 효과를 극대화</span> 하고있습니다.
                                    </p>
                                </div>
                                <div className="right">
                                    <strong>제과 업계 유일 완제품 보존기술 보유</strong>
                                    <p>
                                        고객분들의 건강을 최우선으로 생각하여, 갓 생산된 제품을 어떠한 변질이나{' '}
                                        <b>품질 손상 없이 신선한 상태로 제공하기위해 콜드 체인 시스템을 도입</b>하였으며, 이를 극대화 하는데 성공 하였습니다.
                                        <br />
                                        고객분들의 건강 그것이 곧 디저트39의 자부심이기 때문입니다.
                                    </p>
                                    <p>
                                        <b>“냉장으로 보관되어 판매되는 제품이 건강에 반드지 좋다는건 잘못된 상식”</b>
                                        <br />갓 구워낸 상태의 디저트를 그 품질 그대로 고객분들께 제공해 드리고자 연구한 끝에 디저트의 급속 예냉을 통해 신선
                                        식품의 대사 작용을 지연시켜 제품의 변질을 늦출 수 있으며,다양한 기술을 복합적으로 적용시켜 완벽한 콜드 체인 및 완제품
                                        보존 기술을 보유하게 되었습니다.
                                    </p>
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
        </Section10Container>
    );
};

export default Section10;
