import { NewStoreSliderWrap } from './NewStoreListCss';
import mainNewStoreList from '../../assets/api/mainNewStoreList';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Swiper 스타일을 import
import 'swiper/css';
import 'swiper/css/autoplay';

const NewStoreListSlider = () => {
    return (
        <NewStoreSliderWrap>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView="auto"
                loop={true} // 무한 루프 활성화
                loopAdditionalSlides={1} // 부드러운 루프를 위해 추가 슬라이드 설정
                breakpoints={{
                    600: {
                        slidesPerView: 'auto',
                    },
                    1024: {
                        slidesPerView: 'auto',
                    },
                    1440: {
                        slidesPerView: 'auto',
                    },
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
                {mainNewStoreList.map((stores) => (
                    <SwiperSlide key={stores.id}>{stores.store}</SwiperSlide>
                ))}
            </Swiper>
        </NewStoreSliderWrap>
    );
};

export default NewStoreListSlider;
