import {IProduct} from "../types/IProduct";

export function getRandomProduct(product: IProduct[], amount: number): IProduct[] {
    let productArray = [...product]
    let array: IProduct[] = []
    for (let i = 0; i < amount; i++) {
        // @ts-ignore
        array.push(productArray.splice(Math.floor(Math.random() * productArray.length), 1))
    }
    return array
}

export function getRandomProductInCategory(product: IProduct[], category: string, amount: number): IProduct[] {
    let array: IProduct[] = []
    let filtered = [...product].filter(i => {
        return i.category === category
    })
    for (let i = 0; i < amount; i++) {
        // @ts-ignore
        array.push(filtered.splice(Math.floor(Math.random() * filtered.length), 1))
    }
    return array
}

export function getRandomProductInCategories(product: IProduct[], categories: string[],):IProduct[] {
    let array:IProduct[] = []
    for (let i = 0; i < categories.length; i++) {
        product.forEach(product => {
            if (product.category === categories[i]) {
                array.push(product)
            }
        })
    }
    return getRandomProduct(array,1).flat(1)
}