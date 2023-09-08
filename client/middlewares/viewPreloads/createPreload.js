import { createNewProduct } from "../../services/productServices.js";
import { createValidator } from "../../utils/createValidators.js"

export function preloadCreateData(ctx, next){
    ctx.createNewProduct = createProduct
    ctx.checkForErrors = checkForErrors
    next()
}

async function createProduct(productData){
    let newProduct = await createNewProduct(productData)
    return newProduct
}

function checkForErrors(inputValues){
    let errors = createValidator(inputValues)           // Validate and check for errors by passing the form input values
        
        if(Object.values(errors).some(error => error !== '')){
        Object.entries(errors).forEach(([key, value]) => {
            if(value !== ''){                                                    // If there are errors get the key (input name) and value (error message)
            $(`#${key}`).addClass('error').effect("shake", {times: 4}, 700)    // attach class error to give the input red borders and then add
            $(`#${key}-error`).text(value).slideDown("fast")                  // shake animation while giving the error span, the value as text 
            }
        })
        return true
        }
        return false
}