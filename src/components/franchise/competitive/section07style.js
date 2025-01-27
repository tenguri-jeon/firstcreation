import { styled } from 'styled-components';

export const Section07Container = styled.div`
    padding: 100px 0;
    .inner {
        width: 95%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
        .left {
            width: 46%;
            h3 {
                font-size: 45px;
                font-weight: 700;
                word-break: keep-all;
                margin-bottom: 40px;
                letter-spacing: -3px;
                span {
                    background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                }
            }
            p {
                font-size: 20px;
                word-break: keep-all;
                font-weight: 300;
                &:last-of-type {
                    font-weight: 400;
                    width: 84%;
                    line-height: 1.4;
                }
            }
            .video {
                margin: 16px 0;
                width: 80%;
                /* height: 300px; */
                height: 20.604vw;
                iframe {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .right {
            width: 54%;
            .title {
                margin: 0 auto;
                width: fit-content;
                font-size: 18px;
                font-weight: 500;
                color: #fff;
                border-radius: 40px;
                background-color: #1c1c1c;
                padding: 6px 24px;
                margin-bottom: 35px;
            }
            ul {
                li {
                    padding: 6px 15px;
                    display: flex;
                    align-items: center;
                    border: 2px solid #000;
                    border-bottom: none;
                    &:last-child {
                        border-bottom: 2px solid #000;
                    }
                    i {
                        svg {
                            vertical-align: -2px;
                        }
                        &::after {
                            content: '';
                            background-color: #1c1c1c;
                            display: inline-block;
                            width: 2px;
                            height: 10px;
                            margin: 1px 10px 1px 12px;
                        }
                    }
                    p {
                        span {
                            color: #922108;
                            font-weight: 700;
                            margin-right: 4px;
                        }
                        &::after {
                            content: '/';
                            margin: 0 8px;
                            font-weight: 500;
                        }
                        &:last-child::after {
                            content: none;
                        }
                    }
                }
            }
        }
    }

    /* 대형 데스크톱 스타일 */
    @media (min-width: 1025px) and (max-width: 1440px) {
        padding: 80px 0;
        .inner {
            .left {
                h3 {
                    font-size: 45px;
                }
                p {
                    font-size: 17px;
                    word-break: keep-all;
                    font-weight: 300;
                    &:last-of-type {
                        font-weight: 400;
                        width: 84%;
                        line-height: 1.4;
                    }
                }
                .video {
                    margin: 16px 0;
                    width: 80%;
                    /* height: 300px; */
                    height: 20.604vw;
                    iframe {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .right {
                width: 54%;
                .title {
                    margin: 0 auto;
                    width: fit-content;
                    font-size: 20px;
                    font-weight: 500;
                    color: #fff;
                    border-radius: 40px;
                    background-color: #1c1c1c;
                    padding: 6px 24px;
                    margin-bottom: 35px;
                }
                ul {
                    li {
                        padding: 6px 15px;
                        display: flex;
                        align-items: center;
                        border: 2px solid #000;
                        border-bottom: none;
                        &:last-child {
                            border-bottom: 2px solid #000;
                        }
                        i {
                            svg {
                                vertical-align: -2px;
                            }
                            &::after {
                                content: '';
                                background-color: #1c1c1c;
                                display: inline-block;
                                width: 2px;
                                height: 10px;
                                margin: 1px 10px 1px 12px;
                            }
                        }
                    }
                }
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (min-width: 769px) and (max-width: 1024px) {
        padding: 60px 0;
        .inner {
            flex-direction: column;
            gap: 40px;
            .left {
                width: 100%;
                h3 {
                    font-size: 36px;
                    width: 600px;
                }
                p {
                    font-size: 17px;
                    word-break: keep-all;
                    font-weight: 300;
                    text-align: center;
                    &:last-of-type {
                        margin: 0 auto 20px;
                        font-weight: 400;
                        width: 61%;
                        line-height: 1.4;
                    }
                }
                .video {
                    margin: 16px auto;
                    width: 60%;
                    /* height: 300px; */
                    height: 31.712vw;
                    iframe {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .right {
                width: 100%;
                .title {
                    margin: 0 auto;
                    width: fit-content;
                    font-size: 17px;
                    font-weight: 500;
                    color: #fff;
                    border-radius: 40px;
                    background-color: #1c1c1c;
                    padding: 6px 24px;
                    margin-bottom: 35px;
                }
                ul {
                    li {
                        padding: 6px 15px;
                        display: flex;
                        align-items: center;
                        border: 2px solid #000;
                        border-bottom: none;
                        &:last-child {
                            border-bottom: 2px solid #000;
                        }
                        i {
                            svg {
                                vertical-align: -2px;
                            }
                            &::after {
                                content: '';
                                background-color: #1c1c1c;
                                display: inline-block;
                                width: 2px;
                                height: 10px;
                                margin: 1px 10px 1px 12px;
                            }
                        }
                    }
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (max-width: 768px) {
        padding: 80px 0;
        .inner {
            flex-direction: column;
            gap: 40px;
            .left {
                width: 100%;
                h3 {
                    font-size: 30px;
                    width: 100%;
                }
                p {
                    font-size: 16px;
                    word-break: keep-all;
                    font-weight: 300;
                    text-align: center;
                    &:last-of-type {
                        margin: 0 auto 20px;
                        font-weight: 400;
                        width: 80%;
                        line-height: 1.4;
                    }
                }
                .video {
                    margin: 16px auto;
                    width: 80%;
                    /* height: 280px; */
                    height: 41.791vw;
                    iframe {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .right {
                width: 100%;
                .title {
                    margin: 0 auto;
                    width: fit-content;
                    font-size: 16px;
                    font-weight: 500;
                    color: #fff;
                    border-radius: 40px;
                    background-color: #1c1c1c;
                    padding: 6px 24px;
                    margin-bottom: 35px;
                }
                ul {
                    li {
                        padding: 6px 15px;
                        display: flex;
                        align-items: center;
                        border: 2px solid #000;
                        border-bottom: none;
                        font-size: 15px;
                        &:last-child {
                            border-bottom: 2px solid #000;
                        }
                        i {
                            svg {
                                vertical-align: -2px;
                            }
                            &::after {
                                content: '';
                                background-color: #1c1c1c;
                                display: inline-block;
                                width: 2px;
                                height: 10px;
                                margin: 1px 10px 1px 12px;
                            }
                        }
                    }
                }
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 480px) {
        padding: 40px 0;
        .inner {
            flex-direction: column;
            gap: 40px;
            .left {
                width: 100%;
                h3 {
                    font-size: 26px;
                    width: 100%;
                }
                p {
                    font-size: 14px;
                    word-break: keep-all;
                    font-weight: 300;
                    text-align: center;
                    &:last-of-type {
                        margin: 0 auto 6px;
                        font-weight: 400;
                        width: 100%;
                        line-height: 1.4;
                    }
                }
                .video {
                    margin: 16px auto;
                    width: 100%;
                    /* height: 200px; */
                    height: 53.333vw;
                    iframe {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .right {
                width: 100%;
                .title {
                    margin: 0 auto;
                    width: fit-content;
                    font-size: 14px;
                    font-weight: 500;
                    color: #fff;
                    border-radius: 40px;
                    background-color: #1c1c1c;
                    padding: 6px 24px;
                    margin-bottom: 35px;
                }
                ul {
                    li {
                        padding: 6px 15px;
                        display: flex;
                        align-items: center;
                        border: 2px solid #000;
                        border-bottom: none;
                        font-size: 15px;
                        &:last-child {
                            border-bottom: 2px solid #000;
                        }
                        i {
                            svg {
                                vertical-align: -2px;
                            }
                            &::after {
                                content: '';
                                background-color: #1c1c1c;
                                display: inline-block;
                                width: 2px;
                                height: 10px;
                                margin: 1px 10px 1px 12px;
                            }
                        }
                    }
                }
            }
        }
    }
`;