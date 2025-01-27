import styled from 'styled-components';

export const Inner = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    box-sizing: border-box;
    position: relative;
    
    padding: 0 20px;
`;

export const BiWrap = styled.div`
    position: relative;
    padding: 0 75px;
    margin-top: 120px;
    box-sizing: border-box;

    .center {
        margin: 0 auto;
        width: 95%;
        max-width: 1440px;
    }

    .cover {
        display: flex;
        align-items: center;
        gap: 75px;

        .left {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 606px;
            width: 55%;
            height: 532px;
            margin-top: 50px;
            border: 2px solid #1b1b1b;
            box-sizing: border-box;
            border-top-right-radius: 266px;
            border-bottom-right-radius: 266px;

            .frame {
                width: 40%;
                max-width: 220px;

                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }

            .point {
                position: absolute;
                top: -50px;
                left: -75px;
                width: 145px;
                height: 530px;
                background-image: url('https://github.com/TeamProject-Dessert39/dataCenter/blob/master/images/brand/orora_bg.png?raw=true');
                background-size: cover;
                background-repeat: no-repeat;

                p {
                    width: 300px;
                    color: #fff;
                    font-weight: 500;
                    font-size: 25px;
                    line-height: 1;
                    letter-spacing: 0.1em;
                    transform: rotate(90deg);
                    margin-top: 160px;
                    margin-left: -40px;
                    font-family: 'Lexend Deca', sans-serif;
                }
            }
        }

        .right {
            width: 45%;

            h3 {
                font-size: 42px;
                letter-spacing: -0.025em;
                line-height: 1.3;
                margin-bottom: 80px;
                word-break: keep-all;
                font-weight: 600;
                font-family: 'Lexend Deca', sans-serif;
                transform: translate(0, 70px);
                transition: transform 1s, opacity 1s;
                opacity: 0;

                &.visible {
                    transform: translate(0, 0);
                    opacity: 1;
                }
            }
            .txt1 {
                font-size: 24px;
                letter-spacing: -0.05em;
                line-height: 1.3;
                margin-bottom: 30px;
                font-weight: 700;
                transform: translate(0, 70px);
                transition: transform 1s, opacity 1s;
                transition-delay: 0.4s;
                opacity: 0;
                word-break: keep-all;

                &.visible {
                    transform: translate(0, 0);
                    opacity: 1;
                }
            }

            .txt2 {
                font-size: 18px;
                letter-spacing: -0.05em;
                line-height: 1.5;
                transform: translate(0, 70px);
                transition: transform 1s, opacity 1s;
                transition-delay: 0.7s;
                word-break: keep-all;
                opacity: 0;

                &.visible {
                    transform: translate(0, 0);
                    opacity: 1;
                }
            }
        }
    }

    .logo {
        width: 100%;
        flex-direction: column;
        display: flex;
        justify-content: space-between;
        margin-top: 100px;
        padding-bottom: 100px;
        box-sizing: border-box;

        .logoWrap {
            margin-right: 20px;
            width: 100%;
            max-width: 100%;

            h4 {
                font-size: 26px;
                letter-spacing: -0.025em;
                margin-bottom: 15px;
                font-weight: 500;
                font-family: 'Lexend Deca', sans-serif;
            }

            .logoBox {
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                width: 100%;
                height: 213px;
                border: 1px solid #1b1b1b;

                img {
                    width: 100%;
                    max-width: 220px;
                    font-family: 'Noto Sans KR', sans-serif;
                }

                .bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: url('https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/e6e059fd7913f602bbabdc4bfcf83fd47cdf7763/images/brand/patten_bg.svg');
                    background-size: cover;
                    background-repeat: no-repeat;
                    opacity: 0.2;
                    z-index: -1;
                    font-family: 'Noto Sans KR', sans-serif;
                }
            }
        }
    }

    @media (max-width: 1200px) {
        .cover {
            gap: 65px;
            .left {
                height: 460px;
                .point {
                    width: 130px;
                    height: 450px;
                    p {
                        margin-left: -55px;
                    }
                }
            }
            .right {
                h3 {
                    margin-bottom: 50px;
                }
                p {
                    .pc {
                        display: none;
                    }
                }
            }
        }
    }

    @media (max-width: 1024px) {
        padding: 0 56px;
        margin-top: 80px;

        .cover {
            gap: 40px;
            .left {
                max-width: 500px;
                height: 380px;
                margin-top: 35px;
                .point {
                    top: -55px;
                    left: -55px;
                    width: 100px;
                    height: 380px;
                    p {
                        margin-left: -80px;
                    }
                }
            }
            .right {
                h3 {
                    margin-bottom: 30px;
                    font-size: 38px;
                }
                p {
                    .pc {
                        display: none;
                    }
                }
                .txt1 {
                    font-size: 20px;
                }
                .txt2 {
                    font-size: 17px;
                }
            }
        }
        .logo {
            margin-top: 100px;
            padding-bottom: 70px;
        }
    }

    @media (max-width: 850px) {
        padding: 0 30px;
        margin-top: 50px;

        .cover {
            gap: unset;
            .left {
                max-width: 420px;
                height: 340px;
                margin-right: 40px;
                .point {
                    top: -40px;
                    left: -30px;
                    width: 80px;
                    height: 330px;
                    p {
                        margin-left: -88px;
                        font-size: 20px;
                    }
                }
            }
            .right {
                h3 {
                    margin-bottom: 15px;
                    font-size: 32px;
                }
                p {
                    .pc {
                        display: none;
                    }
                }
                .txt1 {
                    font-size: 18px;
                    margin-bottom: 15px;
                }
                .txt2 {
                    font-size: 15px;
                }
            }
        }

        .logo {
            margin-top: 80px;
            padding-bottom: 70px;
            .logoWrap {
                h4 {
                    font-size: 22px;
                }
            }
        }
    }

    @media (max-width: 700px) {
        .cover {
            flex-direction: column;
            align-items: flex-start;
            .left {
                width: 100%;
                margin-bottom: 25px;
            }
            .right {
                width: 100%;
                h3 {
                    font-size: 40px;
                }
                p {
                    .pc {
                        display: block;
                    }
                }
                .txt1 {
                    font-size: 20px;
                }
                .txt2 {
                    font-size: 17px;
                }
            }
        }
    }

    @media (max-width: 650px) {
        .logo {
            margin-top: 50px;
            padding-bottom: 50px;
            .logoWrap {
                h4 {
                    margin-bottom: 10px;
                }
            }
        }
    }

    @media (max-width: 480px) {
        margin-top: 50px;
        padding-bottom: 50px;

        .cover {
            flex-direction: column;
            align-items: flex-start;
            .left {
                margin-right: 0;
                height: 280px;
                margin-top: 20px;
                .point {
                    left: -20px;
                    top: -25px;
                    width: 70px;
                    height: 260px;
                    p {
                        margin-top: 155px;
                        margin-left: -100px;
                        font-size: 18px;
                    }
                }
            }
            .right {
                width: 100%;
                h3 {
                    font-size: 30px;
                }
                p {
                    .pc {
                        display: block;
                    }
                }
                .txt1 {
                    font-size: 18px;
                }
                .txt2 {
                    font-size: 16px;
                }
            }
        }

        .logo {
            .logoWrap {
                h4 {
                    font-size: 20px;
                }
                .logoBox {
                    height: 160px;
                    img {
                        width: 180px;
                    }
                }
            }
        }
    }
