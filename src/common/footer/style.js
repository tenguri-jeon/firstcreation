import styled from 'styled-components';

export const FooterWrap = styled.footer`
    background-color: #f4f5f6;

    strong {
        display: block;
        text-align: center;
        box-sizing: border-box;
        padding: 22px 2.5%;
        font-size: 15px;
        border-top: 1px solid #c2c2c3;
        line-height: 130%;
        font-family: 'Lexend Deca', sans-serif;
    }

    .inner {
        width: 95%;
        height: 300px;
        box-sizing: border-box;
        padding: 40px 0;
        display: flex;
        flex-direction: row;

        @media (max-width: 1024px) {
            height: 480px;
            padding: 40px 0;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
    }
    .info {
        display: flex;

        li {
            padding: 60px;
            font-size: 20px;

            a {
                color: #fcc419;
                transition: 0.3s;

                &:hover {
                    color: tomato;
                }
            }
        }
    }

    .family {
        position: absolute;
        top: 35px;
        right: 0;
        display: flex;

        li {
            padding: 20px;
            font-size: 20px;

            a {
                img {
                    width: 30px;
                    transition: 0.5s;
                    &:hover {
                        transform: rotate(360deg);
                    }
                }
            }
        }
    }
`;

export const LogoTabWrap = styled.div`
    img {
        width: 150px;
        height: 20px;
    }
`;

export const InfoWrap = styled.div`
    width: 70%;

    @media (max-width: 1440px) {
        width: 60%;
    }

    ul {
        margin-left: 70px;

        @media (max-width: 1440px) {
            //width: 100%;
        }

        @media (max-width: 1024px) {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            float: none;
            width: auto;
            margin: 35px 0;
        }

        li {
            position: relative;
            font-size: 16px;
            margin-bottom: 15px;
            display: flex;
            width: 700px;

            @media (max-width: 1440px) {
                width: 100%;
            }

            @media (max-width: 1024px) {
                font-size: 15px;
                margin-bottom: 0px;
            }

            span {
                font-weight: 600;
                margin-right: 10px;
                font-family: 'Lexend Deca', sans-serif;
            }

            p {
                margin-left: 10px;
                font-family: 'Lexend Deca', sans-serif;
            }

            .company {
                &::after {
                    content: '';
                    width: 1px;
                    height: 50%;
                    border-right: 1px solid #7b7b7b;
                    position: absolute;
                    top: 6px;
                    left: 127px;

                    @media (max-width: 1024px) {
                        left: 120px;
                    }
                }
            }

            .address {
                &::after {
                    content: '';
                    width: 1px;
                    height: 50%;
                    border-right: 1px solid #7b7b7b;
                    position: absolute;
                    top: 6px;
                    left: 71px;

                    @media (max-width: 1024px) {
                        left: 67px;
                    }
                }
            }

            .cs {
                &::after {
                    content: '';
                    width: 1px;
                    height: 50%;
                    border-right: 1px solid #7b7b7b;
                    position: absolute;
                    top: 6px;
                    left: 150px;

                    @media (max-width: 1024px) {
                        left: 141px;
                    }
                }
            }

            .rn {
                &::after {
                    content: '';
                    width: 1px;
                    height: 50%;
                    border-right: 1px solid #7b7b7b;
                    position: absolute;
                    top: 6px;
                    left: 175px;

                    @media (max-width: 1024px) {
                        left: 165px;
                    }
                }
            }
        }
    }
`;

export const ContactWrap = styled.div`
    float: right;
    display: flex;
    flex-direction: column;
    width: 16%;
    justify-items: right;
    position: relative;
    box-sizing: border-box;

    @media (max-width: 1440px) {
        display: block;
        float: right;
        width: 26%;
        justify-items: right;
        position: relative;
        box-sizing: border-box;
    }

    @media (max-width: 1024px) {
        width: 25%;
    }

    @keyframes moveArrow {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(10px);
        }
    }

    button {
        font-size: 16px;
        color: white;
        cursor: pointer;
        width: 230px;
        height: 45px;
        padding: 0 35px 0 0;
        display: inline-block;
        background: #1b1b1b;
        border-radius: 25px;
        margin-bottom: 15px;
        position: relative;
        font-family: 'Noto Sans KR', sans-serif;

        @media (max-width: 1024px) {
            margin: 0;
        }

        svg {
            position: absolute;
            right: 30px;
            top: 30%;
            transform: translateY(-50%);
            animation: moveArrow 0.5s ease-in-out infinite alternate;
        }
    }

    .follow {
        text-align: right;
        font-size: 28px;
        margin-bottom: 10px;
        font-weight: 600;

        @media (max-width: 1024px) {
            text-align: left;
            margin-top: 10px;
        }

        h4 {
            font-family: 'Lexend Deca', sans-serif;
        }

        .followIcon {
            display: flex;
            float: right;
            align-items: center;
            margin-left: 20px;

            @media (max-width: 1024px) {
                float: left;
                margin-left: -10px;
            }

            li {
                padding: 0 10px 0 10px;

                a {
                    display: block;
                    width: 14px;
                    height: 30px;
                    font-size: 20px;

                    svg {
                        width: 20px;
                        height: 20px;
                    }
                }
            }
        }
    }

    .contact {
        text-align: right;
        font-size: 28px;
        margin-bottom: 10px;
        font-weight: 600;

        @media (max-width: 1024px) {
            text-align: left;
        }

        h4 {
            font-family: 'Lexend Deca', sans-serif;
        }

        a {
            font-size: 16px;
            display: block;
            font-weight: 300;
            letter-spacing: 0.5px;

            span {
                img {
                    vertical-align: bottom;
                    width: 20px;
                    height: 20px;
                }
            }
        }
    }
`;
