import { styled } from 'styled-components';

// 공통
export const AllianceAgreementItemContainer = styled.div`
    border: 1px solid #000;
    border-radius: 3px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    label {
        position: relative;
        cursor: pointer;
        display: flex;
        width: 100%;
        align-items: center;
        gap: 10px;
        .chk {
            position: relative;
            z-index: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 26px;
            height: 26px;
            border: 2px solid #000;
            border-radius: 50%;
            transition: 0.2s;
            background-color: #fff;
            svg {
                font-size: 28px;
                transition: 0.2s;
            }
            &.chked {
                background-color: #1c1c1c;
                color: #fff;
            }
        }
        input {
            position: absolute;
            z-index: 0;
            left: 10px;
            width: 1px;
            height: 1px;
        }
        .txt {
            width: 100%;
            font-size: 20px;
            margin-bottom: 1px;
            letter-spacing: -0.5px;
            word-break: keep-all;
            line-height: 1.4;
        }

        &:hover {
            .chk {
                background-color: #1c1c1c;
                color: #fff;
            }
        }
    }
    button {
        cursor: pointer;
        width: 170px;
        height: 40px;
        background-color: #c0c0c0;
        color: #fff;
        border: none;
        border-radius: 3px;
        font-size: 16px;
        letter-spacing: -1px;
        font-weight: 600;
        transition: 0.3s;
        margin: 0;
        padding: 0 8px;
        text-align: center;
        &:hover {
            background-color: #555;
        }
    }

    @media (max-width: 1350px) {
        label {
            .chk {
                width: 22px;
                height: 22px;
            }
            .txt {
                font-size: 18px;
            }
        }
        button {
            width: 165px;
            font-size: 15px;
        }
    }

    @media (max-width: 1024px) {
        label {
            .chk {
                width: 18px;
                height: 18px;
            }
            .txt {
                font-size: 17px;
            }
        }
        button {
            width: 162px;
            height: 35px;
            font-size: 14px;
        }
    }

    @media (max-width: 600px) {
        label {
            .chk {
                width: 18px;
                height: 18px;
            }
            input {
                left: 2px;
                width: 1px;
                height: 1px;
                top: 10px;
            }
            .txt {
                width: 70%;
                font-size: 16px;
            }
        }
        button {
            font-size: 13px;
        }
    }

    @media (max-width: 480px) {
        flex-direction: column;
        label {
            .chk {
                width: 16px;
                height: 16px;
            }
            input {
                left: -9999px;
                top: 0;
            }
            .txt {
                width: 100%;
                font-size: 15px;
            }
        }
        button {
            margin-top: 10px;
            width: 100%;
            font-size: 13px;
            font-weight: 600;
        }
    }
`;

export const AllianceLayoutContainer = styled.div`
    /* 헤더 겹침 해결 */
    margin-top: 100px;

    position: relative;
    width: 100%;
    height: 225px;
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 185px;
        background-image: url('https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_bg.png');
        background-size: cover;
        background-position: center;
    }
    .inner {
        width: 95%;
        h2 {
            position: absolute;
            left: 0;
            top: 102px;
            font-size: 26px;
            b {
                letter-spacing: -0.5px;
                font-weight: 700;
                &.eng {
                    font-family: 'Lexend Deca', sans-serif;
                }
            }
            span {
                line-height: 1.4;
                letter-spacing: -2px;
                display: block;
                font-size: 60px;
                font-weight: 700;
            }
        }
    }

    @media (max-width: 1024px) {
        .inner {
            h2 {
                top: 112px;
                font-size: 24px;
                span {
                    line-height: 1.5;
                    font-size: 54px;
                }
            }
        }
    }

    @media (max-width: 600px) {
        height: 160px;
        &::before {
            height: 130px;
        }
        .inner {
            h2 {
                top: 60px;
                font-size: 20px;
                letter-spacing: -2px;
                span {
                    margin-top: 2px;
                    line-height: 1.6;
                    font-size: 48px;
                }
            }
        }
    }

    @media (max-width: 480px) {
        height: 146px;
        &::before {
            height: 124px;
        }
        .inner {
            h2 {
                top: 68px;
                font-size: 17px;
                letter-spacing: -2px;
                span {
                    margin-top: 2px;
                    line-height: 1.6;
                    font-size: 35px;
                }
            }
        }
    }
`;

