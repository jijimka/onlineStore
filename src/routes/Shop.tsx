import React, {CSSProperties, useEffect, useState} from 'react';
import HeaderComponent from "../components/HeaderComponent";
import MenuComponent from "../components/MenuComponent";
import NavBarComponent from "../components/NavBarComponent";
import {fetchCategories, fetchProduct} from "../API/fetchProduct";
import {useTypedDispatch, useTypedSelector} from "../hooks/redux";
import MainTittle from "../components/MainTittle";
import ProductCard from "../components/ProductCard";
// @ts-ignore
import img from '../images/20.png'
import {FormControl, FormControlLabel, Radio, RadioGroup, Slider} from "@mui/material";
import {getHighestPrice} from "../utils/getHighestPrice";
import MyInput from "../UI/Input/MyInput";
import InfoComponent from "../components/InfoComponent";
import FooterComponent from "../components/FooterComponent";
import MySelect from "../UI/Select/MySelect";
import {useProductSort} from "../hooks/useFilter";
import {useLocation} from "react-router-dom";
import {useControlledInput} from "../hooks/useControlledInput";

const Shop = () => {
    const dispatch = useTypedDispatch()
    const {product, loading, error} = useTypedSelector(state => state.product)
    const categories = useTypedSelector(state => state.categories.categories)
    const {state} = useLocation()
    const [sliderValue, setSliderValue] = useState<number[]>([0, getHighestPrice(product)])
    const [filterValue, filterChange] = useControlledInput('all')
    const [searchFilter, searchFilterChange] = useControlledInput()
    const [sorting, sortingChange] = useControlledInput()
    const filteredProduct = useProductSort(product, searchFilter, sliderValue, filterValue, sorting)
    const sortingOptions = [
        {value: 'default', name: 'Default'},
        {value: 'lowPrice', name: 'Low Price'},
        {value: 'highPrice', name: 'High Price'},
        {value: 'title', name: 'Name'},
    ]
    const inputStyleProps: CSSProperties = {
        border: '2px solid #f0f0f4',
        borderRadius: '5px',
    }

    useEffect(() => {
        if (product.length < 1) dispatch(fetchProduct())
        if (categories.length < 1) dispatch(fetchCategories())
        if (state !== null) {
            if (state.search?.length > 1) {
                sortingChange(state.search)
            }
            if (state.category?.length > 1) {
                filterChange(state.category)
            }
        }
    }, [])

    function sliderChange(e: Event, newValue: number | number[]) {
        setSliderValue(newValue as number[])
    }

    function sliderTextValue(value: number) {
        return `${value}$`
    }

    return (
        <div className='shop'>
            <HeaderComponent/>
            <MenuComponent/>
            <NavBarComponent categories={categories}/>
            <MainTittle><span className='blue'>Shop</span></MainTittle>
            <div className="shop-products">
                <div className="shop-products__container">
                    <div className="shop-products__filters">
                        <div className="filters__title">Filter categories</div>
                        <div className="filters__radio">
                            <FormControl>
                                <RadioGroup
                                    defaultValue='No filter'
                                    value={filterValue}
                                    onChange={(e) => filterChange(e.target.value)}
                                >
                                    <FormControlLabel value='all' control={<Radio/>} label='No filter'/>
                                    {categories.map(i => <FormControlLabel value={i} control={<Radio/>} label={i}/>)}
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className="filters__slider">
                            <h2 className="slider__title filters__title">Filter by price</h2>
                            <Slider
                                getAriaLabel={() => 'Temperature range'}
                                value={sliderValue}
                                onChange={sliderChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={sliderTextValue}
                                max={getHighestPrice(product)}
                                defaultValue={[0, getHighestPrice(product)]}
                                disableSwap
                            />
                            <div className="slider__value">
                                Price:<span className='blue'>{sliderValue[0]} - ${sliderValue[1]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="shop-products__body">
                        <div className="body__settings">
                            <div className="settings__search">
                                <MyInput style={inputStyleProps} placeholder='Search product' value={searchFilter}
                                         changeEvent={searchFilterChange}/>
                            </div>
                            <div className="settings__sorting">
                                <span className='sorting__text'>Sorting variants</span>
                                <MySelect changeFunction={sortingChange} options={sortingOptions}/>
                            </div>
                        </div>
                        <div className="body__product-list">
                            {filteredProduct.length < 1 ? <h1>No product</h1> : filteredProduct.map(i => <ProductCard
                                product={i}/>)}
                        </div>
                    </div>
                </div>
            </div>
            <InfoComponent/>
            <FooterComponent/>
        </div>
    );
};

export default Shop;