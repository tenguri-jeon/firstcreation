import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pageData: [],
    currPage: 1,
    totalPage: 1,
    postsPerPage: 1,
};

export const comupageSlice = createSlice({
    name: 'comupagination',
    initialState,
    reducers: {
        addData(state, action) {
            // 오름차수
            state.postsPerPage = 12;
            state.pageData = action.payload;
        },
        addDataR(state, action) {
            // 내림차수
            state.postsPerPage = 10;
            state.pageData = [...action.payload].sort((a, b) => b.id - a.id);
        },
        totalData: (state, action) => {
            const dataToPaginate = action.payload || state.pageData;
            state.totalPage = Math.ceil(dataToPaginate.length / state.postsPerPage);
        },
        resetPage: (state) => {
            state.currPage = 1;
        },
        nextPage: (state) => {
            if (state.currPage === state.totalPage) {
                state.currPage = state.totalPage;
            } else {
                state.currPage++;
            }
        },
        prevPage: (state) => {
            if (state.currPage === 1) {
                state.currPage = 1;
            } else {
                state.currPage--;
            }
        },
        currentPage: (state, action) => {
            state.currPage = action.payload;
        },
        firstPage: (state) => {
            state.currPage = 1;
        },
        lastPage: (state) => {
            state.currPage = state.totalPage;
        },
    },
});

export const {
    addData,
    addDataR,
    totalData,
    resetPage,
    nextPage,
    prevPage,
    currentPage,
    firstPage,
    lastPage,
} = comupageSlice.actions;
export default comupageSlice.reducer;
