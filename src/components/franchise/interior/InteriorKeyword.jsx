import { InteriorKeywordContainer } from './style';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const InteriorKeyword = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <InteriorKeywordContainer>
            <div className="inner">
                <div className="left">
                    <p data-aos="fade-right" data-aos-anchor="top-top" data-aos-duration="1000" data-aos-once="false">
                        <strong>MINIMAL</strong>
                        매장내 불필요한 표현들을 제거하고 minimal 공간확보에 중점을 둠
                    </p>
                    <p data-aos="fade-right" data-aos-anchor="top-top" data-aos-duration="1000" data-aos-delay="300" data-aos-once="false">
                        <strong>PLANTERIOR</strong>
                        도심속에 자연을 찾는 소비자들의 요구 (needs)를 반영함
                        <br className="pc" />
                        PLANT + INTERIOR 식물과 인테리어 / 친환경 활동에 관심을 가질 수 있게함을 목적으로 함
                    </p>
                    <p data-aos="fade-right" data-aos-anchor="top-top" data-aos-duration="1000" data-aos-delay="600" data-aos-once="false">
                        <strong>MONOTONE</strong>
                        (모노톤)을 베이스로 단조로우면서도 트랜디함을 추구함
                    </p>
                </div>
                <div className="right">
                    <div className="pic">
                        <img src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/interior_visual_img01.jpg" alt="interior picture" />
                    </div>
                    <div className="pic">
                        <img src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/interior_visual_img02.jpg" alt="interior picture" />
                    </div>
                </div>
            </div>
        </InteriorKeywordContainer>
    );
};

export default InteriorKeyword;
