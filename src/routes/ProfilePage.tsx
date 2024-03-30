import React, {useEffect, useState} from 'react';
import HeaderComponent from "../components/HeaderComponent";
import MenuComponent from "../components/MenuComponent";
import {fetchCategories} from "../API/fetchProduct";
import {IProduct} from "../types/IProduct";
import {useTypedDispatch, useTypedSelector} from "../hooks/redux";
import MainTittle from "../components/MainTittle";
import {useNavigate} from "react-router-dom";
import {usersSlice} from "../store/reducers/usersSlice";

const ProfilePage = () => {
    const dispatch = useTypedDispatch()
    const navigator = useNavigate()
    const {userLogout} = usersSlice.actions
    const loggedInUser = useTypedSelector(state => state.users.loggedInUser)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])
    function logoutFunc() {
        dispatch(userLogout())
        navigator('/onlineStore/')
    }
    if (loggedInUser === null) {
        navigator('/onlineStore/login')
    }
    return (
        <div className='profile'>
            <HeaderComponent/>
            <MenuComponent/>
            <MainTittle><span className='blue'>Profile</span></MainTittle>
            <div className="profile-body">
                <div className="profile-body__container">
                    <div className="profile-body__info">
                        <div className="profile-body__username">{loggedInUser?.username}</div>
                        <div className="profile-body__fullname">Name: {loggedInUser?.name.firstname} Surname: {loggedInUser?.name.lastname}</div>
                        <div className="profile-body__email">Email: {loggedInUser?.email}</div>
                        <div className="profile-body__location">
                            <div className="location__title">Address</div>
                            <div className="location__city">City: {loggedInUser?.address.city}</div>
                            <div className="location__street">Street: {loggedInUser?.address.street}</div>
                        </div>
                    </div>
                    <div className="profile-body__bttns">
                        <div onClick={logoutFunc} className="profile-body__logout">
                            Log out
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;