export const AllianceListContainer = styled.ul`
    .list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2%;
        margin-bottom: 100px;
        .item {
            padding: 40px;
            width: auto;
            height: 300px;
            cursor: pointer;
            position: relative;
            box-sizing: border-box;
            background-color: #f7f8f9;
            transition: 0.5s;
            overflow: hidden;

            &::after {
                content: '';
                display: block;
                position: absolute;
                right: 0;
                bottom: 0;
                width: 100%;
                min-width: 408px;
                height: 100%;
                transition: 0.5s;
                background-repeat: no-repeat;
                background-position: bottom -60px right -220px;
                background-size: 100%;
                opacity: 0.1;
            }

            a {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 100%;
                height: 100%;
                .icon {
                    width: 55px;
                    height: 55px;
                    background-repeat: no-repeat;
                    transition: 0.5s;
                }
                .tit {
                    p {
                        color: #9fa1b8;
                        transition: 0.5s;
                        font-weight: 600;
                        font-family: 'Lexend Deca', sans-serif;
                        font-size: 18px;
                        letter-spacing: -0.2px;
                    }
                    strong {
                        font-weight: 700;
                        transition: 0.5s;
                        font-size: 32px;
                        letter-spacing: -1px;
                        line-height: 1.4;
                        .mo {
                            display: none;
                        }
                    }
                }
            }

            &.item01 {
                &::after {
                    background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img03.svg);
                }
                a {
                    .icon {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img03.svg);
                    }
                }
            }
            &.item02 {
                &::after {
                    background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img01.svg);
                }
                a {
                    .icon {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img01.svg);
                    }
                }
            }
            &.item03 {
                &::after {
                    background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img02.svg);
                }
                a {
                    .icon {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img02.svg);
                    }
                }
            }

            &:hover {
                background-color: #9fa1b8;
                box-shadow: -6px 6px 16px #9fa1b8dd;

                a {
                    .tit {
                        p {
                            color: #fff;
                        }
                        strong {
                            color: #fff;
                        }
                    }
                }

                &.item01 {
                    &::after {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img03_w.svg);
                    }
                    a {
                        .icon {
                            background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img03_w.svg);
                        }
                    }
                }
                &.item02 {
                    &::after {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img01_w.svg);
                    }
                    a {
                        .icon {
                            background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img01_w.svg);
                        }
                    }
                }
                &.item03 {
                    &::after {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img02_w.svg);
                    }
                    a {
                        .icon {
                            background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img02_w.svg);
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 1440px) {
        .list {
            .item {
                height: 280px;
                a {
                    .icon {
                        width: 50px;
                        height: 50px;
                    }
                    .tit {
                        p {
                            font-size: 17px;
                        }
                        strong {
                            font-size: 30px;
                            line-height: 1.3;
                            letter-spacing: -2px;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 1200px) {
        .list {
            .item {
                height: 260px;
                padding: 35px;

                &::after {
                    min-width: 370px;
                    background-position: bottom -50px right -200px;
                }

                a {
                    .icon {
                        width: 50px;
                        height: 50px;
                    }
                    .tit {
                        p {
                            font-size: 16px;
                        }
                        strong {
                            font-size: 28px;
                            line-height: 1.3;
                            letter-spacing: -2px;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 1024px) {
        .list {
            .item {
                height: 250px;
                padding: 30px;

                &::after {
                    min-width: 360px;
                    background-position: bottom -60px right -190px;
                }

                a {
                    .icon {
                        width: 50px;
                        height: 50px;
                    }
                    .tit {
                        p {
                            font-size: 15px;
                        }
                        strong {
                            font-size: 24px;
                            line-height: 1.3;
                            letter-spacing: -2px;
                            .mo {
                                display: block;
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        .list {
            margin-bottom: 80px;
            .item {
                height: 240px;
                padding: 25px;
                background-color: #9fa1b8;
                box-shadow: -3px 3px 10px #9fa1b8aa;

                &::after {
                    min-width: 300px;
                    background-position: bottom -30px right -150px;
                }

                a {
                    .icon {
                        width: 40px;
                        height: 50px;
                    }
                    .tit {
                        p {
                            font-size: 14px;
                            color: #fff;
                            line-height: 1.3;
                        }
                        strong {
                            display: block;
                            font-size: 22px;
                            margin-top: 2px;
                            line-height: 1.3;
                            letter-spacing: -2px;
                            color: #fff;
                            .mo {
                                display: block;
                            }
                        }
                    }
                }

                &.item01 {
                    &::after {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img03_w.svg);
                    }
                    a {
                        .icon {
                            background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img03_w.svg);
                        }
                    }
                }
                &.item02 {
                    &::after {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img01_w.svg);
                    }
                    a {
                        .icon {
                            background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img01_w.svg);
                        }
                    }
                }
                &.item03 {
                    &::after {
                        background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img02_w.svg);
                    }
                    a {
                        .icon {
                            background-image: url(https://teamproject-dessert39.github.io/dataCenter/images/franchise/alliance_img02_w.svg);
                        }
                    }
                }

                &:hover {
                    box-shadow: -3px 3px 10px #9fa1b8aa;
                }
            }
        }
    }

    @media (max-width: 600px) {
        .list {
            margin-bottom: 60px;
            .item {
                height: 220px;
                padding: 25px;
                background-color: #9fa1b8;
                box-shadow: -3px 3px 10px #9fa1b8aa;

                &::after {
                    min-width: 260px;
                    background-position: bottom -20px right -130px;
                }

                a {
                    .icon {
                        width: 40px;
                        height: 50px;
                    }
                    .tit {
                        p {
                            font-size: 12px;
                            color: #fff;
                            line-height: 1.3;
                        }
                        strong {
                            display: block;
                            font-size: 20px;
                            margin-top: 6px;
                            line-height: 1.3;
                            letter-spacing: -2px;
                            color: #fff;
                            .mo {
                                display: block;
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 480px) {
        .list {
            margin-bottom: 60px;
            grid-template-columns: repeat(1, 1fr);
            gap: 20px;
            .item {
                height: 150px;
                padding: 25px;
                background-color: #9fa1b8;
                box-shadow: -3px 3px 8px 2px #9fa1b8aa;

                &::after {
                    width: 100%;
                    min-width: auto;
                    background-size: 260px;
                    background-position: bottom -50px right -120px;
                }

                a {
                    .icon {
                        width: 40px;
                        height: 50px;
                    }
                    .tit {
                        p {
                            font-size: 12px;
                            color: #fff;
                            line-height: 1.3;
                        }
                        strong {
                            display: block;
                            font-size: 20px;
                            margin-top: 6px;
                            line-height: 1.3;
                            letter-spacing: -2px;
                            color: #fff;
                            .mo {
                                display: none;
                            }
                        }
                    }

                    &:hover {
                        box-shadow: -3px 3px 8px 2px #9fa1b8aa;
                    }
                }
            }
        }
    }
`;

// AlliancePopup
export const AlliancePopupContainer = styled.div`
    position: fixed;
    background-color: #000000aa;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    transition: 0.3s;
    opacity: 0;
    /* padding: 0 20px; */
    box-sizing: border-box;
    &.active {
        opacity: 1;
        z-index: 9999;
    }
    .box {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 90%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        box-shadow: 0px 0px 20px #00000040;
        border-radius: 25px;
        max-width: 600px;
        padding: 35px;
        box-sizing: border-box;
        .title {
            position: relative;
            padding-bottom: 50px;
            border-bottom: 2px solid #1c1c1c;
            width: 100%;
            text-align: center;
            strong {
                font-size: 28px;
                font-weight: 700;
                letter-spacing: -0.5px;
            }
            .close {
                cursor: pointer;
                position: absolute;
                right: 0;
                top: 8px;
                width: 32px;
                height: 32px;
                border-radius: 50%;
                border: 3px solid #000;
                background-color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0;
                .icon {
                    font-size: 24px;
                }
            }
        }
        .desc {
            padding: 15px;
            padding-bottom: 0;
            max-height: 500px;
            overflow-y: scroll;
            &::-webkit-scrollbar {
                width: 6px;
            }
            &::-webkit-scrollbar-track {
                background-color: #fff;
            }
            &::-webkit-scrollbar-thumb {
                background-color: #c0c0c0;
            }
            ul {
                display: flex;
                flex-direction: column;
                gap: 40px;
                li {
                    font-size: 16px;
                    letter-spacing: -0.5px;
                    word-break: keep-all;
                    line-height: 1.5;
                    b {
                        font-weight: 700;
                    }
                }
            }
        }
        .agree {
            margin-top: 40px;
            text-align: center;
        }
    }

    @media (max-width: 1440px) {
        .box {
            padding: 35px;
            max-width: 550px;
            .title {
                padding-bottom: 45px;
                strong {
                    font-size: 26px;
                }
            }
            .desc {
                ul {
                    gap: 35px;
                }
            }
            .agree {
                margin-top: 35px;
            }
        }
    }

    @media (max-width: 1024px) {
        .box {
            padding: 30px;
            max-width: 500px;
            .title {
                padding-bottom: 38px;
                strong {
                    font-size: 24px;
                }
                .close {
                    cursor: pointer;
                    position: absolute;
                    right: 0;
                    top: 5px;
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    border: 3px solid #000;
                    background-color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0;
                    .icon {
                        font-size: 22px;
                    }
                }
            }
            .desc {
                ul {
                    gap: 30px;
                    li {
                        font-size: 15px;
                    }
                }
            }
            .agree {
                margin-top: 30px;
            }
        }
    }

    @media (max-width: 600px) {
        .box {
            padding: 25px;
            max-width: 500px;
            .title {
                padding-bottom: 32px;
                strong {
                    font-size: 22px;
                }
                .close {
                    cursor: pointer;
                    position: absolute;
                    right: 0;
                    top: 5px;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    border: 3px solid #000;
                    background-color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0;
                    .icon {
                        font-size: 19px;
                    }
                }
            }
            .desc {
                padding: 10px;
                ul {
                    gap: 25px;
                    li {
                        font-size: 14px;
                    }
                }
            }
            .agree {
                margin-top: 20px;
            }
        }
    }

    @media (max-width: 480px) {
        .box {
            padding: 20px;
            max-width: 500px;
            .title {
                padding-bottom: 24px;
                strong {
                    font-size: 20px;
                }
                .close {
                    cursor: pointer;
                    position: absolute;
                    right: 0;
                    top: 5px;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    border: 3px solid #000;
                    background-color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0;
                    .icon {
                        font-size: 19px;
                    }
                }
            }
            .desc {
                padding: 10px;
                box-sizing: border-box;
                height: calc(100% - 52px - 55px);
                ul {
                    gap: 16px;
                    li {
                        font-size: 14px;
                        line-height: 1.3;
                    }
                }
            }
            .agree {
                margin-top: 14px;
            }
        }
    }
`;

