import { useEffect, useRef, useState } from 'react';
import SubLayout from '../../common/sub/SubLayout';
import { Inner, BiWrap } from './style';

const Bi = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const imgRef1 = useRef(null);
    const imgRef2 = useRef(null);
    const imgRef3 = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === imgRef1.current) {
                        setIsVisible1(entry.isIntersecting);
                    } else if (entry.target === imgRef2.current) {
                        setIsVisible2(entry.isIntersecting);
                    } else if (entry.target === imgRef3.current) {
                        setIsVisible3(entry.isIntersecting);
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
        if (imgRef3.current) {
            observer.observe(imgRef3.current);
        }

        return () => {
            if (imgRef1.current) {
                observer.unobserve(imgRef1.current);
            }
            if (imgRef2.current) {
                observer.unobserve(imgRef2.current);
            }
            if (imgRef3.current) {
                observer.unobserve(imgRef3.current);
            }
        };
    }, []);

    return (
        <>
            <SubLayout kTitle={'BRAND IDENTITY'} eTitle={'BRAND IDENTITY'} />
            <Inner>
                <BiWrap>
                    <div className="center">
                        <div className="cover">
                            <div className="left">
                                <div className="frame">
                                    <img
                                        src="https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/e3e0bc5364693afe96ee82ccd02961984d634b62/icon/logo_full_b.svg"
                                        alt="dessert39_favicon_logo_full"
                                    />
                                </div>
                                <div className="point">
                                    <p>DESSERT 39 Signature</p>
                                </div>
                            </div>
                            <div className="right">
                                <h3 className={`${isVisible1 ? 'visible' : ''}`} ref={imgRef1}>
                                    The World&#39;s Most Delicious
                                    <br />
                                    Dessert Experience.
                                </h3>
                                <p className={`txt1 ${isVisible2 ? 'visible' : ''}`} ref={imgRef2}>
                                    전세계 가장 맛있는 디저트가 한 곳에 모인 디저트39
                                </p>
                                <p className={`txt2 ${isVisible3 ? 'visible' : ''}`} ref={imgRef3}>
                                    Dessert39은 ‘디저트’ 시장을 이끌어갈 트렌드 리더로서
                                    <br className="pc" /> World Dessert Cafe 라는 차별적인 컨셉 아래, 세계 각국의 다양한 트렌드를
                                    <br className="pc" /> 담아내기 위한 끊임없는 연구 & 개발을 거듭해 가고 있습니다.
                                    <br className="pc" />
                                    단순 ‘디저트 전문점’ 이 아닌 그이상의 가치를 담고 있습니다.
                                </p>
                            </div>
                        </div>
                        <div className="logo">
                            <div className="logoWrap">
                                <h4>DESSERT 39 Logo</h4>
                                <div className="logoBox">
                                    <img
                                        src="https://github.com/TeamProject-Dessert39/dataCenter/blob/master/icon/dessert39_logo.png?raw=true"
                                        alt="dessert39_logo"
                                    />
                                    <div className="bg"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </BiWrap>
            </Inner>
        </>
    );
};

export default Bi;
