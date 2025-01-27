import styled from 'styled-components';

export const EventListWrap = styled.div`
    .center {
        width: 95%;
        max-width: 1440px;
        margin: 0 auto;
        ul {
            display: flex;
            align-items: center;
            flex-wrap: wrap;

            /* 모바일 스타일 */
            @media (max-width: 480px) {
                gap: 2%;
            }
            /* 태블릿 스타일 */
            @media (min-width: 481px) and (max-width: 768px) {
                /* 스타일 코드 */
                gap: 2%;
            }
            /* 소형 데스크톱 스타일 */
            @media (min-width: 769px) and (max-width: 1024px) {
                gap: 2%;
            }
            /* 대형 데스크톱 스타일 */
            @media (min-width: 1025px) {
                gap: 2.65%;
            }
        }
    }
    .noitem {
        padding: 40px;
    }
`;
export const EventItemWrap = styled.li`
    height: 100%;
    background-color: #fff;
    margin-bottom: 25px;
    /* 모바일 스타일 */
    @media (max-width: 480px) {
        width: 49%;
    }
    /* 태블릿 스타일 */
    @media (min-width: 481px) and (max-width: 768px) {
        /* 스타일 코드 */
        width: 49%;
    }
    /* 소형 데스크톱 스타일 */
    @media (min-width: 769px) and (max-width: 1024px) {
        width: 32%;
    }
    /* 대형 데스크톱 스타일 */
    @media (min-width: 1025px) {
        width: 23%;
    }

    .bgbox {
        border-radius: 10px;
        /* border: 1px solid #000; */
        overflow: hidden;
        box-shadow: 1px 1px 5px #999;
        img {
            display: block;
            width: 100%;

            object-fit: cover;
        }
        .textbox {
            /* background-color: #fff; */
            padding: 30px;
            text-align: center;

            line-height: 1.3;

            h3 {
                font-size: 22px;
                font-weight: 700;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                white-space: unset;
            }
            .date {
                display: block;
                padding-top: 10px;
                font-size: 18px;
                font-weight: 700;
                color: #4d4d4d;
            }
        }
    }
`;

export const EventDetailWrap = styled.section`
    > .inner {
        margin-top: 100px;
        text-align: center;
        .tit_g {
            background: #c0c0c0;
            padding: 15px 0;
            border-radius: 10px 10px 0 0;
            h3 {
                font-size: 20px;
                font-weight: 700;
                color: #fff;
                margin-bottom: 5px;

                @media (max-width: 480px) {
                    font-size: 16px;
                }
                /* 태블릿 스타일 */
                @media (min-width: 481px) and (max-width: 768px) {
                    font-size: 16px;
                }
                /* 소형 데스크톱 스타일 */
                @media (min-width: 769px) and (max-width: 1024px) {
                    font-size: 18px;
                }
                /* 대형 데스크톱 스타일 */
                @media (min-width: 1025px) {
                    font-size: 20px;
                }
            }
        }
        .etc {
            color: #fff;

            .etc_date {
                margin: 0 10px;
            }
            .etc_hit {
                position: relative;
            }
            .etc_hit::before {
                content: '';
                height: 70%;
                width: 1px;
                background-color: #fff;
                position: absolute;
                display: block;
                left: -5px;
                top: 20%;
            }
            i {
            }
        }
        .infoImg {
            border-bottom: 3px solid #c0c0c0;
            padding-bottom: 30px;

            img {
                margin-top: 30px;
                width: 90%;
                @media (max-width: 480px) {
                    width: 80%;
                }
                /* 태블릿 스타일 */
                @media (min-width: 481px) and (max-width: 768px) {
                    width: 85%;
                }
            }
        }
        .back {
            padding: 20px 0 60px 0;
            button {
                transition: 0.3s;
                background: none;
                border-radius: 30px;
                font-size: 17px;
                font-weight: 700;
                padding: 5px 15px;
            }
            button:hover {
                color: #fff;
                background-color: #000;
            }
        }
    }
`;
