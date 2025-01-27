import styled from 'styled-components';

export const EcoStoryWrap = styled.div``;

export const TitleWrap = styled.div`
    font-size: 60px;
    font-weight: 600;
    text-align: center;
    font-family: 'Lexend Deca', sans-serif;
`;

export const TabWrap = styled.div`
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    li {
        margin: 20px;
        padding: 20px;
        border-radius: 50px;
        border: 3px solid black;
        background-color: white;
        color: black;
        font-weight: 700;
        cursor: pointer;
        transition: 0.5s;

        &:hover,
        &.on {
            background-color: black;
            color: white;
        }

        a {
            text-decoration: none;
            color: inherit;

            @media (max-width: 1024px) {
                font-size: 14px;
            }
        }
    }
`;

export const ContentWrap = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; // 추가

    li {
        margin: 20px;
        padding: 20px;
        border-radius: 50px;
        font-weight: 700;
        transition: 0.5s;
        display: none;

        &.on {
            display: block;
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        .ecoTab {
            display: flex;
            width: 100%;
            height: auto;
            justify-content: space-between;
            align-items: center;

            .ecoSlider {
                margin: 10px;
                border-radius: 70px 0 0 0;
                background-color: #412a0a;
                position: relative;
                width: 1000px;
                height: 550px;

                @media (max-width: 1440px) {
                    width: 600px;
                    height: 550px;
                }

                @media (max-width: 1024px) {
                    width: 500px;
                    height: 650px;
                }

                .ecoTitle {
                    color: white;
                    font-size: 30px;
                    position: absolute;
                    top: 10%;
                    left: 5%;
                    z-index: 2; // 추가
                }
            }
        }

        .article {
            width: 350px;
            height: 550px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative; // 추가

            @media (max-width: 1440px) {
                height: 600px;
                width: 300px;
            }

            @media (max-width: 1024px) {
                height: 600px;
                width: 300px;
            }

            img {
                width: 60px;
            }

            h4 {
                font-size: 16px;
                margin: 10px 0;
                line-height: 1.4;
            }

            h3 {
                font-size: 25px;
                line-height: 1.4;
            }

            p {
                margin: 25px 0;
                line-height: 1.4;
            }
        }

        .photo {
            position: relative; // 추가
            video {
                border-radius: 70px 0 0 0;
                width: 100%; // 추가
                height: auto; // 추가
            }
            a {
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
`;

export const RACListWrap = styled.div`
    div {
        img {
            margin: 10px 10px 10px 0;
            box-shadow: 0px 0px 8px #ccc;
            border-radius: 50%;
        }
    }
`;

export const EcoImageSliderWrap = styled.div`
    // ---------------------------------------------------------------------
    // swiper
    width: 100%;
    height: 100%;
    max-width: 1200px; // 최대 너비 설정
    margin: 0 auto; // 중앙 정렬
    overflow: hidden; // 넘치는 부분 숨김

    .swiper {
        width: 100%;
        height: 550px;

        @media (max-width: 1440px) {
            height: 550px;
        }

        @media (max-width: 1024px) {
            height: 650px;
        }
    }

    .swiper-slide {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .swiper-slide img {
        position: absolute;
        top: 30%;
        left: 45%;
        width: 50%;
        height: 50%;
        object-fit: contain;

        @media (max-width: 1440px) {
            top: 18%;
        }
    }

    .swiper-slide-content {
        position: absolute;
        top: 80%;
        left: 45%;
        transform: translate(-50%, -50%);
        width: 80%;
        color: white;
        z-index: 10;
        padding: 20px 20px 20px 0;

        @media (max-width: 1440px) {
            top: 70%;
        }
        @media (max-width: 1024px) {
            top: 70%;
        }

        h2 {
            font-size: 20px;
        }
        h3 {
            font-size: 16px;
            padding-top: 20px;
        }
    }

    .swiper-pagination {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%); // 중앙 정렬 보정
        display: flex;
        flex-direction: row; // 수평 정렬
        justify-content: center;
        align-items: center;
        width: auto !important;
        height: auto !important;

        @media (max-width: 1440px) {
            bottom: 7%;
        }
    }

    .swiper-pagination-bullet {
        margin: 0 5px !important;
        width: 10px !important;
        height: 10px !important;
        background-color: #ffffff;
        text-indent: -9999px; /* 텍스트를 화면 밖으로 밀어냄 */
        overflow: hidden; /* 넘치는 텍스트 숨김 */
        opacity: 0.2;

        &:hover {
            background-color: white;
        }
    }

    .swiper-pagination-bullet-active {
        opacity: 1;
    }
    // ---------------------------------------------------------------------
`;
