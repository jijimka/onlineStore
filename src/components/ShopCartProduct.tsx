import React, {FC} from 'react';
import {IProduct} from "../types/IProduct";
import {useTypedDispatch, useTypedSelector} from "../hooks/redux";
import {shopCartSlice} from "../store/reducers/shopCartSlice";

interface ShopCartProductProps {
    product: IProduct,
    img: string,

}

const ShopCartProduct: FC<ShopCartProductProps> = ({product, img,}) => {
    const dispatch = useTypedDispatch()
    const allShopCartProducts = useTypedSelector(state => state.shopCart.shopCart)
    const {removeProduct} = shopCartSlice.actions
    function removeShopCartProduct() {
        dispatch(removeProduct(allShopCartProducts.indexOf(product)))
    }
    return (
        <div className='shopCartProduct'>
            <div className="shopCartProduct__text">
                <div className="shopCartProduct__title">{product.title}</div>
                <div className="shopCartProduct__other">
                    <div className="shopCartProduct__price">{product.price}$</div>
                    <div className="shopCartProduct__bttns">
                        <div onClick={removeShopCartProduct} className="shopCartProduct__btn">Remove</div>
                    </div>
                </div>
            </div>
            <div className="shopCartProduct__img-div">
                <img className='shopCartProduct__img' alt={product.category} src={img}/>
            </div>
        </div>
    );
};

export default ShopCartProduct;