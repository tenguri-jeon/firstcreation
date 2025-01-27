import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSubmit: false,
    allPersonalCheck: false,
    personalCheck: {
        part1: false,
        part2: false,
        part3: false,
    },
    certify: {
        certify_name: '',
        certify_phone: {
            agency: '',
            part1: '',
            part2: '',
            part3: '',
        },
    },
    certifyNum: '',
    b_name: '',
    b_phone: '',
    b_email: '',
    store: '',
    recommend: '',
    addr: {
        addr1: '',
        addr2: '',
        addr3: '',
    },
    area: {
        area1: '',
        area2: '',
    },
    hope: {
        hope1: '',
        hope2: '',
        hope3: '',
    },
    etc: '',
};

export const allianceEntrySlice = createSlice({
    name: 'allianceEntry',
    initialState,
    reducers: {
        resetState: () => initialState,

        onSubmitReset: (state, action) => {
            state.isSubmit = false;
        },

        /* onAllPersonalCheck: (state, action) => {
            state.allPersonalCheck = !state.allPersonalCheck;
            console.log(state.allPersonalCheck);
        }, */
        onPersonalCheck1: (state, action) => {
            state.personalCheck.part1 = action.payload;
            // console.log(state.personalCheck.part1);
        },
        onPersonalCheck2: (state, action) => {
            state.personalCheck.part2 = action.payload;
        },
        onPersonalCheck3: (state, action) => {
            state.personalCheck.part3 = action.payload;
        },
        onAddr: (state, action) => {
            state.addr = action.payload;
            // console.log(state.addr);
        },
        onCertify: (state, action) => {
            state.certify = action.payload;
            // console.log(state.certify);
        },
        onEmail: (state, action) => {
            state.b_email = action.payload;
            // console.log(state.b_email);
        },

        // ----- 유효성 검사 -----

        // 인증번호 받기
        getCertifyNumber: (state, action) => {
            if (state.certifyNum) {
                alert('인증번호가 입력되었습니다.');
                return;
            }

            if (!state.certify.certify_name.trim()) {
                alert('실명을 입력해 주세요.');
                return;
            }
            if (!state.certify.certify_phone.agency) {
                alert('통신사를 선택해 주세요.');
                return;
            }
            if (
                !state.certify.certify_phone.part1 ||
                (state.certify.certify_phone.part2.length) < 4 ||
                (state.certify.certify_phone.part3.length ) < 4
            ) {
                alert('휴대폰번호를 입력해 주세요.');
                return;
            }
            if (
                isNaN(Number(state.certify.certify_phone.part1)) ||
                isNaN(Number(state.certify.certify_phone.part2)) ||
                isNaN(Number(state.certify.certify_phone.part3))
            ) {
                alert('휴대폰번호 - 숫자를 입력해 주세요.');
                return;
            }

            // 랜덤 6자리 숫자
            state.certifyNum = String(Math.floor(100000 + Math.random() * 900000));
        },
        // 인증완료 후 정보 입력
        insertCertify: (state, action) => {
            state.b_name = state.certify.certify_name;
            state.b_phone = `${state.certify.certify_phone.part1}-${state.certify.certify_phone.part2}-${state.certify.certify_phone.part3}`;
        },
        // 인증 도중 취소 시 초기화
        resetCertifyNum: (state, action) => {
            state.certifyNum = '';
        },

        // 신청하기
        onSubmit: (state, action) => {
            const { store, recommend, area, hope, etc } = action.payload;

            state.store = store;
            state.recommend = recommend;
            state.area = area;
            state.hope = hope;
            state.etc = etc;

            // 개인정보 동의 체크 여부 확인
            if (!state.personalCheck.part1) {
                alert('입점 제의 상담 신청에 동의해 주세요.');
                return;
            }
            if (!state.personalCheck.part2) {
                alert('신규 입점 제의 이용약관에 동의해 주세요.');
                return;
            }
            if (!state.personalCheck.part3) {
                alert('개인정보취급방침에 동의해 주세요.');
                return;
            }

            // 인증 여부 확인
            if (!state.certifyNum) {
                alert('휴대폰 인증해주세요.');
                return;
            }

            // 담당자 정보 확인 - 담당자 이름, 번호는 위에 있음
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!state.b_email.trim()) {
                alert('담당자 이메일을 입력해 주세요.');
                return;
            }
            if (!emailPattern.test(state.b_email)) {
                alert('이메일 형식이 올바르지 않습니다.');
                return;
            }

            // 점포 구분 확인
            if (!state.store) {
                alert('점포 구분을 선택해 주세요.');
                return;
            }

            // 추천인 구분 확인
            if (!state.recommend) {
                alert('추천인 구분을 선택해 주세요.');
                return;
            }

            // 주소 확인
            if (!state.addr.addr1.trim() || !state.addr.addr2.trim()) {
                alert('주소를 입력해 주세요.');
                return;
            }
            if (!state.addr.addr3.trim()) {
                alert('상세주소를 입력해 주세요.');
                return;
            }

            // 면적 입력 확인
            if (!state.area.area1.trim()) {
                alert('토지면적을 입력해 주세요.');
                return;
            }
            if (state.area.area1 === '' || isNaN(Number(state.area.area1))) {
                alert('토지면적 숫자를 입력해 주세요.');
                return;
            }
            if (!state.area.area2.trim()) {
                alert('전용면적을 입력해 주세요.');
                return;
            }
            if (state.area.area2 === '' || isNaN(Number(state.area.area2))) {
                alert('전용면적 숫자를 입력해 주세요.');
                return;
            }

            // 비용 입력 확인
            if (!state.hope.hope1.trim()) {
                alert('보증금을 입력해 주세요.');
                return;
            }
            if (state.hope.hope1 === '' || isNaN(Number(state.hope.hope1))) {
                alert('보증금 숫자를 입력해 주세요.');
                return;
            }
            if (!state.hope.hope2.trim()) {
                alert('임대료를 입력해 주세요.');
                return;
            }
            if (state.hope.hope2 === '' || isNaN(Number(state.hope.hope2))) {
                alert('임대료 숫자를 입력해 주세요.');
                return;
            }
            if (!state.hope.hope3.trim()) {
                alert('관리비를 입력해 주세요.');
                return;
            }
            if (state.hope.hope3 === '' || isNaN(Number(state.hope.hope3))) {
                alert('관리비 숫자를 입력해 주세요.');
                return;
            }

            // 기타 입력 확인
            if (!state.etc.trim()) {
                alert('기타 상세를 입력해 주세요.');
                return;
            }

            // 신청 완료
            state.isSubmit = true;
            alert('신청되었습니다. 확인을 누르면 메인화면으로 이동합니다.');
        },
    },
});

export const {
    resetCertifyNum,
    resetState,
    onEmail,
    onSubmitReset,
    onAllPersonalCheck,
    insertCertify,
    getCertifyNumber,
    onCertify,
    onAddr,
    onPersonalCheck1,
    onPersonalCheck2,
    onPersonalCheck3,
    onSubmit,
} = allianceEntrySlice.actions;
export default allianceEntrySlice.reducer;
