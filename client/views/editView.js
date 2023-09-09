import { editTemplate } from "../templates/editTemplate.js"

export const editView = (ctx, next) => {
    ctx.renderTemplate(editTemplate(ctx.product))
    next()
}