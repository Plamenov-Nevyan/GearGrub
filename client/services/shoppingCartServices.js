import { apiRequests } from "./api.js";

export async function addToCart(userId, productId){
 let cartCount = await apiRequests.post({productId, userId, action: 'addToCart'})
 return cartCount
}

export async function removeFromCart(userId, productId){
    let query = `delete=deleteFromCart&id=${userId}&product=${productId}`
    await apiRequests.del(null, query)
}

export async function getCart(userId){
    let query = `getCart=getCartDetails&id=${userId}`
    let cart = await apiRequests.get(null, query)
    return cart
}

export async function getCartCount(userId){
    let query = `getCart=getCartCount&id=${userId}`
    let cartCount = await apiRequests.get(null, query)
    return cartCount
}

export async function checkIfProductIsInCart(userId, productId){
    let query = `getCart=checkIfInCart&id=${userId}&product=${productId}`
    let resp = await apiRequests.get(null, query)
    return resp.inCart
}