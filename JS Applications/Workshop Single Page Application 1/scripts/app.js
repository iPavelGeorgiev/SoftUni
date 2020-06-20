import * as sharedHandlers from "./view-handlers/shared-handlers.js";
import * as authHandlers from "./view-handlers/auth-handlers.js";
import * as unauthHandlers from "./view-handlers/unauth-handlers.js";

(function () {
   const app = Sammy("#rooter", function () {
      this.use('Handlebars', 'hbs');

      // Default Controllers
      this.get("/", sharedHandlers.redirectHome);

      this.get("index.html", sharedHandlers.redirectHome);

      // Shared Controllers
      this.get("#/home", sharedHandlers.getHome);

      // Unauthenticated User Controllers
      this.get("#/register", unauthHandlers.getRegister);
      this.post("#/register", unauthHandlers.postRegister);

      this.get("#/login", unauthHandlers.getLogin);
      this.post("#/login", unauthHandlers.postLogin);
      
      // Authenticated User Controllers
      this.get("#/logout", authHandlers.getLogout);

      this.get("#/share", authHandlers.getShareRecipe);
      this.post("#/share", authHandlers.postShareRecipe);

      this.get("#/recipe/:id", authHandlers.getRecipeDetails);

      this.get("#/delete/:id", authHandlers.deleteRecipe);

      this.get("#/edit/:id", authHandlers.getEdit);
      this.post("#/edit/:id", authHandlers.postEdit);

      this.get("#/like/:id", authHandlers.likeRecipe);
   })

   app.run();
}());