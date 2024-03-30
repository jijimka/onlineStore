import React, {useEffect, useState} from 'react';
import './App.css';
import {useTypedDispatch, useTypedSelector} from "./hooks/redux";
import {fetchCategories, fetchProduct, fetchUsers} from "./API/fetchProduct";
import HeaderComponent from "./components/HeaderComponent";
import {IProduct} from "./types/IProduct";
import MenuComponent from "./components/MenuComponent";
import NavBarComponent from "./components/NavBarComponent";
import ProductPanels from "./components/ProductPanels";
import ListProductsComponent from "./components/ListProductsComponent";
import {getRandomProduct, getRandomProductInCategories} from "./utils/getRandomProduct";
import TopDealComponent from "./components/TopDealComponent";
import InfoComponent from "./components/InfoComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
    const dispatch = useTypedDispatch()
    const categories = useTypedSelector(state => state.categories.categories)
    const [topDeal, setTopDeal] = useState<IProduct>()
    const [topDress, setTopDress] = useState<IProduct>()
    const [topSale, setTopSale] = useState<IProduct>()
    const [productList, setProductList] = useState<IProduct[]>([])
    const {product} = useTypedSelector(state => state.product)

    useEffect(() => {
        if (product.length < 1) dispatch(fetchProduct())
        dispatch(fetchCategories())
        dispatch(fetchUsers())
    }, [])
    useEffect(() => {
        setProductList(getRandomProduct(product, 12).flat(1))
        setTopDress(getRandomProductInCategories(product, ["men's clothing", "women's clothing"],)[0])
        setTopDeal(getRandomProduct(product, 1).flat(1)[0])
        setTopSale(getRandomProduct(product, 1).flat(1)[0])
    }, [product])

    if (product.length < 1) return <h1>loading</h1>
    return (
        <div className="App">
            <HeaderComponent/>
            <MenuComponent/>
            <NavBarComponent categories={categories}/>
            <ProductPanels product={product}/>
            <ListProductsComponent product={productList}/>
            {topDeal && topSale && topDress ?
                <TopDealComponent topDeal={topDeal} topSale={topSale} topDress={topDress}/> : null}
            <InfoComponent/>
            <FooterComponent/>
        </div>
    );
}

export default App;
