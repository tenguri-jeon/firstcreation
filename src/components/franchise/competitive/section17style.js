import { styled } from 'styled-components';

export const Section17Container = styled.div`
    padding: 100px 0;
    background-color: #f5f5f5;
    .inner {
        width: 95%;
        .txt {
            text-align: center;
            margin-bottom: 70px;
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
                margin-top: 25px;
                font-size: 20px;
                letter-spacing: -1px;
            }
        }
    }
    .slide {
        .swiper-slide {
            /* width: 440px; */
            max-width: 440px;
            width: 30.556vw;
            max-height: 300px;
            height: 20.833vw;
            position: relative;
            overflow: inherit;
            .pic {
                width: 100%;
                max-height: 250px;
                height: 17.361vw;
                overflow: hidden;
                img {
                    width: 100%;
                }
            }
            p {
                transition: 0.3s;
                position: absolute;
                bottom: -65px;
                left: 0;
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #fff;
                background-color: rgba(0, 0, 0, 0.5);
                padding: 15px 20px;
                box-sizing: border-box;
                font-size: 20px;
                span:last-child {
                    font-size: 18px;
                }
            }
            &:hover,
            &.swiper-slide-active {
                p {
                    bottom: 0;
                }
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (max-width: 1024px) {
        padding: 80px 0;
        .inner {
            .txt {
                margin-bottom: 40px;
                h3 {
                    font-size: 36px;
                }
                p {
                    margin-top: 22px;
                    font-size: 18px;
                }
            }
        }
        .slide {
            .swiper-slide {
                width: 330px;
                height: 225px;
                .pic {
                    height: 180px;
                }
                p {
                    font-size: 17px;
                    padding: 12px 15px;
                    span:last-child {
                        font-size: 16px;
                        letter-spacing: -1px;
                    }
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (max-width: 768px) {
        padding: 60px 0;
        .inner {
            .txt {
                margin-bottom: 35px;
                h3 {
                    font-size: 30px;
                }
                p {
                    margin-top: 20px;
                    font-size: 17px;
                }
            }
        }
        .slide {
            .swiper-slide {
                width: 330px;
                height: 220px;
                .pic {
                    height: 180px;
                }
                p {
                    font-size: 16px;
                    padding: 10px 15px;
                    span:last-child {
                        font-size: 15px;
                    }
                }
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 480px) {
        padding: 50px 0;
        .inner {
            .txt {
                margin-bottom: 28px;
                h3 {
                    font-size: 26px;
                }
                p {
                    margin-top: 16px;
                    font-size: 16px;
                }
            }
        }
        .slide {
            .swiper-slide {
                width: 240px;
                height: 170px;
                .pic {
                    height: 140px;
                }
                p {
                    font-size: 14px;
                    padding: 8px 12px;
                    span:last-child {
                        font-size: 12px;
                    }
                }
            }
        }
    }
`;