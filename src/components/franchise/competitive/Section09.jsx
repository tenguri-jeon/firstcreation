import { useRef, useState } from 'react';
import { Section09Container } from './section09style';
import { Link } from 'react-router-dom';
import WaveBtn from '../../button/WaveBtn';

const Section09 = () => {
    const [onBtn, setOnBtn] = useState(false);

    const mouseLeaveBtn = () => {
        setOnBtn(true);
        setTimeout(() => {
            setOnBtn(false);
        }, 500);
        console.log(1);
    };

    return (
        <Section09Container>
            <div className="inner">
                <div className="txt">
                    <h3>
                        디저트39의 <span>높은 아이템 경쟁력의 비결</span>
                    </h3>
                    <p>
                        디저트39의 제과센터는 빠르고 정확한 생산을 위하여
                        <br />
                        <span>체계적인 생산 시스템을 확립</span>하였습니다.
                    </p>
                </div>
                <div className="pic">
                    <img
                        className="pc"
                        src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se09_pc.png"
                        alt="체계적인 생산 시스템을 확립"
                    />
                    <img
                        className="mo"
                        src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se09_mo.png"
                        alt="체계적인 생산 시스템을 확립"
                    />
                </div>

                <WaveBtn linkUrl={'/brand/intro'} txt={'브랜드 소개 더보기'} />
            </div>
        </Section09Container>
    );
};

export default Section09;
