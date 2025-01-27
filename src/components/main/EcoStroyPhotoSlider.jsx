import { EcoImageSliderWrap } from './EcoStoryCss';
import mainEcoStory from '../../assets/api/mainEcoStory';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import { useState } from 'react';

const LinkWrapper = ({ children, href }) => {
    const handleClick = (e) => {
        // 드래그 중에는 링크 이동 제한
        if (e.detail === 0) e.preventDefault();
    };
    return (
        <a href={href} onClick={handleClick} style={{ display: 'block', width: '100%', height: '100%' }}>
            {children}
        </a>
    );
};

const EcoStroyPhotoSlice = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (swiper) => {
        setCurrentSlide(swiper.realIndex);
    };

    return (
        <EcoImageSliderWrap>
            <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                effect={'fade'}
                fadeEffect={{ crossFade: true }}
                pagination={{
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + (index + 1) + '</span>';
                    },
                }}
                onSlideChange={handleSlideChange}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                allowTouchMove={true}
                watchSlidesProgress={true}
            >
                {mainEcoStory.map((item, index) => (
                    <SwiperSlide key={item.id}>
                        <LinkWrapper href="/franchise/competitive">
                            <div className="swiper-slide-content">
                                <h2 dangerouslySetInnerHTML={{ __html: item.main }} />
                                <h3 dangerouslySetInnerHTML={{ __html: item.sub }} />
                            </div>
                            <img referrerPolicy="no-referrer" src={item.photo} alt={`EcoStroySlider_${index + 1}`} />
                        </LinkWrapper>
                    </SwiperSlide>
                ))}
            </Swiper>
        </EcoImageSliderWrap>
    );
};

export default EcoStroyPhotoSlice;
