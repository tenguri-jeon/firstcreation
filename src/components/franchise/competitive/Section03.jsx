import { Section03Container } from './section03style';

const Section03 = () => {
    return (
        <Section03Container>
            <div className="inner">
                <div className="title">
                    <h3>
                        국내 카페 프랜차이즈 브랜드
                        <br />
                        22년 전국 가맹점 면적당 매출액!
                    </h3>
                    <p>
                        23년 등록 정보공개서 기준 데이터 <span>(면적 3.3㎡ 기준)</span>
                    </p>
                </div>
                <div className="pic">
                    <img
                        src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se03_img.png"
                        alt="국내 카페 프랜차이즈 21년/22년 합산 평균 전국 가맹점 연평균 매출액!"
                    />
                </div>
            </div>
        </Section03Container>
    );
};

export default Section03;
