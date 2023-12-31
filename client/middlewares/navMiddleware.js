import { render } from "../node_modules/lit-html/lit-html.js"
import {getCartCount} from "../services/shoppingCartServices.js"
import * as navTemplates from "../templates/navTemplate.js"
let container = document.querySelector('#site-header')
import { authOperations } from "../utils/authOperations.js"

export async function navMiddleware(ctx, next){
    let session = authOperations.getSession()
    if(session){
      let cartCount = await getCartCount(authOperations.getUserId())
      authOperations.addItemToSession('cartCount', cartCount)
       session.userRole === 'user' 
       ? render(navTemplates.navTemplateUser(cartCount), container)
       : render(navTemplates.navTemplateMod(session.userRole, cartCount), container)
    }else {
        render(navTemplates.navTemplateGuest(), container)
    }

    // const navLinks = [Array.from(navEl.children)[0], ...Array.from(navEl.children[1].children)].filter(link => link.id !== `logout-btn`)
    // navClassToggle(ctx.pathname, navLinks)

    next()
}

const navClassToggle = (pathname, navLinks) => {
    navLinks.forEach(link => {
      if(link.className == `active`){
        link.classList.remove(`active`)
      }
    })
  
    if(pathname !== `/`){
      if(pathname.startsWith(`/catalog/`)){
        let catalogLink = navLinks.find(link => link.id == `catalog-link`)
        catalogLink.classList.add(`active`)
      }
      else if(pathname.startsWith(`/profile/`)){
        let myRecipesLink = navLinks.find(link => link.id == `my-profile`)
        myRecipesLink.classList.add(`active`)
      }
     else{ 
       navLinks.forEach(link => {
      let linkPathname = new URL(link.href).pathname
      if(linkPathname === pathname){link.classList.add(`active`)}
    })}
    }
  }