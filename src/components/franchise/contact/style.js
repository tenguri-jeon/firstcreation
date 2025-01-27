import { styled } from 'styled-components';

// agreement
export const ContactAgreementContainer = styled.section``;

export const ContactAgreementItemContainer = styled.div`
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
            left: 2px;
            top: 0;
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
        width: 165px;
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
            width: 155px;
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
            width: 150px;
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
                left: 0px;
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
                left: 0px;
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

// form
export const ContactFormContainer = styled.section`
    /* 기본 */
    .input_wrap {
        border-top: 2px solid #ececec;
        border-bottom: 2px solid #ececec;
        display: flex;
        align-items: center;
        gap: 40px;
        .input_box {
            padding: 40px 0;
            display: flex;
            align-items: center;
            .left {
                width: 150px;
                label {
                    font-size: 20px;
                    font-weight: 700;
                    &.req::after {
                        content: '*';
                        display: inline-block;
                        margin-left: 4px;
                        color: #c0c0c0;
                    }
                }
                span {
                    font-size: 14px;
                    margin-top: 3px;
                    display: block;
                    color: #999;
                    font-weight: 700;
                    letter-spacing: -0.5px;
                }
            }
            .right {
                display: flex;
                align-items: center;
                gap: 13px;
                .plus {
                    font-size: 14px;
                    padding: 5px 15px;
                    font-weight: 700;
                    border-radius: 5px;
                    background-color: #ffeebd;
                    line-height: 1.5;
                    letter-spacing: -0.5px;
                    word-break: keep-all;
                }
                select {
                    width: 170px;
                    height: 50px;
                    padding: 0 15px;
                    font-size: 16px;
                    letter-spacing: -0.5px;
                    border: 1px solid #d4d5d8;
                    background-color: #fafafc;
                    color: #5c5c5c;
                    outline: none;
                    box-sizing: border-box;
                    font-family: 'Noto Sans KR', sans-serif;
                }
                input {
                    font-size: 16px;
                    letter-spacing: -0.5px;
                    outline: none;
                    box-sizing: border-box;
                }
                input[type='text'] {
                    height: 50px;
                    padding: 0 15px;
                    border: 1px solid #d4d5d8;
                    background-color: #fafafc;
                    font-family: 'Noto Sans KR', sans-serif;
                    &::placeholder {
                        color: #ccc;
                    }
                }
                .radio {
                    display: flex;
                    align-items: center;
                    gap: 25px;
                    label {
                        position: relative;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        input[type='radio'] {
                            /* display: none; */
                            position: absolute;
                            left: 2px;
                            width: 1px;
                            height: 1px;
                        }
                        .custom {
                            width: 20px;
                            height: 20px;
                            margin-top: 2px;
                            position: relative;
                            border: 1px solid #c0c0c0;
                            box-sizing: border-box;
                            margin: 0;
                            border-radius: 50%;
                            &::after {
                                content: '';
                                display: block;
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                                width: 0px;
                                height: 0px;
                                background-color: #1c1c1c;
                                border-radius: 50%;
                                transition: 0.3s;
                            }
                        }
                        input[type='radio']:checked + .custom::after {
                            width: 50%;
                            height: 50%;
                        }
                        span {
                            font-size: 18px;
                            letter-spacing: -0.5px;
                        }
                    }
                }
                .check {
                    display: flex;
                    align-items: center;
                    gap: 25px;
                    label {
                        position: relative;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        input[type='checkbox'] {
                            position: absolute;
                            left: 2px;
                            width: 1px;
                            height: 1px;
                            /* display: none; */
                        }
                        .custom {
                            width: 20px;
                            height: 20px;
                            margin-top: 2px;
                            position: relative;
                            border: 1px solid #c0c0c0;
                            box-sizing: border-box;
                            margin: 0;
                            &::after {
                                content: '✓';
                                display: block;
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                font-size: 13px;
                                padding-bottom: 3px;
                                box-sizing: border-box;
                                color: #fff;
                                background-color: #fff;
                                transition: 0.3s;
                            }
                        }
                        input[type='checkbox']:checked + .custom::after {
                            background-color: #c0c0c0;
                        }
                        span {
                            font-size: 18px;
                            letter-spacing: -0.5px;
                        }
                        input[type='text'] {
                            margin-left: 8px;
                            width: 430px;
                        }
                    }
                }
                textarea {
                    font-size: 16px;
                    padding: 15px;
                    width: 100%;
                    height: 400px;
                    color: #5c5c5c;
                    border: 1px solid #d4d5d8;
                    background-color: #fafafc;
                    font-weight: 400;
                    outline: none;
                    box-sizing: border-box;
                    font-family: 'Noto Sans KR', sans-serif;
                    resize: none;
                }
                .precaution {
                    width: calc(100% - 350px);
                    font-size: 16px;
                    line-height: 1.4;
                    letter-spacing: -0.5px;
                    word-break: keep-all;
                    font-weight: 400;
                    &::before {
                        content: '*';
                        display: inline-block;
                        color: #d40c24;
                        margin-right: 4px;
                        font-size: 20px;
                        transform: translateY(3px);
                    }
                }
            }
        }
        /* -- */

        .phone {
            .right {
                select {
                    width: 170px;
                }
                input {
                    width: calc(430px - 13px - 170px);
                    letter-spacing: 0.5px;
                    &::placeholder {
                        font-size: 14px;
                    }
                }
            }
        }

        .purpose,
        .shape {
            padding-bottom: 0;
            .right {
                flex-direction: column;
                align-items: flex-start;
                gap: 6px;
            }
        }

        .shape {
            .right {
                .check {
                    gap: 20px;
                    .top {
                        display: flex;
                        gap: 25px;
                    }
                }
            }
        }

        .time {
            .right {
                select {
                    width: calc(430px - 13px - 170px);
                }
            }
        }

        .motive {
            .right {
                .check {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 20px;
                    .top {
                        display: flex;
                        gap: 25px;
                    }
                }
            }
        }

        .desc {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
            width: 100%;
            .right {
                width: 100%;
                flex-direction: column;
                align-items: flex-start;
            }
        }
    }

    .input_wrap02 {
        flex-direction: column;
        align-items: flex-start;
        gap: 0;
        border-top: none;
    }
    .input_wrap03 {
        border-top: none;
    }
    .input_wrap04 {
        border-top: none;
        border-bottom: none;
    }

    .submit_btn {
        width: fit-content;
        margin: 0 auto;
        padding-bottom: 100px;
        & > button {
            background-color: transparent;
            border: none;
        }
    }

    /* 반응형 */
    @media (max-width: 1350px) {
        .input_wrap {
            gap: 35px;
            .input_box {
                padding: 35px 0;
                .left {
                    width: 140px;
                    label {
                        font-size: 19px;
                        &.req::after {
                            font-size: 18px;
                        }
                    }
                }
                .right {
                    .check {
                        label {
                            input[type='text'] {
                                width: 370px;
                            }
                        }
                    }
                    .precaution {
                        width: calc(100% - 300px);
                    }
                }
            }

            .phone {
                .right {
                    select {
                        width: 150px;
                    }
                    input {
                        width: calc(370px - 13px - 150px);
                    }
                }
            }

            .purpose,
            .shape {
                padding-bottom: 0;
                .right {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 6px;
                }
            }

            .time {
                .right {
                    select {
                        width: calc(370px - 13px - 150px);
                    }
                }
            }
        }

        .input_wrap02 {
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
            border-top: none;
        }
    }

    @media (max-width: 1240px) {
        .input_wrap {
            gap: 35px;
            .input_box {
                padding: 35px 0;
                .left {
                    width: 140px;
                    label {
                        font-size: 19px;
                        letter-spacing: -0.5px;
                        &.req::after {
                            font-size: 18px;
                        }
                    }
                }
                .right {
                    .check {
                        label {
                            input[type='text'] {
                                width: 370px;
                            }
                        }
                    }
                    .precaution {
                        width: 70%;
                    }
                }
            }

            .shape {
                .right {
                    .check {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 20px;
                        .top {
                            display: flex;
                            gap: 25px;
                        }
                    }
                }
            }

            .phone {
                .right {
                    select {
                        width: 150px;
                    }
                    input {
                        width: calc(370px - 13px - 150px);
                    }
                }
            }

            .time {
                .right {
                    select {
                        width: calc(370px - 13px - 150px);
                    }
                }
            }

            .purpose,
            .shape {
                padding-bottom: 0;
                .right {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 6px;
                }
            }
        }

        .input_wrap02 {
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
            border-top: none;
        }
    }

    @media (max-width: 1120px) {
        .input_wrap01 {
            padding: 35px 0;
            flex-direction: column;
            align-items: flex-start;
            .input_box {
                padding: 0;
            }
        }
    }

    @media (max-width: 1024px) {
        .input_wrap {
            gap: 30px;
            .input_box {
                padding: 30px 0;
                .left {
                    width: 125px;
                    label {
                        font-size: 18px;
                        letter-spacing: -0.5px;
                        &.req::after {
                            font-size: 18px;
                        }
                    }
                }
                .right {
                    select,
                    input[type='text'] {
                        font-size: 15px;
                        height: 45px;
                    }
                    .radio {
                        label {
                            span {
                                font-size: 17px;
                            }
                        }
                    }
                    .check {
                        label {
                            span {
                                font-size: 17px;
                            }
                            input[type='text'] {
                                width: 280px;
                            }
                        }
                    }
                    .precaution {
                        width: calc(100% - 270px);
                    }
                    textarea {
                        font-size: 15px;
                        height: 350px;
                    }
                }
            }

            .shape {
                .right {
                    .check {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 20px;
                        .top {
                            display: flex;
                            gap: 25px;
                        }
                    }
                }
            }

            .phone {
                .right {
                    gap: 10px;
                    select {
                        width: 130px;
                    }
                    input {
                        width: calc(280px - 10px - 130px);
                    }
                }
            }

            .time {
                .right {
                    select {
                        width: calc(370px - 13px - 150px);
                    }
                }
            }

            .purpose,
            .shape {
                padding-bottom: 0;
                .right {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 6px;
                }
            }
        }

        .input_wrap01 {
            padding: 0;
            flex-direction: row;
            align-items: center;
            .input_box {
                padding: 30px 0;
            }
        }

        .input_wrap02 {
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
            border-top: none;
        }
    }

    @media (max-width: 980px) {
        .submit_btn {
            padding-bottom: 70px;
        }
    }

    @media (max-width: 900px) {
        .input_wrap {
            gap: 30px;
            .input_box {
                padding: 30px 0;
                .left {
                    width: 125px;
                    label {
                        font-size: 18px;
                        letter-spacing: -0.5px;
                        &.req::after {
                            font-size: 18px;
                        }
                    }
                }
                .right {
                    select,
                    input[type='text'] {
                        font-size: 15px;
                        height: 45px;
                    }
                    .radio {
                        label {
                            span {
                                font-size: 17px;
                            }
                        }
                    }
                    .check {
                        label {
                            span {
                                font-size: 17px;
                            }
                            input[type='text'] {
                                width: 280px;
                            }
                        }
                    }
                    .precaution {
                        width: calc(100% - 270px);
                        font-size: 15px;
                    }
                    textarea {
                        height: 300px;
                    }
                }
            }

            .shape {
                .right {
                    .check {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 12px;
                        .top {
                            display: flex;
                            gap: 25px;
                        }
                    }
                }
            }

            .phone {
                .right {
                    gap: 10px;
                    select {
                        width: 130px;
                    }
                    input {
                        width: calc(280px - 10px - 130px);
                    }
                }
            }

            .time {
                .right {
                    select {
                        width: calc(370px - 13px - 150px);
                    }
                }
            }

            .purpose,
            .shape {
                padding-bottom: 0;
                .right {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 6px;
                }
            }

            .motive {
                .right {
                    .check {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 12px;
                        .top {
                            flex-wrap: wrap;
                            width: 80%;
                            display: flex;
                            gap: 15px 25px;
                        }
                    }
                }
            }
        }

        .input_wrap01 {
            padding: 30px 0;
            flex-direction: column;
            align-items: flex-start;
            .input_box {
                padding: 0;
            }
        }

        .input_wrap02 {
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
            border-top: none;
        }
    }

    @media (max-width: 600px) {
        .input_wrap {
            gap: 25px;
            .input_box {
                padding: 25px 0;
                .left {
                    width: 100%;
                    label {
                        font-size: 17px;
                        letter-spacing: -0.5px;
                        &.req::after {
                            font-size: 17px;
                        }
                    }
                    span {
                        display: inline-block;
                        margin-left: 4px;
                    }
                }
                .right {
                    select,
                    input[type='text'] {
                        font-family: 'Noto Sans KR', sans-serif;
                        font-size: 14px;
                        height: 45px;
                    }
                    .radio {
                        label {
                            span {
                                font-size: 16px;
                            }
                        }
                    }
                    .check {
                        label {
                            span {
                                font-size: 16px;
                            }
                            input[type='text'] {
                                width: 250px;
                            }
                        }
                    }
                    .precaution {
                        width: 100%;
                        font-size: 14px;
                    }
                    textarea {
                        font-size: 14px;
                    }
                    .plus {
                        font-size: 12px;
                    }
                }
            }

            .shape {
                .right {
                    .check {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 12px;
                        .top {
                            display: flex;
                            gap: 25px;
                        }
                    }
                }
            }

            .phone {
                width: 100%;
                .right {
                    width: 100%;
                    gap: 10px;
                    select {
                        width: 50%;
                    }
                    input {
                        width: 50%;
                    }
                }
            }

            .time {
                .right {
                    select {
                        width: 100%;
                    }
                }
            }

            .purpose,
            .shape {
                padding-bottom: 0;
                .right {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 6px;
                }
            }

            .motive {
                .right {
                    .check {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 12px;
                        .top {
                            flex-wrap: wrap;
                            width: 100%;
                            display: flex;
                            gap: 15px 25px;
                        }
                    }
                }
            }
        }

        .input_wrap01 {
            padding: 25px 0;
            flex-direction: column;
            align-items: flex-start;
            .input_box {
                flex-direction: column;
                align-items: flex-start;
                gap: 15px;
                padding: 0;
            }
        }

        .input_wrap02 {
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
            border-top: none;
            .input_box {
                flex-direction: column;
                align-items: flex-start;
                gap: 15px;
            }
        }

        .input_wrap03 {
            .input_box {
                flex-direction: column;
                align-items: flex-start;
                gap: 15px;
            }
        }

        form {
            .submit_btn {
                padding-bottom: 50px;
            }
        }
    }
