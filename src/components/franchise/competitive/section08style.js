import { styled } from 'styled-components';

export const Section08Container = styled.div`
    background: linear-gradient(90deg, rgba(219, 203, 246, 1) 0%, rgba(252, 228, 185, 1) 100%);
    padding-bottom: 100px;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 62%;
        clip-path: polygon(0 37%, 100% 22%, 100% 100%, 0 85%);
        background-color: #fff;
    }
    .inner {
        text-align: center;
        width: 95%;
        .box01,
        .box02 {
            padding: 100px 0;
            .title01 {
                font-size: 45px;
                font-weight: 700;
                letter-spacing: -2px;
                span {
                    display: block;
                    font-size: 32px;
                    color: #8f61ff;
                    letter-spacing: 0px;
                }
            }
            .txt {
                margin: 30px auto 16px;
                width: 80%;
                font-size: 20px;
                letter-spacing: -1px;
                b {
                    font-weight: 700;
                }
                p {
                    span {
                        color: #8f61ff;
                        font-weight: 700;
                    }
                }
            }
            .pic {
                margin: 30px auto 0;
                width: 800px;
                img {
                    width: 100%;
                }
            }
            .title02 {
                font-size: 45px;
                color: #8f61ff;
                font-weight: 700;
                letter-spacing: -2px;
                line-height: 1.5;
            }
        }
        .box03 {
            .items {
                display: flex;
                justify-content: center;
                gap: 60px;
                position: relative;
                .left,
                .right {
                    width: 50%;
                    max-width: 600px;
                    height: 620px;
                    position: relative;
                    background-color: #f6f2ff;
                    border-radius: 20px;
                    overflow: hidden;
                    box-sizing: border-box;
                    text-align: left;
                    padding: 50px;
                    strong {
                        font-size: 32px;
                        font-weight: 700;
                        line-height: 1.4;
                        letter-spacing: -1px;
                        span {
                            color: #8f61ff;
                        }
                    }
                    p {
                        margin-top: 20px;
                        font-size: 20px;
                        letter-spacing: -1px;
                        word-break: keep-all;
                    }
                    .pic {
                        width: 100%;
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        img {
                            width: 100%;
                        }
                    }
                }
                .right {
                    background-color: #fffaf2;
                }
            }
            .desc {
                margin-top: 20px;
                text-align: right;
                p {
                    font-weight: 500;
                    line-height: 1.8;
                    letter-spacing: -1px;
                    span {
                        display: block;
                        font-weight: 700;
                        color: #8f61ff;
                    }
                }
            }
        }
        .box04 {
            margin-top: 50px;
            text-align: center;
            p:first-child {
                margin: 0 auto;
                color: #fff;
                padding: 10px 30px;
                font-size: 22px;
                font-weight: 700;
                background-color: #8f61ff;
                border-radius: 30px;
                width: fit-content;
                letter-spacing: -1px;
            }
            p {
                margin-top: 20px;
                font-size: 20px;
                font-weight: 400;
                span {
                    display: block;
                    font-weight: 700;
                }
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (min-width: 769px) and (max-width: 1024px) {
        background: linear-gradient(90deg, rgba(219, 203, 246, 1) 0%, rgba(252, 228, 185, 1) 100%);
        padding-bottom: 100px;
        position: relative;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 60%;
            clip-path: polygon(0 37%, 100% 22%, 100% 100%, 0 85%);
            background-color: #fff;
        }
        .inner {
            text-align: center;
            width: 95%;
            .box01,
            .box02 {
                padding: 60px 0;
                .title01 {
                    font-size: 36px;
                    font-weight: 700;
                    letter-spacing: -2px;
                    span {
                        display: block;
                        font-size: 28px;
                        color: #8f61ff;
                        letter-spacing: 0px;
                    }
                }
                .txt {
                    margin: 30px auto 10px;
                    width: 80%;
                    font-size: 18px;
                    letter-spacing: -1px;
                    word-break: keep-all;
                    b {
                        font-weight: 700;
                    }
                    p {
                        span {
                            color: #8f61ff;
                            font-weight: 700;
                        }
                    }
                }
                .pic {
                    margin: 30px auto 0;
                    width: 100%;
                    img {
                        width: 100%;
                    }
                }
                .title02 {
                    font-size: 36px;
                    color: #8f61ff;
                    font-weight: 700;
                    letter-spacing: -2px;
                    line-height: 1.5;
                }
            }
            .box03 {
                .items {
                    display: flex;
                    justify-content: center;
                    gap: 16px;
                    position: relative;
                    .left,
                    .right {
                        width: 50%;
                        max-width: 600px;
                        height: 520px;
                        position: relative;
                        background-color: #f6f2ff;
                        border-radius: 20px;
                        overflow: hidden;
                        box-sizing: border-box;
                        text-align: left;
                        padding: 50px;
                        strong {
                            font-size: 28px;
                            font-weight: 700;
                            line-height: 1.4;
                            letter-spacing: -1px;
                            word-break: keep-all;
                            span {
                                color: #8f61ff;
                            }
                        }
                        p {
                            margin-top: 20px;
                            font-size: 18px;
                            letter-spacing: -1px;
                            word-break: keep-all;
                        }
                        .pic {
                            width: 100%;
                            position: absolute;
                            right: 0;
                            bottom: 0;
                            img {
                                width: 100%;
                            }
                        }
                    }
                    .right {
                        background-color: #fffaf2;
                    }
                }
                .desc {
                    margin-top: 20px;
                    text-align: right;
                    p {
                        font-weight: 500;
                        line-height: 1.8;
                        letter-spacing: -1px;
                        span {
                            display: block;
                            font-weight: 700;
                            color: #8f61ff;
                        }
                    }
                }
            }
            .box04 {
                margin-top: 50px;
                text-align: center;
                p:first-child {
                    margin: 0 auto;
                    color: #fff;
                    padding: 10px 30px;
                    font-size: 22px;
                    font-weight: 700;
                    background-color: #8f61ff;
                    border-radius: 30px;
                    width: fit-content;
                    letter-spacing: -1px;
                }
                p {
                    margin-top: 20px;
                    font-size: 18px;
                    font-weight: 400;
                    span {
                        display: block;
                        font-weight: 700;
                    }
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (min-width: 521px) and (max-width: 768px) {
        background: linear-gradient(90deg, rgba(219, 203, 246, 1) 0%, rgba(252, 228, 185, 1) 100%);
        padding-bottom: 100px;
        position: relative;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 64%;
            clip-path: polygon(0 33%, 100% 22%, 100% 100%, 0 85%);
            background-color: #fff;
        }
        .inner {
            text-align: center;
            width: 95%;
            .box01,
            .box02 {
                padding: 60px 0 40px;
                .title01 {
                    font-size: 30px;
                    font-weight: 700;
                    letter-spacing: -2px;
                    span {
                        display: block;
                        font-size: 28px;
                        color: #8f61ff;
                        letter-spacing: 0px;
                    }
                }
                .txt {
                    margin: 22px auto 10px;
                    width: 90%;
                    font-size: 17px;
                    letter-spacing: -1px;
                    word-break: keep-all;
                    b {
                        font-weight: 700;
                    }
                    p {
                        span {
                            color: #8f61ff;
                            font-weight: 700;
                        }
                    }
                }
                .pic {
                    margin: 30px auto 0;
                    width: 100%;
                    img {
                        width: 100%;
                    }
                }
                .title02 {
                    font-size: 30px;
                    color: #8f61ff;
                    font-weight: 700;
                    letter-spacing: -2px;
                    line-height: 1.5;
                }
            }
            .box03 {
                .items {
                    display: flex;
                    justify-content: center;
                    gap: 16px;
                    position: relative;
                    .left,
                    .right {
                        width: 50%;
                        max-width: 600px;
                        height: 500px;
                        position: relative;
                        background-color: #f6f2ff;
                        border-radius: 20px;
                        overflow: hidden;
                        box-sizing: border-box;
                        text-align: left;
                        padding: 44px 34px;
                        strong {
                            font-size: 26px;
                            font-weight: 700;
                            line-height: 1.4;
                            letter-spacing: -1px;
                            word-break: keep-all;
                            span {
                                color: #8f61ff;
                            }
                        }
                        p {
                            margin-top: 16px;
                            font-size: 16px;
                            letter-spacing: -1px;
                            word-break: keep-all;
                        }
                        .pic {
                            width: 100%;
                            position: absolute;
                            right: 0;
                            bottom: 0;
                            img {
                                width: 100%;
                            }
                        }
                    }
                    .right {
                        background-color: #fffaf2;
                    }
                }
                .desc {
                    margin-top: 20px;
                    text-align: right;
                    font-size: 15px;
                    p {
                        font-weight: 500;
                        line-height: 1.8;
                        letter-spacing: -1px;
                        span {
                            display: block;
                            font-weight: 700;
                            color: #8f61ff;
                        }
                    }
                }
            }
            .box04 {
                margin-top: 50px;
                text-align: center;
                p:first-child {
                    margin: 0 auto;
                    color: #fff;
                    padding: 6px 24px;
                    font-size: 22px;
                    font-weight: 700;
                    background-color: #8f61ff;
                    border-radius: 30px;
                    width: fit-content;
                    letter-spacing: -1px;
                }
                p {
                    width: 90%;
                    margin: 20px auto 0;
                    font-size: 16px;
                    font-weight: 400;
                    span {
                        display: block;
                        font-weight: 700;
                    }
                }
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 520px) {
        background: linear-gradient(90deg, rgba(219, 203, 246, 1) 0%, rgba(252, 228, 185, 1) 100%);
        padding-bottom: 80px;
        position: relative;
        &::before {
            content: '';
            position: absolute;
            top: 52px;
            left: 0;
            display: block;
            width: 100%;
            height: 54%;
            clip-path: polygon(0 29%, 100% 23%, 100% 100%, 0 94%);
            background-color: #fff;
        }
        .inner {
            text-align: center;
            width: 95%;
            .box01,
            .box02 {
                padding: 50px 0 30px;
                .title01 {
                    font-size: 26px;
                    font-weight: 700;
                    letter-spacing: -2px;
                    span {
                        display: block;
                        font-size: 24px;
                        color: #8f61ff;
                        letter-spacing: 0px;
                    }
                }
                .txt {
                    margin: 22px auto 10px;
                    width: 90%;
                    font-size: 16px;
                    letter-spacing: -1px;
                    word-break: keep-all;
                    b {
                        font-weight: 700;
                    }
                    p {
                        span {
                            color: #8f61ff;
                            font-weight: 700;
                        }
                    }
                }
                .pic {
                    margin: 30px auto 0;
                    width: 100%;
                    img {
                        width: 100%;
                    }
                }
                .title02 {
                    font-size: 26px;
                    color: #8f61ff;
                    font-weight: 700;
                    letter-spacing: -2px;
                    line-height: 1.5;
                }
            }
            .box03 {
                .items {
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    gap: 16px;
                    position: relative;
                    .left,
                    .right {
                        width: 100%;
                        max-width: 600px;
                        height: 460px;
                        position: relative;
                        background-color: #f6f2ff;
                        border-radius: 20px;
                        overflow: hidden;
                        box-sizing: border-box;
                        text-align: left;
                        padding: 30px;
                        strong {
                            font-size: 22px;
                            font-weight: 700;
                            line-height: 1.4;
                            letter-spacing: -1px;
                            word-break: keep-all;
                            span {
                                color: #8f61ff;
                            }
                        }
                        p {
                            margin-top: 16px;
                            font-size: 16px;
                            letter-spacing: -1px;
                            word-break: keep-all;
                        }
                        .pic {
                            width: 100%;
                            position: absolute;
                            right: 0;
                            bottom: 0;
                            img {
                                width: 100%;
                            }
                        }
                    }
                    .right {
                        background-color: #fffaf2;
                    }
                }
                .desc {
                    margin-top: 20px;
                    text-align: right;
                    font-size: 13px;
                    p {
                        font-weight: 500;
                        line-height: 1.8;
                        letter-spacing: -1px;
                        span {
                            display: block;
                            font-weight: 700;
                            color: #8f61ff;
                        }
                    }
                }
            }
            .box04 {
                margin-top: 50px;
                text-align: center;
                p:first-child {
                    margin: 0 auto;
                    color: #fff;
                    padding: 6px 24px;
                    font-size: 20px;
                    font-weight: 700;
                    background-color: #8f61ff;
                    border-radius: 30px;
                    width: fit-content;
                    letter-spacing: -1px;
                }
                p {
                    width: 90%;
                    margin: 20px auto 0;
                    font-size: 16px;
                    font-weight: 400;
                    span {
                        display: block;
                        font-weight: 700;
                    }
                }
            }
        }
    }
`;