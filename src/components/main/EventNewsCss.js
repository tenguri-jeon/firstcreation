import styled from 'styled-components';

export const EventNewsWrap = styled.div`
    padding: 100px 0;
`;

export const TitleWrap = styled.div`
    font-size: 60px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 50px;
    font-family: 'Lexend Deca', sans-serif;
`;

export const EventNewsSliderWrap = styled.div`
    .swiper {
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;

        @media (max-width: 1440px) {
            width: 80%;
        }

        @media (max-width: 1024px) {
            width: 90%;
        }
    }

    .swiper-slide {
        padding-bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(25% - 15px);
        margin: 0 auto;
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
        border-radius: 15px 15px 0 0;
        user-select: none;
        max-width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
        transition: 0.5s;

        @media (max-width: 1024px) {
            width: 210px;
            height: 320px;
        }
    }

    h2 {
        overflow: hidden;
        text-overflow: ellipsis;
        width: 270px;
        height: 80px;
        padding: 15px;
        font-weight: 600;
        user-select: none;
        font-size: 16px;
        transition: 0.5s;
        text-decoration: underline;
        text-decoration-color: transparent;
        text-underline-offset: 5px;
        text-decoration-thickness: 2px;
        transition: text-decoration-color 0.3s ease-in-out, text-underline-offset 0.3s ease-in-out;
    }

    h3 {
        color: #676767;
        padding: 0 0 10px 20px;
    }

    .swiper-slide-content {
        border-radius: 0 0 15px 15px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3); /* 그림자 추가 */
        box-sizing: border-box; /* 요소 크기 계산 방식 변경 (필요한 경우) */

        h2 {
            @media (max-width: 1024px) {
                width: 210px;
                height: 90px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }

    .swiper-pagination {
        /* margin: 20px 0 20px 0; */
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

    .swiper-container {
        position: relative;
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
        left: 2%;

        @media (max-width: 1440px) {
            left: 0%;
        }
        @media (max-width: 1024px) {
            left: 0%;
        }
    }

    .swiper-button-next {
        right: 2%;

        @media (max-width: 1440px) {
            right: 0%;
        }
        @media (max-width: 1024px) {
            right: 0%;
        }
    }

    .swiper-button-prev:after,
    .swiper-button-next:after {
        font-size: 30px;
        color: black;
    }
`;
