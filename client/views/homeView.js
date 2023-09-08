import { homeTemplate } from "../templates/homeTemplate.js";

export async function homeView(ctx,next){
    ctx.renderTemplate(homeTemplate())
    $('#search-for-your-car').on('click', function(e){
        e.preventDefault()
        ctx.searchForVehicle(ctx, $('.forCar-select').val(), $('.part-select').val())
    })
    next()
}
