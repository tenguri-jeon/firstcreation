import { useEffect, useRef, useState } from 'react';
import { ConfectioneryCenterWrap, ImgBoxWrap } from './ConfectioneryCenterCss';
import ConfectioneryCenterSub1 from './ConfectioneryCenterSub1';
import ConfectioneryCenterSub2 from './ConfectioneryCenterSub2';

const ConfectioneryCenter = () => {
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
        <ConfectioneryCenterWrap>
            <p className="header">브랜드 지원</p>
            <h3>디저트39 제과센터</h3>
            <p className="sub">
                경기 의왕시에 위치한 제과 & 연구센터는 다년간의 준비 과정을 거쳐 설립된
                <br />
                국내 최대 규모의 디저트 전문 생산 센터입니다.
            </p>
            <ImgBoxWrap>
                <div className={`frame1 ${isVisible1 ? 'visible' : ''}`} ref={imgRef1}>
                    <img
                        src="https://github.com/TeamProject-Dessert39/dataCenter/blob/master/images/brand/Introdution/Introdution_04.jpg?raw=true"
                        alt="Introdution_04"
                    />
                </div>
                <div className={`frame2 ${isVisible2 ? 'visible' : ''}`} ref={imgRef2}>
                    <img
                        src="https://github.com/TeamProject-Dessert39/dataCenter/blob/master/images/brand/Introdution/Introdution_05.jpg?raw=true"
                        alt="Introdution_05"
                    />
                </div>
                <div className={`frame3 ${isVisible3 ? 'visible' : ''}`} ref={imgRef3}>
                    <img
                        src="https://github.com/TeamProject-Dessert39/dataCenter/blob/master/images/brand/Introdution/Introdution_06.jpg?raw=true"
                        alt="Introdution_06"
                    />
                </div>
            </ImgBoxWrap>
            <strong>국내외 일류 제과 장인들의 끊임없는 도전</strong>
            <p className="subLast">
                외국계 디저트 전문 기업, 최고급 호텔, 프랑스 전문 제과 과정 수료 등 10~30년 경력의 제과 장인들이 모여 연구 & 개발에 몰두하고
                있으며,
                <br />
                내로라하는 국내외 유명 제과 기업들과의 지속적인 업무 협정을 통해 거듭 발전해 나아가고 있습니다.
                <br />
                차별적이고 트렌디한 제품에 대한 끊임 없는 시장 조사와 수없이 이어지는 테스트는 가장 맛있는 프리미엄 수제 디저트를
                <br />
                제공하기 위한 디저트39의 기본 이념입니다.
            </p>
            <h4>
                <span></span>
                Confectionery Factory
            </h4>
            <ConfectioneryCenterSub1 />
            <ConfectioneryCenterSub2 />
        </ConfectioneryCenterWrap>
    );
};

export default ConfectioneryCenter;
