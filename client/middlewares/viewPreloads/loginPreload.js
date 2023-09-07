import { loginUser } from "../../services/authServices.js"
import { validator } from "../../utils/authValidators.js"; 
// import {validateInputs} from "../../utils/Validate-Input-Fields.js"

export const preloadLoginData = (ctx, next) => {
    ctx.login = login
    next()
}

async function login(e, ctx){
    e.preventDefault()
    let {email, password} = Object.fromEntries(new FormData(e.currentTarget))
    // let isInfoCorrect = validateInputs([username,email, password])
    // if(isInfoCorrect){
        let isThereErrors = checkForErrors()
        if(isThereErrors){return}
        await loginUser({email, password})
        // ctx.showNotification(`Welcome back, ${username}!`, `loadingBox`)
        e.target.reset()
        ctx.page.redirect('/catalog')
    // }
    // else{
    //    ctx.showNotification(`Please enter valid email and password !`, `errorBox`)
    //    return
    // }
  }

  function checkForErrors(){
    let errors = validator({                // Validate and check for errors by passing the form input values
        email: $('#email').val(),
        password: $('#password').val()
        }, 'login')
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