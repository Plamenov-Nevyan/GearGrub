import { apiRequests } from "./api.js";
import { authOperations } from "../utils/authOperations.js";

export async function getProducts(forCar, category){
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

export async function getProductsFromSubcategory(category, subcategory){
    let query = `category=${category}&subcategory=${subcategory}`
    let products = await apiRequests.get(null, query)
    return products
}

export async function createNewProduct(productData){
    productData.action = "createProduct"
    let newProduct = await apiRequests.post(productData)
    return newProduct
}