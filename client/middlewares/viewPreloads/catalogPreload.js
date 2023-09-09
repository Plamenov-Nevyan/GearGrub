import { getProducts, getProductsFromSubcategory } from "../../services/productServices.js"

export async function preloadCatalogData(ctx, next){
    let searchVehicleData = localStorage.getItem('searchVehicleData') 
    ctx.searchFromCategory = searchFromCategory
    ctx.searchFromSubcategory = searchFromSubcategory
    if(searchVehicleData){
        let dataParsed = JSON.parse(searchVehicleData)
        console.log(dataParsed)
        ctx.category = dataParsed.category
        try {
            let products = await getProducts( dataParsed.category, dataParsed.forCar)
            ctx.products = products
        }catch(err){
            alert(err)
        }
    }
    next()
}

async function searchFromCategory(category, forCar){
    let products = await getProducts(category, forCar)
    return products
}

async function searchFromSubcategory(category, subcategory, forCar){
    let products = await getProductsFromSubcategory(category, subcategory, forCar)
    return products
}