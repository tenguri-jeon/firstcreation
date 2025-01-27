import { styled } from 'styled-components';

export const Section10Container = styled.div`
    padding: 100px 0;
    background-color: #f9f9f9;
    .inner {
        width: 95%;
        .title {
            margin-left: 20px;
            margin-bottom: 30px;
            h3 {
                font-size: 45px;
                font-weight: 700;
                letter-spacing: -3px;
                font-family: 'Lexend Deca', sans-serif;
                span {
                    color: #ffb400;
                }
            }
        }
        .box {
            position: relative;
            .slide {
                padding: 40px 35px;
                box-sizing: border-box;
                .swiper {
                    width: 100%;
                    height: 100%;
                    padding: 10px;
                    box-sizing: border-box;
                    .swiper-slide {
                        background-color: #fff;
                        border-radius: 30px;
                        width: 80%;
                        display: flex;
                        align-items: center;
                        gap: 40px;
                        padding: 50px 40px;
                        box-sizing: border-box;
                        box-shadow: 0px 0px 10px #00000010;
                        .left {
                            width: 40%;
                            height: 300px;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            .pic {
                                width: 100%;
                                height: 240px;
                                img {
                                    width: 100%;
                                }
                            }
                            p {
                                font-size: 20px;
                                text-align: center;
                                font-weight: 700;
                                word-break: keep-all;
                                span {
                                    color: #21a9a9;
                                }
                            }
                        }
                        .right {
                            width: 60%;
                            strong {
                                font-size: 30px;
                                font-weight: 700;
                                word-break: keep-all;
                                &::after {
                                    content: '';
                                    display: block;
                                    background-color: #1c1c1c;
                                    width: 70px;
                                    height: 3px;
                                    margin: 24px 0 30px;
                                }
                            }
                            p {
                                margin-bottom: 12px;
                                word-break: keep-all;
                                line-height: 1.8;
                                &:last-child {
                                    margin-bottom: 0;
                                }
                                b {
                                    font-weight: 700;
                                }
                            }
                        }
                    }
                }
            }
            .navigation {
                position: absolute;
                width: 100%;
                top: 50%;
                transform: translateY(-50%);
                button {
                    position: absolute;
                    color: #1c1c1c;
                    background-color: transparent;
                    border: none;
                    &.swiper-button-prev {
                        left: 0;
                        padding-right: 40px;
                    }
                    &.swiper-button-next {
                        right: 0;
                        padding-left: 60px;
                    }
                }
            }
        }
    }

    /* 대형 데스크톱 스타일 */
    @media (min-width: 1025px) and (max-width: 1440px) {
        padding: 100px 0;
        background-color: #f9f9f9;
        .inner {
            width: 95%;
            .title {
                margin-left: 20px;
                margin-bottom: 25px;
                h3 {
                    font-size: 45px;
                    font-weight: 700;
                    letter-spacing: -3px;
                    font-family: 'Lexend Deca', sans-serif;
                    span {
                        color: #ffb400;
                    }
                }
            }
            .box {
                position: relative;
                .slide {
                    padding: 40px 35px;
                    box-sizing: border-box;
                    .swiper {
                        width: 100%;
                        height: 100%;
                        padding: 10px;
                        box-sizing: border-box;
                        .swiper-slide {
                            background-color: #fff;
                            border-radius: 30px;
                            width: 80%;
                            display: flex;
                            align-items: center;
                            gap: 30px;
                            padding: 50px 30px;
                            box-sizing: border-box;
                            box-shadow: 0px 0px 10px #00000010;
                            .left {
                                width: 40%;
                                height: 300px;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                .pic {
                                    width: 100%;
                                    height: 240px;
                                    img {
                                        width: 100%;
                                    }
                                }
                                p {
                                    font-size: 18px;
                                    text-align: center;
                                    font-weight: 700;
                                    word-break: keep-all;
                                    span {
                                        color: #21a9a9;
                                    }
                                }
                            }
                            .right {
                                width: 60%;
                                strong {
                                    font-size: 28px;
                                    font-weight: 700;
                                    word-break: keep-all;
                                    &::after {
                                        content: '';
                                        display: block;
                                        background-color: #1c1c1c;
                                        width: 70px;
                                        height: 3px;
                                        margin: 24px 0 30px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (min-width: 769px) and (max-width: 1024px) {
        padding: 80px 0 40px;
        background-color: #f9f9f9;
        .inner {
            width: 95%;
            .title {
                margin-bottom: 20px;
                h3 {
                    font-size: 36px;
                }
            }
            .box {
                position: relative;
                .slide {
                    padding: 40px 35px;
                    box-sizing: border-box;
                    .swiper {
                        width: 100%;
                        height: 100%;
                        padding: 10px;
                        box-sizing: border-box;
                        .swiper-slide {
                            background-color: #fff;
                            border-radius: 30px;
                            width: 90%;
                            display: flex;
                            align-items: center;
                            gap: 16px;
                            padding: 50px 30px;
                            box-sizing: border-box;
                            box-shadow: 0px 0px 10px #00000010;
                            .left {
                                width: 35%;
                                height: 300px;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                .pic {
                                    width: 100%;
                                    height: 240px;
                                    img {
                                        width: 100%;
                                    }
                                }
                                p {
                                    font-size: 17px;
                                    text-align: center;
                                    font-weight: 700;
                                    word-break: keep-all;
                                    span {
                                        color: #21a9a9;
                                    }
                                }
                            }
                            .right {
                                width: 65%;
                                strong {
                                    font-size: 26px;
                                    font-weight: 700;
                                    &::after {
                                        content: '';
                                        display: block;
                                        background-color: #1c1c1c;
                                        width: 70px;
                                        height: 3px;
                                        margin: 24px 0 30px;
                                    }
                                }
                                p {
                                    margin-bottom: 12px;
                                    word-break: keep-all;
                                    line-height: 1.8;
                                    &:last-child {
                                        margin-bottom: 0;
                                    }
                                    b {
                                        font-weight: 700;
                                    }
                                }
                            }
                        }
                    }
                }
                .navigation {
                    position: absolute;
                    width: 100%;
                    top: 50%;
                    transform: translateY(-50%);
                    button {
                        position: absolute;
                        color: #1c1c1c;
                        background-color: transparent;
                        border: none;
                        &.swiper-button-prev {
                            left: 0;
                            padding-right: 40px;
                        }
                        &.swiper-button-next {
                            right: 0;
                            padding-left: 60px;
                        }
                    }
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (min-width: 601px) and (max-width: 768px) {
        padding: 80px 0 0;
        background-color: #f9f9f9;
        .inner {
            width: 95%;
            .title {
                margin-bottom: 0px;
                h3 {
                    font-size: 30px;
                }
            }
            .box {
                position: relative;
                .slide {
                    padding: 40px 35px;
                    box-sizing: border-box;
                    .swiper {
                        width: 100%;
                        height: 100%;
                        padding: 10px;
                        box-sizing: border-box;
                        .swiper-slide {
                            background-color: #fff;
                            border-radius: 30px;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            gap: 16px;
                            padding: 40px 24px;
                            box-sizing: border-box;
                            box-shadow: 0px 0px 10px #00000010;
                            .left {
                                width: 35%;
                                height: 300px;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                .pic {
                                    width: 100%;
                                    height: 240px;
                                    img {
                                        width: 100%;
                                    }
                                }
                                p {
                                    font-size: 16px;
                                    text-align: center;
                                    font-weight: 700;
                                    word-break: keep-all;
                                    span {
                                        color: #21a9a9;
                                    }
                                }
                            }
                            .right {
                                width: 65%;
                                strong {
                                    font-size: 22px;
                                    font-weight: 700;
                                    &::after {
                                        content: '';
                                        display: block;
                                        background-color: #1c1c1c;
                                        width: 70px;
                                        height: 3px;
                                        margin: 22px 0 26px;
                                    }
                                }
                                p {
                                    margin-bottom: 12px;
                                    word-break: keep-all;
                                    line-height: 1.8;
                                    font-size: 15px;
                                    &:last-child {
                                        margin-bottom: 0;
                                    }
                                    b {
                                        font-weight: 700;
                                    }
                                }
                            }
                        }
                    }
                }
                .navigation {
                    position: absolute;
                    width: 100%;
                    top: 50%;
                    transform: translateY(-50%);
                    button {
                        position: absolute;
                        color: #1c1c1c;
                        background-color: transparent;
                        border: none;
                        &.swiper-button-prev {
                            left: 0;
                            padding-right: 40px;
                        }
                        &.swiper-button-next {
                            right: 0;
                            padding-left: 60px;
                        }
                    }
                }
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 600px) {
        padding: 60px 0;
        background-color: #f9f9f9;
        .inner {
            width: 95%;
            .title {
                text-align: center;
                margin-bottom: 0px;
                margin-left: 0;
                h3 {
                    font-size: 28px;
                }
            }
            .box {
                position: relative;
                margin: 0 auto;
                .slide {
                    padding: 20px 35px;
                    box-sizing: border-box;
                    .swiper {
                        width: 100%;
                        height: 100%;
                        padding: 10px;
                        box-sizing: border-box;
                        .swiper-slide {
                            background-color: #fff;
                            border-radius: 30px;
                            width: 100%;
                            display: flex;
                            align-items: center;
                            flex-direction: column;
                            gap: 16px;
                            padding: 40px 24px;
                            box-sizing: border-box;
                            box-shadow: 0px 0px 10px #00000010;
                            .left {
                                width: 100%;
                                height: 230px;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                .pic {
                                    width: 80%;
                                    height: 160px;
                                    img {
                                        width: 100%;
                                    }
                                }
                                p {
                                    font-size: 15px;
                                    text-align: center;
                                    font-weight: 700;
                                    word-break: keep-all;
                                    span {
                                        color: #21a9a9;
                                    }
                                }
                            }
                            .right {
                                width: 100%;
                                text-align: center;
                                strong {
                                    font-size: 20px;
                                    font-weight: 700;
                                    &::after {
                                        content: '';
                                        display: block;
                                        background-color: #1c1c1c;
                                        width: 70px;
                                        height: 2px;
                                        margin: 22px auto 26px;
                                    }
                                }
                                p {
                                    margin-bottom: 12px;
                                    word-break: keep-all;
                                    line-height: 1.8;
                                    font-size: 14px;
                                    &:last-child {
                                        margin-bottom: 0;
                                    }
                                    b {
                                        font-weight: 700;
                                    }
                                }
                            }
                        }
                    }
                }
                .navigation {
                    position: absolute;
                    width: 100%;
                    top: 50%;
                    transform: translateY(-50%);
                    button {
                        position: absolute;
                        color: #1c1c1c;
                        background-color: transparent;
                        border: none;
                        &.swiper-button-prev {
                            left: 0;
                            padding-right: 40px;
                        }
                        &.swiper-button-next {
                            right: 0;
                            padding-left: 60px;
                        }
                    }
                }
            }
        }
    }
`;
