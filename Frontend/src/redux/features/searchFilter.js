import { createSlice } from '@reduxjs/toolkit'


export const searchFilterSlice = createSlice({
    name: 'searchFilter',
    initialState: {
        input: ''
    },
    reducers: {
        inputSearch: (state, action) => {
            state.input = action.payload
        }
    }
})


export const { inputSearch } = searchFilterSlice.actions;
export default searchFilterSlice.reducer;