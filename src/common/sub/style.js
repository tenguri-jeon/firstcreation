import { styled } from 'styled-components';

export const SubLayoutContainer = styled.div`
    /* 헤더랑 겹침 해결 */
    margin-top: 100px;

    position: relative;
    width: 100%;
    height: 220px;
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 185px;
        background-image: url('https://teamproject-dessert39.github.io/dataCenter/images/common/sub_banner_bg.png');
    }
    .inner {
        width: 95%;
        h2 {
            position: absolute;
            left: 0;
            top: 103px;
            font-size: 26px;
            letter-spacing: -2px;
            line-height: 1.5;
            b {
                letter-spacing: -0.5px;
                margin: 0 5px;
                font-weight: 700;
            }
            span {
                display: block;
                line-height: 1.3;
                font-size: 60px;
                font-weight: 500;
                font-family: 'Lexend Deca', sans-serif;
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (max-width: 1024px) {
        .inner {
            h2 {
                top: 115px;
                font-size: 24px;
                span {
                    margin-top: 2px;
                    line-height: 1;
                    font-size: 54px;
                }
            }
        }
    }

    @media (max-width: 600px) {
        height: 144px;
        &::before {
            height: 120px;
        }
        .inner {
            h2 {
                top: 63px;
                font-size: 20px;
                letter-spacing: -2px;
                span {
                    margin-top: 2px;
                    line-height: 1;
                    font-size: 42px;
                }
            }
        }
    }
`;
