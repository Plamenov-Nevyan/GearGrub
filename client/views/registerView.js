import { registerTemplate } from "../templates/registerTemplate.js";

export const registerView = async (ctx, next) => {
    ctx.renderTemplate(registerTemplate())
    const formEl = document.querySelector(`.register-form`)
    formEl.addEventListener(`submit`, function(e){ctx.register(e, ctx)})
    console.log(formEl)
    next()
}