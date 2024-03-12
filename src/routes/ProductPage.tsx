import React, {useEffect, useMemo, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import MenuComponent from "../components/MenuComponent";
import {fetchCategories, fetchProduct} from "../API/fetchProduct";
import {useTypedDispatch, useTypedSelector} from "../hooks/redux";
import {IProduct} from "../types/IProduct";
import NavBarComponent from "../components/NavBarComponent";
import MainTittle from "../components/MainTittle";
import {getProductById} from "../utils/getProductById";
// @ts-ignore
import img from '../images/20.png'
import {Rating} from "@mui/material";
import {shopCartSlice} from "../store/reducers/shopCartSlice";
import ProductInfo from "../components/ProductInfo";
import ProductDescription from "../components/ProductDescription";
import InfoComponent from "../components/InfoComponent";
import FooterComponent from "../components/FooterComponent";

const ProductPage = () => {
    const dispatch = useTypedDispatch()
    const allProducts = useTypedSelector(state => state.product.product)
    const categories = useTypedSelector(state => state.categories.categories)
    const [product, setProduct] = useState<IProduct | undefined>(undefined)
    const {productCategory, productId,} = useParams()

    useEffect(() => {
        if (allProducts.length < 1) dispatch(fetchProduct())
        dispatch(fetchCategories())
    }, [])

    useEffect(() => {
        setProduct(getProductById(allProducts, Number(productId)))
    },[allProducts])

    return (
        <div className='product__page'>
            <HeaderComponent/>
            <MenuComponent/>
            <NavBarComponent categories={categories}/>
            <MainTittle><Link to='/shop'>Shop</Link> / <span className='blue'>{productCategory}</span></MainTittle>
            {product !== undefined
                ?
                <div className="product">
                    <div className="product__container">
                        <ProductInfo product={product}/>
                        <ProductDescription product={product}/>
                    </div>
                </div>
                :
                <h1>loading</h1>
            }
            <InfoComponent/>
            <FooterComponent/>
        </div>
    );
};

export default ProductPage;