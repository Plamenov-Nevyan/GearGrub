import { getProductDetails, deleteProduct } from "../../services/productServices.js";
import { authOperations } from "../../utils/authOperations.js";

export async function preloadDetailsData(ctx, next){
    try {
        let product = await getProductDetails(ctx.params.productId)
        ctx.product = product
        ctx.isLoggedIn = authOperations.getUserId() !== null
        ctx.isOwner = product.owner_id === Number(authOperations.getUserId())
        ctx.deletePublication = deletePublication
        ctx.productId = product.id
    }catch(err){
        alert(err)
    }
    next()
}

async function deletePublication(productId, ctx){
    await deleteProduct(productId)
    ctx.page.redirect('/catalog')
}