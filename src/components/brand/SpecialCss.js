import styled from 'styled-components';

export const SpecialWrap = styled.div`
    padding: 100px 0;
    box-sizing: border-box;

    h3 {
        font-size: 35px;
        margin-bottom: 55px;
        letter-spacing: -0.075em;

        @media (max-width: 480px) {
            font-size: 24px;
        }
        /* 태블릿 스타일 */
        @media (min-width: 481px) and (max-width: 768px) {
            font-size: 28px;
        }
        /* 소형 데스크톱 스타일 */
        @media (min-width: 769px) and (max-width: 1024px) {
            font-size: 32px;
        }
        /* 대형 데스크톱 스타일 */
        @media (min-width: 1025px) {
            font-size: 32px;
        }

        b {
            font-weight: bold;
        }
    }

    p {
        font-size: 18px;
        line-height: 1.5;
        letter-spacing: -0.05em;
        margin-bottom: 25px;

        @media (max-width: 480px) {
            font-size: 16px;
        }
        /* 태블릿 스타일 */
        @media (min-width: 481px) and (max-width: 768px) {
            font-size: 16px;
        }
        /* 소형 데스크톱 스타일 */
        @media (min-width: 769px) and (max-width: 1024px) {
            font-size: 17px;
        }
        /* 대형 데스크톱 스타일 */
        @media (min-width: 1025px) {
            font-size: 18px;
        }
    }

    .image-container {
        width: 100%;
        height: auto;
        opacity: 0;
        transition: opacity 0.8s ease;

        img {
            display: block;
            width: 100%;
            height: auto;
            object-fit: cover;
            clip-path: inset(0 100% 0 0);
            transition: clip-path 1s ease;

            @media (max-width: 480px) {
                height: 260px;
            }
            /* 태블릿 스타일 */
            @media (min-width: 481px) and (max-width: 768px) {
                height: 320px;
            }
        }

        &.visible {
            opacity: 1;

            img {
                clip-path: inset(0 0 0 0);
            }
        }
    }
`;
