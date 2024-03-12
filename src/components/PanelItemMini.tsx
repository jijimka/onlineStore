import React, {FC} from 'react';
import {IProduct} from "../types/IProduct";
import {Link} from "react-router-dom";
import {AllImages} from "../images/AllImages";
interface PanelItemMiniProps {
    item:IProduct,
    text:string,
}
const PanelItemMini:FC<PanelItemMiniProps> = ({item,text}) => {
    return (
        <div className='panel-item-mini'>
            <div className="panel-item-mini__text">

                <h1 className='panel-item-mini__title'>
                    {item.title}
                </h1>
                <span className='subtitle'>{text}</span>
                <Link to={`/shop/${item.category}/${item.id}`} style={{color:'#076df2'}} className='panel-item-mini__bttns'><span className='floor'>Shop</span> now</Link>
            </div>
            <div className="panel-item-mini__img-div">
                <img src={AllImages(item.id)} alt={item.category} className="panel-item-mini__img"/>
            </div>
        </div>
    );
};

export default PanelItemMini;