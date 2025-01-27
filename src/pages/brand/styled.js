import styled from 'styled-components';

export const IntroCon = styled.div`
    display: flex;
    height: 100vh;
    section{
        flex-basis: 50%;
        width: 100%;
        position: relative;
        &::after{
            opacity: 0;
            display: block;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            position: absolute;
            top: 0;
            left: 0;
            z-index: 5;
            content: '';
            transition: 0.5s;
        }
        &:hover{
            &::after{
                opacity: 1;
            }
        }
        .section-wrap{
            box-sizing: border-box;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 100px;
            display: flex;
            flex-direction: column;
            h3{
                font-size: 50px;
                color: white;
                text-shadow: 0 0 8px #2c2c2c24;
                font-weight: 800;
                line-height: 1.2;
                margin-top: 80px;
                margin-bottom: 40px;
                z-index: 13;
            }
            .text-wrap{
                z-index: 13;
                height: 60%;
                max-height: 500px;
                display: flex;
                flex-direction: column;
                height: 100%;
                justify-content: flex-end;
                strong{
                    font-size: 30px;
                    letter-spacing: -1px;
                    margin-bottom: 20px;
                    color: white;
                    font-weight: bold;
                    text-shadow: 0 0 8px #2c2c2c24;
                }
                p{
                    font-size: 18px;
                    letter-spacing: -1px;
                    line-height: 1.4;
                    margin-bottom: 40px;
                    text-shadow: 0 0 8px #2c2c2c24;
                    color: white;
                }
                .introbtn{
                    display: flex;
                    justify-content: start;
                    gap: 15px;
                    button{
                        display: block;
                    }
                }
            }

        }
    }
    #left{
        background: linear-gradient(180deg, rgba(197,197,222,1) 0%, rgba(247,173,173,1) 100%);
        .section-wrap{
            background: url(https://github.com/TeamProject-Dessert39/dataCenter/blob/master/images/brand/Introdution/int_vio1_1.gif?raw=true) center / cover;
        }
    }
    #right{
        background: linear-gradient(180deg, rgba(156, 181, 222, 1) 0%, rgba(206, 222, 230, 1) 100%);
        .section-wrap{
            background: url(https://github.com/TeamProject-Dessert39/dataCenter/blob/master/images/brand/Introdution/int_vio2_1.gif?raw=true)  center / cover;
        }
    }
    @media (max-width : 1024px) {
        section{
            .section-wrap{
                padding: 50px;
                padding-right: 50px;
                h3{
                    font-size: 44px;
                }
            }
        }
    }
    @media (max-width : 850px) {
        flex-direction: column;
        section{
            div.section-wrap{
                h3{
                    margin-top: unset;
                    font-size: 36px;
                }
                .text-wrap{
                    height: 65%;
                    strong{
                        font-size: 24px;
                        margin-bottom: 15px;
                    }
                    p{
                        font-size: 16px;
                        margin-bottom: 30px;
                    }
                    .introbtn{

                    }
                }
            }
        }
    }
    @media (max-width : 480px) {
        section{
            .section-wrap{
                padding: 25px;
                h3{
                    font-size: 30px;
                    margin-top: 15px;
                }
                .text-wrap{
                    height: 65%;
                    strong{
                        font-size: 22px;
                        margin-bottom: 15px;
                    }
                    p{
                        letter-spacing: -1.5px;
                        font-size: 14px;
                    }
                    .introbtn{
                        display: flex;
                        justify-content: start;
                        gap: 15px;
                        button{
                            display: block;
                        }
                    }
                }

            }
        }
    }
`