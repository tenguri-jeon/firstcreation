import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProcedureContainer } from './style';
import SubLayout from '../../../common/sub/SubLayout';

import { FaChevronRight } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Procedure = () => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <ProcedureContainer>
            <SubLayout kTitle={'가맹절차'} eTitle={'FRANCHISE PROCESS STEPS'} />
            <div className="inner">
                <h3>THE PROCESS</h3>
                <ul className="list">
                    <li className="item item01" data-aos="fade-up" data-aos-duration="800" data-aos-delay="0">
                        <div className="pic">
                            <img src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/produre_icon01.svg" alt="개설상담 아이콘" />
                        </div>
                        <div className="txt">
                            <p className="num">01</p>
                            <strong className="tit">개설상담</strong>
                            <p className="desc">
                                유선/방문 상담을 통해 사업 진행
                                <br />
                                방향, 투자 자금 계획에 대한 상세 상담과 가맹 절차 및 조건에 대한 안내
                            </p>
                        </div>
                        <div className="arrow">
                            <FaChevronRight />
                        </div>
                    </li>
                    <li className="item item02" data-aos="fade-up" data-aos-duration="800" data-aos-delay="150">
                        <div className="pic">
                            <img src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/produre_icon02.svg" alt="입지/상권 분석 아이콘" />
                        </div>
                        <div className="txt">
                            <p className="num">02</p>
                            <strong className="tit">입지/상권 분석</strong>
                            <p className="desc">후보지 선정과 현장 방문 조사를 통한 전략적인 상권 타당성 분석</p>
                        </div>
                        <div className="arrow">
                            <FaChevronRight />
                        </div>
                    </li>
                    <li
                        className="item item03"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay={`${viewportWidth > 1024 ? '300' : viewportWidth > 600 ? '200' : '150'}`}>
                        <div className="pic">
                            <img src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/produre_icon03.svg" alt="매장 실측 아이콘" />
                        </div>
                        <div className="txt">
                            <p className="num">03</p>
                            <strong className="tit">매장 실측</strong>
                            <p className="desc">본사 실사팀을 파견하여 건축물 확인 및 인테리어 안내</p>
                        </div>
                        <div className="arrow">
                            <FaChevronRight />
                        </div>
                    </li>

                    <li
                        className="item item04"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay={`${viewportWidth > 1024 ? '450' : viewportWidth > 600 ? '400' : '150'}`}>
                        <div className="pic">
                            <img src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/produre_icon04.svg" alt="가맹 계약 확정 아이콘" />
                        </div>
                        <div className="txt">
                            <p className="num">04</p>
                            <strong className="tit">가맹 계약 확정</strong>
                            <p className="desc">점포 계약 및 가맹 체결 후, 인테리어/시설 집기 협의</p>
                        </div>
                        <div className="arrow">
                            <FaChevronRight />
                        </div>
                    </li>

                    <li
                        className="item item05"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay={`${viewportWidth > 1024 ? '600' : viewportWidth > 600 ? '200' : '150'}`}>
                        <div className="pic">
                            <img src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/produre_icon05.svg" alt="인테리어 아이콘" />
                        </div>
                        <div className="txt">
                            <p className="num">05</p>
                            <strong className="tit">인테리어</strong>
                            <p className="desc">
                                매장 설계 및 감리 시행
                                <br />
                                인테리어 공사 및 인허가 관련 업무
                            </p>
                        </div>
                        <div className="arrow">
                            <FaChevronRight />
                        </div>
                    </li>

                    <li
                        className="item item06"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay={`${viewportWidth > 1024 ? '750' : viewportWidth > 600 ? '400' : '150'}`}>
                        <div className="pic">
                            <img src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/produre_icon06.svg" alt="시공 완료 아이콘" />
                        </div>
                        <div className="txt">
                            <p className="num">06</p>
                            <strong className="tit">시공 완료</strong>
                            <p className="desc">시설 체크 및 세부 사항 검토</p>
                        </div>
                        <div className="arrow">
                            <FaChevronRight />
                        </div>
                    </li>
                    <li
                        className="item item07"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay={`${viewportWidth > 1024 ? '900' : viewportWidth > 600 ? '200' : '150'}`}>
                        <div className="pic">
                            <img src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/produre_icon07.svg" alt="매장 영업 준비 아이콘" />
                        </div>
                        <div className="txt">
                            <p className="num">07</p>
                            <strong className="tit">매장 영업 준비</strong>
                            <p className="desc">영업 신고증 및 사업자 등록증 신청 위생 및 매장 운영 관련 교육 수료</p>
                        </div>
                        <div className="arrow">
                            <FaChevronRight />
                        </div>
                    </li>
                    <li
                        className="item item08"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay={`${viewportWidth > 1024 ? '1050' : viewportWidth > 600 ? '400' : '150'}`}>
                        <div className="pic">
                            <img src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/produre_icon08.svg" alt="매장 개장 준비 아이콘" />
                        </div>
                        <div className="txt">
                            <p className="num">08</p>
                            <strong className="tit">매장 개장 준비</strong>
                            <p className="desc">
                                각종 기기 입고 및 점검
                                <br />
                                원부자재 입고 및 준비
                            </p>
                        </div>
                        <div className="arrow">
                            <FaChevronRight />
                        </div>
                    </li>
                    <li
                        className="item item09"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay={`${viewportWidth > 1024 ? '1200' : viewportWidth > 600 ? '200' : '150'}`}>
                        <div className="pic">
                            <img src="https://teamproject-dessert39.github.io/dataCenter/images/franchise/produre_icon09.svg" alt="개업 준비 완료 아이콘" />
                        </div>
                        <div className="txt">
                            <p className="num">09</p>
                            <strong className="tit">개업 준비 완료</strong>
                            <p className="desc">가맹점 정식 오픈!</p>
                        </div>
                    </li>
                </ul>
                <p className="more">
                    <Link to={'/franchise/contact'}>가맹 문의 바로가기</Link>
                </p>
            </div>
        </ProcedureContainer>
    );
};

export default Procedure;
