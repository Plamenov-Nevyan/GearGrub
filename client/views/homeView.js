import { homeTemplate } from "../templates/homeTemplate.js";

export async function homeView(ctx,next){
    ctx.renderTemplate(homeTemplate())
    $('#search-for-your-car').on('click', function(e){
        e.preventDefault()
        let selectedOption = $('.forCar-select').find(':selected').val()
        if(selectedOption === 'other'){
            let forCarInputVal = $('.forCar-field').val()
            if(forCarInputVal === ''){
                $('.error').slideDown('fast').text('Please specify your vehicle brand!')
            }else {
                ctx.searchForVehicle(ctx, forCarInputVal , $('.part-select').val())
            }
        }else {
            ctx.searchForVehicle(ctx, selectedOption , $('.part-select').find(':selected').val())
        }
    })
    next()
}
