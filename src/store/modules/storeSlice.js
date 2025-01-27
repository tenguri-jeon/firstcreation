import { createSlice } from '@reduxjs/toolkit';
import storeData from '../../assets/api/store';

const initialState = {
    modalData: null,
    Modal: false,
    storeData,
    filterData: storeData,
};

export const getDataSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        onModalData: (state, action) => {
            state.modalData = action.payload;
            state.Modal = true;
        },
        onModalClose: (state, action) => {
            state.Modal = false;
        },
        filterOn: (state, action) => {
            const { serviceName, text } = action.payload;
        
            const serviceFiltered = state.storeData.filter((store) => {
                const hasService =
                    serviceName && serviceName.length > 0
                        ? serviceName.every((name) =>
                              store.service.some((service) => 
                                  service.service.toLowerCase() === name.toLowerCase()
                              )
                          )
                        : true; 
        
                const matchesText =
                    text && text.trim().length > 0
                        ? store.name.includes(text) || store.addr.includes(text)
                        : true; 
        
                if ((!serviceName || serviceName.length === 0) && !text) {
                    return false;
                }
        
                return hasService && matchesText;
            });
        
            state.filterData = serviceFiltered;
        },
          
    },
});

export const { onModalData, onModalClose, filterOn } = getDataSlice.actions;
export default getDataSlice.reducer;
