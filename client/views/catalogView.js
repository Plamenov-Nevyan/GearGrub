import { catalogTemplate } from "../templates/catalogTemplate.js";

export async function catalogView(ctx,next){
    ctx.renderTemplate(catalogTemplate())
    if(ctx.products){
        $('.items-container').children().detach()
        if(ctx.products.length > 0){
            ctx.products.forEach(product => {
                let productCard = $(`
                <div class="card">
                    <img src="${product.image}" />
                    <h5>${product.name}</h5>
                    <h6>${product.price}</h6>
                </div>
                `)
                $('.items-container').append(productCard)
            })
        }else {
            let noProductsMessage = $('<h1>No products in this category for sale yet...</h1>')
            $('.items-container').append(noProductsMessage)
        }
    }
    next()
}

