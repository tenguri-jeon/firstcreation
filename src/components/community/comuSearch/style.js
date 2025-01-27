import styled from 'styled-components';

export const SearchWrap = styled.div`
    margin-bottom: 20px;
    margin-top: 100px;

    .inner {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .filterType {
            height: 50px;
            border: none;
            border-bottom: 2px solid #000;
            font-size: 18px;
            font-weight: 600;
            margin-right: 10px;
        }
        .search {
            border-bottom: 2px solid #000;

            .searchevent {
                height: 45px;
                width: 250px;
                border: none;
                @media (max-width: 480px) {
                    width: 150px;
                }
                /* 태블릿 스타일 */
                @media (min-width: 481px) and (max-width: 768px) {
                    width: 180px;
                }
                /* 소형 데스크톱 스타일 */
                @media (min-width: 769px) and (max-width: 1024px) {
                    width: 200px;
                }
                /* 대형 데스크톱 스타일 */
                @media (min-width: 1025px) {
                    width: 250px;
                }
            }
            .searchevent::placeholder {
                color: #000;
                font-size: 16px;
                font-weight: 200;
            }

            .searchbtn {
                font-size: 18px;
                border: none;
                background: none;
                cursor: pointer;
            }
        }
    }
`;
