import {combineReducers, configureStore} from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import shopCartSlice from "./reducers/shopCartSlice";
import usersSlice from "./reducers/usersSlice";
import wishlistSlice from "./reducers/wishlistSlice";
import categoriesSlice from "./reducers/categoriesSlice";

const rootReducer = combineReducers({
    product:productSlice,
    shopCart:shopCartSlice,
    users:usersSlice,
    wishlist:wishlistSlice,
    categories:categoriesSlice,
})
export const setupStore = () => configureStore({
    reducer: rootReducer,

})

export type RootState = ReturnType <typeof rootReducer>
export type AppState = ReturnType <typeof setupStore>
export type DispatchState = AppState['dispatch']