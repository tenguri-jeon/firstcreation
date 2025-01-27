import { Link } from 'react-router-dom';
import { HeaderWrap, HeaderInner, HeaderOuter, NavContainer, Nav, SubWrap, LeftNav, RightNav } from './style';
import { useEffect, useState } from 'react';
import Sub from './sub';
import MobileMenu from './mobileMenu';

const Header = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <HeaderWrap>
            <HeaderInner>
                <div className="inner">
                    <h1>
                        <Link to="/">
                            {/* <img
                                className="svg"
                                src="https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/9ff6b61cec7dd243b2c413364b8b1b9d6b2c0c4a/icon/dessert39_simbol.svg"
                                alt="dessert39_simbol"
                            /> */}
                            <span>여기 로고</span>
                        </Link>
                    </h1>
                    <NavContainer className="pc" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <LeftNav>
                            <Nav>
                                <ul>
                                    <li className="nav1">
                                        <Link to={'/brand/intro'}>첫창조 소개</Link>
                                    </li>
                                    <li className="nav2">
                                        <Link to={'/menu/dessert'}>도서출판</Link>
                                    </li>
                                    <li className="nav5">
                                        <Link to={'/store/competitiveness'}>인쇄 디자인</Link>
                                    </li>
                                    <li className="nav5">
                                        <Link to={'/store/competitiveness'}>고객센터 견적</Link>
                                    </li>
                                </ul>
                            </Nav>
                        </LeftNav>
                    </NavContainer>
                    <div className="mo">
                        <MobileMenu />
                    </div>
                </div>
            </HeaderInner>
            <div className="pc">
                <HeaderOuter>
                    <SubWrap $ishovered={isHovered} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Sub />
                    </SubWrap>
                </HeaderOuter>
            </div>
        </HeaderWrap>
    );
};

export default Header;
