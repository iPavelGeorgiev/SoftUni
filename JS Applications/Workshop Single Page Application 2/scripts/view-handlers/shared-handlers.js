import Info from "../helpers/get-info.js";
import Fetch from "../helpers/requester.js";

export function redirectHome(ctx) {
   ctx.redirect("#/home");
}

export function getHome(ctx) {
   Info.getStorageInfo(ctx);

   const partials = Info.getPartials();
   partials["guest"] = "./templates/home/guest.hbs";
   partials["withEvents"] = "./templates/home/auth-with-events.hbs";
   partials["withoutEvents"] = "./templates/home/auth-without-events.hbs";

   if (ctx.loggedIn) {
      Fetch.get("appdata", "events")
         .then(events => {
            ctx.event = events;

            this.loadPartials(partials)
               .partial("./templates/home/home.hbs");
         });
   } else {
      this.loadPartials(partials)
         .partial("./templates/home/home.hbs");
   }
}