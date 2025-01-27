import styled, { createGlobalStyle } from 'styled-components';

export const WaveBtnWrap = styled.div`
    /* button {
        width: 170px;
        height:40px;
        border-radius: 25px;
        border: 2px solid black;
        cursor: pointer;
        color: black;
        background-color: white;
        transition: 0.5s;
        
        &:hover {
            color: white;
            background-color: black;
        }
    } */
`;

export const WaveGlobalStyle = createGlobalStyle`
    /* *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    } */
`;

// Styled components
export const ButtonsContainer = styled.div`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    margin-top: 0px;
    text-align: center;
    border-radius: 30px;
`;

export const BlobButton = styled.div`
    z-index: 1;
    position: relative;
    width: 170px;
    padding: 12px 24px;
    /* margin-bottom: 30px; */
    text-align: center;
    text-transform: uppercase;
    color: black;
    font-size: 15px;
    font-weight: 600;
    background-color: transparent;
    outline: none;
    border: none;
    transition: color 0.5s;
    cursor: pointer;
    border-radius: 30px;
    letter-spacing: -0.5px;
    word-break: keep-all;

    &:before {
        content: '';
        z-index: 1;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border: 2px solid black;
        border-radius: 30px;
    }
    &.white {
        color: #fff;
        background-color: rgba(255, 255, 255, 0);
        &::before {
            border: 2px solid white;
        }
    }

    &:after {
        content: '';
        z-index: -2;
        position: absolute;
        left: 3px;
        top: 3px;
        width: 100%;
        height: 100%;
        transition: all 0.3s 0.2s;
        border-radius: 30px;
    }

    &:hover {
        color: white;
        border-radius: 30px;

        &:after {
            transition: all 0.3s;
            left: 0;
            top: 0;
            border-radius: 30px;
        }
    }

    &.white:hover {
        color: black;
    }

    @media (max-width: 1024px) {
        width: 165px;
        padding: 10px 24px;
        font-size: 14px;
        &.white {
            color: black;
        }
    }

    @media (max-width: 600px) {
        width: 150px;
        padding: 7px 24px 8px;
        font-size: 14px;
    }

    @media (max-width: 480px) {
        width: 135px;
        padding: 7px 24px 8px;
        font-size: 13px;
    }
`;

export const ButtonInner = styled.span`
    z-index: -1;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background: #ffffff;
    &.white {
        background-color: transparent;
    }

    @media (max-width: 1024px) {
        &.white {
            background-color: #fff;
        }
    }
`;

export const ButtonBlobs = styled.span`
    position: relative;
    display: block;
    height: 100%;
    filter: url('#goo');
`;

export const ButtonBlob = styled.span`
    position: absolute;
    top: 2px;
    width: 25%;
    height: 100%;
    background: black;
    border-radius: 100%;
    transform: translate3d(0, 150%, 0) scale(1.7);
    transition: transform 0.45s;
    &.white {
        background-color: #fff;
    }

    @supports (filter: url('#goo')) {
        transform: translate3d(0, 150%, 0) scale(1.4);
    }

    ${({ $index }) => `
        left: ${$index * 30}%;
        transition-delay: ${$index * 0.08}s;
    `}

    ${BlobButton}:hover & {
        transform: translateZ(0) scale(1.7);

        @supports (filter: url('#goo')) {
            transform: translateZ(0) scale(1.4);
        }
    }
`;
