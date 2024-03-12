import React, {FC} from 'react';
import {IProduct} from "../types/IProduct";
import TopDealCard from "./TopDealCard";
interface TopDealComponentProps {
    topDeal:IProduct,
    topSale:IProduct,
    topDress:IProduct,
    img:string,
}

const TopDealComponent:FC<TopDealComponentProps> = ({topSale,topDress,topDeal,img}) => {
    return (
        <div className="top-deal">
            <div className="top-deal__container">
                <TopDealCard product={topDeal} subtitle={'Top Deal'}/>
                <TopDealCard product={topDress} subtitle={'Dress'}/>
                <TopDealCard product={topSale} subtitle={'Up to 35% off'}/>
            </div>
        </div>
    );
};

export default TopDealComponent;