// AllianceTitle
export const AllianceTitleContainer = styled.div`
    margin-top: 100px;
    h3 {
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 25px;
        letter-spacing: -1.3px;
        word-break: keep-all;
        span {
            display: inline-block;
            font-size: 16px;
            letter-spacing: -0.5px;
            font-weight: 400;
            line-height: 1.4;
            &::before {
                content: '*';
                display: inline-block;
                margin: 0 5px;
                font-size: 15px;
                color: #c0c0c0;
            }
        }
    }
    p {
        font-size: 14px;
        font-weight: 300;
        line-height: 1.5;
        margin-bottom: 10px;
        word-break: keep-all;
        &::before {
            content: 'ℹ️️';
            margin-right: 4px;
        }
        b {
            font-weight: 700;
        }
    }

    @media (max-width: 1200px) {
        h3 {
            font-size: 25px;
            margin-bottom: 20px;
            span {
                font-size: 15px;
                &::before {
                    font-size: 15px;
                }
            }
        }
    }

    @media (max-width: 1024px) {
        margin-top: 80px;
    }

    @media (max-width: 980px) {
        h3 {
            font-size: 23px;
        }
    }

    @media (max-width: 600px) {
        margin-top: 50px;
        h3 {
            font-size: 20px;
            margin-bottom: 15px;
            span {
                font-size: 14px;
                &::before {
                    margin: 0 4px;
                    font-size: 14px;
                }
            }
        }
        p {
            font-size: 12px;
            letter-spacing: -0.7px;
            &::before {
                margin-right: 2px;
            }
        }
    }

    @media (max-width: 480px) {
        margin-top: 50px;
        h3 {
            font-size: 18px;
        }
        p {
            font-size: 12px;
            letter-spacing: -0.7px;
            &::before {
                margin-right: 2px;
            }
        }
    }
`;

