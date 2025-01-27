import ReadMore from '../button/ReadMore';
import { StoreInteriorWrap, LeftSide, RightSide, TitleWrap, ControllBox } from './StoreInteriorCss';
import { useRef, useState } from 'react';
import StoreInteriorImages from '../../assets/api/mainStoreInterior';

// Swiper import
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';

// Swiper 스타일 import
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// react-icons
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

const StoreInterior = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0); // 현재 이미지 index
    const imgTotalCnt = 6;

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    const handleSlideChange = (swiper) => {
        setCurrentSlide(swiper.realIndex + 1);
    };

    return (
        <StoreInteriorWrap>
            <div className="mo">Store Interior</div>
            <LeftSide>
                <Swiper
                    modules={[Autoplay, Navigation, EffectFade]}
                    spaceBetween={0}
                    slidesPerView={1}
                    effect={'fade'}
                    width={540}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onActiveIndexChange={handleSlideChange}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                >
                    <div className="inner">
                        {/* 이미지 리스트 생성 */}
                        {StoreInteriorImages.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img referrerPolicy="no-referrer" src={`${img.url}`} alt={`StoreInterior_0${img.id}`}></img>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </LeftSide>
            <RightSide>
                <TitleWrap>Store Interior</TitleWrap>
                <ReadMore className="mo" linkUrl={'/franchise/interior'} txt={'READ MORE'} circle={true} />
                <div className="silderInfo">
                    <ControllBox>
                        <button onClick={handlePrev}>
                            <IoIosArrowBack />
                        </button>
                        {`${currentSlide} / ${imgTotalCnt}`}
                        <button onClick={handleNext}>
                            <IoIosArrowForward />
                        </button>
                    </ControllBox>
                    <div className="logo">
                        <img
                            src="https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/6e0bb5590a11af107971f7cad5696c31fa82f7a8/icon/dessert39_simbol.svg"
                            alt="dessert39_simbol"
                        />
                    </div>
                </div>
            </RightSide>
        </StoreInteriorWrap>
    );
};

export default StoreInterior;
