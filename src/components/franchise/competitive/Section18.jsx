import { Section18Container } from './section18style';

const Section18 = () => {
    return (
        <Section18Container>
            <div className="inner">
                <div className="txt">
                    <h3>
                        <span>환경을 위하는</span>
                        디저트39 리유저블 센터
                    </h3>
                    <p>
                        디저트39는 환경을 생각하여 일회용품의 사용을 줄이고자
                        <br />
                        재사용이 가능한 리유저블 텀블러를 사용합니다.
                        <br />
                        지구를 지키는 습관, 디저트39와 함께하세요.
                    </p>
                </div>
                <div className="video">
                    <video controls>
                        <source src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se18_video.mp4"></source>
                    </video>
                </div>
            </div>
        </Section18Container>
    );
};

export default Section18;
