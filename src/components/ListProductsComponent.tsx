import React, {FC, useState} from 'react';
import ProductCard from "./ProductCard";
// @ts-ignore
import img from "../images/20.png";
import {IProduct} from "../types/IProduct";
import {useSwitcher} from "../hooks/useSwitcher";
import {useTypedDispatch} from "../hooks/redux";
import {shopCartSlice} from "../store/reducers/shopCartSlice";
import DragBox from "../UI/DragBox/DragBox";
interface ListProductsComponentProps {
    product:IProduct[],
}

const ListProductsComponent:FC<ListProductsComponentProps> = ({product}) => {
    const addProductToShopcart = shopCartSlice.actions.addProduct
    const dispatch = useTypedDispatch()
    const [dragDivActive,setDragDivActive] = useSwitcher()

    function draggedToShopcart(productId:number) {
        dispatch(addProductToShopcart(product.filter(i => i.id === productId)[0]))
    }

    return (
        <div className='list-products'>
            <div className="list-products__container">
                <div className="list-products__header">
                    <h1 className='list-products__title'>Exclusive products</h1>
                    <div className='list-products__categories'>
                        <div className="categories__title">Best Sellers</div>
                        <div className="categories__title">Featured</div>
                        <div className="categories__title">New Arrival</div>
                        <div className="categories__title">Special Offer</div>
                    </div>
                </div>
                <div className="list-products__body">
                    {product.map((i:IProduct) => <ProductCard dragBoxActive={setDragDivActive} product={i}/>)}
                </div>
            </div>
            <DragBox isActive={dragDivActive} getProductId={draggedToShopcart}/>
        </div>
    );
};

export default ListProductsComponent;