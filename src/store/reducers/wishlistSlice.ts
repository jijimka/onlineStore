import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProduct} from "../../types/IProduct";

interface wishlistSliceProps {
    wishlistProducts:IProduct[]
}

const initialState:wishlistSliceProps = {
    wishlistProducts: []
}
export const wishlistSlice = createSlice({
    name: 'wishlistSlice',
    initialState,
    reducers: {
        addToWishlist(state:wishlistSliceProps,action:PayloadAction<IProduct>) {
            state.wishlistProducts.push(action.payload)
        },
        removeFromWishlist(state:wishlistSliceProps,action:PayloadAction<number>) {
            state.wishlistProducts.splice(action.payload,1)
        }
    }
})
export default wishlistSlice.reducer