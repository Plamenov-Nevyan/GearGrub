export async function catalogViewInit(ctx){
let showSubcategoriesFor = ctx.category ? ctx.category : null
let searchVehicleData = localStorage.getItem('searchVehicleData')
attachClassEventsForCategories()
attachClassEventsForSubcategories()
if(showSubcategoriesFor){
    let showSubcategoriesTemplate = subcategoriesTemplates(showSubcategoriesFor)
    $('.subcategories-list').empty()
    $('.subcategories-list').append(showSubcategoriesTemplate)
    $('.sidebar-top').slideDown('fast')
    $('.sidebar-middle').slideDown('fast')
    $('.line-divider').slideDown('fast')
    $('.subcategory-li').each(function(){
        $(this).on('click', async function(e){
            let products = await searchForSubcategories(e)
            if(products.length > 0){
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
        })
    })
    attachClassEventsForCategories()
    attachClassEventsForSubcategories()
}

$('.category-li').each(function(){
    $(this).on('click', async function(e){
        showSubcategoriesFor = $(this).attr('id')
        let showSubcategoriesTemplate = subcategoriesTemplates($(this).attr('id'))
        console.log(showSubcategoriesTemplate)
        $('.subcategories-list').empty()
        $('.subcategories-list').append(showSubcategoriesTemplate)
        $('.sidebar-top').slideDown('fast')
        $('.sidebar-middle').slideDown('fast')
        $('.line-divider').slideDown('fast')
        attachClassEventsForSubcategories()
        $('.items-container').empty()
        let products = await searchForCategories(e)
        if(products.length > 0){
            products.forEach(product => {
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
        $('.subcategory-li').each(function(){
            $(this).on('click', async function(e){
                let products = await searchForSubcategories(e)
                $('.items-container').empty()
                if(products.length > 0){
                        products.forEach(product => {
                            let productCard = $(`
                            <div class="card">
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
            })
        })
    })
})

$('#clear-vehicle-selection').on('click', function(){
    localStorage.removeItem('searchVehicleData')
    ctx.page.redirect('/catalog')
})

function attachClassEventsForCategories(){
    $('.category-li').each(function(){
        if($(this).attr('id') === showSubcategoriesFor){
            $(this).addClass('active-category')
        }
        $(this).on('click', function(){
            $('.category-li').each(function(){
                if($(this).hasClass('active-category')){
                    $(this).removeClass('active-category')
                }
            })
            $('.sidebar-top').slideDown('fast')
            $('.sidebar-middle').slideDown('fast')
            $('.line-divider').slideDown('fast')
            $(this).addClass('active-category')
        })
    })
}

function attachClassEventsForSubcategories(){
    $('.subcategory-li').each(function(){
        $(this).on('click', function(){
            $('.subcategory-li').each(function(){
                if($(this).hasClass('active-subcategory')){
                    $(this).removeClass('active-subcategory')
                }
            })
            $(this).addClass('active-subcategory')
        })
    })
}

function subcategoriesTemplates(showSubcategoriesFor){
    if(showSubcategoriesFor === 'carParts'){
        return`
            <li class="subcategory-li" id="engine">Engine</li>
            <li class="subcategory-li" id="exhaustSystem">Exhaust System</li>
            <li class="subcategory-li" id="filters">Filters</li>
            <li class="subcategory-li" id="brakeSystem">Brake System</li>
            <li class="subcategory-li" id="coolingSystem">Cooling System</li>
            <li class="subcategory-li" id="electrics">Electrics</li>
            <li class="subcategory-li" id="heater">Heater</li>
            <li class="subcategory-li" id="lighting">Lighting</li>
            <li class="subcategory-li" id="body">Body</li>
            <li class="subcategory-li" id="suspensionAndSteering">Suspension and Steering</li>
            <li class="subcategory-li" id="fuelSystem">Fuel System</li>
            <li class="subcategory-li" id="transmissionAndGearing">Transmission and Gearing</li> 
        `
    }else if(showSubcategoriesFor === 'oilsAndFluids'){
        return`
            <li class="subcategory-li" id="engineOil">Engine Oil</li>
            <li class="subcategory-li" id="transmissionOil">Transmission Oil</li>
            <li class="subcategory-li" id="lubricants">Lubricants</li>
            <li class="subcategory-li" id="brakeFluid">Brake Fluid</li>
            <li class="subcategory-li" id="powerSteeringOil">Power Steering Oil</li>
            <li class="subcategory-li" id="coolant">Coolant</li>
            <li class="subcategory-li" id="fuelAdditives">Fuel Additives</li>
            <li class="subcategory-li" id="adBlue">AdBlue</li>
            <li class="subcategory-li" id="oilAdditives">Oil Additives</li>
            <li class="subcategory-li" id="adhesivesAndSealants">Adhesives and Sealants</li>
            <li class="subcategory-li" id="windshieldFluids">Windshield Fluids</li>
        `
    }else if(showSubcategoriesFor === 'accessories'){
        return`
            <li class="subcategory-li" id="mats">Floor and Trunk mats</li>
            <li class="subcategory-li" id="batteryChargers">Battery Chargers</li>
            <li class="subcategory-li" id="jumpstartCables">Jumpstart Cables</li>
            <li class="subcategory-li" id="towbars">Towbars</li>
            <li class="subcategory-li" id="parkingSensors">Parking Sensors</li>
            <li class="subcategory-li" id="cameras">Reversing Cameras</li>
            <li class="subcategory-li" id="wiperBlades">Wiper blades</li>
            <li class="subcategory-li" id="chains">Snow chains and socks</li>
            <li class="subcategory-li" id="roofAccesories">Roof bars and baskets</li>
            <li class="subcategory-li" id="bicycleCarriers">Bicycle Carriers</li>
            <li class="subcategory-li" id="inverters">Inverters</li>
            <li class="subcategory-li" id="childrenSeats">Children Seats</li>
        `
    }else if(showSubcategoriesFor === 'tools'){
        return`
            <li class="subcategory-li" id="handTools">Hand Tools</li>
            <li class="subcategory-li" id="vhServiceTools">Vehicle Service Tools</li>
            <li class="subcategory-li" id="electricTools">Electric Tools</li>
            <li class="subcategory-li" id="pneumaticTools">Pneumatic Tools</li>
        `
    }else if(showSubcategoriesFor === 'detailing'){
        return `
            <li class="subcategory-li" id="exteriorCare">Exterior Care and Detailing</li>
            <li class="subcategory-li" id="interiorCare">Interior Care and Detailing</li>
            <li class="subcategory-li" id="glassCleaning">Glass Cleaning and Protection</li>
            <li class="subcategory-li" id="waxingAndPolishing">Waxing and Polishing</li>
            <li class="subcategory-li" id="toolsAndAccesories">Detailing Tools and Accessories</li>
        `
    }
}

async function searchForCategories(e){
    let forCar = searchVehicleData ? JSON.parse(searchVehicleData).forCar : null
    let products = await ctx.searchFromCategory($(e.target).attr('id'), forCar)
    return products
}

async function searchForSubcategories(e){
    let forCar = searchVehicleData ? JSON.parse(searchVehicleData).forCar : null
    let products = await ctx.searchFromSubcategory(showSubcategoriesFor, $(e.target).attr('id'), forCar)
    return products
}

}