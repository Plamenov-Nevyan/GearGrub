import { authOperations } from "../utils/authOperations.js"

export const logout = async (ctx) => {
    let confirmLogout = confirm(`Are you sure you want to exit your profile?`)
  if(confirmLogout){
    console.log(ctx)
   await authOperations.clearSession()
//    ctx.showNotification(`Goodbye, ${ctx.userData.username}!`, `infoBox`)
   ctx.page.redirect('/')
  }
 }