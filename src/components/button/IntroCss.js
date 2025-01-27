import styled, { createGlobalStyle } from 'styled-components';

export const IntorBtn = styled.div`
    width: 50%;
`

export const MoreBtnWrap = styled.div`
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
`
// Global styles
export const GlobalStyle = createGlobalStyle`
    *, *:before, *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;

// Styled components
export const ButtonsContainer = styled.div`
    text-align: center;
    border-radius: 30px;
    `;

export const BlobButton = styled.button`
    white-space: nowrap;
    height: 48px;
    z-index: 1;
    position: relative;
    padding: 14px 60px;
    margin-bottom: 30px;
    text-align: center;
    text-transform: uppercase;
    color: white;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    border: none;
    transition: color 0.5s;
    cursor: pointer;
    border-radius: 30px;
    width: 100%;
    &.grey{
        &:before {
            border: 2px solid #474e63;
        }
    }
    &:before {
        content: "";
        z-index: 1;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border: 2px solid #1b1b1b;
        border-radius: 30px;
    }
    
    &:after {
        content: "";
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
    @media (max-width:480px) {
        width: 100%;
        font-size: 13px;
        height: 30px;
        padding: unset;
        margin: unset;
        button{
            padding: 12px 0 5px;
        }
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
    background: #1b1b1b;
    &.grey{
        background: #474e63;
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
    transform: translate3d(0,150%,0) scale(1.7);
    transition: transform 0.45s;
    /* 클래스 붙으면 색상 변경 */
    &.grey{
        background: #313131;
    }

    @supports(filter: url('#goo')) {
        transform: translate3d(0,150%,0) scale(1.4);
    }

    ${({ $index }) => `
        left: ${$index * 30}%;
        transition-delay: ${$index * 0.08}s;
    `}

    ${BlobButton}:hover & {
        transform: translateZ(0) scale(1.7);

        @supports(filter: url('#goo')) {
            transform: translateZ(0) scale(1.4);
        }
    }
`;
