import styled from 'styled-components';

export const StoreInteriorWrap = styled.div`
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1440px) {
        margin: 0 auto;
        width: 95%;
        justify-content: space-around;
    }

    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
    }

    .mo {
        font-size: 60px;
        font-weight: 600;
        margin-bottom: 30px;
        font-family: 'Lexend Deca', sans-serif;
        display: none;
        @media (max-width: 1024px) {
            display: block;
        }
    }

    .swiper {
        display: flex;
        width: 540px;
        height: 540px;

        @media (max-width: 1440px) {
            width: 430px;
            height: 430px;
        }
    }

    .swiper-slide {
        @media (max-width: 1440px) {
            width: 430px !important;
            height: 430px !important;
        }
    }

    .swiper-slide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-top-left-radius: 50%;
        border-top-right-radius: 50%;
    }
`;

export const TitleWrap = styled.div`
    font-size: 60px;
    font-weight: 600;
    margin-bottom: 30px;
    font-family: 'Lexend Deca', sans-serif;
    display: block;

    @media (max-width: 1024px) {
        display: none;
    }

    @media (max-width: 1024px) {
        text-align: center;
        margin-bottom: 70px;
    }
`;

export const LeftSide = styled.div`
    width: 540px;
    margin: 0 180px 0 0;

    @media (max-width: 1440px) {
        width: 430px;
        height: 430px;
        margin: 0;
    }

    @media (max-width: 1024px) {
        margin: 0;
    }

    .inner {
        width: 100%;
        height: 100%;
    }
`;

export const RightSide = styled.div`
    width: 540px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1440px) {
        width: 430px;
        height: 430px;
    }

    @media (max-width: 1024px) {
        padding-top: 40px;
    }

    .silderInfo {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 30px;

        .logo {
            width: 140px;
            height: 210px;
            margin: 0 150px 0 0;

            @media (max-width: 1440px) {
                margin: 0;
            }
        }
    }

    .mo {
        margin-top: 40px;
    }
`;

export const ControllBox = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    font-size: 30px;

    button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 50px;
        line-height: 0;
    }
`;
