import { getProducts, getProductsFromSubcategory } from "../../services/productServices.js"

export async function preloadCatalogData(ctx, next){
    let searchVehicleData = localStorage.getItem('searchVehicleData') 
    if(searchVehicleData){
        let dataParsed = JSON.parse(searchVehicleData)
        console.log(dataParsed)
        ctx.category = dataParsed.category
        try {
            let products = await getProducts(dataParsed.forCar, dataParsed.category)
            ctx.products = products
            ctx.searchFromCategory = searchFromCategory
            ctx.searchFromSubcategory = searchFromSubcategory
        }catch(err){
            alert(err)
        }
    }
    next()
}

async function searchFromCategory(category){
    let products = await getProducts(null, category)
    return products
}

async function searchFromSubcategory(category, subcategory){
    let products = await getProductsFromSubcategory(category, subcategory)
    return products
}