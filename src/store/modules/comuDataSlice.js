import { createSlice } from '@reduxjs/toolkit';
import infodata from '../../assets/api/infodata';
import noticedata from '../../assets/api/noticedata';
import eventstoredata from '../../assets/api/eventstore';

const initialState = {
    infoData: infodata,
    noticeData: noticedata,
    eventData: eventstoredata,
};

export const comuData = createSlice({
    name: 'comuData',
    initialState,
    reducers: {},
});
export const {} = comuData.actions;
export default comuData.reducer;
