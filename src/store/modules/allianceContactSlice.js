import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSubmit: false,
    personalCheck: false,
    phone: {
        input: {
            part1: '',
            part2: '',
        },
        checkInput: {
            part1: '',
            part2: '',
        },
        isValid: false,
    },
    purpose: '',
    shape: [
        // 일반 체크박스는 문자열
        // 기타는 객체
        // ex. "추천", { value: "기타", input: "직접 입력 내용" }
    ],
    time: '',
    motive: [],
    desc: '',
};

export const allianceContactSlice = createSlice({
    name: 'allianceContact',
    initialState,
    reducers: {
        onSubmitReset: (state, action) => {
            state.isSubmit = false;
        },

        onPersonalCheck: (state, action) => {
            state.personalCheck = action.payload;
        },

        onSubmit: (state, action) => {
            const { phone, purpose, shape, time, motive, desc } = action.payload;

            state.phone = {
                input: phone.input,
                checkInput: phone.checkInput,
                isValid: false,
            };
            state.purpose = purpose;
            state.shape = shape;
            state.time = time;
            state.motive = motive;
            state.desc = desc;
            // 휴대전화, 휴대전화 확인 일치하는지 체크
            state.phone.isValid = state.phone.input.part1 === state.phone.checkInput.part1 && state.phone.input.part2 === state.phone.checkInput.part2;

            // ----- 유효성검사 -----

            // 개인정보 동의 체크 여부 확인
            if (!state.personalCheck) {
                alert('개인정보취급방침에 동의해 주세요.');
                return;
            }

            // 휴대전화 입력 확인
            if (!state.phone.input.part1) {
                alert('휴대번호를 선택해 주세요.');
                return;
            }
            if (!state.phone.input.part2.replace(/\s+/g, '') || state.phone.input.part2.replace(/\s+/g, '').length < 8) {
                alert('휴대번호를 입력해 주세요.');
                return;
            }
            if (state.phone.input.part2 === '' || isNaN(Number(state.phone.input.part2))) {
                alert('휴대번호 숫자를 입력해 주세요.');
                return;
            }

            // 휴대전화 확인 값 입력 확인
            if (
                !state.phone.checkInput.part1 ||
                !state.phone.checkInput.part2.replace(/\s+/g, '') ||
                state.phone.checkInput.part2.replace(/\s+/g, '').length < 8
            ) {
                alert('휴대전화 확인 - 휴대번호를 한번 더 입력해주세요.');
                return;
            }
            if (state.phone.checkInput.part2 === '' || isNaN(Number(state.phone.checkInput.part2))) {
                alert('휴대전화 확인 - 숫자를 입력해 주세요.');
                return;
            }

            // 휴대전화 값 일치 여부 확인
            if (!state.phone.isValid) {
                alert('휴대전화가 일치하지 않습니다.');
                return;
            }

            // 상담 목적 입력 확인
            if (!state.purpose) {
                alert('상담목적을 선택해 주세요.');
                return;
            }

            // 상담 형태 입력 확인
            if (state.shape.length === 0) {
                alert('상담형태를 선택해 주세요.');
                return;
            } else {
                const otherShape = state.shape.find((item) => item.value === '기타');
                if (otherShape && !otherShape.input) {
                    alert('상담형태 항목의 기타(직접 입력)을 입력해 주세요.');
                    return;
                }
            }

            // 상담 희망 시간 입력 확인
            if (!state.time) {
                alert('상담가능 시간을 입력해 주세요.');
                return;
            }

            // 신청 계기 확인
            if (state.motive.length === 0) {
                alert('신청계기를 선택해 주세요.');
                return;
            } else {
                const otherMotive = state.motive.find((item) => item.value === '기타');
                if (otherMotive && !otherMotive.input) {
                    alert('신청계기 항목의 기타(직접 입력)을 입력해 주세요.');
                    return;
                }
            }

            // 문의 내용 확인
            if (!state.desc.trim()) {
                alert('문의내용을 입력해 주세요.');
                return;
            }

            // 신청 완료
            state.isSubmit = true;
            alert('신청되었습니다. 확인을 누르면 메인화면으로 이동합니다.');
        },
    },
});

export const { onSubmitReset, onPersonalCheck, onSubmit } = allianceContactSlice.actions;
export default allianceContactSlice.reducer;
