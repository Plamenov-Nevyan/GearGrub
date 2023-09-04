import { homeTemplate } from "../templates/homeTemplate.js";

export async function homeView(ctx,next){
    ctx.renderTemplate(homeTemplate())
    next()
}