`;

export const HQWrap = styled.div`
    box-sizing: border-box;

    .center {
        max-width: 1440px;
    }

    .cover {
        .bg {
            width: 100%;
            height: 260px;
            background-image: url('https://github.com/TeamProject-Dessert39/dataCenter/blob/master/images/brand/orora_bg_1440.png?raw=true');
            background-size: cover;
        }

        .txtWrap {
            width: 95%;
            max-width: 1290px;
            margin: -80px auto 0;
            padding-bottom: 100px;
            box-sizing: border-box;

            h3 {
                font-size: 40px;
                letter-spacing: -0.06em;
                line-height: 1.3;
                margin-bottom: 60px;
                font-weight: 700;
                text-align: left;
                transform: translate(-70px, 0);
                transition: transform 1s, opacity 1s;
                opacity: 0;

                &.visible {
                    transform: translate(0, 0);
                    opacity: 1;
                }
            }

            .titleBox {
                display: flex;
                align-items: flex-end;
                gap: 30px;
                margin-bottom: 35px;

                p {
                    width: calc(50% - 15px);
                    font-size: 22px;
                    letter-spacing: 0.01em;
                    font-weight: 600;
                    font-family: 'Lexend Deca', sans-serif;

                    span {
                        color: #96dad8;
                    }
                }

                .line {
                    width: 77px;
                    height: 2px;
                    background-color: #bad6f8;
                }
            }

            .descBox {
                display: flex;
                font-size: 16px;
                gap: 30px;

                .leftTxt {
                    line-height: 1.4;
                    width: calc(50% - 15px);
                }

                .partiction {
                    display: none;
                }

                .rightTxt {
                    width: calc(50% - 15px);

                    .rightTxt1 {
                        margin-bottom: 55px;
                        line-height: 1.4;
                    }

                    .topline-mo{
                        display: none;
                    }

                    .rightTxt2 {
                        line-height: 1.4;
                    }
                }
            }
        }
    }

    @media (max-width : 1024px) {
        .cover {
            .bg{
                height: 220px;
            }
            .txtWrap{
                margin-top: -70px;
                h3{
                    font-size: 36px;
                    margin-bottom: 40px;
                }
                .titleBox{
                    margin-bottom: 25px;
                    p{
                        font-size: 20px;
                    }
                }
                .descBox{
                    br{
                        display: none;
                    }
                    font-size: 15px;
                    .rightTxt{
                        .rightTxt1{
                            margin-bottom: 30px;
                        }
                    }
                }
            }
        }
    }
    @media (max-width : 850px) {
        .cover {
            .bg{
                height: 180px;
            }
            .txtWrap{
                margin-top: -60px;
                h3{
                    font-size: 32px;
                }
                .titleBox{
                    margin-bottom: 25px;
                }
                .descBox{
                    font-size: 15px;
                    .rightTxt{
                        .rightTxt1{
                            margin-bottom: 20px;
                        }
                    }
                }
            }
        }
    }
    @media (max-width : 600px) {
        .cover {
            .bg{
                height: 150px;
            }
            .txtWrap{
                margin-top: -50px;
                h3{
                    font-size: 28px;
                    margin-bottom: 30px;
                }
                .titleBox{
                    margin-bottom: 20px;
                    p{
                        font-size: 18px;
                        width: 100px;
                    }
                    .line{
                        display: none;
                    }
                }
                .descBox{
                    flex-direction: column;
                    gap: 20px;
                    .leftTxt{
                        width: 100%;
                    }
                    .rightTxt{
                        .topline-mo{
                            display: block;
                            width: 55px;
                            height: 2px;
                            background-color: #bad6f8;
                            margin-top: 20px;
                            margin-bottom: 20px;
                        }
                        width: 100%;
                        .rightTxt1{
                            margin-bottom: 20px;
                        }
                    }
                }
            }
        }
    }
