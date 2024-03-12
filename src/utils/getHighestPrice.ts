import {IProduct} from "../types/IProduct";

export function getHighestPrice(product:IProduct[]) {
    let highestPrice = 0
    for (let i = 0; i < product.length; i++) {
        if (highestPrice < product[i].price) {
            highestPrice = product[i].price
        }
    }
    return highestPrice
}