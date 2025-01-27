import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    filteredItems: [],
    filterType: 'title',
};

export const SearchSlice = createSlice({
    name: 'ComuSearch',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items = action.payload;
            state.filteredItems = action.payload;
        },
        addItemR: (state, action) => {
            state.items = [...action.payload].sort((a, b) => b.id - a.id);
            state.filteredItems = [...action.payload].sort((a, b) => b.id - a.id);
        },

        setFilterType: (state, action) => {
            state.filterType = action.payload;
        },

        searchItem: (state, action) => {
            const searchTerm = action.payload.toLowerCase();

            // 검색어가 비어 있으면 전체 항목을 반환
            if (!searchTerm) {
                state.filteredItems = state.items;
                return;
            }

            // 필터링 조건 설정
            const titleFilter = state.items.filter((item) =>
                (item.title ?? '').toLowerCase().includes(searchTerm)
            );

            const descFilter = state.items.filter((item) =>
                (item.desc ?? '').toLowerCase().includes(searchTerm)
            );

            if (state.filterType === 'title') {
                state.filteredItems = titleFilter;
            } else if (state.filterType === 'desc') {
                state.filteredItems = descFilter;
            } else {
                // 제목이나 내용 중 하나라도 검색어를 포함하는 항목 필터링
                state.filteredItems = state.items.filter(
                    (item) =>
                        (item.title ?? '').toLowerCase().includes(searchTerm) ||
                        (item.desc ?? '').toLowerCase().includes(searchTerm)
                );
            }
        },
    },
});

export const { addItem, addItemR, setFilterType, searchItem } = SearchSlice.actions;
export default SearchSlice.reducer;
