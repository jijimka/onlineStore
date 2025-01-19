import React, {FC} from 'react';
import {Rating} from "@mui/material";
import {IProduct} from "../types/IProduct";
import {useTypedDispatch, useTypedSelector} from "../hooks/redux";
import {shopCartSlice} from "../store/reducers/shopCartSlice";
import {wishlistSlice} from "../store/reducers/wishlistSlice";
import {usersSlice} from "../store/reducers/usersSlice";
import {AllImages} from "../images/AllImages";
interface ProductInfoProps {
    product:IProduct,

}
const ProductInfo:FC<ProductInfoProps> = ({product}) => {
    const dispatch = useTypedDispatch()
    const loggedIn = useTypedSelector(state => state.users.loggedInUser)
    const {addToWishlist} = wishlistSlice.actions
    const {addProduct} = shopCartSlice.actions

    function addToWishlistFunc() {
        if (loggedIn !== null) {
            dispatch(addToWishlist(product))
        }
    }
    function addToShopcartFunc() {
        if (loggedIn !== null) {
            dispatch(addProduct(product))
        }
    }

    return (
        <div className='product__info'>
            <div className="product__img-div">
                {<img className='product__img' src={AllImages(product.id)} alt={product.category}/>}
            </div>
            <div className="product__body">
                <div className="product__text">
                    <div className="product__title">
                        {product.title}
                    </div>
                    <div className="product__rating">
                        <Rating defaultValue={product.rating.rate} name='read-only' readOnly/>
                    </div>
                    <div className="product__description">
                        <div className="description__title">Description</div>
                        <div className="description__body">{product.description}</div>
                    </div>
                    <div className="product__price">
                        ${product.price} USD
                    </div>
                    <div className="product__available">
                        Available: <span className='green'>In Stock</span>
                    </div>
                </div>
                <div className="product__bttns">
                    <div onClick={addToShopcartFunc} className="product__shop-cart btn">
                        Add to cart
                    </div>
                    <div onClick={addToWishlistFunc} className="product__wishlist btn">
                        Wishlist
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;