import styled from "styled-components";

export const TitleComponents = styled.div`
    display: inline;
    text-align: center;
    width: 100%;
    h2{
        position: relative;
        font-size: 60px;
        font-weight: 800;
        display: inline-block;
        &::after{
            content: '';
            display: block;
            width: 100%;
            height: 20%;
            background-color: #c0c0c0;
            opacity: 0.3;
            position: absolute;
            bottom: 0;
            left: 0;
            transform: translateY(-10px);
        }
    }
    @media (max-width : 480px) {
        h2{
            font-size: 30px;
        }
    }
`

export const MenuSlideComponents = styled.div`
    position: relative;
    padding: 0 50px 100px 50px;
    .slide{
        padding: 0 80px;
        margin-top: 45px;
        position: relative;
        .swiper {
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
        }

        .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            width: calc(25% - 15px);
        }

        .slide-content-wrapper {
            padding: 0 0 40px 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        img {
            user-select: none;
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto;
            transition: 0.5s;
        }

        h2 {
            font-weight: 600;
            user-select: none;
            text-align: center;
            font-size: 16px;
            margin: 10px 0;
            transition: 0.5s;
            text-decoration: underline;
            text-decoration-color: transparent;
            text-underline-offset: 5px;
            text-decoration-thickness: 2px;
            transition: text-decoration-color 0.3s ease-in-out, text-underline-offset 0.3s ease-in-out;
        }

        .swiper-pagination {
            margin: 20px 0 20px 0;
            position: absolute;
            top: 90%;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
        }

        .swiper-pagination-progressbar {
            background: rgba(0, 0, 0, 0.1);
            height: 2px;
        }

        .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
            background: #000;
        }

        .swiper-button-next,
        .swiper-button-prev {
            position: absolute;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            /* box-shadow: 0 2px 5px rgba(0,0,0,0.1); */
            z-index: 10;
        }

        .swiper-button-prev:after,
        .swiper-button-next:after {
            font-size: 30px;
            color: black;
        }
    }
    @media (max-width: 768px ) {
        padding: 0px 50px;
    }
    @media (max-width: 480px ) {
        padding: unset;
        .slide{
            padding: 0 35px;
            margin-top: 30px;
            .swiper {
                width: 100%;
                max-width: 1400px;
                margin: 0 auto;
            }
            .swiper-button-next{
                transform: translateX(13px);
            }
            .swiper-button-prev{
                transform: translateX(-13px);
            }
            .swiper-button-prev:after,
            .swiper-button-next:after {
                font-size: 30px;
                color: black;
            }
        }
    }
`

