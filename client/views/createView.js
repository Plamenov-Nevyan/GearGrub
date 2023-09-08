import { createTemplate } from "../templates/createTemplate.js";

export const createView = (ctx, next) => {
    ctx.renderTemplate(createTemplate())
    next()
}