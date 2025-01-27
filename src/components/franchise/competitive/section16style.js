import { styled } from 'styled-components';

export const Section16Container = styled.div`
    padding: 100px 0;
    .inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 95%;
        .left {
            width: 40%;
            box-sizing: border-box;
            h3 {
                font-family: 'Lexend Deca', sans-serif;
                font-size: 55px;
                font-weight: 700;
                line-height: 1.1;
                letter-spacing: -1px;
                position: relative;
                z-index: 0;
                &::before {
                    content: '';
                    position: absolute;
                    top: -6px;
                    left: -18px;
                    display: block;
                    width: 40px;
                    height: 40px;
                    background-color: #ffb400;
                    z-index: -1;
                }
            }
            b {
                margin: 70px 0 30px;
                display: block;
                font-size: 30px;
                letter-spacing: -1px;
                line-height: 1.5;
                font-weight: 700;
            }
            p {
                font-size: 18px;
                letter-spacing: -1px;
                margin-bottom: 50px;
                line-height: 1.5;
            }
            p:last-child {
                margin-bottom: 0;
            }
        }
        .right {
            width: 60%;
            padding-bottom: 80px;
            box-sizing: border-box;
            .slide {
                position: relative;
                &::before {
                    content: '';
                    display: block;
                    position: absolute;
                    bottom: -100px;
                    width: 105%;
                    height: 150px;
                    border-radius: 30px;
                    left: -5%;
                    background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_bg.jpg);
                }
                .swiper-slide {
                    width: 80%;
                }
                .pic {
                    width: 100%;
                    height: 400px;
                    overflow: hidden;
                    border-radius: 30px 30px 0 0;
                    a {
                    }
                    img {
                        width: 110%;
                    }
                }
                .slide_item {
                    a {
                        display: block;
                        width: 100%;
                        height: 100%;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: cover;
                    }
                }
                .slide_item01 {
                    a {
                        background-image: url('https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_img01.jpg');
                    }
                }
                .slide_item02 {
                    a {
                        background-image: url('https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_img02.jpg');
                    }
                }
                .slide_item03 {
                    a {
                        background-image: url('https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_img03.jpg');
                    }
                }
                .slide_item04 {
                    a {
                        background-image: url('https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_img04.jpg');
                    }
                }
                .slide_item05 {
                    a {
                        background-image: url('https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_img05.jpg');
                    }
                }
                .slide_item06 {
                    a {
                        background-image: url('https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_img06.jpg');
                    }
                }
                .slide_item07 {
                    a {
                        background-image: url('https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_img07.jpg');
                    }
                }
                .slide_item08 {
                    a {
                        background-image: url('https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_img08.jpg');
                    }
                }
                .slide_item09 {
                    a {
                        background-image: url('https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_img09.jpg');
                    }
                }
                .slide_item10 {
                    a {
                        background-image: url('https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_img10.jpg');
                    }
                }
            }
        }
    }

    /* 대형 데스크톱 스타일 */
    @media (max-width: 1440px) {
        padding: 80px 0;
        .inner {
            gap: 20px;
            .left {
                width: 44%;
                padding-left: 6px;
                box-sizing: border-box;
                h3 {
                    font-size: 50px;
                    &::before {
                        left: -15px;
                        width: 36px;
                        height: 36px;
                    }
                }
                b {
                    margin: 60px 0 26px;
                    font-size: 26px;
                }
                p {
                    font-size: 17px;
                    letter-spacing: -1px;
                    margin-bottom: 50px;
                }
                p:last-child {
                    margin-bottom: 0;
                }
            }
            .right {
                width: 56%;
                padding-bottom: 80px;
                box-sizing: border-box;
                .slide {
                    position: relative;
                    &::before {
                        content: '';
                        display: block;
                        position: absolute;
                        bottom: -120px;
                        width: 105%;
                        height: 150px;
                        border-radius: 30px;
                        left: -5%;
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_bg.jpg);
                    }
                    .swiper-slide {
                        width: 90%;
                    }
                    .pic {
                        width: 100%;
                        height: 360px;
                        overflow: hidden;
                        border-radius: 30px 30px 0 0;
                        a {
                        }
                        img {
                            width: 110%;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (max-width: 1024px) {
        padding: 60px 0;
        .inner {
            gap: 40px;
            .left {
                width: 44%;
                padding-left: 6px;
                box-sizing: border-box;
                h3 {
                    font-size: 45px;
                    &::before {
                        left: -14px;
                        width: 30px;
                        height: 30px;
                    }
                }
                b {
                    margin: 52px 0 22px;
                    font-size: 22px;
                }
                p {
                    font-size: 16px;
                    letter-spacing: -1px;
                    margin-bottom: 40px;
                    word-break: keep-all;
                }
                p:last-child {
                    margin-bottom: 0;
                }
            }
            .right {
                width: 56%;
                padding-bottom: 80px;
                .slide {
                    position: relative;
                    &::before {
                        content: '';
                        display: block;
                        position: absolute;
                        bottom: -100px;
                        width: 105%;
                        height: 130px;
                        border-radius: 30px;
                        left: -5%;
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_bg.jpg);
                    }
                    .swiper-slide {
                        width: 90%;
                    }
                    .pic {
                        width: 100%;
                        height: 300px;
                        overflow: hidden;
                        border-radius: 30px 30px 0 0;
                        a {
                        }
                        img {
                            width: 110%;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (max-width: 768px) {
        padding: 60px 0;
        .pc {
            display: none;
        }
        .inner {
            gap: 32px;
            flex-direction: column;
            .left {
                width: 100%;
                box-sizing: border-box;
                h3 {
                    font-size: 40px;
                    &::before {
                        left: -7px;
                        top: 0px;
                        width: 24px;
                        height: 24px;
                    }
                }
                b {
                    margin: 36px 0 16px;
                    font-size: 20px;
                }
                p {
                    font-size: 15px;
                    letter-spacing: -1px;
                    margin-bottom: 34px;
                    word-break: keep-all;
                }
                p:last-child {
                    margin-bottom: 0;
                }
            }
            .right {
                width: 95%;
                padding-bottom: 80px;
                .slide {
                    position: relative;
                    &::before {
                        content: '';
                        display: block;
                        position: absolute;
                        bottom: -100px;
                        width: 105%;
                        height: 130px;
                        border-radius: 0px;
                        left: -5%;
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_bg.jpg);
                    }
                    .swiper-slide {
                        width: 70%;
                    }
                    .pic {
                        width: 100%;
                        height: 260px;
                        overflow: hidden;
                        border-radius: 30px 30px 0 0;
                        a {
                        }
                        img {
                            width: 110%;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 480px) {
        padding: 60px 0;
        .pc {
            display: none;
        }
        .inner {
            gap: 26px;
            flex-direction: column;
            .left {
                width: 100%;
                box-sizing: border-box;
                h3 {
                    font-size: 30px;
                    &::before {
                        left: -5px;
                        top: 0px;
                        width: 18px;
                        height: 18px;
                    }
                }
                b {
                    margin: 30px 0 12px;
                    font-size: 18px;
                }
                p {
                    font-size: 14px;
                    letter-spacing: -1px;
                    margin-bottom: 28px;
                    word-break: keep-all;
                }
                p:last-child {
                    margin-bottom: 0;
                }
            }
            .right {
                width: 95%;
                padding-bottom: 80px;
                .slide {
                    position: relative;
                    &::before {
                        content: '';
                        display: block;
                        position: absolute;
                        bottom: -70px;
                        width: 105%;
                        height: 100px;
                        border-radius: 0px;
                        left: -5%;
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se16_bg.jpg);
                    }
                    .swiper-slide {
                        width: 70%;
                    }
                    .pic {
                        width: 100%;
                        height: 50vw;
                        /* min-height: 200px; */
                        overflow: hidden;
                        border-radius: 30px 30px 0 0;
                        a {
                        }
                        img {
                            width: 110%;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }
`;
