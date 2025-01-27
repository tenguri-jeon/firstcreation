import styled from 'styled-components';

export const NewStoreListWrap = styled.div`
    background-color: #242424;
    color: white;
    display: flex;
    margin: 0 0 100px 0;
`;

export const NewStoreLeft = styled.div`
    line-height: 100%;
    letter-spacing: -1.5px;
    width: 27%;
    font-size: 35px;
    padding: 20px 0 20px 250px;
    font-family: 'Lexend Deca', sans-serif;

    @media (max-width: 1440px) {
        padding: 20px 0 20px 20px;
        width: 24%;
    }

    @media (max-width: 1024px) {
        padding: 20px 0 20px 20px;
        width: 26%;
        font-size: 30px;
    }

    span {
        font-weight: 700;
    }
`;

export const NewStoreRight = styled.div`
    width: 65%;
    height: 100%;
    font-size: 18px;

    @media (max-width: 1440px) {
        width: 73%;
    }

    @media (max-width: 1024px) {
        width: 70%;
    }

    span {
        font-weight: 700;
    }

    .topComment {
        height: 35%;
        padding: 20px 0 10px 0;
    }
`;

export const NewStoreSliderWrap = styled.div`
    width: 100%;
    height: 65%;
    font-size: 18px;
    font-weight: 500;

    .swiper-container {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        width: auto !important; // 슬라이드의 너비를 내용에 맞게 조정
        padding: 0 20px; // 좌우 패딩 추가
        margin: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        background-color: white;
        color: black;
        border-radius: 25px;
        user-select: none;
    }

    .slide-content {
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 150px; // 최대 너비 설정, 필요에 따라 조정
    }
`;
