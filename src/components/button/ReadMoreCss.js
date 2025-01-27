import styled from 'styled-components';

export const ReadMoreBtnWrap = styled.div`
    width: fit-content;
    height: 40px;
    transition: 0.3s;
    font-family: 'Lexend Deca', sans-serif;

    &:hover {
        .engText {
            color: #c0c0c0;
        }
        .arrow {
            transform: translateX(41%);
        }
    }

    a {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        padding-right: 14px;
        margin-right: 14px;
        .engText {
            transition: 0.3s;
            &.bold {
                font-weight: 700;
            }
        }
        .back {
            position: absolute;
            top: 0;
            right: 0;
            width: 24px;
            height: 24px;
            border: 1px solid #1c1c1c;
            &.circle {
                border-radius: 100%;
                background-color: #e3e6e9;
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
        height: 30px;

        a {
            padding-right: 12px;
            margin-right: 12px;
            .engText {
                font-size: 14px;
            }
            .back {
                width: 21px;
                height: 21px;
                .arrow {
                    top: -14px;
                    right: -5px;
                    width: 50px;
                }
            }
        }
    }

    @media (max-width: 600px) {
        height: 26px;

        a {
            padding-right: 10px;
            margin-right: 10px;
            .engText {
                font-size: 12px;
            }
            .back {
                width: 17px;
                height: 17px;
                .arrow {
                    top: -12.5px;
                    right: -5px;
                    width: 42px;
                }
            }
        }
    }
`;
