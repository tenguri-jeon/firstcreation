import { styled } from 'styled-components';

export const Section04Container = styled.div`
    padding: 100px 0;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url('https://teamproject-dessert39.github.io/dataCenter/images/franchise/competitive_se04_bg.png');
    background-color: #191819;
    background-size: cover;
    background-position: 50% 100%;
    --swiper-theme-color: #fff;
    .inner {
        width: 95%;
        .title {
            text-align: center;
            margin-bottom: 40px;
            h3 {
                color: #ffb400;
                margin: 0 auto;
                width: fit-content;
                line-height: 1.4;
                font-size: 45px;
                font-weight: 700;
                position: relative;
                em {
                    display: block;
                    margin-bottom: 6px;
                    animation: blink 1s linear infinite;

                    @keyframes blink {
                        0%{
                            opacity: 0;
                        }
                        50%{
                            opacity: 1;
                            
                        }
                        100%{
                            opacity: 0;
                        }
                    }
                    span {
                        font-size: 62px;
                    }
                }
                & > span {
                    margin: 0 auto;
                    width: fit-content;
                    display: block;
                    color: #fff;
                    font-size: 42px;
                    position: relative;
                    background: linear-gradient(to top, #ffb400 20%, transparent 0%);
                }
            }
            p {
                margin-top: 12px;
                color: #00f9ff;
                font-weight: 500;
                font-size: 18px;
            }
        }
        .slide01 {
            margin: 0 70px 100px;
            .swiper {
                width: 100%;
                height: 100%;
            }
            .swiper-slide {
                width: 100%;
                height: 440px;
                border: 5px solid #ffb400;
                box-sizing: border-box;
                border-radius: 30px;
                text-align: center;
                padding: 30px 0;
                background-size: cover;
                .store {
                    width: 150px;
                    margin: auto;
                    p {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 42px;
                        border-radius: 8px;
                        font-size: 18px;
                        font-weight: 700;
                        background-color: #ffb400;
                    }
                }
                .txt {
                    margin-top: 16px;
                    p:first-of-type {
                        color: #ffb400;
                        font-size: 28px;
                        font-weight: 700;
                    }
                    strong {
                        line-height: 1.5;
                        color: #ffb400;
                        font-size: 60px;
                        font-weight: 700;
                        animation: blink 1s linear infinite;

                    @keyframes blink {
                        0%{
                            opacity: 0;
                        }
                        50%{
                            opacity: 1;
                            
                        }
                        100%{
                            opacity: 0;
                        }
                    }
                    }
                    p:last-of-type {
                        color: #fff;
                        font-size: 18px;
                        font-weight: 500;
                    }
                }
                .info {
                    position: absolute;
                    bottom: 30px;
                    left: 50%;
                    transform: translateX(-50%);
                    color: #fff;
                    p:first-child {
                        font-weight: 700;
                        font-size: 14px;
                        margin-bottom: 4px;
                    }
                }
            }
        }
        .sub_tit {
            word-break: keep-all;
            text-align: center;
            font-size: 22px;
            font-weight: 500;
            color: #fff;
            margin-bottom: 100px;
            padding: 0 30px;
        }
        .slide02 {
            margin: 0 70px 65px;
            position: relative;
            .swiper {
                width: 100%;
                height: 100%;
                position: relative;
            }
            .swiper-slide {
                width: 100%;
                height: 340px;
                border: 5px solid #ffb400;
                box-sizing: border-box;
                border-radius: 30px;
                text-align: center;
                padding: 25px 0;
                background-size: cover;
                .store {
                    margin: auto;
                    width: fit-content;
                    p {
                        padding: 5px 15px;
                        border-radius: 8px;
                        font-size: 15px;
                        font-weight: 700;
                        background-color: #ffb400;
                    }
                }
                .txt {
                    margin-top: 16px;
                    p:first-of-type {
                        color: #ffb400;
                        font-size: 20px;
                        font-weight: 700;
                    }
                    strong {
                        color: #ffb400;
                        font-size: 38px;
                        font-weight: 700;
                    }
                    p:last-of-type {
                        margin-top: 4px;
                        color: #fff;
                        font-size: 16px;
                        font-weight: 500;
                    }
                }
                .info {
                    width: 100%;
                    position: absolute;
                    bottom: 25px;
                    left: 50%;
                    transform: translateX(-50%);
                    color: #fff;
                    font-size: 14px;
                    p:first-child {
                        font-weight: 700;
                        margin-bottom: 4px;
                    }
                }
            }
            .swiper-button-prev {
                position: absolute;
                top: 55%;
                left: -50px;
                background-color: transparent;
                border: none;
                transform: translateY(-50%);
            }
            .swiper-button-next {
                position: absolute;
                top: 55%;
                right: -50px;
                background-color: transparent;
                border: none;
                transform: translateY(-50%);
            }
        }
    }

    /* 대형 데스크톱 스타일 */
    @media (min-width: 1025px) and (max-width: 1440px) {
        .inner {
            .slide01 {
                .swiper-slide {
                    height: 410px;
                    .store {
                        width: 140px;
                        p {
                            height: 38px;
                            font-size: 17px;
                        }
                    }
                    .txt {
                        p:first-of-type {
                            font-size: 26px;
                        }
                        strong {
                            font-size: 50px;
                        }
                        p:last-of-type {
                            font-size: 17px;
                        }
                    }
                    .info {
                        font-size: 15px;
                    }
                }
            }
            .sub_tit {
                font-size: 20px;
            }
            .slide02 {
                margin: 0 70px 60px;
                .swiper-slide {
                    height: 325px;
                    .store {
                        p {
                            padding: 2px 10px;
                            font-size: 14px;
                        }
                    }
                    .txt {
                        p:first-of-type {
                            font-size: 18px;
                        }
                        strong {
                            font-size: 32px;
                        }
                        p:last-of-type {
                            font-size: 15px;
                        }
                    }
                    .info {
                        font-size: 13px;
                        p:first-child {
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (min-width: 769px) and (max-width: 1024px) {
        padding: 80px 0;
        .inner {
            .title {
                text-align: center;
                margin-bottom: 50px;
                h3 {
                    line-height: 1.2;
                    font-size: 36px;
                    & > span {
                        font-size: 36px;
                        letter-spacing: -0.5px;
                    }
                }
                p {
                    font-size: 18px;
                }
            }
            .slide01 {
                margin: 0 40px 80px;
                .swiper-slide {
                    height: 400px;
                    .store {
                        width: 140px;
                        p {
                            height: 36px;
                            font-size: 16px;
                        }
                    }
                    .txt {
                        p:first-of-type {
                            font-size: 26px;
                        }
                        strong {
                            line-height: 1.5;
                            font-size: 46px;
                        }
                        p:last-of-type {
                            font-size: 16px;
                        }
                    }
                    .info {
                        font-size: 15px;
                        width: 100%;
                        p:first-child {
                            font-size: 14px;
                        }
                    }
                }
            }
            .sub_tit {
                font-size: 18px;
                margin-bottom: 80px;
            }
            .slide02 {
                margin: 0 40px 60px;
                .swiper-slide {
                    height: 325px;
                    padding: 25px 0;
                    .store {
                        margin: auto;
                        width: fit-content;
                        p {
                            padding: 2px 10px;
                            border-radius: 8px;
                            font-size: 14px;
                        }
                    }
                    .txt {
                        p:first-of-type {
                            font-size: 18px;
                        }
                        strong {
                            display: block;
                            padding: 0 20px;
                            font-size: 32px;
                            line-height: 1.3;
                            margin: 6px 0 10px;
                            word-break: keep-all;
                        }
                        p:last-of-type {
                            margin-top: 4px;
                            font-size: 15px;
                        }
                    }
                    .info {
                        width: 100%;
                        font-size: 13px;
                        p:first-child {
                            font-size: 13px;
                            margin-bottom: 4px;
                        }
                    }
                }
                .swiper-button-prev {
                    left: -40px;
                }
                .swiper-button-next {
                    right: -40px;
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (min-width: 601px) and (max-width: 768px) {
        /* 스타일 코드 */
        padding: 50px 0;
        .inner {
            .title {
                text-align: center;
                margin-bottom: 50px;
                h3 {
                    line-height: 1.2;
                    font-size: 26px;
                    & > span {
                        font-size: 26px;
                        letter-spacing: -1px;
                    }
                }
                p {
                    font-size: 16px;
                }
            }

            .slide01 {
                margin: 0 40px 50px;
                .swiper-slide {
                    height: 380px;
                    .store {
                        width: 120px;
                        margin: auto;
                        p {
                            height: 34px;
                            border-radius: 8px;
                            font-size: 15px;
                        }
                    }
                    .txt {
                        p:first-of-type {
                            font-size: 24px;
                        }
                        strong {
                            line-height: 1.5;
                            font-size: 45px;
                        }
                        p:last-of-type {
                            font-size: 16px;
                        }
                    }
                    .info {
                        font-size: 14px;
                        width: 100%;
                        p:first-child {
                            font-size: 14px;
                            margin-bottom: 4px;
                        }
                    }
                }
            }
            .sub_tit {
                font-size: 17px;
                margin-bottom: 50px;
            }
            .slide02 {
                margin: 0 50px 50px;
                .swiper-slide {
                    height: 300px;
                    padding: 25px 0;
                    .store {
                        margin: auto;
                        width: fit-content;
                        p {
                            padding: 2px 8px;
                            border-radius: 8px;
                            font-size: 13px;
                        }
                    }
                    .txt {
                        p:first-of-type {
                            font-size: 18px;
                        }
                        strong {
                            display: block;
                            padding: 0 20px;
                            font-size: 32px;
                            line-height: 1.2;
                            margin: 4px 0 10px;
                            word-break: keep-all;
                        }
                        p:last-of-type {
                            margin-top: 4px;
                            font-size: 14px;
                        }
                    }
                    .info {
                        width: 100%;
                        font-size: 12px;
                        p:first-child {
                            line-height: 1;
                            font-size: 13px;
                            margin-bottom: 4px;
                        }
                    }
                }
                .swiper-button-prev {
                    left: -50px;
                }
                .swiper-button-next {
                    right: -50px;
                }
            }
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 600px) {
        /* 스타일 코드 */
        padding: 50px 0;
        .inner {
            .title {
                text-align: center;
                margin-bottom: 50px;
                h3 {
                    line-height: 1.2;
                    font-size: 26px;
                    & > span {
                        font-size: 26px;
                        letter-spacing: -1px;
                    }
                }
                p {
                    font-size: 16px;
                }
            }

            .slide01 {
                margin: 0 40px 50px;
                .swiper-slide {
                    height: 340px;
                    border-radius: 26px;
                    .store {
                        width: 100px;
                        margin: auto;
                        p {
                            height: 30px;
                            border-radius: 8px;
                            font-size: 15px;
                        }
                    }
                    .txt {
                        p:first-of-type {
                            font-size: 22px;
                        }
                        strong {
                            display: block;
                            line-height: 1.5;
                            font-size: 40px;
                            margin-bottom: 3px;
                        }
                        p:last-of-type {
                            font-size: 15px;
                        }
                    }
                    .info {
                        font-size: 13px;
                        width: 100%;
                        p:first-child {
                            font-size: 13px;
                            margin-bottom: 4px;
                        }
                    }
                }
            }
            .sub_tit {
                font-size: 17px;
                margin-bottom: 50px;
            }
            .slide02 {
                margin: 0 50px 35px;
                .swiper-slide {
                    height: 260px;
                    border: 3px solid #ffb400;
                    border-radius: 20px;
                    padding: 25px 0;
                    .store {
                        margin: auto;
                        width: fit-content;
                        p {
                            padding: 2px 8px;
                            border-radius: 8px;
                            font-size: 12px;
                        }
                    }
                    .txt {
                        p:first-of-type {
                            font-size: 14px;
                        }
                        strong {
                            display: block;
                            padding: 0 20px;
                            font-size: 22px;
                            line-height: 1.2;
                            margin: 2px 0 8px;
                            word-break: keep-all;
                        }
                        p:last-of-type {
                            margin-top: 4px;
                            font-size: 12px;
                        }
                    }
                    .info {
                        width: 100%;
                        bottom: 25px;
                        font-size: 11px;
                        p:first-child {
                            line-height: 1;
                            font-size: 11px;
                            margin-bottom: 4px;
                        }
                    }
                }
                .swiper-button-prev {
                    left: -40px;
                }
                .swiper-button-next {
                    right: -40px;
                }
            }
        }
    }
`;