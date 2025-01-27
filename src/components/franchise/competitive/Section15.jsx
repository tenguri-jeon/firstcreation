import { Section15Container } from './section15style';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';

const Section15 = () => {
    return (
        <Section15Container>
            <div className="inner">
                <div className="title">
                    <h3>
                        <span>친환경 인증 차(TEA)</span>
                    </h3>
                    <p>Eco-friendly certified Tea</p>
                </div>
                <div className="slide">
                    <Swiper
                        loop={true}
                        effect={'fade'}
                        navigation={true}
                        pagination={true}
                        modules={[Autoplay, EffectFade, Navigation, Pagination]}
                        autoplay={{
                            delay: 5000,
                        }}
                        className="mySwiper box">
                        <SwiperSlide className="slide_item slide_item01">
                            <div className="box">
                                <div className="txt">
                                    <strong>
                                        {`<친환경 캠페인>`}
                                        <br />
                                        디저트39는 친환경으로
                                        <br />
                                        인증된 차(TEA)를 사용합니다.
                                    </strong>
                                    <div>
                                        <b>친환경 국제 인증완료</b>
                                        <p>디저트39는 친환경으로 인증된 차(TEA)만 사용합니다.</p>
                                    </div>
                                </div>
                                <div className="pic">
                                    <img
                                        src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_img01.png"
                                        alt="친환경 국제 인증완료"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide_item slide_item02">
                            <div className="box">
                                <div className="txt">
                                    <strong>
                                        {`<친환경 캠페인>`}
                                        <br />
                                        디저트39는 친환경으로
                                        <br />
                                        인증된 차(TEA)를 사용합니다.
                                    </strong>
                                    <div>
                                        <b>Venture Tea ∙ 가능한 최고 품질 기준</b>
                                        <p>
                                            Venture Tea 는 예방, 감지 및 거부 절차에 따라 제품의 가능한 최고 품질 기준을 준수합니다.
                                            <br />
                                            Venture Tea 의 헌신, 능력 및 전문성, 우수성에 대한 노력을 인증받아
                                            <br />
                                            믿고 드셔도 좋습니다.
                                        </p>
                                    </div>
                                </div>
                                <div className="pic">
                                    <img
                                        src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_img02.png"
                                        alt="Venture Tea 가능한 최고 품질 기준"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide_item slide_item03">
                            <div className="box">
                                <div className="txt">
                                    <strong>
                                        {`<친환경 캠페인>`}
                                        <br />
                                        디저트39는 친환경으로
                                        <br />
                                        인증된 차(TEA)를 사용합니다.
                                    </strong>
                                    <div>
                                        <b>SGS[5종]마크 · BRCGS</b>
                                        <p>
                                            “BRC GS” 영국 소매 컨소시엄(BRCGS)은 1992년에 설립된 영국 식품 소매 산업을 위한 무역협회입니다.
                                            <br />
                                            이표준은 “총체적 품질 관리” 프로그램으로 설계되었으며 식품 제조업체가 인증을 받기 위해
                                            <br />
                                            충족해야 하는 식품 안전 요구 사항과 품질요구사항을 모두 포함합니다.
                                        </p>
                                    </div>
                                </div>
                                <div className="pic">
                                    <img
                                        src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_img03.png"
                                        alt="SGS[5종]마크 · BRCGS"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide_item slide_item04">
                            <div className="box">
                                <div className="txt">
                                    <strong>
                                        {`<친환경 캠페인>`}
                                        <br />
                                        디저트39는 친환경으로
                                        <br />
                                        인증된 차(TEA)를 사용합니다.
                                    </strong>
                                    <div>
                                        <b>SGS[5종]마크 ISO 22000, HACCP, FSSC 22000, GMP 인증</b>
                                        <p>제품, 프로세스, 시스템 또는 서비스가 국내 및 국제 규정 및 표준을 준수함을 입증할 수 있습니다.</p>
                                    </div>
                                </div>
                                <div className="pic">
                                    <img
                                        src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_img04.png"
                                        alt="SGS[5종]마크 ISO 22000, HACCP, FSSC 22000, GMP 인증"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide_item slide_item05">
                            <div className="box">
                                <div className="txt">
                                    <strong>
                                        {`<친환경 캠페인>`}
                                        <br />
                                        디저트39는 친환경으로
                                        <br />
                                        인증된 차(TEA)를 사용합니다.
                                    </strong>
                                    <div>
                                        <b>비건인증마크 · Vegan Certification</b>
                                        <p>
                                            “비건 인증” 채식 협회 승인 상표는 영국에서 가장 널리 알려진 채식 상징입니다.
                                            <br />
                                            포장에 있는 이 상징은 제품 또는 식품이 채식 기준을 충족하기 위해
                                            <br />
                                            엄격한 검사를 거쳤음을 보증합니다.
                                        </p>
                                    </div>
                                </div>
                                <div className="pic">
                                    <img
                                        src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_img05.png"
                                        alt="
                                        비건인증마크 · Vegan Certification
                                    "
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide_item slide_item06">
                            <div className="box">
                                <div className="txt">
                                    <strong>
                                        {`<친환경 캠페인>`}
                                        <br />
                                        디저트39는 친환경으로
                                        <br />
                                        인증된 차(TEA)를 사용합니다.
                                    </strong>
                                    <div>
                                        <b>순수 실론 차 인증마크 · Pure Ceylon Tea Certification</b>
                                        <p>
                                            “순수 실론 차 인증” 실론 티 팩에 나타나는 라이온 로고는 원산지뿐만 아니라 실론차의 품질을 나타냅니다.
                                            <br />
                                            스리랑카 차위원회는 세계 여러 국가에 등록된 실론 티 라이온 로고의 합법적인 소유자입니다.
                                            <br />차 한 팩에 있는 라이온 로고는 스리랑카에서 포장된 100% 순수 실론 차를 보증합니다.
                                        </p>
                                    </div>
                                </div>
                                <div className="pic">
                                    <img
                                        src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_img06.png"
                                        alt="
                                        순수 실론 차 인증마크 Pure Ceylon Tea Certification
                                    "
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide_item slide_item07">
                            <div className="box">
                                <div className="txt">
                                    <strong>
                                        {`<친환경 캠페인>`}
                                        <br />
                                        디저트39는 친환경으로
                                        <br />
                                        인증된 차(TEA)를 사용합니다.
                                    </strong>
                                    <div>
                                        <b>친환경 인증마크 · Rainforest Alliance Certification</b>
                                        <p>
                                            Rainforest Alliance Certification 는 토지 이용 관행, 사업 관행 및
                                            <br />
                                            소비자 행동을 변화시켜 생물 다양성을 보존하고 지속 가능한 생계를 보장하기 위해 노력하는
                                            <br />
                                            공표된 목표를 가진 비정부 조직입니다.
                                        </p>
                                    </div>
                                </div>
                                <div className="pic">
                                    <img
                                        src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_img07.png"
                                        alt="
                                        친환경 인증마크 Rainforest Alliance Certification
                                    "
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide_item slide_item08">
                            <div className="box">
                                <div className="txt">
                                    <strong>
                                        {`<친환경 캠페인>`}
                                        <br />
                                        디저트39는 친환경으로
                                        <br />
                                        인증된 차(TEA)를 사용합니다.
                                    </strong>
                                    <div>
                                        <b>EU유기농인증마크 · EU Organic Certification</b>
                                        <p>
                                            제품을 EU 국가로 수출하기 위해 통제 연합을 통해 발급된 인증입니다. 이는 소비자가 구매하는 상품에 대해 완전한 신뢰를
                                            제공하고 EU 유기농법 규정에 따라 생산되도록 설계되었습니다. 수입품의 경우 동일하거나 동일한 엄격한 규칙을 적용하여
                                            식품 및 음료의 원산지 및 품질에 대한 소비자의 신뢰를 증진합니다.
                                        </p>
                                    </div>
                                </div>
                                <div className="pic">
                                    <img
                                        src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_img08.png"
                                        alt="
                                        EU유기농인증마크 EU Organic Certification
                                    "
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="slide_item slide_item09">
                            <div className="box">
                                <div className="txt">
                                    <strong>
                                        {`<친환경 캠페인>`}
                                        <br />
                                        디저트39는 친환경으로
                                        <br />
                                        인증된 차(TEA)를 사용합니다.
                                    </strong>
                                    <div>
                                        <b>오존친화 순수 실론 차 인증마크· Ozone Friendly Pure Ceylon Tea Certification</b>
                                        <p>
                                            오존 친화적 순수 실론 차 인증. 세계 최초로 오존 친화적인 것으로 인증된 차 음료.
                                            <br />
                                            스리랑카에서 재배되는 모든 차는 이제 100% 오존 친화적입니다.
                                            <br />
                                            이것은 다른 차 생산 국가가 주장 할 수 없는 차이입니다.
                                        </p>
                                    </div>
                                </div>
                                <div className="pic">
                                    <img
                                        src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_img09.png"
                                        alt="
                                        오존친화 순수 실론 차 인증마크 Ozone Friendly Pure Ceylon Tea Certification
                                    "
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </Section15Container>
    );
};

export default Section15;
