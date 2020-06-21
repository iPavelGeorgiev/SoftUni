import * as sharedHandlers from "./view-handlers/shared-handlers.js";
import * as authHandlers from "./view-handlers/auth-handlers.js";
import * as unauthHandlers from "./view-handlers/unauth-handlers.js";

(function () {
   const app = Sammy("#rooter", function () {
      this.use('Handlebars', 'hbs');

      // Default
      this.get("/", sharedHandlers.redirectHome);

      this.get("index.html", sharedHandlers.redirectHome);

      // Shared Controllers
      this.get("#/home", sharedHandlers.getHome);

      // Unauthenticated User Controllers
      this.get("#/login", unauthHandlers.getLogin);
      this.post("#/login", unauthHandlers.postLogin);

      this.get("#/register", unauthHandlers.getRegister);
      this.post("#/register", unauthHandlers.postRegister);

      // Authenticated User Controllers
      this.get("#/logout", authHandlers.getLogout);

      this.get("#/organize", authHandlers.getOrganize);
      this.post("#/organize", authHandlers.postOrganize);

      this.get("#/details/:id", authHandlers.getEventDetails);

      this.get("#/edit/:id", authHandlers.getEdit);
      this.post("#/edit/:id", authHandlers.postEdit);

      this.get("#/delete/:id", authHandlers.deletePost);
      
      this.get("#/join/:id", authHandlers.joinEvent);

      this.get("#/profile", authHandlers.getProfile);
   })

   app.run();
}())