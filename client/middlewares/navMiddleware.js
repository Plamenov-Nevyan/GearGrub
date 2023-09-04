import { render } from "../node_modules/lit-html/lit-html.js"
import { navTemplate } from "../templates/navTemplate.js"
let container = document.querySelector('#site-header')

export function navMiddleware(ctx, next){
    console.log(ctx)
    render(navTemplate(), container)
    next()
}