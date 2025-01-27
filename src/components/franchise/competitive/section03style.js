import { styled } from 'styled-components';


export const Section03Container = styled.div`
    .inner {
        padding-bottom: 180px;
        width: 95%;
        .title {
            text-align: center;
            h3 {
                margin: 0 auto;
                width: fit-content;
                letter-spacing: -3px;
                line-height: 1.5;
                font-size: 45px;
                font-weight: 700;
                position: relative;
                &::before {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 14px;
                    z-index: -1;
                    background-color: #ffb400;
                    bottom: 0;
                    left: 0;
                    display: block;
                }
            }
            p {
                margin: 12px 0 24px;
                font-size: 13px;
                color: #adadad;
                span {
                    color: #666;
                    font-weight: 500;
                }
            }
        }
        .pic {
            margin: 0 auto;
            width: 800px;
            max-width: 100%;
            img {
                width: 100%;
            }
        }
    }
    @media (max-width: 1440px) {
        .inner {
            padding-bottom: 160px;
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (max-width: 1024px) {
        /* 스타일 코드 */
        .inner {
            padding-bottom: 140px;
            .title {
                h3 {
                    font-size: 36px;
                    &::before {
                        height: 12px;
                    }
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (max-width: 768px) {
        /* 스타일 코드 */
        .inner {
            padding-bottom: 100px;
            .title {
                h3 {
                    font-size: 30px;
                    &::before {
                        height: 10px;
                    }
                }
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 480px) {
        /* 스타일 코드 */
        .inner {
            .title {
                h3 {
                    font-size: 26px;
                    &::before {
                        height: 8px;
                    }
                }
                p {
                    margin-top: 10px;
                    font-size: 12px;
                }
            }
        }
    }
`;