export const ClickMenuComponents = styled.li`
    width: 140px;
    height: 140px;
    border: 2px solid black;
    margin: 0 17px 34px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: 0.3s;
    cursor: pointer;
    figure{
        width: 90%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        height: 56px;
        img{
            width: 100%;
            height: 56px;
        }
    }
    strong{
        padding: 0px 8px;
        line-height: 130%;
        font-weight: 900;
        text-align: center;
    }
    &:hover{
        background-color: black;
        img{
            transform: translateY(-56px);
        }
        strong{
            color: white;
        }
    
    }
    @media (max-width: 1300px ) {
        margin: 0 10px 20px;
    }
    @media (max-width: 1024px ) {
        width: 120px;
        height: 120px;
    }
    @media (max-width: 850px ) {
        width: 100px;
        height: 100px;
        margin: 0 6px 12px;
        strong{
            font-size: 14px;
        }
    }
    @media (max-width: 600px ) {
        width: 95px;
        height: 95px;
        margin: 0 5px 10px;
        strong{
            font-size: 10px;
            line-height: 1.3;
        }
        figure{
            height: 40px;
        }
        img{
            height: 40px;
        }
    }
    @media (max-width: 480px ) {
        width: calc(100% / 3 - 30px / 3 );
        figure{
            width: 90%;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            height: 40px;
            img{
                width: 100%;
                height: 40px;
            }
        }
        strong{
            font-size: 13px;
        }
    }
`
export const MenuTitleComponents = styled.div`
    display: block;
    text-align: center;
    margin-bottom: 50px;
    h3{
        display: inline-block;
        font-size: 36px;
        font-weight: bold;
    }
    @media (max-width : 480px) {
        h3{
            margin-bottom: unset;
            font-size: 20px;
        }
    }
`
export const ProductItemComponents = styled.li`
    display: flex;
    flex-direction: column;
    width: calc(100%/5 - 120px/5);
    margin-right: 24px;
    margin-bottom: 30px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px rgba(38, 38 , 38 , 0.18);
    border-radius: 10px;
    overflow: hidden;
    &.mdproduct{
        padding: 0px;
        padding-bottom: 20px;
        img{
            width: 100%;
            height: 230px;
        }
    }
    img{
        width: 170px;
        height: 170px;
    }
    strong{
        font-size: 20px;
        margin: 15px 0px;
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        text-align: center;
        text-overflow: ellipsis;
    }
    button{
        margin-top: 30px;
    }
    &:hover{
        box-shadow: 0px 0px 20px rgba(38, 38 , 38 , 0.35);
    }
    @media (max-width: 1300px ) {
        width: calc(100%/4 - 60px/4);
        margin-right: 20px;
        margin-bottom: 20px;
        &:nth-of-type(4n){
            margin-right: 0px;
        }
    }
    @media (max-width: 1024px ) {
        width: calc(100%/3 - 40px/3);
        &:nth-of-type(4n){
            margin-right: 20px;
        }
        &:nth-of-type(3n){
            margin-right: 0px;
        }
        strong{
            font-size: 18px;
            margin: 10px 0;
        }
        p{
            font-size: 17px;
        }
        button{
            margin-top: 20px;
        }
    }
    @media (max-width: 850px ) {
        width: calc(100%/3 - 35px/3);
        margin-right: 15px;
        margin-bottom: 15px;
        &:nth-of-type(3n){
            margin-right: 0px;
        }
        strong{
            font-size: 16px;
        }
        p{
            font-size: 15px;
        }
    }
    @media (max-width: 600px ) {
        width: calc(100%/2 - 15px/2);
        &:nth-of-type(3n){
            margin-right: 15px;
        }
        &:nth-of-type(2n){
            margin-right: 0px;
        }
    }
    @media (max-width : 480px) {
        img{
            width: 130px;
            height: 130px;
        }
        strong{
            font-size: 15px;
        }
    }
`
export const MenuModalComponents = styled.div`
    height: 90vh;
    border-radius: 25px;
    overflow: auto;
    position: absolute;
    top: 50%;
    right: 50%;
    background-color: white;
    transform: translate(50% ,-50%);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 605px;
    height: fit-content;
    figure{
        background: #F8F9FA;
        display: flex;
        img{
            padding: 20px;
            max-height: 350px;
            margin: 0 auto;
            height: 85%;
        }
    }
    button{
        background: none;
        border: none;
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(-10px , 10px);
        cursor: pointer;
    }
    .modal-body{
        padding: 30px 10px;
        .product-data{
            display: flex;
            flex-direction: column;
            align-items: center;
            span{
                text-align: center;
                font-size: 26px;
                font-weight: bold;
                letter-spacing: -2px;
            }
            p{
                font-size: 20px;
                font-weight: 700;
                margin: 30px 0;
                letter-spacing: -1px;
                &.subtit{
                  color: #1c1c1c;
                  font-size: 18px;
                  font-weight: 300;
                }
            }
            strong{
                font-size: 22px;
                font-weight: bold;
            }
        }
    }
    .standard{
        padding: 20px;
        font-weight: 600;
    }
    &::-webkit-scrollbar{
        background-color: #E5E5E5;
        width: 10px;
        border-radius: 36px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #1B1B1B;
    }
    @media (max-width: 1200px ) {
        width: 520px;
        .modal-body{
            .product-data{
                p{
                    font-size: 18px;
                    margin: 25px 0;
                    line-height: 120%;
                    text-align: center;
                }
            }
        }
    }
    @media (max-width: 1024px ) {
        width: 90%;
        margin: 0 auto;
        max-height: 90vh;
        figure{
            height: 330px;
            padding: 10px;
            img{
            }
        }
        .modal-body{
            .product-data{
                span{
                    font-size: 22px;
                }
                p{
                    font-size: 18px;
                    margin: 25px 0;
                    &.subtit{
                        font-size: 16px;
                    }
                }
                strong{
                    font-size: 20px;
                }
            }
        }
    }
    @media (max-width: 480px ) {
        figure{
            height: 240px;
            img{
                padding: 10px;
            }
        }
        .modal-body{
            .product-data{
                span{
                    font-size: 18px;
                    margin-bottom: 8px;
                }
                p{
                    font-size: 14px;
                    margin: 10px 0;
                    &.subtit{
                        font-size: 14px;
                        margin-bottom: unset;
                    }
                }
                strong{
                    font-size: 16px;
                    margin: 15px 0;
                }
            }
            .standard{
                padding: unset;
                margin: 20px;
                font-size: 12px;
                text-align: left;
            }
        }
    }

`
export const NatritionalIngredientsComponents = styled.div`
    display: flex;
    border : 1px solid #ddd;
    ul{
        flex-basis: 50%;
        border-right: 1px solid #ddd;
        li{
            text-align: center;
            margin: 12px 0px;
            font-weight: bold;
        }
    }   
`
export const AllergyComponents = styled.div`
    border-top: 1px solid #ddd;
    text-align: center;
    padding: 12px 0px;
    font-weight: 500;
    span{
        &.bold{
            font-weight: bold;
            font-size: 18px;
        }
    }
`
export const ElseInfoComponents = styled.div`
    background-color: #F8F9FA;
    padding: 20px;
    display: flex;
    justify-content: center;
    color: #666666;
    font-weight: bold;
    span{
        display: flex;
        gap: 8px;
        align-items: flex-start;
        svg{
            transform: translateY(4px);
        }
    }
`
export const ImgComponents = styled.img`
    .loading {
        filter: blur(10px);
        clip-path: inset(0);
    }
    .loaded {
        filter: blur(0px);
        transition: filter 0.5s linear;
    }
`