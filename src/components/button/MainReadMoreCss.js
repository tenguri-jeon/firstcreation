import styled from 'styled-components';

export const MainReadMoreBtnWrap = styled.div`
    width: 200px;
    height: 60px;
    transition: 0.3s;
    font-family: 'Lexend Deca', sans-serif;
    border-radius: 10px;
    opacity:0.8;

    &:hover {
        opacity:1.0;

        .engText {
            color: rgba(0,0,0,0.6);
        }
        .arrow {
            transform: translateX(41%);
        }
    }

    a {
        width: 190px;
        height: 60px;
        position: relative;
        display: flex;
        align-items: center;
        padding-left: 35px;
        .engText {
            transition: 0.3s;
            &.bold {
                font-weight: 700;
            }
        }
        .back {
            position: absolute;
            top: 17px;
            right: 23px;
            width: 24px;
            height: 24px;
            border: 1px solid #1c1c1c;
            &.circle {
                border-radius: 100%;
                border: none;
            }
            .arrow {
                position: absolute;
                top: -18px;
                right: -6px;
                display: block;
                width: 60px;
                overflow: hidden;
                transition: 0.3s;
            }
        }
    }

    @media (max-width: 1024px) {
        width: 150px;
        height: 45px;
        a {
            width: 150px;
            height: 45px;
            padding-left: 17px;
            .engText {
                font-size: 14px;
            }
            .back {
                top: 16px;
                width: 12px;
                height: 12px;
                .arrow {
                    top: -9px;
                    right: -3px;
                    width: 30px;
                }
            }
        }
    }

    @media (max-width: 600px) {
        width: 140px;
        height: 45px;

        a {
            padding-right: 8px;
            .engText {
                font-size: 14px;
            }
            .back {
                width: 12px;
                height: 12px;
                .arrow {
                    top: -8.5px;
                    right: -1.5px;
                    width: 30px;
                }
            }
        }
    }
`;
