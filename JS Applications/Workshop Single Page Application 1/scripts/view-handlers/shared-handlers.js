import Info from "../helpers/get-info.js";
import Fetch from "../helpers/requester.js";

export function redirectHome(ctx) {
   ctx.redirect("#/home");
}

export function getHome(ctx) {
   Info.getStorageInfo(ctx);

   const partials = Info.getPartials();
   partials["anonymous"] = "./templates/home/anonymous.hbs";
   partials["withRecipes"] = "./templates/home/with-recipes.hbs";
   partials["withoutRecipes"] = "./templates/home/without-recipes.hbs";

   if (ctx.loggedIn) {
      Fetch.get("appdata", "recipes")
         .then(recipes => {
            ctx.recipes = recipes;

            this.loadPartials(partials)
               .partial("./templates/home/home.hbs");
         })
   } else {
      this.loadPartials(partials)
         .partial("./templates/home/home.hbs");
   }
}