import styled from 'styled-components';

export const EventstoreListWrap = styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 1400px;
    .noticeTable {
        border-radius: 10px 10px 0 0;
        overflow: hidden;
        thead {
            line-height: 50px;
            height: 50px;
            font-size: 18px;
            font-weight: 700;
            background: #c0c0c0;
            color: #fff;

            .numbox {
                width: 90px;
            }
            .titbox {
                width: calc(100% - 200px);
            }

            .datebox {
                width: 100px;
            }
        }
    }
`;
export const EventstoreItemWrap = styled.tr`
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #c0c0c0;
    font-weight: 600;
    td {
        transition: 0.4s;
    }

    color: #000;
    .id {
        text-align: center;
    }
    .tit {
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        white-space: unset;
    }
    .tit:hover {
        color: #c0c0c0;
    }
    .date {
        text-align: center;
        font-weight: 300;
    }
`;
export const EventstoreDetailWrap = styled.div`
    > .inner {
        margin-top: 100px;

        .titleTop {
            background: #c0c0c0;
            padding: 10px 15px;
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

            .info {
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: #fff;
                .date {
                }
                .hit {
                }
            }
        }
        .titleDesc {
            padding: 25px;
            font-size: 14px;
            font-weight: 600;
            border-bottom: 2px solid #c0c0c0;
            text-align: center;
        }
        .back {
            padding: 20px 0 60px 0;
            display: flex;
            justify-content: center;
            button {
                text-align: center;
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
