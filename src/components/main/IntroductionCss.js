import styled from 'styled-components';

export const IntroductionWrap = styled.div`
    .inner {
        display: flex;
        justify-content: center;
        padding: 100px 0 100px 0;

        h3 {
            font-size: 35px;
            font-weight: 600;
        }

        p {
            font-size: 20px;
            font-weight: 400;
            padding: 15px 0;

            span {
                font-weight: 700;
            }
        }

        .btnDiv {
            padding: 0 0 20px 0;
        }
    }
`;

export const TitleWrap = styled.div`
    padding: 20px 0 20px 0;
    font-size: 60px;
    font-weight: 600;
    text-align: center;
    font-family: 'Lexend Deca', sans-serif;
`;

export const LeftSide = styled.div`
    padding: 0 50px 0 50px;
    border-right: 1px solid #d3d3d2;

    @media (max-width: 1024px) {
        padding: 0 40px;
        height: 430px;
    }

    h3 {
        font-family: 'Lexend Deca', sans-serif;
    }

    .location {
        width: 600px;
        height: 400px;
        border-radius: 50px 5px 5px 5px;

        @media (max-width: 1440px) {
            width: 400px;
            height: 310px;
        }

        @media (max-width: 1024px) {
            width: 100%;
            height: 280px;
        }
    }
`;

export const RightSide = styled.div`
    padding: 0 50px 0 50px;

    @media (max-width: 1024px) {
        padding: 0 40px;
        height: 430px;
    }

    h3 {
        font-family: 'Lexend Deca', sans-serif;
    }

    .location {
        width: 600px;
        height: 400px;
        border-radius: 5px 5px 50px 5px;

        @media (max-width: 1440px) {
            width: 400px;
            height: 310px;
        }

        @media (max-width: 1024px) {
            width: 100%;
            height: 280px;
        }
    }
`;