`;

// title
export const ContactTitleContainer = styled.div`
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

// layout
export const ContactLayoutContainer = styled.div`
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
            letter-spacing: -2px;
            b {
                margin: 0 5px;
                letter-spacing: -0.5px;
                font-weight: 700;
            }
            span {
                display: block;
                font-size: 60px;
                font-weight: 700;
                margin-top: 1px;
            }
        }
    }

    @media (max-width: 1024px) {
        .inner {
            h2 {
                top: 111px;
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

// intro
export const ContactIntroContainer = styled.section`
    padding: 60px 0 25px;
    p {
        font-weight: 500;
        font-size: 18px;
        letter-spacing: -0.5px;
        line-height: 1.5;
        word-break: keep-all;
        span {
            vertical-align: 1px;
            margin-left: 4px;
            font-weight: 400;
            font-family: 'Lexend Deca', sans-serif;
            background: linear-gradient(to top, #c0c0c044 20%, #fff 30%);
        }
    }

    @media (max-width: 1350px) {
        padding: 60px 0 20px;
        p {
            font-size: 17px;
        }
    }

    @media (max-width: 1024px) {
        p {
            font-size: 16px;
        }
    }

    @media (max-width: 990px) {
        padding: 40px 0 20px;
    }

    @media (max-width: 600px) {
        padding: 25px 0 15px;
        p {
            font-size: 15px;
        }
    }

    @media (max-width: 480px) {
        p {
            font-size: 14px;
        }
    }
`;

// quick
export const ContactQuickListContainer = styled.section`
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

// popup
export const ContactPopupContainer = styled.div`
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
