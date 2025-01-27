import { Section02Container } from './section02style';

const Section02 = () => {
    return (
        <Section02Container>
            <div className="inner">
                <div className="title">
                    <h3>
                        국내 카페 프랜차이즈
                        <br />
                        21년/22년 합산 평균
                        <br />
                        전국 가맹점 연평균 매출액!
                    </h3>
                    <p>22년 / 23년 등록 정보 공개서 등록 기준 데이터</p>
                </div>
                <div className="pic">
                    <img
                        src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se02_img.png"
                        alt="국내 카페 프랜차이즈 21년/22년 합산 평균 전국 가맹점 연평균 매출액!"
                    />
                </div>
            </div>
        </Section02Container>
    );
};

export default Section02;
