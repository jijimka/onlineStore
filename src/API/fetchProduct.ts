import {DispatchState} from "../store/store";
import {productSlice} from "../store/reducers/productSlice";
import axios from "axios";
import {IProduct} from "../types/IProduct";
import {IUser} from "../types/IUser";
import {usersSlice} from "../store/reducers/usersSlice";
import {categoriesSlice} from "../store/reducers/categoriesSlice";
const addCatgories = categoriesSlice.actions.fetchCategories
const {fetchingProduct, fetchingProductSuccess, fetchingProductError} = productSlice.actions
export const fetchProduct = () => async (dispatch: DispatchState) => {
    try {
        dispatch(fetchingProduct())
        const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
        dispatch(fetchingProductSuccess(response.data))
    } catch (e: unknown) {
        dispatch(fetchingProductError(e))
    }
}
export const fetchCategories = () => async (dispatch:DispatchState) => {
    try {
        const response = await axios.get<string[]>('https://fakestoreapi.com/products/categories')
        dispatch(addCatgories(response.data))
    } catch (e: unknown) {
        alert(e)
    }
}
const {setUsers} = usersSlice.actions
export const fetchUsers = () => async (dispatch:DispatchState) => {
    try {
        const response = await axios.get<IUser[]>('https://fakestoreapi.com/users')
        dispatch(setUsers(response.data))
    } catch (e: unknown) {
        alert(e)
    }
}
