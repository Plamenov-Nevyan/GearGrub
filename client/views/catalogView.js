import { catalogTemplate } from "../templates/catalogTemplate.js";

export async function catalogView(ctx,next){
    let searchData = localStorage.getItem('searchVehicleData')
    let vehicle = searchData ? JSON.parse(searchData).forCar : null
    console.log(vehicle)
    ctx.renderTemplate(catalogTemplate(vehicle))
    if(ctx.products){
        $('.items-container').children().detach()
        if(ctx.products.length > 0){
            ctx.products.forEach(product => {
                let productCard = $(`
                <div class="card" id=${product.id}>
                    <img src="${product.image}" />
                    <h5>${product.name}</h5>
                    <h6>${product.price}</h6>
                </div>
                `)
                $(productCard).on('click', function(e){
                    ctx.page.redirect(`/details/${$(this).attr('id')}`)
                })
                $('.items-container').append(productCard)
            })
        }else {
            let noProductsMessage = $('<h1>No products in this category for sale yet...</h1>')
            $('.items-container').append(noProductsMessage)
        }
    }
    next()
}

