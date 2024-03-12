import {IProduct} from "../types/IProduct";

export function getProductById(allProducts:IProduct[],id:number):IProduct {
    const answer = allProducts.filter(i => {
        return i.id === id
    })
    return answer[0]
}