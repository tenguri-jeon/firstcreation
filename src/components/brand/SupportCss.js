import styled from 'styled-components';

export const SupportWrap = styled.div`
    padding: 100px 0;
    box-sizing: border-box;

    .header {
        letter-spacing: -0.075em;
        font-size: 18px;
        line-height: 1.5;
    }

    h3 {
        margin-bottom: 20px;
        letter-spacing: -0.025em;
        font-size: 35px;
        line-height: 1.4;
        font-weight: 700;
    }

    .sub {
        font-size: 20px;
        line-height: 1.5;
        letter-spacing: -0.05em;

        @media (max-width: 480px) {
            font-size: 17px;
        }
        /* 태블릿 스타일 */
        @media (min-width: 481px) and (max-width: 768px) {
            font-size: 17px;
        }
        /* 소형 데스크톱 스타일 */
        @media (min-width: 769px) and (max-width: 1024px) {
            font-size: 18px;
        }
        /* 대형 데스크톱 스타일 */
        @media (min-width: 1025px) {
            font-size: 18px;
        }
    }
`;

export const ImgBoxWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 35px 0;

    .frame1,
    .frame2 {
        opacity: 0;
        transition: clip-path 1s, opacity 0.8s;
        transition: opacity 0.8s ease, transform 0.8s ease;

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            clip-path: inset(0 100% 0 0);
            transition: clip-path 1s ease;
        }

        &.visible {
            opacity: 1;
            transform: translate(0, 0);

            img {
                clip-path: inset(0 0 0 0);
            }
        }
    }

    .frame2 {
        margin-left: 50px;
        transition-delay: 0.3s;
    }
`;

export const DetailWrap = styled.div`
    h4 {
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        font-size: 22px;
        letter-spacing: -0.025em;
        font-weight: 700;
        line-height: 1.4;
        font-family: 'Lexend Deca', sans-serif;

        span {
            width: 100px;
            height: 1px;
            background-color: #111111;
            margin-right: 17px;
        }
    }

    ul {
        display: flex;
        justify-content: space-between;

        @media (max-width: 480px) {
            flex-wrap: wrap;
        }
        /* 태블릿 스타일 */
        @media (min-width: 481px) and (max-width: 768px) {
            flex-wrap: wrap;
        }
        /* 소형 데스크톱 스타일 */
        @media (min-width: 769px) and (max-width: 1024px) {
            flex-wrap: wrap;
        }

        li {
            width: calc(25% - 60px / 4);
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s, transform 0.5s;

            @media (max-width: 480px) {
                width: calc(50% - 10px);
                margin-top: 20px;
            }
            /* 태블릿 스타일 */
            @media (min-width: 481px) and (max-width: 768px) {
                width: calc(50% - 10px);
                margin-top: 20px;
            }
            /* 소형 데스크톱 스타일 */
            @media (min-width: 769px) and (max-width: 1024px) {
                width: calc(50% - 10px);
                margin-top: 20px;
            }

            &.visible {
                opacity: 1;
                transform: translateY(0);
            }

            .icon {
                width: 35px;
                margin-bottom: 25px;
            }
        }

        li:nth-child(2) {
            transition-delay: 0.2s;
        }
        li:nth-child(3) {
            transition-delay: 0.4s;
        }
        li:nth-child(4) {
            transition-delay: 0.6s;
        }

        .num {
            font-size: 22px;
            margin-bottom: 10px;
            font-weight: 600;
        }

        .txt {
            font-size: 16px;
            letter-spacing: -0.05em;
            line-height: 1.4;
        }
    }
`;
