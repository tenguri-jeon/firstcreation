import { Section17Container } from './section17style';
import competitiveData from '../../../assets/api/competitive_slide';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';

const Section17 = () => {
    const se17Data = competitiveData.find((item) => item.sec === 17);

    return (
        <Section17Container>
            <div className="inner">
                <div className="txt">
                    <h3>
                        상생을 위한 <span>다양한 마케팅 지원</span>
                    </h3>
                    <p>
                        디저트39는 본사와 가맹점의 상생을 위한 맞춤형 마케팅 전략으로 매장에서 최고의 매출을 올릴 수 있도록
                        <br />
                        아낌 없는 지원을 하고 있습니다. 마케팅 전문가를 통해 연예인 인플루언서(유튜버,인스타그래머,페이스북스타)
                        <br />
                        G-Bus 마케팅,국내 청취율 1위라디오 제품 마케팅등 차별화된 브랜드 홍보를 진행 하고있습니다.
                    </p>
                </div>
            </div>
            <div className="slide">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 3000,
                    }}
                    speed={600}
                    loop={true}
                    slidesPerView={'auto'}
                    spaceBetween={20}
                    centeredSlides={true}
                    className="mySwiper">
                    {se17Data.slide.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="pic">
                                <img src={item.img} alt={item.desc} />
                            </div>
                            <p>
                                <span>{item.title}</span>
                                <span>{item.desc}</span>
                            </p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Section17Container>
    );
};

export default Section17;
