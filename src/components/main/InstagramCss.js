import styled from 'styled-components';

export const InstagramWrap = styled.div`
    width: 95%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 0 100px 0;

    .instagramInner {
        display: flex;
        justify-content: space-between;
    }
`

export const TitleWrap = styled.div`
    font-size: 60px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 50px;
    font-family: 'Lexend Deca', sans-serif;
`

export const LeftSide = styled.div`
    flex: 0 0 225px; // flex-grow: 0, flex-shrink: 0, flex-basis: 225px
    width: 225px;
    height: 225px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Lexend Deca', sans-serif;

    .svg {
        width: 50px;
        height: 75px;
    }

    .btnPadding {
        padding: 30px 0 0 0;
    }
`

export const RightSide = styled.div`
    flex: 1;
    min-width: 0; // flex item이 자신의 내용물의 최소 크기 이하로 줄어들 수 있도록 처리
    margin-left: 50px; // LeftSide와의 간격
`

export const InstagramSliderWrap = styled.div`
    width: 100%;
    height: 225px;
    position: relative;

    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        width: 225px !important;
        height: 225px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 50px !important;
    }

    .swiper-slide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        user-select: none;
    }

    .swiper-pagination {
        position: absolute;
        top: 98%;
        left: 0;
        width: 100%;
    }

    .swiper-pagination-progressbar {
        background: #d3d3d2;
    }

    .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
        background: #555555;
        height: 4px;
    }
`

export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0);
        transition: background-color 0.3s ease;
    }

    &:hover::after {
        background-color: rgba(0, 0, 0, 0.5);
        background-image: url(https://raw.githubusercontent.com/TeamProject-Dessert39/dataCenter/f2f3e405e939fd9488184f96bb721ac7b98686e9/icon/instagram_hover.svg);
        background-position: center center;
        background-size: 120px 50px;
        background-repeat: no-repeat;
        
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        user-select: none;
    }
`;