import {authOperations} from "../../utils/authOperations.js"

export function createViewInit(ctx){
    console.log(ctx)
let createData = {
    name: '',
    description: '',
    price: '',
    quantityAvailable: '',
    image: '',
    category: '',
    subcategory: '',
    forCar: '',
    owner: authOperations.getUserId()
}
$(document).ready(function(){
    let categorySelected = $('select#category').find(":selected").val()
    let subcategoryOptions = subcategoriesTemplates(categorySelected)
    $('.create-form').on('submit', async (e) => {
        e.preventDefault()
        let isThereErrors = ctx.checkForErrors(createData)
        if(isThereErrors){return}
        try {
            createData.description = createData.description.trim()
            let newProductId = await ctx.createNewProduct(createData)
        console.log(newProductId)
        }catch(err){
            alert(err)
        }
    })
    $('select#subcategory').append(subcategoryOptions)

    $('.create-data-input').each(function(){
        $(this).on('change', function(e){
            createData[$(this).attr('id')] = $(this).val()
        })
        $(this).on('focus',function(){
            if($(this).hasClass('error')){
                $(this).removeClass('error')
                $(`#${$(this).attr('id')}-error`).slideUp('slow')
            }
        })
    })
    


    $('select#category').on('change', function(e){
        categorySelected = $(this).find(":selected").val()
        createData[category] = categorySelected

        if(categorySelected !== 'other'){
            let subcategoryOptions = subcategoriesTemplates(categorySelected)
            $('select#subcategory').empty()
            $('select#subcategory').append(subcategoryOptions)
            if($('#category-other-input').css('display') !== 'none'){
                $('#category-other-input').slideUp('fast')
                $('#subcategory-other-input').slideUp('fast')
            }
        }else {
            $('#category-other-input').slideDown('fast')
            $('#subcategory-other-input').slideDown('fast')
            $('select#subcategory').empty()
            $('select#subcategory').append('<option class="subcategory-option" value="other">Other</option>')
        }
    })
    
    $('select#subcategory').on('change', function(e){
        let subcategorySelected = $(this).find(":selected").val()
        createData[subcategory] = subcategorySelected

        if(subcategorySelected !== 'other'){
            if($('#subcategory-other-input').css('display') !== 'none'){
                $('#subcategory-other-input').slideUp('fast')
            }
        }else {
            $('#subcategory-other-input').slideDown('fast')
        }
    })

    $('select#forCar').on('change', function(e){
        let forCarSelected = $(this).find(":selected").val()
        createData[forCar] = forCarSelected

        if(forCarSelected !== 'other'){
            if($('#forCar-other-input').css('display') !== 'none'){
                $('#forCar-other-input').slideUp('fast')
            }
        }else {
            $('#forCar-other-input').slideDown('fast')
        }
    })
})


    
function subcategoriesTemplates(showSubcategoriesFor){
    if(showSubcategoriesFor === 'carParts'){
        return`
            <option class="subcategory-option" value="engine">Engine</option>
            <option class="subcategory-option" value="exhaustSystem">Exhaust System</option>
            <option class="subcategory-option" value="filters">Filters</option>
            <option class="subcategory-option" value="brakeSystem">Brake System</option>
            <option class="subcategory-option" value="coolingSystem">Cooling System</option>
            <option class="subcategory-option" value="electrics">Electrics</option>
            <option class="subcategory-option" value="heater">Heater</option>
            <option class="subcategory-option" value="Lighting">Lighting</option>
            <option class="subcategory-option" value="body">Body</option>
            <option class="subcategory-option" value="suspensionAndSteering">Suspension and Steering</option>
            <option class="subcategory-option" value="fuelSystem">Fuel System</option>
            <option class="subcategory-option" value="transmissionAndGearing">Transmission and Gearing</option> 
            <option class="subcategory-option" value="other">Other</option> 
        `
    }else if(showSubcategoriesFor === 'oilsAndFluids'){
        return`
            <option class="subcategory-option" value="engineOil">Engine Oil</option>
            <option class="subcategory-option" value="transmissionOil">Transmission Oil</option>
            <option class="subcategory-option" value="lubricants">Lubricants</option>
            <option class="subcategory-option" value="brakeFluid">Brake Fluid</option>
            <option class="subcategory-option" value="powerSteeringOil">Power Steering Oil</option>
            <option class="subcategory-option" value="coolant">Coolant</option>
            <option class="subcategory-option" value="fuelAdditives">Fuel Additives</option>
            <option class="subcategory-option" value="adBlue">AdBlue</option>
            <option class="subcategory-option" value="oilAdditives">Oil Additives</option>
            <option class="subcategory-option" value="adhesivesAndSealants">Adhesives and Sealants</option>
            <option class="subcategory-option" value="windshieldFluids">Windshield Fluids</option>
            <option class="subcategory-option" value="other">Other</option> 
        `
    }else if(showSubcategoriesFor === 'accessories'){
        return`
            <option class="subcategory-option" value="mats">Floor and Trunk mats</option>
            <option class="subcategory-option" value="batteryChargers">Battery Chargers</option>
            <option class="subcategory-option" value="jumpstartCables">Jumpstart Cables</option>
            <option class="subcategory-option" value="towbars">Towbars</option>
            <option class="subcategory-option" value="parkingSensors">Parking Sensors</option>
            <option class="subcategory-option" value="cameras">Reversing Cameras</option>
            <option class="subcategory-option" value="wiperBlades">Wiper blades</option>
            <option class="subcategory-option" value="chains">Snow chains and socks</option>
            <option class="subcategory-option" value="roofAccesories">Roof bars and baskets</option>
            <option class="subcategory-option" value="bicycleCarriers">Bicycle Carriers</option>
            <option class="subcategory-option" value="inverters">Inverters</option>
            <option class="subcategory-option" value="childrenSeats">Children Seats</option>
            <option class="subcategory-option" value="other">Other</option> 
        `
    }else if(showSubcategoriesFor === 'tools'){
        return`
            <option class="subcategory-option" value="handTools">Hand Tools</option>
            <option class="subcategory-option" value="vhServiceTools">Vehicle Service Tools</option>
            <option class="subcategory-option" value="electricTools">Electric Tools</option>
            <option class="subcategory-option" value="pneumaticTools">Pneumatic Tools</option>
            <option class="subcategory-option" value="other">Other</option> 
        `
    }else if(showSubcategoriesFor === 'detailing'){
        return `
            <option class="subcategory-option" value="exteriorCare">Exterior Care and Detaioptionng</option>
            <option class="subcategory-option" value="interiorCare">Interior Care and Detaioptionng</option>
            <option class="subcategory-option" value="glassCleaning">Glass Cleaning and Protection</option>
            <option class="subcategory-option" value="waxingAndPolishing">Waxing and Polishing</option>
            <option class="subcategory-option" value="toolsAndAccesories">Detailing Tools and Accessories</option>
            <option class="subcategory-option" value="other">Other</option> 
        `
    }
}

}