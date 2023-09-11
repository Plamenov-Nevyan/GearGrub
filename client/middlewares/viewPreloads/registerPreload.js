import { registerUser } from "../../services/authServices.js";
import { validator } from "../../utils/authValidators.js"; 
import { authOperations } from "../../utils/authOperations.js";
import { getCartCount } from "../../services/shoppingCartServices.js";

export const preloadRegisterData = (ctx, next) => {
    ctx.register = register
    next()
}
async function register(e,ctx){
    e.preventDefault()
    let isThereErrors = checkForErrors()
    if(isThereErrors){return}
    let {username,email,phone, password} = Object.fromEntries(new FormData(e.currentTarget))
    // let isInfoCorrect = validateInputs([username,email, password, rePass])
    // let doPasswordsMatch = Boolean(password === rePass)
    // if(isInfoCorrect && doPasswordsMatch){
        await registerUser({username,email, phone, password})
        let cartCount = await getCartCount(authOperations.getUserId())
        authOperations.addItemToSession('cartCount', cartCount)
        e.target.reset()
        // ctx.showNotification(`Welcome, ${username}! Your registration is done.`, `loadingBox`)
        ctx.page.redirect('/catalog')
    // }
    // // else{
    //     if(!isInfoCorrect){ctx.showNotification(`Please fill all fields !`, `errorBox`); return}
    //     else if(!doPasswordsMatch){ctx.showNotification(`Please enter matching passwords !`, `errorBox`); return}
    // // }
    }

function checkForErrors(){
    let errors = validator({                // Validate and check for errors by passing the form input values
        username: $('#username').val(),
        email: $('#email').val(),
        phone: $('#phone').val(),
        password: $('#password').val()
        }, 'register')
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

