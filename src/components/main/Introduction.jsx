import ReadMore from '../button/ReadMore';
import { IntroductionWrap, TitleWrap, LeftSide, RightSide } from './IntroductionCss';

const Introduction = () => {
    return (
        <IntroductionWrap>
            <TitleWrap>Introduction</TitleWrap>
            <div className="inner">
                <LeftSide>
                    <img
                        className="location"
                        src="https://github.com/TeamProject-Dessert39/dataCenter/blob/master/images/main/Introduction_01.jpg?raw=true"
                        alt="Locations"
                    />
                    <h3>Locations</h3>
                    <p>
                        디저트39와 함께 나아가는
                        <br />
                        <span>가맹점 안내</span>입니다.
                    </p>
                    <div className="btnDiv">
                        <ReadMore linkUrl={'/brand/location'} txt={'MORE'} circle={true} />
                    </div>
                </LeftSide>
                <RightSide>
                    <h3>Competitive</h3>
                    <p>
                        창업 성공으로 이끄는 디저트39의
                        <br />
                        독보적인
                        <span>브랜드 경쟁력</span>을 보여드립니다.
                    </p>
                    <div className="btnDiv">
                        <ReadMore linkUrl={'/franchise/competitive'} txt={'MORE'} circle={true} />
                    </div>
                    <img
                        className="location"
                        src="https://github.com/TeamProject-Dessert39/dataCenter/blob/master/images/main/Introduction_02.jpg?raw=true"
                        alt="Competitive"
                    />
                </RightSide>
            </div>
        </IntroductionWrap>
    );
};

export default Introduction;
