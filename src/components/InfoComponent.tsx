import React from 'react';
import {useNavigate} from "react-router-dom";
import {useTypedSelector} from "../hooks/redux";

const InfoComponent = () => {
    const loggedIn = useTypedSelector(state => state.users.loggedInUser)
    const navigate = useNavigate()

    function myAccountRedirectFunc() {
        return loggedIn === null ? navigate('/onlineStore/login') : navigate(`/onlineStore/profile/${loggedIn.id}`)
    }
    return (
        <div className="info">
            <div className="info__container">
                <div className="info__company">
                    <h3 className="company__title">
                        jijimka
                    </h3>
                    <div className="company__paragraph">
                        52 Street, New-york City, Rose town, 07 Rive House
                    </div>
                    <div className="company__paragraph">+1 (234) 567-890</div>
                    <div className="company__paragraph">info@example.com</div>
                    <div className="company__bttns">
                        <div className="company__button"></div>
                        <div className="company__button"></div>
                        <div className="company__button"></div>
                        <div className="company__button"></div>
                    </div>
                </div>
                <div className="info__other">
                    <div className="info-other__column">
                        <div className="column__title">Information</div>
                        <div className="line"></div>
                        <div className="column__paragraph">About us</div>
                        <div className="column__paragraph">Latest post</div>
                        <div className="column__paragraph">Selling tips</div>
                        <div className="column__paragraph">Advertising</div>
                        <div className="column__paragraph">Contact us</div>
                    </div>
                    <div className="info-other__column">
                        <div className="column__title">My Account</div>
                        <div className="line"></div>
                        <div onClick={myAccountRedirectFunc} className="column__paragraph">My Account</div>
                        <div onClick={myAccountRedirectFunc} className="column__paragraph">Login/register</div>
                        <div className="column__paragraph">Cart</div>
                        <div className="column__paragraph">Wishlist</div>
                        <div className="column__paragraph">Order History</div>
                    </div>
                    <div className="info-other__column">
                        <div className="column__title">Help & Support</div>
                        <div className="line"></div>
                        <div className="column__paragraph">How to Shop</div>
                        <div className="column__paragraph">Payment</div>
                        <div className="column__paragraph">Returns</div>
                        <div className="column__paragraph">Delivery</div>
                        <div className="column__paragraph">Privacy & Cookie Policy</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoComponent;