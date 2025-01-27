import { styled } from 'styled-components';


export const Section09Container = styled.div`
    padding: 100px 0;
    .pc {
        display: block;
    }
    .mo {
        display: none;
    }
    .inner {
        width: 95%;
        text-align: center;
        margin-bottom: 80px;
        .txt {
            h3 {
                font-size: 45px;
                font-weight: 700;
                word-break: keep-all;
                letter-spacing: -3px;
                margin-bottom: 80px;
                span {
                    background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                }
            }
            p {
                font-size: 20px;
                margin-bottom: 8px;
                letter-spacing: -1px;
                margin-bottom: 100px;
                line-height: 1.8;
                span {
                    font-weight: 700;
                }
            }
        }
        .pic {
            margin: 0 auto;
            width: 100%;
            max-width: 1440px;
            img {
                width: 100%;
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (max-width: 1024px) {
        padding: 100px 0;
        .pc {
            display: none;
        }
        .mo {
            display: block;
        }
        .inner {
            .txt {
                h3 {
                    font-size: 36px;
                    font-weight: 700;
                    word-break: keep-all;
                    letter-spacing: -3px;
                    margin-bottom: 70px;
                    span {
                        background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                    }
                }
                p {
                    font-size: 18px;
                    letter-spacing: -1px;
                    margin-bottom: 80px;
                    line-height: 1.8;
                    span {
                        font-weight: 700;
                    }
                }
            }
            .pic {
                margin: 0 auto;
                width: 100%;
                max-width: 1440px;
                img {
                    width: 100%;
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (min-width: 481px) and (max-width: 768px) {
        padding: 80px 0;
        .inner {
            .txt {
                h3 {
                    font-size: 30px;
                    font-weight: 700;
                    word-break: keep-all;
                    letter-spacing: -3px;
                    margin-bottom: 40px;
                    span {
                        background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                    }
                }
                p {
                    font-size: 17px;
                    letter-spacing: -1px;
                    margin-bottom: 60px;
                    line-height: 1.8;
                    span {
                        font-weight: 700;
                    }
                }
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 480px) {
        padding: 60px 0;
        .inner {
            .txt {
                h3 {
                    font-size: 26px;
                    font-weight: 700;
                    word-break: keep-all;
                    letter-spacing: -3px;
                    margin-bottom: 40px;
                    span {
                        background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                    }
                }
                p {
                    font-size: 16px;
                    letter-spacing: -1px;
                    margin-bottom: 60px;
                    line-height: 1.8;
                    span {
                        font-weight: 700;
                    }
                }
            }
        }
    }
`;