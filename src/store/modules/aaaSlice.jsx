import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    text: 'testing...',
};

export const aaaSlice = createSlice({
    name: 'aaa',
    initialState,
    reducers: {
        sending: (state, action) => {
            console.log(initialState.text);
        },
    },
});

export const { sending } = aaaSlice.actions;
export default aaaSlice.reducer;
