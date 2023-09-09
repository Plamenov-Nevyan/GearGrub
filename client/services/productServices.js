import { apiRequests } from "./api.js";
import { authOperations } from "../utils/authOperations.js";

export async function getProducts(category, forCar){
    console.log(category)
    let query
    if(forCar && category){
        query = `forCar=${forCar}&category=${category}`
    }else if (forCar && !category){
        query = `forCar=${forCar}`
    }else {
        query = `category=${category}`
    }
    let products = await apiRequests.get(null, query)
    return products
}

export async function getProductsFromSubcategory(category, subcategory, forCar){
    let query;
    if(forCar){
        query = `category=${category}&subcategory=${subcategory}&forCar=${forCar}`
    }else {
        query = `category=${category}&subcategory=${subcategory}`
    }
    let products = await apiRequests.get(null, query)
    return products
}

export async function createNewProduct(productData){
    productData.action = "createProduct"
    let newProduct = await apiRequests.post(productData)
    return newProduct
}

export async function getProductDetails(productId){
    let query = `productId=${productId}`
    let product = await apiRequests.get(null, query)
    return product
}