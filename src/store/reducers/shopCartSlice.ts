import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../../types/IProduct";
import shop from "../../routes/Shop";

interface shopCartSliceProps {
    shopCart:IProduct[],
}

const initialState:shopCartSliceProps = {
    shopCart:[],
}
export const shopCartSlice = createSlice({
    name: 'shopCart',
    initialState,
    reducers: {
        addProduct(state:shopCartSliceProps,action:PayloadAction<IProduct>) {
            state.shopCart.push(action.payload)
        },
        removeProduct(state:shopCartSliceProps,action:PayloadAction<number>) {
            state.shopCart.splice(action.payload,1)
        },
        clearShopcart(state:shopCartSliceProps) {
            state.shopCart = []
        },
    }
})
export default shopCartSlice.reducer