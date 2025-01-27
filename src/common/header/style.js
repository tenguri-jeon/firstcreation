import styled from 'styled-components';

// 미디어 쿼리 브레이크포인트 정의
const breakpoints = {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    widescreen: '1440px',
};

// ---------------------------------------------------------------------
// index - header

export const HeaderWrap = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: white;
    display: flex;
    justify-content: center;
`;

export const HeaderInner = styled.div`
    width: 100%;
    max-width: 1440px; // 최대 너비 설정
    margin: 0 auto;
    height: 100px;
    position: relative;

    .mo {
        position: relative;
        height: 100%;
        width: 100%;
        display: none;
    }

    @media (max-width: ${breakpoints.widescreen}) {
        height: 100px;
        //background-color: rebeccapurple;
    }

    @media (max-width: ${breakpoints.desktop}) {
        height: 100px;
        //background-color: white;

        .pc {
            display: none;
        }

        .mo {
            display: block;
        }
    }

    @media (max-width: ${breakpoints.tablet}) {
        height: 100px;
        //background-color: firebrick;
    }

    @media (max-width: ${breakpoints.mobile}) {
        height: 100px;
        //background-color: darkorange;
    }
    
    .inner {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    h1 {
        @media (min-width: ${breakpoints.tablet}) {
            // position: absolute;
            // left: 50%;
            // top: 50%;
            // transform: translate(-50%, -50%);
            margin: 0;
            width: 4%;
            z-index: 1;
        }

        @media (max-width: ${breakpoints.desktop}) {
            position: static;
            transform: none;
            margin: 0 0 0 50px;
            z-index: 1;
        }

        .svg {
            width: 50px;
            height: 80px;
            vertical-align: middle;

            @media (max-width: ${breakpoints.mobile}) {
                width: 30px;
                height: 48px;
            }

            @media (min-width: ${breakpoints.tablet}) {
                width: 40px;
                height: 64px;
            }
        }
    }
`;

export const HeaderOuter = styled.div`
    width: 100%;
    background-color: transparent;
    position: absolute;
    top: 100px;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
`;

// ---------------------------------------------------------------------
// index - nav

export const SubWrap = styled.div`
    position: absolute;
    width: 100%;
    max-width: 1440px;
    top: 0;
    background-color: white;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transform-origin: top;
    transform: scaleY(${(props) => (props.$ishovered ? 1 : 0)});
    opacity: ${(props) => (props.$ishovered ? 1 : 0)};
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

    @media (max-width: ${breakpoints.mobile}) {
        top: 0px;
    }

    @media (min-width: ${breakpoints.tablet}) {
        top: 0px;
    }

    @media (min-width: ${breakpoints.desktop}) {
        top: 0px;
    }

    @media (min-width: ${breakpoints.widescreen}) {
        top: 0px;
    }

    &:hover {
        transform: scaleY(1);
        opacity: 1;
    }
`;

export const NavContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: relative;

    &:hover ~ ${HeaderOuter} ${SubWrap}, &:hover + ${HeaderOuter} ${SubWrap} {
        transform: scaleY(1);
        opacity: 1;
    }

    .pc {
        display: block;
    }

    .mo {
        display: none;
    }
`;

export const Nav = styled.nav`
    height: 100%;

    ul {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
        gap : 120px;
        li {
            font-size: 18px;
            font-weight: 600;
            white-space: nowrap;

            @media (max-width: ${breakpoints.mobile}) {
                /* padding: 0 100px; */
                font-size: 18px;
            }

            @media (min-width: ${breakpoints.tablet}) {
                /* padding: 0 100px; */
                font-size: 18px;
            }

            a {
                position: relative;
                text-decoration: none;
                color: #333;
                transition: color 0.3s ease;

                &::before {
                    content: '';
                    z-index: -1;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    display: block;
                    width: 0;
                    height: 35%;
                    background-color: #e4e8ec;
                    transition: width 0.3s;
                }

                &:hover {
                    color: #c0c0c0;

                    &::before {
                        width: 100%;
                    }
                }
            }
        }
    }
`;

export const LeftNav = styled.div`
    display: flex;
    align-items: center;
    flex-basis: 50%;
`;

export const RightNav = styled.div`
    display: flex;
    align-items: center;
    flex-basis: 30%;
`;

// ---------------------------------------------------------------------
// sub
export const SubContainer = styled.div`
    text-align: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;

    @media (max-width: ${breakpoints.mobile}) {
        flex-direction: column;
        padding: 20px 0;
    }

    .left {
        ul:nth-child(1) {
            padding: 0 60px;
        }

        ul:nth-child(2) {
            padding: 0 40px;
        }

        ul:nth-child(3) {
            padding: 0 60px;
        }
    }

    .right {
        ul:nth-child(1) {
            padding: 0 55px;
        }

        ul:nth-child(2) {
            padding: 0 65px;
        }
    }

    .left,
    .right {
        justify-content: space-evenly;
        display: flex;

        @media (max-width: ${breakpoints.mobile}) {
            width: 100%;
            margin-bottom: 10px;
        }
    }
`;

export const SubMenu = styled.div`
    display: flex;

    ul {
        list-style: none;
        margin: 0;
    }

    li {
        margin-bottom: 10px;

        @media (max-width: ${breakpoints.mobile}) {
            margin-bottom: 5px;
        }
    }

    a {
        position: relative;
        text-decoration: none;
        color: #333;
        font-size: 16px;
        font-weight: 600;
        transition: color 0.3s ease;

        @media (max-width: ${breakpoints.mobile}) {
            font-size: 12px;
        }

        &::before {
            content: '';
            z-index: -1;
            position: absolute;
            bottom: 0;
            left: 0;
            display: block;
            width: 0;
            height: 35%;
            background-color: #e4e8ec;
            transition: width 0.3s;
        }

        &:hover {
            color: #c0c0c0;

            &::before {
                width: 100%;
            }
        }
    }
`;

// ---------------------------------------------------------------------
// MobileMenu
export const MobileMenuWrap = styled.div`
    top: 20%;
    right: 5%;
    position: absolute;
    width: 50px;
    height: 50px;

    span {
        display: block;
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #1c1c1c;
        transition: all 0.3s ease-in-out;
    }

    .line1 {
        top: ${props => props.$isOpen ? '24px' : '15px'};
        transform: ${props => props.$isOpen ? 'rotate(45deg)' : 'none'};
    }

    .line2 {
        top: 30px;
        opacity: ${props => props.$isOpen ? '0' : '1'};
    }

    .line3 {
        top: ${props => props.$isOpen ? '24px' : '45px'};
        transform: ${props => props.$isOpen ? 'rotate(-45deg)' : 'none'};
    }

    transition: all 0.3s ease-in-out;
`

export const MobileNavWrap = styled.div`
    z-index: 120;
    display: block;
    position: fixed;
    right: ${props => props.$isOpen ? '0px' : '-450px'};
    top: 100px;
    background-color: #FFF;
    width: 100%;
    max-width: 450px;
    height: calc(100% - 80px);
    transition: all 0.5s ease-in-out;

    .mobileTop {
        box-sizing: border-box;
        padding: 40px 0;

        .imgBox {
            height: 100px;
            width: fit-content;
            margin: 0 auto;

            img {
                display: block;
                height: 100%;
                width: auto;
            }
        }

        h3 {
            font-weight: 700;
            line-height: 1.4;
            text-align: center;
            font-size: 22px;
        }
    }

    .partitionLine {
        display: block;
        width: 100%;
        height: 10px;
        background-color: #efefef;
    }

    ul {
        box-sizing: border-box;
        padding-top: 40px;
        height: calc(100% - 282px);
        overflow-y: auto;

        li {
            font-weight: 500;

            .lineColor {
                border-bottom: 1px solid #dbdbdb;
            }

            a {
                position: relative;
                display: flex;
                align-items: center;
                height: 55px;
                width: 100%;
                font-size: 17px;
                box-sizing: border-box;
                padding: 0 25px;
                transition: color 0.3s;
                font-family: 'Lexend Deca', sans-serif;

                .icon {
                    display: block;
                    width: 18px;
                    height: 18px;
                }

                .text {
                    margin-left: 15px;
                }

                .arrow {
                    position: absolute;
                    display: block;
                    width: 10px;
                    height: 10px;
                    top: 50%;
                    right: 25px;
                    transform: translateY(-50%);
                    transition: transform 0.3s ease;

                    &::before,
                    &::after {
                        content: '';
                        position: absolute;
                        background-color: #1c1c1c;
                        width: 8px;
                        height: 2px;
                        transition: transform 0.3s ease;
                    }

                    &::before {
                        top: -1px;
                        left: 0;
                        transform: rotate(45deg);
                        transform-origin: left center;
                    }

                    &::after {
                        bottom: -1px;
                        left: 0;
                        transform: rotate(-45deg);
                        transform-origin: left center;
                    }

                    &.open {
                        transform: translateY(-50%) rotate(90deg);
                    }
                }
            }
        }
    }
`

export const Overlay = styled.div`
    position: fixed;
    top: 100px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 110;
    display: ${props => props.$isOpen ? 'block' : 'none'};
    transition: opacity 0.3s ease-in-out;
    opacity: ${props => props.$isOpen ? 1 : 0};
`;

export const TextDesc = styled.ul`
    visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
    opacity: ${props => props.$isOpen ? 1 : 0};
    height: auto;
    max-height: ${props => props.$isOpen ? '1000px' : '0'};
    overflow: hidden;
    transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
    padding: 0;
    margin: 0;
`;

export const TextDescItem = styled.li`
    opacity: ${props => props.$isOpen ? 1 : 0};
    transform: translateY(${props => props.$isOpen ? '0' : '-20px'});
    transition: opacity 0.3s ease-in-out, transform 0.5s ease-in-out;
    transition-delay: ${props => props.$isOpen ? `${props.$index * 0.3}s` : '0s'};
`;