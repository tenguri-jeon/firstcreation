import styled from 'styled-components';

export const PartWrap = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        width: calc(100% / 3 - 200px / 3);
        max-width: 300px;

        .titleBox {
            display: flex;
            align-items: center;
            width: 230px;
            height: 85px;
            background-color: #2c2c2c;
            border-radius: 42.5px;

            .icon {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 62px;
                height: 62px;
                margin-left: 12px;
                background-color: #fff;
                border-radius: 50%;
                overflow: hidden;

                img {
                    width: 73%;
                }
            }

            .partName {
                width: calc(100% - 74px);
                color: #fff;
                font-size: 20px;
                letter-spacing: -0.05em;
                text-align: center;
                font-weight: 700;
                line-height: 1.4;
            }
        }

        .line {
            width: 1px;
            height: 120px;

            .lineMotion {
                width: 100%;
                height: 0%;
                background-color: #1b1b1b;
                transition: height 1s;

                &.visible {
                    height: 100%;
                    transform: translate(0, 0);
                    opacity: 1;
                }
            }
        }

        .descBox {
            display: flex;
            flex-wrap: wrap;
            gap: 25px;
            justify-content: center;
            width: 100%;

            .name {
                display: flex;
                align-items: center;
                justify-content: center;
                width: calc(50% - 25px / 2);
                max-width: 142px;
                height: 50px;
                font-size: 18px;
                letter-spacing: -0.05em;
                background-color: #e8e8e8;
                border-radius: 26px;
                font-weight: 700;
                line-height: 1.4;
            }
        }
    @media (min-width: 769px) and (max-width: 1024px) {
        width: calc(100% / 3 - 100px / 3);
        .titleBox {
            width: 200px;
            height: 70px;
            .icon{
                width: 56px;
                height: 56px;
                margin-left: 8px;
            }
            .partName{
                width: calc(100% - 64px);
                font-size: 18px;
            }
        }
        .line{
            height: 90px !important;
        }
        .descBox{
           gap: 20px;
            .name{
                height: 46px;
                font-size: 16px;
                letter-spacing: -2px;
            }   
        }
    }

    @media (max-width: 850px) {
        width: calc(100% / 3 - 40px / 3);
        margin-top: 30px;
        .titleBox {
            width: 200px;
            height: 70px;
            .icon{
                width: 56px;
                height: 56px;
                margin-left: 8px;
            }
        }
        .line{
            height: 60px !important;
        }
        .descBox{
            gap: 10px;
            .name{
                width: calc(50% - 10px / 2);
                font-size: 15px;
            }   
        }
    }

    @media (max-width: 600px) {
        width: calc(100% / 2 - 20px / 2);
        gap: 8px;
        .titleBox {
            width: 170px;
            height: 58px;
            .icon{
                width: 48px;
                height: 48px;
                margin-left: 5px;
            }
            .partName{
                width: calc(100% - 53px);
                font-size: 16px;
            }
        }
        .line{
            height: 50px !important;
        }
        .descBox{
           gap: 10px;
            .name{
                height: 45px;
            }   
        }
    }

    @media (min-width: 481px) and (max-width: 768px) {
        width: calc(100%/2 - 20px/2);
        gap: 8px;
        .titleBox {
            width: 170px;
            height: 58px;
            .icon{
                width: 48px;
                height: 48px;
                margin-left: 5px;
            }
            .partName{
                width: calc(100% - 53px);
                font-size: 16px;
            }
        }
        .line{
            height: 50px !important;
        }
        .descBox{
           gap: 10px;
            .name{
                height: 45px;
            }   
        }
    }

    @media (max-width: 450px) {
        width: 90%;
        .titleBox {
            width: 155px;
            height: 52px;
            .icon{
                width: 42px;
                height: 42px;
            }
            .partName{
                width: calc(100% - 47px);
                font-size: 15px
            }
        }
        .descBox{
           gap: 10px;
            .name{
                height: 40px;
                font-size: 13px;
                letter-spacing: -0.1em;
            }   
        }
    }
`