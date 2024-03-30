import React, {CSSProperties, FC, useState} from 'react';
import {IProduct} from "../types/IProduct";
import {Rating} from "@mui/material";
import {useTypedDispatch, useTypedSelector} from "../hooks/redux";
import {shopCartSlice} from "../store/reducers/shopCartSlice";
import {Link, useNavigate} from "react-router-dom";
import {wishlistSlice} from "../store/reducers/wishlistSlice";
import {AllImages} from "../images/AllImages";

interface ProductCardProps {
    product: IProduct,
    sale?: boolean,
    style?:CSSProperties,
    imgBackgroundColor?:string,
}

const ProductCard: FC<ProductCardProps> = ({product, sale,style,imgBackgroundColor}) => {
    const navigate = useNavigate()
    const {addProduct} = shopCartSlice.actions
    const {addToWishlist} = wishlistSlice.actions
    const loggedIn = useTypedSelector(state => state.users.loggedInUser)
    const dispatch = useTypedDispatch()
    const bttnsClasses = ['product-card__bttns',]
    const imgClasses = ['product-card__img-div']
    const productCardClasses = ['product-card']
    const [isBttnsActive, setIsBttnsActive] = useState<boolean>(false)
    function addToCart() {
        if (loggedIn !== null) {
            dispatch(addProduct(product))
        } else {
            navigate('/onlineStore/login')
        }
    }
    if (isBttnsActive) {
        bttnsClasses.push('product-card__bttns-active')
        imgClasses.push('product-card__img-div-active')
        productCardClasses.push('product-card-active')
    }

    function addToWishlistFunc() {
        if (loggedIn !== null) {
            dispatch(addToWishlist(product))
        } else {
            navigate('/onlineStore/login')
        }
    }


    return (
        <div onMouseEnter={e => setIsBttnsActive(true)} onMouseLeave={e => setIsBttnsActive(false)}
             className={productCardClasses.join(' ')}
             style={style}
        >
            <div style={{backgroundColor:imgBackgroundColor}} className={imgClasses.join(' ')}>
                <img src={AllImages(product.id)} alt={product.category} className="product-card__img"/>
            </div>
            <div className="product-card__text">
                <div className="product-card__title">{product.title}</div>
                <div className="product-card__rating"><Rating defaultValue={product.rating.rate} name='read-only' readOnly/></div>
                <div className="product-card__price">${product.price}{sale && '$' + product.price * 2}</div>
            </div>
            <div className={bttnsClasses.join(' ')}>
                <div onClick={addToWishlistFunc} className="btn bttns__like">like</div>
                <div onClick={addToCart} className="btn bttns__cart">add to cart</div>
                <Link rel='noreferrer noopener' style={{color:'white'}} to={`/onlineStore/shop/${product.category}/${product.id}`} className="btn bttns__more">more</Link>
            </div>
        </div>
    );
};

export default ProductCard;