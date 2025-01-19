import {useMemo} from "react";
import {IProduct} from "../types/IProduct";


export const useCategoryFilter = (product: IProduct[], value: string,):IProduct[] => {
    const productsFilteredCategory = useMemo(() => {
        if (value === 'all') {
            return product
        } else {
            return product.filter(i => {
                return i.category === value
            })
        }
    }, [product, value])
    return productsFilteredCategory
}
export const usePriceFilter = (product: IProduct[], priceValue: number[], categoryValue:string, ):IProduct[] => {
    const categoryProduct = useCategoryFilter(product,categoryValue)
    const productsFiltered = useMemo(() => {
        if (priceValue[1] === 0) {
            return categoryProduct
        } else {
            return categoryProduct.filter(i => {
                return i.price <= priceValue[1] && i.price >= priceValue[0]
            })
        }
    }, [priceValue,categoryProduct])
    return productsFiltered
}
export const useSearchFilter = (product: IProduct[], searchQuery: string, priceValue:number[],categoryValue:string, ):IProduct[] => {
    const priceAndCategoryFiltered = usePriceFilter(product,priceValue,categoryValue)
    const searchFilter = useMemo(() => {
        return searchQuery.length >= 1
            ?
            priceAndCategoryFiltered.filter(i => {
                return i.title.toLowerCase().includes(searchQuery.toLowerCase())
            })
            :
            priceAndCategoryFiltered
    }, [priceAndCategoryFiltered, searchQuery])
    return searchFilter
}

export const useProductSort = (product: IProduct[], searchQuery: string, priceValue:number[],categoryValue:string, sortMethod: string,):IProduct[] => {
    const filteredProduct = useSearchFilter(product,searchQuery,priceValue,categoryValue)
    const productSort = useMemo(() => {
        if (sortMethod === 'default') return filteredProduct;
        switch (sortMethod) {
            case 'lowPrice': return [...filteredProduct].sort((a,b) => a.price - b.price)
            case 'highPrice': return [...filteredProduct].sort((a,b) => b.price - a.price)
            case 'title':return [...filteredProduct].sort((a,b) => a.title.localeCompare(b.title))
            case 'rating': return [...filteredProduct].sort((a,b) => b.rating.rate - a.rating.rate )
            default:return filteredProduct
        }
    }, [filteredProduct, sortMethod])
    return productSort
}
