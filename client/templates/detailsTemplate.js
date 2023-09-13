import { html, nothing } from "../node_modules/lit-html/lit-html.js"

export const detailsTemplate = (product, isOwner, isLoggedIn, isInCart) => html`
<section class="details-section">
<article class="left-part">
    <img
        src="${product.image}"
        alt="product image"
    />
</article>
<article class="right-part">
    <div class="text-top">
        <h1>${product.name}</h1>
        ${visualizeForCar(product.forCar)}
        ${visualizeCategory(product.category)}
        ${visualizeSubcategory(product.subcategory)}
        <h4>Quantity Available: <span>${product.quantityAvailable}</span></h4>
    </div>
    <div class="description">
        <p>
           ${product.description}
        </p>
    </div>
    <div class="owner-info">
        <h4>Posted By: ${product.owner_username}</h4>
        <h4>On: ${product.created_at.split(' ')[0]}</h4>
        <h4>Email: ${product.owner_email}</h4>
        <h4>Phone: ${product.owner_phone}</h4>
        <h4>${product.price} $</h4>
    </div>
    ${isLoggedIn
        ? html`<div class="action-btns">
             ${ isOwner
                ? createOwnerBtns()
                : isInCart
                  ? html`<button id="remove-from-cart-btn">Remove from cart</button>`
                  : html`<button id="add-to-cart-btn">Add to cart</button>`  
            }
         </div>`
        : nothing
    }
</article>
</section>
`

function visualizeCategory(category){
    if(category === "carParts"){
        return html`<h4>Category: Car Parts</h4>`
    }else if(category === 'oilsAndFluids'){
        return html`<h4>Category: Oils and Fluids</h4>`
    }else if(category === 'accessories'){
        return html`<h4>Category: Accessories and Equipment</h4>`
    }else if(category === 'tools'){
        return html`<h4>Category: Tools</h4>`
    }else if(category === 'detailing'){
        return html`<h4>Category: Car Detailing</h4>`
    }else {
        return html`<h4>Category: ${category}</h4>`
    }
}

function visualizeSubcategory(subcategory){
    if(subcategory === 'engine'){
        return html`<h4>Subcategory: Engine</h4>`
    }else if(subcategory === 'exhaustSystem'){
        return html`<h4>Subcategory: Exhaust System</h4>`
    }else if(subcategory === 'filters'){
        return html`<h4>Subcategory: Filters</h4>`
    }else if(subcategory === 'brakeSystem'){
        return html`<h4>Subcategory: Brake System</h4>`
    }else if(subcategory === 'coolingSystem'){
        return html`<h4>Subcategory: Cooling System</h4>`
    }else if(subcategory === 'electrics'){
        return html`<h4>Subcategory: Electrics</h4>`
    }else if(subcategory === 'heater'){
        return html`<h4>Subcategory: Heater</h4>`
    }else if(subcategory === 'lighting'){
        return html`<h4>Subcategory: Lighting</h4>`
    }else if(subcategory === 'body'){
        return html`<h4>Subcategory: Body</h4>`
    }else if(subcategory === 'suspensionAndSteering'){
        return html`<h4>Subcategory: Suspension and Steering</h4>`
    }else if(subcategory === 'fuelSystem'){
        return html`<h4>Subcategory: Fuel System</h4>`
    }else if(subcategory === 'transmissionAndGearing'){
        return html`<h4>Subcategory: Transmission and Gearing</h4>`
    }else if(subcategory === 'engineOil'){
        return html`<h4>Subcategory: Engine Oil</h4>`
    }else if(subcategory === 'transmissionOil'){
        return html`<h4>Subcategory: Transmission Oil</h4>`
    }else if(subcategory === 'lubricants'){
        return html`<h4>Subcategory: Lubricants</h4>`
    }else if(subcategory === 'brakeFluid'){
        return html`<h4>Subcategory: Brake Fluid</h4>`
    }else if(subcategory === 'powerSteeringOil'){
        return html`<h4>Subcategory: Power Steering Oil</h4>`
    }else if(subcategory === 'coolant'){
        return html`<h4>Subcategory: Coolant</h4>`
    }else if(subcategory === 'fuelAdditives'){
        return html`<h4>Subcategory: Fuel Additives</h4>`
    }else if(subcategory === 'adBlue'){
        return html`<h4>Subcategory: AdBlue</h4>`
    }else if(subcategory === 'oilAdditives'){
        return html`<h4>Subcategory: Oil Additives</h4>`
    }else if(subcategory === 'adhesivesAndSealants'){
        return html`<h4>Subcategory: Adhesives and Sealants</h4>`
    }else if(subcategory === 'windshieldFluids'){
        return html`<h4>Subcategory: Windshield Fluids</h4>`
    }else if(subcategory === 'mats'){
        return html`<h4>Subcategory: Mats</h4>`
    }else if(subcategory === 'batteryChargers'){
        return html`<h4>Subcategory: Battery Chargers</h4>`
    }else if(subcategory === 'jumpstartCables'){
        return html`<h4>Subcategory: Jumpstart Cables</h4>`
    }else if(subcategory === 'towbars'){
        return html`<h4>Subcategory: Towbars</h4>`
    }else if(subcategory === 'parkingSensors'){
        return html`<h4>Subcategory: Parking Sensors</h4>`
    }else if(subcategory === 'cameras'){
        return html`<h4>Subcategory: Reversing Cameras</h4>`
    }else if(subcategory === 'wiperBlades'){
        return html`<h4>Subcategory: Wiper Blades</h4>`
    }else if(subcategory === 'chains'){
        return html`<h4>Subcategory: Snow chains and socks</h4>`
    }else if(subcategory === 'roofAccesories'){
        return html`<h4>Subcategory: Roof bars and baskets</h4>`
    }else if(subcategory === 'bicycleCarriers'){
        return html`<h4>Subcategory: Bicycle Carriers</h4>`
    }else if(subcategory === 'inverters'){
        return html`<h4>Subcategory: Inverters</h4>`
    }else if(subcategory === 'childrenSeats'){
        return html`<h4>Subcategory: Children Seats</h4>`
    }else if(subcategory === 'handTools'){
        return html`<h4>Subcategory: Hand Tools</h4>`
    }else if(subcategory === 'vhServiceTools'){
        return html`<h4>Subcategory: Vehicle Service Tools</h4>`
    }else if(subcategory === 'electricTools'){
        return html`<h4>Subcategory: Electric Tools</h4>`
    }else if(subcategory === 'pneumaticTools'){
        return html`<h4>Subcategory: Pneumatic Tools</h4>`
    }else if(subcategory === 'exteriorCare'){
        return html`<h4>Subcategory: Exterior Care and Detailing</h4>`
    }else if(subcategory === 'interiorCare'){
        return html`<h4>Subcategory: Interior Care and Detailing</h4>`
    }else if(subcategory === 'glassCleaning'){
        return html`<h4>Subcategory: Glass Cleaning and Protection</h4>`
    }else if(subcategory === 'waxingAndPolishing'){
        return html`<h4>Subcategory: Waxing and Polishing</h4>`
    }else if(subcategory === 'toolsAndAccesories'){
        return html`<h4>Subcategory: Detailing Tools and Accessories</h4>`
    }else {
        return html`<h4>Subcategory: ${subcategory}</h4>`
    }
}

function visualizeForCar(forCar){
    if(forCar.includes(' ')){
        forCar.split(' ').forEach(word => {
            let wordSplit = word.split('')
            wordSplit[0] = wordSplit[0].toUpperCase()
            word = wordSplit
        })
    }else {
        let forCarSplit = forCar.split('')
        forCarSplit[0] = forCarSplit[0].toUpperCase()
        forCar = forCarSplit.join('')
    }
    return html`<h4>For: ${forCar}</h4>`
}

function createOwnerBtns(){
    return html`
        <button class="owner-btn" id="edit-btn">Edit Publication</button>
        <button class="owner-btn" id="delete-btn">Delete Publication</button>
    `
}