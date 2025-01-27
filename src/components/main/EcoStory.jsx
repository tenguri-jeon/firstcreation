import { useState } from 'react';
import { EcoStoryWrap, TitleWrap, TabWrap, ContentWrap, RACListWrap } from './EcoStoryCss';
import ReadMore from '../button/ReadMore';
import EcoStoryRACList from './EcoStoryRACList';
import EcoStroyPhotoSlider from './EcoStroyPhotoSlider';

const EcoStory = () => {
    const [enableTab, setEnableTab] = useState(0);

    return (
        <EcoStoryWrap>
            <TitleWrap>DESSERT39 ECO STORY</TitleWrap>
            <TabWrap>
                <ul>
                    <li onClick={() => setEnableTab(0)} className={enableTab == 0 ? 'on' : null}>
                        <a>디저트39의 ESG경영</a>
                    </li>
                    <li onClick={() => setEnableTab(1)} className={enableTab == 1 ? 'on' : null}>
                        <a>친환경 인증기업</a>
                    </li>
                    <li onClick={() => setEnableTab(2)} className={enableTab == 2 ? 'on' : null}>
                        <a>
                            리유저블 R&D및 생산센터 <span>[바이오 플라스틱]</span>
                        </a>
                    </li>
                    <li onClick={() => setEnableTab(3)} className={enableTab == 3 ? 'on' : null}>
                        <a>친환경 인증TEA</a>
                    </li>
                </ul>
            </TabWrap>
            <ContentWrap>
                <li className={enableTab == 0 ? 'on' : null}>
                    <div className="ecoTab">
                        <div className="article">
                            <h4>
                                국내 프랜차이즈중 전 세계 최초
                                <br /> 유일한 현실적 탄소중립 대안을 실현중인 기업
                            </h4>
                            <h3>우리 지구 살리기 캠페인</h3>
                            <p>
                                디저트39는 2027년까지 탄소중립을 위한 다양한
                                <br /> 솔루션을 실현해 나갈 계획입니다.
                            </p>
                            <ReadMore linkUrl={'/franchise/competitive'} txt={'MORE'} circle={true} />
                        </div>
                        <div className="photo">
                            <a href="/franchise/competitive">
                                <img
                                    referrerPolicy="no-referrer"
                                    src="https://github.com/TeamProject-Dessert39/dataCenter/blob/master/images/main/EcoStroty_01.png?raw=true"
                                    alt="EcoStroty_01"
                                />
                            </a>
                        </div>
                    </div>
                </li>
                <li className={enableTab == 1 ? 'on' : null}>
                    <div className="ecoTab">
                        <div className="article">
                            <img
                                referrerPolicy="no-referrer"
                                src="https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/1884dadb9ee5b3abba6003573b35818b2700bd0e/icon/esg_icon.svg"
                                alt="esg_icon"
                            />
                            <h4>
                                국내 프랜차이즈 유일 최초 친환경 인증기업
                                <br /> 디저트39 친환경 리유저블 텀블러
                            </h4>
                            <h3>
                                친환경 인증기업
                                <br />
                                ESG 경영 실천
                            </h3>
                            <p>
                                녹색의 지구를 만드는 건강한 소비,
                                <br />
                                디저트39는 친환경으로 인증된
                                <br />
                                텀블러만을 사용합니다.
                            </p>
                            <ReadMore linkUrl={'/franchise/competitive'} txt={'MORE'} circle={true} />
                        </div>
                        <div className="photo">
                            <a href="/franchise/competitive">
                                <img
                                    referrerPolicy="no-referrer"
                                    src="https://github.com/TeamProject-Dessert39/dataCenter/blob/master/images/main/EcoStroty_02.png?raw=true"
                                    alt="EcoStroty_02"
                                />
                            </a>
                        </div>
                    </div>
                </li>
                <li className={enableTab == 2 ? 'on' : null}>
                    <div className="ecoTab">
                        <div className="article">
                            <img
                                referrerPolicy="no-referrer"
                                src="https://github.com/TeamProject-Dessert39/dataCenter/blob/master/icon/ret_img.png?raw=true"
                                alt="ret_img"
                            />
                            <h4>
                                안전하고 위생적인
                                <br /> 환경에서 제작합니다.
                            </h4>
                            <h3>
                                리유저블 R&D
                                <br />및 생산센터
                            </h3>
                            <p>
                                디저트39 리유저블 센터에서는
                                <br />
                                365일 지구의 날을 실천하기 위해
                                <br />
                                지속적으로 영구적인 사용이 가능한
                                <br />
                                리유저블 텀블러를 개발하고 있습니다.
                            </p>
                            <ReadMore linkUrl={'/franchise/competitive'} txt={'MORE'} circle={true} />
                        </div>
                        <div className="photo">
                            <video
                                src="https://github.com/TeamProject-Dessert39/dataCenter/raw/master/images/main/reusable.mp4"
                                controls
                            ></video>
                        </div>
                    </div>
                </li>
                <li className={enableTab == 3 ? 'on' : null}>
                    <div className="ecoTab">
                        <div className="article">
                            <RACListWrap>
                                <EcoStoryRACList />
                            </RACListWrap>
                            <h4>친환경 국제인증완료</h4>
                            <h3>
                                디저트39 친환경
                                <br />
                                인증 차(TEA)
                            </h3>
                            <p>
                                디저트39의 친환경 인증 차(TEA)
                                <br />
                                다수의 인증을 받은 Venture Tea에서
                                <br />
                                생산합니다.
                            </p>
                            <ReadMore linkUrl={'/franchise/competitive'} txt={'MORE'} circle={true} />
                        </div>
                        <div className="ecoSlider">
                            <h2 className="ecoTitle">
                                &#60;친환경 켐페인&#62;
                                <br />
                                디저트39는 친환경으로
                                <br />
                                인증된 차(TEA)를 이용합니다.
                            </h2>
                            <EcoStroyPhotoSlider />
                        </div>
                    </div>
                </li>
            </ContentWrap>
        </EcoStoryWrap>
    );
};

export default EcoStory;
