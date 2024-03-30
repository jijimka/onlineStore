import React, {CSSProperties, FC, useEffect, useState} from 'react';
import MyInput from "../UI/Input/MyInput";
import {Link} from "react-router-dom";
import MySelect from "../UI/Select/MySelect";
import ModalWindow from "../UI/ModalWindow/ModalWindow";
import {useTypedDispatch, useTypedSelector} from "../hooks/redux";
// @ts-ignore
import img from '../images/20.png'
import ShopCartProduct from "./ShopCartProduct";
import {getTotalPrice} from "../utils/getTotalPrice";
import WishlistProduct from "./WishlistProduct";
import {shopCartSlice} from "../store/reducers/shopCartSlice";
import {useSwitcher} from "../hooks/useSwitcher";
import {useControlledInput} from "../hooks/useControlledInput";

const searchStyleProps: CSSProperties = {
    borderRight: 'none',
    borderLeft: 'none',
}
const MenuComponent = () => {
    const dispatch = useTypedDispatch()
    const categories = useTypedSelector(state => state.categories.categories)
    const {clearShopcart} = shopCartSlice.actions
    const loggedInUser = useTypedSelector(state => state.users.loggedInUser)
    const wishlist = useTypedSelector(state => state.wishlist.wishlistProducts)
    const shopCart = useTypedSelector(state => state.shopCart.shopCart)
    const [categorySelected,categoriesSelectChange] = useControlledInput()
    const [searchQuery,searchChange] = useControlledInput()
    const [shopCartActive,shopCartSelected] = useSwitcher()
    const [wishlistIsActive,wishlistActiveChange] = useSwitcher()

    function buyShopcartFunc() {
        dispatch(clearShopcart())
    }

    return (
        <div className="menu">
            <div className="menu__container">
                <Link rel='noreferrer noopener' to='/' className="menu__title">
                    jijimka
                </Link>
                <div className="menu__search">
                    <MySelect changeFunction={categoriesSelectChange} optionsString={categories}
                              options={[{value: 'all', name: 'All category'}]}/>
                    <MyInput style={searchStyleProps} value={searchQuery} placeholder='Search'
                             changeEvent={searchChange}/>
                    <Link rel='noreferrer noopener' state={{category: categorySelected, search: searchQuery}} to='/shop'
                          className='menu__button-search'>
                        <img alt='search' className='button-search__img'
                             src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/1200px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png'/>
                    </Link>
                </div>
                <div className="menu__bttns">
                    <div onClick={wishlistActiveChange} className='menu__img-div-heart'>
                        <img alt='heart' className='menu__img'
                             src='https://static-00.iconduck.com/assets.00/heart-icon-512x441-zviestnn.png'/>
                        <div className='circle-hint'>{wishlist.length}</div>
                        <ModalWindow isActive={wishlistIsActive} changeActive={wishlistActiveChange}>
                            <div className="wishlist-list">
                                {loggedInUser === null
                                    ?
                                    <h1><Link rel='noreferrer noopener' to='/login'><span className='large blue'>Login</span></Link> to use
                                        wishlist</h1>
                                    :
                                    wishlist.length < 1
                                        ?
                                        <h1>No products in wishlist</h1>
                                        :
                                        wishlist.map(i => <WishlistProduct product={i} img={img}/>)
                                }
                            </div>
                        </ModalWindow>
                    </div>
                    <div onClick={shopCartSelected} className="menu__img-div-shopcart">
                        <img src="https://static.thenounproject.com/png/1246426-200.png" alt="shop cart"
                             className="menu__img"/>
                        <div className='circle-hint'>{shopCart.length}</div>
                        <ModalWindow isActive={shopCartActive} changeActive={shopCartSelected}>
                            <div className="shopCart">
                                <div className="shopCart__list">
                                    {shopCart.length >= 1 ? shopCart.map(i => <ShopCartProduct product={i}
                                                                                               img={img}/>) :
                                        <h1 className='shopCart__title'>No products in Shop Cart</h1>}
                                </div>
                                <div className="shopCart__summary">
                                    <div className="summary__title">
                                        Shop cart
                                    </div>
                                    <div className="summary__total">
                                        <div className="total__amount">{shopCart.length} Total Products</div>
                                        <div className="total__price">${getTotalPrice(shopCart)} Total Price</div>
                                        <div onClick={buyShopcartFunc} className='shopCartProduct__btn'>Buy</div>
                                    </div>
                                </div>
                            </div>
                        </ModalWindow>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuComponent;