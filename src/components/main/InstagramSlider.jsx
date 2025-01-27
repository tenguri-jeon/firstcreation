import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { InstagramSliderWrap, ImageContainer } from './InstagramCss';
import InstagramList from '../../assets/api/mainInstagramList';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const LinkWrapper = ({ children, href }) => {
    const handleClick = (e) => {
        // 드래그 중에는 링크 이동 제한
        if (e.detail === 0) e.preventDefault();
    };
    return (
        <a href={href} target="_blank" onClick={handleClick} style={{ display: 'block', width: '100%', height: '100%' }}>
            {children}
        </a>
    );
};

const InstagramSlider = () => {
    return (
        <InstagramSliderWrap>
            <Swiper
                modules={[Pagination]}
                spaceBetween={0}
                slidesPerView="auto"
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
                pagination={{
                    el: '.swiper-pagination',
                    type: 'progressbar',
                }}
                loop={true}
                grabCursor={true}
                className="mySwiper"
            >
                {InstagramList.map((image) => (
                    <SwiperSlide key={image.id}>
                        <LinkWrapper href={image.linkUrl}>
                            <ImageContainer>
                                <img src={image.imgUrl} alt={image.title} />
                            </ImageContainer>
                        </LinkWrapper>
                    </SwiperSlide>
                ))}
                <div className="swiper-pagination"></div>
            </Swiper>
        </InstagramSliderWrap>
    );
};

export default InstagramSlider;
