import { styled } from 'styled-components';

export const Section13Container = styled.div`
    padding: 100px 0;
    .inner {
        width: 95%;
        background-repeat: no-repeat;
        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se13_bg.png);
        background-position: bottom;
        display: flex;
        align-items: flex-end;
        .left {
            width: 45%;
            .title {
                margin-bottom: 30px;
                p {
                    background-color: #1c1c1c;
                    width: 260px;
                    padding: 8px 40px 10px;
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
                    width: fit-content;
                    text-align: left;
                    font-size: 45px;
                    font-weight: 700;
                    letter-spacing: -3px;
                    font-family: 'Lexend Deca', sans-serif;
                    background: linear-gradient(90deg, rgba(101, 243, 249, 1) 0%, rgba(252, 69, 85, 1) 100%);
                    color: transparent;
                    background-clip: text;
                    -webkit-background-clip: text;
                    word-break: keep-all;
                }
                & + p {
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 1.4;
                }
            }
            .list {
                background-color: #fff;
                width: 360px;
                margin-top: 30px;
                border-radius: 10px;
                box-sizing: border-box;
                padding: 25px;
                margin-left: 20px;
                box-shadow: 0 0 12px 2px #00000020;
                .list_tit {
                    display: flex;
                    justify-content: space-between;
                    li {
                        color: #b9b9b9;
                        font-weight: 500;
                    }
                }
                .list_cnt {
                    margin-top: 14px;
                    padding-top: 76px;
                    position: relative;
                    li {
                        display: flex;
                        justify-content: space-between;
                        font-weight: 500;
                        padding: 3px 0;
                        p:nth-child(1) {
                            width: 15%;
                        }
                        p:nth-child(2) {
                            width: 40%;
                            text-align: center;
                        }
                        p:nth-child(3) {
                            width: 45%;
                            text-align: right;
                        }
                        &:first-child {
                            position: absolute;
                            top: 0;
                            left: 50%;
                            transform: translateX(-50%);
                            background-color: #fff;
                            border: 4px solid transparent;
                            border-radius: 10px;
                            width: 130%;
                            height: 64px;
                            box-sizing: border-box;
                            padding: 0;
                            display: flex;
                            align-items: center;
                            font-size: 20px;
                            font-weight: 700;
                            background-image: linear-gradient(#fff, #fff), linear-gradient(90deg, rgba(101, 243, 249, 1) 0%, rgba(252, 69, 85, 1) 100%);
                            background-origin: border-box;
                            background-clip: content-box, border-box;
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
                            p:first-child {
                                padding-left: 20px;
                            }
                            p:last-child {
                                padding-right: 20px;
                                color: #ff3732;
                            }
                        }
                    }
                    & + p {
                        font-size: 12px;
                        color: #666;
                        margin-top: 18px;
                    }
                }
            }
        }
        .right {
            width: 55%;
            .pic {
                position: relative;
                width: 100%;
                border-radius: 20px;
                overflow: hidden;
                img {
                    width: 100%;
                    position: relative;
                    z-index: 0;
                }
                .more {
                    opacity: 0;
                    transition: 0.4s;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #1c1c1c99;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p {
                        text-align: center;
                        line-height: 1.8;
                        letter-spacing: -1px;
                        color: #fff;
                        margin-bottom: 30px;
                    }
                }
                &:hover {
                    .more {
                        opacity: 1;
                    }
                }
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (min-width: 769px) and (max-width: 1024px) {
        padding: 80px 0;
        .inner {
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            gap: 30px;
            .left {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .title {
                    margin-bottom: 24px;
                    p {
                        background-color: #1c1c1c;
                        margin: 0 auto;
                        width: fit-content;
                        text-align: center;
                        line-height: 1.3;
                        font-size: 18px;
                        margin-bottom: 22px;
                        .pc {
                            display: none;
                        }
                    }
                    h3 {
                        width: fit-content;
                        font-size: 36px;
                    }
                    & + p {
                        font-size: 20px;
                        text-align: center;
                    }
                }
                .list {
                    background-color: #fff;
                    width: 360px;
                    margin-top: 30px;
                    border-radius: 10px;
                    box-sizing: border-box;
                    padding: 25px;
                    margin-left: 0px;
                    box-shadow: 0 0 12px 2px #00000020;
                    .list_tit {
                        display: flex;
                        justify-content: space-between;
                        li {
                            color: #b9b9b9;
                            font-weight: 500;
                        }
                    }
                    .list_cnt {
                        margin-top: 14px;
                        padding-top: 76px;
                        position: relative;
                        li {
                            &:first-child {
                                border: 4px solid transparent;
                                border-radius: 10px;
                                width: 140%;
                                height: 64px;
                                font-size: 22px;
                                p:first-child {
                                    padding-left: 20px;
                                }
                                p:last-child {
                                    padding-right: 20px;
                                    color: #ff3732;
                                }
                            }
                        }
                        & + p {
                            font-size: 12px;
                            color: #666;
                            margin-top: 18px;
                        }
                    }
                }
            }
            .right {
                width: 85%;
                margin: auto;
                .pic{
                    a{
                        .more{
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (min-width: 501px) and (max-width: 768px) {
        padding: 80px 0;
        .inner {
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            gap: 24px;
            .left {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .title {
                    margin-bottom: 20px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p {
                        background-color: #1c1c1c;
                        margin: 0 auto;
                        width: fit-content;
                        text-align: center;
                        line-height: 1.3;
                        font-size: 17px;
                        margin-bottom: 16px;
                        .pc {
                            display: none;
                        }
                    }
                    h3 {
                        width: fit-content;
                        font-size: 30px;
                        text-align: center;
                    }
                    & + p {
                        font-size: 18px;
                        text-align: center;
                    }
                }
                .list {
                    background-color: #fff;
                    width: 360px;
                    margin-top: 30px;
                    border-radius: 10px;
                    box-sizing: border-box;
                    padding: 25px;
                    margin-left: 0px;
                    box-shadow: 0 0 12px 2px #00000020;
                    .list_tit {
                        display: flex;
                        justify-content: space-between;
                        li {
                            color: #b9b9b9;
                            font-weight: 500;
                        }
                    }
                    .list_cnt {
                        margin-top: 14px;
                        padding-top: 76px;
                        position: relative;
                        li {
                            &:first-child {
                                border: 4px solid transparent;
                                border-radius: 10px;
                                width: 140%;
                                height: 64px;
                                font-size: 22px;
                                p:first-child {
                                    padding-left: 20px;
                                }
                                p:last-child {
                                    padding-right: 20px;
                                    color: #ff3732;
                                }
                            }
                        }
                        & + p {
                            font-size: 12px;
                            color: #666;
                            margin-top: 18px;
                        }
                    }
                }
            }
            .right {
                width: 95%;
                margin: auto;
                .pic{
                    a{
                        .more{
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 500px) {
        padding: 60px 0;
        .inner {
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            gap: 24px;
            .left {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .title {
                    margin-bottom: 16px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p {
                        background-color: #1c1c1c;
                        margin: 0 auto;
                        width: fit-content;
                        text-align: center;
                        line-height: 1.3;
                        font-size: 14px;
                        margin-bottom: 12px;
                        .pc {
                            display: none;
                        }
                    }
                    h3 {
                        width: fit-content;
                        font-size: 26px;
                        text-align: center;
                    }
                    & + p {
                        font-size: 17px;
                        text-align: center;
                    }
                }
                .list {
                    background-color: #fff;
                    width: 360px;
                    margin-top: 30px;
                    border-radius: 10px;
                    box-sizing: border-box;
                    padding: 25px 25px 20px 25px;
                    margin-left: 0px;
                    box-shadow: 0 0 12px 2px #00000020;
                    .list_tit {
                        display: flex;
                        justify-content: space-between;
                        li {
                            color: #b9b9b9;
                            font-weight: 500;
                            font-size: 14px;
                        }
                    }
                    .list_cnt {
                        margin-top: 14px;
                        padding-top: 76px;
                        position: relative;
                        li {
                            font-size: 14px;
                            &:first-child {
                                border: 4px solid transparent;
                                border-radius: 10px;
                                width: 130%;
                                height: 64px;
                                font-size: 20px;
                                p:first-child {
                                    padding-left: 20px;
                                }
                                p:last-child {
                                    padding-right: 20px;
                                    color: #ff3732;
                                }
                            }
                        }
                        & + p {
                            font-size: 12px;
                            color: #666;
                            margin-top: 14px;
                        }
                    }
                }
            }
            .right {
                width: 100%;
                margin: auto;
                .pic {
                    a {
                        .more {
                            opacity: 1;
                            p {
                                font-size: 14px;
                            }
                        }
                    }
                }
            }
        }
    }
`;
