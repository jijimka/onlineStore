import React from 'react';
import ShopCartList from "./ShopCartList";
import ShopCartSummary from "./ShopCartSummary";
import {useTypedDispatch, useTypedSelector} from "../hooks/redux";
import {shopCartSlice} from "../store/reducers/shopCartSlice";
import {Link} from "react-router-dom";

const ShopCart = () => {
    const dispatch = useTypedDispatch()
    const clearShopCart = shopCartSlice.actions.clearShopcart
    const shopCart = useTypedSelector(state => state.shopCart.shopCart)
    const loggedInUser = useTypedSelector(state => state.users.loggedInUser)

    function buyShopCartFunc() {
        dispatch(clearShopCart())
    }

    if (loggedInUser === null) {
        return (
            <h1>
                <Link rel='noreferrer noopener' to='/onlineStore/login'><span
                    className='large blue'>Login</span></Link> to use shop cart
            </h1>
        )
    }
    return (
        <div className="shopCart">
            <div className="shopCart__list">
                <ShopCartList shopCart={shopCart}/>
            </div>
            <ShopCartSummary shopCart={shopCart} buyShopCartFunc={buyShopCartFunc}/>
        </div>
    );
};

export default ShopCart;