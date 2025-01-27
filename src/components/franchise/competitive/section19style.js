import { styled } from 'styled-components';

export const Section19Container = styled.div`
    padding: 100px 0;
    .inner {
        display: flex;
        align-items: center;
        gap: 80px;
        width: 95%;
        .txt {
            width: 50%;
            margin-bottom: 70px;
            h3 {
                font-size: 45px;
                font-weight: 700;
                letter-spacing: -3px;
                line-height: 1.5;
                span {
                    display: block;
                    width: 100%;
                    background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                }
            }
            p {
                margin-top: 25px;
                font-size: 20px;
                letter-spacing: -1px;
            }
        }
        .pic {
            width: 50%;
            overflow: hidden;
            img {
                width: 100%;
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (min-width: 769px) and (max-width: 1024px) {
        .inner {
            gap: 0px;
            .txt {
                h3 {
                    font-size: 36px;
                    span {
                        background: linear-gradient(to top, #ffb400 27%, transparent 0%);
                    }
                }
                p {
                    word-break: keep-all;
                    font-size: 18px;
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (min-width: 481px) and (max-width: 768px) {
        padding: 80px 0;
        .inner {
            flex-direction: column;
            gap: 0px;
            .txt {
                width: 100%;
                margin-bottom: 0px;
                h3 {
                    font-size: 30px;
                    span {
                        background: linear-gradient(to top, #ffb400 25%, transparent 0%);
                    }
                }
                p {
                    word-break: keep-all;
                    font-size: 17px;
                }
            }
            .pic {
                width: 100%;
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 480px) {
        padding: 60px 0;
        .inner {
            flex-direction: column;
            gap: 0px;
            .txt {
                width: 100%;
                margin-bottom: 0px;
                h3 {
                    font-size: 26px;
                    span {
                        background: linear-gradient(to top, #ffb400 22%, transparent 0%);
                    }
                }
                p {
                    word-break: keep-all;
                    font-size: 16px;
                }
            }
            .pic {
                width: 100%;
            }
        }
    }
`;
