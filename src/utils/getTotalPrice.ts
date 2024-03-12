import {IProduct} from "../types/IProduct";

export function getTotalPrice(products:IProduct[]):number {
    return products.reduce((acc,item) =>
      acc += item.price
    ,0)
}