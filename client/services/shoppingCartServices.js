import { apiRequests } from "./api.js";

export async function addToCart(productId){
 let cartCount = await apiRequests.post({productId})
 return cartCount
}

export async function getCart(){
    let query = 'getCart=getCartDetails'
    let cart = await apiRequests.get(null, query)
    return cart
}

export async function getCartCount(){
    let query = 'getCart=getCartCount'
    let cartCount = await apiRequests.get(null, query)
    return cartCount
}