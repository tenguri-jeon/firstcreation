import { useEffect, useRef, useState } from 'react';
import SubLayout from '../../common/sub/SubLayout';
import { OrganizationalChart } from '../../components/brand';
import { HeadquartersWrap } from '../../components/brand/OrganizationalChartCss';
import { HQWrap, Inner } from './style';

const Headquarters = () => {
    const [isVisible1, setIsVisible1] = useState(false);
    const imgRef1 = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === imgRef1.current) {
                        setIsVisible1(entry.isIntersecting);
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

        return () => {
            if (imgRef1.current) {
                observer.unobserve(imgRef1.current);
            }
        };
    }, []);

    return (
        <>
            <SubLayout kTitle={'본사'} eTitle={'HEADQUARTERS'} />
            <Inner>
                <HeadquartersWrap>
                    <HQWrap>
                        <div className="center cover">
                            <div className="bg"></div>
                            <div className="txtWrap">
                                <h3 className={`${isVisible1 ? 'visible' : ''}`} ref={imgRef1}>
                                    전세계 가장 맛있는 디저트를
                                    <br />한 곳에서 !
                                </h3>
                                <div className="titleBox">
                                    <p>
                                        Lead The <span>Trend</span>
                                    </p>
                                    <div className="line"></div>
                                </div>
                                <div className="descBox">
                                    <div className="leftTxt">
                                        식후 디저트 문화가 보편화되고 그간 맛볼 수 없었던
                                        <br />
                                        이색적인 디저트에 대한 호기심이 높아짐에 따라
                                        <br />
                                        디저트는 하나의 유행, 트렌드로 발전해가고 있습니다.
                                    </div>
                                    <div className="partiction"></div>
                                    <div className="rightTxt">
                                        <div className="rightTxt1">
                                            유명 디저트를 맛보기 위해 줄을 서서 기다리거나 먼 거리도 마다하지 않는 등<br />
                                            &#39;작은 사치&#39; 를 통해 행복감을 느끼는 소비 경향은 더욱 짙어지고,
                                            <br />
                                            이러한 관심이 모여 &#39;디저트&#39;라는 블루오션 시장의 새로운 개막을 알리고 있습니다.
                                        </div>
                                        <div className="topline-mo"></div>
                                        <div className="rightTxt2">
                                            다양한 국가의 문화를 접할 수 있는 기회의 문턱이 낮아진 현재,
                                            <br />
                                            일본과 유럽 등지에서는 선진 디저트 문화에 대한 열기가 더욱 뜨거워지고 있습니다.
                                            <br />
                                            이를 토대로 한국 내 디저트 문화 또한 급속도로 성장하고 있는 추세입니다.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <OrganizationalChart />
                    </HQWrap>
                </HeadquartersWrap>
            </Inner>
        </>
    );
};

export default Headquarters;
