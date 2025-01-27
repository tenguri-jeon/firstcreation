import { styled } from 'styled-components';

// export const Section01Container = styled.div`

export const InteriorVisualContainer = styled.div`
    /* 헤더 겹침 해결 */
    margin-top: 100px;

    background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/interior_visual_bg.jpg);
    background-position: center;
    padding: 100px;
    text-align: center;
    h2 {
        i {
            font-style: italic;
            letter-spacing: -0.5px;
            font-size: 20px;
            background-color: #ffffffaa;
            line-height: 1.7;
            span {
                font-weight: 700;
            }
        }
    }

    @media (max-width: 1024px) {
        padding: 100px;
        h2 {
            i {
                font-size: 18px;
            }
        }
    }

    @media (max-width: 768px) {
        padding: 0;
        background-size: cover;
        height: 100px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        h2 {
            i {
                font-size: 16px;
            }
        }
    }

    @media (max-width: 480px) {
        height: 80px;
        h2 {
            i {
                font-size: 14px;
            }
        }
    }
`;

export const InteriorKeywordContainer = styled.div`
    .inner {
        padding-top: 100px;
        width: 95%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
            display: flex;
            flex-direction: column;
            gap: 80px;
            p {
                color: #b9b9b9;
                line-height: 1.4;
                letter-spacing: -0.5px;

                /* &:nth-child(1) {
                    animation: moveRight 1s ease-in forwards;
                }

                @keyframes moveRight {
                    0% {
                        opacity: 0;
                        transform: translateX(-300px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateX(0px);
                    }
                } */
                strong {
                    color: #1c1c1c;
                    font-weight: 700;
                    display: block;
                    font-size: 24px;
                    font-family: 'Lexend Deca', sans-serif;
                    margin-bottom: 8px;
                    line-height: 1.6;
                }
            }
        }
        .right {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 10px;
            .pic {
                width: 25vw;
                height: 14vw;
                max-width: 350px;
                max-height: 180px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    @media (max-width: 1440px) {
        .inner {
            .left {
                gap: 70px;
            }
        }
    }

    /* 소형 데스크톱 스타일 */
    @media (max-width: 1024px) {
        .inner {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            gap: 44px;
            .left {
                display: flex;
                flex-direction: column;
                gap: 40px;
                p {
                    font-size: 15px;
                    strong {
                        font-size: 22px;
                        margin-bottom: 8px;
                    }
                }
            }
            .right {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                gap: 20px;
                width: 100%;
                .pic {
                    width: 50%;
                    height: 30vw;
                    max-width: none;
                    max-height: fit-content;
                    overflow: hidden;
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
        }
    }

    /* 태블릿 스타일 */
    @media (max-width: 768px) {
        .inner {
            padding-top: 72px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            gap: 44px;
            .left {
                display: flex;
                flex-direction: column;
                gap: 40px;
                p {
                    word-break: keep-all;
                    font-size: 15px;
                    strong {
                        font-size: 22px;
                        margin-bottom: 8px;
                    }
                }
            }
            .right {
                gap: 20px;
            }
        }
    }

    @media (max-width: 600px) {
        .pc {
            display: none;
        }
        .inner {
            padding-top: 52px;
            gap: 34px;
            .left {
                gap: 26px;
                p {
                    strong {
                        font-size: 20px;
                        margin-bottom: 8px;
                    }
                }
            }
            .right {
                gap: 20px;
            }
        }
    }
`;

export const InteriorListContainer = styled.div``;

