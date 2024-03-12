import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../../types/IProduct";

interface productSliceProps {
    product: any[],
    loading: boolean,
    error: unknown,
}

const initialState: productSliceProps = {
    product: [],
    loading: false,
    error: '',
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        fetchingProduct(state: productSliceProps) {
            state.loading = true
        },
        fetchingProductSuccess(state: productSliceProps, action: PayloadAction<IProduct[]>) {
            state.loading = false
            state.product = action.payload
        },
        fetchingProductError(state: productSliceProps, action: PayloadAction<unknown>) {
            state.loading = false
            state.error = action.payload
        },
    },
})
export default productSlice.reducer