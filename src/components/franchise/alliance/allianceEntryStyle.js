import { styled } from 'styled-components';

// entry
export const AllianceEntryFormContainer = styled.section`
    .form01,
    .form02 {
        border-top: 2px solid #1c1c1c;
    }

    .form01 {
        padding-bottom: 40px;
        .input_wrap {
            padding-top: 40px;
            display: flex;
            flex-direction: column;
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
                }
                .right {
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
                        &:disabled {
                            background-color: #eeedf2;
                            border: none;
                        }
                    }
                    .radio {
                        flex-wrap: wrap;
                        display: flex;
                        align-items: center;
                        gap: 20px;
                        label {
                            position: relative;
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            gap: 8px;
                            input[type='radio'] {
                                /* display: none; */
                                position: absolute;
                                left: 4px;
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
                                letter-spacing: -1px;
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

            .addr {
                .right {
                    width: calc(100% - 200px);
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 15px;
                    div:first-child {
                        display: flex;
                        gap: 13px;
                        button {
                            cursor: pointer;
                            width: 160px;
                            height: 50px;
                            font-size: 16px;
                            line-height: 50px;
                            background-color: #1c1c1c;
                            font-family: 'Noto Sans KR', sans-serif;
                            color: #fff;
                            border-radius: 5px;
                            line-height: 1.5;
                            svg {
                                margin-right: 4px;
                                vertical-align: -2px;
                            }
                        }
                        input {
                            width: 370px;
                        }
                    }
                    div:nth-child(3),
                    div:nth-child(4) {
                        width: 100%;
                        input {
                            width: 100%;
                        }
                    }
                    .find {
                        width: 100%;
                    }
                    p {
                        font-size: 14px;
                        letter-spacing: -0.5px;
                        svg {
                            vertical-align: -2px;
                            margin-right: 4px;
                        }
                    }
                }
            }
            /* -- */
        }
    }

    .form02 {
        .input_wrap {
            padding-top: 40px;
            display: flex;
            flex-direction: column;
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
                    width: calc(100% - 200px);
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    box-sizing: border-box;
                    gap: 15px;
                    .box {
                        display: flex;
                        align-items: center;
                        gap: 13px;
                    }
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
                        &:disabled {
                            background-color: #eeedf2;
                            border: none;
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

            .area {
                .right {
                    p {
                        span {
                            font-size: 14px;
                            font-weight: 500;
                            margin-left: 10px;
                            color: #4f4f4f;
                        }
                    }
                }
            }

            .etc {
                .right {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 6px;
                    textarea {
                        height: 180px;
                        background-color: #fff;
                    }
                    p {
                        font-family: 'Lexend Deca', sans-serif;
                        font-size: 12px;
                        color: #38373d;
                    }
                }
            }
        }
    }

    @media (max-width: 1350px) {
        .form01 {
            .input_wrap {
                padding-top: 35px;
                gap: 35px;
                .input_box {
                    .left {
                        width: 180px;
                        label {
                            font-size: 19px;
                        }
                    }
                    .right {
                        width: calc(100% - 180px);
                    }
                }
            }
        }

        .form02 {
            .input_wrap {
                padding-top: 35px;
                .input_box {
                    .left {
                        width: 180px;
                        label {
                            font-size: 19px;
                        }
                    }
                    .right {
                        width: calc(100% - 180px);
                    }
                }

                .hope,
                .area {
                    .right {
                        input {
                            width: 200px;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 1024px) {
        .form01 {
            padding-bottom: 30px;
            .input_wrap {
                padding-top: 30px;
                gap: 30px;
                .input_box {
                    .left {
                        label {
                            font-size: 18px;
                        }
                    }
                    .right {
                        input {
                            font-size: 15px;
                        }
                        input[type='text'] {
                            font-size: 15px;
                            height: 45px;
                            &::placeholder {
                                font-size: 15px;
                            }
                        }
                        .radio {
                            label {
                                span {
                                    width: calc(100% - 20px);
                                    font-size: 17px;
                                }
                            }
                        }
                    }
                }

                .addr {
                    .right {
                        width: calc(100% - 180px);
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 15px;
                        div:first-child {
                            width: 100%;
                            display: flex;
                            gap: 13px;
                            button {
                                width: 155px;
                                height: 45px;
                                font-size: 16px;
                            }
                            input {
                                width: calc(100% - 155px);
                            }
                        }
                        div:nth-child(3),
                        div:nth-child(4) {
                            width: 100%;
                            input {
                                width: 100%;
                            }
                        }
                        .find {
                            width: 100%;
                        }
                        p {
                            font-size: 14px;
                            letter-spacing: -0.5px;
                            svg {
                                vertical-align: -2px;
                                margin-right: 4px;
                            }
                        }
                    }
                }
            }
        }

        .form02 {
            .input_wrap {
                padding-top: 30px;
                gap: 30px;
                .input_box {
                    .left {
                        label {
                            font-size: 18px;
                        }
                    }
                    .right {
                        input {
                            font-size: 15px;
                        }
                        input[type='text'] {
                            font-size: 15px;
                            height: 45px;
                            &::placeholder {
                                font-size: 15px;
                            }
                        }
                    }
                }

                .hope,
                .area {
                    .right {
                        input {
                            width: 140px;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 850px) {
        .form01 {
            padding-bottom: 30px;
            .input_wrap {
                padding-top: 30px;
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

                        input {
                            font-size: 15px;
                        }
                        input[type='text'] {
                            font-size: 15px;
                            height: 45px;
                            &::placeholder {
                                font-size: 15px;
                            }
                        }
                        .radio {
                            gap: 10px;
                            label {
                                span {
                                    width: calc(100% - 20px);
                                    font-size: 17px;
                                }
                            }
                        }
                    }
                }

                .addr {
                    .right {
                        width: calc(100% - 160px);
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 15px;
                        div:first-child {
                            width: 100%;
                            display: flex;
                            gap: 13px;
                            button {
                                width: 155px;
                                height: 45px;
                                font-size: 16px;
                            }
                            input {
                                width: calc(100% - 155px);
                            }
                        }
                        div:nth-child(3),
                        div:nth-child(4) {
                            width: 100%;
                            input {
                                width: 100%;
                            }
                        }
                        .find {
                            width: 100%;
                        }
                        p {
                            font-size: 14px;
                            letter-spacing: -0.5px;
                            svg {
                                vertical-align: -2px;
                                margin-right: 4px;
                            }
                        }
                    }
                }
            }
        }

        .form02 {
            .input_wrap {
                padding-top: 30px;
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
                        gap: 10px;
                        .box {
                            gap: 6px;
                        }
                        input {
                            font-size: 15px;
                        }
                        input[type='text'] {
                            font-size: 15px;
                            height: 45px;
                            &::placeholder {
                                font-size: 15px;
                            }
                        }
                    }
                }

                .hope,
                .area {
                    .right {
                        input {
                            width: 140px;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        .form01 {
            .input_wrap {
                .input_box {
                    .right {
                        .radio {
                            gap: 8px;
                        }
                    }
                }
            }
        }

        .form02 {
            .input_wrap {
                .input_box {
                    .right {
                        gap: 8px;
                        .box {
                            gap: 6px;
                        }
                        p {
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 600px) {
        .form01 {
            padding-bottom: 25px;
            .input_wrap {
                padding-top: 25px;
                .input_box {
                    flex-direction: column;
                    align-items: flex-start;
                    .left {
                        width: 100%;
                        margin-bottom: 15px;
                        label {
                            font-size: 17px;
                        }
                    }
                    .right {
                        width: 100%;
                        input[type='text'] {
                            font-size: 14px;
                        }
                        .radio {
                            gap: 6px;
                            label {
                                span {
                                    font-size: 16px;
                                }
                            }
                        }
                    }
                }

                .addr {
                    .right {
                        gap: 10px;
                        width: 100%;
                        p {
                            font-size: 12px;
                        }
                        div:first-child {
                            display: flex;
                            gap: 10px;
                            button {
                                width: 120px;

                                font-size: 14px;
                                svg {
                                    font-size: 14px;
                                }
                            }
                            input {
                                width: calc(100% - 120px);
                            }
                        }
                    }
                }
            }
        }

        .form02 {
            .input_wrap {
                padding-top: 25px;
                .input_box {
                    flex-direction: column;
                    align-items: flex-start;
                    position: relative;

                    .left {
                        width: 100%;
                        margin-bottom: 15px;
                        label {
                            font-size: 17px;
                        }
                    }
                    .right {
                        gap: 20px;
                        width: 100%;
                        input[type='text'] {
                            font-size: 14px;
                        }
                        textarea + p {
                            font-size: 12px;
                        }
                        .box {
                            width: 100%;
                            input {
                                width: calc(100% - 35px);
                            }
                            p {
                                width: 35px;
                                span {
                                    position: absolute;
                                    left: 0;
                                    bottom: -25px;
                                    margin-left: 0;
                                    font-size: 13px;
                                }
                            }
                        }
                    }
                }

                .area {
                    margin-bottom: 20px;
                }

                .etc {
                    .right {
                        gap: 10px;
                    }
                }
            }
        }
    }

    @media (max-width: 480px) {
        .form01 {
            padding-bottom: 20px;
            .input_wrap {
                padding-top: 20px;
                .input_box {
                    .left {
                        margin-bottom: 10px;
                        label {
                            font-size: 18px;
                        }
                    }
                    .right {
                        gap: 30px;
                        .radio {
                            gap: 10px;
                            label {
                                span {
                                    font-size: 14px;
                                }
                            }
                        }
                    }
                }

                .addr {
                    .right {
                        gap: 10px;
                        width: 100%;
                        p {
                            font-size: 12px;
                        }
                        div:first-child {
                            display: flex;
                            gap: 10px;
                            button {
                                width: 120px;

                                font-size: 14px;
                                svg {
                                    font-size: 14px;
                                }
                            }
                            input {
                                width: calc(100% - 120px);
                            }
                        }
                    }
                }
            }
        }

        .form02 {
            .input_wrap {
                padding-top: 20px;
                .input_box {
                    .left {
                        margin-bottom: 10px;
                        label {
                            font-size: 18px;
                        }
                    }
                }
            }
        }
    }
`;
