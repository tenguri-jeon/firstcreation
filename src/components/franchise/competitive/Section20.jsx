import { Link } from 'react-router-dom';
import { Section20Container } from './section20style';
import { useEffect, useState } from 'react';

const Section20 = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 612);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 612);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Section20Container>
            <div className="inner">
                <div className="info">
                    {/* 링크 창업문의로 연결 */}
                    <div className="num num01">
                        {!isMobile ? (
                            <p>
                                가맹 상담
                                <br />
                                창업 문의
                            </p>
                        ) : (
                            <p>가맹 상담 ∙ 창업 문의</p>
                        )}
                        <Link to={'/franchise/contact'}>
                            <p>010-5641-3902</p>
                        </Link>
                    </div>
                    <div className="num num02">
                        {!isMobile ? (
                            <p>
                                [평일∙토∙일]
                                <br />
                                <span>오전9시 ~ 오후8시</span>
                            </p>
                        ) : (
                            <p>
                                [평일∙토∙일]
                                <span>오전9시 ~ 오후8시</span>
                            </p>
                        )}
                        <Link to={'/franchise/contact'}>
                            <p>010-2396-3767</p>
                        </Link>
                    </div>
                </div>
                <div className="form">
                    <Link to={'/franchise/contact'}>
                        <p>상담 신청</p>
                        <p className="name">성함</p>
                        <p className="phone">연락처</p>
                        <p className="more">상담신청 바로가기</p>
                    </Link>
                </div>
            </div>
        </Section20Container>
    );
};

export default Section20;