export const InteriorItemContainer = styled.section`
    margin: 140px 0;
    .inner {
        width: 95%;
        .box {
            margin-bottom: 100px;
            .txt {
                display: flex;
                gap: 20px;
                .addr {
                    font-size: 17px;
                    line-height: 1.8;
                    b {
                        display: block;
                        font-weight: 700;
                        font-size: 24px;
                    }
                }
                .desc {
                    margin-top: 6px;
                    width: 70%;
                    font-size: 16px;
                    color: #b9b9b9;
                    line-height: 1.35;
                }
            }
            .pics {
                margin-top: 50px;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 34px;
            }
            .photo {
                margin-top: 100px;
                &.visible {
                    transition: 0.8s;
                    p {
                        color: red;
                    }
                }
                p {
                    font-family: 'Lexend Deca', sans-serif;
                    font-size: 18px;
                    font-weight: 700;
                    margin-bottom: 20px;
                }
                .photos {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 34px;
                }
            }
        }
    }

    @media (max-width: 1024px) {
        margin: 140px 0;
        .inner {
            .box {
                margin-bottom: 80px;
                .txt {
                    .addr {
                        width: 33%;
                        font-size: 15px;
                        word-break: keep-all;
                        b {
                            font-size: 22px;
                        }
                    }
                    .desc {
                        font-size: 15px;
                    }
                }
                .pics {
                    margin-top: 50px;
                    gap: 20px;
                    .pic {
                        width: 100%;
                        height: 32vw;
                    }
                }
                .photo {
                    margin-top: 100px;
                    p {
                        font-size: 17px;
                        margin-bottom: 20px;
                    }
                    .photos {
                        gap: 20px;
                        .pic {
                            width: 100%;
                            height: 32vw;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 850px) {
        margin: 140px 0;
        .inner {
            .box {
                margin-bottom: 80px;
                .txt {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    .addr {
                        width: 100%;
                        font-size: 15px;
                        word-break: keep-all;
                        margin-bottom: 0;
                        b {
                            font-size: 22px;
                        }
                    }
                    .desc {
                        width: 100%;
                        font-size: 15px;
                    }
                }
                .pics {
                    margin-top: 32px;
                    gap: 20px;
                    .pic {
                        width: 100%;
                        height: 32vw;
                    }
                }
                .photo {
                    margin-top: 74px;
                    p {
                        font-size: 18px;
                        margin-bottom: 18px;
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        margin: 120px 0;
        .inner {
            .box {
                margin-bottom: 80px;
                .txt {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    .addr {
                        width: 100%;
                        font-size: 14px;
                        word-break: keep-all;
                        margin-bottom: 0;
                        b {
                            font-size: 20px;
                            line-height: 1.5;
                        }
                    }
                    .desc {
                        width: 100%;
                        font-size: 15px;
                        word-break: keep-all;
                        .pc {
                            display: none;
                        }
                    }
                }
                .pics {
                    margin-top: 28px;
                    gap: 16px;
                    .pic {
                        width: 100%;
                        height: 32vw;
                    }
                }
                .photo {
                    margin-top: 52px;
                    p {
                        font-size: 18px;
                        margin-bottom: 18px;
                    }
                    .photos {
                        gap: 16px;
                    }
                }
            }
        }
    }

    @media (max-width: 480px) {
        margin: 100px 0;
        .inner {
            .box {
                margin-bottom: 80px;
                .txt {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                    .addr {
                        font-size: 13px;
                        b {
                            font-size: 18px;
                            line-height: 1.4;
                        }
                    }
                    .desc {
                        font-size: 14px;
                    }
                }
                .pics {
                    margin-top: 20px;
                    grid-template-columns: repeat(1, 1fr);
                    gap: 10px;
                    .pic {
                        width: 100%;
                        height: 60vw;
                    }
                }
                .photo {
                    margin-top: 52px;
                    p {
                        font-size: 18px;
                        margin-bottom: 18px;
                    }
                    .photos {
                        gap: 10px;
                        grid-template-columns: repeat(1, 1fr);
                        .pic {
                            width: 100%;
                            height: 60vw;
                        }
                    }
                }
            }
        }
    }
`;

