import styled from 'styled-components';

export const BeverageWrap = styled.div`

    h2 {
        font-size: 18px;
        font-weight: 500;
        padding: 20px 0;
        text-align: center;
    }

`

export const TitleWrap = styled.div`
    font-size: 60px;
    font-weight: 600;
    text-align: center;
`

export const BeverageSliderWrap = styled.div`
    position: relative;
    padding: 0 50px 100px 50px;


    @keyframes rotateImage {
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(-10deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

    .swiper {
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
    }

    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(25% - 15px);
    }

    .slide-content-wrapper {
        padding: 0 0 40px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        &:hover {
            img {
                animation: rotateImage 0.6s ease-in-out;
            }

            h2 {
                text-decoration-color: #000; /* 밑줄 색상 */
                text-underline-offset: 8px; /* 호버 시 밑줄 위치 변경 */
            }
        }
    }

    img {
        user-select: none;
        max-width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
        transition: 0.5s;
    }

    h2 {
        font-weight: 600;
        user-select: none;
        text-align: center;
        font-size: 16px;
        margin: 10px 0;
        transition: 0.5s;
        text-decoration: underline;
        text-decoration-color: transparent;
        text-underline-offset: 5px;
        text-decoration-thickness: 2px;
        transition: text-decoration-color 0.3s ease-in-out, text-underline-offset 0.3s ease-in-out;
    }

    .swiper-pagination {
        margin: 20px 0 20px 0;
        position: absolute;
        top: 90%;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
    }

    .swiper-pagination-progressbar {
        background: rgba(0, 0, 0, 0.1);
        height: 4px;
    }

    .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
        background: #000;
    }

    .swiper-button-next,
    .swiper-button-prev {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 40px;
        height: 40px;
        background-color: #fff;
        border-radius: 50%;
        /* box-shadow: 0 2px 5px rgba(0,0,0,0.1); */
        z-index: 10;
    }

    .swiper-button-prev {
        top: 100%;
        left: 4%;
    }

    .swiper-button-next {
        top: 100%;
        right: 4%;
    }

    .swiper-button-prev:after,
    .swiper-button-next:after {
        font-size: 30px;
        color: black;
    }
`