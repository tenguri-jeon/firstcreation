import { styled } from 'styled-components';


export const Section01Container = styled.div`
    .pc {
        display: block;
    }
    .mo {
        display: none;
    }
    .inner {
        padding: 70px 0 100px;
        width: 95%;
        .box {
            width: 95%;
            margin: 0 auto;
            text-align: center;
            img {
                width: 100%;
            }
        }
    }

    /* 대형 데스크톱 스타일 */
    @media (max-width: 1440px) {
        .inner {
            padding: 60px 0 100px;
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (max-width: 1024px) {
        .inner {
            padding: 40px 0 80px;
        }
    }

    /* 태블릿 스타일 */
    @media (max-width: 768px) {
        .pc {
            display: none;
        }
        .mo {
            display: block;
        }
        .inner {
            padding: 20px 0 60px;
        }
    }

    /* 모바일 스타일 */
    @media (max-width: 480px) {
        .inner {
            padding: 20px 0 40px;
        }
    }
`;