export const InteriorPictureContainer = styled.div`
    width: 100%;
    height: 32vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        clip-path: inset(0 100% 0 0);
        transition: ease-out 0.6s;
        opacity: 0;
    }
    &.visible {
        img {
            opacity: 1;
            clip-path: inset(0 0 0 0);
        }
    }

    @media (max-width: 1024px) {
        width: 100%;
        height: 32vw;
    }

    @media (max-width: 480px) {
        width: 100%;
        height: 60vw;
    }
`;

export const InteriorPhotoContainer = styled.div`
    width: 100%;
    height: 32vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        clip-path: inset(0 100% 0 0);
        transition: ease-out 0.6s;
        opacity: 0;
    }
    &.visible {
        img {
            opacity: 1;
            clip-path: inset(0 0 0 0);
        }
    }

    @media (max-width: 1024px) {
        width: 100%;
        height: 32vw;
    }

    @media (max-width: 480px) {
        width: 100%;
        height: 60vw;
    }
`;

export const InteriorTitleContainer = styled.div`
    margin-bottom: 50px;
    h3 {
        font-size: 50px;
        line-height: 1.4;
        word-break: keep-all;
        letter-spacing: -2.5px;
        &::before {
            content: '';
            display: inline-block;
            position: absolute;
            left: -100%;
            top: 42px;
            width: 99%;
            height: 18px;
            background-color: #cacaca;
        }
        &.bold {
            font-weight: 600;
            font-family: 'Lexend Deca', sans-serif;
        }
    }

    @media (max-width: 1600px) {
        h3 {
            &::before {
                content: '';
                display: block;
                position: relative;
                left: 0;
                top: 0;
                width: 52px;
                height: 4px;
                background-color: #cacaca;
            }
        }
    }

    @media (max-width: 1024px) {
        margin-bottom: 40px;
        h3 {
            font-size: 46px;
        }
    }

    @media (max-width: 768px) {
        margin-bottom: 20px;
        h3 {
            font-size: 42px;
        }
    }

    @media (max-width: 600px) {
        h3 {
            font-size: 38px;
            &::before {
                width: 48px;
            }
        }
    }

    @media (max-width: 480px) {
        margin-bottom: 16px;
        h3 {
            font-size: 32px;
            &::before {
                width: 36px;
            }
        }
    }
`;

export const InteriorDetailContainer = styled.section`
    .inner {
        width: 95%;
        .box {
            margin-bottom: 100px;
            .txt {
                display: flex;
                flex-direction: column;
                gap: 8px;
                .tit {
                    font-weight: 700;
                    font-size: 24px;
                    font-family: 'Lexend Deca', sans-serif;
                }
                .desc {
                    font-size: 16px;
                    color: #b9b9b9;
                    line-height: 1.35;
                }
            }
            .pics {
                margin-top: 50px;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 34px;
                &.trd {
                    grid-template-columns: repeat(3, 1fr);
                    .pic {
                        height: 38vw;
                        max-height: 570px;
                    }
                }
            }
        }
    }

    @media (max-width: 1024px) {
        margin: 100px 0;
        .inner {
            .box {
                margin-bottom: 80px;
                .txt {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    .tit {
                        font-weight: 700;
                        font-size: 22px;
                        font-family: 'Lexend Deca', sans-serif;
                    }
                    .desc {
                        font-size: 15px;
                        color: #b9b9b9;
                        line-height: 1.35;
                    }
                }
                .pics {
                    margin-top: 32px;
                    gap: 20px;
                    grid-template-columns: repeat(2, 1fr);

                    &.trd {
                        grid-template-columns: repeat(3, 1fr);
                        .pic {
                            height: 38vw;
                            max-height: 570px;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        margin: 40px 0 0;
        .inner {
            .box {
                margin-bottom: 72px;
                .txt {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    .tit {
                        font-weight: 700;
                        font-size: 20px;
                        font-family: 'Lexend Deca', sans-serif;
                    }
                    .desc {
                        word-break: keep-all;
                        font-size: 15px;
                        color: #b9b9b9;
                        line-height: 1.35;
                        .pc {
                            display: none;
                        }
                    }
                }
                .pics {
                    margin-top: 32px;
                    gap: 26px 16px;
                    grid-template-columns: repeat(2, 1fr);
                    &.trd {
                        grid-template-columns: repeat(3, 1fr);
                        .pic {
                            height: 38vw;
                            max-height: 570px;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 480px) {
        margin: 40px 0 0;
        .inner {
            .box {
                margin-bottom: 70px;
                .txt {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    .tit {
                        font-weight: 700;
                        font-size: 18px;
                        font-family: 'Lexend Deca', sans-serif;
                    }
                    .desc {
                        word-break: keep-all;
                        font-size: 14px;
                        color: #b9b9b9;
                        line-height: 1.35;
                        .pc {
                            display: none;
                        }
                    }
                }
                .pics {
                    margin-top: 24px;
                    gap: 10px;
                    grid-template-columns: repeat(1, 1fr);
                    &.trd {
                        grid-template-columns: repeat(3, 1fr);
                        gap: 5px;
                        .pic {
                            height: 50vw;
                            max-height: 570px;
                        }
                    }
                }
            }
        }
    }
`;

