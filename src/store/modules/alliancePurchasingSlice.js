import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSubmit: false,
    personalCheck: false,
    info: {
        purchaser: '',
        company: '',
        b_number: {
            part1: '',
            part2: '',
            part3: '',
        },
        b_name: '',
        title: '',
        email: {
            part1: '',
            part2: '',
        },
        phone: {
            part1: '',
            part2: '',
            part3: '',
        },
        pay: '',
    },
    question: {
        hope: '',
        price: '',
        num: '',
        date: '',
        desc: '',
    },
    /* question: [
        // 추가
        {
            id: 1,
            hope: '',
            price: '',
            num: '',
            date: '',
            desc: '',
        },
    ], */
};

export const alliancePurchasingSlice = createSlice({
    name: 'alliancePurchasing',
    initialState,
    reducers: {
        onSubmitReset: (state, action) => {
            state.isSubmit = false;
        },

        onPersonalCheck: (state, action) => {
            state.personalCheck = action.payload;
        },

        // 신청하기
        onSubmit: (state, action) => {
            const { info, question } = action.payload;

            state.info = info;
            state.question = question;

            // ----- 유효성검사 -----

            // 개인정보 동의 체크 여부 확인
            if (!state.personalCheck) {
                alert('개인정보취급방침에 동의해 주세요.');
                return;
            }

            // 구매 희망자 정보
            if (!state.info.purchaser) {
                alert('구매자 유형을 선택해 주세요.');
                return;
            }
            if (!state.info.company.trim()) {
                alert('회사명을 입력해 주세요.');
                return;
            }
            if (
                state.info.b_number.part1.replace(/\s+/g, '').length < 3 ||
                state.info.b_number.part2.replace(/\s+/g, '').length < 2 ||
                state.info.b_number.part3.replace(/\s+/g, '').length < 5
            ) {
                alert('사업자등록번호를 입력해 주세요.');
                return;
            }
            if (
                !state.info.b_number.part1 ||
                state.info.b_number.part1.trim() === '' ||
                (isNaN(Number(state.info.b_number.part1)) && !state.info.b_number.part2) ||
                state.info.b_number.part2.trim() === '' ||
                (isNaN(Number(state.info.b_number.part2)) && !state.info.b_number.part3) ||
                state.info.b_number.part3.trim() === '' ||
                isNaN(Number(state.info.b_number.part3))
            ) {
                alert('사업자등록번호 - 숫자를 입력해 주세요.');
                return;
            }
            if (!state.info.b_name.trim()) {
                alert('담당자명을 입력해 주세요.');
                return;
            }
            if (!state.info.email.part1.trim() || !state.info.email.part2) {
                alert('담당자 이메일을 입력해 주세요.');
                return;
            }
            if (
                (state.info.phone.part1.replace(/\s+/g, '').length) < 2 ||
                (state.info.phone.part2.replace(/\s+/g, '').length) < 3 ||
                (state.info.phone.part3.replace(/\s+/g, '').length) < 4
            ) {
                alert('담당자 연락처를 입력해 주세요.');
                return;
            }
            if (
                !state.info.phone.part1 ||
                state.info.phone.part1.trim() === '' ||
                (isNaN(Number(state.info.phone.part1)) && !state.info.phone.part2) ||
                state.info.phone.part2.trim() === '' ||
                (isNaN(Number(state.info.phone.part2)) && !state.info.phone.part3) ||
                state.info.phone.part3.trim() === '' ||
                isNaN(Number(state.info.phone.part3))
            ) {
                alert('담당자 연락처 - 숫자를 입력해 주세요.');
                return;
            }
            if (!state.info.pay) {
                alert('결제수단을 선택해 주세요.');
                return;
            }

            // 구매 문의사항
            if (!state.question.hope) {
                alert('구매희망상품을 선택해 주세요.');
                return;
            }
            if (!state.question.price) {
                alert('예상구매금액을 입력해 주세요.');
                return;
            }
            if (!state.question.price || state.question.price.trim() === '' || isNaN(Number(state.question.price))) {
                alert('예상구매금액 - 숫자를 입력해 주세요.');
                return;
            }
            if (!state.question.num) {
                alert('예상구매수량을 입력해 주세요.');
                return;
            }
            if (!state.question.num || state.question.num.trim() === '' || isNaN(Number(state.question.num))) {
                alert('예상구매수량 - 숫자를 입력해 주세요.');
                return;
            }
            if (!state.question.date) {
                alert('구매희망일자를 선택해 주세요.');
                return;
            }
            if (!state.question.desc.trim()) {
                alert('문의내용을 입력해 주세요.');
                return;
            }

            // 신청 완료
            state.isSubmit = true;
            alert('신청되었습니다. 확인을 누르면 메인화면으로 이동합니다.');
        },
    },
});

export const { onSubmitReset, onPersonalCheck, onSubmit } = alliancePurchasingSlice.actions;
export default alliancePurchasingSlice.reducer;
