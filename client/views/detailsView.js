import { detailsTemplate } from "../templates/detailsTemplate.js";

export const detailsView = (ctx, next) => {
    ctx.renderTemplate(detailsTemplate(ctx.product, ctx.isOwner, ctx.isLoggedIn))
    next()
}