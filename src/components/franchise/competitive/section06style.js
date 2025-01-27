import { styled } from 'styled-components';

export const Section06Container = styled.div`
    padding: 100px 0;
    background-color: #f9f9f9;
    .inner {
        width: 95%;
        h3 {
            margin-bottom: 40px;
            font-size: 35px;
            line-height: 1.3;
            span {
                display: block;
                font-weight: 700;
                color: #ffb400;
            }
        }
        .slide {
            .swiper {
                width: 100%;
                height: 100%;
                .swiper-slide {
                    position: relative;
                    width: 100%;
                    padding-bottom: 50px;
                    box-sizing: border-box;
                    .video {
                        width: 100%;
                        /* height: 282px; */
                        height: 16.588vw;
                        iframe {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .box {
                        background-color: #1c1c1c;
                        padding: 25px;
                        box-sizing: border-box;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        .txt {
                            h4 {
                                color: #ffb400;
                                font-weight: 700;
                                font-size: 18px;
                                line-height: 1.4;
                                word-break: keep-all;
                            }
                            .desc {
                                margin: 16px 0 40px;
                                p {
                                    font-weight: 400;
                                    color: #fff;
                                    font-size: 16px;
                                    line-height: 1.7;
                                    word-break: keep-all;
                                }
                            }
                        }
                        p {
                            color: #fff;
                            font-weight: 300;
                            font-size: 16px;
                        }
                    }
                }
                .swiper-button-prev,
                .swiper-button-next {
                    opacity: 0.5;
                    color: #000;
                }
            }
        }
        .pagination {
            margin-top: 10px;
            font-size: 45px;
            font-weight: 400;
            font-family: 'Lexend Deca', sans-serif;
            color: #666;
            span {
                display: inline-block;
                width: 52px;
                color: #1c1c1c;
            }
        }
    }

    /* 대형 데스크톱 스타일 */
    @media (min-width: 1025px) and (max-width: 1440px) {
        padding: 80px 0;
        .inner {
            width: 95%;
            h3 {
                margin-bottom: 40px;
                font-size: 35px;
                line-height: 1.3;
                span {
                    display: block;
                    font-weight: 700;
                    color: #ffb400;
                }
            }
            .slide {
                .swiper {
                    .swiper-slide {
                        padding-bottom: 50px;
                        .video {
                            /* height: 285px; */
                            height: 21.269vw;
                        }
                        .box {
                            padding: 25px;
                            .txt {
                                h4 {
                                    font-size: 18px;
                                    line-height: 1.4;
                                    word-break: keep-all;
                                }
                                .desc {
                                    margin: 16px 0 40px;
                                    p {
                                        font-size: 16px;
                                        line-height: 1.7;
                                        word-break: keep-all;
                                    }
                                }
                            }
                            p {
                                color: #fff;
                                font-weight: 300;
                                font-size: 16px;
                            }
                        }
                    }
                    .swiper-button-prev,
                    .swiper-button-next {
                        opacity: 0.5;
                        color: #000;
                    }
                }
            }
            .pagination {
                margin-top: 10px;
                font-size: 45px;
                font-weight: 400;
                font-family: 'Lexend Deca', sans-serif;
                color: #666;
                span {
                    display: inline-block;
                    width: 52px;
                    color: #1c1c1c;
                }
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (min-width: 769px) and (max-width: 1024px) {
        /* 스타일 코드 */
        padding: 70px 0;
        .inner {
            width: 95%;
            h3 {
                margin-bottom: 26px;
                font-size: 28px;
                line-height: 1.3;
                span {
                    display: block;
                    font-weight: 700;
                    color: #ffb400;
                }
            }
            .slide {
                .swiper {
                    .swiper-slide {
                        padding-bottom: 40px;
                        .video {
                            /* height: 272px; */
                            height: 28vw;
                        }
                        .box {
                            padding: 25px;
                            .txt {
                                h4 {
                                    font-size: 18px;
                                    line-height: 1.4;
                                    word-break: keep-all;
                                }
                                .desc {
                                    margin: 16px 0 40px;
                                    p {
                                        font-size: 15px;
                                        line-height: 1.7;
                                        word-break: keep-all;
                                    }
                                }
                            }
                            p {
                                color: #fff;
                                font-weight: 300;
                                font-size: 15px;
                            }
                        }
                    }
                    .swiper-button-prev,
                    .swiper-button-next {
                        opacity: 0.5;
                        color: #000;
                    }
                }
            }
            .pagination {
                margin-top: 10px;
                font-size: 32px;
                font-weight: 400;
                font-family: 'Lexend Deca', sans-serif;
                color: #666;
                span {
                    display: inline-block;
                    width: 42px;
                    color: #1c1c1c;
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (min-width: 481px) and (max-width: 768px) {
        /* 스타일 코드 */
        padding: 70px 0;
        .inner {
            width: 95%;
            h3 {
                margin-bottom: 24px;
                font-size: 24px;
                line-height: 1.3;
                word-break: keep-all;
                span {
                    display: block;
                    font-weight: 700;
                    color: #ffb400;
                    word-break: keep-all;
                }
            }
            .slide {
                .swiper {
                    .swiper-slide {
                        padding-bottom: 20px;
                        .video {
                            /* height: 232px; */
                            height: 33.721vw;
                        }
                        .box {
                            padding: 25px;
                            .txt {
                                h4 {
                                    font-size: 18px;
                                    line-height: 1.4;
                                    word-break: keep-all;
                                }
                                .desc {
                                    margin: 16px 0 40px;
                                    p {
                                        font-size: 14px;
                                        line-height: 1.7;
                                        font-weight: 600;
                                        word-break: keep-all;
                                    }
                                }
                            }
                            p {
                                color: #fff;
                                font-weight: 300;
                                font-size: 14px;
                            }
                        }
                    }
                    .swiper-button-prev,
                    .swiper-button-next {
                        opacity: 0.5;
                        color: #000;
                    }
                }
            }
            .pagination {
                margin-top: 10px;
                font-size: 26px;
                font-weight: 400;
                font-family: 'Lexend Deca', sans-serif;
                color: #666;
                span {
                    display: inline-block;
                    width: 30px;
                    color: #1c1c1c;
                }
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 480px) {
        /* 스타일 코드 */
        padding: 60px 0;
        .inner {
            width: 95%;
            h3 {
                margin-bottom: 22px;
                font-size: 24px;
                line-height: 1.3;
                word-break: keep-all;
                span {
                    display: block;
                    font-weight: 700;
                    color: #ffb400;
                    word-break: keep-all;
                }
            }
            .slide {
                .swiper {
                    .swiper-slide {
                        padding-bottom: 20px;
                        .video {
                            /* height: 150px; */
                            height: 40vw;
                        }
                        .box {
                            padding: 25px;
                            .txt {
                                h4 {
                                    font-size: 18px;
                                    line-height: 1.4;
                                    word-break: keep-all;
                                }
                                .desc {
                                    margin: 16px 0 40px;
                                    p {
                                        font-size: 14px;
                                        line-height: 1.7;
                                        font-weight: 600;
                                        word-break: keep-all;
                                    }
                                }
                            }
                            p {
                                color: #fff;
                                font-weight: 300;
                                font-size: 14px;
                            }
                        }
                    }
                    .swiper-button-prev,
                    .swiper-button-next {
                        opacity: 0.5;
                        color: #000;
                    }
                }
            }
            .pagination {
                margin-top: 10px;
                font-size: 26px;
                font-weight: 400;
                font-family: 'Lexend Deca', sans-serif;
                color: #666;
                span {
                    display: inline-block;
                    width: 30px;
                    color: #1c1c1c;
                }
            }
        }
    }
`;