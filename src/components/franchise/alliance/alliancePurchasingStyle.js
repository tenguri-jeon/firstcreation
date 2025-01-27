import { styled } from 'styled-components';

// purchasingForm
export const AlliancePurchasingFormContainer = styled.section`
    .form01,
    .form02 {
        border-top: 2px solid #1c1c1c;
    }

    .form01 {
        .input_wrap {
            padding-top: 40px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
            .input_box {
                box-sizing: border-box;
                display: flex;
                align-items: center;
                .left {
                    width: 200px;
                    label {
                        font-size: 20px;
                        font-weight: 700;
                        letter-spacing: -0.5px;
                        &.req::after {
                            content: '*';
                            display: inline-block;
                            margin-left: 4px;
                            color: #c0c0c0;
                        }
                    }
                    span {
                        display: block;
                        font-size: 16px;
                        margin-top: 3px;
                        font-weight: 700;
                        letter-spacing: -0.5px;
                    }
                }
                .right {
                    width: auto;
                    display: flex;
                    align-items: center;
                    gap: 13px;
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
                        letter-spacing: -0.5px;
                        font-size: 16px;
                        box-sizing: border-box;
                        font-family: 'Noto Sans KR', sans-serif;
                        &::placeholder {
                            color: #999;
                            font-weight: 300;
                            font-size: 16px;
                            letter-spacing: -0.5px;
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

            .company,
            .name,
            .title {
                .right {
                    width: calc(100% - 200px);
                    box-sizing: border-box;
                    input {
                        width: 100%;
                    }
                }
            }

            .b_number,
            .phone {
                .right {
                    width: calc(100% - 200px);
                    box-sizing: border-box;
                    input {
                        width: 33.3%;
                    }
                }
            }

            .email {
                .right {
                    width: calc(100% - 200px);
                    box-sizing: border-box;
                    display: flex;
                    justify-content: space-between;
                    gap: 18px;
                    input {
                        position: relative;
                        width: 50%;
                    }
                    select {
                        width: 50%;
                    }
                }
            }
        }
    }

    .form02 {
        .input_wrap {
            padding-top: 40px;
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 40px;
            .input_box {
                width: 60%;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                .left {
                    width: 200px;
                    label {
                        font-size: 20px;
                        font-weight: 700;
                        letter-spacing: -0.5px;
                        &.req::after {
                            content: '*';
                            display: inline-block;
                            margin-left: 4px;
                            color: #c0c0c0;
                        }
                    }
                    span {
                        display: block;
                        font-size: 16px;
                        margin-top: 3px;
                        font-weight: 700;
                        letter-spacing: -0.5px;
                    }
                }
                .right {
                    max-width: 520px;
                    width: calc(100% - 200px);
                    display: flex;
                    align-items: center;
                    gap: 13px;
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
                    }
                    input {
                        font-size: 16px;
                        letter-spacing: -0.5px;
                        outline: none;
                        box-sizing: border-box;
                    }
                    input[type='text'],
                    input[type='date'] {
                        width: calc(100% - 75px);
                        height: 50px;
                        padding: 0 15px;
                        border: 1px solid #d4d5d8;
                        background-color: #fafafc;
                        letter-spacing: -0.5px;
                        font-size: 16px;
                        box-sizing: border-box;
                        font-family: 'Noto Sans KR', sans-serif;
                        &::placeholder {
                            color: #999;
                            font-weight: 300;
                            font-size: 16px;
                            letter-spacing: -0.5px;
                        }
                    }
                    .radio {
                        display: flex;
                        align-items: center;
                        gap: 25px;
                        label {
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            gap: 8px;
                            input[type='radio'] {
                                /* display: none; */
                                position: absolute;
                                left: -9999px;
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
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            gap: 8px;
                            input[type='checkbox'] {
                                position: absolute;
                                left: -9999px;
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
                        padding: 20px;
                        width: 100%;
                        height: 180px;
                        color: #5c5c5c;
                        border: 1px solid #d4d5d8;
                        /* background-color: #fafafc; */
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

            .hope {
                width: 100%;
                .right {
                    max-width: calc(100% - 200px);
                    width: calc(100% - 200px);
                }
            }

            .price,
            .num {
                .right {
                    span {
                        font-size: 18px;
                        color: #5c5c5c;
                        font-weight: 400;
                        letter-spacing: -0.5px;
                    }
                }
            }

            .desc {
                width: 100%;
                .right {
                    max-width: calc(100% - 200px);
                    width: calc(100% - 200px);
                }
            }
        }

        .add {
            cursor: pointer;
            margin: 50px 0 70px;
            width: 100%;
            height: 50px;
            box-sizing: border-box;
            line-height: 1.4;
            line-height: 50px;
            font-weight: 700;
            font-size: 18px;
            letter-spacing: -1px;
            border: 2px solid #000;
            border-radius: 5px;
            background-color: #fff;
            span {
                margin-left: 6px;
                background-color: #c0c0c0;
                width: 20px;
                height: 20px;
                font-size: 14px;
                border-radius: 50%;
                box-sizing: border-box;
                padding: 3px 2px 0;
                vertical-align: middle;
            }
        }
    }

    .guide {
        margin-top: 70px;
        width: 100%;
        padding: 30px;
        border-radius: 10px;
        box-sizing: border-box;
        background-color: #f4f5f6;
        h3 {
            font-size: 22px;
            letter-spacing: -1px;
            font-weight: 700;
        }
        p {
            font-size: 16px;
            letter-spacing: -0.5px;
            svg {
                margin-right: 4px;
                vertical-align: 0px;
            }
            span {
                font-family: 'Lexend Deca', sans-serif;
            }
        }
        p:nth-of-type(1) {
            margin: 15px 0 20px;
        }
    }

    .btns {
        margin-top: 60px;
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
        button {
            cursor: pointer;
            width: 170px;
            height: 45px;
            font-family: 'Noto Sans KR', sans-serif;
            font-weight: 500;
            border: 2px solid #1c1c1c;
            border-radius: 45px;
            background-color: #fff;
            box-sizing: border-box;
            letter-spacing: -1px;
            font-size: 16px;
            padding: 1px 6px;
            transition: 0.5s;
            &.sure,
            &.prev:hover {
                background-color: #1c1c1c;
                color: #fff;
            }
            &.sure:hover {
                box-shadow: -2px 2px 8px #00000066;
            }
        }
    }

    @media (max-width: 1440px) {
        .form01 {
            .input_wrap {
                gap: 30px;
                .input_box {
                    .left {
                        width: 160px;
                        label {
                            font-size: 18px;
                        }
                    }
                    .right {
                        width: calc(100% - 160px);
                        select {
                            font-size: 16px;
                        }
                        input {
                            font-size: 16px;
                        }
                        .radio {
                            label {
                                span {
                                    font-size: 16px;
                                }
                            }
                        }
                    }
                }
            }
        }

        .form02 {
            .input_wrap {
                gap: 30px;
                .input_box {
                    .left {
                        width: 160px;
                        label {
                            font-size: 18px;
                        }
                    }
                    .right {
                        input {
                            font-size: 16px;
                        }
                        .radio {
                            label {
                                span {
                                    font-size: 16px;
                                }
                            }
                        }
                    }
                }

                .desc {
                    .right {
                        max-width: calc(100% - 160px);
                        width: calc(100% - 160px);
                    }
                }

                .hope {
                    .right {
                        max-width: calc(100% - 160px);
                        width: calc(100% - 160px);
                    }
                }
            }
        }
    }

    @media (max-width: 1280px) {
        .form01 {
            .input_wrap {
                gap: 30px;
                .input_box {
                    .left {
                        width: 140px;
                        label {
                            font-size: 17px;
                            letter-spacing: -1px;
                            line-height: 1.4;
                        }
                    }
                    .right {
                        width: calc(100% - 140px);
                        select {
                            font-size: 16px;
                        }
                        input {
                            font-size: 15px;
                        }
                        .radio {
                            label {
                                span {
                                    font-size: 15px;
                                }
                            }
                        }
                    }
                }
            }
        }

        .form02 {
            .input_wrap {
                gap: 30px;
                .input_box {
                    .left {
                        width: 140px;
                        label {
                            font-size: 17px;
                            letter-spacing: -1px;
                            line-height: 1.4;
                        }
                    }
                    .right {
                        input {
                            font-size: 15px;
                        }
                        .radio {
                            label {
                                span {
                                    font-size: 15px;
                                }
                            }
                        }
                    }
                }

                .desc {
                    .right {
                        max-width: calc(100% - 140px);
                        width: calc(100% - 140px);
                    }
                }

                .hope {
                    .right {
                        max-width: calc(100% - 140px);
                        width: calc(100% - 140px);
                    }
                }
            }
        }

        .guide {
            margin-top: 50px;
        }
    }

    @media (max-width: 1024px) {
        .form01 {
            .input_wrap {
                gap: 30px;
                .input_box {
                    .left {
                        width: 140px;
                        label {
                            font-size: 17px;
                            letter-spacing: -1px;
                            line-height: 1.4;
                        }
                    }
                    .right {
                        width: calc(100% - 140px);
                        select {
                            font-size: 15px;
                            height: 45px;
                        }
                        input {
                            font-size: 15px;
                        }
                        input[type='text'] {
                            height: 45px;
                            font-size: 15px;
                            &::placeholder {
                                font-size: 15px;
                            }
                        }
                        .radio {
                            label {
                                span {
                                    font-size: 15px;
                                }
                            }
                        }
                    }
                }
            }
        }

        .form02 {
            .input_wrap {
                gap: 30px;
                .input_box {
                    .left {
                        width: 140px;
                        label {
                            font-size: 17px;
                            letter-spacing: -1px;
                            line-height: 1.4;
                        }
                    }
                    .right {
                        select {
                            font-size: 15px;
                        }
                        input {
                            font-size: 15px;
                        }
                        input[type='text'],
                        input[type='date'] {
                            height: 45px;
                            font-size: 15px;
                            &::placeholder {
                                font-size: 15px;
                            }
                        }
                        .radio {
                            label {
                                span {
                                    font-size: 15px;
                                }
                            }
                        }
                    }
                }

                .price,
                .num {
                    .right {
                        span {
                            font-size: 17px;
                        }
                    }
                }
            }
        }

        .guide {
            margin-top: 50px;
        }

        .btns {
            margin-top: 30px;
        }
    }

    @media (max-width: 990px) {
        .form01 {
            .input_wrap {
                .input_box {
                    .left {
                        width: 130px;
                    }
                    .right {
                        width: calc(100% - 130px);
                        gap: 8px;
                        .radio {
                            gap: 20px;
                        }
                    }
                }
            }
        }

        .form02 {
            .input_wrap {
                .input_box {
                    .left {
                        width: 130px;
                    }
                    .right {
                        gap: 8px;
                        .radio {
                            gap: 20px;
                        }
                    }
                }

                .desc {
                    .right {
                        max-width: calc(100% - 130px);
                        width: calc(100% - 130px);
                    }
                }

                .hope {
                    .right {
                        max-width: calc(100% - 130px);
                        width: calc(100% - 130px);
                    }
                }
            }
        }
    }

    @media (max-width: 800px) {
        .form01 {
            .input_wrap {
                grid-template-columns: repeat(1, 1fr);
                .input_box {
                    .left {
                        label {
                            font-size: 16px;
                        }
                    }
                    .right {
                        input[type='text'] {
                            &::placeholder {
                                font-size: 14px;
                            }
                        }
                        .radio {
                            label {
                                span {
                                    font-size: 14px;
                                }
                            }
                        }
                    }
                }
            }
        }

        .form02 {
            .input_wrap {
                gap: 30px;
                .input_box {
                    width: 100%;
                    .left {
                        label {
                            font-size: 16px;
                        }
                    }
                    .right {
                        max-width: 100%;
                        gap: 8px;

                        input[type='text'],
                        input[type='date'] {
                            &::placeholder {
                                font-size: 14px;
                            }
                        }
                        .radio {
                            label {
                                span {
                                    font-size: 14px;
                                }
                            }
                        }
                    }
                }

                .price,
                .num {
                    .right {
                        span {
                            font-size: 16px;
                        }
                    }
                }
            }
        }

        .guide {
            h3 {
                font-size: 20px;
            }
            p {
                font-size: 15px;
            }
            p:nth-of-type(1) {
                margin: 10px 0 15px;
            }
        }
    }

    @media (max-width: 600px) {
        .form01 {
            .input_wrap {
                .input_box {
                    .right {
                        select {
                            font-size: 14px;
                        }
                        input {
                            font-size: 14px;
                        }
                        input[type='text'] {
                            font-size: 16px;
                            &::placeholder {
                                font-size: 14px;
                            }
                        }
                        .radio {
                            label {
                                span {
                                    font-size: 14px;
                                }
                            }
                        }
                    }
                }
            }
        }

        .form02 {
            .input_wrap {
                gap: 30px;
                .input_box {
                    width: 100%;
                    .left {
                        label {
                            font-size: 16px;
                        }
                    }
                    .right {
                        max-width: calc(100% - 130px);
                        width: calc(100% - 130px);
                        gap: 8px;
                        select {
                            font-size: 14px;
                        }
                        input {
                            font-size: 14px;
                        }
                        input[type='text'],
                        input[type='date'] {
                            font-size: 16px;
                            &::placeholder {
                                font-size: 14px;
                            }
                        }
                        .radio {
                            label {
                                span {
                                    font-size: 14px;
                                }
                            }
                        }
                    }
                }

                .price,
                .num {
                    .right {
                        span {
                            font-size: 16px;
                        }
                    }
                }
            }
        }

        .guide {
            h3 {
                font-size: 18px;
            }
            p {
                font-size: 14px;
            }
        }

        .btns {
            margin-top: 40px;
            button {
                width: 120px;
                height: 40px;
                font-size: 14px;
                border-radius: 40px;
            }
        }
    }

    @media (max-width: 480px) {
        .form01 {
            .input_wrap {
                padding-top: 20px;
                .input_box {
                    width: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    gap: 10px;
                    .left {
                        width: 100%;
                        span {
                            margin-left: 5px;
                            font-size: 14px;
                            display: inline-block;
                        }
                    }
                    .right {
                        max-width: 100%;
                        width: 100%;
                        select {
                            font-size: 14px;
                            height: 40px;
                        }
                        input {
                            font-size: 14px;
                        }
                        input[type='text'] {
                            font-size: 16px;
                            height: 40px;
                            &::placeholder {
                                font-size: 14px;
                            }
                        }
                        .radio {
                            label {
                                .custom {
                                    width: 18px;
                                    height: 18px;
                                }
                                span {
                                    font-size: 14px;
                                }
                            }
                        }
                    }
                }
            }
        }

        .form02 {
            .input_wrap {
                gap: 30px;
                padding-top: 20px;
                .input_box {
                    width: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    gap: 10px;
                    .left {
                        width: 100%;
                        label {
                            font-size: 16px;
                        }
                    }
                    .right {
                        max-width: 100%;
                        width: 100%;
                        gap: 0px;
                        justify-content: space-between;
                        select {
                            font-size: 14px;
                            height: 40px;
                        }
                        input {
                            font-size: 14px;
                        }
                        input[type='text'],
                        input[type='date'] {
                            width: 90%;
                            font-size: 16px;
                            height: 40px;
                            &::placeholder {
                                font-size: 14px;
                            }
                        }
                        .radio {
                            justify-content: space-between;
                            label {
                                .custom {
                                    width: 18px;
                                    height: 18px;
                                }
                                span {
                                    font-size: 14px;
                                }
                            }
                        }
                    }
                }

                .price,
                .num {
                    .right {
                        span {
                            font-size: 16px;
                        }
                    }
                }
            }
        }

        .guide {
            padding: 20px;
            h3 {
                font-size: 16px;
            }
            p {
                font-size: 12px;
            }
            p:nth-of-type(1) {
                margin: 8px 0 12px;
            }
        }

        .btns {
            margin-top: 30px;
        }
    }
`;
