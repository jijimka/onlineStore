import React, {FC} from 'react';
import ProductCard from "./ProductCard";
// @ts-ignore
import img from "../images/20.png";
import {IProduct} from "../types/IProduct";
interface ListProductsComponentProps {
    product:IProduct[],
}
const ListProductsComponent:FC<ListProductsComponentProps> = ({product}) => {
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

                    {product.map((i:IProduct) => <ProductCard product={i}/>)}
                </div>
            </div>
        </div>
    );
};

export default ListProductsComponent;