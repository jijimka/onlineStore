import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface categoriesSliceProps {
    categories:string[]
}

const initialState:categoriesSliceProps = {
    categories:[]
}
export const categoriesSlice = createSlice({
    name: 'categoriesSlice',
    initialState,
    reducers: {
        fetchCategories(state:categoriesSliceProps,action:PayloadAction<string[]>) {
            state.categories = action.payload
        },
    }
})
export default categoriesSlice.reducer