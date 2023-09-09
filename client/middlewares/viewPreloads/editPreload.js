import { getProductDetails, editProduct } from "../../services/productServices.js";
import { createValidator } from "../../utils/createValidators.js";

export const preloadEditData = async (ctx, next) => {
     try {
        let product = await getProductDetails(ctx.params.productId)
        ctx.product = product
        ctx.productId = product.id
        ctx.updateProduct = updateProduct
        ctx.checkForErrors = checkForErrors
     }catch(err){
        alert(err)
     }
     next()
}

async function updateProduct(editData, productId){
    try {
        let updatedProduct = await editProduct(editData, productId)
        return updatedProduct
    }catch(err){
        throw err
    }
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