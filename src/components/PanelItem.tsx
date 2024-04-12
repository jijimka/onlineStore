import React, {FC} from 'react';
import {IProduct} from "../types/IProduct";
import {Link} from "react-router-dom";
import {AllImages} from "../images/AllImages";
interface PanelItemProps {
    item:IProduct,
    text:string,

}
const PanelItem:FC<PanelItemProps> = ({item,text,}) => {

    return (
        <div className='panel-item'>
            <div className="panel-item__text">
                <span className='subtitle'>{text}</span>
                <h1 className='panel-item__title'>
                    <Link to={`/onlineStore/shop/${item.category}/${item.id}`}>{item.title}</Link>
                </h1>
                <div className='panel-item__price'><span className='price'>${item.price}</span> <span className='discount'>${item.price*2}</span></div>
                <Link rel='noreferrer noopener' to={`/onlineStore/shop/${item.category}/${item.id}`} style={{color:'#076df2'}} className='panel-item__bttns'><span className='floor'>Shop</span> now</Link>
            </div>
            <div className="panel-item__img-div">
                <img src={AllImages(item.id)} alt={item.category} className="panel-item__img"/>
            </div>
        </div>
    );
};

export default PanelItem;