import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../types/IUser";

interface usersSliceProps {
    users:IUser[],
    loggedInUser:IUser | null
}

const initialState:usersSliceProps = {
    users:[],
    loggedInUser:null,
}
export const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        setUsers(state:usersSliceProps,action:PayloadAction<IUser[]>) {
            state.users = action.payload
        },
        loggedInUser(state:usersSliceProps,action:PayloadAction<IUser>) {
            state.loggedInUser = action.payload
        },
        userLogout(state:usersSliceProps) {
            state.loggedInUser = null
        }
    }
})
export default usersSlice.reducer