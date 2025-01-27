import { useEffect, useRef, useState } from 'react';
import { SpecialWrap } from './SpecialCss';

const Special = () => {
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.5,
                rootMargin: '0px',
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, []);

    return (
        <SpecialWrap>
            <h3>
                빠르게 변화하는 트렌드 속에서
                <br />
                대중의 이목을 사로잡을 수 있는 것은 <b>특별함</b> 입니다.
            </h3>
            <p>
                언제, 어디서나 쉽게 접할 수 있는 식상함은 치열한 경쟁에서 외면 받을 수밖에 없습니다. <br />
                DESSERT39은 고객이 원하는 바를 알고, 이를 만족시킬 특별함을 갖춘 기업으로 신선하고 이색적인 아이템과
                <br />
                독자적인 시스템을 통해 국내에서는 쉽게 접할 수 없었던 최고의 프리미엄 디저트만을 선보입니다.
            </p>
            <div className={`image-container ${isVisible ? 'visible' : ''}`} ref={imgRef}>
                <img
                    src="https://github.com/TeamProject-Dessert39/dataCenter/blob/master/images/brand/Introdution/Introdution_01.jpg?raw=true"
                    alt="Introdution_01"
                />
            </div>
        </SpecialWrap>
    );
};

export default Special;
