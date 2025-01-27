import { styled } from 'styled-components';

export const Section18Container = styled.div`
    padding: 100px 0 60px;
    .inner {
        display: flex;
        align-items: center;
        width: 95%;
        .txt {
            width: 45%;
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
        .video {
            width: 55%;
            video {
                width: 100%;
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (min-width: 769px) and (max-width: 1024px) {
        padding: 100px 0 40px;
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
        padding: 80px 0 20px;
        .inner {
            flex-direction: column;
            gap: 0px;
            .txt {
                width: 100%;
                margin-bottom: 24px;
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
            .video {
                width: 100%;
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 480px) {
        padding: 60px 0 20px;
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
            .video {
                width: 100%;
            }
        }
    }
`;
