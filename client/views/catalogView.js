import { catalogTemplate } from "../templates/catalogTemplate.js";

export async function catalogView(ctx,next){
    ctx.renderTemplate(catalogTemplate())
}

