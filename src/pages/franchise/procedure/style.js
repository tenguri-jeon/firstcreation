import { styled } from 'styled-components';

// Procedure
export const ProcedureContainer = styled.div`
    .inner {
        width: 95%;
        h3 {
            padding: 182px 0 75px;
            text-align: center;
            font-weight: 700;
            font-family: 'Lexend Deca', sans-serif;
            font-size: 30px;
            letter-spacing: 1.5px;
        }
        .list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 90px 20px;
            .item {
                position: relative;
                display: flex;
                gap: 20px;
                .pic {
                    background-color: #2c2c2c;
                    width: 142px;
                    height: 142px;
                    box-sizing: border-box;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 6px;
                    img {
                        width: 50%;
                    }
                }
                .txt {
                    width: 52%;
                    box-sizing: border-box;
                    .num {
                        font-size: 32px;
                        font-weight: 700;
                        letter-spacing: -1px;
                        font-family: 'Lexend Deca', sans-serif;
                        margin-bottom: 4px;
                    }
                    .tit {
                        display: block;
                        font-weight: 500;
                        font-size: 20px;
                        margin-bottom: 4px;
                        word-break: keep-all;
                        letter-spacing: -1px;
                    }
                    .desc {
                        color: #555;
                        font-size: 16px;
                        line-height: 1.5;
                        letter-spacing: -0.5px;
                        word-break: keep-all;
                    }
                }
                .arrow {
                    position: absolute;
                    top: 64px;
                    right: 0;
                    font-size: 22px;
                    color: #666;
                }
                &.item09 {
                    .pic {
                        background-color: #c0c0c0;
                    }
                }

                /* down */
                &.item03,
                &.item06 {
                    .arrow {
                        width: fit-content;
                        height: fit-content;
                        top: auto;
                        right: auto;
                        left: 50%;
                        bottom: -58px;
                        transform: translateY(0) translateX(-50%) rotate(90deg);
                    }
                }

                /* left */
                &.item04,
                &.item05 {
                    .arrow {
                        width: fit-content;
                        height: fit-content;
                        left: -45px;
                        top: 64px;
                        transform: rotate(180deg);
                    }
                }

                /* right */
                &.item07,
                &.item08 {
                    .arrow {
                        width: fit-content;
                        height: fit-content;
                        top: 64px;
                    }
                }

                &.item01 {
                    order: 1;
                }
                &.item02 {
                    order: 2;
                }
                &.item03 {
                    order: 3;
                }
                &.item04 {
                    order: 6;
                }
                &.item05 {
                    order: 5;
                }
                &.item06 {
                    order: 4;
                }
                &.item07 {
                    order: 7;
                }
                &.item08 {
                    order: 8;
                }
                &.item09 {
                    order: 9;
                }
            }
        }
        .more {
            padding: 120px 0;
            text-align: center;
            a {
                position: relative;
                font-size: 30px;
                font-weight: 700;
                padding-bottom: 10px;
                &::after {
                    content: '';
                    display: block;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: #1c1c1c;
                }
                &:hover {
                    &::after {
                        animation: underline 0.5s ease-out 1 forwards;
                    }
                    @keyframes underline {
                        0% {
                            width: 0%;
                        }
                        100% {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 1200px) {
        .inner {
            h3 {
                padding: 182px 0 72px;
                font-size: 30px;
            }
            .list {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 100px 12px;
                .item {
                    gap: 20px;
                    .pic {
                        width: 120px;
                        height: 120px;
                    }
                    .txt {
                        width: 54%;
                        .num {
                            font-size: 30px;
                            margin-bottom: 4px;
                        }
                        .tit {
                            font-size: 19px;
                            margin-bottom: 4px;
                        }
                        .desc {
                            font-size: 15px;
                            line-height: 1.5;
                        }
                    }
                    .arrow {
                        top: 54px;
                        right: 0;
                        font-size: 22px;
                    }
                    &.item09 {
                        .pic {
                            background-color: #c0c0c0;
                        }
                    }

                    /* down */
                    &.item03,
                    &.item06 {
                        .arrow {
                            width: fit-content;
                            height: fit-content;
                            top: auto;
                            right: auto;
                            left: 50%;
                            bottom: -50px;
                            transform: translateY(0) translateX(-50%) rotate(90deg);
                        }
                    }

                    /* left */
                    &.item04,
                    &.item05 {
                        .arrow {
                            width: fit-content;
                            height: fit-content;
                            left: -35px;
                            top: 54px;
                            transform: rotate(180deg);
                        }
                    }

                    /* right */
                    &.item07,
                    &.item08 {
                        .arrow {
                            width: fit-content;
                            height: fit-content;
                            top: 54px;
                        }
                    }
                }
            }
            .more {
                padding: 120px 0;
                a {
                    font-size: 30px;
                    padding-bottom: 10px;
                    &::after {
                        width: 100%;
                        height: 2px;
                    }
                }
            }
        }
    }

    @media (max-width: 1024px) {
        .inner {
            h3 {
                padding: 170px 0 70px;
                font-size: 30px;
            }
            .list {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 80px 50px;
                .item {
                    gap: 20px;
                    .pic {
                        min-width: 120px;
                        width: 120px;
                        height: 120px;
                    }
                    .txt {
                        width: auto;
                        .num {
                            font-size: 30px;
                            margin-bottom: 4px;
                        }
                        .tit {
                            font-size: 19px;
                            margin-bottom: 4px;
                        }
                        .desc {
                            font-size: 15px;
                            line-height: 1.5;
                        }
                    }
                    .arrow {
                        display: none;
                    }

                    &.item01,
                    &.item02,
                    &.item03,
                    &.item04,
                    &.item05,
                    &.item06,
                    &.item07,
                    &.item08,
                    &.item09 {
                        order: 1;
                    }
                }
            }
            .more {
                padding: 100px 0;
                a {
                    font-size: 28px;
                    padding-bottom: 10px;
                    &::after {
                        width: 100%;
                        height: 2px;
                    }
                    &:hover {
                        &::after {
                            animation: none;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        .inner {
            h3 {
                padding: 160px 0 80px;
                font-size: 30px;
            }
            .list {
                grid-template-columns: repeat(2, 1fr);
                gap: 50px 50px;
                .item {
                    gap: 20px;
                    .pic {
                        min-width: 100px;
                        width: 100px;
                        height: 100px;
                        margin-top: 0px;
                    }
                    .txt {
                        width: auto;
                        .num {
                            font-size: 27px;
                            margin-bottom: 4px;
                        }
                        .tit {
                            font-size: 18px;
                            margin-bottom: 4px;
                        }
                        .desc {
                            font-size: 15px;
                            line-height: 1.5;
                        }
                    }
                }
            }
            .more {
                padding: 90px 0;
                a {
                    font-size: 28px;
                    padding-bottom: 10px;
                }
            }
        }
    }

    @media (max-width: 600px) {
        .inner {
            h3 {
                padding: 140px 0 60px;
                font-size: 28px;
            }
            .list {
                grid-template-columns: repeat(1, 1fr);
                gap: 54px 50px;
                .item {
                    gap: 20px;
                    align-items: center;
                    .pic {
                        min-width: 100px;
                        width: 100px;
                        height: 100px;
                    }
                    .txt {
                        width: auto;
                        .num {
                            font-size: 27px;
                            margin-bottom: 0px;
                        }
                        .tit {
                            font-size: 18px;
                            margin-bottom: 2px;
                        }
                        .desc {
                            font-size: 15px;
                            line-height: 1.4;
                            letter-spacing: -1px;
                        }
                    }
                }
            }
            .more {
                padding: 70px 0;
                a {
                    font-size: 24px;
                    padding-bottom: 8px;
                    &::after {
                        width: 100%;
                        height: 2px;
                    }
                }
            }
        }
    }

    @media (max-width: 480px) {
        .inner {
            h3 {
                padding: 120px 0 40px;
                font-size: 26px;
            }
            .list {
                grid-template-columns: repeat(1, 1fr);
                gap: 40px 0px;
                .item {
                    gap: 20px;
                    align-items: center;
                    .pic {
                        min-width: 80px;
                        width: 80px;
                        height: 80px;
                    }
                    .txt {
                        width: auto;
                        .num {
                            font-size: 24px;
                            margin-bottom: 0px;
                        }
                        .tit {
                            font-size: 17px;
                            margin-bottom: 2px;
                        }
                        .desc {
                            font-size: 14px;
                            line-height: 1.4;
                            letter-spacing: -1px;
                        }
                    }
                }
            }
            .more {
                padding: 50px 0 70px;
                a {
                    font-size: 22px;
                }
            }
        }
    }
`;
