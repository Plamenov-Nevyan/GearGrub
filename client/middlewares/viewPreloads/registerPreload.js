import { registerUser } from "../../services/authServices.js";

export const preloadRegisterData = (ctx, next) => {
    ctx.register = register
    next()
}
    async function register(e,ctx){
        e.preventDefault()
        let {username,email,phone, password} = Object.fromEntries(new FormData(e.currentTarget))
        // let isInfoCorrect = validateInputs([username,email, password, rePass])
        // let doPasswordsMatch = Boolean(password === rePass)
        // if(isInfoCorrect && doPasswordsMatch){
            await registerUser({username,email, phone, password})
            // ctx.showNotification(`Welcome, ${username}! Your registration is done.`, `loadingBox`)
            // ctx.page.redirect('/')
        // }
        // // else{
        //     if(!isInfoCorrect){ctx.showNotification(`Please fill all fields !`, `errorBox`); return}
        //     else if(!doPasswordsMatch){ctx.showNotification(`Please enter matching passwords !`, `errorBox`); return}
        // // }
      }