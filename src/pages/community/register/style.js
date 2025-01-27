import styled from 'styled-components';

export const RegisterWrap = styled.div`
    > .inner {
        text-align: center;
        margin-top: 60px;

        .regTit {
            font-size: 32px;
            margin-bottom: 15px;
            font-weight: 700;
        }
        .regTxt {
            margin-top: 20px;
            font-size: 15px;
            color: #666;
            border-bottom: 1px solid #666;
            display: inline-block;
            padding: 8px 0;
            margin-bottom: 40px;
        }
        .regArt1 {
            font-size: 16px;
            font-weight: 300;
        }
        .regArt2 {
            font-size: 14px;
            margin: 30px 0 120px 0;
            color: #666;
        }
        .regbold {
            font-weight: 700;
        }

        .kakao {
            width: 800px;
            max-width: 95%;
            border-radius: 10px;
            overflow: hidden;
            margin: 0 auto;
            a {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 30px;
                background-color: #fae80c;
                img {
                    width: 105px;
                }
                p {
                    font-size: 18px;
                    font-weight: 700;
                }
            }
        }
    }
`;
