import React, {FC} from 'react';
import {IProduct} from "../types/IProduct";
import {useTypedDispatch, useTypedSelector} from "../hooks/redux";
import {wishlistSlice} from "../store/reducers/wishlistSlice";
import {shopCartSlice} from "../store/reducers/shopCartSlice";

interface WishlistProductProps {
    product: IProduct,
    img:string,
}

const WishlistProduct: FC<WishlistProductProps> = ({product,img}) => {
    const dispatch = useTypedDispatch()
    const allWishlistProducts = useTypedSelector(state => state.wishlist.wishlistProducts)
    const {removeFromWishlist} = wishlistSlice.actions
    const addToShopcart = shopCartSlice.actions.addProduct
    function removeProduct() {
        dispatch(removeFromWishlist(allWishlistProducts.indexOf(product)))
    }
    function addToShopcartFunc() {
        dispatch(addToShopcart(product))
    }
    return (
        <div className='wishlist-product'>
            <div className="wishlist-product__img-div">
                <img src={img} alt={product.category} className="wishlist-product__img"/>
            </div>
            <div className="wishlist-product__info">
                <div className="wishlist-product__title">{product.title}</div>
                <div className="wishlist-product__other">
                    <div className="wishlist-product__price">${product.price} USD</div>
                    <div className="wishlist-product__bttns">
                        <div onClick={removeProduct} className="wishlist-product__btn">Remove</div>
                        <div onClick={addToShopcartFunc} className="wishlist-product__btn">Add to shop cart</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistProduct;