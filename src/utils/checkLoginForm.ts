import {IUser} from "../types/IUser";

interface checkLoginProps {
    usersList: IUser[],
    userForm: {
        login: string,
        password: string,
    }
}

export function checkLoginForm(usersList: IUser[], userForm: {login: string,password: string,}):IUser | null {
    let loginSuccess: boolean = false
    let loggedInUser:IUser | null = null
    usersList.map(i => {
        if (userForm.login === i.email) {
            if (userForm.password === i.password) {
                loginSuccess = true
                loggedInUser = i
            }
        }
    })
    if (!loginSuccess) {
        return null
    } else {
        return loggedInUser
    }
}