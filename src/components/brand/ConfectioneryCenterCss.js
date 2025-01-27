import styled from 'styled-components';

export const ConfectioneryCenterWrap = styled.div`
    padding: 100px 0;
    box-sizing: border-box;

    .header {
        letter-spacing: -0.075em;
        font-size: 18px;
        line-height: 1.5;
    }

    h3 {
        margin-bottom: 20px;
        letter-spacing: -0.025em;
        font-size: 35px;
        line-height: 1.4;
        font-weight: 700;
    }

    .sub {
        font-size: 20px;
        line-height: 1.5;
        letter-spacing: -0.05em;
    }

    strong {
        font-size: 25px;
        margin-bottom: 20px;
        font-weight: 700;
        line-height: 1.4;
    }

    .subLast {
        color: #4E4E4E;
        font-size: 16px;
        letter-spacing: -0.05em;
        line-height: 1.4;
        padding-bottom: 100px;
        box-sizing: border-box;
    }

    h4 {
        margin-bottom: 50px;
        display: flex;
        align-items: center;
        font-size: 22px;
        letter-spacing: -0.025em;
        font-weight: 700;
        line-height: 1.4;
        font-family: 'Lexend Deca', sans-serif;

        span {
            width: 100px;
            height: 1px;
            background-color: #111111;
            margin-right: 17px;
        }
    }
`

export const ImgBoxWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 35px 0;

    .frame2 {
        margin: 0 50px;
    }

    .frame1, .frame2, .frame3 {
        opacity: 0;
        transition: clip-path 1s, opacity 0.8s;
        transition: opacity 0.8s ease, transform 0.8s ease;

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            clip-path: inset(0 100% 0 0);
            transition: clip-path 1s ease;
        }

        &.visible {
            opacity: 1;
            transform: translate(0, 0);

            img {
                clip-path: inset(0 0 0 0);
            }
        }
    }
`
