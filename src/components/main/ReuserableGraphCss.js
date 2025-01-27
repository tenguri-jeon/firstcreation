import styled from 'styled-components';

export const ReuserableGraphWrap = styled.div``;

export const CenterCommentWrap = styled.div`
    padding-top: 100px;
    text-align: center;
    line-height: 1.4;
    margin-bottom: 25px;
    font-weight: 700;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media (max-width: 1024px) {
        padding-top: 0;
    }

    @keyframes fadeInOut {
        0%,
        100% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
    }

    .top {
        font-size: 20px;
        padding: 12px 25px;
        border-radius: 25px;
        background: rgb(50, 184, 164);
        background: linear-gradient(36deg, rgba(50, 184, 164, 1) 0%, rgba(144, 235, 168, 1) 100%);
        color: #fff;
        line-height: 1.4;
        animation: fadeInOut 0.9s ease-in-out infinite;
    }

    .mid {
        margin-bottom: 5px;
        font-size: 30px;
        line-height: 1.4;
    }

    .midSub {
        color: #05d2b2;
        font-weight: 600;
    }
`;

export const GraphWrap = styled.div`
    display: flex;
    justify-content: center;

    .recharts-wrapper {
        @media (max-width: 1024px) {
            height: 500px !important;
        }
    }
`;

export const ChartTitleWrap = styled.div`
    text-align: center;
    color: #05d2b2;
    font-size: 1.3rem;
    margin: 15px 0;
    font-weight: bold;
`;
