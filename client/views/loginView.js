import { loginTemplate } from "../templates/loginTemplate.js";

export const loginView = async (ctx, next) => {
    ctx.renderTemplate(loginTemplate())
    const formEl = document.querySelector(`.login-form`)
    formEl.addEventListener(`submit`, function(e){ctx.login(e, ctx)})
    next()
}