import React, {FC} from 'react';
import PanelItem from "./PanelItem";
import PanelItemMini from "./PanelItemMini";
import {IProduct} from "../types/IProduct";
interface ProductPanelsProps {
    product:IProduct[],
}
const ProductPanels:FC<ProductPanelsProps> = ({product}) => {
    return (
        <div className='product-panel'>
            <div className="product-panel__container">
                <div className="product-panel__separator">
                    <div className='product-panel__main'>
                        <PanelItem item={product[product.length - 1]} text={'Get up to 75% off Today Only'}/>
                    </div>
                    <div className='product-panel__second'>
                        <div className='product-panel__mini'>
                            <PanelItemMini item={product[product.length - 2]} text={'Get up to 75% off Today Only'}/>
                        </div>
                        <div className='product-panel__mini'>
                            <PanelItemMini item={product[product.length - 3]} text={'Get up to 75% off Today Only'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPanels;