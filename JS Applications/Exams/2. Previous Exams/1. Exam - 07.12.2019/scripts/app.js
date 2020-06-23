import * as homeControllers from "./view-handlers/home-controller.js";
import * as userControllers from "./view-handlers/user-controller.js";
import * as otherControllers from "./view-handlers/other-controller.js";

(function () {
   const app = Sammy("#rooter", function () {
      this.use('Handlebars', 'hbs');

      this.get("/", homeControllers.redirectHome);
      this.get("index.html", homeControllers.redirectHome);
      this.get("#/home", homeControllers.getHome);

      this.get("#/register", userControllers.getRegister);
      this.post("#/register", userControllers.postRegister);
      this.get("#/login", userControllers.getLogin);
      this.post("#/login", userControllers.postLogin);
      this.get("#/logout", userControllers.getLogout);
      this.get("#/profile", userControllers.getProfile);

      this.get("#/request", otherControllers.getRequest);
      this.post("#/request", otherControllers.postRequest);
      this.get("#/details/:id", otherControllers.getDetails);
      this.get("#/edit/:id", otherControllers.getEdit);
      this.get("#/delete/:id", otherControllers.getDelete);
      this.get("#/like/:id", otherControllers.likeTrek);
   })

   app.run();
}())