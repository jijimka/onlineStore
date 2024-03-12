import {DispatchState} from "../store/store";
import {productSlice} from "../store/reducers/productSlice";
import axios from "axios";
import {IProduct} from "../types/IProduct";
import {IUser} from "../types/IUser";
import {usersSlice} from "../store/reducers/usersSlice";
import {categoriesSlice} from "../store/reducers/categoriesSlice";
const addCatgories = categoriesSlice.actions.fetchCategories
const {fetchingProduct, fetchingProductSuccess, fetchingProductError} = productSlice.actions
enum API {
    ALL_PRODUCTS = 'https://fakestoreapi.com/products',
    CATEGORIES = 'https://fakestoreapi.com/products/categories',
    USERS = 'https://fakestoreapi.com/users'
}
export const fetchProduct = () => async (dispatch: DispatchState) => {
    try {
        dispatch(fetchingProduct())
        const response = await axios.get<IProduct[]>(API.ALL_PRODUCTS)
        dispatch(fetchingProductSuccess(response.data))
    } catch (e: unknown) {
        dispatch(fetchingProductError(e))
    }
}
export const fetchCategories = () => async (dispatch:DispatchState) => {
    try {
        const response = await axios.get<string[]>(API.CATEGORIES)
        dispatch(addCatgories(response.data))
    } catch (e: unknown) {
        alert(e)
    }
}
const {setUsers} = usersSlice.actions
export const fetchUsers = () => async (dispatch:DispatchState) => {
    try {
        const response = await axios.get<IUser[]>(API.USERS)
        dispatch(setUsers(response.data))
    } catch (e) {

    }
}
