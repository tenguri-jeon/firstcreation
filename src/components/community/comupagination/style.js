import styled from 'styled-components';

export const PaginationWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 25px;
    div button {
        width: 30px;
        height: 30px;
        background: none;
        border: none;
        font-size: 18px;
        transition: 0.5s;
        border-radius: 20px;
        line-height: 20px;
    }
    button:hover {
        background-color: #c0c0c0;
        color: #fff;
    }
    button.active {
        background-color: #c0c0c0;
        font-weight: 700;
        color: #fff;
    }
`;
