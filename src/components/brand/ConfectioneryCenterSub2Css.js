import styled from 'styled-components';

export const ConfectioneryCenterSub2Wrap = styled.div`

    .subTitle  {
        display: flex;

        div {
            margin-right: 30px;
            font-size: 22px;
            margin-bottom: 10px;
            font-weight: 600;
            font-family: 'Lexend Deca', sans-serif;
        }
        p {
            font-size: 16px;
            letter-spacing: -0.05em;
            line-height: 1.4;

            b {
                font-weight: 700;
                line-height: 1.4;
            }
        }
    }
`

export const ImgBoxWrap = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 35px 0;

    .frame1, .frame2 {
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

    .frame2 {
        margin-left: 50px;
    }
`