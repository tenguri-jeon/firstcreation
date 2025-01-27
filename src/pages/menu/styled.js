import styled from "styled-components";

export const MenuCom = styled.div`
    .ModalBg{
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.3);
        z-index: 1500;
        top: 0;
    }
    .topCon{
        padding: 100px 0px ;
        text-align: center;
        .inner{
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0 auto;
            max-width: 1440px;
            width: 95%;
        }
    }
    .mainCon{
        padding-top: 100px;
        background: #fafbfc;
        .inner{
            max-width: 1440px;
            width: 95%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 0 auto;
            span{
                text-align: center;
                /* margin-top: 10px; */
                font-size: 18px;
                font-weight: 500;
            }
            ul{
                margin-top: 33px;
                display: flex;
                flex-wrap: wrap;
                justify-content: start;
                &.click-menu{
                    justify-content: center;
                    max-width: 1044px;
                    margin: 0 auto;
                    margin-top: 33px;
                }
            }
            .con2{
                padding-bottom: 100px;
                div{
                    /* margin-top: 100px; */
                    margin-top: unset;
                    .price-info{
                        font-size: 14px;
                        margin-top: 10px;
                        text-align: center;
                        font-weight: bold;
                        letter-spacing: -1px;
                    }
                    .beverage-condition{
                        display: flex;
                        justify-content: center;
                        gap: 18px;
                        font-size: 18px;
                        font-weight: bold;
                        color: #999;
                        li{
                            cursor: pointer;
                            position: relative;
                            &.on{
                                color: #000;
                                text-decoration: underline;
                            }
                            &:hover{
                                color: #000;
                                transition: 0.5s;
                                ::after{
                                    content: '';
                                    display: block;
                                    height: 2px;
                                    width: fit-content;
                                    background-color: black;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    @media (max-width : 480px) {
        .mainCon{
            padding: 50px 0;
            .inner{
                .con2{
                    margin-top: 50px;
                    div{
                        margin-top: unset;
                        .price-info{
                            font-size: 14px;
                            margin-top: 10px;
                            text-align: center;
                            font-weight: bold;
                            letter-spacing: -1px;
                        }
                        .beverage-condition{
                            margin-top: 8px;
                            li{
                                cursor: pointer;
                                position: relative;
                                &.on{
                                    color: #000;
                                    text-decoration: underline;
                                }
                                &:hover{
                                    color: #000;
                                    transition: 0.5s;
                                    ::after{
                                        content: '';
                                        display: block;
                                        height: 2px;
                                        width: fit-content;
                                        background-color: black;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`