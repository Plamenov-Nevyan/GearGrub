import { registerTemplate } from "../templates/registerTemplate.js";

export const registerView = async (ctx, next) => {
    ctx.renderTemplate(registerTemplate())
    // next()
}