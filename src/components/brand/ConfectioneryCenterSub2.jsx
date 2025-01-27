import { useEffect, useRef, useState } from 'react';
import { ConfectioneryCenterSub2Wrap, ImgBoxWrap } from './ConfectioneryCenterSub2Css';

const ConfectioneryCenterSub2 = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const imgRef1 = useRef(null);
    const imgRef2 = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === imgRef1.current) {
                        setIsVisible1(entry.isIntersecting);
                    } else if (entry.target === imgRef2.current) {
                        setIsVisible2(entry.isIntersecting);
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: '0px',
            }
        );

        if (imgRef1.current) {
            observer.observe(imgRef1.current);
        }
        if (imgRef2.current) {
            observer.observe(imgRef2.current);
        }

        return () => {
            if (imgRef1.current) {
                observer.unobserve(imgRef1.current);
            }
            if (imgRef2.current) {
                observer.unobserve(imgRef2.current);
            }
        };
    }, []);

    return (
        <ConfectioneryCenterSub2Wrap>
            <div className="subTitle">
                <div>02</div>
                <p>
                    <b>일일 신제품 테스트</b>를 통하여 호불호가 없는 아이템만을 출시,
                    <br />
                    고객 100% 만족에 만전을 기하고 있습니다. 국내에서 쉽게 맛 볼 수없는 독자적인 제품을 출시함으로써
                    <br />
                    단골 고객 및 신규 고객을 확보하는데에 타 브랜드보다 훨씬 유리하게 만듭니다.
                </p>
            </div>
            <ImgBoxWrap>
                <div className={`frame1 ${isVisible1 ? 'visible' : ''}`} ref={imgRef1}>
                    <img
                        src="https://github.com/TeamProject-Dessert39/dataCenter/blob/master/images/brand/Introdution/Introdution_07.jpg?raw=true"
                        alt="Introdution_07"
                    />
                </div>
                <div className={`frame2 ${isVisible2 ? 'visible' : ''}`} ref={imgRef2}>
                    <img
                        src="https://github.com/TeamProject-Dessert39/dataCenter/blob/master/images/brand/Introdution/Introdution_08.jpg?raw=true"
                        alt="Introdution_08"
                    />
                </div>
            </ImgBoxWrap>
        </ConfectioneryCenterSub2Wrap>
    );
};

export default ConfectioneryCenterSub2;
