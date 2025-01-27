import { styled } from 'styled-components';


export const Section05Container = styled.div`
    padding: 100px 0;
    .inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 24px;
        text-align: center;
        width: 95%;
        .video {
            margin: 0 auto;
            width: 650px;
            height: 366px;
            border-radius: 20px;
            overflow: hidden;
            iframe {
                width: 100%;
                height: 100%;
            }
        }
        .txt01 {
            font-size: 30px;
            font-weight: 700;
            line-height: 1.5;
            p:first-child {
                color: #ffb400;
            }
        }
        .txt02 {
            margin: 0 auto;
            width: 650px;
            background-color: #1c1c1c;
            padding: 35px;
            box-sizing: border-box;
            border-radius: 20px;
            margin-bottom: 40px;
            p {
                font-weight: 500;
                font-size: 18px;
                color: #ffd300;
                &:first-child {
                    color: #fff;
                    margin-bottom: 6px;
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (max-width: 768px) {
        padding: 80px 0;
        /* 스타일 코드 */
        .inner {
            .video {
                width: 100%;
                max-width: 650px;
                height: 56.308vw;
            }
            .txt01 {
                font-size: 26px;
                line-height: 1.4;
                letter-spacing: -0.5px;
                p {
                    word-break: keep-all;
                }
            }
            .txt02 {
                width: 100%;
                max-width: 650px;
                padding: 30px 35px;
                border-radius: 20px;
                margin-bottom: 40px;
                p {
                    font-size: 18px;
                    word-break: keep-all;
                    line-height: 1.5;
                    &:first-child {
                        color: #fff;
                        margin-bottom: 6px;
                    }
                }
            }
        }
    }

    /* 모바일 스타일 1 */
    @media (max-width: 512px) {
        padding: 60px 0;
        /* 스타일 코드 */
        .inner {
            .video {
                width: 100%;
                max-width: 650px;
                height: 56.308vw;
            }
            .txt01 {
                font-size: 22px;

                line-height: 1.4;
                letter-spacing: -0.5px;
                p {
                    word-break: keep-all;
                }
            }
            .txt02 {
                width: 100%;
                max-width: 650px;
                padding: 22px 28px;
                border-radius: 20px;
                margin-bottom: 40px;
                p {
                    font-size: 16px;

                    word-break: keep-all;
                    line-height: 1.5;
                    &:first-child {
                        color: #fff;
                        margin-bottom: 6px;
                    }
                }
            }
        }
    }

    /* 모바일 스타일 2 */
    @media (max-width: 400px) {
        /* 스타일 코드 */
        .inner {
            .video {
                width: 100%;
                max-width: 650px;
                height: 56.308vw;
            }
            .txt01 {
                font-size: 20px;

                line-height: 1.4;
                letter-spacing: -0.5px;
                p {
                    word-break: keep-all;
                }
            }
            .txt02 {
                width: 100%;
                max-width: 650px;
                padding: 18px 20px;
                border-radius: 20px;
                margin-bottom: 40px;
                p {
                    font-size: 16px;

                    word-break: keep-all;
                    line-height: 1.5;
                    &:first-child {
                        color: #fff;
                        margin-bottom: 6px;
                    }
                }
            }
        }
    }
`;