// AllianceCertify
export const AllianceCertifyContainer = styled.div`
    position: fixed;
    background-color: #000000aa;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    transition: 0.3s;
    opacity: 0;
    /* padding: 0 20px; */
    box-sizing: border-box;
    &.active {
        opacity: 1;
        z-index: 9999;
    }
    .box {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 90%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        box-shadow: 0px 0px 20px #00000040;
        max-width: 720px;
        padding: 30px;
        box-sizing: border-box;
        .close {
            cursor: pointer;
            position: absolute;
            right: -16px;
            top: -16px;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: 3px solid #000;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            .icon {
                font-size: 24px;
            }
        }
        .title {
            position: relative;
            padding-bottom: 30px;
            border-bottom: 1px solid #1c1c1c;
            width: 100%;
            strong {
                font-size: 25px;
                font-weight: 700;
                letter-spacing: -0.5px;
            }
            p {
                margin-top: 10px;
                color: #666;
                font-size: 14px;
                letter-spacing: -0.5px;
                span {
                    font-weight: 700;
                }
            }
        }
        .desc {
            table {
                width: 100%;
                th {
                    width: 120px;
                    border: 1px solid #ddd;
                    border-top: none;
                    box-sizing: border-box;
                    font-size: 18px;
                    font-weight: 700;
                    background-color: #fafafc;
                    color: #444;
                }
                td {
                    /* width: calc(100% - 120px); */
                    box-sizing: border-box;
                    padding: 15px;
                    border: 1px solid #ddd;
                    border-left: none;
                    border-top: none;
                    input {
                        font-weight: 400;
                        font-size: 16px;
                        outline: none;
                        width: 200px;
                        height: 35px;
                        padding: 0 10px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        box-sizing: border-box;
                        font-family: 'Noto Sans KR', sans-serif;
                    }
                }
                .phone {
                    width: 100%;
                    display: flex;
                    gap: 8px;
                    select {
                        font-size: 16px;
                        box-sizing: border-box;
                        padding: 0 10px;
                        font-family: 'Noto Sans KR', sans-serif;
                        outline: none;
                        width: 16%;
                        height: 35px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        &:nth-of-type(1) {
                            margin-right: 8px;
                        }
                    }
                    input {
                        width: 16%;
                    }
                    span {
                        padding-top: 4px;
                    }
                    button {
                        width: 110px;
                        height: 35px;
                        font-size: 16px;
                        border: 2px solid #1c1c1c;
                        border-radius: 5px;
                        font-weight: 600;
                        line-height: 1.4;
                        cursor: pointer;
                        background-color: #fff;
                        font-family: 'Noto Sans KR', sans-serif;
                        letter-spacing: -0.5px;
                        box-sizing: border-box;
                        margin-left: 8px;
                        transition: 0.5s;
                        &:hover {
                            background-color: #1c1c1c;
                            color: #fff;
                        }
                    }
                }
            }
            p {
                line-height: 1.4;
                letter-spacing: -0.5px;
                margin: 10px 0 25px;
                font-size: 14px;
                color: #666;
            }
        }
        .certify_btns {
            width: 100%;
            display: flex;
            justify-content: center;
            gap: 20px;
            button {
                width: 120px;
                height: 40px;
                border: 2px solid #1c1c1c;
                font-weight: 500;
                font-size: 15px;
                background-color: #fff;
                border-radius: 40px;
                cursor: pointer;
                font-family: 'Noto Sans KR', sans-serif;
                &.next {
                    background-color: #1c1c1c;
                    color: #fff;
                }
            }
        }
    }
`;
