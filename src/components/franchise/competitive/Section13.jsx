import { Link } from 'react-router-dom';
import { Section13Container } from './section13style';
import WaveBtn from '../../button/WaveBtn';

const Section13 = () => {
    return (
        <Section13Container>
            <div className="inner">
                <div className="left">
                    <div className="title">
                        <p>
                            Outstanding Brand
                            <br className="pc" />
                            <span> </span>
                            Reputation
                        </p>
                        <h3>MZ세대들의 브랜드 1위</h3>
                    </div>
                    <p>
                        국내 카페 프렌차이즈 브랜드중 압도적 1위
                        <br />
                        해시태그 9,020만 돌파! 해시태그 최고 기록 달성 !
                    </p>
                    <div className="list">
                        <ul className="list_tit">
                            <li>순위</li>
                            <li>브랜드명</li>
                            <li>해시태그 조회수</li>
                        </ul>
                        <ul className="list_cnt">
                            <li>
                                <p>1위</p>
                                <p>디저트39</p>
                                <p>92.1M(9,210만)</p>
                            </li>
                            <li>
                                <p>2위</p>
                                <p>공*</p>
                                <p>42.1M (4,210만)</p>
                            </li>
                            <li>
                                <p>3위</p>
                                <p>메*커피</p>
                                <p>24M (2,400만)</p>
                            </li>
                            <li>
                                <p>4위</p>
                                <p>투*플레이스</p>
                                <p>12.1M (1,210만)</p>
                            </li>
                            <li>
                                <p>5위</p>
                                <p>이디*</p>
                                <p>12.6M (1,260만)</p>
                            </li>
                            <li>
                                <p>6위</p>
                                <p>*다방</p>
                                <p>11.1M (1,110만)</p>
                            </li>
                            <li>
                                <p>7위</p>
                                <p>엔*리너스</p>
                                <p>688.7K (688만7천)</p>
                            </li>
                            <li>
                                <p>8위</p>
                                <p>컴*즈커피</p>
                                <p>644.5K (644만5천)</p>
                            </li>
                            <li>
                                <p>9위</p>
                                <p>할*스</p>
                                <p>549.5K (549만5천)</p>
                            </li>
                            <li>
                                <p>10위</p>
                                <p>더벤*</p>
                                <p>392.8K (392만8천)</p>
                            </li>
                        </ul>
                        <p>23년 4월 브랜드명(한글 + 영문) 틱톡 국내 소비자 조회수 기준</p>
                    </div>
                </div>
                <div className="right">
                    <div className="pic">
                        <Link to={'https://www.tiktok.com/tag/%EB%94%94%EC%A0%80%ED%8A%B839'} target="_blank">
                            <div className="more">
                                <p>
                                    틱톡 검색창에 디저트39를 검색해 보세요!
                                    <br />
                                    수많은 인플루언서들이 먹어본 디저트39 영상들을 만나보세요.
                                </p>
                                {/* 추후 버튼 수정 */}
                                <WaveBtn txt={'인기틱톡 더보기'} white={true} />
                            </div>
                            <img
                                src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se13_img.png"
                                alt="틱톡 검색창에 디저트39를 검색해 보세요"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </Section13Container>
    );
};

export default Section13;
