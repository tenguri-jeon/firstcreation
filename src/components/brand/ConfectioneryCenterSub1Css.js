import styled from 'styled-components';

export const ConfectioneryCenterSub1Wrap = styled.div`
    padding-bottom: 100px;

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

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 95%;
        max-width: 1300px;
        margin: 25px auto 0;

        li:nth-child(1) {transition-delay: 0.1s;}
        li:nth-child(2) {transition-delay: 0.2s;}
        li:nth-child(3) {transition-delay: 0.3s;}
        li:nth-child(4) {transition-delay: 0.4s;}
        li:nth-child(5) {transition-delay: 0.5s;}
        li:nth-child(6) {transition-delay: 0.6s;}
        li:nth-child(7) {transition-delay: 0.7s;}
        li:nth-child(8) {transition-delay: 0.8s;}
        li:nth-child(9) {transition-delay: 0.9s;}
        li:nth-child(10) {transition-delay: 1.0s;}
        li:nth-child(11) {transition-delay: 1.1s;}

        li {
            width: 160px;
            margin: 20px 20px 0;
            transform: translate(0, 70px);
            transition: transform 1s, opacity 1s;
            opacity: 0;

            &.visible {
                opacity: 1;
                transform: translateY(0);

                img {
                    clip-path: inset(0 0 0 0);
                }
            }

            .frame {
                overflow: hidden;
                width: 100%;
                height: 160px;
                border-radius: 50%;

                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            p {
                margin-top: 15px;
                text-align: center;
                font-size: 16px;
                letter-spacing: -0.05em;
                line-height: 1.4;
                font-weight: 500;
            }
        }
    }
`