import { styled } from 'styled-components';

export const Section20Container = styled.div`
    position: sticky;
    bottom: 0;
    z-index: 100;
    background-color: #ffbe24;
    width: 100%;
    height: 72px;

    .inner {
        display: flex;
        align-items: center;
        height: 100%;
        .info {
            padding: 0 12px 0 30px;
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            .num {
                width: 50%;
                display: flex;
                align-items: center;
                gap: 20px;
                box-sizing: border-box;
                & > p {
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 1.3;
                    letter-spacing: -1px;
                    span {
                        font-weight: 600;
                        font-size: 16px;
                    }
                }
                a {
                    display: block;
                    padding: 2px 18px;
                    background-color: #373737;
                    border-radius: 30px;
                    p {
                        font-size: 25px;
                        font-family: 'Lexend Deca', sans-serif;
                        color: #ffb400;
                        letter-spacing: -0.5px;
                    }
                }
            }
        }
        .form {
            width: 50%;
            height: 100%;
            background-color: #323232;
            box-sizing: border-box;
            a {
                margin: 0 auto;
                width: fit-content;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 14px;
                p:first-child {
                    color: #fff;
                    font-size: 20px;
                    font-weight: 700;
                    word-break: keep-all;
                }
                .name,
                .phone {
                    background-color: #fff;
                    color: #323232;
                    padding: 12px 60px 12px 16px;
                    border-radius: 4px;
                    box-sizing: border-box;
                    font-weight: 500;
                }
                .phone {
                    padding-right: 160px;
                }
                .more {
                    color: #323232;
                    background-color: #ffbe24;
                    text-align: center;
                    padding: 7px 20px;
                    border-radius: 4px;
                    font-size: 18px;
                    letter-spacing: -1px;
                    font-weight: 700;
                    animation: blink 1s linear infinite;

                    @keyframes blink {
                        0% {
                            opacity: 0;
                        }
                        50% {
                            opacity: 1;
                        }
                        100% {
                            opacity: 0;
                        }
                    }
                }
            }
        }
    }

    /* 대형 데스크톱 스타일 */
    @media (max-width: 1440px) {
        height: 66px;
        .inner {
            .info {
                .num {
                    gap: 16px;
                    & > p {
                        font-size: 18px;
                        letter-spacing: -0.5px;
                        font-weight: 600;
                        span {
                            font-size: 14px;
                            letter-spacing: -0.5px;
                        }
                    }
                    a {
                        padding: 4px 18px;
                        p {
                            font-size: 20px;
                            font-family: 'Lexend Deca', sans-serif;
                            color: #ffb400;
                            letter-spacing: -0.5px;
                        }
                    }
                }
            }
            .form {
                a {
                    p:first-child {
                        font-size: 18px;
                    }
                    .name,
                    .phone {
                        padding: 6px 50px 6px 16px;
                    }
                    .phone {
                        padding-right: 140px;
                    }
                    .more {
                        padding: 5px 18px;
                    }
                }
            }
        }
    }

    /* 중형 데스크톱 스타일 */
    @media (max-width: 1386px) {
        .inner {
            .info {
                .num {
                    & > p {
                        font-weight: 700;
                        line-height: 1.2;
                    }
                }
            }
            .form {
                a {
                    p:first-child {
                        font-size: 18px;
                    }
                    .name,
                    .phone {
                        font-size: 16px;
                        padding: 6px 50px 6px 16px;
                    }
                    .phone {
                        padding-right: 140px;
                    }
                    .more {
                        padding: 5px 18px;
                    }
                }
            }
        }
    }

    /* 중형 데스크톱 스타일2 */
    @media (max-width: 1250px) {
        height: 140px;
        .inner {
            height: auto;
            flex-direction: column;
            .info {
                width: 100%;
                padding: 0;
                .num {
                    justify-content: center;
                    padding: 0 30px;
                    height: 70px;
                    & > p {
                        width: 190px;
                        font-size: 16px;
                        font-weight: 600;
                        line-height: 1.2;
                    }
                    a {
                        width: 100%;
                        p {
                            width: 100%;
                            text-align: center;
                        }
                    }
                }
                .num01 {
                    & > p {
                        width: 100px;
                    }
                }
                .num02 {
                    background-color: #ffdf92;
                }
            }
            .form {
                width: 100%;
                height: 70px;
                a {
                    width: auto;
                    p:first-child {
                        font-size: 16px;
                    }
                    .name,
                    .phone {
                        font-size: 16px;
                        padding: 8px 60px 8px 16px;
                    }
                    .phone {
                        padding-right: 150px;
                    }
                    .more {
                        width: 40%;
                        font-size: 15px;
                        padding: 8px 18px;
                        font-weight: 600;
                    }
                }
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (max-width: 1024px) {
        /* 스타일 코드 */
        height: 120px;
        .inner {
            .info {
                .num {
                    height: 60px;
                    & > p {
                        font-size: 15px;
                        line-height: 1.3;
                        span {
                            font-size: 14px;
                        }
                    }
                }
                .num02 {
                    padding: 0 30px 0 20px;
                }
            }
            .form {
                height: 60px;
                a {
                    p:first-child {
                        font-size: 15px;
                    }
                    .name,
                    .phone {
                        font-size: 15px;
                        padding: 7px 50px 7px 16px;
                    }
                    .phone {
                        padding-right: 140px;
                    }
                    .more {
                        padding: 7px 18px;
                    }
                }
            }
        }
    }

    /* 소소형 데스크톱 스타일 */
    @media (max-width: 816px) {
        /* 스타일 코드 */
        .inner {
            .info {
                .num {
                    gap: 0;
                    & > p {
                        font-size: 14px;
                        span {
                            font-size: 12px;
                        }
                    }
                    a {
                        padding: 4px 12px;
                    }
                }
            }
            .form {
                a {
                    padding: 0 40px;
                    box-sizing: border-box;
                    p:first-child {
                        width: 14%;
                        font-size: 14px;
                    }
                    .name,
                    .phone {
                        font-size: 14px;
                        width: 16%;
                        padding: 7px 0px 7px 12px;
                    }
                    .phone {
                        width: 24%;
                        padding-right: 0;
                    }
                    .more {
                        width: 46%;
                    }
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (max-width: 612px) {
        /* 스타일 코드 */
        height: 143px;
        .inner {
            .info {
                .num {
                    padding: 2px 20px;
                    height: 83px;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                    & > p {
                        width: 100%;
                        font-size: 15px;
                        font-weight: 700;
                        text-align: center;
                        span {
                            margin-left: 4px;
                        }
                    }
                    a {
                        width: 100%;
                        padding: 3px 12px;
                    }
                }
            }
            .form {
                a {
                    padding: 0 16px;
                    box-sizing: border-box;
                    p:first-child {
                        width: 16%;
                        font-size: 14px;
                    }
                    .name,
                    .phone {
                        font-size: 14px;
                        width: 19%;
                        padding: 7px 0px 7px 12px;
                    }
                    .phone {
                        width: 30%;
                        padding-right: 0;
                    }
                    .more {
                        width: 35%;
                    }
                }
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 480px) {
        .inner {
            .info {
                .num {
                    & > p {
                        font-size: 14px;
                        span {
                            display: block;
                            margin-left: 0px;
                        }
                    }
                    a {
                        padding: 1px 10px;
                        p {
                            font-size: 16px;
                        }
                    }
                }
            }
            .form {
                a {
                    padding: 0 16px;
                    box-sizing: border-box;
                    p:first-child {
                        width: 16%;
                        font-size: 13px;
                    }
                    .name,
                    .phone {
                        font-size: 13px;
                        width: 20%;
                        padding: 7px 0px 7px 8px;
                    }
                    .phone {
                        width: 30%;
                        padding-right: 0;
                    }
                    .more {
                        width: 34%;
                        font-size: 13px;
                        padding: 0;
                        line-height: 1.4;
                        height: 34px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        word-break: keep-all;
                    }
                }
            }
        }
    }
`;
