import React, {FC} from 'react';
import {getTotalPrice} from "../utils/getTotalPrice";
import {IProduct} from "../types/IProduct";
interface ShopCartSummaryProps {
    shopCart:IProduct[],
    buyShopCartFunc: () => void,
}
const ShopCartSummary:FC<ShopCartSummaryProps> = ({shopCart,buyShopCartFunc}) => {

    return (
        <div className="shopCart__summary">
            <div className="summary__title">
                Shop cart
            </div>
            <div className="summary__total">
                <div className="total__amount">{shopCart.length} Total Products</div>
                <div className="total__price">${getTotalPrice(shopCart)} Total Price</div>
                <div onClick={buyShopCartFunc} className='shopCartProduct__btn'>Buy</div>
            </div>
        </div>
    );
};

export default ShopCartSummary;