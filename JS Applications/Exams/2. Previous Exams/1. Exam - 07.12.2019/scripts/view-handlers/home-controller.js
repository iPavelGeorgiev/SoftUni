import Info from "../helpers/get-info.js";
import Fetch from "../helpers/requester.js";

export function redirectHome(ctx) {
   ctx.redirect("#/home");
}

export function getHome(ctx) {
   Info.getStorageInfo(ctx);

   const partials = Info.getPartials();
   partials["guest"] = "./templates/home/guest.hbs";
   partials["withTreks"] = "./templates/home/with-treks.hbs";
   partials["withoutTreks"] = "./templates/home/without-treks.hbs";

   if (ctx.loggedIn) {
      Fetch.get("appdata", "treks")
         .then(treks => {
            ctx.treks = treks;

            this.loadPartials(partials)
               .partial("./templates/home/home.hbs");
         });
   } else {
      this.loadPartials(partials)
         .partial("./templates/home/home.hbs");
   }
}