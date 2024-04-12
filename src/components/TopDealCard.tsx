import React, {FC} from 'react';
import {IProduct} from "../types/IProduct";
//@ts-ignore
import img from '../images/20.png'
import {Link} from "react-router-dom";
import {AllImages} from "../images/AllImages";
interface TopDealCardProps {
    product:IProduct,
    subtitle:string,

}
const TopDealCard:FC<TopDealCardProps> = ({product,subtitle}) => {
    return (
        <div className="top-deal__card">
            <div className="card__text">
                <div className="card__subtitle">
                    {subtitle}
                </div>
                <div className="card__title">
                    <Link to={`/onlineStore/shop/${product.category}/${product.id}`}>{product?.title}</Link>
                </div>
                <Link rel='noreferrer noopener' to={`/onlineStore/shop/${product?.category}/${product?.id}`} style={{color:'#076df2'}} className="card__btn"><span className='floor'>Shop</span> now</Link>
            </div>
            <div className="card__img-div">
                <Link to={`/onlineStore/shop/${product.category}/${product.id}`}><img src={AllImages(product?.id)} alt="" className="card__img"/></Link>
            </div>
        </div>
    );
};

export default TopDealCard;