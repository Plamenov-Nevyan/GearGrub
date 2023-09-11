import { getProductDetails, deleteProduct } from "../../services/productServices.js";
import { addToCart, checkIfProductIsInCart, removeFromCart } from "../../services/shoppingCartServices.js";
import { authOperations } from "../../utils/authOperations.js";

export async function preloadDetailsData(ctx, next){
    try {
        let product = await getProductDetails(ctx.params.productId)
        let isInCart = await checkIfProductIsInCart(authOperations.getUserId(), product.id)
        ctx.product = product
        ctx.isInCart = isInCart
        ctx.isLoggedIn = authOperations.getUserId() !== null
        ctx.isOwner = product.owner_id === Number(authOperations.getUserId())
        ctx.deletePublication = deletePublication
        ctx.productId = product.id
        ctx.addProductToCart = addProductToCart
        ctx.removeProductFromCart = removeProductFromCart
    }catch(err){
        alert(err)
    }
    next()
}

async function deletePublication(productId, ctx){
    await deleteProduct(productId)
    ctx.page.redirect('/catalog')
}

async function addProductToCart(productId, ctx){
    try {
        let cartCount = await addToCart(authOperations.getUserId(), productId)
        authOperations.addItemToSession('cartCount', cartCount)
        ctx.page.redirect(`/details/${productId}`)
    }catch(err){
        alert(err)
    }
}

async function removeProductFromCart(productId, ctx){
    try {
        await removeFromCart(authOperations.getUserId(), productId)
        ctx.page.redirect(`/details/${productId}`)
    }catch(err){
        alert(err)
    }
}