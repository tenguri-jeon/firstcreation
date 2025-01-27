import { styled } from 'styled-components';

export const Section11Container = styled.div`
    padding: 100px 0;
    .inner {
        width: 95%;
        .title {
            text-align: center;
            margin-bottom: 80px;
            h3 {
                margin: 0 auto;
                width: fit-content;
                font-size: 45px;
                font-weight: 700;
                background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                letter-spacing: -3px;
                margin-bottom: 30px;
            }
            p {
                font-size: 20px;
                letter-spacing: -1px;
            }
        }
        .box {
            /* height: fit-content; */
            display: flex;
            gap: 40px;
            box-sizing: border-box;
            justify-content: space-between;
            align-items: stretch;
            min-height: auto;
            .left {
                width: 60%;
                ul {
                    width: 100%;
                    li {
                        width: 100%;
                        box-sizing: border-box;
                        display: flex;
                        gap: 20px;
                        .num {
                            background-color: #ffb400;
                            width: 134px;
                            height: fit-content;
                            display: flex;
                            box-sizing: border-box;
                            border-radius: 25px;
                            gap: 8px;
                            justify-content: center;
                            align-items: flex-start;
                            padding: 7px 12px;
                            font-size: 20px;
                            color: #fff;
                            span {
                                display: block;
                                span {
                                    font-size: 16px;
                                }
                            }
                            span:first-child {
                                font-family: 'Lexend Deca', sans-serif;
                                font-weight: 700;
                            }
                        }
                        .txt_wrap {
                            width: 90%;
                        }
                        .txt {
                            margin-bottom: 20px;
                            strong {
                                display: block;
                                font-size: 20px;
                                font-weight: 700;
                                margin-bottom: 10px;
                                letter-spacing: -1px;
                            }
                            p {
                                letter-spacing: -1px;
                                margin-bottom: 30px;
                                word-break: keep-all;
                                span {
                                    font-weight: 700;
                                }
                            }
                        }
                    }
                }
            }
            .right {
                position: relative;
                width: 40%;
                /* background-color: #ffb400; */
                display: flex;
                justify-content: flex-end;
                .pic {
                    width: 100%;
                    height: fit-content;
                    top: 0;
                    right: 0;
                    min-width: 300px;
                    transition: 0.5s;
                    img {
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 90%;
                    }
                }
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (min-width: 769px) and (max-width: 1024px) {
        .inner {
            .title {
                margin-bottom: 70px;
                h3 {
                    font-size: 36px;
                }
                p {
                    font-size: 18px;
                }
            }
            .box {
                gap: 0;
                .left {
                    ul {
                        li {
                            .num {
                                font-size: 18px;
                                span {
                                    span {
                                        font-size: 16px;
                                    }
                                }
                            }
                            .txt {
                                strong {
                                    font-size: 18px;
                                    word-break: keep-all;
                                }
                            }
                        }
                    }
                }
                .right {
                    width: 40%;
                    position: relative;
                    display: flex;
                    justify-content: flex-end;
                    .pic {
                        position: absolute;
                        width: 100%;
                        top: 0;
                        right: 0;
                        min-width: 200px;
                        img {
                            position: absolute;
                            top: 0;
                            right: 0;
                            width: 90%;
                        }
                    }
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (min-width: 481px) and (max-width: 768px) {
        padding: 80px 0;
        .inner {
            .title {
                margin-bottom: 60px;
                h3 {
                    font-size: 30px;
                    margin-bottom: 22px;
                }
                p {
                    font-size: 17px;
                    letter-spacing: -1px;
                }
            }
            .box {
                display: flex;
                gap: 40px;
                flex-direction: column-reverse;
                .left {
                    width: 100%;
                    ul {
                        li {
                            .num {
                                width: 112px;
                                border-radius: 20px;
                                padding: 4px 10px;
                                font-size: 17px;
                            }
                            .txt {
                                strong {
                                    font-size: 17px;

                                    word-break: keep-all;
                                }
                                p {
                                    font-size: 15px;
                                }
                            }
                        }
                    }
                }
                .right {
                    width: 100%;
                    height: fit-content;
                    position: relative;
                    display: flex;
                    justify-content: center;
                    .pic {
                        position: relative;
                        width: 50%;
                        img {
                            position: relative;
                            width: 100%;
                        }
                    }
                }
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 480px) {
        padding: 60px 0;
        .inner {
            .title {
                margin-bottom: 60px;
                h3 {
                    font-size: 26px;
                    margin-bottom: 22px;
                }
                p {
                    font-size: 16px;
                    letter-spacing: -1px;
                }
            }
            .box {
                display: flex;
                gap: 40px;
                flex-direction: column-reverse;
                .left {
                    width: 100%;
                    ul {
                        li {
                            gap: 8px;
                            .num {
                                width: 34%;
                                border-radius: 20px;
                                padding: 4px 10px;
                                font-size: 16px;
                            }
                            .txt_wrap {
                                width: 66%;
                                .txt {
                                    strong {
                                        font-size: 16px;

                                        word-break: keep-all;
                                    }
                                    p {
                                        font-size: 14px;
                                    }
                                }
                            }
                        }
                    }
                }
                .right {
                    width: 100%;
                    height: fit-content;
                    position: relative;
                    display: flex;
                    justify-content: center;
                    .pic {
                        position: relative;
                        width: 50%;
                        img {
                            position: relative;
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
`;
