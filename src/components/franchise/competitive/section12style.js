import { styled } from 'styled-components';

export const Section12Container = styled.div`
    padding: 100px 0;
    background: url('https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se12_bg.png');
    .inner {
        .title {
            margin-bottom: 80px;
            p {
                background-color: #1c1c1c;
                width: 320px;
                padding: 8px 40px 10px;
                margin: 0 auto;
                border-radius: 24px;
                color: #fff;
                text-align: center;
                line-height: 1.3;
                font-size: 20px;
                font-weight: 500;
                margin-bottom: 25px;
                letter-spacing: -1px;
                font-family: 'Lexend Deca', sans-serif;
            }
            h3 {
                font-size: 45px;
                font-weight: 700;
                letter-spacing: -3px;
                text-align: center;
                span {
                    background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                }
            }
        }
        .box {
            margin: 0 auto;
            width: 90%;
            position: relative;
            .slide {
                .slide_item {
                    .num {
                        position: absolute;
                        top: 0;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 55px;
                        height: 55px;
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 20px;
                        font-family: 'Lexend Deca', sans-serif;
                        background-color: #ffb400;
                        color: #fff;
                    }
                    .txt_wrap {
                        height: 480px;
                        border-radius: 30px;
                        padding: 50px 0;
                        margin-top: 25px;
                        background-color: #fff;
                        text-align: center;
                        box-sizing: border-box;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: cover;
                        .txt {
                            font-size: 20px;
                            line-height: 1.7;
                            p {
                                word-break: keep-all;
                            }
                            b {
                                word-break: keep-all;
                                font-weight: 700;
                                span {
                                    display: inline-block;
                                    background-repeat: no-repeat;
                                    background-position: bottom;
                                    background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se12_underline.png);
                                }
                            }
                        }
                    }
                }
                .slide_item01 {
                    .txt_wrap {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se12_img01.png);
                    }
                }
                .slide_item02 {
                    .txt_wrap {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se12_img02.png);
                    }
                }
                .slide_item03 {
                    .txt_wrap {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se12_img03.png);
                    }
                }
                .slide_item04 {
                    .txt_wrap {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se12_img04.png);
                    }
                }
                .slide_item05 {
                    .txt_wrap {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se12_img05.png);
                    }
                }
            }
            .navigation {
                width: 100%;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                .swiper-button-prev,
                .swiper-button-next {
                    color: #1c1c1c;
                    border: none;
                    background-color: transparent;
                }
                .swiper-button-prev {
                    left: -60px;
                }
                .swiper-button-next {
                    right: -60px;
                }
            }
        }
    }

    /* 대형 데스크톱 스타일 */
    @media (max-width: 1440px) {
        padding: 100px 0;
        .inner {
            .title {
                margin-bottom: 80px;
                p {
                    width: 320px;
                    font-size: 20px;
                    font-weight: 500;
                    margin-bottom: 25px;
                    letter-spacing: -1px;
                }
                h3 {
                    font-size: 45px;
                    font-weight: 700;
                    letter-spacing: -3px;
                    text-align: center;
                    span {
                        background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                    }
                }
            }
            .box {
                margin: 0 auto;
                width: 90%;
                position: relative;
                .slide {
                    .slide_item {
                        .num {
                            transform: translateX(-50%);
                            width: 55px;
                            height: 55px;
                            border-radius: 50%;
                            font-size: 18px;
                        }
                        .txt_wrap {
                            height: 480px;
                            border-radius: 30px;
                            padding: 50px 0;
                            margin-top: 25px;
                            .txt {
                                font-size: 18px;
                                line-height: 1.7;
                            }
                        }
                    }
                }
                .navigation {
                    .swiper-button-prev {
                        left: -50px;
                    }
                    .swiper-button-next {
                        right: -50px;
                    }
                }
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (max-width: 1024px) {
        padding: 80px 0;
        .inner {
            .title {
                margin-bottom: 60px;
                p {
                    width: 320px;
                    font-size: 20px;
                    font-weight: 500;
                    margin-bottom: 25px;
                    letter-spacing: -1px;
                }
                h3 {
                    font-size: 36px;
                    font-weight: 700;
                    letter-spacing: -3px;
                    text-align: center;
                    span {
                        background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                    }
                }
            }
            .box {
                margin: 0 auto;
                width: 86%;
                position: relative;
                .slide {
                    .slide_item {
                        .num {
                            transform: translateX(-50%);
                            width: 55px;
                            height: 55px;
                            border-radius: 50%;
                            font-size: 18px;
                        }
                        .txt_wrap {
                            height: 440px;
                            border-radius: 30px;
                            padding: 50px 0;
                            margin-top: 25px;
                            .txt {
                                font-size: 17px;
                                line-height: 1.7;
                            }
                        }
                    }
                }
                .navigation {
                    .swiper-button-prev {
                        left: -40px;
                    }
                    .swiper-button-next {
                        right: -40px;
                    }
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (max-width: 768px) {
        padding: 70px 0;
        .inner {
            .title {
                margin-bottom: 60px;
                p {
                    width: 280px;
                    font-size: 17px;
                    font-weight: 500;
                    margin-bottom: 25px;
                    letter-spacing: -1px;
                }
                h3 {
                    font-size: 30px;
                    font-weight: 700;
                    letter-spacing: -3px;
                    text-align: center;
                    span {
                        background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                    }
                }
            }
            .box {
                margin: 0 auto;
                width: 86%;
                position: relative;
                .slide {
                    .slide_item {
                        padding: 0 8px;
                        box-sizing: border-box;
                        .num {
                            transform: translateX(-50%);
                            width: 45px;
                            height: 45px;
                            border-radius: 50%;
                            font-size: 18px;
                        }
                        .txt_wrap {
                            height: 400px;
                            border-radius: 30px;
                            padding: 50px 0;
                            margin-top: 25px;
                            .txt {
                                font-size: 16px;
                                line-height: 1.7;
                            }
                        }
                    }
                }
                .navigation {
                    .swiper-button-prev {
                        left: -40px;
                    }
                    .swiper-button-next {
                        right: -40px;
                    }
                }
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 581px) {
        padding: 60px 0;
        .inner {
            .title {
                margin-bottom: 60px;
                p {
                    width: 280px;
                    font-size: 16px;
                    font-weight: 500;
                    margin-bottom: 25px;
                    letter-spacing: -1px;
                }
                h3 {
                    font-size: 26px;
                    font-weight: 700;
                    letter-spacing: -3px;
                    text-align: center;
                    span {
                        background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                    }
                }
            }
            .box {
                margin: 0 auto;
                width: 86%;
                position: relative;
                .slide {
                    .slide_item {
                        padding: 0 8px;
                        box-sizing: border-box;
                        .num {
                            transform: translateX(-50%);
                            width: 45px;
                            height: 45px;
                            border-radius: 50%;
                            font-size: 18px;
                        }
                        .txt_wrap {
                            height: 400px;
                            border-radius: 30px;
                            padding: 50px 0;
                            margin-top: 25px;
                            .txt {
                                font-size: 15px;
                                line-height: 1.7;
                            }
                        }
                    }
                }
                .navigation {
                    .swiper-button-prev {
                        left: -30px;
                    }
                    .swiper-button-next {
                        right: -30px;
                    }
                }
            }
        }
    }
`;
