import React, {useEffect, useState} from 'react';
import MyInput from "../UI/Input/MyInput";
import {checkLoginForm} from "../utils/checkLoginForm";
import {useTypedDispatch, useTypedSelector} from "../hooks/redux";
import {fetchUsers} from "../API/fetchProduct";
import {useNavigate} from "react-router-dom";
import {usersSlice} from "../store/reducers/usersSlice";

const LoginPage = () => {
    const dispatch = useTypedDispatch()
    const navigate = useNavigate()
    const {loggedInUser} = usersSlice.actions
    const userList = useTypedSelector(state => state.users.users)
    const [loginForm, setLoginForm] = useState<string>('john@gmail.com')
    const [passwordForm, setPasswordForm] = useState<string>('m38rmF$')
    const [outputLoginSubmit, setOutputLoginSubmit] = useState<boolean | null>(null)

    function submitLoginForm() {
        let user = {
            login: loginForm,
            password: passwordForm,
        }
        let loginResult = checkLoginForm(userList, user)
        console.log(loginResult, userList, user)
        if (loginResult === null) {
            setOutputLoginSubmit(false)
        } else {
            setOutputLoginSubmit(true)
            dispatch(loggedInUser(loginResult))
            setTimeout(() => {
                navigate('/')
            }, 1000)
        }

    }

    useEffect(() => {
        getUserList()
    }, [])

    function getUserList() {
        dispatch(fetchUsers())
    }

    return (
        <div className='login'>
            <div className="login__form">
                {outputLoginSubmit !== null ?
                    !outputLoginSubmit
                        ?
                        <h1 className='red login__output'>wrong password or login</h1>
                        :
                        <h1 className='green login__output'>logged in successfully</h1> : null}
                <MyInput placeholder='type login' value={loginForm} changeEvent={setLoginForm}/>
                <MyInput placeholder='type password' value={passwordForm} changeEvent={setPasswordForm}/>
                <div onClick={submitLoginForm} className="login-form__submit">Log in</div>
            </div>
        </div>
    );
};

export default LoginPage;