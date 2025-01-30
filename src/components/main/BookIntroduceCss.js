import styled from 'styled-components';

export const BookIntroduceCon = styled.div`
    background-image: url(https://github.com/tenguri-jeon/firstCreationImg/blob/main/main/bookIntoduce_bg.png?raw=true);
    height: 540px;
    display: flex;
    background-repeat: no-repeat;
    justify-content: center;
    align-items: center;
    gap : 114px;

    .img-wrap{
        background: #F9F8F3;
        width: 325px;
        height: 360px;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: -8px 8px 4px 0 rgba(0, 0, 0, 0.4);
    }

    .text-wrap{
        display : flex;
        flex-direction : column;
        align-items : flex-end;
        .title{
            color : #fff;
            font-size : 48px;
            text-shadow: -4px 4px 4px rgba(0, 0, 0, 0.7);
            transform : translateX(-30px);
            .op80p{
                color: #CDCDCD;
                opacity : 70%;
            }
        }
        span{
            color : #C1C1C1;
            font-size : 22px;
        }
        p{
            color : #C1C1C1;
            font-size : 16px;
            margin-top : 8px;
        }
        small{
            color : #949494;
            font-size : 14px;
        }
        button{
            margin-top : 18px;
            box-shadow : -8px 8px 4px 0 rgba(0, 0, 0, 0.4);
        }
    }
}
`