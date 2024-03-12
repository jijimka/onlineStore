import React, {FC} from 'react';
import {IProduct} from "../types/IProduct";
interface ProductDescriptionProps {
    product:IProduct,
}
const ProductDescription:FC<ProductDescriptionProps> = ({product}) => {
    return (
        <div className="product__more">
            <div className="more__title">Description</div>
            <div className="more__body">{product.description}</div>
        </div>
    );
};

export default ProductDescription;