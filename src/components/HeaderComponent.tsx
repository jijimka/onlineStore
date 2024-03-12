import React, {useState} from 'react';
import ModalWindow from "../UI/ModalWindow/ModalWindow";
import MyInput from "../UI/Input/MyInput";
import {checkLoginForm} from "../utils/checkLoginForm";
import {useTypedSelector} from "../hooks/redux";
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    const loggedInUser = useTypedSelector(state => state.users.loggedInUser)
    return (
        <header>
            <div className="header__container">
                <div className="header__number">+1 (234)-567-890</div>
                <div className="header__settings">
                    <div className='settings__language'>
                        English
                    </div>
                    <div className="settings__money-sign">
                        USD
                    </div>
                    <div className="settings__login">
                        <div className="login__login">
                            {
                                loggedInUser === null
                                ?
                                <Link to='/login'>Login</Link>
                                :
                                <Link to={`/profile/${loggedInUser.id}`}>{loggedInUser.email}</Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;