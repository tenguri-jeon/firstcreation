import { styled } from 'styled-components';

export const Section14Container = styled.div`
    padding: 100px 0;
    background-color: #f5f5f5;
    .inner {
        width: 95%;
        .title {
            h3 {
                font-size: 45px;
                font-weight: 700;
                letter-spacing: -3px;
                line-height: 1.5;
                font-family: 'Lexend Deca', sans-serif;
                span {
                    background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                    font-family: 'Noto Sans KR', sans-serif;
                }
            }
            p {
                margin: 20px 0 35px;
                font-size: 20px;
                letter-spacing: -1px;
            }
        }
        .box {
            position: relative;
            width: 100%;
            height: 420px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se14_bg01.jpg);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            border-radius: 30px;
            padding: 45px 80px;
            box-sizing: border-box;
            .txt {
                color: #fff;
                span {
                    color: #c8dd76;
                }
                strong {
                    font-size: 30px;
                    font-weight: 700;
                    line-height: 1.5;
                }
                b {
                    display: block;
                    font-weight: 700;
                    font-size: 20px;
                    letter-spacing: -1px;
                }
                p {
                    font-weight: 500;
                    margin-top: 20px;
                    line-height: 1.7;
                }
            }
            .pic {
                width: 450px;
                padding-right: 80px;
                img {
                    width: 100%;
                }
            }
        }
        .content02 {
            padding-top: 100px;
            .txt {
                b {
                    margin-top: 64px;
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
            .box {
                background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se14_bg02.jpg);
            }
        }
    }
    /* 대형 데스크톱 스타일 */
    @media (min-width: 1025px) and (max-width: 1440px) {
        padding: 100px 0;
        background-color: #f5f5f5;
        .inner {
            width: 95%;
            .title {
                h3 {
                    font-size: 40px;
                    font-weight: 700;
                    letter-spacing: -3px;
                    line-height: 1.5;
                    font-family: 'Lexend Deca', sans-serif;
                    span {
                        background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                        font-family: 'Noto Sans KR', sans-serif;
                    }
                }
                p {
                    margin: 18px 0 32px;
                    font-size: 19px;
                    letter-spacing: -1px;
                }
            }
            .box {
                position: relative;
                width: 100%;
                height: auto;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se14_bg01.jpg);
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                border-radius: 30px;
                padding: 45px 40px;
                box-sizing: border-box;
                .txt {
                    color: #fff;
                    span {
                        color: #c8dd76;
                    }
                    strong {
                        font-size: 28px;
                        font-weight: 700;
                        line-height: 1.5;
                        word-break: keep-all;
                    }
                    b {
                        display: block;
                        font-weight: 700;
                        font-size: 18px;
                        letter-spacing: -1px;
                    }
                    p {
                        font-weight: 500;
                        margin-top: 20px;
                        line-height: 1.7;
                    }
                }
                .pic {
                    width: 400px;
                    padding-right: 30px;
                    img {
                        width: 100%;
                    }
                }
            }
            .content02 {
                padding-top: 100px;
                .txt {
                    b {
                        margin-top: 64px;
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
                .box {
                    background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se14_bg02.jpg);
                }
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (max-width: 1024px) {
        padding: 80px 0;
        background-color: #f5f5f5;
        .inner {
            width: 95%;
            .title {
                h3 {
                    font-size: 36px;
                    font-weight: 700;
                    letter-spacing: -3px;
                    line-height: 1.5;
                    font-family: 'Lexend Deca', sans-serif;
                    span {
                        background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                        font-family: 'Noto Sans KR', sans-serif;
                    }
                }
                p {
                    margin: 18px 0 32px;
                    font-size: 18px;
                    letter-spacing: -1px;
                }
            }
            .box {
                position: relative;
                width: 100%;
                height: auto;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se14_bg01.jpg);
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                border-radius: 30px;
                padding: 32px 40px;
                box-sizing: border-box;
                .txt {
                    width: 100%;
                    color: #fff;
                    span {
                        color: #c8dd76;
                    }
                    strong {
                        font-size: 22px;
                        font-weight: 700;
                        line-height: 1.5;
                        word-break: keep-all;
                    }
                    b {
                        display: block;
                        font-weight: 700;
                        font-size: 18px;
                        letter-spacing: -1px;
                    }
                    p {
                        font-weight: 500;
                        margin-top: 16px;
                        line-height: 1.7;
                    }
                }
                .pic {
                    width: 100%;
                    padding-right: 30px;
                    display: flex;
                    justify-content: center;
                    margin-top: 32px;
                    img {
                        width: 40%;
                        min-width: 300px;
                    }
                }
            }
            .content02 {
                padding-top: 100px;
                .txt {
                    b {
                        margin-top: 24px;
                        &::before {
                            content: '';
                            display: block;
                            width: 40px;
                            height: 2px;
                            margin-bottom: 14px;
                            background-color: #fff;
                        }
                    }
                    p {
                        font-weight: 400;
                        line-height: 1.8;
                        letter-spacing: -1px;
                    }
                }
                .box {
                    background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se14_bg02.jpg);
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (max-width: 768px) {
        padding: 80px 0;
        background-color: #f5f5f5;
        .inner {
            width: 95%;
            .title {
                h3 {
                    font-size: 30px;
                    font-weight: 700;
                    letter-spacing: -3px;
                    line-height: 1.5;
                    font-family: 'Lexend Deca', sans-serif;
                    span {
                        background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                        font-family: 'Noto Sans KR', sans-serif;
                    }
                }
                p {
                    margin: 18px 0 32px;
                    font-size: 17px;
                    letter-spacing: -1px;
                }
            }
            .box {
                position: relative;
                width: 100%;
                height: auto;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se14_bg01.jpg);
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                border-radius: 30px;
                padding: 32px 40px;
                box-sizing: border-box;
                .txt {
                    width: 100%;
                    color: #fff;
                    span {
                        color: #c8dd76;
                    }
                    strong {
                        font-size: 22px;
                        font-weight: 700;
                        line-height: 1.5;
                        word-break: keep-all;
                    }
                    b {
                        display: block;
                        font-weight: 700;
                        font-size: 18px;
                        letter-spacing: -1px;
                        word-break: keep-all;
                    }
                    p {
                        font-weight: 500;
                        margin-top: 16px;
                        line-height: 1.7;
                        word-break: keep-all;
                    }
                }
                .pic {
                    width: 100%;
                    padding-right: 30px;
                    display: flex;
                    justify-content: center;
                    margin-top: 32px;
                    img {
                        width: 40%;
                        min-width: 300px;
                    }
                }
            }
            .content02 {
                padding-top: 100px;
                .txt {
                    b {
                        margin-top: 24px;
                        &::before {
                            content: '';
                            display: block;
                            width: 40px;
                            height: 2px;
                            margin-bottom: 14px;
                            background-color: #fff;
                        }
                    }
                    p {
                        font-weight: 400;
                        line-height: 1.8;
                        letter-spacing: -1px;
                    }
                }
                .box {
                    background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se14_bg02.jpg);
                }
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 480px) {
        padding: 60px 0;
        background-color: #f5f5f5;
        .inner {
            width: 95%;
            .title {
                h3 {
                    font-size: 26px;
                    font-weight: 700;
                    letter-spacing: -3px;
                    line-height: 1.5;
                    font-family: 'Lexend Deca', sans-serif;
                    span {
                        background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                        font-family: 'Noto Sans KR', sans-serif;
                    }
                }
                p {
                    margin: 16px 0 24px;
                    font-size: 16px;
                    letter-spacing: -1px;
                }
            }
            .box {
                position: relative;
                width: 100%;
                height: auto;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se14_bg01.jpg);
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                border-radius: 30px;
                padding: 26px 32px;
                box-sizing: border-box;
                .txt {
                    width: 100%;
                    color: #fff;
                    span {
                        color: #c8dd76;
                    }
                    strong {
                        font-size: 20px;
                        font-weight: 700;
                        line-height: 1.5;
                        word-break: keep-all;
                    }
                    b {
                        display: block;
                        font-weight: 700;
                        font-size: 17px;
                        letter-spacing: -1px;
                    }
                    p {
                        font-weight: 500;
                        margin-top: 16px;
                        line-height: 1.7;
                        font-size: 15px;
                    }
                }
                .pic {
                    width: 100%;
                    padding-right: 30px;
                    display: flex;
                    justify-content: center;
                    margin-top: 32px;
                    img {
                        width: 40%;
                        min-width: 240px;
                    }
                }
            }
            .content02 {
                padding-top: 100px;
                .txt {
                    b {
                        margin-top: 24px;
                        &::before {
                            content: '';
                            display: block;
                            width: 40px;
                            height: 2px;
                            margin-bottom: 14px;
                            background-color: #fff;
                        }
                    }
                    p {
                        font-weight: 400;
                        line-height: 1.8;
                        letter-spacing: -1px;
                    }
                }
                .box {
                    background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se14_bg02.jpg);
                }
            }
        }
    }
`;