export const InteriorDetailPicContainer = styled.div`
    width: 100%;
    height: 32vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        clip-path: inset(0 100% 0 0);
        transition: ease-out 0.6s;
        opacity: 0;
    }
    &.visible {
        img {
            opacity: 1;
            clip-path: inset(0 0 0 0);
        }
    }

    @media (max-width: 1024px) {
        width: 100%;
        height: 32vw;
    }

    @media (max-width: 480px) {
        width: 100%;
        height: 60vw;
    }
`;

export const InteriorReviewContainer = styled.section`
    .inner {
        width: 95%;
        .box {
            margin-bottom: 100px;
            .txt {
                display: flex;
                align-items: center;
                height: 240px;
                .desc {
                    margin-top: 6px;
                    width: 70%;
                    font-size: 16px;
                    color: #b9b9b9;
                    line-height: 1.35;
                }
                .pic {
                    position: relative;
                    width: 50%;
                    margin-top: 20px;
                    z-index: 1;
                    img {
                        width: 100%;
                    }
                }
            }
            .pics {
                position: relative;
                margin-top: 50px;
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 34px;
                z-index: 0;
            }
        }
    }

    @media (max-width: 1024px) {
        .inner {
            width: 95%;
            .box {
                margin-bottom: 100px;
                .txt {
                    height: 160px;
                    .desc {
                        font-size: 15px;
                    }
                    .pic {
                        margin-top: 50px;
                    }
                }
                .pics {
                    gap: 20px;
                }
            }
        }
    }

    @media (max-width: 768px) {
        .inner {
            width: 95%;
            .box {
                margin-bottom: 100px;
                .txt {
                    height: 210px;
                    flex-direction: column;
                    gap: 0;
                    .desc {
                        word-break: keep-all;
                        width: 100%;
                        align-self: flex-start;
                        font-size: 15px;
                        .pc {
                            display: none;
                        }
                    }
                    .pic {
                        align-self: flex-end;
                        margin-top: 3vw;
                    }
                }
                .pics {
                    gap: 12px;
                }
            }
        }
    }

    @media (max-width: 510px) {
        .inner {
            width: 95%;
            .box {
                margin-bottom: 80px;
                .pics {
                    gap: 8px;
                }
            }
        }
    }

    @media (max-width: 480px) {
        .inner {
            .box {
                margin-bottom: 80px;
                .txt {
                    .desc {
                        font-size: 14px;
                    }
                    .pic {
                        width: 70%;
                    }
                }
                .pics {
                    gap: 8px;
                }
            }
        }
    }
`;

export const InteriorReviewPicContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        clip-path: inset(0 100% 0 0);
        transition: ease-out 0.6s;
        opacity: 0;
    }
    &.visible {
        img {
            opacity: 1;
            clip-path: inset(0 0 0 0);
        }
    }
`;
