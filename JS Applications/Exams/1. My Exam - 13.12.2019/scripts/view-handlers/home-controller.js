import Info from "../helpers/get-info.js";
import Fetch from "../helpers/requester.js";

export function redirectHome(ctx) {
   ctx.redirect("#/home");
}

export function getHome(ctx) {
   Info.getStorageInfo(ctx);

   this.loadPartials(Info.getPartials())
      .partial("./templates/home/home.hbs");
}