`;

export const LocationWrap = styled.div`
    padding-top: 120px;
    padding-bottom: 100px;
    box-sizing: border-box;
    width: 95%;
    max-width: 1440px;
    margin: 0 auto;

        /* 대형 데스크톱 스타일 */
        @media (max-width: 1440px) {
            padding-top: 80px;
        }

        /* 소형 데스크톱 스타일 */
        @media (max-width: 1024px) {
            padding-top: 60px;
        }

        /* 태블릿 스타일 */
        @media (max-width: 768px) {
            padding-top: 40px;
        }

        /* 모바일 스타일 */
        @media (max-width: 480px) {
            padding-top: 20px;
        }

    .topBox {
        display: flex;
        align-items: center;

        @media (max-width: 1024px) {
	        flex-direction: column;
            align-items: flex-start;
        }

        .title {
            font-size: 45px;
            margin-right: 120px;
            z-index: 1;
            position: relative;
            letter-spacing: -2px;
            font-weight: 700;
            line-height: 1.4;
            text-align: center;

            @media (max-width: 1440px) {
                margin-right: 50px;
            }

            @media (max-width: 1024px) {
                font-size: 42px;
            }

            @media (max-width: 768px) {
                font-size: 38px;
            }

            @media (max-width: 480px) {
                font-size: 28px;
            }

            span {
                position: relative;

                &::before {
                    content: '';
                    z-index: -1;
                    position: absolute;
                    left: 0;
                    bottom: 5px;
                    display: block;
                    width: 100%;
                    height: 20%;
                    background-color: #c0c0c0;
                    -webkit-transform: scaleX(1.03);
                    transform: scaleX(1.03);
                    opacity: 0.3;
                }
            }
        }

        .contactList {
            display: flex;

            @media (max-width: 768px) {
                flex-direction: column;
                align-items: flex-start;
                padding: 20px 0;
            }

            .contactWrap {
                margin-left: 50px;
                display: flex;
                align-items: center;

                @media (max-width: 1024px) {
                    margin-right: 20px;
                    margin-left: 0;
                }

                @media (max-width: 768px) {
                    padding: 15px 0;
                }

                :nth-child(1) {
                    margin-left: 0;
                }

                .icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 55px;
                    height: 55px;
                    background-color: #dfdfdf;
                    border-radius: 50%;
                    margin-right: 15px;

                    img {
                        width: 60%;
                    }
                }

                .txtBox {
                    h3 {
                        font-size: 30px;
                        letter-spacing: -0.025em;
                        margin-bottom: 8px;
                        font-weight: 600;
                        font-family: 'Lexend Deca', sans-serif;

                        @media (max-width: 1024px) {
                            font-size: 28px;
                        }

                        @media (max-width: 768px) {
                            font-size: 22px;
                        }

                        @media (max-width: 480px) {
                            font-size: 18px;
                        }
                    }

                    p {
                        font-size: 18px;
                        letter-spacing: -0.025em;
                        line-height: 1.3;

                        @media (max-width: 1024px) {
                            font-size: 17px;
                        }

                        @media (max-width: 768px) {
                            font-size: 16px;
                        }

                        @media (max-width: 480px) {
                            font-size: 14px;
                        }
                    }
                }

                a {
                    display: flex;
                    align-items: center;
                }
            }
        }
    }
`;

export const MapWrap = styled.div`
    width: 100%;
    margin-top: 50px;
    height: 470px;
`;
