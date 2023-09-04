import { loginTemplate } from "../templates/loginTemplate.js";

export const loginView = async (ctx, next) => {
    ctx.renderTemplate(loginTemplate())
    next()
}