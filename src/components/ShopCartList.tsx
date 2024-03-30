import React, {FC} from 'react';
import ShopCartProduct from "./ShopCartProduct";
import {IProduct} from "../types/IProduct";
interface ShopCartListProps {
    shopCart:IProduct[],
}
const ShopCartList:FC<ShopCartListProps> = ({shopCart}) => {
    return (
        <>
            {shopCart.length >= 1 ? shopCart.map(i => <ShopCartProduct product={i}/>) :
                <h1 className='shopCart__title'>No products in Shop Cart</h1>}
        </>
    );
};

export default ShopCartList;