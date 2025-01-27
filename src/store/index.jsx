import { configureStore } from '@reduxjs/toolkit';
import aaa from './modules/aaaSlice';
import menu from './modules/menuDataSlice';
import storeSlice from './modules/storeSlice';
import comupagination from './modules/comupageSlice';
import comuSearch from './modules/comuSearchSlice';
import comuData from './modules/comuDataSlice';

import allianceContact from './modules/allianceContactSlice';
import alliancePurchasing from './modules/alliancePurchasingSlice';
import allianceEntry from './modules/allianceEntrySlice';
import allianceSupplier from './modules/allianceSupplierSlice';

export const store = configureStore({
    reducer: {
        aaa,
        menu,
        storeSlice,
        comuData,
        comupagination,
        comuSearch,
        allianceContact,
        alliancePurchasing,
        allianceEntry,
        allianceSupplier,
    },
});
