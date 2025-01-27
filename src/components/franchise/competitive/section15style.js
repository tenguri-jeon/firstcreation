import { styled } from 'styled-components';

export const Section15Container = styled.div`
    padding-bottom: 100px;
    background-color: #f5f5f5;
    .inner {
        width: 95%;
        .title {
            h3 {
                font-size: 45px;
                font-weight: 700;
                letter-spacing: -3px;
                line-height: 1.4;
                span {
                    background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                }
            }
            p {
                font-family: 'Lexend Deca', sans-serif;
                margin: 20px 0 35px;
                font-size: 20px;
                letter-spacing: -1px;
            }
        }
        .slide {
            --swiper-theme-color: #fff;
            --swiper-navigation-size: 34px;
            position: relative;
            width: 100%;
            height: 420px;
            border-radius: 30px;
            box-sizing: border-box;
            background-color: #412a0a;
            .slide_item {
                background-color: #412a0a;
                &.slide_item02 {
                    .box {
                        .pic {
                            width: 560px;
                        }
                    }
                }
                &.slide_item03 {
                    .box {
                        .pic {
                            width: 540px;
                        }
                    }
                }
                &.slide_item04 {
                    .box {
                        .pic {
                            margin: 0 auto;
                            width: 540px;
                        }
                    }
                }
                &.slide_item05 {
                    background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_05.png);
                    background-repeat: no-repeat;
                    background-position: center;
                    .box {
                        .pic {
                            width: 540px;
                        }
                    }
                }
                &.slide_item06 {
                    background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_06.png);
                    background-repeat: no-repeat;
                    background-position: center;
                    .box {
                        .pic {
                            margin: 0 auto;
                            width: 340px;
                        }
                    }
                }
                &.slide_item07 {
                    background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_07.png);
                    background-repeat: no-repeat;
                    background-position: center;
                    .box {
                        .pic {
                            margin: 0 auto;
                            width: 420px;
                        }
                    }
                }
                &.slide_item08 {
                    background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_08.png);
                    background-repeat: no-repeat;
                    background-position: center;
                    .box {
                        .pic {
                            margin: 0 auto;
                            width: 320px;
                        }
                    }
                }
                &.slide_item09 {
                    background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_09.png);
                    background-repeat: no-repeat;
                    background-position: center;
                    .box {
                        .pic {
                            margin: 0 auto;
                            width: 380px;
                        }
                    }
                }
            }
            .box {
                padding: 25px 40px;
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .txt {
                    width: 55%;
                    color: #fff;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    word-break: keep-all;
                    strong {
                        font-size: 28px;
                        font-weight: 700;
                        line-height: 1.4;
                    }
                    b {
                        margin-bottom: 17px;
                        display: block;
                        font-weight: 700;
                        font-size: 20px;
                        letter-spacing: -1px;
                        line-height: 1.3;
                        &::before {
                            content: '';
                            display: block;
                            width: 40px;
                            height: 2px;
                            margin-bottom: 12px;
                            background-color: #fff;
                        }
                    }
                    p {
                        font-weight: 400;
                        line-height: 1.8;
                        letter-spacing: -1px;
                    }
                }
                .pic {
                    width: 620px;
                    img {
                        width: 100%;
                    }
                }
            }
            .swiper-pagination {
                margin-bottom: 8px;
                .swiper-pagination-bullet {
                    background-color: #fff;
                }
            }
        }
    }

    /* 대형 데스크톱 스타일 */
    @media (min-width: 1025px) and (max-width: 1440px) {
        padding-bottom: 100px;
        background-color: #f5f5f5;
        .inner {
            width: 95%;
            .title {
                h3 {
                    font-size: 45px;
                    font-weight: 700;
                    letter-spacing: -3px;
                    line-height: 1.4;
                    span {
                        background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                    }
                }
                p {
                    font-family: 'Lexend Deca', sans-serif;
                    margin: 20px 0 35px;
                    font-size: 20px;
                    letter-spacing: -1px;
                }
            }
            .slide {
                --swiper-theme-color: #fff;
                --swiper-navigation-size: 34px;
                position: relative;
                width: 100%;
                height: 420px;
                border-radius: 30px;
                box-sizing: border-box;
                background-color: #412a0a;
                .slide_item {
                    background-color: #412a0a;
                    &.slide_item02 {
                        .box {
                            .pic {
                                width: 560px;
                            }
                        }
                    }
                    &.slide_item03 {
                        .box {
                            .pic {
                                width: 540px;
                            }
                        }
                    }
                    &.slide_item04 {
                        .box {
                            .pic {
                                margin: 0 auto;
                                width: 540px;
                            }
                        }
                    }
                    &.slide_item05 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_05.png);
                        background-repeat: no-repeat;
                        background-position: center;
                        .box {
                            .pic {
                                width: 540px;
                            }
                        }
                    }
                    &.slide_item06 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_06.png);
                        background-repeat: no-repeat;
                        background-position: center;
                        .box {
                            .pic {
                                margin: 0 auto;
                                width: 340px;
                            }
                        }
                    }
                    &.slide_item07 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_07.png);
                        background-repeat: no-repeat;
                        background-position: center;
                        .box {
                            .pic {
                                margin: 0 auto;
                                width: 420px;
                            }
                        }
                    }
                    &.slide_item08 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_08.png);
                        background-repeat: no-repeat;
                        background-position: center;
                        .box {
                            .pic {
                                margin: 0 auto;
                                width: 320px;
                            }
                        }
                    }
                    &.slide_item09 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_09.png);
                        background-repeat: no-repeat;
                        background-position: center;
                        .box {
                            .pic {
                                margin: 0 auto;
                                width: 380px;
                            }
                        }
                    }
                }
                .box {
                    padding: 24px 26px;
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .txt {
                        width: 55%;
                        color: #fff;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        word-break: keep-all;
                        strong {
                            font-size: 28px;
                            font-weight: 700;
                            line-height: 1.4;
                        }
                        b {
                            margin-bottom: 10px;
                            display: block;
                            font-weight: 700;
                            font-size: 18px;
                            letter-spacing: -1px;
                            line-height: 1.4;
                            &::before {
                                content: '';
                                display: block;
                                width: 40px;
                                height: 2px;
                                margin-bottom: 12px;
                                background-color: #fff;
                            }
                        }
                        p {
                            font-weight: 400;
                            line-height: 1.8;
                            letter-spacing: -1px;
                        }
                    }
                    .pic {
                        width: 540px;
                        img {
                            width: 100%;
                        }
                    }
                }
                .swiper-pagination {
                    margin-bottom: 8px;
                    .swiper-pagination-bullet {
                        background-color: #fff;
                    }
                }
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (max-width: 1024px) {
        padding-bottom: 80px;
        .inner {
            width: 95%;
            .title {
                h3 {
                    font-size: 36px;
                    font-weight: 700;
                    letter-spacing: -3px;
                    line-height: 1.4;
                    span {
                        background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                    }
                }
                p {
                    font-family: 'Lexend Deca', sans-serif;
                    margin: 20px 0 35px;
                    font-size: 18px;
                    letter-spacing: -1px;
                }
            }
            .slide {
                --swiper-theme-color: #fff;
                --swiper-navigation-size: 34px;
                position: relative;
                width: 100%;
                height: 700px;
                border-radius: 30px;
                box-sizing: border-box;
                background-color: #412a0a;
                .slide_item {
                    background-color: #412a0a;
                    &.slide_item02 {
                        .box {
                            .pic {
                                width: 560px;
                            }
                        }
                    }
                    &.slide_item03 {
                        .box {
                            .pic {
                                width: 540px;
                            }
                        }
                    }
                    &.slide_item04 {
                        .box {
                            .pic {
                                margin: 0 auto;
                                width: 540px;
                            }
                        }
                    }
                    &.slide_item05 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_05.png);
                        background-repeat: no-repeat;
                        background-position: center bottom;
                        background-size: cover;
                        .box {
                            .pic {
                                display: flex;
                                justify-content: center;
                                width: 100%;
                                max-width: 660px;
                                img {
                                    width: 80%;
                                }
                            }
                        }
                    }
                    &.slide_item06 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_06.png);
                        background-repeat: no-repeat;
                        background-position: bottom right;
                        background-size: cover;
                        .box {
                            .pic {
                                display: flex;
                                justify-content: center;
                                width: 100%;
                                max-width: 520px;
                                img {
                                    width: 80%;
                                }
                            }
                        }
                    }
                    &.slide_item07 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_07.png);
                        background-repeat: no-repeat;
                        background-position: bottom right;
                        background-size: cover;
                        .box {
                            .pic {
                                display: flex;
                                justify-content: center;
                                width: 100%;
                                max-width: 600px;
                                img {
                                    width: 80%;
                                }
                            }
                        }
                    }
                    &.slide_item08 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_08.png);
                        background-repeat: no-repeat;
                        background-position: bottom right;
                        background-size: cover;
                        .box {
                            .pic {
                                display: flex;
                                justify-content: center;
                                width: 100%;
                                max-width: 520px;
                                img {
                                    width: 80%;
                                }
                            }
                        }
                    }
                    &.slide_item09 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_09.png);
                        background-repeat: no-repeat;
                        background-position: bottom right;
                        background-size: cover;
                        .box {
                            .pic {
                                display: flex;
                                justify-content: center;
                                width: 100%;
                                max-width: 600px;
                                img {
                                    width: 80%;
                                }
                            }
                        }
                    }
                }
                .box {
                    padding: 24px 26px;
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-direction: column;
                    .txt {
                        width: 100%;
                        color: #fff;
                        height: auto;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        word-break: keep-all;
                        strong {
                            font-size: 22px;
                            font-weight: 700;
                            line-height: 1.4;
                        }
                        b {
                            margin-bottom: 10px;
                            display: block;
                            font-weight: 700;
                            font-size: 17px;
                            letter-spacing: -1px;
                            line-height: 1.4;
                            margin-top: 24px;
                            &::before {
                                content: '';
                                display: block;
                                width: 40px;
                                height: 2px;
                                margin-bottom: 20px;
                                background-color: #fff;
                            }
                        }
                        p {
                            font-weight: 400;
                            line-height: 1.8;
                            font-size: 15px;
                            letter-spacing: -1px;
                        }
                    }
                    .pic {
                        display: flex;
                        align-items: center;
                        width: 100%;
                        max-width: 600px;
                        height: 300px;
                        overflow: hidden;
                        padding-bottom: 20px;
                        img {
                            width: 100%;
                        }
                    }
                }
                .swiper-pagination {
                    margin-bottom: 8px;
                    .swiper-pagination-bullet {
                        background-color: #fff;
                    }
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (max-width: 768px) {
        padding-bottom: 80px;
        background-color: #f5f5f5;
        .inner {
            width: 95%;
            .title {
                h3 {
                    font-size: 30px;
                    font-weight: 700;
                    letter-spacing: -3px;
                    line-height: 1.4;
                    span {
                        background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                    }
                }
                p {
                    font-family: 'Lexend Deca', sans-serif;
                    margin: 20px 0 32px;
                    font-size: 17px;
                    letter-spacing: -1px;
                }
            }
            .slide {
                --swiper-theme-color: #fff;
                --swiper-navigation-size: 34px;
                position: relative;
                width: 100%;
                height: 640px;
                border-radius: 30px;
                box-sizing: border-box;
                background-color: #412a0a;
                .slide_item {
                    background-color: #412a0a;
                    &.slide_item02 {
                        .box {
                            .pic {
                                width: 100%;
                            }
                        }
                    }
                    &.slide_item03 {
                        .box {
                            .pic {
                                width: 100%;
                            }
                        }
                    }
                    &.slide_item04 {
                        .box {
                            .pic {
                                width: 100%;
                            }
                        }
                    }
                    &.slide_item05 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_05.png);
                        background-repeat: no-repeat;
                        background-position: center bottom;
                        background-size: cover;
                        .box {
                            .pic {
                                display: flex;
                                justify-content: center;
                                width: 100%;
                                max-width: 660px;
                                img {
                                    width: 80%;
                                }
                            }
                        }
                    }
                    &.slide_item06 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_06.png);
                        background-repeat: no-repeat;
                        background-position: bottom right;
                        background-size: cover;
                        .box {
                            .pic {
                                display: flex;
                                justify-content: center;
                                width: 100%;
                                max-width: 520px;
                                img {
                                    width: 80%;
                                }
                            }
                        }
                    }
                    &.slide_item07 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_07.png);
                        background-repeat: no-repeat;
                        background-position: bottom right;
                        background-size: cover;
                        .box {
                            .pic {
                                display: flex;
                                justify-content: center;
                                width: 100%;
                                max-width: 600px;
                                img {
                                    width: 80%;
                                }
                            }
                        }
                    }
                    &.slide_item08 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_08.png);
                        background-repeat: no-repeat;
                        background-position: bottom right;
                        background-size: cover;
                        .box {
                            .pic {
                                display: flex;
                                justify-content: center;
                                width: 100%;
                                max-width: 520px;
                                img {
                                    width: 80%;
                                }
                            }
                        }
                    }
                    &.slide_item09 {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se15_tea_bg_09.png);
                        background-repeat: no-repeat;
                        background-position: bottom right;
                        background-size: cover;
                        .box {
                            .pic {
                                display: flex;
                                justify-content: center;
                                width: 100%;
                                max-width: 600px;
                                img {
                                    width: 80%;
                                }
                            }
                        }
                    }
                }
                .box {
                    padding: 16px 24px;
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-direction: column;
                    .txt {
                        width: 100%;
                        color: #fff;
                        height: auto;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        word-break: keep-all;
                        strong {
                            font-size: 20px;
                            font-weight: 700;
                            line-height: 1.4;
                        }
                        b {
                            margin-bottom: 10px;
                            display: block;
                            font-weight: 700;
                            font-size: 16px;
                            letter-spacing: -1px;
                            line-height: 1.4;
                            margin-top: 24px;
                            &::before {
                                content: '';
                                display: block;
                                width: 40px;
                                height: 2px;
                                margin-bottom: 20px;
                                background-color: #fff;
                            }
                        }
                        p {
                            font-weight: 400;
                            line-height: 1.8;
                            font-size: 14px;
                            letter-spacing: -1px;
                        }
                    }
                    .pic {
                        display: flex;
                        align-items: center;
                        width: 100%;
                        height: 300px;
                        overflow: hidden;
                        padding-bottom: 20px;
                        img {
                            width: 100%;
                        }
                    }
                }
                .swiper-pagination {
                    margin-bottom: 8px;
                    .swiper-pagination-bullet {
                        background-color: #fff;
                    }
                }
            }
        }
    }
`;
